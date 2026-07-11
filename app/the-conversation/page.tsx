"use client";

import { useEffect, useState } from "react";

const CAL_URL = "https://calendly.com/idealclaritysolutions/clarity-intensive";
const VIMEO_URL =
  "https://player.vimeo.com/video/1207592990?badge=0&autopause=0&byline=0&title=0&portrait=0&dnt=1&player_id=0&app_id=58479";

function useReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCalendly() {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const y = target.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function TheConversationPage() {
  useReveal();
  useCalendly();

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const updateSticky = () => {
      const bridge = document.getElementById("bridge");
      if (!bridge) return;

      const bridgeTop = bridge.getBoundingClientRect().top;

      // Show the sticky CTA as the bridge begins entering the viewport.
      // This keeps the hero/video distraction-free, then introduces the CTA
      // once the visitor has started processing the message.
      setShowSticky(bridgeTop <= window.innerHeight * 0.72);
    };

    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);
    updateSticky();

    return () => {
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, []);

  return (
    <main className="tc-root">
      <style>{CSS}</style>

      {/* HERO */}
      <section className="tc-hero">
        <div className="tc-shell tc-center">
          <p className="tc-eyebrow" data-reveal>
            For accomplished professionals who cannot shake the feeling
            that there is something more
          </p>

          <h1 className="tc-hero-title" data-reveal>
            You already know something is calling you.
          </h1>

          <p className="tc-hero-sub" data-reveal>
            This short video explains what has been keeping you stuck
            — and how to finally begin moving toward what matters.
          </p>

          <div className="tc-video-wrap" id="video" data-reveal>
            <iframe
              src={VIMEO_URL}
              title="The conversation you have been postponing"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="tc-video-note" data-reveal>
            No email required. No obligation. Just watch.
          </p>
        </div>
      </section>

      {/* BRIDGE — IMMEDIATELY AFTER THE VIDEO */}
      <section className="tc-bridge" id="bridge">
        <div className="tc-narrow tc-center">
          <h2 className="tc-bridge-kicker" data-reveal>
            If that video felt familiar...
          </h2>

          <h3 className="tc-bridge-title" data-reveal>
            The problem was never that you lacked ambition, discipline,
            or ideas.
          </h3>

          <p className="tc-bridge-copy" data-reveal>
            Something underneath the logic has been protecting you from
            moving. Once you can see it clearly, you can stop letting it
            make your decisions — and begin moving toward what matters.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="tc-section tc-proof">
        <div className="tc-shell">
          <p className="tc-kicker tc-center" data-reveal>
            What people say after the conversation
          </p>

          <h2 className="tc-proof-title" data-reveal>
            Sometimes one honest conversation changes what becomes possible.
          </h2>

          <div className="tc-testimonials">
            <blockquote data-reveal>
              <p>
                “With Chi-Chi, I found my area of genius and unlocked the
                mental blocks that were holding me back from fully monetizing
                my business in a way that reflects my value.
                I&apos;ve 300x&apos;d my revenue so far.”
              </p>
              <cite>— Lola, Rapid Reinvent Hair Treatment</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “Chi-Chi took the time to understand my goals, asked thoughtful
                questions, and helped turn uncertainty into a clear,
                actionable path forward.”
              </p>
              <cite>— Peace</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “Her guidance reframed and clarified my next steps in a
                valuable way.”
              </p>
              <cite>— Hannah Bailey, Studio Northwood</cite>
            </blockquote>
          </div>

          <div className="tc-section-cta" data-reveal>
            <p>
              You do not need another person to tell you what you should want.
              You need a conversation that helps you hear what is already true.
            </p>

            <button
              type="button"
              className="tc-button tc-button-gold"
              onClick={() => scrollToId("offer")}
            >
              See what this conversation can give you
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE OFFER CARD */}
      <section className="tc-section tc-offer-section" id="offer">
        <div className="tc-shell">
          <div className="tc-offer-feature" data-reveal>
            <div className="tc-offer-copy">
              <p className="tc-kicker">The Clarity Intensive</p>

              <h2>
                A private 75-minute conversation that creates real clarity
                and momentum.
              </h2>

              <p className="tc-offer-intro">
                In our time together, we will uncover what has been keeping
                you stuck — and create the clarity and direction you need
                to finally move forward.
              </p>

              <ul className="tc-outcome-list">
                <li>
                  <span>✓</span>
                  Identify the hidden story keeping you stuck
                </li>
                <li>
                  <span>✓</span>
                  Get clear on the work, idea, or life that is calling you
                </li>
                <li>
                  <span>✓</span>
                  Replace the old story with one you can move from
                </li>
                <li>
                  <span>✓</span>
                  Create one next step that fits your real life right now
                </li>
                <li>
                  <span>✓</span>
                  Receive a personalized written clarity summary within 24 hours
                </li>
                <li>
                  <span>✓</span>
                  Receive the e-book
                  <strong> Build What&apos;s Next While Still Employed</strong>
                </li>
              </ul>
            </div>

            <div className="tc-offer-visual">
              <span className="tc-bonus-badge">Free e-book included</span>

              <img
                src="/build-whats-next-3d.png"
                alt="3D mockup of Build What's Next While Still Employed"
              />

              <p>
                A practical guide with my real schedule, systems, and
                strategies for building what&apos;s next without quitting
                your job.
              </p>
            </div>

            <div className="tc-offer-footer">
              <div className="tc-offer-price">
                <span className="tc-price-label">Private session</span>
                <strong className="tc-price">$750</strong>
              </div>

              <div className="tc-offer-action">
                <button
                  type="button"
                  className="tc-button tc-button-ink tc-offer-button"
                  onClick={() => scrollToId("book")}
                >
                  Yes — I&apos;m ready for this conversation
                </button>

                <p className="tc-secure-note">
                  Private booking · Full clarity guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

{/* WHAT YOU'LL LEAVE WITH */}
      <section className="tc-outcomes-section tc-outcomes-continuation">
        <div className="tc-shell">
          <div className="tc-outcomes-header" data-reveal>
            <p className="tc-kicker">
              What you will leave with
            </p>

            <h2>
              Not just insight. A clear way forward.
            </h2>

            <p>
              The Clarity Intensive is designed to do more than uncover the
              problem. You leave with a new way to understand it and a
              specific action you can take next.
            </p>
          </div>

          <div className="tc-outcome-cards">
            <article data-reveal>
              <span>01</span>
              <h3>The real barrier, named</h3>
              <p>
                We identify the hidden story, belief, or protection mechanism
                that has quietly been shaping your decisions.
              </p>
            </article>

            <article data-reveal>
              <span>02</span>
              <h3>A truer story you can move from</h3>
              <p>
                We replace the old interpretation with one that reflects who
                you are now and makes movement feel possible.
              </p>
            </article>

            <article data-reveal>
              <span>03</span>
              <h3>One specific next move</h3>
              <p>
                You leave with an immediate action designed around your real
                responsibilities, energy, and current life.
              </p>
            </article>

            <article data-reveal>
              <span>04</span>
              <h3>A written clarity summary</h3>
              <p>
                Within 24 hours, you receive the key insights and next step
                from our conversation so the clarity does not disappear.
              </p>
            </article>
          </div>

          <div className="tc-outcomes-footer" data-reveal>
            <p>
              One conversation. One honest shift. One next move you can
              actually take.
            </p>

            <button
              type="button"
              className="tc-button tc-button-gold"
              onClick={() => scrollToId("book")}
            >
              Book the conversation
            </button>
          </div>
        </div>
      </section>

      

{/* GUARANTEE */}
      <section className="tc-section tc-navy">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker tc-gold" data-reveal>
            The Clarity Guarantee
          </p>

          <h2 className="tc-display-light" data-reveal>
            If you leave without meaningful clarity, you do not pay.
          </h2>

          <p className="tc-lead tc-light-copy" data-reveal>
            Tell me before we end the conversation, and I will refund you
            in full. No awkward explanation. No hidden conditions.
          </p>

          <div className="tc-section-cta" data-reveal>
            <button
              type="button"
              className="tc-button tc-button-gold"
              onClick={() => scrollToId("book")}
            >
              Book with zero risk
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tc-section tc-cream">
        <div className="tc-narrow">
          <p className="tc-kicker tc-center" data-reveal>
            Questions you may be carrying
          </p>

          <div className="tc-faq" data-reveal>
            <details>
              <summary>
                What if I do not know exactly what my purpose is?
              </summary>
              <p>
                You do not need a perfectly defined calling. You only need
                something that keeps returning to you — an idea, direction,
                or form of work you cannot quite dismiss.
              </p>
            </details>

            <details>
              <summary>What if I want to stay in corporate?</summary>
              <p>
                That is completely valid. This is not an invitation to blow
                up your life. It is an invitation to make room for what
                matters, whether that means building alongside your career
                or changing your relationship with the work you already do.
              </p>
            </details>

            <details>
              <summary>Is this therapy?</summary>
              <p>
                No. This is a focused coaching and advisory conversation
                about what is happening now, what has kept you circling,
                and what your next honest move could be.
              </p>
            </details>

            <details>
              <summary>Why is there no free discovery call?</summary>
              <p>
                Because I would rather spend our first conversation doing
                the real work. You already know how I think from the video
                and this page, and the session is protected by a full
                clarity guarantee.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="tc-section" id="book">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker" data-reveal>
            The conversation
          </p>

          <h2 className="tc-display" data-reveal>
            Ready to stop postponing what keeps calling you?
          </h2>

          <p className="tc-lead" data-reveal>
            Choose a time. Answer four thoughtful questions. I will read
            every word before we meet.
          </p>

          <div className="tc-booking-reminder" data-reveal>
            <span>75 minutes</span>
            <span>$750</span>
            <span>Written summary</span>
            <span>Free e-book</span>
            <span>Full clarity guarantee</span>
          </div>

          <div className="tc-calendar" data-reveal>
            <div
              className="calendly-inline-widget"
              data-url={CAL_URL}
              style={{ minWidth: "320px", height: "760px" }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tc-footer">
        <div className="tc-narrow tc-center">
          <p>You do not need permission to want another chapter.</p>

          <div className="tc-footer-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a
              href="https://instagram.com/idealclarity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.idealclarity.com/privacy-policy">
              Privacy
            </a>
          </div>

          <small>
            © 2026 Ideal Clarity Solutions. Coaching and advisory services
            do not guarantee business, income, career, or personal results.
          </small>
        </div>
      </footer>

      {/* STICKY CTA — APPEARS AFTER VIDEO */}
      <div className={`tc-sticky ${showSticky ? "is-visible" : ""}`}>
        <span>
          Ready for the conversation you&apos;ve been postponing?
        </span>
        <button
          type="button"
          className="tc-sticky-button"
          onClick={() => scrollToId("book")}
        >
          Yes — book my session
        </button>
      </div>
    </main>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&display=swap');

.tc-root{
  --ink:#172132;
  --navy:#142033;
  --navy-soft:#1D2B42;
  --cream:#FAF7F0;
  --warm:#F4ECDE;
  --white:#FFFFFF;
  --gold:#B9935C;
  --gold-deep:#9C7847;
  --muted:#6D675F;
  --line:rgba(185,147,92,.28);
  --shadow:0 24px 70px rgba(20,32,51,.13);
  background:var(--cream);
  color:var(--ink);
  font-family:'DM Sans',Arial,sans-serif;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

.tc-root *{box-sizing:border-box;}
.tc-shell{width:min(1120px,calc(100% - 40px));margin:0 auto;}
.tc-narrow{width:min(760px,calc(100% - 40px));margin:0 auto;}
.tc-center{text-align:center;}
.tc-left{text-align:left;}

[data-reveal]{
  opacity:0;
  transform:translateY(18px);
  transition:opacity .7s ease,transform .7s ease;
}
[data-reveal].is-visible{opacity:1;transform:none;}
@media(prefers-reduced-motion:reduce){
  [data-reveal]{opacity:1;transform:none;transition:none;}
}

.tc-hero{
  padding:clamp(48px,8vw,92px) 0 clamp(56px,7vw,88px);
  background:
    radial-gradient(circle at 50% -20%,rgba(185,147,92,.18),transparent 42%),
    var(--cream);
}

.tc-eyebrow,
.tc-kicker{
  margin:0 0 18px;
  color:var(--gold-deep);
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.17em;
  line-height:1.5;
  text-transform:uppercase;
}

.tc-hero-title,
.tc-display,
.tc-display-light{
  font-family:'Fraunces',Georgia,serif;
  font-optical-sizing:auto;
  letter-spacing:-.025em;
}

.tc-hero-title{
  max-width:900px;
  margin:0 auto 20px;
  color:var(--ink);
  font-size:clamp(2.7rem,7vw,5.6rem);
  font-weight:500;
  line-height:1.03;
}

.tc-hero-sub{
  max-width:700px;
  margin:0 auto 34px;
  color:var(--muted);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.15rem,2vw,1.45rem);
  line-height:1.55;
}

.tc-video-wrap{
  position:relative;
  width:min(470px,100%);
  margin:0 auto;
  overflow:hidden;
  background:#000;
  border:1px solid rgba(185,147,92,.45);
  border-radius:22px;
  box-shadow:var(--shadow);
  aspect-ratio:9/16;
}

.tc-video-wrap iframe{
  width:100%;
  height:100%;
  border:0;
  display:block;
}

.tc-video-note{
  margin:18px 0 0;
  color:var(--muted);
  font-size:.9rem;
}

.tc-section{
  padding:clamp(76px,10vw,128px) 0;
}

.tc-proof{
  padding-top:clamp(68px,8vw,98px);
  background:#FFFDF8;
}

.tc-navy{
  background:var(--navy);
  color:var(--white);
}

.tc-cream{background:var(--warm);}
.tc-gold{color:var(--gold);}

.tc-display,
.tc-display-light{
  margin:0 auto 28px;
  max-width:900px;
  font-size:clamp(2.2rem,5vw,4.35rem);
  font-weight:500;
  line-height:1.1;
}

.tc-display{color:var(--ink);}
.tc-display-light{color:var(--white);}
.tc-display.tc-left{margin-left:0;}

.tc-lead{
  max-width:710px;
  margin:0 auto;
  color:var(--muted);
  font-size:clamp(1.05rem,1.55vw,1.25rem);
  line-height:1.8;
}

.tc-light-copy{color:#D7DCE5;}
.tc-lead.tc-left{margin-left:0;}

.tc-pull{
  max-width:760px;
  margin:0 auto;
  color:var(--gold-deep);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.55rem,3vw,2.3rem);
  font-style:italic;
  line-height:1.45;
}

.tc-section-cta{
  margin-top:40px;
  text-align:center;
}

.tc-section-cta p{
  max-width:680px;
  margin:0 auto 20px;
  color:var(--muted);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.15rem,2vw,1.45rem);
  line-height:1.55;
}

.tc-about{
  display:grid;
  grid-template-columns:.82fr 1.18fr;
  gap:clamp(40px,7vw,88px);
  align-items:center;
}

.tc-about-image img{
  width:100%;
  display:block;
  border-radius:24px;
  box-shadow:var(--shadow);
}

.tc-body p{
  margin:0 0 20px;
  color:var(--muted);
  font-size:1.08rem;
  line-height:1.8;
}

.tc-button{
  border:0;
  border-radius:999px;
  cursor:pointer;
  font:600 1rem 'DM Sans',Arial,sans-serif;
  padding:16px 27px;
  transition:transform .2s ease,box-shadow .2s ease,background .2s ease;
}

.tc-button:hover{transform:translateY(-2px);}

.tc-button-gold{
  background:var(--gold);
  color:#fff;
  box-shadow:0 12px 30px rgba(185,147,92,.25);
}

.tc-button-ink{
  background:var(--ink);
  color:#fff;
  box-shadow:0 12px 30px rgba(20,32,51,.16);
}

.tc-button-outline{
  background:transparent;
  color:var(--ink);
  border:1.5px solid var(--gold);
}


/* BRIDGE */
.tc-bridge{
  padding:clamp(62px,8vw,94px) 0;
  background:var(--navy);
  color:#fff;
}

.tc-bridge-kicker{
  max-width:760px;
  margin:0 auto 18px;
  color:var(--gold);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(2.15rem,5vw,4.25rem);
  font-style:italic;
  font-weight:500;
  line-height:1.08;
  letter-spacing:-.025em;
}

.tc-bridge-title{
  max-width:790px;
  margin:0 auto 24px;
  color:#fff;
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.55rem,3.2vw,2.55rem);
  font-weight:500;
  line-height:1.2;
  letter-spacing:-.015em;
}

