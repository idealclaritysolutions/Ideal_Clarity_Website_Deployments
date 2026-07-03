"use client";

import { useEffect, useState } from "react";

/**
 * The Clarity Intensive — VSL Landing Page (lean / video-first)
 * Ideal Clarity Solutions
 * Route: app/clarity-deep-dive/page.tsx (URL stays /clarity-deep-dive)
 * Self-contained: no Tailwind / design-system dependency.
 * The video carries the persuasion; the page frames it, proves it, and converts.
 */

const CAL_URL = "https://calendly.com/idealclaritysolutions/clarity-intensive";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
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
  document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ClarityIntensivePage() {
  useReveal();
  useCalendly();
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cdd-root">
      <style>{CSS}</style>

      {/* HERO — the video is the star */}
      <header className="cdd-hero">
        <div className="cdd-wrap">
          <p className="cdd-eyebrow cdd-center" data-reveal>
            One conversation &middot; for the professional with a business idea that won&rsquo;t go away
          </p>
          <h1 className="cdd-h1 cdd-center" data-reveal>
            The real reason you haven&rsquo;t started your business isn&rsquo;t lack of information or time.
            <em> It&rsquo;s something no one has told you before.</em>
          </h1>
          <p className="cdd-sub cdd-center" data-reveal>
            If you&rsquo;ve been &ldquo;about to start&rdquo; for months &mdash; or years &mdash;
            researched, planned, talked to family and friends about it, and still haven&rsquo;t moved
            &mdash; this is for you.
          </p>
          <p className="cdd-watch cdd-center" data-reveal>
            Watch the short video below. I&rsquo;ll show you the one thing that&rsquo;s actually been
            keeping you stuck &mdash; and the four disguises it hides behind.
          </p>

          <div className="cdd-video" data-reveal>
            <div className="cdd-video-placeholder">
              <span className="cdd-play">&#9658;</span>
              <span>Watch this before you book</span>
              <small>Paste your Vimeo embed in place of this block</small>
            </div>
          </div>

          <div className="cdd-cta-row cdd-center" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-gold cdd-btn-lg" onClick={scrollToBook}>
              Book Your Clarity Intensive &mdash; $750
            </a>
            <p className="cdd-microcopy">
              75 minutes &middot; book &amp; pay in one step &middot; full refund if it doesn&rsquo;t give you real clarity
            </p>
          </div>

          <div className="cdd-herocard" data-reveal>
            <div className="cdd-herocard-stat">
              <strong>300x</strong>
              <span>revenue growth</span>
            </div>
            <div className="cdd-herocard-quote">
              <p>&ldquo;With Chi-Chi, I found my area of genius and unlocked the mental blocks that were holding me back from fully monetizing my business in a way that reflects my value. I&rsquo;ve 300x&rsquo;d my revenue so far.&rdquo;</p>
              <em>&mdash; Lola, Rapid Reinvent Hair Treatment</em>
            </div>
          </div>

          <div className="cdd-herotesti" data-reveal>
            <p>&ldquo;Before reaching out to Ideal Clarity, I felt overwhelmed by everything involved in starting and growing a business. There was so much information, so many decisions to make, and it was hard to know where to focus my time and energy. Ideal Clarity helped turn that uncertainty into a clear, actionable path forward. Chi-Chi took the time to understand my goals, asked thoughtful questions, and provided practical guidance tailored to my situation. If you are looking for clarity, accountability, and experienced guidance, I highly recommend Ideal Clarity.&rdquo;</p>
            <em>&mdash; Peace</em>
          </div>
        </div>
      </header>

      {/* SHORT BRIDGE — one tight beat, then push to video/booking */}
      <section className="cdd-sec cdd-sec-navy cdd-sec-tight">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <p className="cdd-bridge-navy" data-reveal>
            You already know what you want to build. The question was never <em>what</em> &mdash;
            it&rsquo;s why you keep stopping right before you start. That&rsquo;s the thing we find,
            and it&rsquo;s the whole reason more research and more planning have never moved you.
          </p>
          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-goldline" onClick={scrollToBook}>Book your Clarity Intensive &rarr;</a>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap">
          <p className="cdd-kicker cdd-center" data-reveal>What happens when the block comes off</p>
          <div className="cdd-testi-grid">
            <div className="cdd-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi is a consummate professional who truly listens and provides expert advice
                tailored to your level of experience. Her breadth of knowledge and thoughtful guidance
                make working with her a great experience.&rdquo;
              </p>
              <span className="cdd-testi-name">&mdash; James G.</span>
            </div>
            <div className="cdd-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi helped me identify decision-making tools and exercises to clarify my values
                as I weighed some big decisions. Her guidance reframed and clarified my next steps in a
                valuable way. If you have a business decision or operational problem to solve, Ideal
                Clarity can help you find your way.&rdquo;
              </p>
              <span className="cdd-testi-name">&mdash; Hannah Bailey, Studio Northwood</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — compact */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-narrow">
          <h2 className="cdd-h2 cdd-center" data-reveal>How the Clarity Intensive works</h2>
          <div className="cdd-steps">
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">Before we meet</span>
              <p>You answer four short questions, so I come in already understanding your situation.</p>
            </div>
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">The 75 minutes</span>
              <p>We get on a video call, and I show you the real thing that&rsquo;s been keeping you stuck. Then we replace it with something truer &mdash; and turn it into the one specific move you&rsquo;ll make this week, and exactly how you&rsquo;ll know it worked.</p>
            </div>
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">The day after</span>
              <p>You get a one-page summary of everything we found, so none of it slips away.</p>
            </div>
          </div>
          <div className="cdd-cta-row cdd-center" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-ghost" onClick={scrollToBook}>I want that clarity &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH — tight three-item strip */}
      <section className="cdd-sec cdd-sec-cream cdd-sec-tight">
        <div className="cdd-wrap cdd-narrow">
          <h2 className="cdd-h2 cdd-center" data-reveal>What you leave with</h2>
          <div className="cdd-leave-list">
            <div className="cdd-leave-item" data-reveal>
              <span className="cdd-leave-num">1</span>
              <div>
                <h3>The root barrier, named.</h3>
                <p>The one thing underneath everything else, said out loud in plain language. Once you see it, it loses its grip.</p>
              </div>
            </div>
            <div className="cdd-leave-item" data-reveal>
              <span className="cdd-leave-num">2</span>
              <div>
                <h3>A reframe you can use.</h3>
                <p>The old belief replaced with a truer one &mdash; so you can catch it yourself next time it shows up in a new disguise.</p>
              </div>
            </div>
            <div className="cdd-leave-item" data-reveal>
              <span className="cdd-leave-num">3</span>
              <div>
                <h3>One concrete move.</h3>
                <p>The single action that turns months of circling into motion. A week from now, you&rsquo;ll feel like a different person than the one who booked this call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — short */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-about">
          <div className="cdd-about-photo" data-reveal>
            <img src="/chichi.png" alt="Chi-Chi Jones" className="cdd-photo" />
          </div>
          <div className="cdd-about-text" data-reveal>
            <h2 className="cdd-h2">I&rsquo;m Chi-Chi Jones.</h2>
            <p className="cdd-body">
              Fifteen-plus years in corporate, nearly a decade at one of the largest companies in the
              world &mdash; and my own long stretches of knowing exactly what I wanted and not being able
              to make myself move.
            </p>
            <p className="cdd-body">
              I was always the person others came to when they needed to think something through, then I&rsquo;d
              go home and circle my own thing for months. Here&rsquo;s what I learned: nobody can see their
              own blind spot from the inside. That&rsquo;s not a flaw &mdash; it&rsquo;s just how being human
              works. So I made it my work to be the person outside the jar, who sees the one thing you can&rsquo;t,
              names it, and hands you a way forward.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER + GUARANTEE */}
      <section className="cdd-sec cdd-sec-navy">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <h2 className="cdd-h2-navy" data-reveal>The Clarity Intensive</h2>
          <p className="cdd-body-navy" data-reveal>
            One 75-minute conversation. You bring what you&rsquo;ve been stuck on. I help you see
            what&rsquo;s actually in the way. You leave knowing your next move.
          </p>
          <div className="cdd-price" data-reveal>$750</div>
          <ul className="cdd-spec" data-reveal>
            <li>75 minutes, one-on-one, by video</li>
            <li>Pre-session intake so we use every minute</li>
            <li>One-page summary the next day</li>
            <li>No program, no subscription</li>
          </ul>
          <div className="cdd-guarantee" data-reveal>
            <strong>My promise to you</strong>
            Book with zero risk. If we finish the session and you don&rsquo;t feel it gave you real
            clarity, tell me by the end of our call and I&rsquo;ll refund you in full. I only want you
            paying for this if it actually moves something.
          </div>
          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-gold cdd-btn-lg" onClick={scrollToBook}>
              Book Your Clarity Intensive &mdash; $750
            </a>
          </div>
        </div>
      </section>

      {/* FAQ — catches the skimmers who won't watch the whole video */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-narrow">
          <h2 className="cdd-h2 cdd-center" data-reveal>Questions</h2>
          <div className="cdd-faq" data-reveal>
            {[
              { q: "Why no free discovery call first?", a: "Because the free call is usually where people get talked into something. This is different \u2014 you've watched the video, you know exactly what this is. If it's for you, we skip straight to the work. And you're fully protected: if the session doesn't give you real clarity, I refund you." },
              { q: "Is this therapy?", a: "No. We're not spending our time in your past. We're looking at what's happening right now, why you're stuck, and what to do about it." },
              { q: "How is this different from talking to a smart friend?", a: "Your friends are inside the situation with you. They have history, opinions, and a stake in protecting you. I come in with none of that. I just see what's there." },
              { q: "Will you tell me what business to start?", a: "No \u2014 and you don't actually need that. You already have the idea. What you need is to see what's stopping you from moving on it. That's what we do." },
              { q: "What if I'm not sure I'm \u201Cstuck enough\u201D for this?", a: "If you've been circling the same thing for more than a few months and it still hasn't moved, you're stuck enough. That hesitation you're feeling right now is worth paying attention to." },
              { q: "What's your cancellation policy?", a: "Your session is reserved just for you. You can reschedule for free up to 24 hours before. If you cancel at least 48 hours in advance, you'll get a full refund; within 48 hours the session is non-refundable, but I'll gladly reschedule you once. And if we complete our session and you feel it didn't give you real clarity, tell me by the end of our call and I'll refund you in full." },
            ].map((f, i) => (
              <details className="cdd-faq-item" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="cdd-sec cdd-sec-cream cdd-book">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <p className="cdd-eyebrow" data-reveal>Your Clarity Intensive</p>
          <h2 className="cdd-h2" data-reveal>Pick a time. Answer a few questions. I&rsquo;ll see you there.</h2>
          <p className="cdd-body cdd-center" data-reveal>
            75 minutes, one-on-one, $750 &mdash; fully refundable if it doesn&rsquo;t give you clarity.
          </p>
          <div className="cdd-cal" data-reveal>
            <div className="calendly-inline-widget" data-url={CAL_URL} style={{ minWidth: "320px", height: "720px" }} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cdd-footer">
        <div className="cdd-wrap">
          <div className="cdd-disclaimer">
            <strong>Important: Earnings and Income Disclaimer</strong>
            <p>All testimonials on this page are from real clients. The results shown are not typical. Their experiences do not guarantee similar results. Individual results may vary based on your skills, experience, motivation, and other unforeseen factors. The Company has not performed studies of the results of its typical clients. Your results may vary.</p>
            <p>Ideal Clarity Solutions is a coaching, advisory, and education company. We do not sell a business opportunity, &ldquo;get rich quick&rdquo; program, or money-making system. We believe that, with education, individuals can be better prepared to make decisions, but we do not guarantee you will make money using our services.</p>
            <p>Statements and depictions are the opinions, findings, or experiences of individuals who generally have purchased education and advising. Results vary, are not typical, and rely on individual effort, time, and skill, as well as unknown conditions and other factors. Many clients do not apply what they learn, or attempt to apply it but nonetheless have difficulty.</p>
            <p>This site is not part of, nor endorsed by, YouTube, Google, Bing, Meta, or Facebook in any way. FACEBOOK is a trademark of Meta, Inc. YOUTUBE is a trademark of GOOGLE, Inc. BING is a trademark of MICROSOFT, Inc.</p>
          </div>
        </div>
        <div className="cdd-wrap cdd-center">
          <p>&copy; 2026 Ideal Clarity Solutions. All rights reserved.</p>
          <p className="cdd-foot-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a href="https://instagram.com/idealclarity" target="_blank" rel="noopener noreferrer">@idealclarity</a>
            <a href="https://www.idealclarity.com/privacy-policy">Privacy Policy</a>
          </p>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div className={`cdd-sticky ${showBar ? "is-on" : ""}`}>
        <span>Clarity Intensive &middot; $750</span>
        <a href="#book" className="cdd-btn cdd-btn-gold cdd-btn-sm" onClick={scrollToBook}>Book now</a>
      </div>
    </div>
  );
}

const CSS = `
.cdd-root{
  --cream:#FAF7F0; --cream-light:#FDF8EE; --navy:#1A2332; --gold:#B8935F;
  --gold-deep:#A07D4C; --terra:#C05A3A; --char:#2D2D2D; --warm:#FCF0E6;
  --maxw:1080px; --narrow:720px;
  background:var(--cream); color:var(--char);
  font-family:'Lora',Georgia,'Times New Roman',serif;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.cdd-root *{box-sizing:border-box;}
.cdd-wrap{max-width:var(--maxw); margin:0 auto; padding:0 24px; width:100%;}
.cdd-narrow{max-width:var(--narrow);}
.cdd-center{text-align:center;}
[data-reveal]{opacity:0; transform:translateY(16px); transition:opacity .7s ease, transform .7s ease;}
[data-reveal].is-visible{opacity:1; transform:none;}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1; transform:none; transition:none;}}
.cdd-kicker{font-family:'Poppins','Helvetica Neue',Arial,sans-serif; text-transform:uppercase; letter-spacing:.08em; font-size:clamp(1.15rem,2.2vw,1.45rem); font-weight:700; color:var(--gold-deep); margin:0 0 1.8rem; line-height:1.3;}
.cdd-eyebrow{font-family:'Poppins','Helvetica Neue',Arial,sans-serif; text-transform:uppercase; letter-spacing:.16em; font-size:.72rem; font-weight:600; color:var(--gold-deep); margin:0 0 1.2rem;}
.cdd-h1{font-size:clamp(2.2rem,5.2vw,3.6rem); line-height:1.1; font-weight:600; color:var(--navy); margin:0 0 1.4rem; letter-spacing:-.01em;}
.cdd-h1 em{font-style:italic; color:var(--gold-deep);}
.cdd-h2{font-size:clamp(1.7rem,3.5vw,2.5rem); line-height:1.15; font-weight:600; color:var(--navy); margin:0 0 1.4rem;}
.cdd-h2 em{font-style:italic; color:var(--gold-deep);}
.cdd-sub{font-size:clamp(1.05rem,1.7vw,1.25rem); line-height:1.6; color:var(--char); max-width:660px; margin:0 auto 1.4rem;}
.cdd-watch{font-size:clamp(1.05rem,1.7vw,1.22rem); line-height:1.6; color:var(--navy); font-weight:600; max-width:680px; margin:0 auto 2.2rem;}
.cdd-body{font-size:1.12rem; line-height:1.75; margin:0 0 1.3rem; color:var(--char);}
.cdd-body em{font-style:italic; color:var(--gold-deep);}
.cdd-btn{display:inline-block; font-family:'Poppins','Helvetica Neue',Arial,sans-serif; font-weight:600; font-size:1rem; letter-spacing:.01em; padding:1.05rem 2.2rem; border-radius:6px; text-decoration:none; cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; border:none;}
.cdd-btn-lg{font-size:1.08rem; padding:1.2rem 2.6rem;}
.cdd-btn-gold{background:var(--gold); color:#fff; box-shadow:0 6px 20px rgba(184,147,95,.35);}
.cdd-btn-gold:hover{transform:translateY(-2px); box-shadow:0 10px 28px rgba(184,147,95,.45);}
.cdd-btn-sm{padding:.7rem 1.2rem; font-size:.9rem;}
.cdd-btn-goldline{background:transparent; color:var(--gold); border:1.5px solid var(--gold); box-shadow:none;}
.cdd-btn-goldline:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}
.cdd-btn-ghost{background:transparent; color:var(--gold-deep); border:1.5px solid var(--gold); box-shadow:none;}
.cdd-btn-ghost:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}
.cdd-cta-row{margin-top:2rem;}
.cdd-microcopy{font-family:'Poppins',sans-serif; font-size:.85rem; color:var(--gold-deep); margin:1rem 0 0; letter-spacing:.01em;}
.cdd-hero{padding:clamp(3rem,7vw,5rem) 0 clamp(2.5rem,5vw,4rem); background:radial-gradient(120% 80% at 80% -10%, rgba(184,147,95,.12), transparent 60%), var(--cream);}
.cdd-video{margin:2.4rem auto .8rem; max-width:820px; border-radius:12px; overflow:hidden; box-shadow:0 24px 60px rgba(26,35,50,.2); aspect-ratio:16/9; background:var(--navy);}
.cdd-video-placeholder{width:100%; height:100%; display:flex; flex-direction:column; gap:.5rem; align-items:center; justify-content:center; color:#cdd3dd; text-align:center; padding:1rem;}
.cdd-play{font-size:2.4rem; color:var(--gold);}
.cdd-video-placeholder span{font-family:'Poppins',sans-serif; font-size:1.05rem; letter-spacing:.03em;}
.cdd-video-placeholder small{font-family:'Poppins',sans-serif; font-size:.78rem; opacity:.6;}
.cdd-herocard{display:flex; gap:2rem; align-items:center; justify-content:center; flex-wrap:wrap; margin-top:2.8rem; padding:2.2rem 2.4rem; background:#FFFFFF; border:1px solid rgba(184,147,95,.25); border-radius:16px; box-shadow:0 16px 48px rgba(26,35,50,.10); max-width:860px; margin-left:auto; margin-right:auto;}
.cdd-herocard-stat{display:flex; flex-direction:column; align-items:center; flex-shrink:0; padding-right:2rem; border-right:1px solid rgba(184,147,95,.3);}
.cdd-herocard-stat strong{font-size:clamp(3.6rem,7vw,5rem); color:var(--gold); line-height:.9; font-weight:700; letter-spacing:-.02em;}
.cdd-herocard-stat span{font-family:'Poppins',sans-serif; font-size:.8rem; text-transform:uppercase; letter-spacing:.08em; color:var(--gold-deep); margin-top:.45rem; font-weight:600;}
.cdd-herocard-quote{flex:1 1 360px; text-align:left;}
.cdd-herocard-quote p{font-size:clamp(1.12rem,1.8vw,1.32rem); font-style:italic; color:var(--navy); line-height:1.55; margin:0 0 .8rem;}
.cdd-herocard-quote em{font-style:normal; font-family:'Poppins',sans-serif; font-size:.88rem; font-weight:600; color:var(--gold-deep);}
.cdd-herotesti{max-width:860px; margin:1.4rem auto 0; padding:2rem 2.4rem; background:#FFFFFF; border:1px solid rgba(184,147,95,.25); border-radius:16px; box-shadow:0 16px 48px rgba(26,35,50,.10);}
.cdd-herotesti p{font-size:clamp(1rem,1.5vw,1.1rem); font-style:italic; color:var(--navy); line-height:1.6; margin:0 0 .8rem; text-align:left;}
.cdd-herotesti em{font-style:normal; font-family:'Poppins',sans-serif; font-size:.85rem; font-weight:600; color:var(--gold-deep);}
.cdd-sec{padding:clamp(3.5rem,7vw,6rem) 0;}
.cdd-sec-tight{padding:clamp(2rem,4vw,3.5rem) 0;}
.cdd-sec-cream{background:var(--cream);}
.cdd-sec-warm{background:var(--warm);}
.cdd-sec-navy{background:var(--navy);}
.cdd-sec-white{background:#FFFFFF;}
.cdd-bridge-navy{font-size:clamp(1.2rem,2.2vw,1.5rem); line-height:1.6; color:var(--cream-light); margin:0 0 1.3rem; font-style:italic;}
.cdd-bridge-navy em{color:var(--gold); font-style:italic;}
.cdd-h2-navy{font-size:clamp(1.7rem,3.6vw,2.6rem); line-height:1.2; font-weight:600; color:var(--cream-light); margin:0 0 1.4rem;}
.cdd-body-navy{font-size:1.12rem; line-height:1.75; color:#d4d9e2; margin:0 0 1.3rem;}
.cdd-testi-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; max-width:760px; margin:0 auto;}
.cdd-testi{background:#FFFFFF; border:1px solid rgba(184,147,95,.22); border-radius:12px; padding:1.8rem; box-shadow:0 12px 36px rgba(26,35,50,.08);}
.cdd-testi p{font-size:1rem; line-height:1.6; font-style:italic; color:var(--char); margin:0 0 .9rem;}
.cdd-testi-name{font-family:'Poppins',sans-serif; font-size:.85rem; font-weight:600; color:var(--gold-deep); letter-spacing:.02em;}
.cdd-steps{display:flex; flex-direction:column; gap:1.6rem; margin:1.5rem 0;}
.cdd-step{background:#FFFFFF; border:1px solid rgba(184,147,95,.22); border-left:3px solid var(--gold); border-radius:10px; padding:1.4rem 1.6rem; box-shadow:0 10px 30px rgba(26,35,50,.06);}
.cdd-step-num{display:block; font-family:'Poppins',sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.1em; font-size:.78rem; color:var(--gold-deep); margin-bottom:.5rem;}
.cdd-step p{font-size:1.08rem; line-height:1.7; margin:0; color:var(--char);}
.cdd-leave-list{display:flex; flex-direction:column; gap:1.2rem; margin:2rem 0 0;}
.cdd-leave-item{display:flex; gap:1.3rem; align-items:flex-start; background:#FFFFFF; border:1px solid rgba(184,147,95,.22); border-radius:12px; padding:1.6rem 1.8rem; box-shadow:0 12px 36px rgba(26,35,50,.08);}
.cdd-leave-num{flex-shrink:0; width:40px; height:40px; border-radius:50%; background:var(--gold); color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Poppins',sans-serif; font-weight:700; font-size:1.2rem;}
.cdd-leave-item h3{font-size:1.2rem; color:var(--navy); margin:.15rem 0 .4rem; font-weight:600;}
.cdd-leave-item p{font-size:1.02rem; line-height:1.6; margin:0; color:var(--char);}
.cdd-about{display:grid; grid-template-columns:0.8fr 1.2fr; gap:3rem; align-items:center;}
.cdd-about-photo{width:100%;}
.cdd-photo-placeholder{aspect-ratio:4/5; border-radius:14px; background:linear-gradient(135deg,#e8ddca,#d8c4a8); display:flex; align-items:center; justify-content:center; box-shadow:0 14px 40px rgba(26,35,50,.12);}
.cdd-photo{width:100%; border-radius:14px; display:block; box-shadow:0 14px 40px rgba(26,35,50,.15);}
.cdd-photo-placeholder span{font-family:'Poppins',sans-serif; color:#8a7a5c; font-size:.9rem;}
.cdd-price{font-size:clamp(3rem,9vw,5rem); font-weight:700; color:var(--gold); line-height:1; margin:1.2rem 0 .6rem;}
.cdd-spec{list-style:none; padding:0; margin:0 auto 1.8rem; display:flex; flex-wrap:wrap; gap:.7rem 1.6rem; justify-content:center;}
.cdd-spec li{font-family:'Poppins',sans-serif; font-size:.92rem; color:#d4d9e2; position:relative; padding-left:1.1rem;}
.cdd-spec li::before{content:'\\2666'; color:var(--gold); position:absolute; left:0;}
.cdd-guarantee{background:rgba(184,147,95,.12); border:1px solid rgba(184,147,95,.4); border-radius:12px; padding:1.6rem 1.8rem; max-width:620px; margin:.5rem auto 2rem; text-align:left; color:#d4d9e2; font-size:1.02rem; line-height:1.65;}
.cdd-guarantee strong{display:block; font-family:'Poppins',sans-serif; color:var(--gold); font-size:.95rem; letter-spacing:.04em; text-transform:uppercase; margin-bottom:.5rem;}
.cdd-faq{margin-top:2rem; background:#FFFFFF; border:1px solid rgba(184,147,95,.22); border-radius:14px; padding:1rem 2rem; box-shadow:0 12px 36px rgba(26,35,50,.08);}
.cdd-faq-item{border-bottom:1px solid rgba(26,35,50,.12); padding:1.2rem 0;}
.cdd-faq-item summary{font-family:'Poppins',sans-serif; font-weight:600; font-size:1.08rem; color:var(--navy); cursor:pointer; list-style:none; position:relative; padding-right:2rem;}
.cdd-faq-item summary::-webkit-details-marker{display:none;}
.cdd-faq-item summary::after{content:'+'; position:absolute; right:0; top:-2px; font-size:1.5rem; color:var(--gold); font-weight:400;}
.cdd-faq-item[open] summary::after{content:'\\2013';}
.cdd-faq-item p{font-size:1.05rem; line-height:1.7; margin:1rem 0 0; color:var(--char);}
.cdd-cal{margin-top:2.2rem; background:#FFFFFF; border:1px solid rgba(184,147,95,.25); border-radius:14px; padding:12px; box-shadow:0 16px 48px rgba(26,35,50,.10);}
.cdd-footer{background:var(--navy); color:#aeb6c4; padding:3rem 0; font-family:'Poppins',sans-serif; font-size:.88rem;}
.cdd-disclaimer{max-width:820px; margin:0 auto 2.4rem; padding-bottom:2rem; border-bottom:1px solid rgba(255,255,255,.12);}
.cdd-disclaimer strong{display:block; color:#cdd3dd; font-size:.8rem; letter-spacing:.04em; text-transform:uppercase; margin-bottom:.8rem;}
.cdd-disclaimer p{font-size:.76rem; line-height:1.6; color:#8b94a4; margin:0 0 .8rem;}
.cdd-footer p{margin:.4rem 0;}
.cdd-foot-links{display:flex; gap:1.6rem; justify-content:center; flex-wrap:wrap;}
.cdd-foot-links a{color:var(--gold); text-decoration:none;}
.cdd-foot-links a:hover{text-decoration:underline;}
.cdd-sticky{position:fixed; bottom:0; left:0; right:0; background:var(--navy); color:#fff; display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:.8rem 1.2rem; transform:translateY(110%); transition:transform .3s ease; z-index:50; box-shadow:0 -6px 24px rgba(0,0,0,.2);}
.cdd-sticky.is-on{transform:translateY(0);}
.cdd-sticky span{font-family:'Poppins',sans-serif; font-weight:600; font-size:.95rem;}
@media (max-width:780px){
  .cdd-testi-grid{grid-template-columns:1fr;}
  .cdd-about{grid-template-columns:1fr; gap:2rem;}
  .cdd-about-photo{max-width:320px; margin:0 auto;}
  .cdd-herocard{flex-direction:column; gap:1.3rem; padding:1.6rem; text-align:center;}
  .cdd-herocard-stat{padding-right:0; border-right:none; padding-bottom:1.3rem; border-bottom:1px solid rgba(184,147,95,.3);}
  .cdd-herocard-quote{text-align:center; flex-basis:auto;}
}
@media (min-width:781px){ .cdd-sticky{display:none;} }
`;
