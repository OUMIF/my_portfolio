import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;
import Tools1  from "/assets/tools/vscode.png";      
import Tools2  from "/assets/tools/reactjs.png";    
import Tools5  from "/assets/tools/bootstrap.png";  
import Tools6  from "/assets/tools/js.png";         
import Tools7  from "/assets/tools/nodejs.png";     
import Tools8  from "/assets/tools/github.png";     
import Tools14 from "/assets/tools/html.png";       
import Tools15 from "/assets/tools/css.png";        
import Tools17 from "/assets/tools/php.png";        
import Tools19 from "/assets/tools/mysql.png";      
import Tools20 from "/assets/tools/Java.png";       
import Tools21 from "/assets/tools/intelij.png";   
import Tools22 from "/assets/tools/springboot.png";
import Tools23 from "/assets/tools/Python.png";    
import Tools24 from "/assets/tools/N8n.png";        
import Tools25 from "/assets/tools/crew.png";       
import Tools26 from "/assets/tools/docker.png";     
import Tools27 from "/assets/tools/C.png";          
import Tools28 from "/assets/tools/Csharp.png";     
import Tools29 from "/assets/tools/fastApi.png";    
import Tools30 from "/assets/tools/Laravel.png";    
import Tools31 from "/assets/tools/oracle19c.png";  
import Tools32 from "/assets/tools/powerAmc.png";  


// ===================== LIST TOOLS =====================
// ===================== LIST TOOLS =====================
export const listTools = [
  // ===================== LANGUAGES =====================
  { id: 1,  gambar: Tools6,  nama: "JavaScript",  ket: "Language", dad: "100" },
  { id: 2,  gambar: Tools20, nama: "Java",        ket: "Language", dad: "200" },
  { id: 3,  gambar: Tools23, nama: "Python",      ket: "Language", dad: "300" },
  { id: 4,  gambar: Tools17, nama: "PHP",         ket: "Language", dad: "400" },
  { id: 5,  gambar: Tools14, nama: "HTML",        ket: "Language", dad: "500" },
  { id: 6,  gambar: Tools15, nama: "CSS",         ket: "Language", dad: "600" },
  { id: 7, gambar: Tools27, nama: "C", ket: "Language", dad: "700" },
  { id: 8, gambar: Tools28, nama: "C#", ket: "Language", dad: "800" },

  // ===================== FRAMEWORKS / LIBRARIES =====================
  { id: 9,  gambar: Tools2,  nama: "React JS",    ket: "Framework", dad: "900" },
  { id: 10, gambar: Tools5,  nama: "Bootstrap",   ket: "Framework", dad: "1000" },
  { id: 11, gambar: Tools7,  nama: "Node JS",     ket: "Javascript Runtime", dad: "1100" },
  { id: 12, gambar: Tools22, nama: "Spring Boot", ket: "Framework", dad: "1200" },
  { id: 13, gambar: Tools30, nama: "Laravel", ket: "Framework", dad: "1300" },
  { id: 14, gambar: Tools29, nama: "FastAPI", ket: "Framework", dad: "1400" },

  // ===================== TOOLS / PLATFORMS =====================
  { id: 15, gambar: Tools1,  nama: "Visual Studio Code", ket: "Code Editor", dad: "1500" },
  { id: 16, gambar: Tools21, nama: "IntelliJ IDEA",     ket: "Code Editor", dad: "1600" },
  { id: 17, gambar: Tools8,  nama: "GitHub",            ket: "Repository", dad: "1700" },
  { id: 18, gambar: Tools26, nama: "Docker",            ket: "Platform",   dad: "1800" },
  { id: 19, gambar: Tools32, nama: "PowerAMC",          ket: "Tool",       dad: "1900" },

  // ===================== DATABASES =====================
  { id: 20, gambar: Tools19, nama: "MySQL",      ket: "Database", dad: "2000" },
  { id: 21, gambar: Tools31, nama: "Oracle 19c", ket: "Database", dad: "2100" },

  // ===================== AI & AUTOMATION =====================
  { id: 22, gambar: Tools25, nama: "Crew AI", ket: "AI Tool",   dad: "2200" },
  { id: 23, gambar: Tools24, nama: "n8n",     ket: "Automation", dad: "2300" },
];


import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "AIS Detection App",
    subtitle: "A mobile application powered by Artificial Intelligence...",
    fullDescription:"A mobile application powered by Artificial Intelligence and Machine Learning, developed to assist in the early detection of Adolescent Idiopathic Scoliosis (AIS). By analyzing patient data and patterns, the app provides predictions that can help doctors and patients take preventive measures. This project demonstrates the role of AI in modern healthcare by improving accuracy, accessibility, and efficiency in medical diagnosis.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "IoT Air Quality Monitoring",
    subtitle: "A smart IoT system designed to measure and analyze air quality...",
    fullDescription:"A smart IoT system designed to measure and analyze air quality using sensors connected to a mobile application. The app provides real-time updates on air quality levels, empowering users to make healthier lifestyle decisions based on environmental conditions. This project showcases the potential of IoT in addressing environmental and public health issues.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription:"An IoT-based healthcare project developed to measure and monitor heart rate in real-time. The system connects sensors to a local web server, enabling users and healthcare providers to track data directly from a web interface. This project highlights the integration of hardware and software to create efficient medical solutions that can be applied in local clinics or personal health monitoring.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription:"A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];
