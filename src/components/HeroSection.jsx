import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap, ShieldCheck, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const HERO_BACKGROUNDS = [
  {
    src: '/assets/landpic-B7U3j-bD.png',
    alt: 'Elsewedy Students on Campus'
  },
  {
    src: '/assets/sp2-Dxwf3Dj4.jpg',
    alt: 'Elsewedy ICPC Tournament Championship'
  },
  {
    src: '/assets/hero-award.jpg',
    alt: 'Elsewedy Student Excellence & Honors Award'
  },
  {
    src: '/assets/hero-lecture.jpg',
    alt: 'Elsewedy Interactive Lecture Amphitheater'
  },
  {
    src: '/assets/hero-capstone.jpg',
    alt: 'Elsewedy Capstone Project Exhibition'
  }
];

export default function HeroSection({ onNavigate }) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Preload background photos
  useEffect(() => {
    HERO_BACKGROUNDS.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  // Cycle background photo every 3.5 seconds (3 to 4 sec interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '90px',
        backgroundColor: '#0F1115'
      }}
    >
      {/* High-Resolution Campus Photo Slideshow (Changes every 3.5s) */}
      {HERO_BACKGROUNDS.map((item, index) => (
        <div
          key={item.src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${item.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.68) contrast(1.06)',
            zIndex: 1,
            opacity: currentBgIndex === index ? 1 : 0,
            transform: currentBgIndex === index ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 4.5s ease-out',
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Ambient Radial Tech Glow & Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(218, 27, 27, 0.22) 0%, transparent 50%), linear-gradient(180deg, rgba(15, 17, 21, 0.45) 0%, rgba(15, 17, 21, 0.92) 100%)',
          zIndex: 2
        }}
      />

      {/* Subtle Floating Ambient Orb */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(218, 27, 27, 0.15) 0%, rgba(218, 27, 27, 0) 70%)',
          filter: 'blur(40px)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '40px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '880px' }}>
          {/* Institutional Accreditation Pill with Live Pulse */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '7px 18px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '22px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            <span
              className="beacon-pulse-red"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-red-bright)',
                display: 'inline-block'
              }}
            />
            <span style={{ fontSize: '13.5px', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.01em' }}>
              Top 10 International Applied Technology School in Egypt &bull; شراكة وزارة التربية والتعليم
            </span>
          </div>

          {/* School Main Title */}
          <h1
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 5.8vw, 4.4rem)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              textShadow: '0 4px 20px rgba(0,0,0,0.6)'
            }}
          >
            El Sewedy International School
          </h1>

          {/* Subtitle Badge */}
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary-red)',
              color: '#FFFFFF',
              padding: '10px 22px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)',
              letterSpacing: '0.02em',
              marginBottom: '26px',
              boxShadow: '0 6px 24px rgba(218, 27, 27, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {schoolInfo.subTitle}
          </div>

          {/* Tagline */}
          <p
            style={{
              color: '#E2E8F0',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.75,
              marginBottom: '38px',
              maxWidth: '720px',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            {schoolInfo.tagline}. Leading Egyptian secondary education through dual industrial engineering training, British technical curriculum standards, and guaranteed career readiness.
          </p>

          {/* Action CTAs with Micro-Animations & Shimmer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '45px' }}>
            <button
              onClick={() => onNavigate('curriculum')}
              className="sewedy-btn sewedy-btn-primary btn-shimmer"
              style={{
                padding: '14px 34px',
                fontSize: '16px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700
              }}
            >
              <span>Explore Academic Tracks</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => onNavigate('curriculum')}
              className="sewedy-btn sewedy-btn-white btn-shimmer"
              style={{
                padding: '14px 28px',
                fontSize: '16px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>View Curriculum Subjects</span>
            </button>

            <button
              onClick={() => onNavigate('about-overview')}
              className="sewedy-btn sewedy-btn-outline"
              style={{
                padding: '14px 24px',
                fontSize: '15px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>Watch Campus Overview</span>
            </button>
          </div>

          {/* Quick Institutional Highlights */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              paddingTop: '22px',
              borderTop: '1px solid rgba(255, 255, 255, 0.16)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <GraduationCap size={16} color="var(--primary-red-bright)" />
              <span>Dual Diploma (Pearson BTEC)</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <ShieldCheck size={16} color="var(--primary-red-bright)" />
              <span>MoETE &amp; USAID Partnered</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Globe size={16} color="var(--primary-red-bright)" />
              <span>100% English Technical Instruction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Bouncing Down indicator */}
      <button
        onClick={() => onNavigate('about-overview')}
        className="animate-bounce-slow"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          cursor: 'pointer',
          zIndex: 10,
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s, transform 0.2s'
        }}
        aria-label="Scroll down to overview"
      >
        <ChevronDown size={22} />
      </button>

      {/* Subtle Background Slide Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          right: '28px',
          zIndex: 15,
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        {HERO_BACKGROUNDS.map((bg, idx) => (
          <button
            key={bg.src}
            onClick={() => setCurrentBgIndex(idx)}
            aria-label={`Switch to background slide ${idx + 1}`}
            title={bg.alt}
            style={{
              width: currentBgIndex === idx ? '22px' : '7px',
              height: '7px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: currentBgIndex === idx ? 'var(--primary-red-bright)' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              padding: 0
            }}
          />
        ))}
      </div>
    </section>
  );
}
