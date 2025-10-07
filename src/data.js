



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
  // ===================== CORE BACKEND =====================
  { id: 1,  gambar: Tools20, nama: "Java",        ket: "Language", dad: "100" },
  { id: 2,  gambar: Tools22, nama: "Spring Boot", ket: "Framework", dad: "200" },
  { id: 3,  gambar: Tools23, nama: "Python",      ket: "Language", dad: "300" },
  { id: 4,  gambar: Tools29, nama: "FastAPI",     ket: "Framework", dad: "400" },
  { id: 5,  gambar: Tools17, nama: "PHP",         ket: "Language", dad: "500" },
  { id: 6,  gambar: Tools30, nama: "Laravel",     ket: "Framework", dad: "600" },

  // ===================== FRONTEND =====================
  { id: 7,  gambar: Tools2,  nama: "React JS",    ket: "Framework", dad: "700" },
  { id: 8,  gambar: Tools6,  nama: "JavaScript",  ket: "Language", dad: "800" },

  // ===================== DATABASES =====================
  { id: 9,  gambar: Tools19, nama: "MySQL",       ket: "Database", dad: "900" },
  { id: 10, gambar: Tools31, nama: "Oracle 19c",  ket: "Database", dad: "1000" },

  // ===================== DEVOPS & TOOLS =====================
  { id: 11, gambar: Tools26, nama: "Docker",      ket: "Platform", dad: "1100" },
  { id: 12, gambar: Tools8,  nama: "GitHub",      ket: "Repository", dad: "1200" },

  // ===================== AI & AUTOMATION =====================
  { id: 13, gambar: Tools25, nama: "Crew AI",     ket: "AI Tool", dad: "1300" },
  { id: 14, gambar: Tools24, nama: "n8n",         ket: "Automation", dad: "1400" },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek44 from "/assets/proyek/proyek44.jpg";
import Proyek55 from "/assets/proyek/proyek55.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";
import Proyek66 from "/assets/proyek/proyek66.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "School Evaluation Platform",
    subtitle: "Collaborative microservices web app for course and teacher evaluation...",
    fullDescription:"School Evaluation Platform is a collaborative web application built with a microservices architecture, enabling seamless evaluation of courses and teachers by students. It supports three user roles—Admin, Student, and Teacher—providing role-specific functionalities for managing evaluations, tracking performance, and ensuring transparent feedback across the educational institution.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/OUMIF/School-Evaluation-Platform-Microservices",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "TourismIA",
    subtitle: "AI-powered web app for personalized travel itineraries in Morocco...",
    fullDescription:"Tourism-IA-Planner.An AI-powered web application that generates personalized travel itineraries in Morocco. Built with React.js, FastAPI, and OpenAI, it optimizes routes, budgets, and activities based on user preferences, offering an interactive dashboard, real-time recommendations, and smart itinerary management.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Tourism-IA-Planner/Tourism-IA-Planner",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "XPLOR",
    subtitle: "Web app for managing children's activity registrations...",
    fullDescription: "Xplore is a full-stack web platform built for a personal development company to manage children's activity registrations. It enables parents to register their children for workshops (coding, AI, robotics, etc.) with flexible subscription plans. The system automates scheduling, pricing, and notifications, while providing dedicated dashboards for admins, parents, and instructors — ensuring efficient management of activities, payments, and planning.",
    borderColor: "#9DBE99", 
    gradient: "linear-gradient(145deg, #E8F0E8, #000)", // Dégradé de verts très pâles
    url: "https://github.com/KenzaAEK/app_pedagogique_XPLOR",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek44,
    title: "CrewAI Database Automation",
    subtitle: "Multi-agent system for automated database management...",
    fullDescription: "CrewAI Database Automation is a multi-agent AI system that automates complex database management workflows. The project features specialized AI agents working collaboratively to handle web scraping, Oracle database operations, SQL script generation, and performance optimization. This intelligent system delivers automated, scalable database solutions while significantly reducing manual work and human error.",
    borderColor: "#af3067ff",
    gradient: "linear-gradient(180deg, #8c5858ff, #823a3aff)",
    url: "https://github.com/OUMIF/CrewAI-Database-Automation",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek55,
    title: "n8n Ai Medical chatbot ",
    subtitle: "Local AI conversational agent workflow with PostgreSQL & PGVector...",
    fullDescription: "n8n AI Medical Chatbot is a privacy-focused conversational agent running entirely on local infrastructure. Built with Ollama for natural language processing and PostgreSQL with PGVector for semantic memory, it delivers context-aware medical responses through intelligent embeddings. This self-hosted solution combines n8n workflow automation with local AI models to create a secure medical assistant prototype that understands patient queries while keeping all data on-premise.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/OUMIF/n8n_ia_chatbot",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek66, // Remplace par ton import d'image
    title: "Spring Boot WebSocket Chat App",
    subtitle: "Real-time chat platform with WebSocket, STOMP, and JWT security...",
    fullDescription: "Spring Boot WebSocket Chat App is a secure real-time messaging platform built with Spring Boot, WebSocket (STOMP/SockJS), and JWT-based authentication. It enables instant communication, user presence notifications, and supports multiple concurrent users through reliable and scalable WebSocket connections. ",
    borderColor: "#187918ff",
    gradient: "linear-gradient(145deg, #126e09ff, #000)",
    url: "https://github.com/OUMIF/Spring_Security_Chat_Platform",
    dad: "300",
  }

];
