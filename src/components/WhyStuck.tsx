'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'No real systems',
    body: 'Processes exist only in your head. When you\'re out of the loop, nothing moves forward.',
  },
  {
    title: 'No delegation structure',
    body: 'Your team wants to help but they don\'t know what \'done\' looks like without asking you.',
  },
  {
    title: 'No operational visibility',
    body: 'You can\'t see what\'s working, what\'s breaking, or where the business is bleeding — until it\'s too late.',
  },
  {
    title: 'No automation',
    body: 'Manual tasks eat up hours that should be going to growth, clients, or your life.',
  },
  {
    title: 'No reporting infrastructure',
    body: 'Without clean data, you make decisions on gut feel instead of clear signal.',
  },
  {
    title: 'No scalability foundation',
    body: 'You\'ve been optimizing for now. No one built the infrastructure for what\'s coming.',
  },
];

export default function WhyStuck() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-eyebrow">The Root Cause</span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            maxWidth: '680px',
            marginBottom: '24px',
          }}>
            Most founders built growth.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--evergreen)' }}>
              They never built infrastructure.
            </em>
          </h2>
          <p style={{
            fontSize: '19px',
            color: 'var(--deep-ocean)',
            lineHeight: 1.75,
            maxWidth: '600px',
          }}>
            The problem isn't your ambition, your team, or your market.
            The problem is operational dependency — and it's entirely fixable.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--sand)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 2px 16px rgba(31,77,58,0.06)',
                borderTop: '3px solid var(--sage)',
              }}
            >
              <h4 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--forest)',
                marginBottom: '12px',
                fontFamily: "'Inter', sans-serif",
              }}>
                {r.title}
              </h4>
              <p style={{
                fontSize: '16px',
                color: 'var(--deep-ocean)',
                lineHeight: 1.65,
                opacity: 0.85,
              }}>
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
