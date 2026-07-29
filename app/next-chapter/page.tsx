"use client";

import { useEffect, useRef } from "react";

const CAL_URL =
  "https://calendly.com/idealclaritysolutions/next-chapter";

const VIDEO_URL =
  "https://xfdsht8l8xkamp7u.public.blob.vercel-storage.com/next-chapter.mp4";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(event: string, params?: Record<string, unknown>) {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", event, params || {});
  }
}

function useReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function useCalendly() {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src =
      "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);
}

function useVideoTracking(
  videoRef: React.RefObject<HTMLVideoElement | null>
) {
  const fired = useRef<Set<string>>(new Set());

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const fireOnce = (eventName: string) => {
      if (fired.current.has(eventName)) return;

      fired.current.add(eventName);

      track(eventName, {
        event_category: "VSL",
        event_label: "Next Chapter VSL",
      });
    };

    const onPlay = () => fireOnce("video_start");
    const onEnded = () => fireOnce("video_complete");

    const onError = () => {
      track("video_error", {
        event_category: "VSL",
        event_label: "Next Chapter VSL",
      });
    };

    const onTimeUpdate = () => {
      if (!video.duration || !Number.isFinite(video.duration)) {
        return;
      }

      const percentage =
        (video.currentTime / video.duration) * 100;

      if (percentage >= 25) fireOnce("video_25");
      if (percentage >= 50) fireOnce("video_50");
      if (percentage >= 75) fireOnce("video_75");
      if (percentage >= 95) fireOnce("video_complete");
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef]);
}

