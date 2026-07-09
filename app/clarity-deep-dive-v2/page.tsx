"use client";

import { useEffect, useState } from "react";

/**
 * Ideal Clarity — The Clarity Intensive (V2)
 * Premium editorial VSL landing page.
 * Route: app/clarity-deep-dive-v2/page.tsx
 * Implemented from the Ideal Clarity Design Bible / Developer Bible.
 * Self-contained: no Tailwind, no external UI libraries.
 */

const CAL_URL = "https://calendly.com/idealclaritysolutions/clarity-intensive";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCalendly() {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const s = document.createElement("script");
    s.id = "calendly-widget-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

function scrollToBook(e?: React.MouseEvent) {
  e?.preventDefault();
  const target = document.getElementById("calendar") || document.getElementById("book");
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToVideo(e?: React.MouseEvent) {
  e?.preventDefault();
  document.getElementById("vsl")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function ClarityDeepDiveV2Page() {
  useReveal();
  useCalendly();
  const [showBar, setShowBar] = useState(false);
  const [pastVideo, setPastVideo] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBar(window.scrollY > 650);
      const vid = document.getElementById("vsl");
      if (vid) {
        // "past the video" once the video's bottom has scrolled above the viewport midpoint
        const bottom = vid.getBoundingClientRect().bottom;
        setPastVideo(bottom < window.innerHeight * 0.5);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ic-root">
      <style>{CSS}</style>

      {/* ============ SECTION 1 — HERO (trimmed, portrait-video frame) ============ */}
      <header className="ic-hero">
        <div className="ic-wrap ic-center">
          <p className="ic-eyebrow" data-reveal>
            For accomplished professionals who know there&rsquo;s another chapter waiting
          </p>
          <h1 className="ic-h1 ic-h1-trim" data-reveal>
            You&rsquo;ve built the successful career.<br />
            <em>So what&rsquo;s really stopping you from building what&rsquo;s next?</em>
          </h1>
          <p className="ic-hero-sub ic-hero-sub-bold" data-reveal>
            If you&rsquo;ve been carrying the same idea for years&mdash;a business, consulting, writing,
            a career pivot, or simply a different way of living&mdash;this 10-minute video will help you
            understand what&rsquo;s really been keeping you stuck.
          </p>

          <p className="ic-watchlabel" data-reveal>Before you decide anything&hellip; watch this first</p>

          <div className="ic-video-portrait" id="vsl" data-reveal>
            {/* Replace this placeholder with your portrait Vimeo iframe.
                Paste the iframe from Vimeo Share -> Embed here, replacing the
                inner .ic-vp-placeholder div. Keep className="ic-vp-frame" on the wrapper. */}
            <div className="ic-vp-frame">
              <iframe
                src="https://player.vimeo.com/video/1207592990?badge=0&autopause=0&byline=0&title=0&portrait=0&dnt=1&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Real Reason You Haven&rsquo;t Started Your Next Chapter"
              />
            </div>
          </div>

          <div className="ic-hero-ctas ic-hero-ctas-single" data-reveal>
            <a href="#vsl" className="ic-btn ic-btn-gold ic-btn-lg ic-btn-watch" onClick={scrollToVideo}>
              &#9654;&nbsp; Watch the 10-Minute Video
            </a>
          </div>
          <p className="ic-micro" data-reveal>
            No email required. No opt-in. Just watch.
          </p>

          <div className="ic-belowvideo" data-reveal>
            <p>
              Most people think they need another strategy. <strong>They don&rsquo;t.</strong> This video
              explains what has actually been keeping capable professionals stuck for years.
            </p>
          </div>
        </div>
      </header>

      {/* ============ SECTION 2 — REFLECTION ============ */}
      <section className="ic-sec ic-sec-navy">
        <div className="ic-tight ic-center">
          <h2 className="ic-h2-navy" data-reveal>If that video felt uncomfortably personal&hellip;</h2>
          <p className="ic-good" data-reveal>Good.</p>
          <div className="ic-prose-navy" data-reveal>
            <p>It wasn&rsquo;t because I know your situation. It&rsquo;s because the patterns that keep capable people stuck are <strong>surprisingly predictable.</strong></p>
            <div className="ic-triad">
              <span>You don&rsquo;t need another <strong>strategy.</strong></span>
              <span>You don&rsquo;t need another <strong>certification.</strong></span>
              <span>You don&rsquo;t need another <strong>year.</strong></span>
            </div>
            <p>You need someone who can see <strong>the story that&rsquo;s been quietly running underneath</strong> all of them.</p>
            <p className="ic-reflect-close">That&rsquo;s what this conversation is for.</p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — THIS ISN'T BUSINESS COACHING ============ */}
      <section className="ic-sec">
        <div className="ic-narrow ic-center">
          <span className="ic-kick ic-center" style={{display:"block"}} data-reveal>What this really is</span>
          <h2 className="ic-h2 ic-noline" data-reveal>This isn&rsquo;t about starting a business.</h2>
          <p className="ic-lead-serif" data-reveal>
            It&rsquo;s about understanding <em>why you&rsquo;ve spent years thinking about one.</em>
          </p>

          <div className="ic-outcomes" data-reveal>
            <span className="ic-outcome">Build a consulting firm</span>
            <span className="ic-outcome">Launch a business</span>
            <span className="ic-outcome">Write a book</span>
            <span className="ic-outcome">Change careers</span>
            <span className="ic-outcome ic-outcome-wide">Stay &mdash; with a completely different relationship to your work</span>
          </div>

          <div className="ic-prose ic-center-prose" data-reveal>
            <p className="ic-emph">The destination isn&rsquo;t the point.</p>
            <p>The point is finally understanding <strong>what&rsquo;s been quietly shaping your decisions all along.</strong> Because once that changes&hellip; everything downstream changes too.</p>
          </div>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line" onClick={scrollToBook}>Understand what&rsquo;s been shaping your decisions &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — RECOGNITION MIRROR ============ */}
      <section className="ic-sec ic-sec-ivory">
        <div className="ic-wrap">
          <div className="ic-mirror">
            <div className="ic-mirror-copy" data-reveal>
              <h2 className="ic-h2">You might recognize yourself here.</h2>
              <div className="ic-prose">
                <p>
                  You&rsquo;re successful.<br />
                  People trust you.<br />
                  You&rsquo;re the one others come to when they need perspective.
                </p>
                <p>You&rsquo;ve built a career you can genuinely be proud of.</p>
                <p>
                  And yet...<br />
                  there&rsquo;s a conversation you&rsquo;ve been having with yourself for years.
                </p>
                <p>
                  Maybe it&rsquo;s a business.<br />
                  Maybe consulting.<br />
                  Maybe writing.<br />
                  Maybe something you haven&rsquo;t even said out loud yet.
                </p>
                <p>You keep telling yourself you&rsquo;ll come back to it.</p>
                <p>
                  After the next project.<br />
                  After things settle down.<br />
                  After you feel more ready.
                </p>
                <p>But it never really leaves.</p>
                <p>Neither does <strong>the quiet feeling that you were meant to do something more.</strong></p>
              </div>
            </div>
            <aside className="ic-diagnostic" data-reveal>
              <h3 className="ic-diag-title">This may be you if...</h3>
              <ul className="ic-diag-list">
                <li>You&rsquo;ve been carrying the same idea for years.</li>
                <li>You keep waiting for the &ldquo;right&rdquo; time.</li>
                <li>You&rsquo;ve invested in learning but still haven&rsquo;t moved.</li>
                <li>Your career is successful, but you don&rsquo;t believe it&rsquo;s your final chapter.</li>
                <li>You know more than enough to begin.</li>
                <li>You don&rsquo;t understand why you keep stopping yourself.</li>
              </ul>
            </aside>
          </div>
          <p className="ic-mirror-close ic-center" data-reveal>
            If several of those felt familiar...<br />
            you&rsquo;re exactly who this conversation was created for.
          </p>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line-gold" onClick={scrollToBook}>If this is you, let&rsquo;s have the conversation &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — THE READINESS LIE / FOUR FACES ============ */}
      <section className="ic-sec ic-sec-navy">
        <div className="ic-wrap">
          <div className="ic-narrow ic-center">
            <span className="ic-kick ic-kick-navy" data-reveal>The Four Faces</span>
            <h2 className="ic-h2-navy ic-noline" data-reveal>
              The Readiness Lie rarely sounds like fear.<br />
              <em>It usually sounds responsible.</em>
            </h2>
            <div className="ic-prose-navy" data-reveal>
              <p>Over the years, I&rsquo;ve noticed that the same invisible pattern tends to wear one of four disguises.</p>
              <p>
                One of them usually lands harder than the others.<br />
                That&rsquo;s rarely an accident.
              </p>
            </div>
          </div>

          <div className="ic-faces">
            <div className="ic-face" data-reveal>
              <span className="ic-face-accent" aria-hidden="true" />
              <h3>Information Hunt</h3>
              <p className="ic-face-quote">&ldquo;I just need to learn a little more.&rdquo;</p>
              <p>
                Learning feels productive.<br />
                That&rsquo;s why it&rsquo;s such an effective hiding place.
              </p>
              <p>
                The problem isn&rsquo;t learning.<br />
                It&rsquo;s using learning to postpone the moment you have to become visible.
              </p>
            </div>
            <div className="ic-face" data-reveal>
              <span className="ic-face-accent" aria-hidden="true" />
              <h3>Perfect Conditions</h3>
              <p className="ic-face-quote">&ldquo;I&rsquo;ll start when life settles down.&rdquo;</p>
              <p>
                The next quarter.<br />
                The next promotion.<br />
                The kids getting older.<br />
                Retirement.
              </p>
              <p>There is always another condition.</p>
              <p>
                Eventually you realize...<br />
                you weren&rsquo;t waiting for better timing.<br />
                You were waiting for certainty.
              </p>
            </div>
            <div className="ic-face" data-reveal>
              <span className="ic-face-accent" aria-hidden="true" />
              <h3>The Safety of Almost</h3>
              <p>This is the one I see most often.</p>
              <p>
                You stay almost.<br />
                Almost ready.<br />
                Almost started.<br />
                Almost decided.
              </p>
              <p>
                Because if you never fully step into it...<br />
                you never have to find out who you really could have become.
              </p>
              <p>
                Almost feels safe.<br />
                Until one day...<br />
                it feels like regret.
              </p>
            </div>
            <div className="ic-face" data-reveal>
              <span className="ic-face-accent" aria-hidden="true" />
              <h3>Borrowed Rules</h3>
              <p>
                Somewhere along the way...<br />
                you inherited ideas about what someone like you should want.
              </p>
              <p>
                You never consciously chose those beliefs.<br />
                You absorbed them.
              </p>
              <p>
                Now they quietly shape every decision you make.<br />
                Without you ever realizing it.
              </p>
            </div>
          </div>

          <p className="ic-faces-close ic-faces-close-navy ic-center" data-reveal>
            One of those probably landed a little harder than the others.<br />
            That usually isn&rsquo;t an accident.<br />
            It&rsquo;s often the place we begin.
          </p>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line-gold" onClick={scrollToBook}>Let&rsquo;s find the one that&rsquo;s yours &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — THE 90% PROBLEM ============ */}
      <section className="ic-sec">
        <div className="ic-narrow ic-center">
          <span className="ic-kick" data-reveal>The 90% Problem</span>
          <h2 className="ic-h2 ic-noline" data-reveal>Here&rsquo;s what almost everyone gets wrong.</h2>
          <div className="ic-prose ic-prose-lg" data-reveal>
            <p>At the beginning of any new chapter, strategy matters. You genuinely need information.</p>
            <p>But once you&rsquo;ve been carrying the same idea for months&mdash;or years&mdash;the equation quietly changes.</p>
          </div>

          <div className="ic-9010" data-reveal>
            <div className="ic-9010-row">
              <div className="ic-9010-block ic-9010-small">
                <span className="ic-9010-num">10%</span>
                <span className="ic-9010-label">Strategy</span>
              </div>
              <div className="ic-9010-block ic-9010-big">
                <span className="ic-9010-num">90%</span>
                <span className="ic-9010-label">Identity &mdash; whether you&rsquo;ll give yourself permission</span>
              </div>
            </div>
            <div className="ic-9010-bar" aria-hidden="true">
              <span className="ic-9010-fill-s" />
              <span className="ic-9010-fill-i" />
            </div>
            <p className="ic-9010-caption">I call this <strong>The 90% Problem.</strong></p>
          </div>

          <div className="ic-prose ic-prose-lg" data-reveal>
            <p className="ic-emph">You&rsquo;ve been trying to solve a ninety-percent identity problem with a ten-percent strategy solution.</p>
            <p>That&rsquo;s why another course rarely changes anything. No amount of planning can overcome that.</p>
          </div>
          <p className="ic-standalone ic-standalone-light" data-reveal>
            You don&rsquo;t need another plan.<br />
            <em>You need a different conversation.</em>
          </p>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line" onClick={scrollToBook}>Have that conversation &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 8 — ABOUT CHI-CHI ============ */}
      <section className="ic-sec">
        <div className="ic-wrap">
          <div className="ic-about">
            <div className="ic-about-photo" data-reveal>
              <img src="/chichi.png" alt="Chi-Chi Jones" className="ic-photo" />
            </div>
            <div className="ic-about-text" data-reveal>
              <h2 className="ic-h2">
                For years...<br />
                I was helping everyone else find clarity.
              </h2>
              <div className="ic-prose">
                <p className="ic-dropcap">For more than fifteen years, I&rsquo;ve worked inside complex organizations helping people solve difficult problems.</p>
                <p>For nearly a decade, I&rsquo;ve been part of one of the world&rsquo;s largest companies, where clarity isn&rsquo;t a luxury&mdash;it&rsquo;s a requirement.</p>
                <p>
                  People naturally came to me when they needed to untangle complexity.<br />
                  To make difficult decisions.<br />
                  To organize what felt overwhelming.<br />
                  To find a way forward.
                </p>
                <p>But there was one contradiction I couldn&rsquo;t ignore.</p>
                <p>
                  I could help other people see clearly...<br />
                  then go home and spend months circling my own next chapter.
                </p>
                <p>
                  I knew what I wanted.<br />
                  I just couldn&rsquo;t seem to move.
                </p>
                <p>That experience changed the way I think about transformation.</p>
                <p>Because I realized something.</p>
              </div>
              <blockquote className="ic-about-pull">
                You can&rsquo;t read the label <em>from inside the jar.</em>
              </blockquote>
              <div className="ic-prose ic-prose-continue">
                <p>
                  None of us can. Not because we&rsquo;re lacking self-awareness&mdash;because
                  we&rsquo;re standing inside the very story we&rsquo;re trying to understand.
                </p>
                <p>
                  The moment someone helped me see what I couldn&rsquo;t...<br />
                  everything changed.
                </p>
                <p>
                  Not because they gave me a better strategy.<br />
                  Because they helped me see a story I couldn&rsquo;t see from the inside.
                </p>
                <p>That&rsquo;s the work I do now.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 9 — WHAT HAPPENS ============ */}
      <section className="ic-sec ic-sec-ivory">
        <div className="ic-narrow ic-center">
          <span className="ic-kick ic-center" style={{display:"block"}} data-reveal>The Process</span>
          <h2 className="ic-h2 ic-noline" data-reveal>So what actually happens during our conversation?</h2>
          <p className="ic-happens-lead" data-reveal>
            It&rsquo;s simpler than most people expect. Seventy-five minutes together, where
            <em> you talk and I listen</em> &mdash; not just for the facts, but for the assumptions
            and invisible rules you&rsquo;ve stopped noticing.
          </p>

          <div className="ic-process ic-process-arc">
            <div className="ic-process-card" data-reveal>
              <span className="ic-num">1</span>
              <h3>Before We Meet</h3>
              <p>You answer four thoughtful questions &mdash; not because there are right answers, but so I begin listening before we ever speak.</p>
            </div>
            <div className="ic-process-card" data-reveal>
              <span className="ic-num">2</span>
              <h3>During The Conversation</h3>
              <p>We uncover the real reason you haven&rsquo;t moved &mdash; the story underneath the story &mdash; and replace it with a truer one. Once you see it, the next step stops feeling impossible, and you finally take it.</p>
            </div>
            <div className="ic-process-card" data-reveal>
              <span className="ic-num">3</span>
              <h3>Afterward</h3>
              <p>Within twenty-four hours, a written summary of everything we uncovered &mdash; so you leave with something you can return to.</p>
            </div>
          </div>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line" onClick={scrollToBook}>Start with one conversation &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 10 — WHAT YOU LEAVE WITH ============ */}
      <section className="ic-sec ic-sec-navy">
        <div className="ic-wrap">
          <div className="ic-narrow ic-center">
            <h2 className="ic-h2-navy ic-noline" data-reveal>
              By the end of our conversation, <em>you&rsquo;ll leave with&hellip;</em>
            </h2>
          </div>
          <div className="ic-leave ic-leave-dark ic-leave-three">
            <div className="ic-leave-card" data-reveal>
              <span className="ic-leave-idx">1</span>
              <h3>Clarity about what&rsquo;s really been keeping you stuck</h3>
              <p>Not another theory or framework. You&rsquo;ll understand the real barrier that&rsquo;s been quietly shaping your decisions &mdash; and once you see it, you can&rsquo;t unsee it.</p>
            </div>
            <div className="ic-leave-card" data-reveal>
              <span className="ic-leave-idx">2</span>
              <h3>A new way of seeing your next chapter</h3>
              <p>We&rsquo;ll replace the story that&rsquo;s been keeping you circling with one that lets you move with confidence instead of hesitation.</p>
            </div>
            <div className="ic-leave-card" data-reveal>
              <span className="ic-leave-idx">3</span>
              <h3>One meaningful next step</h3>
              <p>You&rsquo;ll leave knowing exactly what to do next &mdash; not someday, but this week. No overwhelm. No ten-step plan. Just the next right move.</p>
            </div>
          </div>
          <p className="ic-leave-fine ic-center" data-reveal>
            One conversation won&rsquo;t build your next chapter for you. But it can remove the one thing
            that&rsquo;s been keeping you from starting it.
          </p>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line-gold" onClick={scrollToBook}>Begin that shift &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 11 — TESTIMONIALS ============ */}
      <section className="ic-sec">
        <div className="ic-wrap">
          <span className="ic-kick ic-center" style={{display:"block"}} data-reveal>In their words</span>
          <h2 className="ic-h2 ic-noline ic-center" data-reveal>What people say after the conversation</h2>
          <div className="ic-testis">
            <blockquote className="ic-testi" data-reveal>
              <p>&ldquo;I&rsquo;ve started 3 businesses in the last 3 years, and the hardest part was always aligning on the path most authentic to me &mdash; not just building another thing someone already built. With Chi-Chi, I found my area of genius and unlocked the mental blocks that were holding me back from fully monetizing my business in a way that reflects my value. I&rsquo;ve 300x&rsquo;d my revenue so far.&rdquo;</p>
              <cite>&mdash; Lola, <span className="ic-cite-co">Rapid Reinvent Hair Treatment</span></cite>
            </blockquote>
            <blockquote className="ic-testi" data-reveal>
              <p>&ldquo;Before reaching out to Ideal Clarity, I felt overwhelmed by everything involved in starting and growing a business. There was so much information, so many decisions to make, and it was hard to know where to focus my time and energy. Ideal Clarity helped turn that uncertainty into a clear, actionable path forward. Chi-Chi took the time to understand my goals, asked thoughtful questions, and provided practical guidance tailored to my situation. If you are looking for clarity, accountability, and experienced guidance, I highly recommend Ideal Clarity.&rdquo;</p>
              <cite>&mdash; Peace</cite>
            </blockquote>
            <blockquote className="ic-testi" data-reveal>
              <p>&ldquo;Chi-Chi helped me identify decision-making tools and exercises to clarify my values as I weighed some big decisions. Her guidance reframed and clarified my next steps in a valuable way. If you have a business decision or operational problem to solve, Ideal Clarity can help you find your way.&rdquo;</p>
              <cite>&mdash; Hannah Bailey, <span className="ic-cite-co">Studio Northwood</span></cite>
            </blockquote>
          </div>
          <div className="ic-softcta ic-center" data-reveal>
            <a href="#book" className="ic-btn ic-btn-line" onClick={scrollToBook}>See what becomes possible for you &rarr;</a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 12 — WHY THIS MATTERS NOW ============ */}
      <section className="ic-sec ic-sec-navy">
        <div className="ic-tight ic-center">
          <h2 className="ic-h2-navy" data-reveal>
            The cost isn&rsquo;t the session.<br />
            <em>It&rsquo;s another year of circling.</em>
          </h2>
          <div className="ic-prose-navy" data-reveal>
            <p>There&rsquo;s a quiet cost to postponing something that continues asking for your attention.</p>
            <p>Not because time is running out.</p>
            <p>
              Because every year you postpone it...<br />
              the story becomes a little more familiar.<br />
              The identity becomes a little more fixed.<br />
              The waiting becomes a little easier to justify.
            </p>
            <p>
              Until one day...<br />
              you stop asking whether there&rsquo;s another chapter.
            </p>
            <p>
              Not because there isn&rsquo;t one.<br />
              Because <strong>you&rsquo;ve become tired of disappointing yourself.</strong>
            </p>
            <p className="ic-emph">
              That&rsquo;s the real cost.<br />
              <span style={{fontWeight:400,color:"var(--muted)"}}>Not money. Not risk.</span>
            </p>
            <p className="ic-alone">Silence.</p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 13 — OFFER (navy showpiece) ============ */}
      <section className="ic-sec ic-sec-navy ic-offer-sec">
        <div className="ic-narrow ic-center">
          <span className="ic-kick ic-kick-navy" data-reveal>The Conversation</span>
          <h2 className="ic-h2-navy ic-noline" data-reveal>The Clarity Intensive</h2>
          <p className="ic-offer-lead" data-reveal>
            One conversation designed to help you see <em>what you can&rsquo;t see alone.</em>
          </p>

          <div className="ic-offer-card" data-reveal>
            <div className="ic-offer-glow" aria-hidden="true" />
            <div className="ic-offer-spec">
              <div className="ic-offer-col">
                <span className="ic-offer-big">75</span>
                <span className="ic-offer-unit">minutes, private</span>
              </div>
              <div className="ic-offer-divider" aria-hidden="true" />
              <div className="ic-offer-col">
                <span className="ic-offer-big">1</span>
                <span className="ic-offer-unit">meaningful next step</span>
              </div>
              <div className="ic-offer-divider" aria-hidden="true" />
              <div className="ic-offer-col">
                <span className="ic-offer-big">24h</span>
                <span className="ic-offer-unit">written summary</span>
              </div>
            </div>

            <ul className="ic-included">
              <li>75-minute private video session</li>
              <li>Four-question pre-session reflection</li>
              <li>Personalized written summary within 24 hours</li>
              <li>One clear next-step recommendation</li>
              <li>Full clarity guarantee</li>
            </ul>

            <div className="ic-offer-price-row">
              <span className="ic-offer-priceLabel">The investment</span>
              <span className="ic-offer-price">$750</span>
              <span className="ic-offer-note">No ongoing program. No subscription. No pressure to continue.</span>
            </div>

            <a href="#book" className="ic-btn ic-btn-gold ic-btn-lg" onClick={scrollToBook}>
              Book Your Clarity Intensive
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 14 — GUARANTEE ============ */}
      <section className="ic-sec ic-sec-tightpad">
        <div className="ic-narrow">
          <div className="ic-guarantee" data-reveal>
            <h2 className="ic-h3-serif">My promise to you</h2>
            <p>
              If we finish our conversation and you genuinely don&rsquo;t feel you received meaningful
              clarity...<br />
              tell me before we end the call.
            </p>
            <p>I&rsquo;ll refund you in full.</p>
            <p>
              No awkward conversation.<br />
              No justification.<br />
              No hidden conditions.
            </p>
            <p>The only reason this conversation should exist is because it creates real movement.</p>
            <p>
              If it doesn&rsquo;t...<br />
              you shouldn&rsquo;t pay for it.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 15 — FINAL INVITATION ============ */}
      <section className="ic-sec ic-sec-ivory">
        <div className="ic-tight ic-center">
          <h2 className="ic-h2" data-reveal>
            You already know there&rsquo;s another chapter.
          </h2>
          <div className="ic-prose" data-reveal>
            <p>
              The question isn&rsquo;t whether it&rsquo;s there.<br />
              The question is whether you&rsquo;re ready to understand what&rsquo;s been standing between
              you and it.
            </p>
            <p>You don&rsquo;t have to make a life-changing decision today.</p>
            <p>You only have to decide whether you&rsquo;re willing to have one honest conversation.</p>
            <p>
              If something in you has quietly been saying,<br />
              <em>&ldquo;This feels like it&rsquo;s speaking directly to me.&rdquo;</em>
            </p>
            <p>Don&rsquo;t ignore that voice.</p>
            <p>It has probably been trying to get your attention for much longer than this page.</p>
          </div>
          <div className="ic-cta-row" data-reveal>
            <a href="#book" className="ic-btn ic-btn-gold" onClick={scrollToBook}>
              Book Your Clarity Intensive
            </a>
            <p className="ic-micro">
              Choose a time that works for you. Answer four thoughtful questions. I&rsquo;ll meet you
              there.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 16 — FAQ ============ */}
      <section className="ic-sec">
        <div className="ic-narrow">
          <span className="ic-kick ic-center" style={{display:"block"}} data-reveal>Questions worth sitting with</span>
          <h2 className="ic-h2 ic-noline ic-center" data-reveal>Frequently wondered</h2>
          <div className="ic-faq" data-reveal>
            <details className="ic-faq-item">
              <summary>How do I know if I&rsquo;m actually stuck?</summary>
              <div className="ic-faq-a">
                <p>If you&rsquo;ve been circling the same idea for six months&mdash;or six years&mdash;and it still hasn&rsquo;t become real, that&rsquo;s usually worth paying attention to.</p>
                <p>Being stuck doesn&rsquo;t mean you&rsquo;re incapable.</p>
                <p>It simply means the strategy you&rsquo;ve been using to move forward isn&rsquo;t the one the situation requires anymore.</p>
                <p>Most of the people I work with are exceptionally capable. That&rsquo;s never been the problem.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>What if my next chapter isn&rsquo;t a business?</summary>
              <div className="ic-faq-a">
                <p>Then we&rsquo;ll never pretend it should be.</p>
                <p>Some people leave our conversation and build companies. Others change careers. Others begin writing. Others decide to stay exactly where they are&mdash;but finally feel aligned with that decision.</p>
                <p>The conversation isn&rsquo;t about choosing entrepreneurship.</p>
                <p>It&rsquo;s about understanding yourself well enough to choose your next chapter intentionally.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>Is this therapy?</summary>
              <div className="ic-faq-a">
                <p>No.</p>
                <p>Therapy often helps us understand how the past shaped us.</p>
                <p>Our conversation focuses on understanding how the stories you&rsquo;re carrying today are shaping the decisions you&rsquo;re making now.</p>
                <p>There may be moments that feel deeply personal. But the goal is always clarity.</p>
                <p>Not diagnosis. Not treatment. Not advice.</p>
                <p>Understanding.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>Why don&rsquo;t you offer a free discovery call?</summary>
              <div className="ic-faq-a">
                <p>Because I don&rsquo;t believe the most meaningful work should begin with a sales conversation.</p>
                <p>You&rsquo;ve already watched the video. You&rsquo;ve already spent time reflecting. You already understand how I think.</p>
                <p>If it feels like the right next step, I&rsquo;d rather spend our first conversation doing the real work.</p>
                <p>And if, by the end, you genuinely don&rsquo;t feel it created meaningful clarity, I&rsquo;ll refund you in full.</p>
                <p>That feels more respectful to both of us.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>What if I decide to stay in corporate?</summary>
              <div className="ic-faq-a">
                <p>That&rsquo;s a completely valid outcome.</p>
                <p>This isn&rsquo;t about convincing you to leave your career.</p>
                <p>It&rsquo;s about helping you make your next decision from clarity instead of confusion.</p>
                <p>Sometimes clarity leads people toward entrepreneurship. Sometimes it helps them rediscover meaning in the career they&rsquo;ve already built.</p>
                <p>Neither outcome is better.</p>
                <p>The important thing is that it becomes your decision. Not your fear&rsquo;s.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>What happens after the session?</summary>
              <div className="ic-faq-a">
                <p>Some people feel complete after one conversation. Others decide they&rsquo;d like ongoing support.</p>
                <p>There is no expectation either way.</p>
                <p>The Clarity Intensive is intentionally designed as a complete experience on its own.</p>
                <p>If you ever want to continue, we&rsquo;ll have that conversation afterward. Not before.</p>
              </div>
            </details>
            <details className="ic-faq-item">
              <summary>What if I&rsquo;m not ready?</summary>
              <div className="ic-faq-a">
                <p>That question has a way of showing up for exactly the people this work was created for.</p>
                <p>I&rsquo;m not suggesting you ignore it. I&rsquo;m simply inviting you to become curious about it.</p>
                <p>Sometimes the most important question isn&rsquo;t: &ldquo;Am I ready?&rdquo;</p>
                <p>Sometimes it&rsquo;s: &ldquo;What do I believe would happen if I actually began?&rdquo;</p>
                <p>That&rsquo;s usually where our conversation starts.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ============ SECTION 17 — BOOKING ============ */}
      <section id="book" className="ic-sec ic-sec-ivory">
        <div className="ic-narrow ic-center">
          <h2 className="ic-h2" data-reveal>
            If it feels like the right time...<br />
            <em>I&rsquo;d be honored to have the conversation with you.</em>
          </h2>
          <div className="ic-prose" data-reveal>
            <p>
              Choose a time that works for you.<br />
              Answer four thoughtful questions before we meet.
            </p>
            <p>I&rsquo;ll read every word before our conversation begins.</p>
            <p>
              That way, when we sit down together...<br />
              we can spend our time understanding what&rsquo;s underneath the story you&rsquo;ve already
              been telling yourself.
            </p>
          </div>
          <div className="ic-cal" id="calendar" data-reveal>
            <div
              className="calendly-inline-widget"
              data-url={CAL_URL}
              style={{ minWidth: "320px", height: "760px" }}
            />
          </div>
        </div>
      </section>

      {/* ============ SECTION 18 — FOOTER ============ */}
      <footer className="ic-footer">
        <div className="ic-tight ic-center">
          <div className="ic-foot-close">
            <p>Thank you for spending this time with me.</p>
            <p>
              Whether we ever speak or not...<br />
              I hope you leave with one idea.
            </p>
            <p>
              You don&rsquo;t need permission to want another chapter.<br />
              Only the willingness to understand what&rsquo;s been standing between you and it.
            </p>
          </div>
          <p className="ic-foot-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a href="https://instagram.com/idealclarity" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.idealclarity.com/privacy-policy">Privacy Policy</a>
          </p>
          <p className="ic-foot-disclaimer">
            Ideal Clarity Solutions is a coaching, advisory, and education company. We do not
            guarantee business, income, career, or personal outcomes. Testimonials reflect individual
            experiences and are not typical or guaranteed. Your results depend on your circumstances,
            choices, effort, and other factors.
          </p>
          <p className="ic-foot-copy">&copy; 2026 Ideal Clarity Solutions. All rights reserved.</p>
        </div>
      </footer>

      {/* ============ STICKY CTA (desktop + mobile) ============ */}
      <div className={`ic-sticky ${showBar ? "is-on" : ""}`}>
        {pastVideo ? (
          <>
            <span>Ready to continue the conversation?</span>
            <a href="#book" className="ic-btn ic-btn-gold ic-btn-sm" onClick={scrollToBook}>Book Your Clarity Intensive</a>
          </>
        ) : (
          <>
            <span>Haven&rsquo;t watched yet?</span>
            <a href="#vsl" className="ic-btn ic-btn-gold ic-btn-sm" onClick={scrollToVideo}>&#9654;&nbsp; Watch Video</a>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
.ic-root{
  --cream:#FAF7F0; --cream-light:#FFFDF8; --ivory:#FFFFFF; --warm-ivory:#FDF8EE;
  --navy:#172132; --navy-soft:#223047; --gold:#B8935F; --gold-deep:#9D7A48;
  --charcoal:#2D2D2D; --muted:#6F6A61;
  --line:rgba(184,147,95,.24); --line-dark:rgba(23,33,50,.14);
  --shadow-soft:0 18px 50px rgba(23,33,50,.08);
  --shadow-video:0 28px 80px rgba(23,33,50,.22);
  --max:1120px; --narrow:760px; --tight:640px;
  background:var(--cream); color:var(--charcoal);
  font-family:Inter,'Helvetica Neue',Arial,sans-serif;
  font-size:19px; line-height:1.8;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.ic-root *{box-sizing:border-box;}
.ic-wrap{max-width:var(--max); margin:0 auto; padding:0 28px; width:100%;}
.ic-narrow{max-width:var(--narrow); margin:0 auto; padding:0 28px; width:100%;}
.ic-tight{max-width:var(--tight); margin:0 auto; padding:0 28px; width:100%;}
.ic-center{text-align:center;}
.ic-left{text-align:left;}

[data-reveal]{opacity:0; transform:translateY(18px);
  transition:opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1);}
[data-reveal].is-visible{opacity:1; transform:none;}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1; transform:none; transition:none;}}

