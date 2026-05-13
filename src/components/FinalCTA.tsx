'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(31,77,58,0.88) 0%, rgba(28,61,90,0.82) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 40px',
        textAlign: 'center',
      }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: 'block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--sage)',
            marginBottom: '24px',
          }}
        >
          The Next Move
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            color: 'var(--cream)',
            marginBottom: '28px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Build a business that gives you your life back.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22, duration: 0.6 }}
          style={{
            fontSize: '19px',
            color: 'rgba(250,248,244,0.78)',
            lineHeight: 1.7,
            marginBottom: '48px',
            maxWidth: '580px',
            margin: '0 auto 48px',
          }}
        >
          Freedom, impact, and growth aren't in conflict. They're the result of
          building the right foundation. Start with a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.34, duration: 0.6 }}
        >
          <a
            href="#apply"
            className="btn-primary"
            style={{
              fontSize: '18px',
              padding: '20px 56px',
              background: 'var(--cream)',
              color: 'var(--forest)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--sage)';
              (e.currentTarget as HTMLElement).style.color = 'var(--forest)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--cream)';
              (e.currentTarget as HTMLElement).style.color = 'var(--forest)';
            }}
          >
            Book a Founder Business Audit
          </a>
          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: 'var(--sage)',
            fontWeight: 500,
          }}>
            Free · 45 minutes · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
