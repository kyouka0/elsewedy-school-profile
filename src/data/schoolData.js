export const schoolInfo = {
  name: "El Sewedy International School",
  arabicName: "مدرسة السويدي الدولية للتكنولوجيا التطبيقية والبرمجيات",
  subTitle: "For Applied Technology and Software",
  tagline: "The best choice for your future in technology",
  established: 2022,
  founder: {
    name: "Eng. Emad Zaki El Sewedy",
    role: "Founder of El Sewedy IATS & Chairman of Elsewedy Electrometer",
    avatar: "/assets/emad-BskvJU8R.png",
    quote: "The vision behind founding this school was to create an educational ecosystem that fosters critical thinking, technological mastery, and personal leadership. We empower students with genuine engineering experience from day one, preparing them to build the future of software and smart systems in Egypt and globally."
  },
  overview: "El Sewedy International School for Applied Technology and Software, established in 2022 in partnership with the Ministry of Education & Technical Education and El Sewedy Electrometer, is ranked among Egypt's top ten international schools for applied technology. We provide a rigorous 3-year dual-education track combining British Pearson BTEC standards, international technical curricula, and hands-on industrial immersion.",
  contact: {
    email: "elsewedy.iats@gmail.com",
    phone: "+20 1289007669",
    whatsapp: "+201289007669",
    address: "6th of October City, Giza Governorate, Egypt",
    googleMapsUrl: "https://maps.app.goo.gl/dLjqLdGRW1b5zdKMA",
    hours: "Sunday - Thursday: 8:00 AM - 3:30 PM",
    linkedin: "https://www.linkedin.com/company/el-sewedy-iats",
    facebook: "https://www.facebook.com/profile.php?id=100083837165938"
  },
  stats: [
    { count: 60, suffix: "+", label: "Capstone Projects / Year", desc: "Production-ready solutions developed by our students", color: "#DA1B1B" },
    { count: 300, suffix: "+", label: "Selected Students", desc: "Top tech talent chosen from thousands of applicants", color: "#1A1A1A" },
    { count: 2, suffix: "", label: "Accredited Tracks", desc: "Information Systems & Electronic Systems", color: "#DA1B1B" },
    { count: 100, suffix: "%", label: "Hiring the Top Students", desc: "Direct employment opportunities at Elsewedy Electrometer factories", color: "#16A34A" }
  ],
  whyUs: [
    "Dual Diploma: Internationally accredited technical certificate + Egyptian Tech Baccalaureate.",
    "100% Industry Exposure: Direct practical rotations at Elsewedy Electrometer factories and laboratories.",
    "Free Engineering Kit: Every accepted student receives a high-performance laptop and professional uniform.",
    "Small Interactive Classrooms: Capped at a maximum of 25 students for personalized mentorship.",
    "English-First Technical Environment: Curricula and projects conducted in English for global employability.",
    "Annual Capstone Projects: Every student designs, builds, and defends an end-to-end engineering solution each year.",
    "Career Development Center (CDC): Direct recruitment pipeline, CV coaching, and corporate summer internships.",
    "Peer Helping Program (PHP): Robust student-led academic tutoring and psychological well-being network.",
    "Competitive Coding Hub: Training under world-class coaches for the International Collegiate Programming Contest (ICPC).",
    "Extracurricular Excellence: Competitive sports leagues, modern Fab Lab, digital art studio, and performing drama."
  ]
};

