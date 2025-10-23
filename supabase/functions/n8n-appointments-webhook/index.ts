import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role key for database access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse incoming webhook data from n8n
    const appointmentsData = await req.json();
    console.log('Received appointments:', appointmentsData);

    // Delete all existing appointments
    const { error: deleteError } = await supabase
      .from('appointments')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows

    if (deleteError) {
      console.error('Error deleting old appointments:', deleteError);
      throw deleteError;
    }

    // Transform and insert new appointments
    const appointmentsArray = Object.values(appointmentsData).map((apt: any) => ({
      day: apt.day,
      hour: apt.hour,
      duration: apt.duration,
      summary: apt.summary,
    }));

    if (appointmentsArray.length > 0) {
      const { error: insertError } = await supabase
        .from('appointments')
        .insert(appointmentsArray);

      if (insertError) {
        console.error('Error inserting appointments:', insertError);
        throw insertError;
      }
    }

    console.log(`Successfully synced ${appointmentsArray.length} appointments`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        count: appointmentsArray.length,
        message: 'Appointments synced successfully' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in n8n-appointments-webhook:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
