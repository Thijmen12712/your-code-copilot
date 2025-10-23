-- Create appointments table for n8n webhook integration
CREATE TABLE public.appointments (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day date NOT NULL,
  hour integer NOT NULL,
  duration integer NOT NULL,
  summary text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Public read access for appointments (everyone can see the calendar)
CREATE POLICY "Anyone can view appointments"
ON public.appointments
FOR SELECT
USING (true);

-- Only service role can insert/update/delete (via edge function)
CREATE POLICY "Service role can manage appointments"
ON public.appointments
FOR ALL
USING (auth.role() = 'service_role');

-- Add trigger for updated_at
CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_google_calendar_tokens_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.appointments;