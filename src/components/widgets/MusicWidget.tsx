import { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  currentTime: number;
}

const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({
    title: "Midnight Drive",
    artist: "Electric Dreams",
    album: "Neon Nights",
    albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    duration: 240,
    currentTime: 45
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSong(prev => ({
          ...prev,
          currentTime: prev.currentTime >= prev.duration ? 0 : prev.currentTime + 1
        }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentSong.currentTime / currentSong.duration) * 100;

  return (
    <div className="widget-card p-6 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Now Playing</h3>
        <Volume2 className="w-5 h-5 text-accent" />
      </div>

      <div className="flex items-center space-x-4 mb-4">
        {/* Album Art */}
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted animate-glow-pulse">
          <img 
            src={currentSong.albumArt} 
            alt={currentSong.album}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">
            {currentSong.title}
          </h4>
          <p className="text-sm text-muted-foreground truncate">
            {currentSong.artist}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {currentSong.album}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{formatTime(currentSong.currentTime)}</span>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors">
          <SkipBack className="w-4 h-4 text-muted-foreground" />
        </button>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-accent-foreground" />
          ) : (
            <Play className="w-5 h-5 text-accent-foreground ml-0.5" />
          )}
        </button>
        
        <button className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors">
          <SkipForward className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default MusicWidget;