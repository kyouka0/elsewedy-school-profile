import React, { useState, useEffect } from 'react';
import { admissionsInfo, schoolInfo, testimonials } from '../data/schoolData';
import { sampleApplications } from '../data/dynamicData';
import { CheckCircle2, AlertCircle, Quote, Search, FileText, Calendar, Clock, CheckSquare } from 'lucide-react';
import Reveal from './common/Reveal';

export default function ApplySection({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('apply'); // 'apply' | 'track'
  const [prepScore, setPrepScore] = useState(255);
  const [trackingIdInput, setTrackingIdInput] = useState('');
  const [trackedApp, setTrackedApp] = useState(null);
  const [trackedSearched, setTrackedSearched] = useState(false);

  // Applications list saved in localStorage
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('sewedy_applications');
    return saved ? JSON.parse(saved) : sampleApplications;
  });

  useEffect(() => {
    localStorage.setItem('sewedy_applications', JSON.stringify(applications));
  }, [applications]);

  const [formData, setFormData] = useState({
    studentName: '',
    parentPhone: '',
    email: '',
    schoolType: 'Public School',
    preferredTrack: 'Software Programming & IS'
  });

  const [newTrackingId, setNewTrackingId] = useState(null);
  const isEligible = prepScore >= admissionsInfo.eligibilityThreshold;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const id = `ELS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord = {
      trackingId: id,
      studentName: formData.studentName,
      prepScore: prepScore,
      track: formData.preferredTrack,
      status: isEligible ? 'Document Screening Complete &bull; Aptitude Exam Pending' : 'Under Committee Review',
      statusStep: isEligible ? 2 : 1,
      date: new Date().toISOString().split('T')[0],
      details: isEligible
        ? `Application successfully validated with preparatory score of ${prepScore}/280. You will receive SMS instructions for the entrance exam.`
        : `Score is under the 220 threshold. The school board will review your profile for alternate vocational guidance.`
    };

    setApplications((prev) => [newRecord, ...prev]);
    setNewTrackingId(id);
    onShowToast(`Application submitted! Your Tracking Reference is ${id}.`);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setTrackedSearched(true);
    const found = applications.find(
      (a) => a.trackingId.toLowerCase() === trackingIdInput.trim().toLowerCase() ||
             a.studentName.toLowerCase().includes(trackingIdInput.trim().toLowerCase())
    );
    setTrackedApp(found || null);
  };

  return (
    <section id="admissions" style={{ padding: '95px 0 70px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>Admissions & Enrollment Portal</h2>
            <p>
              Check preparatory score eligibility, submit preliminary registration, and track your application status in real time
            </p>
          </div>
        </Reveal>

        {/* Tab Switcher: Apply vs Track Application */}
        <Reveal effect="fade-up" delay={100}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px'
            }}
          >
            <button
              onClick={() => setActiveTab('apply')}
              className={`tab-btn ${activeTab === 'apply' ? 'active' : ''}`}
              style={{
                padding: '10px 24px',
                fontSize: '15px',
                transform: activeTab === 'apply' ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              Apply for 2026/2027
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`tab-btn ${activeTab === 'track' ? 'active' : ''}`}
              style={{
                padding: '10px 24px',
                fontSize: '15px',
                transform: activeTab === 'track' ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              Track Application Status
            </button>
          </div>
        </Reveal>

        {activeTab === 'apply' ? (
          <div key="apply-tab" className="tab-content-enter">
            {/* Requirements & 4-Stage Pipeline */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
                marginBottom: '50px'
              }}
            >
              {/* Requirements */}
              <div
                className="sewedy-card card-interactive"
                style={{
                  borderTop: '4px solid var(--primary-red)',
                  padding: '30px'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginBottom: '16px' }}>
                  Admission Requirements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {admissionsInfo.requirements.map((req, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color="var(--primary-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <strong style={{ color: '#111827', fontSize: '0.94rem', display: 'block' }}>{req.title}</strong>
                        <span style={{ color: '#4B5563', fontSize: '0.86rem' }}>{req.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Stage Timeline */}
              <div
                className="sewedy-card card-interactive"
                style={{
                  borderTop: '4px solid #111827',
                  padding: '30px'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginBottom: '16px' }}>
                  4-Stage Admission Pipeline
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {admissionsInfo.steps.map((st, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary-red)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <strong style={{ color: '#111827', fontSize: '0.94rem', display: 'block' }}>{st.title}</strong>
                        <span style={{ color: '#4B5563', fontSize: '0.86rem' }}>{st.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Calculator & Registration Card */}
            <div
              className="sewedy-card"
              style={{
                maxWidth: '820px',
                margin: '0 auto 60px auto',
                backgroundColor: '#F9FAFB',
                padding: '36px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span style={{ color: 'var(--primary-red)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                  Interactive Eligibility Tool
                </span>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#111827', marginTop: '2px' }}>
                  Preparatory Score Eligibility Check
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>
                  Slide to test your Middle School (الإعدادية) score out of 280.
                </p>
              </div>

              {/* Slider */}
              <div style={{ maxWidth: '480px', margin: '0 auto 24px auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>Prep Score:</span>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: isEligible ? '#16A34A' : 'var(--primary-red)' }}>
                    {prepScore} / 280
                  </span>
                </div>

                <input
                  type="range"
                  min="140"
                  max="280"
                  value={prepScore}
                  onChange={(e) => setPrepScore(Number(e.target.value))}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>
                  <span>140 min</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary-red)' }}>220 Required Baseline</span>
                  <span>280 max</span>
                </div>
              </div>

              {/* Status Alert */}
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  backgroundColor: isEligible ? '#ECFDF5' : '#FEF2F2',
                  border: `1px solid ${isEligible ? '#A7F3D0' : '#FECACA'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '26px'
                }}
              >
                {isEligible ? (
                  <CheckCircle2 size={22} color="#16A34A" style={{ flexShrink: 0 }} />
                ) : (
                  <AlertCircle size={22} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                )}
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: isEligible ? '#065F46' : '#991B1B' }}>
                    {isEligible ? 'Eligible for Entrance Examination & Interview!' : 'Score below the 220 degree requirement'}
                  </div>
                  <div style={{ fontSize: '12.5px', color: isEligible ? '#047857' : '#B91C1C' }}>
                    {isEligible
                      ? 'Congratulations! Your score qualifies you for the official entrance exam and Pearson BTEC dual diploma track.'
                      : 'You may still pre-register to receive guidance regarding alternative technical education pathways.'}
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              {!newTrackingId ? (
                <form onSubmit={handleApplySubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Candidate student name"
                        className="sewedy-input"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        Parent / Guardian Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 1..."
                        className="sewedy-input"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="student.parent@gmail.com"
                        className="sewedy-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        Desired Track
                      </label>
                      <select
                        className="sewedy-select"
                        value={formData.preferredTrack}
                        onChange={(e) => setFormData({ ...formData, preferredTrack: e.target.value })}
                      >
                        <option value="Software Programming & IS">Software Programming & Information Systems</option>
                        <option value="Integrated Systems & IoT">Integrated Systems (Hardware & IoT)</option>
                        <option value="Digital Fabrication & FabLab">Digital Fabrication (Fab Lab Hub)</option>
                        <option value="Competitive Programming ICPC">Competitive Programming (El Sewedy ICPC)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      className="sewedy-btn sewedy-btn-primary btn-shimmer"
                      style={{ padding: '13px 36px', fontSize: '15.5px', borderRadius: 'var(--radius-full)' }}
                    >
                      Submit Preliminary Application
                    </button>
                  </div>
                </form>
              ) : (
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px dashed #16A34A',
                    borderRadius: '10px',
                    padding: '24px',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={36} color="#16A34A" style={{ margin: '0 auto 10px auto' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>
                    Application Successfully Registered!
                  </h4>
                  <p style={{ fontSize: '14px', color: '#4B5563', margin: '8px 0 16px 0' }}>
                    Your official Tracking Reference is:
                  </p>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#F3F4F6',
                      border: '1px solid #D1D5DB',
                      padding: '8px 24px',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                      color: 'var(--primary-red)'
                    }}
                  >
                    {newTrackingId}
                  </div>
                  <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '14px' }}>
                    You can use this reference anytime under the <strong>Track Application Status</strong> tab to follow your exam date and admission standing.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('track');
                      setTrackingIdInput(newTrackingId);
                      setTrackedApp(applications.find((a) => a.trackingId === newTrackingId));
                      setTrackedSearched(true);
                    }}
                    className="sewedy-btn"
                    style={{ marginTop: '16px', backgroundColor: '#111827', color: '#FFFFFF', fontSize: '13px' }}
                  >
                    Track This Application Now &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Live Application Tracking Tab */
          <div
            key="track-tab"
            className="sewedy-card card-interactive tab-content-enter"
            style={{
              maxWidth: '740px',
              margin: '0 auto 60px auto',
              padding: '36px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', padding: '10px', backgroundColor: '#FFF1F2', borderRadius: '50%', color: 'var(--primary-red)', marginBottom: '10px' }}>
                <Search size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827' }}>
                Track Your Admissions Application
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>
                Enter your Tracking Reference ID (e.g. <code>ELS-2026-1048</code>) or applicant student name.
              </p>
            </div>

            <form onSubmit={handleTrackSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
              <input
                type="text"
                required
                placeholder="Enter Tracking ID (e.g. ELS-2026-1048) or Name"
                value={trackingIdInput}
                onChange={(e) => setTrackingIdInput(e.target.value)}
                className="sewedy-input"
                style={{ flex: 1 }}
              />
              <button type="submit" className="sewedy-btn sewedy-btn-primary">
                Search Status
              </button>
            </form>

            {/* Tracking Result View */}
            {trackedSearched && (
              <div>
                {trackedApp ? (
                  <div
                    style={{
                      border: '1px solid #E5E7EB',
                      borderRadius: '10px',
                      backgroundColor: '#F9FAFB',
                      padding: '24px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>Tracking ID:</span>
                        <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-red)', fontFamily: 'monospace' }}>
                          {trackedApp.trackingId}
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: '#ECFDF5',
                          color: '#065F46',
                          border: '1px solid #A7F3D0',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '12px',
                          fontWeight: 700
                        }}
                      >
                        {trackedApp.status}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px', marginBottom: '20px' }}>
                      <div>
                        <span style={{ color: '#6B7280' }}>Candidate: </span>
                        <strong>{trackedApp.studentName}</strong>
                      </div>
                      <div>
                        <span style={{ color: '#6B7280' }}>Prep Score: </span>
                        <strong>{trackedApp.prepScore} / 280</strong>
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <span style={{ color: '#6B7280' }}>Chosen Specialization: </span>
                        <strong>{trackedApp.track}</strong>
                      </div>
                    </div>

                    {/* Stepper Timeline */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', margin: '20px 0' }}>
                      {['Submitted', 'Aptitude Exam', 'Interview', 'Enrolled'].map((step, idx) => {
                        const isDone = trackedApp.statusStep >= idx + 1;
                        return (
                          <div key={idx} style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 2 }}>
                            <div
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                backgroundColor: isDone ? 'var(--primary-red)' : '#E5E7EB',
                                color: isDone ? '#FFFFFF' : '#6B7280',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 6px auto',
                                fontSize: '12px',
                                fontWeight: 700
                              }}
                            >
                              {isDone ? '✓' : idx + 1}
                            </div>
                            <span style={{ fontSize: '11px', color: isDone ? '#111827' : '#9CA3AF', fontWeight: isDone ? 700 : 500 }}>
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        padding: '12px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#4B5563',
                        marginTop: '16px'
                      }}
                    >
                      <strong>Latest Update: </strong>{trackedApp.details}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: '#FFF1F2',
                      border: '1px solid #FECACA',
                      borderRadius: '8px',
                      color: 'var(--primary-red)',
                      fontSize: '14px'
                    }}
                  >
                    No application record matched "{trackingIdInput}". Please verify the tracking number or try sample ID <code>ELS-2026-1048</code>.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Testimonials */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827' }}>
              Voices of Trust & Achievement
            </h3>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="sewedy-card"
                style={{
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Quote size={22} color="var(--primary-red)" style={{ opacity: 0.6, marginBottom: '8px' }} />
                  <p style={{ fontSize: '0.94rem', color: '#374151', lineHeight: 1.7, fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '10px' }}>
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#111827' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Asymmetrical Curved Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #DA1B1B 0%, #FF512F 100%)',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '75px 30px',
            borderRadius: '60px 0 60px 0',
            boxShadow: '0 15px 35px rgba(218, 27, 27, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <h2 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
              Ready to Join Our School?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#FFEAEA', marginBottom: '32px', lineHeight: 1.6 }}>
              Take the first step towards an extraordinary future in software and engineering.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${schoolInfo.contact.phone.replace(/\s+/g, '')}`}
                className="sewedy-btn sewedy-btn-white"
                style={{ padding: '14px 34px', fontSize: '16px', borderRadius: '8px' }}
              >
                Call Admissions ({schoolInfo.contact.phone})
              </a>
              <a
                href={`mailto:${schoolInfo.contact.email}`}
                className="sewedy-btn sewedy-btn-outline"
                style={{ padding: '14px 34px', fontSize: '16px', borderRadius: '8px' }}
              >
                Email Admissions Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