/* ---------- Typography ---------- */
.ic-eyebrow{font-family:Inter,'Helvetica Neue',Arial,sans-serif; text-transform:uppercase;
  letter-spacing:.14em; font-size:.92rem; font-weight:700; color:var(--gold-deep); margin:0 0 2rem;}
.ic-h1{font-family:'Fraunces',Georgia,'Times New Roman',serif; font-size:clamp(2.6rem,6vw,5.3rem);
  line-height:1.06; font-weight:500; color:var(--navy); margin:0 auto 2.5rem; max-width:1000px;
  letter-spacing:-.01em;}
.ic-h2{font-family:'Fraunces',Georgia,'Times New Roman',serif; font-size:clamp(2rem,4vw,3.4rem);
  line-height:1.12; font-weight:500; color:var(--navy); margin:0 0 2.4rem; letter-spacing:-.005em;}
.ic-h2 em{font-style:italic; color:var(--gold-deep);}
.ic-h2-navy{font-family:'Fraunces',Georgia,'Times New Roman',serif; font-size:clamp(2rem,4vw,3.4rem);
  line-height:1.12; font-weight:500; color:var(--cream-light); margin:0 0 2.4rem;}
.ic-h3-serif{font-family:'Fraunces',Georgia,serif; font-size:1.7rem; color:var(--navy); font-weight:500; margin:0 0 1.6rem;}
.ic-prose p{margin:0 0 1.6rem; color:var(--charcoal); font-size:clamp(1.05rem,1.35vw,1.2rem); line-height:1.85;}
.ic-prose .ic-alone{font-family:'Fraunces',Georgia,serif; font-size:1.4rem; color:var(--navy); margin:2.2rem 0;}
.ic-prose-navy p{margin:0 0 1.6rem; color:#DCD9D0; font-size:clamp(1.05rem,1.35vw,1.2rem); line-height:1.85;}
.ic-prose-navy strong{color:var(--gold); font-weight:600;}
.ic-subline{font-family:'Fraunces',Georgia,serif; font-size:1.6rem; color:var(--gold-deep); font-style:italic;
  margin:0 0 2.4rem;}
.ic-quoted{color:var(--muted); font-style:italic;}
.ic-excuses{margin:2.4rem 0; padding:1.8rem 2rem; background:var(--warm-ivory); border-left:3px solid var(--gold); border-radius:0 10px 10px 0;}
.ic-excuses span{display:block; font-family:'Fraunces',Georgia,serif; font-size:1.3rem; font-style:italic; color:var(--muted); line-height:1.9;}
.ic-pull{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.5rem,2.6vw,2.1rem); font-style:italic;
  color:var(--navy); text-align:center; line-height:1.4; margin:4.5rem auto 1rem; max-width:640px;}
