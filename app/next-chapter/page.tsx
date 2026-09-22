"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CAL_URL =
  "https://calendly.com/idealclaritysolutions/next-chapter";

const WISTIA_MEDIA_ID = "d9blju2tmz";

// One label for every CTA on the page (hero, video, method, fit, outcomes, sticky)
const CTA_LABEL = "Book Your FREE Next Chapter Conversation";

// Renders the <wistia-player> custom element from TSX without type errors
const WistiaPlayer =
  "wistia-player" as unknown as React.FC<
    Record<string, unknown>
  >;

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

function useWistia() {
  useEffect(() => {
    if (!document.getElementById("wistia-player-script")) {
      const playerScript = document.createElement("script");
      playerScript.id = "wistia-player-script";
      playerScript.src = "https://fast.wistia.com/player.js";
      playerScript.async = true;
      document.body.appendChild(playerScript);
    }

    if (!document.getElementById("wistia-media-script")) {
      const mediaScript = document.createElement("script");
      mediaScript.id = "wistia-media-script";
      mediaScript.src = `https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`;
      mediaScript.async = true;
      mediaScript.type = "module";
      document.body.appendChild(mediaScript);
    }
  }, []);
}

function useWistiaTracking(
  playerRef: React.RefObject<HTMLElement | null>
) {
  const fired = useRef<Set<string>>(new Set());

  useEffect(() => {
    const player = playerRef.current as
      | (HTMLElement & {
          currentTime?: number;
          duration?: number;
        })
      | null;

    if (!player) return;

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

    const onTimeUpdate = () => {
      const duration = player.duration;
      const currentTime = player.currentTime;

      if (
        !duration ||
        !Number.isFinite(duration) ||
        typeof currentTime !== "number"
      ) {
        return;
      }

      const percentage = (currentTime / duration) * 100;

      if (percentage >= 25) fireOnce("video_25");
      if (percentage >= 50) fireOnce("video_50");
      if (percentage >= 75) fireOnce("video_75");
      if (percentage >= 95) fireOnce("video_complete");
    };

    player.addEventListener("play", onPlay);
    player.addEventListener("ended", onEnded);
    player.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      player.removeEventListener("play", onPlay);
      player.removeEventListener("ended", onEnded);
      player.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [playerRef]);
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

function XIcon() {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="nc-button"
      onClick={() => scrollToBooking(label)}
      data-reveal
    >
      {CTA_LABEL}
      <ArrowIcon />
    </button>
  );
}

const METHOD_STEPS = [
  {
    n: 1,
    name: "Define",
    color: "#4A6B9C",
    text: "Name the thing you've been circling, in plain words.",
  },
  {
    n: 2,
    name: "Diagnose",
    color: "#3E5C8A",
    text: "Find the real block: facts, or fear?",
  },
  {
    n: 3,
    name: "Decode",
    color: "#334E78",
    text: "Expose the excuse pattern running the loop.",
  },
  {
    n: 4,
    name: "Rebuild",
    color: "#2A4166",
    text: "Rewire your mindset and identity around who you're becoming — not who you've been.",
  },
  {
    n: 5,
    name: "Design",
    color: "#223655",
    text: "Map the first moves that fit your real life.",
  },
  {
    n: 6,
    name: "Do",
    color: "#1B2B46",
    text: "Move scared. Imperfect action, on repeat.",
  },
];

function MethodWheel() {
  return (
    <svg
      className="icm-wheel"
      viewBox="0 0 600 600"
      role="img"
      aria-label="Flywheel showing the six steps of the Ideal Clarity Method: Define, Diagnose, Decode, Rebuild, Design, Do."
    >
      <path
        d="M 307.6 10.1 A 290 290 0 0 1 547.3 148.5 L 457.7 203.3 A 185 185 0 0 0 304.8 115.1 Z"
        fill="#4A6B9C"
      />
      <path
        d="M 554.9 161.6 A 290 290 0 0 1 554.9 438.4 L 462.6 388.3 A 185 185 0 0 0 462.6 211.7 Z"
        fill="#3E5C8A"
      />
      <path
        d="M 547.3 451.5 A 290 290 0 0 1 307.6 589.9 L 304.8 484.9 A 185 185 0 0 0 457.7 396.7 Z"
        fill="#334E78"
      />
      <path
        d="M 292.4 589.9 A 290 290 0 0 1 52.7 451.5 L 142.3 396.7 A 185 185 0 0 0 295.2 484.9 Z"
        fill="#2A4166"
      />
      <path
        d="M 45.1 438.4 A 290 290 0 0 1 45.1 161.6 L 137.4 211.7 A 185 185 0 0 0 137.4 388.3 Z"
        fill="#223655"
      />
      <path
        d="M 52.7 148.5 A 290 290 0 0 1 292.4 10.1 L 295.2 115.1 A 185 185 0 0 0 142.3 203.3 Z"
        fill="#1B2B46"
      />
      <path
        d="M 509.9 189.0 L 488.8 173.7 L 505.9 163.3 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <path
        d="M 501.1 426.3 L 503.8 400.4 L 521.4 409.9 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <path
        d="M 291.2 537.3 L 314.9 526.7 L 315.5 546.7 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <path
        d="M 90.1 411.0 L 111.2 426.3 L 94.1 436.7 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <path
        d="M 98.9 173.7 L 96.2 199.6 L 78.6 190.1 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <path
        d="M 308.8 62.7 L 285.1 73.3 L 284.5 53.3 Z"
        fill="#D9B25F"
        opacity="0.95"
      />
      <circle cx="300" cy="300" r="158" fill="#CDA44E" />
      <text x="300" y="294" textAnchor="middle" className="icm-hub-title">
        The Ideal
      </text>
      <text x="300" y="322" textAnchor="middle" className="icm-hub-title">
        Clarity Method™
      </text>
      <text x="300" y="350" textAnchor="middle" className="icm-hub-sub">
        Mindset → Momentum
      </text>
      <text x="418.5" y="86.8" textAnchor="middle" className="icm-num">
        1
      </text>
      <text x="418.5" y="112.8" textAnchor="middle" className="icm-name">
        Define
      </text>
      <text x="537.0" y="292.0" textAnchor="middle" className="icm-num">
        2
      </text>
      <text x="537.0" y="318.0" textAnchor="middle" className="icm-name">
        Diagnose
      </text>
      <text x="418.5" y="497.2" textAnchor="middle" className="icm-num">
        3
      </text>
      <text x="418.5" y="523.2" textAnchor="middle" className="icm-name">
        Decode
      </text>
      <text x="181.5" y="497.2" textAnchor="middle" className="icm-num">
        4
      </text>
      <text x="181.5" y="523.2" textAnchor="middle" className="icm-name">
        Rebuild
      </text>
      <text x="63.0" y="292.0" textAnchor="middle" className="icm-num">
        5
      </text>
      <text x="63.0" y="318.0" textAnchor="middle" className="icm-name">
        Design
      </text>
      <text x="181.5" y="86.8" textAnchor="middle" className="icm-num">
        6
      </text>
      <text x="181.5" y="112.8" textAnchor="middle" className="icm-name">
        Do
      </text>
    </svg>
  );
}

// Qualification-first booking: step 1 collects name/email + the four
// qualifying questions and emails them to Chi-Chi; step 2 reveals the
// Calendly calendar with name/email prefilled. Every CTA on the page
// scrolls to #book, so all of them land on the qualification form.
const QUAL_SUBMIT_URL =
  "https://formsubmit.co/ajax/idealclaritysolutions@gmail.com";

const HOW_LONG_OPTIONS = [
  "Under a year",
  "1–2 years",
  "2–5 years",
  "5+ years",
];

type QualForm = {
  firstName: string;
  lastName: string;
  email: string;
  idea: string;
  howLong: string;
  blocker: string;
  disappointment: string;
};

const EMPTY_QUAL: QualForm = {
  firstName: "",
  lastName: "",
  email: "",
  idea: "",
  howLong: "",
  blocker: "",
  disappointment: "",
};

function BookingSteps() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QualForm>(EMPTY_QUAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const calRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof QualForm) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const prefillUrl =
    `${CAL_URL}?name=${encodeURIComponent(
      `${form.firstName} ${form.lastName}`.trim()
    )}&email=${encodeURIComponent(form.email.trim())}`;

  // Mount the Calendly inline widget once step 2 is shown.
  useEffect(() => {
    if (step !== 2 || !calRef.current) return;
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const w = (
        window as unknown as {
          Calendly?: {
            initInlineWidget: (opts: {
              url: string;
              parentElement: HTMLElement;
            }) => void;
          };
        }
      ).Calendly;
      if (w && calRef.current) {
        clearInterval(timer);
        w.initInlineWidget({
          url: prefillUrl,
          parentElement: calRef.current,
        });
      } else if (attempts > 40) {
        clearInterval(timer);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [step, prefillUrl]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const missing =
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.idea.trim() ||
      !form.howLong ||
      !form.blocker.trim() ||
      !form.disappointment.trim();

    if (missing) {
      setError(
        "Please answer every question — it only takes about a minute."
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError(
        "That email doesn't look quite right — mind double-checking it?"
      );
      return;
    }

    setError("");
    setSubmitting(true);
    track("qual_form_submit", {
      event_category: "Landing Page",
      event_label: "Qualification form submitted",
    });

    const payload = {
      "First name": form.firstName.trim(),
      "Last name": form.lastName.trim(),
      Email: form.email.trim(),
      "What's the idea you've been circling?": form.idea.trim(),
      "How long has it been on your mind?": form.howLong,
      "What's the one thing that's kept you from starting?":
        form.blocker.trim(),
      "If nothing changed over the next three years, what would disappoint you the most?":
        form.disappointment.trim(),
      _subject: `New Next Chapter lead: ${form.firstName.trim()} ${form.lastName.trim()}`,
    };

    try {
      await fetch(QUAL_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Still reveal the calendar — the booking itself captures
      // name/email/phone in Calendly.
    }

    setSubmitting(false);
    setStep(2);
    requestAnimationFrame(() => {
      document
        .getElementById("book")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <div className="nc-guarantee-strip">
        <strong>My launch guarantee:</strong> show up, do the work,
        complete every step — and if you haven&apos;t launched by the
        end of the 8 weeks, I keep coaching you, free, until you do.
      </div>

      {step === 1 ? (
        <form
          className="nc-qual"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="nc-calendar-heading">
            <div>
              <p className="nc-kicker nc-qual-kicker">
                LET&apos;S START HERE
              </p>
              <strong>Tell me what you&apos;ve been circling.</strong>
            </div>
            <span>About a minute · Then you pick your time</span>
          </div>

          <div className="nc-qual-grid">
            <div className="nc-qual-field">
              <label htmlFor="nc-first">First name</label>
              <input
                id="nc-first"
                type="text"
                autoComplete="given-name"
                value={form.firstName}
                onChange={set("firstName")}
              />
            </div>

            <div className="nc-qual-field">
              <label htmlFor="nc-last">Last name</label>
              <input
                id="nc-last"
                type="text"
                autoComplete="family-name"
                value={form.lastName}
                onChange={set("lastName")}
              />
            </div>
          </div>

          <div className="nc-qual-field">
            <label htmlFor="nc-email">Email</label>
            <input
              id="nc-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
            />
          </div>

          <div className="nc-qual-field">
            <label htmlFor="nc-idea">
              What&apos;s the idea you&apos;ve been circling?
            </label>
            <input
              id="nc-idea"
              type="text"
              value={form.idea}
              onChange={set("idea")}
              placeholder="The business, book, podcast, nonprofit…"
            />
          </div>

          <fieldset className="nc-qual-field">
            <legend>How long has it been on your mind?</legend>
            <div className="nc-qual-radios">
              {HOW_LONG_OPTIONS.map((opt) => (
                <label key={opt} className="nc-qual-radio">
                  <input
                    type="radio"
                    name="nc-howlong"
                    value={opt}
                    checked={form.howLong === opt}
                    onChange={set("howLong")}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="nc-qual-field">
            <label htmlFor="nc-blocker">
              What&apos;s the one thing that&apos;s kept you from
              starting?
            </label>
            <input
              id="nc-blocker"
              type="text"
              value={form.blocker}
              onChange={set("blocker")}
            />
          </div>

          <div className="nc-qual-field">
            <label htmlFor="nc-disappoint">
              If nothing changed over the next three years, what would
              disappoint you the most?
            </label>
            <input
              id="nc-disappoint"
              type="text"
              value={form.disappointment}
              onChange={set("disappointment")}
            />
          </div>

          {error ? (
            <p className="nc-qual-error" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="nc-button nc-button-block"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Continue →"}
            {!submitting && <ArrowIcon />}
          </button>

          <p className="nc-qual-note">
            Your answers come straight to me — nothing is shared, and
            there&apos;s zero pressure either way.
          </p>
        </form>
      ) : (
        <>
          <div className="nc-calendar-heading">
            <div>
              <p className="nc-kicker nc-qual-kicker">
                YOU&apos;RE IN — PICK YOUR TIME
              </p>
              <strong>Choose your time</strong>
            </div>
            <span>45 minutes · Private · Complimentary</span>
          </div>

          <div ref={calRef} className="nc-calendar-embed" />

          <a
            href={prefillUrl}
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
            Calendar not loading? Open it in a new tab
            <ArrowIcon />
          </a>
        </>
      )}
    </>
  );
}

export default function NextChapterPage() {
  useReveal();
  useCalendly();
  useWistia();

  const playerRef = useRef<HTMLElement>(null);

  useWistiaTracking(playerRef);

  return (
    <main className="nc-root">
      <style>{CSS}</style>

      {/* HERO */}
      <section className="nc-hero">
        <div className="nc-shell nc-center">
          <p className="nc-kicker" data-reveal>
            FOR HIGH-ACHIEVING PROFESSIONALS CIRCLING THE IDEA THEY
            CAN&apos;T SHAKE
          </p>

          <h1 data-reveal>
            How to Go From Circling to Launched in 8 Weeks With the
            Ideal Clarity Method™ — Guaranteed
          </h1>

          <p className="nc-hero-guarantee" data-reveal>
            Or I keep coaching you, free, until you do.
          </p>

          <p className="nc-hero-sub" data-reveal>
            You don&apos;t have to quit your job. You don&apos;t need
            another year of circling. Even if you&apos;ve been stuck
            for years and every attempt has stalled — this is how you
            get unstuck.
          </p>

          <CtaButton label="Hero — Book your next chapter conversation" />
        </div>
      </section>

      {/* VSL */}
      <section className="nc-video-section">
        <div className="nc-shell">
          <div className="nc-video-wrap" data-reveal>
            <div className="nc-video-label">
              <span className="nc-live-dot" aria-hidden="true" />
              <div>
                <strong>
                  Watch this before you talk yourself out of it
                  again.
                </strong>
                <span>No email required. No obligation. Just watch.</span>
              </div>
            </div>

            <div className="nc-video-embed">
              <WistiaPlayer
                ref={playerRef}
                media-id={WISTIA_MEDIA_ID}
                aspect="0.547112462006079"
              />
            </div>
          </div>

          <div className="nc-video-cta">
            <CtaButton label="Video CTA" />
            <p data-reveal>
              Finished watching? Book your complimentary conversation.
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

      {/* METHOD — Ideal Clarity Method™ flywheel */}
      <section
        id="icm-method"
        className="nc-method"
        aria-label="The Ideal Clarity Method"
      >
        <div className="nc-narrow nc-center">
          <p className="nc-kicker" data-reveal>
            HOW IT WORKS
          </p>
          <h2 data-reveal>The Ideal Clarity Method™</h2>
          <p className="nc-method-sub" data-reveal>
            Six steps. One flywheel. Momentum that compounds.
          </p>

          <div data-reveal>
            <MethodWheel />
          </div>

          <div className="icm-legend" data-reveal>
            {METHOD_STEPS.map((step) => (
              <div className="icm-legend-item" key={step.n}>
                <span
                  className="icm-chip"
                  style={{ background: step.color }}
                >
                  {step.n}
                </span>
                <div>
                  <strong>{step.name}.</strong> {step.text}
                </div>
              </div>
            ))}
          </div>

          <CtaButton label="Method — Book your next chapter conversation" />
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
                “I went from overwhelmed by everything involved in
                starting — not knowing where to focus my time and
                energy — to a clear, actionable path forward.”
              </p>
              <cite>Peace</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “I spent years saying I&apos;d write a book. What
                changed wasn&apos;t my writing ability — it was
                finally understanding the belief that was keeping me
                stuck. Today, my manuscript is complete.”
              </p>
              <cite>Mila · Finance Director &amp; Author</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “I&apos;d been talking about launching my consulting
                business for six years. What surprised me was
                realizing time wasn&apos;t my real issue — fear was.
                Within months, I had momentum and my first client.”
              </p>
              <cite>Michael · VP Operations</cite>
            </blockquote>

            <blockquote data-reveal>
              <p>
                “I&apos;d started 3 businesses in 3 years, but never
                the one that was actually mine. With Chi-Chi, I found
                my area of genius and unlocked the mental blocks
                holding me back — and I&apos;ve 300x&apos;d my
                revenue so far.”
              </p>
              <cite>Lola · Rapid Reinvent Hair Treatment</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FIT — for you / not for you */}
      <section className="nc-fit">
        <div className="nc-shell">
          <div className="nc-section-heading nc-center" data-reveal>
            <p className="nc-kicker">IS THIS THE RIGHT CONVERSATION FOR YOU?</p>
            <h2>Let&apos;s be honest about fit.</h2>
          </div>

          <div className="nc-fit-grid">
            <div className="nc-fit-card nc-fit-yes" data-reveal>
              <h3>This is for you if:</h3>
              <ul>
                <li>
                  <CheckIcon />
                  <span>
                    You&apos;re a high achiever with something
                    you&apos;ve been circling for months — or years: a
                    business, a book, a podcast, a nonprofit, or the
                    idea you can&apos;t shake.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    You&apos;re done with more planning, more courses,
                    more &ldquo;someday.&rdquo;
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    You&apos;re willing to be honest about what&apos;s
                    actually stopping you.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    You want to start the thing — whether it stays a
                    side hustle or becomes your full next chapter.
                  </span>
                </li>
              </ul>
            </div>

            <div className="nc-fit-card nc-fit-no" data-reveal>
              <h3>This is not for you if:</h3>
              <ul>
                <li>
                  <XIcon />
                  <span>
                    You&apos;re looking for motivation, hype, or a
                    cheerleader.
                  </span>
                </li>
                <li>
                  <XIcon />
                  <span>
                    You want business plans and marketing tactics —
                    that&apos;s the 10%. We work on the 90%.
                  </span>
                </li>
                <li>
                  <XIcon />
                  <span>
                    You&apos;re not willing to look at the real reason
                    you&apos;ve been stuck.
                  </span>
                </li>
                <li>
                  <XIcon />
                  <span>
                    You want a guarantee without doing the work.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="nc-center">
            <CtaButton label="Fit — Book your next chapter conversation" />
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="nc-bio">
        <div className="nc-shell nc-bio-grid">
          <div className="nc-bio-photo" data-reveal>
            <Image
              src="/chichi.png"
              alt="Chi-Chi Jones, Mindset & Momentum Coach and founder of Ideal Clarity Solutions"
              fill
              sizes="(max-width: 900px) 100vw, 400px"
              priority={false}
            />
          </div>

          <div className="nc-bio-copy">
            <p className="nc-kicker" data-reveal>
              WHO YOU&apos;LL MEET
            </p>
            <h2 data-reveal>
              You&apos;ll be talking to someone who&apos;s been exactly
              where you are.
            </h2>

            <div className="nc-bio-text">
              <p data-reveal>
                I&apos;m Chi-Chi Jones, a Mindset &amp; Momentum Coach
                and founder of Ideal Clarity Solutions.
              </p>

              <p data-reveal>
                My background is fifteen-plus years of corporate
                leadership, including nearly a decade at a Fortune 1
                company. It&apos;s also where I discovered, almost by
                accident, that people wanted my coaching before I ever
                offered it: colleagues, friends, friends of friends
                would sit down overwhelmed and confused, and feel
                comfortable telling me the truth: the fears, the
                doubts, the dreams they were too scared to chase.
              </p>

              <p data-reveal>
                And for over a decade, I was one of them. I knew I was
                being called to coaching. I just knew. But I was too
                afraid to embrace it — it didn&apos;t feel like a
                &ldquo;real career,&rdquo; I didn&apos;t feel good
                enough, I didn&apos;t know how to position myself. So
                I stalled. I played it safe. I even started and grew
                multiple other businesses while the calling kept
                chasing me.
              </p>

              <p data-reveal>
                The people who keep coming to me aren&apos;t randomly
                stuck. They have a specific problem: they know what
                they want — a business, a book, a podcast, a
                nonprofit, or the idea they can&apos;t shake — but
                fear, disguised as logic, keeps them from doing it.
              </p>

              <p className="nc-bio-emphasis" data-reveal>
                Just like me.
              </p>

              <p data-reveal>
                Then I came across a quote that changed everything:
              </p>

              <blockquote className="nc-bio-quote" data-reveal>
                <p>
                  &ldquo;The graveyard is the richest place on earth,
                  because it is here that you will find all the hopes
                  and dreams that were never fulfilled — the books
                  that were never written, the songs that were never
                  sung — all because someone was too afraid to take
                  that first step.&rdquo;
                </p>
                <cite>— Les Brown</cite>
              </blockquote>

              <p data-reveal>That hit me like a freight train.</p>

              <p data-reveal>
                I realized my purpose isn&apos;t helping people figure
                out what they want. Most people already know. My
                purpose is helping them overcome the fear and excuses
                that keep them from doing what they already know they
                want to do.
              </p>

              <p data-reveal>
                Not because I read about it in a book. Because I lived
                it. I broke through it, and I did it without blowing
                up my career to do it. I built Ideal Clarity alongside
                my corporate role, the same way I show my clients how
                to start: strategically, not recklessly.
              </p>

              <p data-reveal>
                Now I help others do the same — through the same
                methods that worked for me.
              </p>

              <p className="nc-bio-close" data-reveal>
                If you&apos;ve been &ldquo;planning&rdquo; to start
                something for more than six months and you&apos;re
                still in the same place, that&apos;s exactly who
                I&apos;m here for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL OUTCOMES */}
      <section className="nc-outcomes">
        <div className="nc-narrow nc-center">
          <p className="nc-kicker" data-reveal>
            WHAT HAPPENS ON THE CALL
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
                See which concerns deserve a practical response — and
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

          <CtaButton label="Outcomes — Book your next chapter conversation" />
        </div>
      </section>

      {/* FAQ */}
      <section className="nc-faq">
        <div className="nc-narrow">
          <div className="nc-section-heading nc-center" data-reveal>
            <p className="nc-kicker">BEFORE YOU BOOK</p>
            <h2>Quick answers before you book.</h2>
          </div>

          <div className="nc-faq-list">
            <details data-reveal open>
              <summary>Is this a sales call?</summary>
              <p>
                No. It&apos;s a focused 45-minute conversation: we name
                what&apos;s keeping you stuck, separate facts from
                fear, and you leave with one clear next step. If it
                becomes clear that deeper support would help,
                I&apos;ll tell you what working together could look
                like. No pressure, no obligation.
              </p>
            </details>

            <details data-reveal>
              <summary>
                What if I don&apos;t know exactly what my idea is yet?
              </summary>
              <p>
                That&apos;s fine. Some people arrive with one clear
                idea; others just know something is calling.
                Clarifying that is part of what the conversation is
                for.
              </p>
            </details>

            <details data-reveal>
              <summary>What happens after the call?</summary>
              <p>
                You leave with one clear next step. If we&apos;re both
                convinced the 8-week Dream Accelerator™ is your right
                next move, I&apos;ll tell you about it. If not, you
                keep the clarity.
              </p>
            </details>

            <details data-reveal>
              <summary>What counts as &ldquo;launched&rdquo;?</summary>
              <p>
                Your thing exists in the world and is open for business
                — a business taking its first paying clients, a book
                published, a podcast with episodes live, a nonprofit
                accepting donations. We agree on your specific finish
                line in week one, and that&apos;s the line the
                guarantee is measured against.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section className="nc-booking">
        <div className="nc-shell nc-booking-grid">
          <div className="nc-booking-copy" data-reveal>
            <p className="nc-kicker nc-kicker-light">
              COMPLIMENTARY 45-MINUTE CONVERSATION
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
            <BookingSteps />
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
          scrollToBooking("Sticky — Book your next chapter conversation")
        }
      >
        <span>Ready to stop postponing it?</span>
        <strong>{CTA_LABEL} →</strong>
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
    --alert: #e5432b;
    --white: #ffffff;
    --soft: #f6f8fa;
    --text-soft: #5e6c7a;
    --line: #dfe5eb;
    --gold: #CDA44E;
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

  .nc-section-heading {
    max-width: 790px;
    margin: 0 auto 44px;
  }

  .nc-section-heading h2 {
    margin-bottom: 0;
    font-size: clamp(2.4rem, 4.8vw, 4.4rem);
  }

  /* ---------- HERO ---------- */

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

  .nc-hero-guarantee {
    max-width: 800px;
    margin: -6px auto 22px;
    color: var(--orange-dark);
    font-size: clamp(1.15rem, 2.4vw, 1.6rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .nc-hero-sub {
    max-width: 800px;
    margin: 0 auto 30px;
    color: var(--text-soft);
    font-size: clamp(1.08rem, 2vw, 1.35rem);
    line-height: 1.65;
  }

  .nc-hero-sub strong {
    color: var(--navy);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
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
    text-align: center;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .nc-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 44px rgba(202, 108, 18, 0.3);
  }

  /* ---------- VIDEO ---------- */

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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 16px 20px;
    color: var(--white);
    background: linear-gradient(135deg, var(--alert), #c22e1a);
    text-align: left;
    animation: nc-glow 2s ease-in-out infinite;
  }

  .nc-video-label > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .nc-video-label strong {
    font-size: clamp(1rem, 2.2vw, 1.18rem);
    font-weight: 900;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  .nc-video-label span {
    color: #ffd9d3;
    font-size: 0.82rem;
    font-weight: 600;
  }

  .nc-live-dot {
    position: relative;
    flex: 0 0 auto;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--white);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    animation: nc-pulse 1.6s ease-out infinite;
  }

  @keyframes nc-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    100% {
      box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);
    }
  }

  @keyframes nc-glow {
    0%,
    100% {
      box-shadow: inset 0 0 0 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08);
    }
  }

  .nc-video-embed {
    width: 100%;
    max-width: min(420px, 100%);
    margin: 0 auto;
  }

  wistia-player[media-id='d9blju2tmz']:not(:defined) {
    background: center / contain no-repeat
      url('https://fast.wistia.com/embed/medias/d9blju2tmz/swatch');
    display: block;
    filter: blur(5px);
    padding-top: 182.78%;
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

  /* ---------- RECOGNITION ---------- */

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

  /* ---------- METHOD (flywheel) ---------- */

  .nc-method {
    padding: 100px 0;
    background: var(--white);
  }

  .nc-method h2 {
    margin-bottom: 12px;
    font-size: clamp(2.4rem, 4.8vw, 4.4rem);
  }

  .nc-method-sub {
    margin: 0 0 36px;
    color: var(--text-soft);
    font-size: 1.08rem;
  }

  .icm-wheel {
    display: block;
    width: 100%;
    max-width: 520px;
    height: auto;
    margin: 0 auto;
  }

  .icm-num {
    font-size: 34px;
    font-weight: 800;
    fill: #f7f3ea;
  }

  .icm-name {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    fill: #f7f3ea;
  }

  .icm-hub-title {
    font-size: 21px;
    font-weight: 800;
    letter-spacing: -0.02em;
    fill: #1b2b46;
  }

  .icm-hub-sub {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    fill: #5a4a22;
  }

  .icm-legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 28px;
    max-width: 680px;
    margin: 36px auto 40px;
    text-align: left;
  }

  .icm-legend-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--navy);
  }

  .icm-chip {
    display: flex;
    flex: 0 0 28px;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--white);
    font-size: 0.85rem;
    font-weight: 800;
  }

  .icm-legend-item strong {
    font-weight: 800;
  }

  /* ---------- TESTIMONIALS ---------- */

  .nc-testimonials-section {
    padding: 100px 0;
    background: var(--soft);
  }

  .nc-testimonials {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .nc-testimonials blockquote {
    display: flex;
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
    font-size: 1.02rem;
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

  /* ---------- FIT ---------- */

  .nc-fit {
    padding: 100px 0;
    background: var(--white);
  }

  .nc-fit-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .nc-fit-card {
    padding: 32px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--white);
    box-shadow: 0 14px 40px rgba(16, 40, 68, 0.07);
  }

  .nc-fit-card h3 {
    margin-bottom: 22px;
    font-size: 1.5rem;
  }

  .nc-fit-card ul {
    display: grid;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nc-fit-card li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    color: var(--navy);
    line-height: 1.55;
  }

  .nc-fit-card li svg {
    flex: 0 0 auto;
    margin-top: 2px;
  }

  .nc-fit-yes {
    border-top: 4px solid var(--orange);
  }

  .nc-fit-yes li svg {
    color: var(--orange-dark);
  }

  .nc-fit-no {
    border-top: 4px solid var(--navy);
    background: var(--soft);
  }

  .nc-fit-no li svg {
    color: #8a96a3;
  }

  /* ---------- BIO ---------- */

  .nc-bio {
    padding: 100px 0;
    background: var(--soft);
  }

  .nc-bio-grid {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 56px;
    align-items: start;
  }

  .nc-bio-photo {
    position: sticky;
    top: 24px;
    width: 100%;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 22px;
    background: var(--line);
    box-shadow: 0 24px 60px rgba(16, 40, 68, 0.14);
  }

  .nc-bio-photo img {
    object-fit: cover;
    object-position: center top;
  }

  .nc-bio-copy h2 {
    margin-bottom: 30px;
    font-size: clamp(2.2rem, 4vw, 3.6rem);
  }

  .nc-bio-text p {
    margin-bottom: 20px;
    color: #2f3f50;
    font-size: 1.06rem;
    line-height: 1.7;
  }

  .nc-bio-emphasis {
    font-weight: 900;
    color: var(--navy) !important;
    font-size: 1.3rem !important;
  }

  .nc-bio-quote {
    margin: 4px 0 24px;
    padding: 22px 24px;
    border-left: 4px solid var(--gold);
    background: var(--white);
    border-radius: 0 14px 14px 0;
  }

  .nc-bio-quote p {
    margin-bottom: 12px;
    color: var(--navy);
    font-style: italic;
    font-size: 1.08rem;
  }

  .nc-bio-quote cite {
    color: var(--orange-dark);
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .nc-bio-close {
    padding: 18px 20px;
    border-left: 3px solid var(--orange);
    background: var(--white);
    font-weight: 700;
    color: var(--navy) !important;
  }

  /* ---------- OUTCOMES ---------- */

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

  /* ---------- FAQ ---------- */

  .nc-faq {
    padding: 100px 0;
    background: var(--soft);
  }

  .nc-faq-list {
    display: grid;
    gap: 12px;
  }

  .nc-faq-list details {
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 10px 30px rgba(16, 40, 68, 0.05);
  }

  .nc-faq-list summary {
    position: relative;
    padding: 20px 56px 20px 24px;
    cursor: pointer;
    list-style: none;
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  .nc-faq-list summary::-webkit-details-marker {
    display: none;
  }

  .nc-faq-list summary::after {
    position: absolute;
    top: 50%;
    right: 22px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    color: var(--white);
    background: var(--orange);
    content: "+";
    font-size: 1.1rem;
    font-weight: 900;
    line-height: 26px;
    text-align: center;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
  }

  .nc-faq-list details[open] summary::after {
    content: "–";
  }

  .nc-faq-list details p {
    margin: 0;
    padding: 0 24px 22px;
    color: #2f3f50;
    line-height: 1.65;
  }

  /* ---------- BOOKING ---------- */

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

  .nc-guarantee-strip {
    margin: 0 0 6px;
    padding: 14px 16px;
    border-radius: 12px;
    border-left: 4px solid var(--orange);
    color: var(--navy);
    background: #fff4e8;
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .nc-guarantee-strip strong {
    color: var(--orange-dark);
    font-weight: 900;
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

  /* Calendly needs generous height or its inner iframe gets clipped
     and the visitor sees a scrollbar inside the card. */
  .nc-calendar-embed {
    min-width: 320px;
    height: 780px;
  }

  /* ---------- QUALIFICATION FORM (step 1 of booking) ---------- */

  .nc-qual {
    padding: 6px 16px 20px;
    text-align: left;
  }

  .nc-qual-kicker {
    margin-bottom: 8px;
  }

  .nc-qual-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .nc-qual-field {
    margin: 0 0 16px;
    padding: 0;
    border: 0;
  }

  .nc-qual-field label,
  .nc-qual-field legend {
    display: block;
    margin-bottom: 8px;
    padding: 0;
    color: var(--navy);
    font-size: 0.98rem;
    font-weight: 800;
    line-height: 1.45;
  }

  .nc-qual-field input[type="text"],
  .nc-qual-field input[type="email"] {
    width: 100%;
    padding: 13px 15px;
    border: 2px solid var(--line);
    border-radius: 10px;
    color: var(--navy);
    background: var(--white);
    font: inherit;
    font-size: 1rem;
  }

  .nc-qual-field input::placeholder {
    color: #9aa7b4;
  }

  .nc-qual-field input:focus {
    outline: none;
    border-color: var(--orange);
    box-shadow: 0 0 0 3px rgba(242, 140, 40, 0.18);
  }

  .nc-qual-radios {
    display: grid;
    gap: 10px;
  }

  .nc-qual-radio {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 0;
    padding: 12px 15px;
    border: 2px solid var(--line);
    border-radius: 10px;
    color: var(--navy);
    font-weight: 600;
    cursor: pointer;
  }

  .nc-qual-radio input {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--orange-dark);
    flex: 0 0 auto;
  }

  .nc-qual-radio:has(input:checked) {
    border-color: var(--orange);
    background: rgba(242, 140, 40, 0.07);
  }

  .nc-qual-error {
    margin: 0 0 14px;
    color: var(--alert);
    font-weight: 700;
    font-size: 0.95rem;
  }

  .nc-button-block {
    width: 100%;
  }

  .nc-button:disabled {
    opacity: 0.7;
    cursor: wait;
  }

  .nc-qual-note {
    margin: 14px 0 0;
    color: var(--text-soft);
    font-size: 0.86rem;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 560px) {
    .nc-qual-grid {
      grid-template-columns: 1fr;
    }
  }

  .nc-calendar-link {
    display: flex;
    width: 100%;
    min-height: 54px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    border-radius: 10px;
    color: var(--white) !important;
    background: var(--navy);
    font-weight: 850;
    text-align: center;
  }

  /* ---------- FOOTER ---------- */

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

  /* ---------- STICKY CTA ---------- */

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
    text-align: left;
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

  /* ---------- RESPONSIVE ---------- */

  @media (max-width: 900px) {
    .nc-outcome-grid,
    .nc-testimonials,
    .nc-booking-grid,
    .nc-fit-grid,
    .nc-bio-grid {
      grid-template-columns: 1fr;
    }

    .nc-booking-grid {
      gap: 42px;
    }

    .nc-bio-grid {
      gap: 36px;
    }

    .nc-bio-photo {
      position: static;
      max-width: 360px;
      margin: 0 auto;
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
      font-size: clamp(2.6rem, 11.5vw, 4.3rem);
    }

    .nc-hero-guarantee {
      font-size: 1.15rem;
    }

    .nc-video-section {
      padding-bottom: 74px;
    }

    .nc-recognition,
    .nc-method,
    .nc-outcomes,
    .nc-testimonials-section,
    .nc-fit,
    .nc-bio,
    .nc-faq,
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
      align-items: flex-start;
      padding: 14px 14px;
    }

    .nc-live-dot {
      margin-top: 4px;
    }

    .icm-legend {
      grid-template-columns: 1fr;
    }

    .icm-num {
      font-size: 30px;
    }

    .icm-name {
      font-size: 13px;
    }

    .nc-outcome-grid article,
    .nc-testimonials blockquote,
    .nc-fit-card {
      padding: 24px;
    }

    .nc-calendar {
      padding: 6px;
    }

    .nc-calendar-heading {
      align-items: flex-start;
      flex-direction: column;
    }

    /* Calendly's mobile layout stacks the calendar and time list
       vertically, so it needs much more height than desktop. */
    .nc-calendar-embed {
      height: 1060px;
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

    .nc-sticky strong {
      font-size: 0.8rem;
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

