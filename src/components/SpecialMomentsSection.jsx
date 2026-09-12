import React from 'react';
import { Calendar, Quote } from 'lucide-react';
import { specialMoments } from '../data/schoolData';
import Reveal from './common/Reveal';

export default function SpecialMomentsSection() {
  return (
    <section
      id="special-moments"
      style={{
        backgroundColor: '#141416',
        color: '#FFFFFF',
        padding: '95px 0'
      }}
    >
      <div className="container">
        {/* Section Title Header */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper dark">
            <h2 style={{ color: 'var(--primary-red)' }}>Special Moments & Legacy</h2>
            <p>
              Celebrating our historical milestones, distinguished international delegations, and computational achievements
            </p>
          </div>
        </Reveal>

        {/* Real Moment Cards Grid with Staggered Entrance */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px'
          }}
        >
          {specialMoments.map((moment, idx) => (
            <Reveal key={moment.id} effect="fade-up" delay={idx * 140}>
              <div
                className="card-interactive"
                style={{
                  backgroundColor: '#1E1E22',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  height: '100%'
                }}
              >
                {/* Image with zoom and gradient */}
                <div className="img-zoom-container" style={{ position: 'relative', height: '290px' }}>
                  <img
                    src={moment.image}
                    alt={moment.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(30, 30, 34, 0.95) 0%, transparent 60%)',
                      zIndex: 1
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '20px',
                      right: '20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'rgba(218, 27, 27, 0.92)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        padding: '4px 14px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        fontWeight: 700
                      }}
                    >
                      {moment.category}
                    </span>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(4px)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#E2E8F0'
                      }}
                    >
                      <Calendar size={14} color="var(--primary-red-bright)" />
                      <span>{moment.date}</span>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                    {moment.title}
                  </h3>

                  {moment.quote && (
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        borderLeft: '3px solid var(--primary-red)',
                        fontStyle: 'italic',
                        fontSize: '0.92rem',
                        color: '#CBD5E0',
                        marginBottom: '16px'
                      }}
                    >
                      "{moment.quote}"
                    </div>
                  )}

                  <p style={{ color: '#9CA3AF', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {moment.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {moment.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: '#E2E8F0',
                          fontSize: '12px',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontWeight: 500
                        }}
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
