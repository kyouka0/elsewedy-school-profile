import React, { useState } from 'react';
import { specializationsDetailed, arabicSpecializationsDetailed } from '../data/schoolData';
import {
  Code,
  Cpu,
  Wrench,
  Trophy,
  ArrowRight,
  Briefcase,
  BookOpen,
  Sparkles
} from 'lucide-react';
import Reveal from './common/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function CurriculumExplorer({ onNavigate }) {
  const { isArabic } = useLanguage();
  const [activeTrackId, setActiveTrackId] = useState(specializationsDetailed[0].id);
  const tracks = isArabic ? arabicSpecializationsDetailed : specializationsDetailed;

  const activeTrack = tracks.find((t) => t.id === activeTrackId) || tracks[0];

  const getTrackIcon = (iconName, color) => {
    switch (iconName) {
      case 'Code':
        return <Code size={22} color={color} />;
      case 'Cpu':
        return <Cpu size={22} color={color} />;
      case 'Wrench':
        return <Wrench size={22} color={color} />;
      case 'Trophy':
        return <Trophy size={22} color={color} />;
      default:
        return <Code size={22} color={color} />;
    }
  };

  return (
    <section id="curriculum" style={{ padding: '90px 0', backgroundColor: '#F8F9FA' }}>
      <div className="container">
        {/* Header */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>{isArabic ? 'التخصصات الأكاديمية والمناهج' : 'Academic Specializations & Curriculum'}</h2>
            <p>
              {isArabic ? 'منهج مزدوج متدرج لمدة ٣ سنين بمعايير دولية وخبرة هندسية مباشرة من السويدي' : '3-year progressive dual curriculum benchmarked against international standards and direct Elsewedy engineering practices'}
            </p>
          </div>
        </Reveal>

        {/* Track Selection Tabs */}
        <Reveal effect="fade-up" delay={100}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '36px'
            }}
          >
            {tracks.map((track) => {
              const isSelected = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`tab-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isSelected ? track.color : '#FFFFFF',
                    borderColor: isSelected ? track.color : '#E5E7EB',
                    color: isSelected ? '#FFFFFF' : '#4B5563',
                    boxShadow: isSelected ? `0 6px 18px ${track.color}40` : '0 2px 5px rgba(0,0,0,0.03)',
                    padding: '11px 22px',
                    fontSize: '14.5px',
                    cursor: 'pointer',
                    transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {getTrackIcon(track.icon, isSelected ? '#FFFFFF' : track.color)}
                  <span>{track.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Track Content Card with animated entrance on key change */}
        <div
          key={activeTrackId}
          className="sewedy-card card-interactive tab-content-enter"
          style={{
            borderTop: `4px solid ${activeTrack.color}`,
            padding: '38px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px'
          }}
        >
          {/* Track Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: `${activeTrack.color}15`,
                  color: activeTrack.color,
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                {activeTrack.badge}
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827' }}>
                {activeTrack.title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', marginTop: '8px', maxWidth: '820px', lineHeight: 1.75 }}>
                {activeTrack.description}
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: `${activeTrack.color}12`,
                color: activeTrack.color,
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 700
              }}
            >
              <Sparkles size={16} />
              <span>{isArabic ? 'معيار Pearson BTEC المزدوج' : 'Pearson BTEC Dual Standard'}</span>
            </div>
          </div>

          {/* 3-Year Curriculum Progression */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} color={activeTrack.color} />
                <span>{isArabic ? 'تدرج المنهج على مدار ٣ سنين' : '3-Year Curriculum Progression'}</span>
              </h4>
              <span style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: 600 }}>
                {isArabic ? 'تدرج المساقات والمقررات الدراسية' : 'Course and subject progression'}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              {activeTrack.years.map((yr, idx) => (
                <div
                  key={idx}
                  className="card-interactive"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderTop: `4px solid ${activeTrack.color}`,
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontWeight: 800, fontSize: '16px', color: activeTrack.color }}>
                      {yr.year}
                    </span>
                    <span
                      style={{
                        fontSize: '11.5px',
                        color: activeTrack.color,
                        fontWeight: 700,
                        backgroundColor: `${activeTrack.color}15`,
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {isArabic ? `السنة ٠${idx + 1}` : `Year 0${idx + 1}`}
                    </span>
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #F3F4F6' }}>
                    {yr.focus}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {yr.modules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '13.5px',
                          color: '#1F2937',
                          fontWeight: 600,
                          backgroundColor: '#F9FAFB',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #F3F4F6',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: activeTrack.color,
                            flexShrink: 0
                          }}
                        />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Career Paths 2-Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              paddingTop: '22px',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            {/* Tools Learned */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#6B7280', marginBottom: '10px' }}>
                {isArabic ? 'الأدوات والتقنيات:' : 'Tools & Stacks Mastered:'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeTrack.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="card-interactive"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #D1D5DB',
                      color: '#1F2937',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '13px',
                      fontWeight: 600
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Careers */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#6B7280', marginBottom: '10px' }}>
                {isArabic ? 'فرص العمل بعد التخرج:' : 'Graduate Career Opportunities:'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeTrack.careerPaths.map((cp, idx) => (
                  <span
                    key={idx}
                    className="card-interactive"
                    style={{
                      backgroundColor: '#F3F4F6',
                      color: '#374151',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Briefcase size={13} color={activeTrack.color} />
                    <span>{cp}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
