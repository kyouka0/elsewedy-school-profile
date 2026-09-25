import React from 'react';
import { schoolInfo, arabicSchoolInfo, partners } from '../data/schoolData';
import { Award, CheckCircle2, Quote, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import Reveal from './common/Reveal';
import AnimatedCounter from './common/AnimatedCounter';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutOverview() {
  const { isArabic } = useLanguage();
  const info = isArabic ? arabicSchoolInfo : schoolInfo;
  return (
    <div id="about-overview">
      {/* 1. What is El Sewedy International School? & Presentation Video */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '45px',
              alignItems: 'center'
            }}
          >
            <Reveal effect="fade-right" duration={800}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--primary-red)',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px'
                }}
              >
                <Sparkles size={15} />
                <span>{isArabic ? 'نظرة عامة عن المدرسة' : 'Institutional Overview • نظرة عامة'}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#111827',
                  marginBottom: '20px',
                  lineHeight: 1.2
                }}
              >
                {isArabic ? <>إيه هي <span style={{ color: 'var(--primary-red)' }}>مدرسة السويدي الدولية</span>؟</> : <>What is <span style={{ color: 'var(--primary-red)' }}>El Sewedy International School</span>?</>}
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#4B5563',
                  marginBottom: '24px'
                }}
              >
                {info.overview}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '14px',
                  padding: '18px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px'
                }}
              >
                <div className="card-interactive" style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #F3F4F6' }}>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--primary-red)' }}>
                    <AnimatedCounter end={10} prefix="Top " />
                  </div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{isArabic ? 'مدرسة تكنولوجيا تطبيقية في مصر' : 'Applied Tech School in Egypt'}</div>
                </div>
                <div className="card-interactive" style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #F3F4F6' }}>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: '#111827' }}>Pearson BTEC</div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{isArabic ? 'معايير الدبلومة البريطانية المزدوجة' : 'British Dual Diploma Standards'}</div>
                </div>
                <div className="card-interactive" style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #F3F4F6' }}>
                  <div style={{ fontWeight: 800, fontSize: '20px', color: '#16A34A' }}>
                    <AnimatedCounter end={3} suffix="-Year Track" />
                  </div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{isArabic ? 'الصفوف العاشر والحادي عشر والثاني عشر' : 'Grades 10, 11, and 12'}</div>
                </div>
              </div>
            </Reveal>

            {/* Official School Campus Location Map */}
            <Reveal effect="fade-left" duration={800} delay={150}>
              <div
                className="card-interactive"
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header Bar with Location Pin & Direct Google Maps link */}
                <div
                  style={{
                    padding: '14px 18px',
                    backgroundColor: '#FFFFFF',
                    borderBottom: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-red-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-red)',
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '14px', color: '#111827' }}>
                        Elsewedy IATS Campus Location
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                        مدرسة السويدي الدولية للتكنولوجيا التطبيقية والبرمجيات &bull; 6th of October
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/dLjqLdGRW1b5zdKMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--primary-red)',
                      backgroundColor: 'var(--primary-red-subtle)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{isArabic ? 'افتح الخريطة' : 'Open in Maps'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Interactive Map Iframe */}
                <div style={{ position: 'relative', height: '320px', width: '100%' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=29.8828228,30.9069151&hl=en&z=16&output=embed"
                    title="El Sewedy International School Campus Location"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Founder's Spotlight: Eng. Emad Zaki El Sewedy */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8F9FA', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <Reveal effect="zoom-in" duration={700}>
            <div
              className="sewedy-card card-interactive"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'center',
                padding: '38px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Quote size={18} />
                  <span>{isArabic ? 'كلمة المؤسس' : 'Founder\'s Message • كلمة المؤسس'}</span>
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>
                  {info.founder.name}
                </h3>
                <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500, marginBottom: '20px' }}>
                  {info.founder.role}
                </div>

                <blockquote
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.85,
                    color: '#374151',
                    fontStyle: 'italic',
                    borderLeft: '4px solid var(--primary-red)',
                    paddingLeft: '18px',
                    marginBottom: '20px'
                  }}
                >
                  "{info.founder.quote}"
                </blockquote>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src="/assets/sewedylogo-C9dflkPy.png"
                    alt="Elsewedy Electrometer"
                    style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>
                    {isArabic ? 'مؤسس مجموعة السويدي إليكتروميتر' : 'Founder of El Sewedy Electrometer Group'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  className="img-zoom-container"
                  style={{
                    width: '260px',
                    height: '310px',
                    borderRadius: '16px',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={info.founder.avatar}
                    alt={info.founder.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '16px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                      color: '#FFFFFF'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>{info.founder.name}</div>
                    <div style={{ fontSize: '11px', color: '#D1D5DB' }}>{isArabic ? 'السويدي إليكتروميتر' : 'Elsewedy Electrometer'}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. The Signature Red Specialization Banner with Ambient Decorative Element */}
      <section
        id="specialization-banner"
        style={{
          backgroundColor: 'var(--primary-red)',
          color: '#FFFFFF',
          padding: '85px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal effect="fade-up">
            <div style={{ maxWidth: '900px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  letterSpacing: '0.04em'
                }}
              >
                {isArabic ? 'قلب المنهج' : 'Curriculum Core'}
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: 'clamp(2.1rem, 3.8vw, 2.9rem)',
                  marginBottom: '20px',
                  lineHeight: 1.2
                }}
              >
                {isArabic ? 'برمجة السوفت وير والنظم الإلكترونية' : 'Software Programming & Electronic Systems'}
              </h2>
              <p
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.16rem',
                  lineHeight: 1.85,
                  opacity: 0.95
                }}
              >
                {isArabic ? 'تخصصا النظم الإلكترونية وعلوم الحاسب بيقدّموا معرفة ومهارات تقنية أساسية لعصرنا الرقمي. النظم الإلكترونية بتركز على هندسة الإلكترونيات وتصميم الدوائر الذكية والمتحكمات وإنترنت الأشياء، وبتعلّم الطلاب التصميم واللحام والبرمجة وصيانة الأنظمة الذكية والروبوتات الصناعية. علوم الحاسب بتركز على تحليل النظم وقواعد البيانات وتطوير البرمجيات المتكاملة والأمن السيبراني. المسارين بيدّوا الطالب خبرة عملية ومهارات فنية وتدريب داخل المصنع، وبيجهزوه لأدوار هندسية قوية في سوق التكنولوجيا.' : 'The Electronic Systems (ES) and Computer Science (CS) specializations at our school provide essential knowledge and technical mastery for the digital age. The Electronic Systems (ES) specialization focuses on electronics engineering, smart circuit design, microcontrollers, and embedded IoT technologies—teaching students how to design, solder, program, and maintain advanced smart hardware, industrial robotics, and automated sensor systems. The Computer Science (CS) specialization emphasizes system analysis, database management, full-stack software development, and cybersecurity, preparing students to architect and deploy resilient digital platforms. Both programs equip students with hands-on technical skills and factory-floor experience, preparing them for premier engineering roles in the evolving tech industry.'}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Floating background decorative pattern */}
        <img
          src="/assets/homep-JKFjyOVt.png"
          alt="Decoration"
          className="animate-float"
          style={{
            position: 'absolute',
            right: '-30px',
            top: '45%',
            transform: 'translateY(-50%)',
            height: '115%',
            opacity: 0.16,
            pointerEvents: 'none'
          }}
        />
      </section>

      {/* 4. Why El Sewedy International School? */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            <Reveal effect="fade-right">
              <div>
                <div className="section-title-wrapper" style={{ textAlign: 'left', marginBottom: '28px' }}>
                  <h2 style={{ textAlign: 'left' }}>{isArabic ? 'ليه تختار مدرسة السويدي الدولية؟' : 'Why El Sewedy International School?'}</h2>
                  <p style={{ margin: '12px 0 0 0' }}>
                    {isArabic ? 'تعليم ثانوي مميز بيجمع الدراسة القوية مع التدريب المزدوج داخل الصناعة.' : 'A transformative secondary education standard combining academic rigor with industry dual training.'}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {info.whyUs.map((point, idx) => (
                    <div
                      key={idx}
                      className="card-interactive"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #F3F4F6'
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary-red)',
                          marginTop: '8px',
                          flexShrink: 0
                        }}
                      />
                      <span style={{ fontSize: '0.98rem', color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* School Campus Photo with Hover Zoom */}
            <Reveal effect="fade-left" delay={200}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  className="img-zoom-container"
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 18px 38px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <img
                    src="/assets/landpic-B7U3j-bD.png"
                    alt="El Sewedy Campus"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Real Stats Counter Bar with Smooth Animated Counters */}
      <section style={{ padding: '65px 0', backgroundColor: '#F8F9FA', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              textAlign: 'center'
            }}
          >
            {info.stats.map((stat, idx) => (
              <Reveal key={idx} effect="zoom-in" delay={idx * 120}>
                <div
                  className="sewedy-card card-interactive"
                  style={{
                    padding: '30px 20px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '210px'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(2.5rem, 3.4vw, 3.1rem)',
                      fontWeight: 800,
                      color: stat.color,
                      lineHeight: 1.1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '52px'
                    }}
                  >
                    <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginTop: '12px', color: '#111827' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#6B7280', marginTop: '6px', lineHeight: 1.5 }}>
                    {stat.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industry & Institutional Partners */}
      <section style={{ padding: '55px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <Reveal effect="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '26px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF' }}>
                Governance & Strategic Alliances
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap'
              }}
            >
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  className="card-interactive"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 22px',
                    borderRadius: '12px',
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827' }}>{p.name}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