export const specializationsDetailed = [
  {
    id: "software",
    title: "Computer Science & Software Programming",
    shortTitle: "Computer Science (CS)",
    badge: "Computer Science Track",
    color: "#DA1B1B",
    icon: "Code",
    description: "Equipping students to design, architect, and deploy resilient digital platforms. Covers full-stack web and mobile development, database engineering, cloud deployment, and cybersecurity defense.",
    years: [
      {
        year: "Year 1 (Junior)",
        focus: "Foundations & Programming",
        modules: ["Logic and OS", "Testing", "C++", "Python"]
      },
      {
        year: "Year 2 (Wheeler)",
        focus: "Software Engineering & Architecture",
        modules: ["Problem Solving", "Desktop App", "Web MVC"]
      },
      {
        year: "Year 3 (Senior)",
        focus: "Advanced Systems, Mobile & IoT",
        modules: ["Flutter and Web API", "Multimedia", "Embedded System", "IoT"]
      }
    ],
    tools: ["C++", "Python", "Desktop App Frameworks", "Web MVC", "Flutter", "Web API", "Embedded Systems", "IoT"],
    careerPaths: ["Full-Stack Software Engineer", "Mobile App Developer (Flutter)", "Systems & Embedded Engineer", "Quality Assurance & Test Engineer", "IoT Solutions Developer"]
  },
  {
    id: "integrated",
    title: "Electronic Systems (Hardware & Embedded IoT)",
    shortTitle: "Electronic Systems (ES)",
    badge: "Electronics & IoT Track",
    color: "#0284C7",
    icon: "Cpu",
    description: "Bridging the gap between software code and physical machines. Students learn microcontroller architecture, sensor telemetries, industrial automation, and PCB fabrication.",
    years: [
      {
        year: "Year 1 (Junior)",
        focus: "Electrical & Hardware Fundamentals",
        modules: ["Circuit Theory & Electronics 101", "C / C++ for Embedded Systems", "Digital Logic & Microprocessor Architecture", "Sensors, Actuators & Signal Processing"]
      },
      {
        year: "Year 2 (Wheeler)",
        focus: "Microcontrollers & Network Telemetry",
        modules: ["ESP32 & ARM Cortex Programming", "IoT Networking Protocols (MQTT, CoAP, LoRa)", "PCB Design with KiCAD & Soldering", "RTOS (Real-Time Operating Systems)"]
      },
      {
        year: "Year 3 (Senior)",
        focus: "Industrial Automation & Smart Grids",
        modules: ["Smart Metering & Grid Telemetry", "Industrial PLC & SCADA Systems", "Annual Hardware Capstone Project", "Factory Rotations at Elsewedy Electrometer"]
      }
    ],
    tools: ["Embedded C/C++", "ESP32", "STM32", "KiCAD", "MQTT", "Arduino", "Oscilloscopes", "Logic Analyzers"],
    careerPaths: ["Embedded Firmware Engineer", "IoT Systems Developer", "Smart Grid Technologist", "Hardware Automation Specialist", "Robotics System Integrator"]
  }
];

export const facilitiesDetailed = [
  {
    id: "fablab",
    category: "Engineering Labs",
    title: "State-of-the-Art Fab Lab",
    image: "/assets/fab-7LbmoGhK.jpg",
    description: "Certified digital fabrication laboratory equipped with industrial 3D printers, laser cutters, precision CNC PCB mills, and electronics soldering stations.",
    specs: ["12x FDM & SLA 3D Printers", "100W CO2 Laser Cutters", "SMD Soldering & Rework Stations", "Oscilloscopes & Spectrum Analyzers"],
    access: "Open daily for Capstone teams and student maker projects"
  },
  {
    id: "art",
    category: "Creative Arts",
    title: "Creative Arts & Design Studio",
    image: "/assets/art-CgYz4bEv.jpg",
    description: "Dedicated artistic space where students learn digital illustration, UI/UX aesthetics, color theory, fine painting, and host annual exhibitions.",
    specs: ["Wacom Graphic Tablets", "Easel & Painting Workbenches", "Sculpting Materials", "Exhibition Gallery Wall"],
    access: "Weekly classes + Annual School Art Expo"
  },
  {
    id: "music",
    category: "Creative Arts",
    title: "Music Academy",
    image: "/assets/music-Bg2ZH8P5.jpg",
    description: "Nurturing auditory discipline and collaborative performance through instruments, classical voice training, music theory, and seasonal concerts.",
    specs: ["Digital Pianos & Keyboards", "Acoustic & Electric Guitars", "Percussion & Violins", "Soundproof Acoustic Studio"],
    access: "Instrumental lessons & School Orchestra rehearsal"
  },
  {
    id: "drama",
    category: "Performing Arts",
    title: "Drama & Theater Studio",
    image: "/assets/drama-bO7prIYq.jpg",
    description: "Empowering students with public speaking mastery, storytelling confidence, theatrical performance, scriptwriting, and media presentation.",
    specs: ["Modular Stage & Lighting Rig", "Wireless Lapel Microphones", "Studio Camera Setup", "Scriptwriting Room"],
    access: "Bi-weekly workshops & Annual Stage Production"
  },
  {
    id: "sports",
    category: "Athletics",
    title: "Sports Hub & Courts",
    image: "/assets/sports-hub.jpg",
    description: "Promoting physical fitness, resilience, and team spirit through official school soccer leagues, basketball championships, volleyball, and table tennis.",
    specs: ["FIFA-Standard Turf Soccer Pitch", "Multi-Sport Indoor Court", "Professional Ping Pong Tables", "Certified Athletic Coaching Staff"],
    access: "Physical education & Inter-school tournament training"
  },
  {
    id: "cdc",
    category: "Career & Leadership",
    title: "Career Development Center (CDC)",
    image: "/assets/cdc-team.jpg",
    description: "Guiding students towards high-value tech careers through resume writing bootcamps, mock corporate interviews, and direct industrial training placements.",
    specs: ["1-on-1 Career Mentorship", "Interview Simulation Room", "Corporate Job Fairs", "Alumni Networking Portal"],
    access: "Dedicated support for Wheeler & Senior students"
  },
  {
    id: "php",
    category: "Student Support",
    title: "Peer Helping Program (PHP)",
    image: "/assets/php-team.jpg",
    description: "A student-led academic tutoring and social-emotional peer support initiative fostering empathy, community resilience, and smooth orientation.",
    specs: ["Student Tutoring Pods", "Mental Well-being Circles", "Junior Welcome Orientation", "Anti-Bullying Ambassador Network"],
    access: "Available to all students throughout the school year"
  },
  {
    id: "entrepreneurship",
    category: "Career & Leadership",
    title: "3-Year Entrepreneurship Track",
    image: "/assets/entrepreneurship-lecture.jpg",
    description: "A structured business incubation program guiding student Capstone teams to file patents, incorporate startups, and pitch before investors.",
    specs: ["Business Model Canvas Coaching", "Investor Pitch Days", "IP & Patent Counseling", "Seed Grant Acceleration Fund"],
    access: "Integrated throughout the 3-year academic journey"
  }
];

