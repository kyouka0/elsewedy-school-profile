import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Radio,
  Brain,
  Cpu,
  Terminal,
  Monitor,
  Binary,
  BookOpen,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
  Code,
  Layers,
  Wrench,
  Award
} from 'lucide-react';
import Reveal from './common/Reveal';

export default function SubjectsSection({ onShowToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSubjectModal, setActiveSubjectModal] = useState(null);

  const subjects = [
    {
      id: 'web',
      name: 'Web Development',
      arabicName: 'تطوير تطبيقات الويب المتكاملة',
      category: 'software',
      categoryLabel: 'Software & Web',
      color: '#DA1B1B',
      icon: <Globe size={24} />,
      grade: 'Year 1 & 2',
      hours: '6 Hours / Week (4 Lab + 2 Theory)',
      badge: 'Full-Stack Track',
      summary: 'Building high-performance, modern web applications from responsive frontend interfaces to secure RESTful backend APIs and databases.',
      topics: [
        'HTML5 Semantic Markup & Modern CSS3 Flexbox/Grid',
        'JavaScript (ES6+) & Asynchronous Programming (Promises/Async-Await)',
        'React.js Component Architecture, Hooks & State Management',
        'Node.js & Express RESTful API Development',
        'Relational Databases with PostgreSQL & SQL Queries',
        'Responsive Design, CSS Frameworks & Web Accessibility'
      ],
      tools: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'Git'],
      practicalLabs: [
        'Full-stack school portal with dynamic student dashboard',
        'E-commerce prototype with interactive cart & API authentication',
        'Real-time industrial telemetry web interface'
      ]
    },
    {
      id: 'flutter',
      name: 'Flutter & Mobile Development',
      arabicName: 'تطوير تطبيقات الهاتف المحمول',
      category: 'software',
      categoryLabel: 'Software & Web',
      color: '#0284C7',
      icon: <Smartphone size={24} />,
      grade: 'Year 2 & 3',
      hours: '6 Hours / Week (4 Lab + 2 Theory)',
      badge: 'Cross-Platform Mobile',
      summary: 'Architecting cross-platform native iOS and Android mobile apps using Google Flutter and Dart with reactive UI and cloud integration.',
      topics: [
        'Dart Object-Oriented Programming (OOP) & Asynchronous Streams',
        'Flutter Widget Hierarchy & Custom UI Component Building',
        'State Management with Provider, Bloc & Riverpod',
        'REST API Integration, JSON Parsing & Offline Caching',
        'Device Hardware Access (Camera, GPS, Bluetooth Sensors)',
        'Mobile App Deployment & APK/Bundle Compilation'
      ],
      tools: ['Flutter', 'Dart', 'Android Studio', 'VS Code', 'Firebase', 'REST APIs', 'Postman'],
      practicalLabs: [
        'Elsewedy Smart Campus companion mobile app for students',
        'Smart electricity meter monitor app with Bluetooth connectivity',
        'Peer tutoring mobile platform with real-time push notifications'
      ]
    },
    {
      id: 'iot',
      name: 'IoT & Smart Systems',
      arabicName: 'إنترنت الأشياء والأنظمة الذكية',
      category: 'embedded',
      categoryLabel: 'Hardware & IoT',
      color: '#16A34A',
      icon: <Radio size={24} />,
      grade: 'Year 2 & 3',
      hours: '5 Hours / Week (3 Lab + 2 Theory)',
      badge: 'Connected Hardware',
      summary: 'Designing connected smart devices, sensor telemetry nodes, cloud communication protocols, and industrial automation networks.',
      topics: [
        'ESP32 & NodeMCU Microcontroller Architecture',
        'MQTT & HTTP IoT Communication Protocols',
        'Industrial Telemetry & Sensor Interfacing (Temperature, Current, Gas, Motion)',
        'Cloud IoT Dashboards (Adafruit IO, ThingsBoard, AWS IoT)',
        'Low-Power Wireless Networks (Wi-Fi, Bluetooth LE, LoRaWAN)',
        'Smart Factory Automation Standards at Elsewedy Electrometer'
      ],
      tools: ['ESP32', 'NodeMCU', 'MQTT', 'C/C++', 'ThingsBoard', 'Adafruit IO', 'Wi-Fi/BLE'],
      practicalLabs: [
        'Classroom air quality & environmental telemetry station',
        'Smart energy metering unit with MQTT cloud dashboard',
        'Automated factory security perimeter alert system'
      ]
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving & Algorithms',
      arabicName: 'حل المشكلات والبرمجة التنافسية',
      category: 'theory',
      categoryLabel: 'Computer Science',
      color: '#9333EA',
      icon: <Brain size={24} />,
      grade: 'Year 1, 2 & 3',
      hours: '4 Hours / Week (Competitive Sparring)',
      badge: 'ICPC Elite Coached',
      summary: 'Rigorous algorithmic thinking, data structures, and computational optimization coached for competitive programming and ICPC collegiate standards.',
      topics: [
        'Time & Space Complexity Analysis (Big-O Notation)',
        'C++ Standard Template Library (STL: Vectors, Maps, Sets, Queues)',
        'Binary Search, Two-Pointers & Prefix Sum Techniques',
        'Graph Theory Algorithms (BFS, DFS, Dijkstra, Shortest Path)',
        'Dynamic Programming & Memoization Strategies',
        'Greedy Algorithms, Sorting & Combinatorics'
      ],
      tools: ['C++', 'Codeforces', 'LeetCode', 'CSES Problem Set', 'GNU GCC', 'GDB Debugger'],
      practicalLabs: [
        'Weekly high-speed competitive programming sparring contests',
        'Algorithmic simulation of industrial queue scheduling',
        'Preparation for Egyptian Olympiad in Informatics (EOI)'
      ]
    },
    {
      id: 'arduino',
      name: 'Arduino Uno & Microcontrollers',
      arabicName: 'أردوينو أونو وهندسة الدوائر الإلكترونية',
      category: 'embedded',
      categoryLabel: 'Hardware & IoT',
      color: '#D97706',
      icon: <Cpu size={24} />,
      grade: 'Year 1 & 2',
      hours: '5 Hours / Week (4 Lab + 1 Theory)',
      badge: 'Fab Lab Electronics',
      summary: 'Hands-on electronic circuits, digital logic, microcontroller architecture, breadboarding, and physical computing actuator control.',
      topics: [
        'Arduino Uno (ATmega328P) Hardware Architecture',
        'Digital & Analog I/O Signals, PWM Modulation & Timers',
        'Sensor Interfacing: Ultrasonic, Infrared, DHT11, Light (LDR)',
        'Actuators: DC Motors, Stepper Motors, Servos, Relays & Buzzers',
        'I2C & SPI Serial Communication Protocols & LCD Displays',
        'Circuit Schematics, PCB Prototyping & Soldering Techniques'
      ],
      tools: ['Arduino Uno', 'Arduino IDE', 'Tinkercad', 'Fritzing', 'Oscilloscopes', 'Multimeters'],
      practicalLabs: [
        'Autonomous line-tracking & obstacle-avoiding robotic vehicle',
        'Automated greenhouse moisture control & irrigation system',
        'Digital access keypad door lock with servo motor mechanism'
      ]
    },
    {
      id: 'os',
      name: 'Operating Systems & Linux',
      arabicName: 'أنظمة التشغيل وهندسة لينكس',
      category: 'theory',
      categoryLabel: 'Computer Science',
      color: '#2563EB',
      icon: <Terminal size={24} />,
      grade: 'Year 2 & 3',
      hours: '4 Hours / Week (2 Lab + 2 Theory)',
      badge: 'Systems Infrastructure',
      summary: 'Fundamental operating system internals, memory management, process concurrency, and professional Linux system administration.',
      topics: [
        'OS Architecture: Kernel vs User Space, System Calls',
        'Linux Command Line Mastery & Bash Shell Scripting',
        'Processes, Threads, Context Switching & Concurrency',
        'CPU Scheduling Algorithms (Round Robin, Priority, FCFS)',
        'Memory Hierarchy, Paging, Virtual Memory & Deadlocks',
        'File System Permissions, Daemons & Docker Containerization'
      ],
      tools: ['Ubuntu Linux', 'Bash', 'Docker', 'Linux Kernel', 'Systemd', 'Git', 'POSIX C'],
      practicalLabs: [
        'Custom automated Linux backup and monitoring daemon script',
        'Multi-threaded C program simulating process race conditions',
        'Containerized multi-service deployment with Docker Compose'
      ]
    },
    {
      id: 'desktop',
      name: 'Desktop App Development',
      arabicName: 'تطوير برمجيات سطح المكتب',
      category: 'software',
      categoryLabel: 'Software & Web',
      color: '#0D9488',
      icon: <Monitor size={24} />,
      grade: 'Year 2 & 3',
      hours: '4 Hours / Week (3 Lab + 1 Theory)',
      badge: 'Client Applications',
      summary: 'Engineering resilient standalone desktop software with graphical interfaces, offline relational storage, and industrial peripheral connectivity.',
      topics: [
        'Object-Oriented Programming (OOP) Design Patterns',
        'Graphical User Interface (GUI) Frameworks (C# .NET / PyQt / Tkinter)',
        'Event-Driven Programming & UI Thread Responsiveness',
        'Embedded SQLite Database Integration & Local Data Storage',
        'Serial Port Communication with USB Hardware & Microcontrollers',
        'Application Packaging, Installers & Windows Deployment'
      ],
      tools: ['C# .NET', 'Python (PyQt/Tkinter)', 'SQLite', 'Visual Studio', 'Inno Setup', 'Git'],
      practicalLabs: [
        'Laboratory equipment inventory & asset calibration desktop suite',
        'Factory testing desktop GUI with serial port telemetry plotting',
        'Student grade calculation and report generation application'
      ]
    },
    {
      id: 'discrete-math',
      name: 'Discrete Mathematics',
      arabicName: 'الرياضيات المتقطعة والمنطق الحاسوبي',
      category: 'theory',
      categoryLabel: 'Computer Science',
      color: '#E11D48',
      icon: <Binary size={24} />,
      grade: 'Year 1',
      hours: '4 Hours / Week (Theory & Applied Problem Sets)',
      badge: 'Theoretical Foundation',
      summary: 'Mathematical foundations of computational science, formal logic, set theory, boolean algebra, graph models, and algorithm proof techniques.',
      topics: [
        'Propositional & Predicate Logic, Truth Tables & Logical Equivalences',
        'Set Theory, Relations, Functions & Equivalence Classes',
        'Boolean Algebra & Digital Logic Circuit Simplification',
        'Graph Theory Fundamentals: Trees, Eulerian Paths, Isomorphism',
        'Combinatorics: Permutations, Combinations & Pigeonhole Principle',
        'Modular Arithmetic & Cryptographic Foundations (RSA/Hashing)'
      ],
      tools: ['Mathematical Proofs', 'Logic Gate Simulators', 'LaTeX', 'Python SymPy', 'Graphviz'],
      practicalLabs: [
        'Simplifying digital logic circuits using Karnaugh maps',
        'Algorithmic implementation of graph traversal with Python',
        'Cryptographic prime generation and modular cipher encryption'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Subjects (8)' },
    { id: 'software', label: 'Software & Mobile (3)' },
    { id: 'embedded', label: 'Embedded Systems & IoT (2)' },
    { id: 'theory', label: 'Computer Science Core (3)' }
  ];

  const filteredSubjects = subjects.filter((s) => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.arabicName.includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.topics.some((t) => t.toLowerCase().includes(q)) ||
      s.tools.some((tl) => tl.toLowerCase().includes(q));

    return matchesCat && matchesQuery;
  });

  return (
    <section id="subjects" style={{ padding: '95px 0', backgroundColor: '#F8F9FA' }}>
      <div className="container">
        {/* Section Title */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--primary-red)',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px'
              }}
            >
              <BookOpen size={16} />
              <span>Academic Curriculum & Engineering Disciplines &bull; المواد الدراسية</span>
            </div>
            <h2>What Our Students Learn</h2>
            <p>
              Explore the core computer science, software engineering, embedded electronics, and theoretical modules taught across our 3-year international curriculum.
            </p>
          </div>
        </Reveal>

        {/* Filter & Live Search Bar */}
        <Reveal effect="fade-up" delay={100}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '36px',
              padding: '16px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
            }}
          >
            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`tab-btn ${selectedCategory === c.id ? 'active' : ''}`}
                  style={{
                    fontSize: '13.5px',
                    padding: '8px 16px',
                    transform: selectedCategory === c.id ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search
                size={16}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }}
              />
              <input
                type="text"
                placeholder="Search Flutter, IoT, Python, Math..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sewedy-input"
                style={{ paddingLeft: '36px', height: '42px', fontSize: '13.5px', borderRadius: 'var(--radius-full)' }}
              />
            </div>
          </div>
        </Reveal>

        {/* 8 Subjects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredSubjects.map((subject, idx) => (
            <Reveal key={subject.id} effect="fade-up" delay={(idx % 4) * 80}>
              <div
                onClick={() => setActiveSubjectModal(subject)}
                className="sewedy-card card-interactive"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  borderTop: `4px solid ${subject.color}`,
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Badge & Grade Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      backgroundColor: `${subject.color}15`,
                      color: subject.color,
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {subject.badge}
                  </span>
                  <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>
                    {subject.grade}
                  </span>
                </div>

                {/* Icon & Subject Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: `${subject.color}15`,
                      color: subject.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {subject.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', lineHeight: 1.25 }}>
                      {subject.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#6B7280', direction: 'rtl', textAlign: 'left', marginTop: '2px' }}>
                      {subject.arabicName}
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>
                  {subject.summary}
                </p>

                {/* Key Tools Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {subject.tools.slice(0, 4).map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 600
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {subject.tools.length > 4 && (
                    <span
                      style={{
                        backgroundColor: `${subject.color}10`,
                        color: subject.color,
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 700
                      }}
                    >
                      +{subject.tools.length - 4} more
                    </span>
                  )}
                </div>

                {/* Footer Weekly Hours & View Syllabus */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid #F3F4F6',
                    fontSize: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6B7280' }}>
                    <Clock size={13} color="#9CA3AF" />
                    <span>{subject.hours.split('(')[0]}</span>
                  </div>
                  <span style={{ color: subject.color, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>View Syllabus &rarr;</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Detailed Subject Syllabus Modal */}
        {activeSubjectModal && (
          <div className="modal-backdrop" onClick={() => setActiveSubjectModal(null)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
              {/* Modal Header */}
              <div
                style={{
                  padding: '24px 28px',
                  backgroundColor: activeSubjectModal.color,
                  color: '#FFFFFF',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    {activeSubjectModal.icon}
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}
                    >
                      {activeSubjectModal.badge} &bull; {activeSubjectModal.grade}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '4px', color: '#FFFFFF' }}>
                      {activeSubjectModal.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSubjectModal(null)}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7, marginBottom: '22px' }}>
                  {activeSubjectModal.summary}
                </p>

                {/* Weekly Load */}
                <div
                  style={{
                    padding: '10px 14px',
                    backgroundColor: '#F9FAFB',
                    borderLeft: `3px solid ${activeSubjectModal.color}`,
                    borderRadius: '4px',
                    fontSize: '13px',
                    color: '#4B5563',
                    marginBottom: '22px'
                  }}
                >
                  <strong>Instructional Allocation: </strong>
                  {activeSubjectModal.hours}
                </div>

                {/* Core Topics Covered */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#111827', marginBottom: '10px' }}>
                    Curriculum Syllabus & Core Competencies:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeSubjectModal.topics.map((topic, tIdx) => (
                      <div key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#374151' }}>
                        <CheckCircle2 size={16} color={activeSubjectModal.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Labs & Deliverables */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#111827', marginBottom: '10px' }}>
                    Hands-on Engineering Labs & Student Capstones:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {activeSubjectModal.practicalLabs.map((lab, lIdx) => (
                      <div
                        key={lIdx}
                        style={{
                          padding: '10px 14px',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '8px',
                          fontSize: '13px',
                          color: '#1F2937',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <Wrench size={14} color={activeSubjectModal.color} />
                        <span>{lab}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Tech Mastered */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#6B7280', marginBottom: '8px' }}>
                    Software Stacks & Hardware Utilized:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeSubjectModal.tools.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: `${activeSubjectModal.color}15`,
                          color: activeSubjectModal.color,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 700
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '14px', borderTop: '1px solid #E5E7EB' }}>
                  <button
                    onClick={() => setActiveSubjectModal(null)}
                    className="sewedy-btn"
                    style={{
                      backgroundColor: '#111827',
                      color: '#FFFFFF',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      fontSize: '13.5px'
                    }}
                  >
                    Close Syllabus
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