.ic-standalone{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.6rem,3vw,2.3rem); font-style:italic;
  color:var(--cream-light); line-height:1.45; margin:5.5rem auto 1.5rem; max-width:620px;}
.ic-micro{font-size:.92rem; color:var(--muted); margin:1.4rem 0 0; line-height:1.7;}

/* ---------- Buttons ---------- */
.ic-btn{display:inline-block; font-family:Inter,'Helvetica Neue',Arial,sans-serif; font-weight:600;
  font-size:1rem; letter-spacing:.01em; padding:1.05rem 2.4rem; border-radius:999px;
  text-decoration:none; cursor:pointer; border:none;
  transition:transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;}
.ic-btn:focus-visible{outline:2px solid var(--gold-deep); outline-offset:3px;}
.ic-btn-gold{background:var(--gold); color:#fff; box-shadow:0 10px 30px rgba(184,147,95,.28);}
.ic-btn-gold:hover{transform:translateY(-2px); box-shadow:0 16px 40px rgba(184,147,95,.36);}
.ic-btn-line{background:transparent; color:var(--gold-deep); border:1.5px solid var(--gold);}
.ic-btn-line:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}
.ic-btn-sm{padding:.65rem 1.5rem; font-size:.92rem;}
.ic-cta-row{margin-top:3rem;}

