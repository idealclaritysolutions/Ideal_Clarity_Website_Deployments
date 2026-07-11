"use client";

import { useEffect, useState } from "react";

const CAL_URL = "https://calendly.com/idealclaritysolutions/clarity-intensive";
const VIMEO_URL = "https://player.vimeo.com/video/1207592990?badge=0&autopause=0&byline=0&title=0&portrait=0&dnt=1&player_id=0&app_id=58479";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
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
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="tc-root">
      <style>{CSS}</style>

      <section className="tc-hero">
        <div className="tc-shell tc-center">
          <p className="tc-eyebrow" data-reveal>
            For accomplished professionals who cannot shake the feeling that there is something more
          </p>
          <h1 className="tc-hero-title" data-reveal>
            You already know something is calling you.
          </h1>
          <p className="tc-hero-sub" data-reveal>
            This short video explains what has been keeping you from moving toward what matters—and how to finally begin.
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

      <section className="tc-section tc-navy">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker tc-gold" data-reveal>Maybe it is not a lack of discipline.</p>
          <h2 className="tc-display-light" data-reveal>
            Maybe you have been protecting yourself from the very thing you feel called to do.
          </h2>
          <p className="tc-lead tc-light-copy" data-reveal>
            Once you can see what you have been protecting, you can stop letting it make your decisions—and start moving with intention.
          </p>
        </div>
      </section>

      <section className="tc-section">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker" data-reveal>The thing that keeps returning</p>
          <h2 className="tc-display" data-reveal>
            It may be a business. A book. A podcast. A mission. A body of work. A different way of living.
          </h2>
          <p className="tc-lead" data-reveal>
            Whatever form it takes, it has stayed with you for a reason. The problem is not that you do not care enough. The problem is that something underneath your logic keeps asking you to wait.
          </p>
        </div>
      </section>

      <section className="tc-section tc-cream">
        <div className="tc-narrow tc-center">
          <h2 className="tc-display" data-reveal>You do not need help inventing a purpose.</h2>
          <p className="tc-pull" data-reveal>
            You need help understanding why you keep walking away from what already matters to you—and turning that understanding into action.
          </p>
          <div className="tc-mid-cta" data-reveal>
            <button type="button" className="tc-button tc-button-outline" onClick={() => scrollToId("offer")}>
              Show me how the conversation works
            </button>
          </div>
        </div>
      </section>

      <section className="tc-section">
        <div className="tc-shell tc-about">
          <div className="tc-about-image" data-reveal>
            <img src="/chichi.png" alt="Chi-Chi Jones, founder of Ideal Clarity Solutions" />
          </div>
          <div className="tc-about-copy" data-reveal>
            <p className="tc-kicker">Meet Chi-Chi</p>
            <h2 className="tc-display tc-left">I do not help people manufacture a dream.</h2>
            <div className="tc-body">
              <p>I help accomplished professionals understand why they keep postponing the work, idea, or life that feels most meaningful to them—and turn that insight into a practical next step.</p>
              <p>Most people come into the conversation thinking they need advice. They do not. They need someone who knows how to hear what they are not saying.</p>
              <p>That is what I listen for: the hidden rule, inherited belief, or protection mechanism quietly shaping your decisions.</p>
              <p>Then we replace it with something truer and build a next move that fits your real life.</p>
            </div>
            <button type="button" className="tc-button tc-button-outline" onClick={() => scrollToId("book")}>
              I&apos;m ready to find my next move
            </button>
          </div>
        </div>
      </section>

      <section className="tc-section tc-navy" id="offer">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker tc-gold" data-reveal>The Clarity Intensive</p>
          <h2 className="tc-display-light" data-reveal>The conversation that helps you see what is in the way—and finally move beyond it.</h2>
          <p className="tc-lead tc-light-copy" data-reveal>
            A private 75-minute conversation that uncovers the real barrier, reframes it, and turns clarity into a concrete move you can make now.
          </p>

          <div className="tc-offer-card" data-reveal>
            <div className="tc-offer-grid">
              <article>
                <span>01</span>
                <h3>The real barrier, named</h3>
                <p>We identify the story, belief, or protection mechanism that has quietly kept you from moving.</p>
              </article>
              <article>
                <span>02</span>
                <h3>A truer way to see it</h3>
                <p>We replace the old story with one that reflects who you are now—not the rule you inherited years ago.</p>
              </article>
              <article>
                <span>03</span>
                <h3>One honest next move</h3>
                <p>You leave with one specific action you can take immediately—designed around your real life, not an imaginary version of it.</p>
              </article>
            </div>

            <div className="tc-includes">
              <p><strong>Also included:</strong> a personalized written summary within 24 hours and your free e-book, <em>Build What&apos;s Next While Still Employed</em>.</p>
            </div>

            <div className="tc-price-row">
              <div>
                <span className="tc-price-label">Private session</span>
                <strong className="tc-price">$750</strong>
              </div>
              <button type="button" className="tc-button tc-button-gold" onClick={() => scrollToId("book")}>
                Book the conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="tc-section tc-cream">
        <div className="tc-shell tc-book">
          <div className="tc-book-copy" data-reveal>
            <p className="tc-kicker">Your practical bridge</p>
            <h2 className="tc-display tc-left">You do not have to quit your job to begin honoring what is calling you.</h2>
            <p className="tc-lead tc-left">
              Your session includes my e-book, <strong>Build What&apos;s Next While Still Employed</strong>, including the real schedule and systems I use to manage a demanding career while building meaningful work of my own.
            </p>
          </div>
          <div className="tc-book-card tc-book-mockup-card" data-reveal>
            <img
              src="/build-whats-next-mockup.png"
              alt="Build What&apos;s Next While Still Employed e-book mockup"
              className="tc-book-mockup"
            />
            <p>My time. My system. My real schedule.</p>
          </div>
        </div>
      </section>

      <section className="tc-section">
        <div className="tc-shell">
          <p className="tc-kicker tc-center" data-reveal>What happens when the block comes off</p>
          <div className="tc-testimonials">
            <blockquote data-reveal>
              <p>“With Chi-Chi, I found my area of genius and unlocked the mental blocks that were holding me back from fully monetizing my business in a way that reflects my value. I&apos;ve 300x&apos;d my revenue so far.”</p>
              <cite>— Lola, Rapid Reinvent Hair Treatment</cite>
            </blockquote>
            <blockquote data-reveal>
              <p>“Chi-Chi took the time to understand my goals, asked thoughtful questions, and helped turn uncertainty into a clear, actionable path forward.”</p>
              <cite>— Peace</cite>
            </blockquote>
            <blockquote data-reveal>
              <p>“Her guidance reframed and clarified my next steps in a valuable way.”</p>
              <cite>— Hannah Bailey, Studio Northwood</cite>
            </blockquote>
          </div>
          <div className="tc-mid-cta tc-center" data-reveal>
            <button type="button" className="tc-button tc-button-outline" onClick={() => scrollToId("book")}>
              Help me create my next move
            </button>
          </div>
        </div>
      </section>

      <section className="tc-section tc-navy">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker tc-gold" data-reveal>My promise</p>
          <h2 className="tc-display-light" data-reveal>If you leave without meaningful clarity, you do not pay.</h2>
          <p className="tc-lead tc-light-copy" data-reveal>
            Tell me before we end the conversation, and I will refund you in full. No awkward explanation. No hidden conditions.
          </p>
          <div className="tc-mid-cta" data-reveal>
            <button type="button" className="tc-button tc-button-gold" onClick={() => scrollToId("book")}>
              Book with zero risk
            </button>
          </div>
        </div>
      </section>

      <section className="tc-section tc-cream">
        <div className="tc-narrow">
          <p className="tc-kicker tc-center" data-reveal>Questions you may be carrying</p>
          <div className="tc-faq" data-reveal>
            <details>
              <summary>What if I do not know exactly what my purpose is?</summary>
              <p>You do not need a perfectly defined calling. You only need something that keeps returning to you—an idea, direction, or form of work you cannot quite dismiss.</p>
            </details>
            <details>
              <summary>What if I want to stay in corporate?</summary>
              <p>That is completely valid. This is not an invitation to blow up your life. It is an invitation to make room for what matters, whether that means building alongside your career or changing your relationship with the work you already do.</p>
            </details>
            <details>
              <summary>Is this therapy?</summary>
              <p>No. This is a focused coaching and advisory conversation about what is happening now, what has kept you circling, and what your next honest move could be.</p>
            </details>
            <details>
              <summary>Why is there no free discovery call?</summary>
              <p>Because I would rather spend our first conversation doing the real work. You already know how I think from the video and this page, and the session is protected by a full clarity guarantee.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="tc-section" id="book">
        <div className="tc-narrow tc-center">
          <p className="tc-kicker" data-reveal>The conversation</p>
          <h2 className="tc-display" data-reveal>Ready to stop postponing what keeps calling you?</h2>
          <p className="tc-lead" data-reveal>
            Choose a time. Answer four thoughtful questions. I will read every word before we meet.
            Your $750 session is protected by the full clarity guarantee.
          </p>
          <div className="tc-calendar" data-reveal>
            <div className="calendly-inline-widget" data-url={CAL_URL} style={{ minWidth: "320px", height: "760px" }} />
          </div>
        </div>
      </section>

      <footer className="tc-footer">
        <div className="tc-narrow tc-center">
          <p>You do not need permission to want another chapter.</p>
          <div className="tc-footer-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a href="https://instagram.com/idealclarity" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.idealclarity.com/privacy-policy">Privacy</a>
          </div>
          <small>© 2026 Ideal Clarity Solutions. Coaching and advisory services do not guarantee business, income, career, or personal results.</small>
        </div>
      </footer>

      <div className={`tc-sticky ${showSticky ? "is-visible" : ""}`}>
        <span>Ready for the conversation you&apos;ve been postponing?</span>
        <button type="button" className="tc-sticky-button" onClick={() => scrollToId("book")}>Yes — book my session</button>
      </div>
    </main>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&display=swap');
