'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 40px',
      background: `linear-gradient(160deg, var(--sand) 0%, var(--cream) 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}
      id="solution"
    >
      {/* Soft blob */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-150px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(171,195,160,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
      }}>
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: '28px',
            overflow: 'hidden',
            aspectRatio: '1/1',
            boxShadow: '0 20px 72px rgba(31,77,58,0.16)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85&fit=crop"
            alt="Clear open workspace — calm and structured"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Right: copy */}
        <div>
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            The Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 700, marginBottom: '24px' }}
          >
            We help founders build the machine behind scalable growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--deep-ocean)', marginBottom: '32px' }}
          >
            Flywheelify embeds with founders to build the operational backbone that makes
            real scale possible — without burning out, losing freedom, or depending on one
            person for everything.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.6 }}
            style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--deep-ocean)', marginBottom: '40px' }}
          >
            We don't hand you a playbook and walk away. We build with you — systems,
            workflows, automation, reporting, and the team infrastructure that lets the
            business grow beyond you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.36, duration: 0.6 }}
          >
            <a href="#apply" className="btn-primary">
              Book a Founder Business Audit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
