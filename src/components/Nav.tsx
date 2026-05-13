'use client';
import { useEffect, useState } from 'react';

const links = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#solution' },
  { label: 'What We Build', href: '#build' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 48px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(250,248,244,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(232,226,216,0.8)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}
      >
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '20px',
          color: 'var(--forest)',
          letterSpacing: '-0.01em',
        }}>
          Flywheelify
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          color: 'var(--evergreen)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Systems for Founder Freedom
        </span>
      </a>

      {/* Center links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '36px',
      }}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleNav(e, link.href)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--deep-ocean)',
              textDecoration: 'none',
              opacity: 0.75,
              transition: 'opacity 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
              (e.currentTarget as HTMLElement).style.color = 'var(--forest)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = '0.75';
              (e.currentTarget as HTMLElement).style.color = 'var(--deep-ocean)';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#apply"
        onClick={e => handleNav(e, '#apply')}
        className="btn-primary"
        style={{ fontSize: '14px', padding: '11px 26px' }}
      >
        Book Your Founder Business Audit
      </a>
    </nav>
  );
}
