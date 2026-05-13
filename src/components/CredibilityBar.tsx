'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '$2M+', label: 'Generated for clients' },
  { number: '147%', label: 'Average client growth' },
  { number: '287%', label: 'Average order value increase' },
];

export default function CredibilityBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      background: 'var(--forest)',
      padding: '64px 40px',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px',
        textAlign: 'center',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 700,
              color: 'var(--cream)',
              marginBottom: '8px',
              lineHeight: 1,
            }}>
              {s.number}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--sage)',
              letterSpacing: '0.04em',
            }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