/* ---------- Sections ---------- */
.ic-sec{padding:clamp(6rem,10vw,9rem) 0; background:var(--cream);}
.ic-sec-tightpad{padding:clamp(4rem,6vw,5rem) 0;}
.ic-sec-ivory{background:var(--warm-ivory);}
.ic-sec-navy{background:var(--navy);}

/* ---------- Hero ---------- */
.ic-hero{min-height:90vh; display:flex; align-items:center;
  padding:clamp(5rem,9vw,8rem) 0 clamp(4rem,7vw,6rem);
  background:radial-gradient(90% 60% at 50% -5%, rgba(184,147,95,.10), transparent 62%), var(--cream);}
.ic-hero-copy{max-width:680px; margin:0 auto 3.5rem;}
.ic-hero-copy p{margin:0 0 1.4rem; font-size:clamp(1.08rem,1.45vw,1.22rem); line-height:1.8; color:var(--charcoal);}
.ic-hero-lead{font-family:'Fraunces',Georgia,serif; font-style:italic; font-size:1.35rem !important; color:var(--gold-deep);}
.ic-video{position:relative; margin:0 auto 3rem; max-width:900px; border-radius:14px; overflow:hidden;
  aspect-ratio:16/9; background:var(--navy); box-shadow:var(--shadow-video);}
