import React, { useState } from 'react';
import { Briefcase, Globe, Smartphone, Radio, BrainCircuit, Box, Palette, CheckCircle2, Send, Users } from 'lucide-react';
import Reveal from './common/Reveal';

export default function WorkServicesSection({ onShowToast }) {
  const [selectedService, setSelectedService] = useState('web');
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const services = [
    {
      id: 'web',
      name: 'Full-Stack Web Development',
      icon: <Globe size={20} />,
      badge: 'Information Systems',
      deliverables: ['Custom React / Next.js web application', 'REST / GraphQL secure API backend', 'PostgreSQL or MongoDB database', 'Cloud deployment (AWS / Docker)'],
      teamSize: 'Squad of 4 Senior Engineers + 1 Technical Lead Mentor'
    },
    {
      id: 'mobile',
      name: 'Mobile Applications (iOS & Android)',
      icon: <Smartphone size={20} />,
      badge: 'Information Systems',
      deliverables: ['Cross-platform Flutter build', 'State management & offline-first sync', 'Push notifications & cloud functions', 'App Store / Play Store bundle'],
      teamSize: 'Squad of 3 Mobile Engineers + 1 QA Specialist'
    },
    {
      id: 'iot',
      name: 'IoT & Smart Embedded Systems',
      icon: <Radio size={20} />,
      badge: 'Integrated Systems',
      deliverables: ['ESP32 / ARM firmware architecture', 'Custom PCB circuit schematic & layout', 'Sensor telemetry & MQTT broker bridge', 'Industrial prototype enclosure'],
      teamSize: 'Squad of 4 Hardware Engineers + Elsewedy Electrometer Mentor'
    },
    {
      id: 'ai',
      name: 'Computer Vision & AI Applications',
      icon: <BrainCircuit size={20} />,
      badge: 'Information Systems & AI',
      deliverables: ['Computer vision model training (OpenCV/PyTorch)', 'Inference microservice API container', 'Data preprocessing & augmentation pipeline', 'Model benchmarking & accuracy report'],
      teamSize: 'Squad of 3 Data & ML Engineers + Faculty Supervisor'
    },
    {
      id: 'fablab',
      name: 'Fab Lab Rapid 3D Prototyping',
      icon: <Box size={20} />,
      badge: 'Fab Lab Hub',
      deliverables: ['Parametric 3D CAD modeling (SolidWorks)', 'Precision SLA / FDM 3D printed parts', 'Laser-cut acrylic / sheet metal housings', 'Physical assembly & tolerance verification'],
      teamSize: 'Squad of 3 Maker Engineers + Fab Lab Technician'
    },
    {
      id: 'uiux',
      name: 'UI/UX & Product Design',
      icon: <Palette size={20} />,
      badge: 'Digital Design',
      deliverables: ['User journey maps & user research', 'Complete Figma design system & component library', 'Clickable interactive prototype', 'Production asset export & redlines'],
      teamSize: 'Squad of 2 UI/UX Designers + Front-End Lead'
    }
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Thank you ${formData.firstName}! Your project RFP for "${formData.companyName}" (${currentService.name}) has been received. Our Capstone office will contact you.`);
    setFormData({
      companyName: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectDetails: ''
    });
  };

  return (
    <section id="services" style={{ padding: '95px 0', backgroundColor: '#FAFAFA' }}>
      <div className="container">
        {/* Section Header */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>Work with El Sewedy IATS Students</h2>
            <p>
              Commission our student engineering squads to build commercial-grade software, AI platforms, IoT hardware, and rapid physical prototypes
            </p>
          </div>
        </Reveal>

        {/* Pitch Card from Production Site */}
        <Reveal effect="zoom-in" delay={100}>
          <div
            className="card-interactive"
            style={{
              maxWidth: '850px',
              margin: '0 auto 40px auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              padding: '36px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              textAlign: 'center'
            }}
          >
            <h3
              style={{
                color: 'var(--primary-red)',
                fontSize: '1.65rem',
                fontWeight: 800,
                marginBottom: '14px'
              }}
            >
              Looking for help with your project?
            </h3>
            <p
              style={{
                fontSize: '1.08rem',
                color: '#4B5563',
                lineHeight: 1.8
              }}
            >
              <strong>El Sewedy School</strong> offers companies, startups, and institutions the opportunity to collaborate with our students on various projects. Whether you need <strong>software development, web development, mobile app development, artificial intelligence, UI/UX design, or any other IT-related field</strong>, we're here to help.
            </p>
          </div>
        </Reveal>

        {/* Interactive Capstone Squad Configurator & RFP Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {/* Left: Service Selector & Squad Preview */}
          <Reveal effect="fade-right" delay={150}>
            <div
              className="sewedy-card card-interactive"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                padding: '32px',
                borderRadius: '16px',
                height: '100%'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '14px' }}>
                Select Technical Discipline:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: selectedService === srv.id ? '2px solid var(--primary-red)' : '1px solid #E5E7EB',
                      backgroundColor: selectedService === srv.id ? '#FFF5F5' : '#FFFFFF',
                      color: selectedService === srv.id ? 'var(--primary-red)' : '#374151',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '14px',
                      textAlign: 'left',
                      transform: selectedService === srv.id ? 'translateX(4px)' : 'none',
                      boxShadow: selectedService === srv.id ? '0 4px 12px rgba(218, 27, 27, 0.15)' : 'none',
                      transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {srv.icon}
                      <span>{srv.name}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#6B7280' }}>{srv.badge}</span>
                  </button>
                ))}
              </div>

              {/* Live Squad Deliverables Card with tab entrance animation */}
              <div
                key={currentService.id}
                className="tab-content-enter"
                style={{
                  backgroundColor: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '10px',
                  padding: '18px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#111827', fontWeight: 700, fontSize: '14px' }}>
                  <Users size={16} color="var(--primary-red)" />
                  <span>Squad Allocation:</span>
                </div>
                <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '14px', fontWeight: 500 }}>
                  {currentService.teamSize}
                </div>

                <div style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Standard Deliverables:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {currentService.deliverables.map((deliv, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#374151' }}>
                      <CheckCircle2 size={14} color="var(--primary-red)" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Project Request Form */}
          <Reveal effect="fade-left" delay={200}>
            <div
              className="sewedy-card card-interactive"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                padding: '32px',
                borderRadius: '16px',
                height: '100%'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>
                Project Request Form
              </h3>
              <p style={{ fontSize: '13.5px', color: '#6B7280', marginBottom: '22px' }}>
                Selected Track: <strong style={{ color: 'var(--primary-red)' }}>{currentService.name}</strong>
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies / Startup X"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="sewedy-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmed"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="sewedy-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Hassan"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="sewedy-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="sewedy-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 100 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="sewedy-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Project Brief & Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want our student engineering squad to build, expected timeframe, or technical specifications..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="sewedy-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="sewedy-btn sewedy-btn-primary btn-shimmer"
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>Submit Project RFP</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
