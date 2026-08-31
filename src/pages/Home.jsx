import { useContext, useState } from "react";
import { Music2, Play, Pause, SkipBack, SkipForward, Volume2, LogOut, Search, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState(new Set());

  // Sample songs data
  const songs = [
    {
      id: 1,
      title: "Sunset Dreams",
      artist: "The Wanderers",
      duration: "3:45",
      cover: "🎵"
    },
    {
      id: 2,
      title: "Digital Hearts",
      artist: "Neon Lights",
      duration: "4:12",
      cover: "🎶"
    },
    {
      id: 3,
      title: "Echoes in Time",
      artist: "Cosmic Journey",
      duration: "3:58",
      cover: "🎼"
    },
    {
      id: 4,
      title: "Urban Rhythm",
      artist: "City Beats",
      duration: "3:30",
      cover: "🎤"
    },
    {
      id: 5,
      title: "Midnight Blues",
      artist: "Soul Searcher",
      duration: "4:05",
      cover: "🎸"
    },
    {
      id: 6,
      title: "Electric Sunrise",
      artist: "Neon Lights",
      duration: "3:52",
      cover: "⚡"
    }
  ];

  const currentSong = songs[currentSongIndex];

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const toggleLike = (songId) => {
    const newLiked = new Set(liked);
    if (newLiked.has(songId)) {
      newLiked.delete(songId);
    } else {
      newLiked.add(songId);
    }
    setLiked(newLiked);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/[0.03] backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center">
              <Music2 size={24} />
            </div>
            <h1 className="text-2xl font-bold">Music<span className="text-violet-400">Hub</span></h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search songs or artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2 outline-none text-sm focus:border-violet-500 placeholder:text-gray-600"
            />
          </div>

          {/* User Info */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name || user?.username}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/[0.08] rounded-lg transition"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Now Playing & Player */}
          <div className="lg:col-span-2">
            {/* Now Playing Card */}
            <div className="bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/10 border border-white/10 rounded-3xl p-8 mb-8">
              <h2 className="text-sm font-medium text-gray-400 mb-4">NOW PLAYING</h2>

              <div className="flex flex-col items-center mb-8">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-6 text-7xl shadow-2xl shadow-violet-600/30 transform transition" style={{ transform: isPlaying ? 'scale(1.02)' : 'scale(1)' }}>
                  {currentSong.cover}
                </div>

                <h3 className="text-3xl font-bold text-center mb-2">{currentSong.title}</h3>
                <p className="text-lg text-gray-400">{currentSong.artist}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full h-1 bg-white/10 rounded-full mb-2">
                  <div className="w-1/3 h-1 bg-violet-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1:15</span>
                  <span>{currentSong.duration}</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePreviousSong}
                  className="p-3 hover:bg-white/10 rounded-full transition"
                >
                  <SkipBack size={24} />
                </button>

                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 rounded-full bg-violet-600 hover:bg-violet-500 flex items-center justify-center transition shadow-lg shadow-violet-600/30"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                </button>

                <button
                  onClick={handleNextSong}
                  className="p-3 hover:bg-white/10 rounded-full transition"
                >
                  <SkipForward size={24} />
                </button>

                <button className="ml-auto p-3 hover:bg-white/10 rounded-full transition">
                  <Volume2 size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Playlist</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  onClick={() => handleSongClick(index)}
                  className={`p-3 rounded-lg cursor-pointer transition ${index === currentSongIndex
                      ? "bg-violet-600/30 border border-violet-500"
                      : "hover:bg-white/[0.08] border border-transparent"
                    }`}
                >
                  <p className="font-medium text-sm">{song.title}</p>
                  <p className="text-xs text-gray-500">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Songs Grid */}
        {searchTerm && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  onClick={() => handleSongClick(songs.indexOf(song))}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-violet-500 transition cursor-pointer group"
                >
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 text-6xl group-hover:shadow-xl shadow-violet-600/20 transition text-4xl">
                    {song.cover}
                  </div>

                  <h3 className="font-bold text-lg mb-1">{song.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{song.artist}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(song.id);
                      }}
                      className="flex-1 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition flex items-center justify-center gap-2"
                    >
                      <Heart
                        size={18}
                        className={liked.has(song.id) ? "text-red-500 fill-red-500" : ""}
                      />
                    </button>
                    <button className="flex-1 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition flex items-center justify-center gap-2">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Songs */}
        {!searchTerm && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Tracks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {songs.map((song) => (
                <div
                  key={song.id}
                  onClick={() => handleSongClick(songs.indexOf(song))}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-violet-500 transition cursor-pointer group"
                >
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 text-6xl group-hover:shadow-xl shadow-violet-600/20 transition">
                    {song.cover}
                  </div>

                  <h3 className="font-bold text-lg mb-1">{song.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{song.artist}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(song.id);
                      }}
                      className="flex-1 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition flex items-center justify-center gap-2"
                    >
                      <Heart
                        size={18}
                        className={liked.has(song.id) ? "text-red-500 fill-red-500" : ""}
                      />
                    </button>
                    <button className="flex-1 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition flex items-center justify-center gap-2">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;