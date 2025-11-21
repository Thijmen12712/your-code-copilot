import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Play, Pause } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AudioTestSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().catch((error) => {
            console.error('Error playing audio:', error);
            toast({
              title: 'Error',
              description: 'Kan de audio niet afspelen. Probeer het opnieuw.',
              variant: 'destructive',
            });
          });
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error toggling audio:', error);
        toast({
          title: 'Error',
          description: 'Er is een fout opgetreden. Probeer het opnieuw.',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className='space-y-8'>
      <Card className='max-w-4xl mx-auto p-12 md:p-16 space-y-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white'>
        <div className='text-center space-y-4'>
          <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-4'>
            <Volume2 className='w-10 h-10 text-blue-400' />
          </div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Hoor Onze <span className='font-bold text-blue-400'>AI Stem</span>
          </h2>
          <p className='text-lg text-slate-300'>
            Luister naar onze AI stem
          </p>
        </div>

        <div className='flex justify-center items-center gap-1 h-24'>
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-blue-400 animate-pulse' : 'bg-blue-600/40'
              }`}
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        <audio
          ref={audioRef}
          src="/audio/AIVoiceTest.MP3"
          className="hidden"
          preload="metadata"
          onError={(e) => {
            console.error('Error loading audio:', e);
            toast({
              title: 'Error',
              description: 'Kan het audiobestand niet laden. Controleer of het bestand bestaat.',
              variant: 'destructive',
            });
          }}
        />

        <div className='flex flex-col items-center gap-4'>
          <Button
            size='lg'
            variant='secondary'
            className='gap-2 bg-blue-600 hover:bg-blue-500 text-white border-blue-500'
            onClick={togglePlayback}
          >
            {isPlaying ? (
              <>
                <Pause className='w-5 h-5' />
                Pauzeer Audio
              </>
            ) : (
              <>
                <Play className='w-5 h-5' />
                Speel Audio Af
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AudioTestSection;