.ic-video-placeholder{width:100%; height:100%; display:flex; flex-direction:column; gap:.6rem;
  align-items:center; justify-content:center; color:#C9CFDA; text-align:center; padding:1rem;}
.ic-play{font-size:2.6rem; color:var(--gold);}
.ic-video-placeholder span{font-size:1.05rem; letter-spacing:.03em;}
.ic-video-placeholder small{font-size:.8rem; opacity:.6;}
.ic-hero-ctas{display:flex; gap:1.1rem; justify-content:center; flex-wrap:wrap;}

/* ---------- Recognition Mirror ---------- */
.ic-mirror{display:grid; grid-template-columns:1.15fr .85fr; gap:4.5rem; align-items:start;
  max-width:1000px; margin:0 auto;}
.ic-diagnostic{background:var(--ivory); border:1px solid var(--line); border-radius:16px;
  padding:2.6rem 2.4rem; box-shadow:var(--shadow-soft); position:sticky; top:2rem;}
.ic-diag-title{font-family:'Fraunces',Georgia,serif; font-size:1.25rem; color:var(--gold-deep);
  font-style:italic; margin:0 0 1.6rem; font-weight:500;}
.ic-diag-list{list-style:none; margin:0; padding:0;}
.ic-diag-list li{padding:1.15rem 0; font-size:1.02rem; line-height:1.6; color:var(--charcoal);
  border-bottom:1px solid var(--line);}
.ic-diag-list li:last-child{border-bottom:none;}
.ic-mirror-close{font-family:'Fraunces',Georgia,serif; font-size:1.35rem; font-style:italic; color:var(--navy);
  line-height:1.6; margin:5rem auto 0; max-width:560px;}

/* ---------- Four Faces ---------- */
.ic-faces{display:grid; grid-template-columns:1fr 1fr; gap:2rem; max-width:960px; margin:4.5rem auto 0;}
.ic-face{background:var(--ivory); border:1px solid var(--line); border-radius:16px;
  padding:2.8rem 2.5rem 2.2rem; box-shadow:var(--shadow-soft); position:relative;
  transition:transform .3s ease, box-shadow .3s ease;}
.ic-face:hover{transform:translateY(-4px); box-shadow:0 26px 60px rgba(23,33,50,.11);}
.ic-face-accent{position:absolute; top:0; left:2.5rem; width:52px; height:3px; background:var(--gold);
  border-radius:0 0 3px 3px;}
.ic-face h3{font-family:'Fraunces',Georgia,serif; font-size:1.45rem; color:var(--navy); font-weight:500; margin:0 0 1rem;}
.ic-face-quote{font-style:italic; color:var(--gold-deep) !important;}
.ic-face p{margin:0 0 1.2rem; font-size:1rem; line-height:1.75; color:var(--charcoal);}
.ic-face p:last-child{margin-bottom:0;}
.ic-faces-close{font-family:'Fraunces',Georgia,serif; font-size:1.3rem; font-style:italic; color:var(--navy);
  line-height:1.65; margin:5rem auto 0; max-width:520px;}

/* ---------- About ---------- */
.ic-about{display:grid; grid-template-columns:.8fr 1.2fr; gap:4.5rem; align-items:start; max-width:1020px; margin:0 auto;}
.ic-photo{width:100%; border-radius:16px; display:block; box-shadow:var(--shadow-soft);}
.ic-about-photo{position:sticky; top:2.5rem;}

/* ---------- Process ---------- */
.ic-process{display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.8rem; margin:4.5rem auto 0; text-align:left;}
.ic-process-card{background:var(--ivory); border:1px solid var(--line); border-radius:14px;
  padding:2.2rem 2rem; box-shadow:var(--shadow-soft);}
.ic-num{display:inline-flex; align-items:center; justify-content:center; width:38px; height:38px;
  border-radius:50%; border:1.5px solid var(--gold); color:var(--gold-deep);
  font-family:'Fraunces',Georgia,serif; font-size:1.1rem; margin-bottom:1.2rem;}
.ic-process-card h3{font-family:'Fraunces',Georgia,serif; font-size:1.2rem; color:var(--navy); font-weight:500; margin:0 0 .8rem;}
.ic-process-card p{margin:0; font-size:.98rem; line-height:1.7; color:var(--charcoal);}

/* ---------- Leave With ---------- */
.ic-leave{display:grid; grid-template-columns:1fr 1fr; gap:2rem; max-width:960px; margin:4rem auto 0;}
.ic-leave-card{background:var(--ivory); border:1px solid var(--line); border-radius:16px;
  padding:2.6rem 2.4rem; box-shadow:var(--shadow-soft);}
.ic-leave-card h3{font-family:'Fraunces',Georgia,serif; font-size:1.4rem; color:var(--gold-deep);
  font-weight:500; font-style:italic; margin:0 0 1rem;}
.ic-leave-card p{margin:0; font-size:1.02rem; line-height:1.78; color:var(--charcoal);}
.ic-leave-close{font-family:'Fraunces',Georgia,serif; font-size:1.3rem; font-style:italic; color:var(--navy);
  line-height:1.65; margin:5rem auto 0; max-width:560px;}

/* ---------- Testimonials ---------- */
.ic-testis{display:flex; flex-direction:column; gap:4rem; max-width:760px; margin:4rem auto 0;}
.ic-testi{margin:0; padding:0 0 0 2rem; border-left:2px solid var(--gold);}
.ic-testi p{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.2rem,1.8vw,1.45rem); line-height:1.65;
  color:var(--navy); font-style:italic; margin:0 0 1.2rem;}