.tc-root{--ink:#172132;--navy:#142033;--navy-soft:#1D2B42;--cream:#FAF7F0;--warm:#F4ECDE;--white:#fff;--gold:#B9935C;--gold-deep:#9C7847;--muted:#6D675F;--line:rgba(185,147,92,.28);--shadow:0 24px 70px rgba(20,32,51,.13);background:var(--cream);color:var(--ink);font-family:'DM Sans',Arial,sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased}.tc-root *{box-sizing:border-box}.tc-shell{width:min(1120px,calc(100% - 40px));margin:0 auto}.tc-narrow{width:min(760px,calc(100% - 40px));margin:0 auto}.tc-center{text-align:center}.tc-left{text-align:left}[data-reveal]{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}[data-reveal].is-visible{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){[data-reveal]{opacity:1;transform:none;transition:none}}.tc-hero{padding:clamp(48px,8vw,92px) 0 clamp(56px,7vw,88px);background:radial-gradient(circle at 50% -20%,rgba(185,147,92,.18),transparent 42%),var(--cream)}.tc-eyebrow,.tc-kicker{margin:0 0 18px;color:var(--gold-deep);font-size:.78rem;font-weight:700;letter-spacing:.17em;line-height:1.5;text-transform:uppercase}.tc-hero-title,.tc-display,.tc-display-light{font-family:'Fraunces',Georgia,serif;font-optical-sizing:auto;letter-spacing:-.025em}.tc-hero-title{max-width:900px;margin:0 auto 20px;color:var(--ink);font-size:clamp(2.7rem,7vw,5.6rem);font-weight:500;line-height:1.03}.tc-hero-sub{max-width:660px;margin:0 auto 36px;color:var(--muted);font-family:'Fraunces',Georgia,serif;font-size:clamp(1.15rem,2vw,1.45rem);line-height:1.55}.tc-video-wrap{position:relative;width:min(430px,100%);margin:0 auto;overflow:hidden;background:#000;border:1px solid rgba(185,147,92,.45);border-radius:20px;box-shadow:var(--shadow);aspect-ratio:9/16}.tc-video-wrap iframe{width:100%;height:100%;border:0;display:block}.tc-video-note{margin:18px 0 0;color:var(--muted);font-size:.9rem}.tc-section{padding:clamp(76px,10vw,132px) 0}.tc-navy{background:var(--navy);color:var(--white)}.tc-cream{background:var(--warm)}.tc-gold{color:var(--gold)}.tc-display,.tc-display-light{margin:0 auto 28px;max-width:900px;font-size:clamp(2.2rem,5vw,4.35rem);font-weight:500;line-height:1.1}.tc-display{color:var(--ink)}.tc-display-light{color:var(--white)}.tc-display.tc-left{margin-left:0}.tc-lead{max-width:710px;margin:0 auto;color:var(--muted);font-size:clamp(1.05rem,1.55vw,1.25rem);line-height:1.8}.tc-light-copy{color:#D7DCE5}.tc-lead.tc-left{margin-left:0}.tc-pull{max-width:760px;margin:0 auto;color:var(--gold-deep);font-family:'Fraunces',Georgia,serif;font-size:clamp(1.55rem,3vw,2.3rem);font-style:italic;line-height:1.45}.tc-about{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(40px,7vw,88px);align-items:center}.tc-about-image img{width:100%;display:block;border-radius:24px;box-shadow:var(--shadow)}.tc-body p{margin:0 0 20px;color:var(--muted);font-size:1.08rem;line-height:1.8}.tc-offer-card{margin-top:50px;padding:clamp(28px,5vw,54px);background:linear-gradient(150deg,var(--navy-soft),#18263B);border:1px solid rgba(185,147,92,.4);border-radius:26px;box-shadow:0 35px 95px rgba(0,0,0,.32);text-align:left}.tc-offer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}.tc-offer-grid article{padding:0 8px}.tc-offer-grid span{display:block;margin-bottom:16px;color:var(--gold);font-family:'Fraunces',Georgia,serif;font-size:1.3rem}.tc-offer-grid h3{margin:0 0 12px;color:var(--white);font-family:'Fraunces',Georgia,serif;font-size:1.45rem;font-weight:500;line-height:1.25}.tc-offer-grid p{margin:0;color:#C9D0DC;line-height:1.75}.tc-includes{margin:38px 0;padding:22px 24px;background:rgba(185,147,92,.1);border:1px solid rgba(185,147,92,.32);border-radius:16px}.tc-includes p{margin:0;color:#E8E1D6;line-height:1.75}.tc-includes strong,.tc-includes em{color:var(--gold)}.tc-price-row{display:flex;align-items:center;justify-content:space-between;gap:28px}.tc-price-label{display:block;color:#AAB4C4;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase}.tc-price{display:block;margin-top:3px;color:var(--white);font-family:'Fraunces',Georgia,serif;font-size:2.5rem;font-weight:500}.tc-button{border:0;border-radius:999px;cursor:pointer;font:600 1rem 'DM Sans',Arial,sans-serif;padding:16px 27px;transition:transform .2s ease,box-shadow .2s ease}.tc-button:hover{transform:translateY(-2px)}.tc-button-gold{background:var(--gold);color:#fff;box-shadow:0 12px 30px rgba(185,147,92,.25)}.tc-button-outline{background:transparent;color:var(--gold-deep);border:1.5px solid var(--gold);box-shadow:none}.tc-button-outline:hover{background:var(--gold);color:#fff}.tc-mid-cta{margin-top:34px}.tc-book{display:grid;grid-template-columns:1.2fr .8fr;gap:clamp(42px,8vw,100px);align-items:center}.tc-book-card{padding:30px;background:var(--white);border:1px solid var(--line);border-radius:24px;box-shadow:var(--shadow);text-align:center}.tc-book-cover{width:min(280px,100%);margin:0 auto 22px;padding:45px 24px;background:linear-gradient(155deg,#101B2B,#26344A);border:1px solid rgba(185,147,92,.5);box-shadow:0 20px 45px rgba(20,32,51,.24);color:#fff}.tc-book-cover span{display:block;font-family:'Fraunces',Georgia,serif;font-size:2.5rem;font-weight:600;line-height:.92}.tc-book-cover small{display:block;margin-top:18px;color:var(--gold);font-size:.72rem;font-weight:700;letter-spacing:.13em}.tc-book-card p{margin:0;color:var(--muted);font-style:italic}.tc-book-mockup-card{background:radial-gradient(circle at 50% 35%,#fff 0%,#f8f2e7 72%);overflow:hidden}.tc-book-mockup{display:block;width:min(520px,115%);max-width:none;margin:-18px auto 4px;filter:drop-shadow(0 28px 35px rgba(20,32,51,.18))}.tc-testimonials{width:min(850px,100%);margin:50px auto 0;display:grid;gap:34px}.tc-testimonials blockquote{margin:0;padding:32px 34px;background:var(--white);border:1px solid var(--line);border-radius:20px;box-shadow:0 15px 45px rgba(20,32,51,.07)}.tc-testimonials p{margin:0 0 18px;color:var(--ink);font-family:'Fraunces',Georgia,serif;font-size:clamp(1.15rem,2vw,1.48rem);font-style:italic;line-height:1.6}.tc-testimonials cite{color:var(--gold-deep);font-size:.9rem;font-style:normal;font-weight:700}.tc-faq{margin-top:38px;border-top:1px solid rgba(20,32,51,.15)}.tc-faq details{border-bottom:1px solid rgba(20,32,51,.15);padding:22px 0}.tc-faq summary{padding-right:38px;position:relative;color:var(--ink);cursor:pointer;font-family:'Fraunces',Georgia,serif;font-size:1.25rem;font-weight:500;list-style:none}.tc-faq summary::-webkit-details-marker{display:none}.tc-faq summary::after{content:'+';position:absolute;right:0;top:-4px;color:var(--gold-deep);font-size:1.7rem}.tc-faq details[open] summary::after{content:'–'}.tc-faq p{margin:17px 0 0;color:var(--muted);line-height:1.75}.tc-calendar{margin-top:40px;padding:12px;overflow:hidden;background:var(--white);border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow)}.tc-footer{padding:72px 0 110px;background:var(--navy);color:#D7DCE5}.tc-footer p{margin:0;color:#fff;font-family:'Fraunces',Georgia,serif;font-size:1.35rem}.tc-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:24px;margin:30px 0}.tc-footer-links a{color:var(--gold);text-decoration:none}.tc-footer small{color:#8E99AA;line-height:1.6}.tc-sticky{position:fixed;left:0;right:0;bottom:0;z-index:50;display:flex;align-items:center;justify-content:center;gap:30px;min-height:86px;padding:16px 24px;background:rgba(20,32,51,.98);border-top:2px solid rgba(185,147,92,.72);color:#fff;transform:translateY(110%);transition:transform .3s ease;backdrop-filter:blur(14px);box-shadow:0 -18px 45px rgba(20,32,51,.26)}.tc-sticky.is-visible{transform:translateY(0)}.tc-sticky span{font-family:'Fraunces',Georgia,serif;font-size:1.25rem;line-height:1.25}.tc-sticky-button{min-width:210px;padding:15px 28px;background:var(--gold);border:0;border-radius:999px;color:#fff;cursor:pointer;font:700 1rem 'DM Sans',Arial,sans-serif;box-shadow:0 10px 28px rgba(185,147,92,.28)}@media(max-width:820px){.tc-about,.tc-book{grid-template-columns:1fr}.tc-about-image{width:min(420px,100%);margin:0 auto}.tc-offer-grid{grid-template-columns:1fr}.tc-offer-grid article{padding:0 0 24px;border-bottom:1px solid rgba(185,147,92,.22)}.tc-offer-grid article:last-child{padding-bottom:0;border-bottom:0}.tc-price-row{align-items:flex-start;flex-direction:column}.tc-book-card{width:min(420px,100%);margin:0 auto}}@media(max-width:600px){.tc-shell,.tc-narrow{width:min(100% - 28px,1120px)}.tc-hero{padding-top:38px}.tc-eyebrow{font-size:.68rem}.tc-hero-sub{margin-bottom:24px}.tc-video-wrap{border-radius:14px}.tc-section{padding:72px 0}.tc-offer-card{padding:26px 20px}.tc-sticky{justify-content:space-between;gap:12px;min-height:82px;padding:12px 14px}.tc-sticky span{max-width:190px;font-size:.98rem;line-height:1.2}.tc-sticky-button{min-width:150px;padding:13px 16px;font-size:.86rem}}
`;
