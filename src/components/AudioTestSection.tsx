import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Play, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AudioTestSection = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
        const url = URL.createObjectURL(file);
        setAudioUrl(url);
        toast({
          title: "Audio Uploaded",
          description: "Je audio sample is klaar om af te spelen!",
        });
      } else {
        toast({
          title: "Invalid File",
          description: "Upload een geldig audio bestand.",
          variant: "destructive",
        });
      }
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="space-y-8">
      <Card className="max-w-4xl mx-auto p-12 md:p-16 space-y-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-4">
            <Volume2 className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Hoor Onze <span className="font-bold text-blue-400">AI Stem</span>
          </h2>
          <p className="text-lg text-slate-300">
            Upload een audio sample om te laten horen
          </p>
        </div>

        {/* Waveform Visualization */}
        <div className="flex justify-center items-center gap-1 h-24">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isPlaying
                  ? 'bg-blue-400 animate-pulse'
                  : 'bg-blue-600/40'
              }`}
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Audio Player */}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={handleAudioEnd}
            className="hidden"
          />
        )}

        {/* Control Button */}
        <div className="flex flex-col items-center gap-4">
          {!audioFile ? (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-slate-700 hover:bg-slate-600 text-white border-slate-600"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-5 h-5" />
                Geen Audio Beschikbaar
              </Button>
            </>
          ) : (
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-blue-600 hover:bg-blue-500 text-white border-blue-500"
              onClick={togglePlayback}
            >
              <Play className="w-5 h-5" />
              {isPlaying ? 'Audio Afspelen...' : 'Speel Audio Af'}
            </Button>
          )}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm text-slate-400">
          Bel het nummer hierboven om live met de AI te praten!
        </p>
      </Card>
    </div>
  );
};

export default AudioTestSection;
