import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, Youtube } from 'lucide-react'
import jokLogo from './assets/jok_logo.png'
import suliemanLogo from './assets/sulieman_logo.png'
import discordIcon from './assets/discord.webp'
import twitterIcon from './assets/twitter.png'
import kickIcon from './assets/kick.png'
import youtubeIcon from './assets/youtube.png'
import './App.css'

function App() {
  const [selectedStreamer, setSelectedStreamer] = useState(null)

  const streamers = {
    jok: {
      name: 'Jok',
      logo: jokLogo,
      bio: 'ستريمر محترف ومبدع في عالم البث المباشر',
      socials: [
        { name: 'Discord', url: 'https://discord.gg/jok', icon: discordIcon },
        { name: 'Twitter', url: 'https://x.com/joook_7?s=21', icon: twitterIcon },
        { name: 'Kick', url: 'https://kick.com/J1OK', icon: kickIcon },
      ]
    },
    sulieman: {
      name: 'Sulieman',
      logo: suliemanLogo,
      bio: 'ستريمر موهوب يقدم محتوى مميز ومسلي',
      socials: [
        { name: 'Kick', url: 'https://kick.com/su-k15', icon: kickIcon },
        { name: 'Twitter', url: 'https://x.com/su_k505?s=21', icon: twitterIcon },
        { name: 'Youtube', url: 'https://youtube.com/@su_k15?si=jcqX8vz0Jdo1X6FW', icon: youtubeIcon },
        { name: 'Discord', url: 'https://discord.gg/Fv476jp4Fj', icon: discordIcon },
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!selectedStreamer ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center p-8"
            >
              {/* Welcome Section */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-16"
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  مرحباً بك
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                  اكتشف عالم البث المباشر مع أفضل الستريمرز
                </p>
              </motion.div>

              {/* Streamers Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
                {Object.entries(streamers).map(([key, streamer], index) => (
                  <motion.div
                    key={key}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    onClick={() => setSelectedStreamer(key)}
                    className="cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                      <div className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/50"
                        >
                          <img 
                            src={streamer.logo} 
                            alt={streamer.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                          {streamer.name}
                        </h2>
                        <p className="text-gray-300 text-center text-lg">
                          {streamer.bio}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                          عرض الحسابات
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-20 text-center"
              >
                <p className="text-gray-400 text-sm">
                  Made by <span className="text-purple-400 font-semibold">Falco</span>
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center p-8"
            >
              {/* Back Button */}
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedStreamer(null)}
                className="absolute top-8 left-8 px-6 py-3 bg-purple-600/50 backdrop-blur-lg rounded-full font-semibold hover:bg-purple-600/70 transition-all duration-300"
              >
                ← العودة
              </motion.button>

              {/* Profile Section */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl w-full"
              >
                <div className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30 shadow-2xl">
                  {/* Profile Header */}
                  <div className="flex flex-col items-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-56 h-56 mb-8 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/50"
                    >
                      <img 
                        src={streamers[selectedStreamer].logo} 
                        alt={streamers[selectedStreamer].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {streamers[selectedStreamer].name}
                    </h2>
                    <p className="text-gray-300 text-xl text-center">
                      {streamers[selectedStreamer].bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-center mb-6 text-purple-300">
                      حسابات التواصل الاجتماعي
                    </h3>
                    {streamers[selectedStreamer].socials.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 p-2 flex items-center justify-center">
                          <img 
                            src={social.icon} 
                            alt={social.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-2xl font-semibold flex-1 text-right">
                          {social.name}
                        </span>
                        <svg 
                          className="w-6 h-6 text-purple-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-center"
              >
                <p className="text-gray-400 text-sm">
                  Made by <span className="text-purple-400 font-semibold">Falco</span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
