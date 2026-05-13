'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AuditCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--forest)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(47,164,169,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(171,195,160,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: 'block',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--teal)',
            marginBottom: '16px',
          }}
        >
          The First Step
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            marginBottom: '28px',
            color: 'var(--cream)',
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Let&apos;s figure out what&apos;s actually holding the business back.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '19px',
            lineHeight: 1.75,
            color: 'rgba(250,248,244,0.72)',
            maxWidth: '680px',
            margin: '0 auto 48px',
          }}
        >
          The Founder Business Audit is a strategic 45-minute deep-dive where we break down
          your operations, identify where you&apos;re the bottleneck, uncover hidden growth constraints,
          and map the clearest path to a business that scales without you in every seat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '52px',
          }}
        >
          {[
            'Identify bottlenecks',
            'Uncover growth constraints',
            'Map scalable operations',
            'Define the path forward',
          ].map((item) => (
            <span key={item} style={{
              padding: '10px 20px',
              background: 'rgba(250,248,244,0.08)',
              border: '1px solid rgba(250,248,244,0.14)',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--sage)',
              fontFamily: "'Inter', sans-serif",
            }}>
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
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
            Book Your Founder Business Audit
          </a>
          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: 'var(--sage)',
            fontWeight: 500,
            opacity: 0.8,
          }}>
            Free · Strategic · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
