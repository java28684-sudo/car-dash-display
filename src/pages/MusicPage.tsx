import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Search, Heart, Shuffle, Repeat } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';

const MusicPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playlist = [
    { id: 1, title: "Midnight Drive", artist: "Electric Dreams", duration: "3:45", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
    { id: 2, title: "Neon Highways", artist: "Synthwave Studio", duration: "4:12", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
    { id: 3, title: "City Lights", artist: "Urban Sounds", duration: "3:28", albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop" },
    { id: 4, title: "Digital Dreams", artist: "Future Beats", duration: "4:01", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
    { id: 5, title: "Racing Heart", artist: "Velocity", duration: "3:33", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
  ];

  const featuredPlaylists = [
    { id: 1, name: "Road Trip Vibes", tracks: 25, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" },
    { id: 2, name: "Night Drive", tracks: 18, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop" },
    { id: 3, name: "Electronic Essentials", tracks: 32, cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      
      <main className="pt-16 pl-20 p-6">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground glow-text">Music</h1>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search songs, artists..."
                className="pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Current Playing - Left Side */}
            <div className="col-span-4">
              <div className="glass-card p-6 rounded-xl mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Now Playing</h2>
                
                {/* Album Art */}
                <div className="relative mb-6">
                  <img
                    src={playlist[currentSong].albumArt}
                    alt={playlist[currentSong].title}
                    className="w-full aspect-square object-cover rounded-lg animate-glow-pulse"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
                </div>

                {/* Song Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{playlist[currentSong].title}</h3>
                  <p className="text-automotive-blue font-medium">{playlist[currentSong].artist}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-accent rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1:23</span>
                    <span>{playlist[currentSong].duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <button className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Shuffle className="w-5 h-5 text-muted-foreground" />
                  </button>
                  
                  <button 
                    onClick={() => setCurrentSong(Math.max(0, currentSong - 1))}
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <SkipBack className="w-6 h-6 text-muted-foreground" />
                  </button>
                  
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-accent-foreground" />
                    ) : (
                      <Play className="w-8 h-8 text-accent-foreground ml-1" />
                    )}
                  </button>
                  
                  <button 
                    onClick={() => setCurrentSong(Math.min(playlist.length - 1, currentSong + 1))}
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <SkipForward className="w-6 h-6 text-muted-foreground" />
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Repeat className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Volume */}
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Featured Playlists */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Featured Playlists</h3>
                <div className="space-y-3">
                  {featuredPlaylists.map((playlist) => (
                    <div key={playlist.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                      <img
                        src={playlist.cover}
                        alt={playlist.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{playlist.name}</p>
                        <p className="text-sm text-muted-foreground">{playlist.tracks} tracks</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Playlist - Right Side */}
            <div className="col-span-8">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Current Playlist</h2>
                  <button className="btn-automotive">
                    <Heart className="w-4 h-4 mr-2" />
                    Save Playlist
                  </button>
                </div>

                <div className="space-y-2">
                  {playlist.map((song, index) => (
                    <div
                      key={song.id}
                      onClick={() => setCurrentSong(index)}
                      className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentSong
                          ? 'bg-accent/20 border border-accent/50'
                          : 'hover:bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center justify-center w-8">
                        {index === currentSong && isPlaying ? (
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-accent animate-pulse"></div>
                            <div className="w-1 h-4 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-4 bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">{index + 1}</span>
                        )}
                      </div>
                      
                      <img
                        src={song.albumArt}
                        alt={song.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <p className={`font-medium ${index === currentSong ? 'text-accent' : 'text-foreground'}`}>
                          {song.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{song.artist}</p>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {song.duration}
                      </div>
                      
                      <button className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                        <Play className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MusicPage;