'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    icon: '⚙️',
    title: 'Systems',
    body: 'Your business runs on repeatable processes — not memory, heroics, or constant re-explaining.',
  },
  {
    icon: '🏗️',
    title: 'Operations',
    body: 'Your team executes cleanly without you in every conversation, decision, or approval chain.',
  },
  {
    icon: '📊',
    title: 'Reporting',
    body: 'You see exactly what\'s working and what isn\'t — at a glance, without digging through spreadsheets.',
  },
  {
    icon: '⚡',
    title: 'Automation',
    body: 'Manual tasks disappear so your team spends time on high-value work, not repetitive overhead.',
  },
  {
    icon: '🌊',
    title: 'Lead Flow',
    body: 'Qualified leads move through your pipeline consistently and predictably — not in bursts.',
  },
  {
    icon: '🤖',
    title: 'AI Infrastructure',
    body: 'Intelligent systems handle the repetitive so your team handles the meaningful.',
  },
  {
    icon: '👥',
    title: 'Team Clarity',
    body: 'Everyone knows their role, their metrics, and what winning looks like — no guessing.',
  },
  {
    icon: '🌿',
    title: 'Founder Freedom',
    body: 'You lead the vision. The business no longer runs you — it runs for you.',
  },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="build" ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--sand)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="section-eyebrow">What We Actually Build</span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Every piece is built around one outcome:{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--evergreen)' }}>your freedom.</em>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--cream)',
                borderRadius: '24px',
                padding: '32px 28px',
                boxShadow: '0 2px 20px rgba(31,77,58,0.07)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default',
              }}
              whileHover={{ y: -4, boxShadow: '0 8px 36px rgba(31,77,58,0.13)' }}
            >
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
              <h4 style={{
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--forest)',
                marginBottom: '10px',
                fontFamily: "'Inter', sans-serif",
              }}>
                {card.title}
              </h4>
              <p style={{
                fontSize: '15px',
                color: 'var(--deep-ocean)',
                lineHeight: 1.65,
                opacity: 0.85,
              }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
