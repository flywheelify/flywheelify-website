'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisons = [
  {
    them: 'Agencies',
    theirWay: 'Build campaigns that need them forever.',
    ourWay: 'We build infrastructure you own and keep.',
  },
  {
    them: 'Consultants',
    theirWay: 'Give advice, hand you a doc, and leave.',
    ourWay: 'We build with you — side by side.',
  },
  {
    them: 'Masterminds',
    theirWay: 'Share information and frameworks.',
    ourWay: 'We build operational reality, not theory.',
  },
  {
    them: 'Courses',
    theirWay: 'Give you knowledge to figure out yourself.',
    ourWay: 'We execute alongside you until it works.',
  },
];

export default function WhyDifferent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-eyebrow">Why Flywheelify</span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            maxWidth: '680px',
          }}>
            Not an agency. Not a consultant.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--evergreen)' }}>
              Not another mastermind.
            </em>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                background: 'var(--sand)',
                borderRadius: '20px',
                padding: '28px 32px',
                boxShadow: '0 2px 12px rgba(31,77,58,0.05)',
              }}
            >
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--deep-ocean)',
                opacity: 0.5,
              }}>
                {c.them}
              </span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(28,61,90,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'rgba(28,61,90,0.4)',
                  fontWeight: 700,
                }}>✕</span>
                <span style={{ fontSize: '16px', color: 'var(--deep-ocean)', opacity: 0.65 }}>
                  {c.theirWay}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(47,104,79,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'var(--evergreen)',
                  fontWeight: 700,
                }}>✓</span>
                <span style={{ fontSize: '16px', color: 'var(--forest)', fontWeight: 500 }}>
                  {c.ourWay}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
