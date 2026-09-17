import React from 'react';
import { Calendar } from 'lucide-react';

export default function CampusTicker() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '10px 0',
        fontSize: '13.5px'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {/* Left: Live School Pulse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#374151' }}>
          <span
            className="beacon-pulse-green"
            style={{
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              backgroundColor: '#16A34A',
              display: 'inline-block'
            }}
          />
          <span style={{ fontWeight: 600, color: '#111827' }}>Campus Live Status:</span>
          <span style={{ color: '#4B5563' }}>Academic Term Active &bull; Fab Lab & Robotics Arena Open</span>
        </div>

        {/* Right: Admission Period & Status */}
        <a
          href="#admissions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'inherit',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-red)', fontWeight: 700 }}>
            <Calendar size={15} />
            <span>Admission Time:</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                backgroundColor: '#FEF2F2',
                border: '1px solid #FECACA',
                color: 'var(--primary-red)',
                padding: '2px 9px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '12.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-red)',
                  display: 'inline-block'
                }}
              />
              Has Not Started Yet
            </span>
            <span style={{ color: '#6B7280', fontSize: '13px', fontWeight: 500 }}>
              &bull; Official applications opening soon via MoETE portal
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