function scrollToBooking(label: string) {
  track("cta_click", {
    event_category: "Landing Page",
    event_label: label,
  });
  const calendly = document.getElementById("book");
  if (!calendly) return;
  const y =
    calendly.getBoundingClientRect().top +
    window.pageYOffset -
    20;
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function NextChapterPage() {
  useReveal();
  useCalendly();

  const videoRef = useRef<HTMLVideoElement>(null);

  useVideoTracking(videoRef);

  return (
    <main className="nc-root">
      <style>{CSS}</style>

      {/* HERO */}
      <section className="nc-hero">
        <div className="nc-shell nc-center">
          <h1 data-reveal>
            Build the Life You Keep Imagining.
          </h1>

          <p className="nc-hero-sub" data-reveal>
            Stop second-guessing yourself, uncover what has really
            been keeping you stuck, and feel empowered to take
            meaningful action toward the ideas and dreams you have
            been postponing.
          </p>

          <button
            type="button"
            className="nc-button"
            onClick={() =>
              scrollToBooking("Hero — Help me make my next move")
            }
            data-reveal
          >
            Help Me Make My Next Move
            <ArrowIcon />
          </button>

          <p className="nc-cta-note" data-reveal>
            Start with a complimentary 30-minute conversation.
          </p>
        </div>
      </section>

      {/* VSL */}
      <section className="nc-video-section">
        <div className="nc-shell">
          <div className="nc-video-wrap" data-reveal>
            <div className="nc-video-label">
              Watch this before you talk yourself out of it again.
            </div>

            <video
              ref={videoRef}
              className="nc-video"
              poster="/images/next-chapter-thumbnail.jpg"
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              disablePictureInPicture
              aria-label="A message for accomplished professionals who are ready to take action toward their next chapter"
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>

          <p className="nc-video-note" data-reveal>
            No email required. No obligation. Just watch.
          </p>

          <div className="nc-video-cta" data-reveal>
            <button
              type="button"
              className="nc-button"
              onClick={() =>
                scrollToBooking("Video CTA")
              }
            >
              Help Me Make My Next Move
              <ArrowIcon />
            </button>
            <p>
              Finished watching?
              Book your complimentary conversation.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="nc-recognition">
        <div className="nc-narrow">
          <h2 data-reveal>Maybe this sounds familiar.</h2>

          <div className="nc-recognition-list">
            <div data-reveal>
              <CheckIcon />
              <p>
                You know you are capable of more—whether that means
                starting a business, launching a podcast, building a
                nonprofit, writing a book, changing careers, or
                pursuing an idea that keeps calling you.
              </p>
            </div>

            <div data-reveal>
              <CheckIcon />
              <p>
                You have been circling the same idea for months.
                Maybe years.
              </p>
            </div>

            <div data-reveal>
              <CheckIcon />
              <p>
                Every reason for waiting sounds intelligent,
                responsible, and completely justified.
              </p>
            </div>

            <div data-reveal>
              <CheckIcon />
              <p>
                You cannot tell whether you are being patient—or
                simply talking yourself out of the move.
              </p>
            </div>

            <div data-reveal>
              <CheckIcon />
              <p>
                You are tired of carrying around a version of your
                life that never seems to leave your head.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="nc-testimonials-section">
        <div className="nc-shell">
          <div className="nc-section-heading nc-center" data-reveal>
            <p className="nc-kicker">WHAT CHANGED AFTER WORKING WITH CHI-CHI</p>
            <h2>Clarity is powerful when it finally leads to action.</h2>
          </div>

          <div className="nc-testimonials">
            <blockquote data-reveal>
              <p>
                “Chi-Chi took the time to understand my goals, asked
                thoughtful questions, and helped turn uncertainty
                into a clear, actionable path forward.”
              </p>
              <cite>Peace</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “Her guidance reframed and clarified my next steps in
                a valuable way.”
              </p>
              <cite>Hannah Bailey · Studio Northwood</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “With Chi-Chi, I found my area of genius and unlocked
                the mental blocks that were holding me back.”
              </p>
              <cite>
                Lola · Rapid Reinvent Hair Treatment
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CALL OUTCOMES */}
      <section className="nc-outcomes">
        <div className="nc-narrow nc-center">
          <p className="nc-kicker" data-reveal>
            YOUR NEXT CHAPTER CONVERSATION
          </p>

          <h2 data-reveal>Walk away ready to move.</h2>

          <div className="nc-outcome-grid">
            <article data-reveal>
              <span>01</span>
              <h3>Understand what is really keeping you stuck</h3>
              <p>
                Identify the real source of hesitation beneath the
                logical, responsible reasons you have been giving
                yourself.
              </p>
            </article>

            <article data-reveal>
              <span>02</span>
              <h3>Separate facts from fear</h3>
              <p>
                See which concerns deserve a practical response—and
                which ones are quietly protecting you from being seen
                trying.
              </p>
            </article>

            <article data-reveal>
              <span>03</span>
              <h3>Take a clear next step</h3>
              <p>
                Leave with one meaningful action that fits your real
                life and begins turning the idea into something real.
              </p>
            </article>
          </div>

          <button
            type="button"
            className="nc-button"
            onClick={() =>
              scrollToBooking("Outcomes — I am ready to make my move")
            }
            data-reveal
          >
            I Am Ready to Make My Move
            <ArrowIcon />
          </button>
        </div>
      </section>

      {/* CALENDLY */}
      <section className="nc-booking">
        <div className="nc-shell nc-booking-grid">
          <div className="nc-booking-copy" data-reveal>
            <p className="nc-kicker nc-kicker-light">
              COMPLIMENTARY 30-MINUTE CONVERSATION
            </p>

            <h2>Let&apos;s find the move you are ready to make.</h2>

            <p>
              This is a focused, honest conversation about the idea,
              decision, or next chapter you keep postponing.
            </p>

            <ul>
              <li>
                <CheckIcon />
                Identify what is really causing the hesitation.
              </li>

              <li>
                <CheckIcon />
                Separate legitimate constraints from fear disguised
                as logic.
              </li>

              <li>
                <CheckIcon />
                Clarify the next action that makes sense for you.
              </li>
            </ul>

            <div className="nc-no-pressure">
              No pressure. No obligation. If it becomes clear that
              deeper support would help, we can discuss what that
              could look like.
            </div>
          </div>

          <div
            id="book"
            className="nc-calendar"
            data-reveal
          >
            <div className="nc-calendar-heading">
              <strong>Choose your time</strong>
              <span>30 minutes · Private · Complimentary</span>
            </div>

            <div
              className="calendly-inline-widget"
              data-url={CAL_URL}
              style={{
                minWidth: "320px",
                height: "720px",
              }}
            />

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nc-calendar-link"
              onClick={() =>
                track("cta_click", {
                  event_category: "Landing Page",
                  event_label: "Calendly fallback link",
                })
              }
            >
              Open the calendar in a new tab
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nc-footer">
        <div className="nc-shell nc-center">
          <p>
            The life you keep imagining begins with one honest move.
          </p>

          <div className="nc-footer-links">
            <a href="mailto:idealclaritysolutions@gmail.com">
              Email
            </a>

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
            © {new Date().getFullYear()} Ideal Clarity Solutions.
            Coaching and advisory services do not guarantee business,
            income, career, or personal results.
          </small>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <button
        type="button"
        className="nc-sticky"
        onClick={() =>
          scrollToBooking("Sticky — Help me make my next move")
        }
      >
        <span>Ready to stop postponing it?</span>
        <strong>Help Me Make My Next Move →</strong>
      </button>
    </main>
  );
}

