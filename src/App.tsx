import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ExternalLink, Code2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold gradient-text">Nasir</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize font-medium hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize font-medium text-gray-700 hover:text-blue-600 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Nasir Uddin</h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">Flutter Developer</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Passionate Flutter developer with expertise in building scalable mobile applications using Clean Architecture and modern state management patterns. Specialized in creating responsive UIs, integrating RESTful APIs, and implementing real-time features.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/3954?v=4"
                    alt="Nasir Uddin"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                  <p className="text-lg font-semibold">Mobile Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a Junior Flutter Developer with a passion for building beautiful, high-performance mobile applications. With experience in Clean Architecture, MVVM design patterns, and state management solutions like Provider and Riverpod, I create scalable and maintainable code.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                My journey in app development has equipped me with skills in API integration, real-time communication, and responsive UI design. I'm committed to delivering production-ready features while adhering to industry best practices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Quick Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📱 Experience: Nov 2025 – May 2026</li>
                  <li>🎓 Education: BS Physics (2018-2022)</li>
                  <li>📍 Location: Bansree, Dhaka, Bangladesh</li>
                  <li>🏢 Current: Junior Flutter Developer at Softvence Delta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="card-hover bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Dart</li>
                <li>✓ C/C++</li>
              </ul>
            </div>

            {/* Development */}
            <div className="card-hover bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Development</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Flutter Widgets</li>
                <li>✓ Provider & Riverpod</li>
                <li>✓ Responsive UI</li>
                <li>✓ Sqflite & SharedPreference</li>
                <li>✓ WebSocket & LiveKit</li>
                <li>✓ MVVM & Clean Architecture</li>
                <li>✓ API Integration</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="card-hover bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Tools</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ VS Code</li>
                <li>✓ Android Studio</li>
                <li>✓ Postman & Insomnia</li>
                <li>✓ Git/GitHub</li>
                <li>✓ Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Professional Experience</h2>

          <div className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Junior Flutter Developer</h3>
                <p className="text-blue-600 font-semibold">Softvence Delta</p>
              </div>
              <p className="text-gray-600 font-semibold mt-2 md:mt-0">Nov 2025 – May 2026</p>
            </div>

            <p className="text-gray-600 mb-4">Bansree, Dhaka, Bangladesh</p>

            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Developed scalable mobile applications using Flutter with Clean Architecture and MVVM design patterns</li>
              <li>Built and managed complex application state using Provider and Riverpod for efficient, reactive state management</li>
              <li>Integrated RESTful APIs using Dio with interceptors and advanced error handling</li>
              <li>Contributed to community-driven applications with real-time chat, audio, and video calling features</li>
              <li>Collaborated with cross-functional teams using Git and GitHub for version control and code reviews</li>
              <li>Delivered production-ready features adhering to industry best practices and coding standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <div className="text-white text-4xl">🧘</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ayni Wellness</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Personalized spiritual practices and self-reflection tool with AI-generated assessments for emotional and spiritual wellness.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    Live Link <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-white text-4xl">🎮</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Panic Attack Game Timer</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Frantic word-building party game with real-time sabotage mechanics. Transforms your phone into the center of action.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    Live Link <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl">🎓</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Acting Academy App</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Comprehensive learning ecosystem with OTP authentication, course management, video playback, and real-time community features.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    GitHub Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-white text-4xl">🍔</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Food LTDS App</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Modular food ordering app with Clean Architecture, dynamic theme system, and optimized networking with Dio.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    GitHub Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <div className="text-white text-4xl">🔗</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AntiLure App</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Security app with advanced link analysis, QR code scanning, threat level system, and offline functionality.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    GitHub Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="card-hover bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-4xl">🎵</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sound Zero Audio App</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Premium audio library with 40-50 high-quality files, seamless looping, one-time purchase system, and minimalist player.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                    GitHub Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to discuss how I can help with your next Flutter project.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:nasiruddin3954@gmail.com" className="text-blue-600 hover:text-blue-800">
                      nasiruddin3954@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+8801869639444" className="text-blue-600 hover:text-blue-800">
                      +88 01869 639444
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Bansree, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg">🔗</span>
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                ></textarea>
                <button className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2026 Nasir Uddin. All rights reserved.</p>
          <p className="text-gray-400">Flutter Developer | Building Beautiful Mobile Apps</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
