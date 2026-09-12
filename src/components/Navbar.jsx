import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Info,
  BookOpen,
  Building2,
  Sparkles,
  ChevronRight,
  Award,
  Factory
} from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scrolling when sidebar drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Home, desc: 'Welcome & Overview' },
    { id: 'about-overview', label: 'About School', icon: Info, desc: 'Leadership & Vision' },
    { id: 'curriculum', label: 'Tracks & Subjects', icon: BookOpen, desc: '3-Year Progression' },
    { id: 'facilities', label: 'Campus Facilities', icon: Building2, desc: 'Labs & Creative Studios' },
    { id: 'special-moments', label: 'Special Moments', icon: Sparkles, desc: 'Honors & Global Guests' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '16px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        pointerEvents: 'none'
      }}
    >
      {/* Centered Floating Island App Bar */}
      <header
        style={{
          width: '100%',
          maxWidth: '1040px',
          height: '62px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '9999px',
          border: '1px solid rgba(229, 231, 235, 0.9)',
          boxShadow: scrolled
            ? '0 10px 35px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.04)'
            : '0 6px 25px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          position: 'relative',
          pointerEvents: 'auto',
          transition: 'all 0.25s ease'
        }}
      >
        {/* Left: Brand Logo & Name */}
        <div
          onClick={() => handleLinkClick('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}
        >
          <img
            src="/assets/sewedy2-CIwMyAxc.png"
            alt="Elsewedy Electrometer Logo"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <div
            style={{
              width: '1px',
              height: '24px',
              backgroundColor: '#E5E7EB'
            }}
          />
          <img
            src="/assets/iats-logo.svg"
            alt="IATS Official Vector Logo"
            style={{
              height: '34px',
              width: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Center: Perfectly Centered Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#4B5563',
                fontWeight: 600,
                fontSize: '14.5px',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Explore Tracks Button */}
        <div style={{ display: 'none', alignItems: 'center' }} className="desktop-cta">
          <button
            onClick={() => handleLinkClick('curriculum')}
            className="sewedy-btn sewedy-btn-primary btn-shimmer"
            style={{
              padding: '8px 20px',
              fontSize: '13.5px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span>Explore Tracks</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: mobileOpen ? 'var(--primary-red-subtle)' : 'none',
            border: 'none',
            color: mobileOpen ? 'var(--primary-red)' : '#111827',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            transition: 'all 0.2s ease'
          }}
          className="mobile-toggle"
          aria-label={mobileOpen ? 'Close navigation sidebar' : 'Open navigation sidebar'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* =========================================================
          SLIDING SIDEBAR NAVIGATION DRAWER (THEME-CUSTOMIZED)
          ========================================================= */}

      {/* 1. Frosted Backdrop Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 17, 21, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9998,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
        aria-hidden={!mobileOpen}
      />

      {/* 2. SideBar Panel (Sliding Drawer from Right) */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '340px',
          backgroundColor: '#FFFFFF',
          zIndex: 9999,
          boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          overflowY: 'auto'
        }}
        aria-label="Navigation Sidebar"
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: '20px 22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #F3F4F6'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/assets/sewedy2-CIwMyAxc.png"
              alt="Elsewedy Logo"
              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
            />
            <div style={{ width: '1px', height: '22px', backgroundColor: '#E5E7EB' }} />
            <img
              src="/assets/iats-logo.svg"
              alt="IATS Logo"
              style={{ height: '32px', width: 'auto', display: 'block' }}
            />
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#F3F4F6',
              border: 'none',
              color: '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Sidebar School Badge */}
        <div style={{ padding: '16px 22px 8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--primary-red-subtle)',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              color: 'var(--primary-red)',
              fontWeight: 700
            }}
          >
            <Award size={16} />
            <span>Top 10 International Applied Tech School</span>
          </div>
        </div>

        {/* Sidebar Nav Links */}
        <nav style={{ padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
                className="sidebar-link-btn"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--primary-red-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-red)',
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#111827' }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                      {link.desc}
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} color="#9CA3AF" />
              </button>
            );
          })}
        </nav>

        {/* Sidebar CTA & Institutional Footer */}
        <div
          style={{
            padding: '20px 22px',
            borderTop: '1px solid #F3F4F6',
            backgroundColor: '#F9FAFB'
          }}
        >
          <button
            onClick={() => handleLinkClick('curriculum')}
            className="sewedy-btn sewedy-btn-primary btn-shimmer"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <span>Explore Academic Tracks</span>
            <ArrowRight size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4B5563', marginBottom: '6px' }}>
            <Factory size={14} color="var(--primary-red)" />
            <span>Dual Industrial Immersion at Elsewedy</span>
          </div>

          <div style={{ fontSize: '11px', color: '#9CA3AF', lineHeight: 1.5 }}>
            Pearson BTEC Dual Standard &bull; Egyptian MoETE Partner
          </div>
        </div>
      </aside>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </div>
  );
}
