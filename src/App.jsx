import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Moon, Sun, Download, 
  Code, Database, Terminal, Layers, 
  User, GraduationCap, Send, Menu, X 
} from 'lucide-react';

// --- DATA ---
const portfolioData = {
  name: "Rohith Perisetti",
  role: "Web Developer",
  email: "rohithperisetti4@gmail.com", // Mee Email ikkada undali
  
  resume: "/resume.pdf", 

  social: {
    linkedin: "https://www.linkedin.com/in/rohith-perisetti",
    github: "https://github.com/rohith-518",
    gfg: "https://auth.geeksforgeeks.org/user/rohithperisetti4"
  },

  projects: [
    {
      title: "E-Commerce Website",
      img: "/ecommerce.png",
      desc: "Responsive e-commerce site with product listings and cart.",
      tags: ["React", "Redux"],
      live: "https://commerce-project.netlify.app/",
      code: "https://github.com/rohith-518"
    },
    {
      title: "Weather Website",
      img: "/weather.png",
      desc: "Live weather forecast app using OpenWeatherMap API.",
      tags: ["API", "JS"],
      live: "https://rohith-518.github.io/Weather_website/",
      code: "https://github.com/rohith-518"
    },
    {
      title: "Food Delivery UI",
      img: "/food.png",
      desc: "Responsive food delivery interface with category filters.",
      tags: ["UI/UX", "CSS"],
      live: "https://rohith-518.github.io/Food_Delivery_website/",
      code: "https://github.com/rohith-518"
    },
  ],
  
  education: {
    degree: "B.Tech - CSE",
    college: "DMS SVH College of Engineering",
    loc: "Machilipatnam, AP"
  },
  
  aboutText: "Web Developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React. Built real-world projects like E-Commerce & Weather Apps. Solved 150+ DSA problems on GeeksforGeeks.",
  
  skillCategories: [
    { title: "Frontend", icon: <Code size={24} />, skills: ["HTML", "CSS", "JS", "React", "Tailwind", "Bootstrap"], color: "from-blue-400 to-cyan-300" },
    { title: "Backend", icon: <Database size={24} />, skills: ["Node.js", "Express", "MongoDB", "MySQL"], color: "from-green-400 to-emerald-300" },
    { title: "Programming", icon: <Terminal size={24} />, skills: ["Java", "C", "OOPS", "DSA"], color: "from-orange-400 to-red-300" },
    { title: "Tools", icon: <Layers size={24} />, skills: ["VS Code", "IntelliJ", "Git", "GitHub"], color: "from-purple-400 to-pink-300" }
  ],
  
  achievements: [
    "Solved 150+ Problems on GFG",
    "105-Day Streak on GFG POTD",
    "Web Dev Course (Udemy)",
    "TCS ION Certification"
  ]
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 backdrop-blur-xl border-b transition-colors duration-500 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Rohith.dev
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-medium hover:text-blue-500 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full shadow-lg ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-900'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-900'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 cursor-pointer">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className={`md:hidden overflow-hidden border-b ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`}>
              <div className="flex flex-col p-6 gap-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-lg font-medium hover:text-blue-500 py-2 cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-screen relative overflow-hidden">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${darkMode ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
        
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative w-48 h-48 mb-8">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-clip-padding p-1 bg-gradient-to-tr from-blue-500 to-purple-600">
             <img src="/profile.jpg" alt="Profile" className="w-full h-full rounded-full object-cover bg-slate-800" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
             <div className="hidden w-full h-full bg-slate-800 items-center justify-center"><User size={60} /></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-lg font-medium text-blue-500 mb-2 uppercase">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{portfolioData.name}</h1>
          <p className={`text-2xl font-medium mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{portfolioData.role}</p>
          
          <div className="flex gap-4 justify-center mb-10">
            <a 
              href={portfolioData.resume} 
              download="Rohith_Resume.pdf"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Download size={20}/> Download CV
            </a>
            
            {/* UPDATED: MAILTO LINK */}
            <a 
              href={`mailto:${portfolioData.email}`} 
              className={`px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105 cursor-pointer flex items-center ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              Contact Info
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink href={portfolioData.social.linkedin} icon={<Linkedin size={24} />} darkMode={darkMode} />
            <SocialLink href={portfolioData.social.github} icon={<Github size={24} />} darkMode={darkMode} />
            <SocialLink href={portfolioData.social.gfg} icon={<Code size={24} />} darkMode={darkMode} />
          </div>
        </motion.div>
      </section>

      {/* --- SECTIONS --- */}

      {/* ABOUT */}
      <section id="about" className={`py-20 px-6 scroll-mt-28 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Get To Know More</p>
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className={`p-8 rounded-3xl border text-center ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100 shadow-lg'}`}>
              <GraduationCap size={40} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="font-semibold text-lg">{portfolioData.education.degree}</p>
              <p className={`mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{portfolioData.education.college}</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className={`p-8 rounded-3xl border text-center ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100 shadow-lg'}`}>
              <User size={40} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{portfolioData.aboutText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.skillCategories.map((cat, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100 shadow-lg'}`}>
                <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${cat.color} text-white`}>{cat.icon}</div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">{cat.skills.map(s => <span key={s} className={`text-xs px-2 py-1 rounded border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50'}`}>{s}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`py-20 px-6 scroll-mt-28 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Projects & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {portfolioData.projects.map((project, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className={`rounded-2xl overflow-hidden border-2 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100 shadow-lg'}`}>
                <div className="h-48 bg-slate-800 relative">
                   <img src={project.img} alt={project.title} className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
                   <div className="hidden w-full h-full items-center justify-center"><Code size={40} /></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">{project.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded">{t}</span>)}</div>
                  <div className="flex gap-2">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm w-full text-center hover:bg-blue-700 transition">Live</a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-slate-600 rounded-lg text-sm w-full text-center hover:bg-slate-800 transition">GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={`p-8 rounded-3xl border border-blue-500/20 ${darkMode ? 'bg-slate-950' : 'bg-white shadow-lg'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Achievements</h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {portfolioData.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-4"><span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT (WITH YOUR KEY) */}
      <section id="contact" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
          <div className={`p-8 rounded-3xl border-2 text-left ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100 shadow-xl'}`}>
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              
              {/* --- ACCESS KEY --- */}
              <input type="hidden" name="access_key" value="7608933c-b02e-42ee-b15c-af2302feb105" />

              <div><label className="block text-sm font-medium mb-2 pl-1">Full Name</label><input type="text" name="name" required placeholder="Enter name" className={`w-full p-4 rounded-xl border-2 outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500'}`} /></div>
              <div><label className="block text-sm font-medium mb-2 pl-1">Email</label><input type="email" name="email" required placeholder="Enter email" className={`w-full p-4 rounded-xl border-2 outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500'}`} /></div>
              <div><label className="block text-sm font-medium mb-2 pl-1">Message</label><textarea name="message" required placeholder="Your message..." rows="4" className={`w-full p-4 rounded-xl border-2 outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500'}`}></textarea></div>
              <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"><Send size={20} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={`py-8 text-center text-sm border-t ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-600' : 'bg-white border-gray-200 text-gray-500'}`}>
        <p>© 2026 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

const SocialLink = ({ href, icon, darkMode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-800 hover:bg-blue-600 text-white' : 'bg-white shadow-md hover:bg-blue-500 hover:text-white text-slate-700'}`}>
    {icon}
  </a>
);

export default App;