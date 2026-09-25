import React, { useState, useEffect, useRef } from 'react';
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
  ChevronDown,
  Award,
  Factory,
  Layers,
  UserCheck,
  CalendarCheck,
  Clock,
  Rocket,
  FileCheck2,
  Code2,
  CreditCard,
  Database,
  Trophy,
  Users,
  ShieldCheck,
  Ticket,
  Activity,
  BookMarked,
  Search,
  ExternalLink
} from 'lucide-react';
import { schoolHubs } from '../data/schoolHubsData';

const iconMap = {
  UserCheck,
  CalendarCheck,
  Clock,
  Rocket,
  FileCheck2,
  Award,
  Code2,
  CreditCard,
  Database,
  Trophy,
  Users,
  ShieldCheck,
  Ticket,
  Activity,
  BookMarked,
  Layers,
  ExternalLink
};

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hubsDropdownOpen, setHubsDropdownOpen] = useState(false);
  const [mobileHubsOpen, setMobileHubsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredHub, setHoveredHub] = useState(null);
  const hubsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (hubsDropdownOpen) {
        setHubsDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hubsDropdownOpen]);

  // Click outside to close hubs dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hubsRef.current && !hubsRef.current.contains(event.target)) {
        setHubsDropdownOpen(false);
      }
    };
    if (hubsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [hubsDropdownOpen]);

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

  // Close sidebar and dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setHubsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Home, desc: 'Welcome & Overview' },
    { id: 'about-overview', label: 'About School', icon: Info, desc: 'Leadership & Vision' },
    { id: 'curriculum', label: 'Tracks & Subjects', icon: BookOpen, desc: '3-Year Progression' },
    { id: 'facilities', label: 'Campus Facilities', icon: Building2, desc: 'Labs & Creative Studios' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    setHubsDropdownOpen(false);
  };

  const filteredHubs = schoolHubs.filter((hub) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      hub.title.toLowerCase().includes(q) ||
      hub.description.toLowerCase().includes(q) ||
      hub.category.toLowerCase().includes(q) ||
      (hub.badge && hub.badge.toLowerCase().includes(q))
    );
  });

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
          maxWidth: '1160px',
          height: '62px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.93)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
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

        {/* Center: Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '18px',
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
                fontSize: '14px',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
            >
              {link.label}
            </button>
          ))}

          {/* School Hubs Dropdown Trigger */}
          <div ref={hubsRef} style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setHubsDropdownOpen((prev) => !prev);
                setSearchQuery('');
                setHoveredHub(null);
              }}
              style={{
                background: hubsDropdownOpen ? 'var(--primary-red-subtle)' : 'none',
                border: 'none',
                color: hubsDropdownOpen ? 'var(--primary-red)' : '#4B5563',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (!hubsDropdownOpen) e.currentTarget.style.color = 'var(--primary-red)';
              }}
              onMouseLeave={(e) => {
                if (!hubsDropdownOpen) e.currentTarget.style.color = '#4B5563';
              }}
              aria-expanded={hubsDropdownOpen}
              aria-haspopup="true"
            >
              <span>School Hubs</span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  backgroundColor: 'var(--primary-red)',
                  color: '#FFFFFF',
                  padding: '1px 6px',
                  borderRadius: '9999px',
                  lineHeight: '1.2'
                }}
              >
                {schoolHubs.length}
              </span>
              <ChevronDown
                size={14}
                style={{
                  transform: hubsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {/* School Hubs Dropdown Popover */}
            {hubsDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  right: '-60px',
                  width: '450px',
                  maxWidth: '92vw',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                  padding: '12px',
                  animation: 'hubsFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 1001
                }}
              >
                {/* Header inside dropdown */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 8px 10px',
                    borderBottom: '1px solid #F3F4F6'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--primary-red-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-red)'
                      }}
                    >
                      <Layers size={15} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '13px', color: '#111827' }}>
                        School Hubs & Systems
                      </div>
                      <div style={{ fontSize: '11px', color: '#6B7280' }}>
                        Hover over any platform to see its description
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      backgroundColor: 'var(--primary-red-subtle)',
                      color: 'var(--primary-red)',
                      borderRadius: '9999px'
                    }}
                  >
                    {schoolHubs.length} Portals
                  </span>
                </div>

                {/* Search Bar within Dropdown */}
                <div style={{ padding: '8px 4px 6px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 10px',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '8px',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <Search size={14} color="#9CA3AF" />
                    <input
                      type="text"
                      placeholder="Search portals (e.g. SafeWay, RMS, TMS, Exam)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        fontSize: '12px',
                        color: '#111827',
                        outline: 'none',
                        width: '100%',
                        fontFamily: 'inherit'
                      }}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          color: '#9CA3AF'
                        }}
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Systems List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    maxHeight: '320px',
                    overflowY: 'auto',
                    paddingRight: '4px'
                  }}
                >
                  {filteredHubs.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '24px 12px', color: '#6B7280', fontSize: '12.5px' }}>
                      No systems found matching "{searchQuery}"
                    </div>
                  ) : (
                    filteredHubs.map((hub) => {
                      const Icon = iconMap[hub.icon] || Layers;
                      const isHovered = hoveredHub?.id === hub.id;
                      return (
                        <a
                          key={hub.id}
                          href={hub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={hub.description}
                          onClick={() => setHubsDropdownOpen(false)}
                          onMouseEnter={() => setHoveredHub(hub)}
                          onMouseLeave={() => setHoveredHub(null)}
                          className="hub-item-hover"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 10px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            color: '#1F2937',
                            transition: 'all 0.18s ease',
                            backgroundColor: isHovered ? '#FFF5F5' : 'transparent',
                            borderLeft: isHovered ? '3px solid var(--primary-red)' : '3px solid transparent'
                          }}
                        >
                          <div
                            className="hub-icon-box"
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '8px',
                              backgroundColor: isHovered ? 'var(--primary-red-subtle)' : '#F9FAFB',
                              border: isHovered ? '1px solid rgba(218, 27, 27, 0.25)' : '1px solid #E5E7EB',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isHovered ? 'var(--primary-red)' : '#4B5563',
                              flexShrink: 0,
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span
                                style={{
                                  fontWeight: 700,
                                  fontSize: '13px',
                                  color: isHovered ? 'var(--primary-red)' : '#111827',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {hub.title}
                              </span>
                              {hub.badge && (
                                <span
                                  style={{
                                    fontSize: '9.5px',
                                    fontWeight: 700,
                                    padding: '1px 5px',
                                    backgroundColor: isHovered ? 'var(--primary-red)' : 'var(--primary-red-subtle)',
                                    color: isHovered ? '#FFFFFF' : 'var(--primary-red)',
                                    borderRadius: '4px',
                                    flexShrink: 0,
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  {hub.badge}
                                </span>
                              )}
                            </div>
                            <p
                              style={{
                                fontSize: '11px',
                                color: isHovered ? '#374151' : '#6B7280',
                                margin: '2px 0 0 0',
                                lineHeight: 1.3,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                            >
                              {hub.description}
                            </p>
                          </div>
                          <ExternalLink
                            size={13}
                            color={isHovered ? 'var(--primary-red)' : '#9CA3AF'}
                            style={{ flexShrink: 0, marginLeft: '4px', transition: 'color 0.2s ease' }}
                          />
                        </a>
                      );
                    })
                  )}
                </div>

                {/* Live Dynamic Hover Description Panel */}
                <div
                  style={{
                    marginTop: '10px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: hoveredHub ? 'rgba(218, 27, 27, 0.04)' : '#F9FAFB',
                    border: hoveredHub ? '1px solid rgba(218, 27, 27, 0.25)' : '1px solid #E5E7EB',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    minHeight: '76px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  {hoveredHub ? (
                    <div style={{ animation: 'hubsFadeIn 0.18s ease' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '4px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: 800, fontSize: '13px', color: '#111827' }}>
                            {hoveredHub.title}
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 700,
                              padding: '1px 6px',
                              backgroundColor: 'var(--primary-red)',
                              color: '#FFFFFF',
                              borderRadius: '4px'
                            }}
                          >
                            {hoveredHub.badge || hoveredHub.category}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '11px',
                            color: 'var(--primary-red)',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>Open Portal</span>
                          <ArrowRight size={11} />
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#374151',
                          margin: 0,
                          lineHeight: 1.45,
                          fontWeight: 500
                        }}
                      >
                        {hoveredHub.description}
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#6B7280',
                        fontSize: '11.5px'
                      }}
                    >
                      <Sparkles size={14} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                      <span>Hover over any system above to view its full description & details</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Apply Now CTA Button -> Admission System */}
        <div style={{ display: 'none', alignItems: 'center' }} className="desktop-cta">
          <a
            href="https://admission.sewedy.com.eg"
            target="_blank"
            rel="noopener noreferrer"
            className="sewedy-btn sewedy-btn-primary btn-shimmer"
            style={{
              padding: '8px 20px',
              fontSize: '13.5px',
              borderRadius: 'var(--radius-full)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Apply Now</span>
            <ArrowRight size={14} />
          </a>
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
          SLIDING SIDEBAR NAVIGATION DRAWER (MOBILE)
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
          maxWidth: '350px',
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

          {/* Mobile School Hubs Accordion Item */}
          <div style={{ marginTop: '4px' }}>
            <button
              onClick={() => setMobileHubsOpen((prev) => !prev)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '10px',
                backgroundColor: mobileHubsOpen ? 'var(--primary-red-subtle)' : 'transparent',
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
                    backgroundColor: mobileHubsOpen ? '#FFFFFF' : 'var(--primary-red-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-red)',
                    flexShrink: 0
                  }}
                >
                  <Layers size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#111827' }}>
                    School Hubs
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                    {schoolHubs.length} Integrated Systems
                  </div>
                </div>
              </div>
              <ChevronDown
                size={16}
                color="#DA1B1B"
                style={{
                  transform: mobileHubsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {/* Mobile Submenu for Hubs with Descriptions */}
            {mobileHubsOpen && (
              <div
                style={{
                  margin: '6px 0 6px 14px',
                  paddingLeft: '14px',
                  borderLeft: '2px solid rgba(218, 27, 27, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                {schoolHubs.map((hub) => {
                  const Icon = iconMap[hub.icon] || Layers;
                  return (
                    <a
                      key={hub.id}
                      href={hub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #F3F4F6'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                          <Icon size={15} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>
                            {hub.title}
                          </span>
                          {hub.badge && (
                            <span
                              style={{
                                fontSize: '9px',
                                fontWeight: 700,
                                padding: '1px 5px',
                                backgroundColor: 'var(--primary-red-subtle)',
                                color: 'var(--primary-red)',
                                borderRadius: '4px'
                              }}
                            >
                              {hub.badge}
                            </span>
                          )}
                        </div>
                        <ExternalLink size={13} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                      </div>
                      <p style={{ fontSize: '11px', color: '#4B5563', margin: 0, lineHeight: 1.4 }}>
                        {hub.description}
                      </p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Sidebar CTA & Institutional Footer */}
        <div
          style={{
            padding: '20px 22px',
            borderTop: '1px solid #F3F4F6',
            backgroundColor: '#F9FAFB'
          }}
        >
          <a
            href="https://admission.sewedy.com.eg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
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
              marginBottom: '16px',
              textDecoration: 'none'
            }}
          >
            <span>Apply Now</span>
            <ArrowRight size={16} />
          </a>

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
        @keyframes hubsFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .hub-item-hover:hover {
          background-color: #FFF5F5 !important;
          transform: translateX(3px);
        }
        .hub-item-hover:hover .hub-icon-box {
          background-color: var(--primary-red-subtle) !important;
          color: var(--primary-red) !important;
          border-color: rgba(218, 27, 27, 0.25) !important;
        }
        @media (min-width: 980px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </div>
  );
}
