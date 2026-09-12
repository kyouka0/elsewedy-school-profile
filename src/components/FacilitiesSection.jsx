import React, { useState } from 'react';
import { facilitiesDetailed } from '../data/schoolData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './common/Reveal';

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section id="facilities" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>School Facilities & Campus Infrastructure</h2>
            <p>
              Equipped with state-of-the-art engineering laboratories, artistic performance studios, and athletic grounds
            </p>
          </div>
        </Reveal>

        {/* Facilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {facilitiesDetailed.map((fac, idx) => (
            <Reveal key={fac.id} effect="fade-up" delay={(idx % 4) * 100}>
              <div
                onClick={() => setSelectedFacility(fac)}
                className="card-interactive"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  height: '100%'
                }}
              >
                <div className="img-zoom-container" style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <img
                    src={fac.image}
                    alt={fac.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(17, 24, 39, 0.85)',
                      color: '#FFFFFF',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11px',
                      fontWeight: 700,
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {fac.category}
                  </span>
                </div>

                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                    {fac.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '14px' }}>
                    {fac.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #F3F4F6' }}>
                    <span style={{ fontSize: '12.5px', color: 'var(--primary-red)', fontWeight: 600 }}>
                      View Equipment Specs &rarr;
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#9CA3AF' }}>
                      {fac.specs.length} key features
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal for Selected Facility */}
        {selectedFacility && (
          <div className="modal-backdrop" onClick={() => setSelectedFacility(null)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
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

              <div style={{ padding: '28px' }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase' }}>
                  {selectedFacility.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginTop: '4px', marginBottom: '12px' }}>
                  {selectedFacility.title}
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '22px' }}>
                  {selectedFacility.description}
                </p>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Lab Equipment & Technologies:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {selectedFacility.specs.map((sp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151' }}>
                        <CheckCircle2 size={16} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    padding: '14px 18px',
                    backgroundColor: '#F9FAFB',
                    borderLeft: '4px solid var(--primary-red)',
                    borderRadius: '6px',
                    fontSize: '13.5px',
                    color: '#4B5563'
                  }}
                >
                  <strong>Access Policy: </strong>{selectedFacility.access}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
