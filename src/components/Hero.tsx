'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.75, ease },
  };
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '120px',
      paddingBottom: '120px',
      paddingLeft: '24px',
      paddingRight: '24px',
      background: `linear-gradient(170deg, var(--cream) 0%, var(--sand) 55%, rgba(171,195,160,0.15) 100%)`,
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Animated background blobs */}
      <motion.div
        animate={{ y: [0, -28, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,104,79,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, 24, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,164,169,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(171,195,160,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '860px', width: '100%', position: 'relative' }}>

        {/* Callout pill */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(31,77,58,0.08)',
            border: '1px solid rgba(31,77,58,0.14)',
            borderRadius: '999px',
            padding: '8px 20px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--forest)',
            letterSpacing: '0.01em',
          }}>
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--teal)',
                flexShrink: 0,
                display: 'block',
              }}
            />
            For founders doing $10K/month to $3M+/year
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          style={{
            fontSize: 'clamp(40px, 6vw, 76px)',
            fontWeight: 700,
            color: 'var(--forest)',
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          You built the business.{' '}
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--evergreen)' }}>
            Why does it still feel like it owns you?
          </em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.24)}
          style={{
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: 'var(--deep-ocean)',
            lineHeight: 1.72,
            maxWidth: '680px',
            margin: '0 auto 52px',
            opacity: 0.85,
          }}
        >
          Most founders hit real growth — then hit a wall. You become the bottleneck.
          Every decision, every hire, every fire flows through you. Flywheelify helps
          founders build the systems, operations, and infrastructure that let the business
          grow without consuming your life.
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          {...fadeUp(0.36)}
          style={{ marginBottom: '52px' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '760px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '16/9',
            background: 'var(--forest)',
            boxShadow: '0 20px 80px rgba(31,77,58,0.2)',
            cursor: 'pointer',
          }}>
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85&fit=crop"
              alt="Video background"
              fill
              style={{ objectFit: 'cover', opacity: 0.65 }}
              priority
            />
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(31,77,58,0.6) 0%, rgba(28,61,90,0.5) 100%)',
            }} />
            {/* Play button */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(250,248,244,0.15)',
                  border: '2px solid rgba(250,248,244,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.28)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M2 2L20 13L2 24V2Z" fill="rgba(250,248,244,0.95)" stroke="none" />
                </svg>
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(250,248,244,0.75)',
                letterSpacing: '0.04em',
              }}>
                Watch — 3 minutes
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.48)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <a
            href="#apply"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            style={{ fontSize: '17px', padding: '18px 52px' }}
          >
            Book Your Founder Business Audit
          </a>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--evergreen)',
            opacity: 0.8,
          }}>
            Free · No pressure · 45 minutes
          </span>
        </motion.div>

      </div>
    </section>
  );
}
