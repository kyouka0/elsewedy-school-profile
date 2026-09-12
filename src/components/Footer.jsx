import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#141416',
        color: '#FFFFFF',
        padding: '75px 0 32px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Column 1: School Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/assets/sewedy2-CIwMyAxc.png"
                alt="Elsewedy Logo"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontWeight: 800, fontSize: '18px', color: '#FFFFFF', lineHeight: 1.1 }}>
                  EL SEWEDY <span style={{ color: 'var(--primary-red)' }}>IATS</span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                  Applied Technology & Software
                </div>
              </div>
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              El Sewedy International School for Applied Technology and Software. Ranked among Egypt's top ten international schools for applied technology.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={schoolInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={schoolInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about-overview', label: 'About Us' },
                { id: 'curriculum', label: 'Academic Tracks & Curriculum' },
                { id: 'facilities', label: 'School Facilities' },
                { id: 'special-moments', label: 'Special Moments' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9CA3AF',
                    fontSize: '14px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  &rarr; {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h4 style={{ color: 'var(--primary-red)', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>
              Contact El Sewedy IATS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <a
                href={`mailto:${schoolInfo.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}
              >
                <Mail size={16} color="var(--primary-red)" />
                <span>{schoolInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${schoolInfo.contact.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}
              >
                <Phone size={16} color="var(--primary-red)" />
                <span>{schoolInfo.contact.phone}</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9CA3AF' }}>
                <Clock size={16} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{schoolInfo.contact.hours}</span>
              </div>

              <a
                href={schoolInfo.contact.googleMapsUrl || "https://maps.app.goo.gl/dLjqLdGRW1b5zdKMA"}
                target="_blank"
                rel="noopener noreferrer"
                title="View campus location on Google Maps"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                <MapPin size={16} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{schoolInfo.contact.address}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Accredited Partners & Logos */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>
              Accredited Governance
            </h4>
            <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
              Dual certification supervised by the Egyptian Ministry of Education & Technical Education and El Sewedy Electrometer Group.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src="/assets/wzara-BW5q8-PG.png"
                alt="Ministry of Education"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
              <img
                src="/assets/sewedylogo-C9dflkPy.png"
                alt="Elsewedy Logo"
                style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            color: '#718096',
            fontSize: '13.5px'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} El Sewedy International School for Applied Technology and Software. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-red)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
