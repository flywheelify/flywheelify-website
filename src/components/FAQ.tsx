'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Founders running online businesses — agencies, coaching, consulting, or high-ticket services — doing between $100K and $3M per year. You\'re selling real offers, likely on sales calls, and you\'ve hit a ceiling where growth is creating more chaos, not more freedom.',
  },
  {
    q: 'What kinds of businesses work best with Flywheelify?',
    a: 'Service-based businesses that sell high-ticket offers ($5K–$100K+). You typically close on sales calls, may have a small team or appointment setters, and you\'re scaling — but the backend hasn\'t caught up with the front end yet.',
  },
  {
    q: 'Is this consulting or implementation?',
    a: 'Neither and both. We don\'t just hand you advice and walk away. We don\'t just execute without your vision. We embed with you to actually build — systems, operations, automation, reporting — so the infrastructure exists when we\'re done.',
  },
  {
    q: 'Do you use AI in your systems?',
    a: 'Yes, where it actually makes sense. AI infrastructure is part of what we build — but only in service of freeing up your team\'s time for high-value work. We don\'t automate for the sake of it.',
  },
  {
    q: 'Do you help with team structure and delegation?',
    a: 'Absolutely. Team clarity — roles, metrics, accountability — is one of the core things we build. Most founders have a team that wants to help but doesn\'t have the structure to execute independently.',
  },
  {
    q: 'Is everything customized or templated?',
    a: 'Everything is built around your business, your team, and your goals. We use proven frameworks as a foundation but we don\'t drop a generic playbook on you and call it done.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most clients start feeling a meaningful shift in operational clarity within the first 30–60 days. Full infrastructure takes longer — it depends on where you\'re starting and how fast we can move together.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You leave with absolute clarity on your biggest bottlenecks and the highest-leverage moves available to you. If it makes sense to work together beyond the audit, we\'ll talk about it. If not, you still walk away with real insight.',
  },
  {
    q: 'What if I don\'t have a team yet?',
    a: 'We still work with you. Foundations matter whether you have 2 people or 20. In fact, building the systems before the team often saves a significant amount of pain when you do start hiring.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: open ? 'var(--cream)' : 'var(--sand)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(31,77,58,0.05)',
        transition: 'background 0.25s ease',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{
        padding: '24px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      }}>
        <h4 style={{
          fontSize: '17px',
          fontWeight: 600,
          color: 'var(--forest)',
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.4,
        }}>
          {q}
        </h4>
        <span style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: open ? 'var(--forest)' : 'var(--beige)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: open ? 'var(--cream)' : 'var(--forest)',
          fontWeight: 700,
          transition: 'all 0.25s ease',
          lineHeight: 1,
        }}>
          {open ? '−' : '+'}
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              padding: '0 28px 24px',
              fontSize: '16px',
              color: 'var(--deep-ocean)',
              lineHeight: 1.7,
              opacity: 0.85,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" ref={ref} style={{
      padding: '140px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
            Common Questions
          </span>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 700 }}>
            Straight answers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
