'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AuditCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--sand)',
    }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
        <motion.span
          className="section-eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'block', textAlign: 'center' }}
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
          }}
        >
          Let's figure out what's actually holding the business back.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '19px',
            lineHeight: 1.75,
            color: 'var(--deep-ocean)',
            marginBottom: '48px',
            maxWidth: '680px',
            margin: '0 auto 48px',
          }}
        >
          The Founder Business Audit is a strategic 45-minute deep-dive where we break down
          your operations, identify where you're the bottleneck, uncover hidden growth constraints,
          and map the clearest path to a business that scales without you in every seat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '48px',
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
              background: 'rgba(31,77,58,0.08)',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--forest)',
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
          <a href="#apply" className="btn-primary" style={{ fontSize: '18px', padding: '20px 56px' }}>
            Book a Founder Business Audit
          </a>
          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: 'var(--evergreen)',
            fontWeight: 500,
          }}>
            Free · Strategic · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
