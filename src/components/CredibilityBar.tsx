'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedStat({
  prefix, target, suffix, label, delay,
}: {
  prefix: string; target: number; suffix: string; label: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = Date.now();
    let frame: number;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center' }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(40px, 4.5vw, 60px)',
        fontWeight: 700,
        color: 'var(--cream)',
        lineHeight: 1,
        marginBottom: '10px',
        letterSpacing: '-0.02em',
      }}>
        {prefix}{count}{suffix}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--sage)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.85,
      }}>
        {label}
      </div>
    </motion.div>
  );
}

const stats = [
  { prefix: '$', target: 2, suffix: 'M+', label: 'Generated for clients', delay: 0 },
  { prefix: '', target: 147, suffix: '%', label: 'Average client growth', delay: 0.18 },
  { prefix: '', target: 287, suffix: '%', label: 'Average order value increase', delay: 0.36 },
];

export default function CredibilityBar() {
  return (
    <section style={{
      background: 'var(--forest)',
      padding: '80px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(47,164,169,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        position: 'relative',
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '0 40px',
              borderRight: i < 2 ? '1px solid rgba(171,195,160,0.18)' : 'none',
            }}
          >
            <AnimatedStat {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