export const specialMoments = [
  {
    id: "jill-biden-visit",
    title: "Official Visit by U.S. First Lady Dr. Jill Biden",
    date: "2023",
    category: "Distinguished Guest",
    image: "/assets/sp1-CSvWRXMX.jpg",
    quote: "The skills and dedication of these young students reflect the immense potential of Egyptian youth and the strength of international educational partnerships.",
    description: "During her official visit to Egypt, U.S. First Lady Dr. Jill Biden toured the Sewedy International Applied Technology and Software School. She inspected student software and IoT prototypes, admired their engineering fluency in English, and commended the USAID Workforce Egypt collaboration with Elsewedy.",
    highlights: ["International Relations", "Student Prototypes Showcase", "USAID Partnership", "Youth Empowerment"]
  },
  {
    id: "icpc-competition",
    title: "Launch of El Sewedy ICPC Problem-Solving Tournament",
    date: "2025",
    category: "Championship",
    image: "/assets/sp2-Dxwf3Dj4.jpg",
    quote: "Elsewedy IATS students demonstrated computational reasoning on par with collegiate computer science seniors.",
    description: "The grand launch of the first edition of the Elsewedy CPC Problem-Solving Competition, attended by Coach Mohamed Abdel Wahab (one of the top 50 competitive programmers in the world). Over 40 student squads competed in solving high-difficulty algorithmic challenges.",
    highlights: ["Top 50 World Coach Attendance", "Algorithmic Excellence", "Global Recognition", "High-Intensity Coding"]
  }
];

export const admissionsInfo = {
  eligibilityThreshold: 220,
  maxTotalScore: 280,
  maxAge: 18,
  requirements: [
    { title: "Middle School Certificate (Prep)", detail: "Issued in current or previous academic year (Egyptian Prep Certificate or certified equivalent)." },
    { title: "Minimum Academic Score", detail: "Minimum score of 220 / 280 degrees in the preparatory certificate." },
    { title: "Age Requirement", detail: "Applicant must not exceed 18 years of age by October 1st of the application year." },
    { title: "Universal Open Access", detail: "Open to students from Egyptian public schools, experimental language schools, and private/international schools." }
  ],
  steps: [
    { step: "01", title: "Ministry Portal Application", desc: "Submit the official online application via the Egyptian Ministry of Education (MoETE) portal." },
    { step: "02", title: "Aptitude & English Examination", desc: "Sit for the school entrance exam evaluating English language, mathematics, and logical reasoning." },
    { step: "03", title: "Personal Panel Interview", desc: "Demonstrate curiosity, technological passion, team mindset, and communication skills before the admissions committee." },
    { step: "04", title: "Medical Check & Laptop Handover", desc: "Complete medical fitness screening, followed by official uniform fitting and engineering laptop handover on enrollment." }
  ]
};

export const partners = [
  { name: "El Sewedy Electrometer", role: "Founding Industrial Partner", logo: "/assets/sewedylogo-C9dflkPy.png" },
  { name: "Ministry of Education & Technical Education", role: "Accreditation & Governance", logo: "/assets/wzara-BW5q8-PG.png" },
  { name: "USAID / Workforce Egypt", role: "Curriculum & Quality Standards", logo: "/assets/sewedy2-CIwMyAxc.png" }
];

export const testimonials = [
  {
    name: "Eng. Tarek El-Kady",
    role: "Senior Engineering Manager, Elsewedy Electrometer",
    quote: "When Elsewedy IATS interns join our smart metering and firmware divisions, they already write clean C++ and understand hardware protocols better than most university graduates. It's a genuine leap forward for Egyptian industry."
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Technical Education Advisor, USAID Egypt",
    quote: "El Sewedy International School represents the gold standard of public-private dual education. The combination of BTEC curricula, modern Fab Labs, and English fluency produces students ready for international technology careers."
  },
  {
    name: "Mohamed Hany",
    role: "Senior Student & 2025 Capstone Award Winner",
    quote: "Here, we don't just study theory for exams. We build smart solar grids, program drones in the Fab Lab, and solve algorithmic challenges. Having our own laptop and working with Elsewedy engineers changed my life."
  }
];
