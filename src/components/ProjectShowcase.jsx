import React, { useState, useEffect } from 'react';
import { initialProjects } from '../data/dynamicData';
import { Search, Heart, ExternalLink, X, CheckCircle2, Filter, Layers, Users } from 'lucide-react';
import Reveal from './common/Reveal';

export default function ProjectShowcase({ onShowToast }) {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('sewedy_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [justLikedId, setJustLikedId] = useState(null);
  const [likedMap, setLikedMap] = useState(() => {
    const saved = localStorage.getItem('sewedy_likes');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('sewedy_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('sewedy_likes', JSON.stringify(likedMap));
  }, [likedMap]);

  const handleLike = (e, projectId) => {
    e.stopPropagation();
    const isAlreadyLiked = likedMap[projectId];

    setJustLikedId(projectId);
    setTimeout(() => setJustLikedId(null), 800);

    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          return { ...p, likes: isAlreadyLiked ? p.likes - 1 : p.likes + 1 };
        }
        return p;
      })
    );

    setLikedMap((prev) => ({
      ...prev,
      [projectId]: !isAlreadyLiked
    }));

    if (!isAlreadyLiked) {
      onShowToast('Project upvoted! Thank you for supporting our student engineers.');
    }
  };

  const categories = [
    { id: 'all', label: 'All Capstones' },
    { id: 'software', label: 'Software & Web' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'fablab', label: 'Fab Lab Hardware' },
    { id: 'icpc', label: 'Algorithms' }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q)) ||
      p.students.some((s) => s.toLowerCase().includes(q));

    return matchesCat && matchesQuery;
  });

  return (
    <section id="projects" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Title */}
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>Student Capstone Showcase & Live Portfolio</h2>
            <p>
              Explore production-grade engineering prototypes developed by our students. Search, inspect technical architectures, and vote for your favorites.
            </p>
          </div>
        </Reveal>

        {/* Filter & Live Search Toolbar */}
        <Reveal effect="fade-up" delay={100}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '32px',
              padding: '16px 20px',
              backgroundColor: '#F8F9FA',
              borderRadius: '12px',
              border: '1px solid #E5E7EB'
            }}
          >
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`tab-btn ${selectedCategory === c.id ? 'active' : ''}`}
                  style={{
                    fontSize: '13.5px',
                    padding: '8px 16px',
                    transform: selectedCategory === c.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search
                size={16}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }}
              />
              <input
                type="text"
                placeholder="Search projects, tech, or students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sewedy-input"
                style={{ paddingLeft: '36px', height: '42px', fontSize: '13.5px', borderRadius: 'var(--radius-full)' }}
              />
            </div>
          </div>
        </Reveal>

        {/* Projects Grid with Staggered Entrance */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredProjects.map((proj, idx) => {
            const isLiked = likedMap[proj.id];
            const isAnimatingHeart = justLikedId === proj.id;
            return (
              <Reveal key={proj.id} effect="fade-up" delay={(idx % 6) * 80}>
                <div
                  onClick={() => setActiveProjectModal(proj)}
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
                  {/* Project Image with Zoom */}
                  <div className="img-zoom-container" style={{ height: '200px', width: '100%', position: 'relative' }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(17, 24, 39, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: '#FFFFFF',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '11px',
                        fontWeight: 700
                      }}
                    >
                      {proj.track}
                    </div>

                    {/* Interactive Like Button with Heartbeat */}
                    <button
                      onClick={(e) => handleLike(e, proj.id)}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        backgroundColor: '#FFFFFF',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        padding: '6px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: isLiked ? 'var(--primary-red)' : '#4B5563',
                        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                      title="Upvote Capstone"
                    >
                      <Heart
                        size={15}
                        className={isAnimatingHeart ? 'animate-heart-beat' : ''}
                        fill={isLiked ? 'var(--primary-red)' : 'none'}
                        color={isLiked ? 'var(--primary-red)' : '#4B5563'}
                      />
                      <span>{proj.likes}</span>
                    </button>
                  </div>

                  {/* Project Details */}
                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '11.5px', color: 'var(--primary-red)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      {proj.year}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px', lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                      {proj.shortDesc}
                    </p>

                    {/* Tech Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            backgroundColor: '#F3F4F6',
                            color: '#374151',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            fontSize: '11.5px',
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid #F3F4F6',
                        fontSize: '12px',
                        color: '#6B7280'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Users size={14} color="#9CA3AF" />
                        <span>{proj.students.length} Student Engineers</span>
                      </div>
                      <span style={{ color: 'var(--primary-red)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>Inspect</span>
                        <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Architecture Modal */}
      {activeProjectModal && (
        <div className="modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#111827' }}>
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
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

            <div style={{ padding: '26px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase' }}>
                  {activeProjectModal.track} &bull; {activeProjectModal.year}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-red)' }}>
                  &hearts; {activeProjectModal.likes} Upvotes
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                {activeProjectModal.title}
              </h3>

              <p style={{ color: '#4B5563', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {activeProjectModal.shortDesc}
              </p>

              {/* Industrial Impact */}
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: '#ECFDF5',
                  borderLeft: '4px solid #10B981',
                  borderRadius: '6px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#065F46', marginBottom: '2px' }}>
                  REAL-WORLD INDUSTRIAL IMPACT
                </div>
                <div style={{ fontSize: '13px', color: '#047857' }}>
                  {activeProjectModal.impact}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Student Engineering Squad:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeProjectModal.students.map((st, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#F3F4F6',
                        border: '1px solid #E5E7EB',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#1F2937'
                      }}
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Technologies & Firmware:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeProjectModal.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: 'var(--primary-red-subtle)',
                        color: 'var(--primary-red)',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12.5px',
                        fontWeight: 600
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={(e) => {
                    handleLike(e, activeProjectModal.id);
                    setActiveProjectModal((prev) => ({
                      ...prev,
                      likes: likedMap[prev.id] ? prev.likes - 1 : prev.likes + 1
                    }));
                  }}
                  className="sewedy-btn sewedy-btn-primary btn-shimmer"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <Heart size={16} fill={likedMap[activeProjectModal.id] ? '#FFFFFF' : 'none'} />
                  <span>{likedMap[activeProjectModal.id] ? 'Upvoted!' : 'Upvote This Project'}</span>
                </button>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="sewedy-btn"
                  style={{
                    backgroundColor: '#F3F4F6',
                    color: '#374151',
                    padding: '12px 20px',
                    borderRadius: '8px'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
