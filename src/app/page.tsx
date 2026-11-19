import ProductScene from "@/components/ProductScene";
import NativeExperience from "@/components/NativeExperience";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ProximityDemo from "@/components/ProximityDemo";
import CurrencyDemo from "@/components/CurrencyDemo";
import CinematicJourney, { Feather } from "@/components/CinematicJourney";
import OriginalLogo from "@/components/OriginalLogo";
import AirIdentity from "@/components/AirIdentity";
import MotionDirector from "@/components/MotionDirector";
import AeriaWordmark from "@/components/AeriaWordmark";
import { Arrow, SaudiRiyal, Symbol } from "@/components/Icons";
import { TESTFLIGHT_URL } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content" className="aeria-garden">
      <MotionDirector />
      <CinematicJourney />

      <section id="vision" className="section story-section">
        <div className="shell">
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">01 / A MORE CONNECTED WORLD</span>
              <span className="small-note">The vision behind Aeria</span>
            </div>
            <div className="story-heading">
              <h2>
                The world is connected.
                <br />
                <span>Payments should be, too.</span>
              </h2>
              <p>
                A different app. Another currency. One more account number.
                Moving money still asks us to navigate a world of disconnected
                systems.
                <br />
                <br />
                Aeria is being built around a simple idea: start with the
                person, and bring the right payment networks together.
              </p>
            </div>
          </Reveal>
          <div
            className="fragmentation"
            aria-label="Aeria's vision connects people across currencies and payment methods"
          >
            <div className="fragment-labels">
              <span>Different currencies</span>
              <span>Different networks</span>
              <span>Different experiences</span>
            </div>
            <div className="fragment-line">
              <span>₹</span>
              <span>€</span>
              <span>
                <SaudiRiyal />
              </span>
              <span>$</span>
              <span>£</span>
            </div>
            <div className="connection-stem" />
            <div className="connection-destination">
              <OriginalLogo size={32} />
              <span>One Aeria experience</span>
            </div>
          </div>
        </div>
      </section>

      <section id="identity" className="section identity-section">
        <div className="shell split-layout">
          <Reveal className="section-copy">
            <span className="eyebrow">02 / YOUR AERIA ID</span>
            <h2>
              Uniquely you.
              <br />
              <span>Universally Aeria.</span>
            </h2>
            <p>
              A name that feels like yours. An identity designed to connect you
              to people and businesses, without exchanging long payment details.
            </p>
            <p>
              Find someone by their Aeria ID, through your contacts, or nearby
              on supported devices. One familiar starting point for every
              eligible payment.
            </p>
            <a href="#p2p" className="text-link">
              Meet a simpler way to connect <Arrow />
            </a>
            <span className="roadmap-label">PRODUCT DIRECTION</span>
          </Reveal>
          <AirIdentity />
        </div>
      </section>

      <section id="p2p" className="section proximity-section">
        <div className="shell">
          <Reveal className="proximity-heading">
            <div><span className="eyebrow">03 / PROXIMITY, WITH PURPOSE</span>
            <h2>Closer<br /><span>than ever.</span></h2></div>
            <p>
              Some connections are right in front of you.
              <br />
              Aeria’s vision makes nearby discovery the natural start of a
              payment.
            </p>
          </Reveal>
          <ProximityDemo />

        </div>
      </section>

      <section id="currencies" className="section currency-section">
        <div className="shell split-layout">
          <Reveal className="section-copy">
            <span className="eyebrow">04 / BEYOND BORDERS</span>
            <h2>
              A different currency.
              <br />
              <span>The same ease.</span>
            </h2>
            <p>
              Send in a currency you know. See what arrives on the other side.
              Aeria’s ambition is to make the details clear, wherever a
              supported route can take you.
            </p>
            <div className="simple-feature">
              <Symbol name="globe" />
              <span>
                Global by design.
                <small>
                  Availability shaped by local rules and partner coverage.
                </small>
              </span>
            </div>
            <div className="simple-feature">
              <Symbol name="layers" />
              <span>
                Clarity at every step.
                <small>
                  Review the rate, fees, final amount and timing first.
                </small>
              </span>
            </div>
            <span className="roadmap-label">
              ILLUSTRATIVE EXPERIENCE · PLANNED CAPABILITY
            </span>
          </Reveal>
          <Reveal>
            <CurrencyDemo />
          </Reveal>
        </div>
      </section>

      <section id="everyday" className="section everyday-section">
        <div className="shell">
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">05 / DESIGNED AROUND YOU</span>
              <span className="small-note">Fewer steps. More life.</span>
            </div>
            <div className="story-heading">
              <h2>
                Fits into your day.
                <br />
                <span>Stays out of your way.</span>
              </h2>
              <p>
                From a familiar contact to a supported system shortcut, Aeria
                aims to meet you where you already are. A native experience,
                with you in control.
              </p>
            </div>
          </Reveal>
          <div className="everyday-grid">
            <figure className="daily-art">
              <NativeExperience />
              <figcaption>
                <span>AERIA, WHERE YOU ALREADY ARE.</span>Illustrative native experience ·
                planned capabilities
              </figcaption>
            </figure>
            <div className="everyday-features">
              {[
                {
                  icon: "contact" as const,
                  title: "A familiar name.",
                  desc: "Contacts and Aeria ID search are planned to help you find the right person.",
                },
                {
                  icon: "layers" as const,
                  title: "A place in your day.",
                  desc: "Planned Home Screen widgets give Aeria a familiar starting point on your phone.",
                },
                {
                  icon: "search" as const,
                  title: "One less step.",
                  desc: "Spotlight and supported system shortcuts are part of the intended native experience.",
                },
              ].map((f, i) => (
                <div className="everyday-feature" key={f.title}>
                  <span className="feature-number">0{i + 1}</span>
                  <Symbol name={f.icon} />
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
              <p className="native-note">
                Planned for iOS and Android using each platform’s supported
                capabilities. Features will vary by device and release.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="terminal" className="section merchant-section">
        <div className="shell merchant-layout">
          <figure className="terminal-art">
            <ProductScene merchant />
            <figcaption>
              Merchant discovery & tap · product concept.
              <br />
              An exploration of form, not final hardware specifications.
            </figcaption>
          </figure>
          <Reveal className="section-copy">
            <span className="eyebrow">06 / FOR MERCHANTS & BUSINESSES</span>
            <h2>
              Good for people.
              <br />
              <span>Made for possibility.</span>
            </h2>
            <p>
              A more connected way to accept payments. Aeria’s merchant vision
              brings the same considered experience to the other side of the
              counter.
            </p>
            <div className="merchant-features">
              <div>
                <span>01</span>
                <h3>Aeria Terminal</h3>
                <p>A dedicated contactless acceptance concept.</p>
              </div>
              <div>
                <span>02</span>
                <h3>More ways to accept</h3>
                <p>
                  Compatible terminals and smartphone acceptance, where
                  supported.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Built to connect</h3>
                <p>
                  Planned merchant integrations and business payment
                  infrastructure.
                </p>
              </div>
            </div>
            <p className="merchant-note">
              Acceptance requires compatible infrastructure and an approved
              acquiring route. Merchant payouts are a separate process. No
              universal NFC compatibility is implied.
            </p>
            <a href="#innovation" className="text-link">
              Explore the connected ecosystem <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="innovation" className="section ecosystem-section">
        <div className="shell">
          <Reveal className="centered-heading">
            <span className="eyebrow">
              07 / ONE EXPERIENCE, MANY POSSIBILITIES
            </span>
            <h2>
              Many rails.
              <br />
              <span>One Aeria.</span>
            </h2>
            <p>
              The experience should feel simple. The connections underneath can
              be extraordinary.
            </p>
          </Reveal>
          <div className="ecosystem-map">
            <div className="ecosystem-side">
              <span>
                <Symbol name="contact" />
                People
              </span>
              <span>
                <Symbol name="nearby" />
                Merchants
              </span>
              <span>
                <Symbol name="layers" />
                Businesses
              </span>
            </div>
            <div className="network-threads">
              <i />
              <i />
              <i />
            </div>
            <div className="ecosystem-core">
              <strong><AeriaWordmark /></strong>
              <span>Identity & orchestration</span>
            </div>
            <div className="network-threads right">
              <i />
              <i />
              <i />
            </div>
            <div className="ecosystem-side">
              <span>
                <Symbol name="card" />
                Card networks
              </span>
              <span>
                <Symbol name="bank" />
                Bank-based methods
              </span>
              <span>
                <Symbol name="coin" />
                Digital currencies
              </span>
            </div>
          </div>
          <div className="ecosystem-explainer">
            <p>
              Aeria is designed to connect identity, discovery and payment
              routing in one interface. Independent partner connections make
              room for multiple funding and payout methods.
            </p>
            <p>
              Licensed partners would handle regulated financial execution and
              custody where required. Each route depends on eligibility, network
              participation, regulations and partner coverage.
            </p>
          </div>
          <div className="architecture-strip">
            <span>THE INTENDED ARCHITECTURE</span>
            <span>Experience</span>
            <Arrow />
            <span>Identity & intelligence</span>
            <Arrow />
            <span>Orchestration</span>
            <Arrow />
            <span>Financial partners</span>
          </div>
          <p className="map-note">
            A product architecture vision. Categories shown do not represent
            confirmed partnerships or live payment routes.
          </p>
        </div>
      </section>

      <section id="privacy" className="section trust-section">
        <div className="shell">
          <Reveal>
            <div className="trust-heading">
              <span className="trust-emblem">
                <Symbol name="shield" />
              </span>
              <span className="eyebrow">08 / BUILT ON INTENTION</span>
              <h2>
                Simplicity on the surface.
                <br />
                <span>Care in every layer.</span>
              </h2>
              <p>
                Trust starts with thoughtful design. These principles guide the
                Aeria experience we’re building.
              </p>
            </div>
          </Reveal>
          <div className="trust-grid">
            <div>
              <span>01</span>
              <h3>Your money. Your control.</h3>
              <p>
                Aeria’s noncustodial direction means it is designed not to hold
                your funds or digital assets. Licensed partners handle regulated
                money movement and safeguarding where required.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Details you approve.</h3>
              <p>
                Device-bound authorization is intended to bind approval to the
                recipient, amount, currency and transaction expiry. Nearby
                discovery alone is never payment permission.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Protection by design.</h3>
              <p>
                Tokenized credentials, encrypted communication, recipient
                verification and transaction checks form part of the planned
                architecture. These principles guide the platform’s development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="section questions-section">
        <div className="shell questions-layout">
          <Reveal>
            <span className="eyebrow">A LITTLE MORE CLARITY</span>
            <h2>
              Before you
              <br />
              <span>take flight.</span>
            </h2>
          </Reveal>
          <div className="faq-list">
            {[
              [
                "What is Aeria?",
                "Aeria is built around a universal payment identity and a proximity-first experience that orchestrates eligible payment routes through financial partners.",
              ],
              [
                "What can I try today?",
                "The existing Aeria TestFlight beta link is available below. Access depends on Apple’s TestFlight and the beta’s enrollment status. The interactions on this website are product concepts and do not establish the beta’s current capabilities.",
              ],
              [
                "Does Aeria hold my money?",
                "Aeria is being designed as a noncustodial experience and orchestration platform. Licensed partners would execute regulated payments and hold or safeguard funds where legally required.",
              ],
              [
                "Will it work in every country and currency?",
                "That is the long-term ambition, not a claim of current coverage. Availability will depend on partner coverage, local regulations, eligible payment methods and approved routes.",
              ],
              [
                "Does being nearby send a payment automatically?",
                "No. The intended flow requires the sender to select and confirm the recipient, review the amount and explicitly authorize the transaction. Proximity is a discovery method, never authorization.",
              ],
              [
                "Can any merchant terminal accept Aeria?",
                "No universal terminal compatibility is claimed. Acceptance will require supported hardware or software, a compatible integration and an approved acquiring route. Merchant payout is a separate process.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="final-cta">
        <div className="return-to-light" aria-hidden="true" />
        <div className="shell closing-content">
          <Feather />
          <span className="eyebrow">A NEW DIMENSION OF PAYMENTS</span>
          <h2>
            The future is closer
            <br />
            than you think.
          </h2>
          <p>One identity. Every currency. Everywhere.</p>
          <Button href={TESTFLIGHT_URL} external>
            Fly with Aeria
          </Button>
          <small>
            Explore the TestFlight beta.
            <br />
            Access and features depend on the current beta release.
          </small>
        </div>
      </section>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-layout">
            <div className="footer-identity">
              <a className="footer-brand" href="#hero" aria-label="Aeria home">
                <OriginalLogo size={32} />
                <AeriaWordmark />
              </a>
              <p className="footer-tagline">A new dimension of connection.</p>
            </div>
            <nav className="footer-navigation" aria-label="Footer">
              <a href="#identity">Aeria ID <Arrow /></a>
              <a href="#p2p">The experience <Arrow /></a>
              <a href="#terminal">Merchants <Arrow /></a>
              <a href="#privacy">Trust & security <Arrow /></a>
            </nav>
            <a className="footer-return" href="#hero" aria-label="Back to top">
              <Arrow />
            </a>
          </div>
          <div className="footer-meta">
            <div className="footer-colophon">
              <p>© {new Date().getFullYear()} Aeria.</p>
              <span>Fly with Aeria.</span>
            </div>
            <p className="footer-availability">
              A global vision. Availability depends on approved partners, routes
              and local regulations.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