const CSS = `
  :root {
    --navy: #102844;
    --deep: #07182b;
    --orange: #f28c28;
    --orange-dark: #ca6c12;
    --white: #ffffff;
    --soft: #f6f8fa;
    --text-soft: #5e6c7a;
    --line: #dfe5eb;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  button,
  a {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  .nc-root {
    min-height: 100vh;
    overflow: hidden;
    color: var(--navy);
    background: var(--white);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.55;
  }

  .nc-root h1,
  .nc-root h2,
  .nc-root h3,
  .nc-root p {
    margin-top: 0;
  }

  .nc-root h1,
  .nc-root h2,
  .nc-root h3 {
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .nc-root a {
    color: inherit;
    text-decoration: none;
  }

  .nc-shell {
    width: min(1080px, calc(100% - 40px));
    margin: 0 auto;
  }

  .nc-narrow {
    width: min(820px, calc(100% - 40px));
    margin: 0 auto;
  }

  .nc-center {
    text-align: center;
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(18px);
    transition:
      opacity 0.7s ease,
      transform 0.7s ease;
  }

  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .nc-kicker {
    margin-bottom: 17px;
    color: var(--orange-dark);
    font-size: 0.76rem;
    font-weight: 900;
    letter-spacing: 0.15em;
  }

  .nc-kicker-light {
    color: #ffc484;
  }

  .nc-hero {
    position: relative;
    padding: 92px 0 48px;
    background: var(--white);
  }

  .nc-hero::before {
    position: absolute;
    top: -360px;
    left: 50%;
    width: 820px;
    height: 820px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(242, 140, 40, 0.12),
      transparent 67%
    );
    content: "";
    pointer-events: none;
    transform: translateX(-50%);
  }

  .nc-hero .nc-shell {
    position: relative;
    z-index: 1;
  }

  .nc-hero h1 {
    max-width: 920px;
    margin: 0 auto 24px;
    font-size: clamp(3.25rem, 7vw, 6.8rem);
  }

  .nc-hero-sub {
    max-width: 800px;
    margin: 0 auto 30px;
    color: var(--text-soft);
    font-size: clamp(1.08rem, 2vw, 1.35rem);
    line-height: 1.65;
  }

  .nc-button {
    display: inline-flex;
    min-height: 58px;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 16px 25px;
    border: 0;
    border-radius: 12px;
    color: var(--white);
    background: linear-gradient(
      135deg,
      var(--orange),
      var(--orange-dark)
    );
    box-shadow: 0 16px 38px rgba(202, 108, 18, 0.25);
    font-weight: 900;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .nc-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 44px rgba(202, 108, 18, 0.3);
  }

  .nc-cta-note {
    margin: 13px 0 0;
    color: #7b8794;
    font-size: 0.86rem;
  }

  .nc-video-section {
    padding: 34px 0 94px;
    background: var(--white);
  }

  .nc-video-wrap {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #000;
    box-shadow: 0 28px 80px rgba(16, 40, 68, 0.14);
  }

  .nc-video-label {
    padding: 12px 18px;
    color: #e2e8ef;
    background: var(--deep);
    text-align: center;
    font-size: 0.84rem;
    font-weight: 800;
  }

  .nc-video {
    display: block;
    width: 100%;
    height: auto;
    max-height: 82vh;
    background: #000;
    object-fit: contain;
  }

  .nc-video-note {
    margin: 15px 0 0;
    color: #7b8794;
    text-align: center;
    font-size: 0.85rem;
  }

  .nc-video-cta {
    margin-top: 26px;
    text-align: center;
  }
  .nc-video-cta p {
    margin-top: 14px;
    color: var(--text-soft);
    font-size: 0.95rem;
  }

  .nc-recognition {
    padding: 100px 0;
    color: var(--white);
    background: var(--deep);
  }

  .nc-recognition h2 {
    margin-bottom: 38px;
    text-align: center;
    font-size: clamp(2.5rem, 5vw, 4.7rem);
  }

  .nc-recognition-list {
    display: grid;
    gap: 15px;
  }

  .nc-recognition-list > div {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    padding: 19px 20px;
    border-left: 3px solid var(--orange);
    background: rgba(255, 255, 255, 0.06);
  }

  .nc-recognition-list svg {
    flex: 0 0 auto;
    margin-top: 3px;
    color: #ffac59;
  }

  .nc-recognition-list p {
    margin: 0;
    color: #edf2f7;
    font-size: clamp(1rem, 2vw, 1.18rem);
  }

  .nc-outcomes {
    padding: 105px 0;
    background: var(--white);
  }

  .nc-outcomes h2 {
    margin-bottom: 42px;
    font-size: clamp(2.6rem, 5vw, 4.8rem);
  }

  .nc-outcome-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-bottom: 38px;
    text-align: left;
  }

  .nc-outcome-grid article {
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--white);
    box-shadow: 0 14px 40px rgba(16, 40, 68, 0.07);
  }

  .nc-outcome-grid span {
    display: block;
    margin-bottom: 25px;
    color: var(--orange-dark);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.15em;
  }

  .nc-outcome-grid h3 {
    margin-bottom: 14px;
    font-size: 1.45rem;
  }

  .nc-outcome-grid p {
    margin-bottom: 0;
    color: var(--text-soft);
  }

  .nc-testimonials-section {
    padding: 100px 0;
    background: var(--soft);
  }

  .nc-section-heading {
    max-width: 790px;
    margin: 0 auto 44px;
  }

  .nc-section-heading h2 {
    margin-bottom: 0;
    font-size: clamp(2.4rem, 4.8vw, 4.4rem);
  }

  .nc-testimonials {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .nc-testimonials blockquote {
    display: flex;
    min-height: 260px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 29px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--white);
    box-shadow: 0 14px 38px rgba(16, 40, 68, 0.06);
  }

  .nc-testimonials p {
    margin-bottom: 28px;
    font-size: 1.08rem;
    line-height: 1.65;
  }

  .nc-testimonials cite {
    color: var(--orange-dark);
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .nc-booking {
    padding: 105px 0;
    color: var(--white);
    background: var(--deep);
  }

  .nc-booking-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 58px;
    align-items: start;
  }

  .nc-booking-copy h2 {
    margin-bottom: 24px;
    font-size: clamp(2.5rem, 5vw, 4.7rem);
  }

  .nc-booking-copy > p:not(.nc-kicker) {
    color: #d5dee7;
    font-size: 1.1rem;
  }

  .nc-booking-copy ul {
    display: grid;
    gap: 15px;
    margin: 27px 0;
    padding: 0;
    list-style: none;
  }

  .nc-booking-copy li {
    display: flex;
    gap: 11px;
    align-items: flex-start;
  }

  .nc-booking-copy li svg {
    flex: 0 0 auto;
    margin-top: 2px;
    color: #ffac59;
  }

  .nc-no-pressure {
    padding: 17px 18px;
    border-left: 3px solid var(--orange);
    color: #c8d2dc;
    background: rgba(255, 255, 255, 0.06);
    font-size: 0.9rem;
  }

  .nc-calendar {
    overflow: hidden;
    padding: 9px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    color: var(--navy);
    background: var(--white);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
  }

  .nc-calendar-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 14px 16px;
  }

  .nc-calendar-heading strong,
  .nc-calendar-heading span {
    display: block;
  }

  .nc-calendar-heading span {
    color: var(--text-soft);
    font-size: 0.82rem;
  }

  .nc-calendar-link {
    display: flex;
    width: 100%;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;
    border-radius: 10px;
    color: var(--white) !important;
    background: var(--navy);
    font-weight: 850;
  }

  .nc-footer {
    padding: 50px 0 105px;
    color: #94a4b5;
    background: #051322;
  }

  .nc-footer p {
    margin-bottom: 17px;
    color: var(--white);
    font-size: 1.16rem;
    font-weight: 800;
  }

  .nc-footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 17px;
  }

  .nc-footer small {
    display: block;
    font-size: 0.76rem;
  }

  .nc-sticky {
    position: fixed;
    z-index: 50;
    right: 22px;
    bottom: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    color: var(--white);
    background: rgba(7, 24, 43, 0.96);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(12px);
  }

  .nc-sticky span,
  .nc-sticky strong {
    display: block;
  }

  .nc-sticky span {
    color: #c8d2dc;
    font-size: 0.73rem;
  }

  .nc-sticky strong {
    color: #ffc484;
    font-size: 0.84rem;
  }

  @media (max-width: 900px) {
    .nc-outcome-grid,
    .nc-testimonials,
    .nc-booking-grid {
      grid-template-columns: 1fr;
    }

    .nc-booking-grid {
      gap: 42px;
    }

    .nc-testimonials blockquote {
      min-height: auto;
    }
  }

  @media (max-width: 640px) {
    .nc-shell,
    .nc-narrow {
      width: min(100% - 28px, 1080px);
    }

    .nc-hero {
      padding: 64px 0 35px;
    }

    .nc-hero h1 {
      font-size: clamp(2.8rem, 13vw, 4.3rem);
    }

    .nc-video-section {
      padding-bottom: 74px;
    }

    .nc-recognition,
    .nc-outcomes,
    .nc-testimonials-section,
    .nc-booking {
      padding: 76px 0;
    }

    .nc-button {
      width: 100%;
    }

    .nc-video-wrap {
      border-radius: 14px;
    }

    .nc-video-label {
      padding: 10px 12px;
    }

    .nc-outcome-grid article,
    .nc-testimonials blockquote {
      padding: 24px;
    }

    .nc-calendar {
      padding: 6px;
    }

    .nc-calendar-heading {
      align-items: flex-start;
      flex-direction: column;
    }

    .nc-footer {
      padding-bottom: 128px;
    }

    .nc-sticky {
      right: 0;
      bottom: 0;
      left: 0;
      justify-content: space-between;
      border-right: 0;
      border-bottom: 0;
      border-left: 0;
      border-radius: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition: none !important;
      animation: none !important;
    }
  }
`;