.tc-bridge-copy{
  max-width:680px;
  margin:0 auto;
  color:#D7DCE5;
  font-size:clamp(1.05rem,1.6vw,1.22rem);
  line-height:1.8;
}

/* PROOF */
.tc-proof-title{
  max-width:760px;
  margin:0 auto;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(2rem,4vw,3.45rem);
  font-weight:500;
  line-height:1.12;
  letter-spacing:-.025em;
  text-align:center;
}

/* OUTCOMES — VISUAL CONTINUATION OF THE OFFER */
.tc-outcomes-continuation{
  position:relative;
  margin-top:-1px;
  padding:0 0 clamp(82px,10vw,128px);
  background:
    linear-gradient(
      180deg,
      #FFFDF8 0%,
      #FFFDF8 42%,
      var(--warm) 100%
    );
}

.tc-outcomes-continuation .tc-shell{
  position:relative;
}

.tc-outcomes-header{
  max-width:900px;
  margin:0 auto;
  padding:52px clamp(26px,5vw,58px) 34px;
  background:var(--navy);
  border:1px solid rgba(185,147,92,.35);
  border-top:0;
  border-radius:0 0 28px 28px;
  box-shadow:0 28px 80px rgba(20,32,51,.12);
  text-align:center;
}

.tc-outcomes-header .tc-kicker{
  color:var(--gold);
}

