'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'No real systems',
    body: 'Processes exist only in your head. When you&apos;re out of the loop, nothing moves forward.',
  },
  {
    title: 'No delegation structure',
    body: 'Your team wants to help but they don&apos;t know what &ldquo;done&rdquo; looks like without asking you.',
  },
  {
    title: 'No operational visibility',
    body: 'You can&apos;t see what&apos;s working, what&apos;s breaking, or where the business is bleeding — until it&apos;s too late.',
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
    body: 'You&apos;ve been optimizing for now. No one built the infrastructure for what&apos;s coming.',
  },
];

export default function WhyStuck() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--deep-ocean)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47,164,169,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(31,77,58,0.2) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: 'var(--teal)',
            display: 'block',
            marginBottom: '16px',
          }}>
            The Root Cause
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            maxWidth: '680px',
            marginBottom: '24px',
            color: 'var(--cream)',
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Most founders built growth.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
              They never built infrastructure.
            </em>
          </h2>
          <p style={{
            fontSize: '19px',
            color: 'rgba(250,248,244,0.65)',
            lineHeight: 1.75,
            maxWidth: '600px',
          }}>
            The problem isn&apos;t your ambition, your team, or your market.
            The problem is operational dependency — and it&apos;s entirely fixable.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: '2px solid var(--teal)',
                borderRadius: '24px',
                padding: '36px 32px',
              }}
            >
              <h4 style={{
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--cream)',
                marginBottom: '12px',
                fontFamily: "'Inter', sans-serif",
              }}>
                {r.title}
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(250,248,244,0.6)',
                  lineHeight: 1.65,
                }}
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
