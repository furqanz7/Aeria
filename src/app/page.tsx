'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Button from '@/components/Button';
import { TESTFLIGHT_URL } from '@/lib/site';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function Fade({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <AnimatedBackground />
      <main id="main-content" className="relative z-10">
        <section
          id="hero"
          className="section-pad flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center text-center"
        >
          <motion.div
            className="section-shell flex flex-col items-center"
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            variants={stagger}
          >
            <Fade>
              <p className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-300 sm:text-sm">
                Proximity payments
              </p>
            </Fade>
            <Fade>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Aeria
              </h1>
            </Fade>
            <Fade>
              <p className="mt-4 max-w-2xl text-xl font-medium text-zinc-300 sm:text-3xl">
                The future of payments.
              </p>
            </Fade>
            <Fade>
              <p className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
                World&apos;s first universal cross-platform proximity payment system for peer-to-peer
                and peer-to-terminal transactions.
              </p>
            </Fade>
            <Fade>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#p2p">Explore features</Button>
                <Button href={TESTFLIGHT_URL} variant="secondary" external>
                  Download on TestFlight
                </Button>
              </div>
            </Fade>
            <Fade className="mt-14 w-full max-w-md sm:mt-16 sm:max-w-lg">
              <div className="media-frame aspect-square p-4 sm:p-6">
                <Image
                  src="/logo.png"
                  alt="Aeria logo"
                  width={512}
                  height={512}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
            </Fade>
          </motion.div>
        </section>

        <Section id="p2p" className="section-pad bg-black">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Fade>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">P2P</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Peer-to-peer payments.
              </h2>
              <p className="mt-5 text-lg text-zinc-400">
                Send and receive money instantly with proximity. No manual app opening required.
              </p>
              <ul className="feature-list mt-8">
                <li>Homescreen payment UI activates automatically</li>
                <li>Cross-platform compatibility</li>
                <li>Zero-configuration networking</li>
                <li>Enterprise-grade security</li>
              </ul>
              <div className="mt-10">
                <Button href="#terminal" variant="ghost" className="!px-0">
                  Next: Terminal →
                </Button>
              </div>
            </Fade>
            <Fade>
              <div className="media-frame aspect-square max-lg:mx-auto max-lg:max-w-md">
                <Image
                  src="/p2p.webp"
                  alt="Peer-to-peer proximity payments on mobile"
                  width={960}
                  height={960}
                  className="h-full w-full object-contain p-2"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
            </Fade>
          </div>
        </Section>

        <Section id="terminal" className="section-pad bg-zinc-950">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Fade>
              <div className="media-frame mx-auto aspect-[2/3] w-full max-w-xs lg:max-w-sm">
                <Image
                  src="/terminal.jpeg"
                  alt="Aeria NFC payment terminal"
                  width={320}
                  height={480}
                  className="h-full w-full object-contain p-2"
                  sizes="(max-width: 1024px) 70vw, 320px"
                />
              </div>
            </Fade>
            <Fade>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">Terminal</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Native NFC terminal.
              </h2>
              <p className="mt-5 text-lg text-zinc-400">
                Tap your phone to pay. Card Rails technology is built for reliability at the point of sale.
              </p>
              <ul className="feature-list mt-8">
                <li>Native NFC integration</li>
                <li>High reliability with Card Rails</li>
                <li>Instant confirmation</li>
                <li>Enterprise security</li>
              </ul>
              <motion.div className="mt-10">
                <Button href="#innovation" variant="ghost" className="!px-0">
                  Next: Innovation →
                </Button>
              </motion.div>
            </Fade>
          </div>
        </Section>

        <Section id="innovation" className="section-pad bg-black">
          <div className="section-shell text-center">
            <Fade>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">Innovation</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Beyond UPI.</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
                Replacing Bank Server Rails with Card Rails to reduce transaction failures and latency.
              </p>
            </Fade>
            <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
              <Fade className="comparison-card border-red-500/20 bg-red-500/5">
                <h3 className="text-xl font-semibold text-red-400">Traditional UPI</h3>
                <ul className="feature-list mt-6">
                  <li>Bank Server Rails dependency</li>
                  <li>Frequent failures</li>
                  <li>Manual app opening</li>
                  <li>Limited proximity options</li>
                </ul>
              </Fade>
              <Fade className="comparison-card border-emerald-500/20 bg-emerald-500/5">
                <h3 className="text-xl font-semibold text-emerald-400">Aeria</h3>
                <ul className="feature-list mt-6">
                  <li>Card Rails reliability</li>
                  <li>Designed for consistent completion</li>
                  <li>Homescreen-first experience</li>
                  <li>Universal proximity</li>
                </ul>
              </Fade>
            </div>
          </div>
        </Section>

        <Section id="privacy" className="section-pad bg-zinc-950">
          <div className="section-shell text-center">
            <Fade>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">Privacy</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Privacy by design.</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
                Enterprise-grade security with zero data collection. Your privacy is our priority.
              </p>
            </Fade>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { title: 'TLS 1.3', desc: 'Latest encryption for data in transit' },
                { title: 'Apple REST API', desc: 'Native iOS authorization integration' },
                { title: 'Google OAuth 2.0', desc: 'Secure Android authentication' },
              ].map((item) => (
                <Fade
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left sm:text-center"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                </Fade>
              ))}
            </div>
            <Fade className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-black/50 p-8 text-left sm:text-center">
              <h3 className="text-xl font-semibold text-white">Zero data collection</h3>
              <p className="mt-3 text-zinc-300">
                Aeria processes transactions locally on your device. No personal data, transaction
                history, or user information is stored on our servers.
              </p>
            </Fade>
          </div>
        </Section>

        <footer id="download" className="border-t border-white/10 bg-black py-16">
          <div className="section-shell flex flex-col items-center gap-8 text-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to try Aeria?</h2>
              <p className="mt-3 max-w-lg text-zinc-400">
                Join the TestFlight beta and experience proximity payments firsthand.
              </p>
            </div>
            <Button href={TESTFLIGHT_URL} external>
              Download on TestFlight
            </Button>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Aeria. Universal cross-platform proximity payments.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