.ic-testi cite{font-family:Inter,'Helvetica Neue',Arial,sans-serif; font-style:normal; font-size:.9rem;
  font-weight:600; color:var(--gold-deep); letter-spacing:.04em;}

/* ---------- Offer ---------- */
.ic-offer{background:var(--ivory); border:1px solid var(--line); border-radius:20px;
  padding:clamp(2.8rem,5vw,4.5rem); box-shadow:var(--shadow-soft);}
.ic-price{font-family:'Fraunces',Georgia,serif; font-size:clamp(2.4rem,4vw,3.2rem); color:var(--navy);
  margin:2.4rem 0 2rem; font-weight:500;}
.ic-included{list-style:none; margin:0 auto 2.8rem; padding:0; max-width:420px; text-align:left;}
.ic-included li{padding:.85rem 0 .85rem 1.7rem; position:relative; font-size:1rem; line-height:1.6;
  color:var(--charcoal); border-bottom:1px solid var(--line);}
.ic-included li:last-child{border-bottom:none;}
.ic-included li::before{content:'\\2014'; position:absolute; left:0; color:var(--gold);}

/* ---------- Guarantee ---------- */
.ic-guarantee{background:var(--ivory); border:1px solid var(--gold); border-radius:18px;
  padding:clamp(2.4rem,4vw,3.5rem); box-shadow:var(--shadow-soft);}
.ic-guarantee p{margin:0 0 1.4rem; font-size:1.08rem; line-height:1.8; color:var(--charcoal);}
.ic-guarantee p:last-child{margin-bottom:0;}

/* ---------- FAQ ---------- */
.ic-faq{margin-top:3.5rem;}
.ic-faq-item{border-bottom:1px solid var(--line-dark); padding:1.6rem 0;}
.ic-faq-item summary{font-family:'Fraunces',Georgia,serif; font-weight:500; font-size:1.22rem; color:var(--navy);
  cursor:pointer; list-style:none; position:relative; padding-right:2.4rem; line-height:1.4;}
.ic-faq-item summary::-webkit-details-marker{display:none;}
.ic-faq-item summary::after{content:'+'; position:absolute; right:0; top:-4px; font-size:1.7rem;
  color:var(--gold); font-weight:300;}
.ic-faq-item[open] summary::after{content:'\\2013';}
.ic-faq-item summary:focus-visible{outline:2px solid var(--gold-deep); outline-offset:4px; border-radius:4px;}
.ic-faq-a{padding-top:1.4rem;}
.ic-faq-a p{margin:0 0 1.1rem; font-size:1.02rem; line-height:1.8; color:var(--charcoal);}

/* ---------- Booking ---------- */
.ic-cal{margin-top:3.5rem; background:var(--ivory); border:1px solid var(--line); border-radius:18px;
  padding:14px; box-shadow:var(--shadow-soft);}

/* ---------- Footer ---------- */
.ic-footer{background:var(--navy); padding:clamp(5rem,8vw,7rem) 0 3rem;}
.ic-foot-close p{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.15rem,1.8vw,1.4rem); line-height:1.7;
  color:#DCD9D0; margin:0 0 1.6rem;}
