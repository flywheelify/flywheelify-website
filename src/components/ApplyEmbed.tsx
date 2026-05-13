'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function ApplyEmbed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="apply" ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
            Apply Now
          </span>
          <h2 style={{
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            Start here.
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--deep-ocean)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto',
            opacity: 0.85,
          }}>
            Tell us a bit about your business and where you&apos;re at.
            Takes 3 minutes — and you&apos;ll be taken straight to booking after.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#ffffff',
            borderRadius: '28px',
            padding: '48px',
            boxShadow: '0 8px 64px rgba(31,77,58,0.12)',
            border: '1px solid var(--beige)',
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/duVRhIi7uYUJgUTtZyZs"
            style={{ border: 'none', width: '100%', minHeight: '600px' }}
            scrolling="no"
            id="duVRhIi7uYUJgUTtZyZs"
            title="Founder Business Audit Application"
          />
        </motion.div>
      </div>
    </section>
  );
}