.tc-outcomes-header h2{
  margin:0 auto 18px;
  color:#fff;
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(2.1rem,4.3vw,3.8rem);
  font-weight:500;
  line-height:1.1;
  letter-spacing:-.025em;
}

.tc-outcomes-header p{
  max-width:700px;
  margin:0 auto;
  color:#D7DCE5;
  font-size:clamp(1.02rem,1.5vw,1.18rem);
  line-height:1.75;
}

.tc-outcome-cards{
  width:min(1040px,100%);
  margin:34px auto 0;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
}

.tc-outcome-cards article{
  position:relative;
  padding:28px 24px;
  background:#FFFDF8;
  border:1px solid var(--line);
  border-radius:20px;
  box-shadow:0 16px 46px rgba(20,32,51,.07);
}

.tc-outcome-cards article::before{
  content:"";
  position:absolute;
  top:0;
  left:24px;
  width:44px;
  height:3px;
  background:var(--gold);
  border-radius:0 0 3px 3px;
}

.tc-outcome-cards article > span{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:38px;
  height:38px;
  margin:2px 0 18px;
  background:var(--navy);
  border-radius:50%;
  color:var(--gold);
  font-family:'Fraunces',Georgia,serif;
  font-size:.9rem;
  font-weight:600;
}

.tc-outcome-cards h3{
  margin:0 0 10px;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:1.35rem;
  font-weight:500;
  line-height:1.22;
}

