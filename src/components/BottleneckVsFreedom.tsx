'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const bottleneck = [
  'Every decision flows through you',
  'Team can\'t execute without checking in',
  'No visibility into what\'s actually working',
  'Growth feels heavier each month',
  'Can\'t unplug without things stalling',
  'Operating on memory and hustle',
];

const freedom = [
  'Team executes clearly without you',
  'Systems make decisions for you',
  'Real-time clarity on what\'s working',
  'Growth compounds without more of you',
  'Disappear for a week. Business runs.',
  'Operating on infrastructure and flow',
];

export default function BottleneckVsFreedom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--sand)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="section-eyebrow" style={{ justifyContent: 'center', display: 'block' }}>
            Two Paths
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: 'var(--forest)',
          }}>
            Where are you right now?
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}>
          {/* Bottleneck */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(28,61,90,0.06)',
              borderRadius: '28px',
              padding: '48px 40px',
              border: '1px solid var(--beige)',
            }}
          >
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(28,61,90,0.5)',
              marginBottom: '32px',
            }}>
              Founder Bottleneck
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {bottleneck.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '14px',
                  }}
                >
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(28,61,90,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '11px',
                    color: 'rgba(28,61,90,0.5)',
                    fontWeight: 700,
                  }}>✕</span>
                  <span style={{ fontSize: '16px', color: 'var(--deep-ocean)', opacity: 0.75 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Freedom */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--forest)',
              borderRadius: '28px',
              padding: '48px 40px',
              boxShadow: '0 16px 64px rgba(31,77,58,0.22)',
            }}
          >
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              marginBottom: '32px',
            }}>
              Founder Freedom
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {freedom.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    background: 'rgba(250,248,244,0.07)',
                    borderRadius: '14px',
                  }}
                >
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(171,195,160,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '11px',
                    color: 'var(--sage)',
                    fontWeight: 700,
                  }}>✓</span>
                  <span style={{ fontSize: '16px', color: 'var(--cream)', opacity: 0.9 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
