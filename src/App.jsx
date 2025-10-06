import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import TimeLine from "./components/Timeline/TimeLine";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody, Typography } from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Détection mobile optimisée
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Optimisé mobile */}
        <div className="hero grid md:grid-cols-2 items-center pt-6 sm:pt-10 gap-8 md:gap-6 xl:gap-0 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 flex flex-col">
              <ShinyText 
                text="Hi I'm EL ADNANI" 
                disabled={false} 
                speed={3}
                className='custom-class' 
              />
              <ShinyText 
                text="EL Mehdi" 
                disabled={false} 
                speed={3}
                className='custom-class mt-2' 
              />
            </h1>
            
            {isMobile ? (
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
                A Software Engineer and backend-focused application and web developer with a strong passion for AI research, dedicated to building high-performance, intelligent digital solutions that are both innovative and user-centric.
              </p>
            ) : (
              <BlurText
                text="A Software Engineer and backend-focused application and web developer with a strong passion for AI research, dedicated to building high-performance, intelligent digital solutions that are both innovative and user-centric."
                delay={150}
                animateBy="words"
                direction="top"
                className="mb-4 sm:mb-6 text-sm sm:text-base"
              />
            )}
            
            {/* Boutons CV - Stack mobile, row desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
              <a
                href="/assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-center text-sm sm:text-base"
              >
                <ShinyText text="Download CV (EN)" disabled={false} speed={3} className="custom-class whitespace-nowrap" />
              </a>

              <a
                href="/assets/cv_fr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-center text-sm sm:text-base"
              >
                <ShinyText text="CV (FR)" disabled={false} speed={3} className="custom-class whitespace-nowrap" />
              </a>
            </div>

            <a 
              href="#project" 
              className="font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors inline-block text-center text-sm sm:text-base w-full sm:w-auto"
            >
              <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
            </a>
          </div>
          
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-md mx-auto">
              <ProfileCard
                name="EL ADNANI EL"
                title="Software Engineer"
                contactText="Contact Me"
                avatarUrl="./assets/newLanyard.png"
                showUserInfo={true}
                enableTilt={!isMobile}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>
        </div>

        {/* About Section - Optimisé mobile */}
        <div 
          ref={aboutRef}
          className="mt-10 sm:mt-15 mx-auto w-full max-w-[1600px] rounded-2xl sm:rounded-3xl border-[3px] sm:border-[5px] border-violet-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] sm:shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-4 sm:p-6" 
          id="about"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 pt-0 px-4 sm:px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30 pb-6 md:pb-0">
              <div className="flex-1 text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">
                  About Me
                </h2>
                <div className="mb-6 sm:mb-10 space-y-4 sm:space-y-6">
                  {[
                    "El Mehdi El Adnani – Full-Stack Developer | Java • Spring • AI",
                    "Graduating Software Engineer bridging backend architecture and intelligent features. I build scalable microservices (backend & DevOps) and orchestrate AI agent workflows using CrewAI and n8n for intelligent automation.",
                    "My approach: Clean code, scalable design, and features that users actually love.",
                    "Open to opportunities where I can contribute to both technical excellence and product innovation."
                  ].map((paragraph, index) => (
                    isMobile ? (
                      <p 
                        key={index}
                        className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                        style={{ opacity: 1, visibility: 'visible' }}
                      >
                        {paragraph}
                      </p>
                    ) : (
                      <BlurText
                        key={index}
                        text={paragraph}
                        delay={150 + (index * 50)}
                        animateBy="words"
                        direction="top"
                        className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                      />
                    )
                  ))}
                </div>
                <ShinyText
                  text="From ideas to code, I make technology meaningful."
                  disabled={false}
                  speed={3}
                  className="text-xs sm:text-sm md:text-base text-violet-400"
                />
              </div>
            </div>
            
            <div className="basis-full md:basis-5/12 flex justify-center items-center w-full">
              <TimeLine />
            </div>
          </div>
        </div>

        {/* Tools Section - Optimisé mobile */}
        <div className="tools mt-16 sm:mt-32">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Tools & Technologies
          </h1>
          <p className="w-full sm:w-3/5 md:w-2/5 text-sm sm:text-base leading-relaxed opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Technologies I Work With
          </p>
          
          <div className="tools-box mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id} 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-delay={isMobile ? 0 : tool.dad} 
                data-aos-once="true"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300 flex-shrink-0"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${tool.gambar}`);
                    e.target.style.display = 'none';
                  }}
                />
                <div className="flex flex-col overflow-hidden min-w-0">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-base sm:text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section - Optimisé mobile */}
        <div className="proyek mt-16 sm:mt-32 py-6 sm:py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Projects
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-center opacity-50 px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            A collection of projects that reflect my learning journey, creativity, and passion for developing useful and engaging digital solutions.
          </p>
          
          <div className="proyek-box mt-8 sm:mt-14">
            <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={isMobile ? 0 : 400} data-aos-once="true">
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={isMobile ? 300 : 500}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>

        {/* Contact Section - Optimisé mobile */}
        <div className="kontak mt-16 sm:mt-32 p-0 sm:p-10" id="contact">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-sm sm:text-base leading-relaxed text-center mb-6 sm:mb-10 opacity-50 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me
          </p>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-800 p-6 sm:p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={isMobile ? 0 : 500}
                data-aos-once="true"
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm sm:text-base">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 sm:p-3 rounded-md bg-zinc-900 text-white text-base"
                      required
                      disabled={isLoading}
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 sm:p-3 rounded-md bg-zinc-900 text-white text-base"
                      required
                      disabled={isLoading}
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold text-sm sm:text-base">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={isMobile ? 5 : 7}
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 sm:p-3 rounded-md bg-zinc-900 text-white text-base resize-none"
                      required
                      disabled={isLoading}
                      style={{ fontSize: '16px' }}
                    ></textarea>
                  </div>

                  {status === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-green-500 p-3 rounded-md text-center text-sm sm:text-base">
                      Message sent successfully! ✓
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-md text-center text-sm sm:text-base">
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-4 sm:px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      <ShinyText 
                        text={isLoading ? 'Sending...' : 'Send'} 
                        disabled={isLoading} 
                        speed={3} 
                        className="custom-class" 
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Espacement bas pour mobile */}
        <div className="pb-8 sm:pb-0"></div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;