.tc-outcome-cards p{
  margin:0;
  color:var(--muted);
  font-size:.96rem;
  line-height:1.7;
}

.tc-outcomes-footer{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
  width:min(900px,100%);
  margin:34px auto 0;
  padding:24px 28px;
  background:#FFFDF8;
  border:1px solid var(--line);
  border-radius:18px;
  box-shadow:0 14px 36px rgba(20,32,51,.06);
}

.tc-outcomes-footer p{
  margin:0;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:1.15rem;
  line-height:1.45;
}

/* FEATURE OFFER */
.tc-offer-section{
  padding-bottom:0;
  background:linear-gradient(180deg,#FFFDF8,var(--cream));
}

.tc-offer-feature{
  display:grid;
  grid-template-columns:1.08fr .92fr;
  overflow:hidden;
  background:#FFFDF8;
  border:1px solid var(--line);
  border-radius:30px;
  box-shadow:0 32px 90px rgba(20,32,51,.15);
}

.tc-offer-copy{
  padding:clamp(38px,6vw,72px);
}

.tc-offer-copy h2{
  margin:0 0 22px;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(2.2rem,4vw,3.65rem);
  font-weight:500;
  line-height:1.08;
  letter-spacing:-.025em;
}

.tc-offer-intro{
  margin:0 0 28px;
  color:var(--muted);
  font-size:1.06rem;
  line-height:1.75;
}

.tc-outcome-list{
  list-style:none;
  padding:0;
  margin:0 0 34px;
}

.tc-outcome-list li{
  display:flex;
  gap:12px;
  margin:0 0 14px;
  color:var(--ink);
  line-height:1.55;
}

.tc-outcome-list li span{
  flex:0 0 auto;
  width:22px;
  height:22px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin-top:2px;
  background:var(--gold);
  border-radius:50%;
  color:#fff;
  font-size:.76rem;
  font-weight:700;
}

.tc-offer-bottom{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:26px;
  padding-top:26px;
  border-top:1px solid var(--line);
}

.tc-price-label{
  display:block;
  color:var(--gold-deep);
  font-size:.74rem;
  font-weight:700;
  letter-spacing:.13em;
  text-transform:uppercase;
}

.tc-price{
  display:block;
  margin-top:2px;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:2.75rem;
  font-weight:500;
}

.tc-offer-button{
  max-width:330px;
}

.tc-secure-note{
  margin:16px 0 0;
  color:var(--muted);
  font-size:.85rem;
}

.tc-offer-visual{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:clamp(38px,5vw,58px);
  background:
    radial-gradient(circle at 45% 38%,rgba(185,147,92,.35),transparent 37%),
    linear-gradient(145deg,#F3E8D5,#FFFDF8);
  text-align:center;
}

.tc-offer-visual::before{
  content:"";
  position:absolute;
  width:280px;
  height:280px;
  background:rgba(185,147,92,.36);
  border-radius:50%;
  z-index:0;
}

.tc-offer-visual img{
  position:relative;
  z-index:1;
  width:min(390px,100%);
  height:auto;
  display:block;
  object-fit:contain;
  filter:drop-shadow(0 24px 32px rgba(20,32,51,.23));
}

.tc-offer-visual p{
  position:relative;
  z-index:1;
  max-width:390px;
  margin:18px auto 0;
  color:var(--muted);
  line-height:1.6;
}

.tc-offer-footer{
  grid-column:1 / -1;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:28px;
  padding:28px clamp(38px,6vw,72px);
  background:var(--navy);
  border-top:1px solid rgba(185,147,92,.36);
}

.tc-offer-footer .tc-price-label{
  color:#AAB4C4;
}

.tc-offer-footer .tc-price{
  color:#fff;
}

.tc-offer-action{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
}

.tc-offer-action .tc-secure-note{
  margin:0;
  color:#AAB4C4;
  text-align:right;
}

.tc-bonus-badge{
  position:absolute;
  top:32px;
  right:28px;
  z-index:2;
  width:106px;
  height:106px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:16px;
  background:var(--navy);
  border-radius:50%;
  color:var(--gold);
  font-size:.75rem;
  font-weight:700;
  letter-spacing:.07em;
  line-height:1.25;
  text-align:center;
  text-transform:uppercase;
  box-shadow:0 14px 30px rgba(20,32,51,.2);
}

/* TESTIMONIALS */
.tc-testimonials{
  width:min(900px,100%);
  margin:48px auto 0;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}

.tc-testimonials blockquote{
  margin:0;
  padding:30px;
  background:var(--white);
  border:1px solid var(--line);
  border-radius:20px;
  box-shadow:0 15px 45px rgba(20,32,51,.07);
}

.tc-testimonials p{
  margin:0 0 18px;
  color:var(--ink);
  font-family:'Fraunces',Georgia,serif;
  font-size:1.12rem;
  font-style:italic;
  line-height:1.6;
}

.tc-testimonials cite{
  color:var(--gold-deep);
  font-size:.86rem;
  font-style:normal;
  font-weight:700;
}

/* FAQ */
.tc-faq{
  margin-top:38px;
  border-top:1px solid rgba(20,32,51,.15);
}

.tc-faq details{
  border-bottom:1px solid rgba(20,32,51,.15);
  padding:22px 0;
}

.tc-faq summary{
  padding-right:38px;
  position:relative;
  color:var(--ink);
  cursor:pointer;
  font-family:'Fraunces',Georgia,serif;
  font-size:1.25rem;
  font-weight:500;
  list-style:none;
}

.tc-faq summary::-webkit-details-marker{display:none;}

.tc-faq summary::after{
  content:"+";
  position:absolute;
  right:0;
  top:-4px;
  color:var(--gold-deep);
  font-size:1.7rem;
}

.tc-faq details[open] summary::after{content:"–";}

.tc-faq p{
  margin:17px 0 0;
  color:var(--muted);
  line-height:1.75;
}

.tc-booking-reminder{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:10px;
  margin:30px 0 0;
}

.tc-booking-reminder span{
  padding:8px 13px;
  background:#FFFDF8;
  border:1px solid var(--line);
  border-radius:999px;
  color:var(--ink);
  font-size:.86rem;
  font-weight:600;
}

.tc-calendar{
  margin-top:34px;
  padding:12px;
  overflow:hidden;
  background:var(--white);
  border:1px solid var(--line);
  border-radius:22px;
  box-shadow:var(--shadow);
}

/* FOOTER */
.tc-footer{
  padding:72px 0 132px;
  background:var(--navy);
  color:#D7DCE5;
}

.tc-footer p{
  margin:0;
  color:#fff;
  font-family:'Fraunces',Georgia,serif;
  font-size:1.35rem;
}

.tc-footer-links{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:24px;
  margin:30px 0;
}

.tc-footer-links a{
  color:var(--gold);
  text-decoration:none;
}

.tc-footer small{
  color:#8E99AA;
  line-height:1.6;
}

/* LARGER STICKY CTA */
.tc-sticky{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  z-index:50;
  min-height:86px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:30px;
  padding:15px 24px;
  background:rgba(20,32,51,.98);
  border-top:1px solid rgba(185,147,92,.62);
  box-shadow:0 -14px 36px rgba(20,32,51,.18);
  color:#fff;
  transform:translateY(115%);
  transition:transform .3s ease;
  backdrop-filter:blur(14px);
}

.tc-sticky.is-visible{transform:translateY(0);}

.tc-sticky span{
  font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.05rem,2vw,1.35rem);
  line-height:1.25;
}

.tc-sticky-button{
  min-width:205px;
  padding:14px 24px;
  background:var(--gold);
  border:0;
  border-radius:999px;
  color:#fff;
  cursor:pointer;
  font:700 .96rem 'DM Sans',Arial,sans-serif;
  box-shadow:0 10px 24px rgba(185,147,92,.25);
}

@media(max-width:900px){
  .tc-outcome-cards{grid-template-columns:repeat(2,1fr);}

  .tc-about,
  .tc-offer-feature{
    grid-template-columns:1fr;
  }

  .tc-about-image{
    width:min(420px,100%);
    margin:0 auto;
  }

  .tc-offer-visual{
    min-height:480px;
  }

  .tc-testimonials{
    grid-template-columns:1fr;
  }
}

@media(max-width:650px){
  .tc-outcomes-header{
    padding:42px 22px 30px;
    border-radius:0 0 22px 22px;
  }

  .tc-outcome-cards{
    grid-template-columns:1fr;
    gap:14px;
    margin-top:24px;
  }

  .tc-outcomes-footer{
    align-items:stretch;
    flex-direction:column;
    padding:22px;
    text-align:center;
  }

  .tc-outcomes-footer .tc-button{
    width:100%;
  }

  .tc-shell,
  .tc-narrow{
    width:min(100% - 28px,1120px);
  }

  .tc-hero{
    padding-top:38px;
  }

  .tc-eyebrow{
    font-size:.68rem;
  }

  .tc-video-wrap{
    width:min(100%,420px);
    border-radius:15px;
  }

  .tc-section{
    padding:72px 0;
  }

  .tc-offer-copy{
    padding:32px 22px;
  }

  .tc-offer-visual{
    min-height:420px;
    padding:46px 20px 34px;
  }

  .tc-offer-visual::before{
    width:230px;
    height:230px;
  }

  .tc-bonus-badge{
    top:18px;
    right:18px;
    width:88px;
    height:88px;
    font-size:.65rem;
  }

  .tc-offer-footer{
    align-items:stretch;
    flex-direction:column;
    padding:26px 22px;
  }

  .tc-offer-action{
    align-items:stretch;
  }

  .tc-offer-action .tc-secure-note{
    text-align:left;
  }

  .tc-offer-button{
    width:100%;
    max-width:none;
  }

  .tc-testimonials blockquote{
    padding:26px 22px;
  }

  .tc-sticky{
    min-height:96px;
    justify-content:space-between;
    gap:14px;
    padding:13px 14px;
  }

  .tc-sticky span{
    max-width:48%;
    font-size:.92rem;
  }

  .tc-sticky-button{
    min-width:0;
    width:49%;
    padding:13px 12px;
    font-size:.84rem;
  }
}
`;
