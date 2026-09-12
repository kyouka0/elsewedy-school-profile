import React, { useState, useEffect } from 'react';
import { Clock, Radio, Calendar } from 'lucide-react';

export default function CampusTicker() {
  // Target deadline for admissions
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 24);
  targetDate.setHours(23, 59, 59);

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

        {/* Right: Academic Term Countdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-red)', fontWeight: 700 }}>
            <Calendar size={15} />
            <span>Academic Term Registration:</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'monospace', fontWeight: 700 }}>
            <span style={{ backgroundColor: '#F3F4F6', padding: '3px 6px', borderRadius: '4px', color: '#111827' }}>
              {String(timeLeft.days).padStart(2, '0')}d
            </span>
            <span>:</span>
            <span style={{ backgroundColor: '#F3F4F6', padding: '3px 6px', borderRadius: '4px', color: '#111827' }}>
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span style={{ backgroundColor: '#F3F4F6', padding: '3px 6px', borderRadius: '4px', color: '#111827' }}>
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span style={{ backgroundColor: '#FFF1F2', padding: '3px 6px', borderRadius: '4px', color: 'var(--primary-red)' }}>
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
