'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pains = [
  "You can't step away for a week without things slowing down.",
  "Every major decision still runs through you.",
  "The team is growing, but so is the chaos behind the scenes.",
  "You're reacting constantly instead of leading strategically.",
  "Revenue is climbing — but so is your stress.",
  "The backend of your business is held together by memory, not systems.",
];

export default function FounderProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.span
          className="section-eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          The Real Problem
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: 700,
            marginBottom: '28px',
            maxWidth: '720px',
          }}
        >
          You've built something real.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--evergreen)' }}>
            But you're still trapped inside the business.
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: '19px',
            color: 'var(--deep-ocean)',
            lineHeight: 1.75,
            marginBottom: '64px',
            maxWidth: '640px',
          }}
        >
          You didn&apos;t build a business to have a harder job. But somewhere between the first
          client and where you are now, growth created weight instead of freedom. Sound familiar?
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--sand)',
                borderRadius: '20px',
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 2px 16px rgba(31,77,58,0.06)',
              }}
            >
              <span style={{
                flexShrink: 0,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--teal)',
                marginTop: '10px',
              }} />
              <p style={{
                fontSize: '17px',
                color: 'var(--deep-ocean)',
                lineHeight: 1.65,
                fontWeight: 400,
              }}>
                {pain}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