.ic-foot-links{display:flex; gap:2rem; justify-content:center; flex-wrap:wrap; margin:3.5rem 0 2.5rem;}
.ic-foot-links a{color:var(--gold); text-decoration:none; font-size:.95rem;}
.ic-foot-links a:hover{text-decoration:underline;}
.ic-foot-disclaimer{font-size:.78rem; line-height:1.7; color:#8b94a4; max-width:640px; margin:0 auto 2rem;}
.ic-foot-copy{font-size:.85rem; color:#8b94a4; margin:0;}

/* ---------- Sticky CTA ---------- */
.ic-sticky{position:fixed; bottom:0; left:0; right:0; background:var(--cream);
  border-top:1px solid var(--gold); display:flex; align-items:center; justify-content:space-between;
  gap:1rem; padding:.85rem 1.2rem; transform:translateY(110%); transition:transform .35s ease; z-index:50;}
.ic-sticky.is-on{transform:translateY(0);}
.ic-sticky span{font-size:.92rem; color:var(--navy); font-weight:500;}


/* ---------- Visual richness + hierarchy ---------- */

/* Prose: give the FIRST paragraph of a section real presence (a lead-in) */
.ic-prose > p:first-child{
  font-family:'Fraunces',Georgia,serif; font-size:clamp(1.35rem,2.1vw,1.7rem); line-height:1.5;
  color:var(--navy); font-weight:500; margin-bottom:1.8rem;
}
.ic-prose-navy > p:first-child{
  font-family:'Fraunces',Georgia,serif; font-size:clamp(1.35rem,2.1vw,1.7rem); line-height:1.5;
  color:var(--cream-light); font-weight:500; margin-bottom:1.8rem;
}
/* but not when the first child is a short interjection we style elsewhere */
.ic-prose > p.ic-alone:first-child, .ic-prose-navy > p.ic-alone:first-child{
  font-size:1.5rem;
}

.ic-prose strong{color:var(--navy); font-weight:700;}
.ic-prose em{font-style:italic; color:var(--gold-deep);}
.ic-prose-navy strong{color:var(--gold); font-weight:700;}
.ic-prose-navy em{font-style:italic; color:var(--gold);}
.ic-prose-navy .ic-alone{color:var(--gold); font-family:'Fraunces',Georgia,serif; font-size:1.6rem; margin:2.2rem 0; font-style:italic;}
.ic-prose .ic-alone{font-family:'Fraunces',Georgia,serif; font-size:1.6rem; color:var(--navy); margin:2.4rem 0; font-style:italic;}

/* Section headline underline flourish */
.ic-h2::after, .ic-h2-navy::after{content:''; display:block; width:56px; height:2px;
  background:var(--gold); margin:1.6rem auto 0; opacity:.75;}
.ic-mirror-copy .ic-h2::after, .ic-about-text .ic-h2::after{margin-left:0;}
.ic-h2.ic-noline::after, .ic-h2-navy.ic-noline::after{display:none;}

/* Gold kicker above headlines */
.ic-kick{font-family:Inter,sans-serif; text-transform:uppercase; letter-spacing:.18em;
  font-size:.72rem; font-weight:700; color:var(--gold-deep); margin:0 0 1.2rem; display:inline-block;}
.ic-kick-navy{color:var(--gold);}

/* Emphasis line: a standalone bold serif line used to break prose */
.ic-emph{font-family:'Fraunces',Georgia,serif; font-weight:600; font-size:clamp(1.3rem,2vw,1.7rem);
  color:var(--navy); line-height:1.4; margin:2.4rem 0;}
.ic-emph em{color:var(--gold-deep); font-style:italic;}

/* Reflection (navy): make the triad of "You don't need..." a bold stacked statement */
.ic-triad{margin:2.4rem 0;}
.ic-triad span{display:block; font-family:'Fraunces',Georgia,serif; font-size:clamp(1.3rem,2.2vw,1.8rem);
  font-weight:500; line-height:1.5; color:#E9E4D8;}
.ic-triad span strong{color:var(--gold); font-weight:700;}

/* Leave cards dark variant */
.ic-leave-dark .ic-leave-card{background:var(--navy-soft); border:1px solid rgba(184,147,95,.28);
  box-shadow:0 18px 50px rgba(0,0,0,.22);}
.ic-leave-dark .ic-leave-card h3{color:var(--gold);}
.ic-leave-dark .ic-leave-card p{color:#DCD9D0;}
.ic-leave-close-dark{color:var(--cream-light) !important;}

/* Offer richness */
.ic-offer{background:linear-gradient(180deg,#FFFFFF 0%, #FFFDF8 100%);}
.ic-price{position:relative; display:inline-block;}
.ic-price::before{content:'The investment'; display:block; font-family:Inter,sans-serif;
  font-size:.72rem; letter-spacing:.18em; text-transform:uppercase; color:var(--gold-deep);
  font-weight:700; margin-bottom:.6rem;}

/* Faces: alternate tints for rhythm + bigger titles */
.ic-face:nth-child(2), .ic-face:nth-child(3){background:linear-gradient(180deg,#FFFFFF,#FCF8F0);}
.ic-face h3{font-size:1.7rem;}

/* Testimonials decorative quote */
.ic-testi{position:relative;}
.ic-testi::before{content:'\\201C'; position:absolute; left:-.2rem; top:-1.8rem;
  font-family:'Fraunces',Georgia,serif; font-size:5rem; color:var(--gold); opacity:.3; line-height:1;}

.ic-process-card{background:linear-gradient(180deg,#FFFFFF,#FDF9F2);}

/* Recognition mirror: make the H2 bigger and left-aligned emphasis */
.ic-mirror-copy .ic-h2{font-size:clamp(2.2rem,4vw,3.6rem);}

/* Drop cap on select opening paragraphs for editorial flair */
.ic-dropcap::first-letter{
  font-family:'Fraunces',Georgia,serif; float:left; font-size:4.2rem; line-height:.8;
  padding:.3rem .6rem .1rem 0; color:var(--gold-deep); font-weight:600;
}


/* ---------- Font import (Fraunces display serif) ---------- */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

/* Fraunces optical sizing for big display */
.ic-h1,.ic-h2,.ic-h2-navy{font-optical-sizing:auto; letter-spacing:-.015em;}
.ic-h1{font-weight:500;}

.ic-prose-lg > p{font-size:clamp(1.12rem,1.5vw,1.28rem);}

/* Four Faces on navy */
.ic-sec-navy .ic-face{background:var(--navy-soft); border:1px solid rgba(184,147,95,.3);
  box-shadow:0 20px 55px rgba(0,0,0,.25);}
.ic-sec-navy .ic-face:nth-child(2), .ic-sec-navy .ic-face:nth-child(3){
  background:linear-gradient(180deg,#243350,#1d2a40);}
.ic-sec-navy .ic-face h3{color:var(--gold);}
.ic-sec-navy .ic-face p{color:#DCD9D0;}
.ic-sec-navy .ic-face-quote{color:#E9C892 !important;}
.ic-faces-close-navy{color:var(--cream-light) !important;}
.ic-standalone-light{color:var(--navy) !important;}
.ic-standalone-light em{color:var(--gold-deep); font-style:italic;}

/* ---------- Soft section CTAs ---------- */
.ic-softcta{margin-top:3.5rem;}
.ic-btn-line-gold{background:transparent; color:var(--gold); border:1.5px solid rgba(184,147,95,.6);
  border-radius:999px; padding:1rem 2.2rem; font-family:Inter,sans-serif; font-weight:600;
  font-size:.98rem; text-decoration:none; display:inline-block;
  transition:background .25s,color .25s,transform .25s;}
.ic-btn-line-gold:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}

/* ---------- OFFER SHOWPIECE (navy) ---------- */
.ic-offer-sec{position:relative; overflow:hidden;}
.ic-offer-lead{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.3rem,2.2vw,1.8rem);
  color:#DCD9D0; line-height:1.5; margin:0 auto 3rem; max-width:560px;}
.ic-offer-lead em{color:var(--gold); font-style:italic;}
.ic-offer-card{position:relative; background:linear-gradient(165deg,#1f2c42 0%, #172132 60%);
  border:1px solid rgba(184,147,95,.35); border-radius:24px;
  padding:clamp(2.6rem,5vw,4rem) clamp(2rem,4vw,3.5rem);
  box-shadow:0 40px 90px rgba(0,0,0,.4); max-width:680px; margin:0 auto; overflow:hidden;}
.ic-offer-glow{position:absolute; top:-40%; right:-20%; width:70%; height:120%;
  background:radial-gradient(circle, rgba(184,147,95,.22), transparent 65%); pointer-events:none;}
.ic-offer-spec{display:flex; align-items:center; justify-content:center; gap:1.6rem;
  margin-bottom:2.6rem; position:relative;}
.ic-offer-col{display:flex; flex-direction:column; align-items:center;}
.ic-offer-big{font-family:'Fraunces',Georgia,serif; font-size:clamp(2.4rem,5vw,3.4rem);
  color:var(--gold); line-height:1; font-weight:500;}
.ic-offer-unit{font-family:Inter,sans-serif; font-size:.72rem; text-transform:uppercase;
  letter-spacing:.1em; color:#9BA6B8; margin-top:.5rem; max-width:110px; text-align:center;}
.ic-offer-divider{width:1px; height:52px; background:linear-gradient(180deg,transparent,rgba(184,147,95,.5),transparent);}
.ic-offer-card .ic-included{max-width:100%; margin:0 auto 2.6rem;}
.ic-offer-card .ic-included li{color:#DCD9D0; border-bottom:1px solid rgba(184,147,95,.18); text-align:left;}
.ic-offer-card .ic-included li::before{color:var(--gold);}
.ic-offer-price-row{display:flex; flex-direction:column; align-items:center; margin-bottom:2.4rem;}
.ic-offer-priceLabel{font-family:Inter,sans-serif; font-size:.72rem; letter-spacing:.18em;
  text-transform:uppercase; color:var(--gold); font-weight:700; margin-bottom:.4rem;}
.ic-offer-price{font-family:'Fraunces',Georgia,serif; font-size:clamp(3rem,6vw,4.2rem);
  color:#fff; line-height:1; font-weight:500;}
.ic-offer-note{font-family:Inter,sans-serif; font-size:.85rem; color:#9BA6B8; margin-top:1rem; max-width:360px; line-height:1.6;}

/* testimonial company line */
.ic-cite-co{color:var(--muted); font-weight:400;}

/* Sticky now desktop + mobile, refined */
.ic-sticky{display:flex; background:rgba(23,33,50,.97); border-top:1px solid rgba(184,147,95,.4);
  backdrop-filter:blur(8px);}
.ic-sticky span{color:var(--cream-light);}


/* ---------- 10/90 visual graphic ---------- */
.ic-9010{max-width:640px; margin:3.5rem auto; }
.ic-9010-row{display:flex; align-items:flex-end; justify-content:center; gap:2.5rem; margin-bottom:1.5rem;}
.ic-9010-block{display:flex; flex-direction:column; align-items:center; text-align:center;}
.ic-9010-num{font-family:'Fraunces',Georgia,serif; line-height:1; color:var(--gold);}
.ic-9010-small .ic-9010-num{font-size:clamp(2rem,4vw,2.8rem); color:var(--muted);}
.ic-9010-big .ic-9010-num{font-size:clamp(3.4rem,8vw,5.5rem); color:var(--gold-deep);}
.ic-9010-label{font-family:Inter,sans-serif; font-size:.78rem; text-transform:uppercase;
  letter-spacing:.1em; color:var(--muted); margin-top:.6rem; max-width:180px; line-height:1.4;}
.ic-9010-big .ic-9010-label{color:var(--navy); font-weight:600;}
.ic-9010-bar{height:14px; border-radius:8px; overflow:hidden; display:flex; background:#EDE6D8; margin-bottom:1.4rem;}
.ic-9010-fill-s{width:10%; background:#C9BCA3;}
.ic-9010-fill-i{width:90%; background:linear-gradient(90deg,var(--gold),var(--gold-deep));}
.ic-9010-caption{text-align:center; font-family:'Fraunces',Georgia,serif; font-size:1.5rem; color:var(--navy); margin:0;}
.ic-9010-caption strong{color:var(--gold-deep);}

/* ---------- Stronger pull-quote band (breaks prose bleed) ---------- */
.ic-pull{position:relative; padding:2.6rem 2rem; background:var(--warm-ivory);
  border-top:1px solid var(--line); border-bottom:1px solid var(--line);
  border-left:none; margin:4.5rem auto 1rem; max-width:820px;}
.ic-pull em{color:var(--gold-deep); font-style:italic;}

/* Section-separating hairline with gold center dot (visual breath between prose sections) */
.ic-sec + .ic-sec::before{content:none;}

/* Give ivory sections a subtle top border so they don't bleed into cream */
.ic-sec-ivory{border-top:1px solid rgba(184,147,95,.14); border-bottom:1px solid rgba(184,147,95,.14);}

/* Excuses block: make it bigger and more designed */
.ic-excuses{margin:2.6rem auto; padding:2.2rem 2.4rem; background:var(--navy);
  border-left:none; border-radius:14px; max-width:560px; box-shadow:var(--shadow-soft);}
.ic-excuses span{display:block; font-family:'Fraunces',Georgia,serif; font-size:1.35rem;
  font-style:italic; color:#B9C2D2; line-height:2; text-align:center;}

/* About drop cap bigger + gold */
.ic-dropcap::first-letter{font-size:4.8rem; color:var(--gold-deep);}


/* ---------- Trimmed hero ---------- */
.ic-h1-trim{max-width:900px; font-size:clamp(2.2rem,4.6vw,3.9rem);}
.ic-h1-trim em{color:var(--gold-deep); font-style:italic;}
.ic-hero-sub{font-family:Inter,sans-serif; font-size:clamp(1.08rem,1.5vw,1.28rem); color:var(--navy);
  margin:0 auto 2.6rem; max-width:560px;}
.ic-hero-sub strong{font-weight:700; color:var(--navy);}
.ic-hero-sub-bold{font-weight:700; color:var(--navy);}

/* ---------- Portrait video frame ---------- */
.ic-video-portrait{display:flex; justify-content:center; margin:0 auto 2.4rem;}
.ic-vp-frame{position:relative; width:100%; max-width:860px; aspect-ratio:16/9;
  border-radius:18px; overflow:hidden; background:var(--navy);
  box-shadow:var(--shadow-video); border:1px solid rgba(184,147,95,.35);}
/* the pasted iframe should fill the frame */
.ic-vp-frame iframe{position:absolute; inset:0; width:100%; height:100%; border:0;}
.ic-vp-placeholder{position:absolute; inset:0; display:flex; flex-direction:column; gap:.5rem;
  align-items:center; justify-content:center; color:#C9CFDA; text-align:center; padding:1rem;}
.ic-vp-placeholder span{font-size:1rem;}
.ic-vp-placeholder small{font-size:.76rem; opacity:.6; max-width:220px;}
@media (max-width:780px){
  .ic-vp-frame{max-width:100%;}
}


/* ---------- About pull-quote (breaks the story wall) ---------- */
.ic-about-pull{margin:2.6rem 0; padding:0; border:none; font-family:'Fraunces',Georgia,serif;
  font-size:clamp(1.8rem,3.2vw,2.6rem); line-height:1.25; color:var(--navy); font-weight:500;}
.ic-about-pull em{color:var(--gold-deep); font-style:italic;}
.ic-prose-continue{margin-top:1.5rem;}

/* ---------- What Happens lead + process arc ---------- */
.ic-happens-lead{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.25rem,2vw,1.6rem);
  line-height:1.5; color:var(--navy); max-width:640px; margin:0 auto 3.5rem;}
.ic-happens-lead em{color:var(--gold-deep); font-style:italic;}
.ic-process-arc{position:relative;}
/* connecting line behind the three cards on desktop */
@media (min-width:961px){
  .ic-process-arc::before{content:''; position:absolute; top:52px; left:16%; right:16%; height:2px;
    background:linear-gradient(90deg,transparent,var(--gold),var(--gold),transparent); opacity:.5; z-index:0;}
  .ic-process-arc .ic-process-card{position:relative; z-index:1;}
}
.ic-process-arc .ic-num{background:var(--gold); color:#fff; border:none;
  box-shadow:0 6px 18px rgba(184,147,95,.4);}


/* ---------- Reflection: dramatic "Good." ---------- */
.ic-good{font-family:'Fraunces',Georgia,serif; font-size:clamp(3.5rem,8vw,6rem); color:var(--gold);
  line-height:1; margin:1.5rem 0 2.5rem; font-weight:500; font-style:italic;}
.ic-reflect-close{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.4rem,2.4vw,1.9rem);
  color:var(--cream-light); font-style:italic; margin-top:2rem;}
.ic-triad{margin:2.8rem auto; padding:2rem 0; border-top:1px solid rgba(184,147,95,.3);
  border-bottom:1px solid rgba(184,147,95,.3); max-width:480px;}

/* ---------- This-isn't: serif lead + outcome pills ---------- */
.ic-lead-serif{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.4rem,2.6vw,2.1rem);
  line-height:1.4; color:var(--navy); max-width:640px; margin:1.5rem auto 3rem;}
.ic-lead-serif em{color:var(--gold-deep); font-style:italic;}
.ic-outcomes{display:flex; flex-wrap:wrap; justify-content:center; gap:.9rem; max-width:680px;
  margin:0 auto 3.5rem;}
.ic-outcome{font-family:Inter,sans-serif; font-size:.98rem; font-weight:500; color:var(--navy);
  background:var(--ivory); border:1px solid var(--line); border-radius:999px; padding:.75rem 1.5rem;
  box-shadow:0 6px 18px rgba(23,33,50,.05); transition:transform .25s, box-shadow .25s;}
.ic-outcome:hover{transform:translateY(-2px); box-shadow:0 10px 26px rgba(23,33,50,.09);}
.ic-outcome-wide{background:linear-gradient(180deg,var(--warm-ivory),#F7EFE0); border-color:rgba(184,147,95,.4);
  color:var(--gold-deep); font-style:italic;}
.ic-center-prose{max-width:600px; margin:0 auto;}

/* ---------- Recognition Mirror polish ---------- */
.ic-mirror-copy .ic-prose > p:first-of-type{
  font-family:'Fraunces',Georgia,serif; font-size:clamp(1.3rem,2vw,1.6rem); color:var(--navy);
  font-weight:500; line-height:1.4;
}
.ic-diagnostic{background:linear-gradient(180deg,#FFFFFF,#FFFDF8);}
.ic-diag-list li{transition:color .2s; position:relative; padding-left:1.8rem;}
.ic-diag-list li::before{content:'\\2713'; position:absolute; left:0; color:var(--gold);
  font-weight:700; font-size:.95rem;}
.ic-mirror-close{background:var(--navy); color:var(--cream-light) !important; padding:2.2rem 2rem;
  border-radius:16px; max-width:640px; font-family:'Fraunces',Georgia,serif; font-style:italic;
  box-shadow:var(--shadow-soft);}


/* ---------- Conversion pass: watch-first hero ---------- */
.ic-watchlabel{font-family:Inter,sans-serif; text-transform:uppercase; letter-spacing:.2em;
  font-size:.78rem; font-weight:700; color:var(--gold-deep); margin:0 0 1.4rem;}
.ic-hero-ctas-single{margin-top:0;}
.ic-btn-watch{font-size:1.15rem; padding:1.3rem 3rem; box-shadow:0 14px 40px rgba(184,147,95,.4);}
.ic-belowvideo{max-width:650px; margin:2.4rem auto 0;}
.ic-belowvideo p{font-family:'Fraunces',Georgia,serif; font-size:clamp(1.15rem,1.8vw,1.4rem);
  line-height:1.55; color:var(--navy); font-style:italic;}
.ic-belowvideo strong{color:var(--gold-deep); font-weight:600; font-style:normal;}

/* bigger video + gentle float + stronger shadow */
.ic-vp-frame{box-shadow:0 40px 90px rgba(23,33,50,.28); animation:ic-float 6s ease-in-out infinite;}
@keyframes ic-float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
@media (prefers-reduced-motion: reduce){.ic-vp-frame{animation:none;}}

/* ---------- Concise 3-card Leave With ---------- */
.ic-leave-three{grid-template-columns:1fr 1fr 1fr;}
.ic-leave-three .ic-leave-card{position:relative; padding-top:2.6rem;}
.ic-leave-idx{position:absolute; top:1.4rem; left:1.8rem; font-family:'Fraunces',Georgia,serif;
  font-size:1.4rem; color:var(--gold); opacity:.9;}
.ic-leave-three .ic-leave-card h3{font-size:1.2rem; line-height:1.3; margin-top:.4rem;}
.ic-leave-three .ic-leave-card p{font-size:.98rem;}
.ic-leave-fine{max-width:600px; margin:3rem auto 0; font-size:1rem; line-height:1.7;
  color:#B9C2D2; font-style:italic;}
@media (max-width:960px){.ic-leave-three{grid-template-columns:1fr;}}

/* ---------- Responsive ---------- */
@media (max-width:960px){
  .ic-mirror{grid-template-columns:1fr; gap:3rem;}
  .ic-diagnostic{position:static;}
  .ic-about{grid-template-columns:1fr; gap:2.5rem;}
  .ic-about-photo{position:static; max-width:360px; margin:0 auto;}
  .ic-process{grid-template-columns:1fr; gap:1.4rem;}
}
@media (max-width:780px){
  .ic-9010-row{gap:1.5rem;}
  .ic-excuses span{font-size:1.1rem; line-height:1.8;}
  .ic-root{font-size:17px;}
  .ic-sec{padding:4rem 0;}
  .ic-hero{min-height:auto; padding:3.5rem 0 3rem;}
  .ic-h1{font-size:2.3rem;}
  .ic-faces{grid-template-columns:1fr; gap:1.5rem;}
  .ic-leave{grid-template-columns:1fr; gap:1.5rem;}
  .ic-hero-ctas{flex-direction:column; align-items:center;}
  .ic-hero-ctas .ic-btn{width:100%; max-width:340px; text-align:center;}
  .ic-sticky{display:flex;}
  .ic-cal .calendly-inline-widget{height:720px !important;}
}
`;
