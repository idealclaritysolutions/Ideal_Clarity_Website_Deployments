"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Clarity Deep Dive — VSL Landing Page
 * Ideal Clarity Solutions
 *
 * Drop this in as a new route. See the integration guide for exact placement.
 * Self-contained: all styles are inline via a <style> tag, so it does not
 * depend on Tailwind or any design system in your existing project.
 */

const CAL_URL = "https://calendly.com/idealclaritysolutions/clarity-deep-dive";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
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

export default function ClarityDeepDivePage() {
  useReveal();
  useCalendly();
  const [showBar, setShowBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cdd-root">
      <style>{CSS}</style>

      {/* ============ HERO ============ */}
      <header className="cdd-hero" ref={heroRef}>
        <div className="cdd-wrap">
          <p className="cdd-eyebrow" data-reveal>
            For the corporate professional with a business idea that won&rsquo;t go away
          </p>
          <h1 className="cdd-h1" data-reveal>
            Starting your business was never a <em>strategy problem.</em>
          </h1>
          <p className="cdd-sub" data-reveal>
            You&rsquo;ve had the idea for months. Maybe years. You&rsquo;ve done the research, saved
            the posts, half-built the plan. And you&rsquo;re still exactly where you started.
            There&rsquo;s a reason &mdash; and it&rsquo;s not the one you&rsquo;ve been telling yourself.
          </p>

          <div className="cdd-video" data-reveal>
            {/* VSL VIDEO EMBED — replace the inner div with your Vimeo embed iframe */}
            <div className="cdd-video-placeholder">
              <span>Your VSL video goes here</span>
              <small>Paste your Vimeo embed in place of this block</small>
            </div>
          </div>
          <p className="cdd-video-cap" data-reveal>
            If you&rsquo;ve been &ldquo;about to start&rdquo; for longer than you&rsquo;d like to admit &mdash; watch this.
          </p>

          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-gold" onClick={scrollToBook}>
              Book Your Clarity Deep Dive
            </a>
            <p className="cdd-microcopy">75 minutes &middot; one conversation &middot; you leave knowing your next move</p>
          </div>
        </div>
      </header>

      {/* ============ SECTION 1 — MIRROR ============ */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-narrow">
          <p className="cdd-body" data-reveal>Let me say something and you tell me if it lands.</p>
          <p className="cdd-body" data-reveal>
            You&rsquo;ve wanted to build something of your own for a while now. You think about it on
            your commute. On Sunday evenings, when the week ahead feels heavier than it should.
            You&rsquo;ve researched it, talked about it, maybe even picked a name and bought the domain.
          </p>
          <p className="cdd-body" data-reveal>And here you are. Still thinking about it.</p>
          <p className="cdd-body" data-reveal>
            Somewhere along the way you stopped bringing it up to people, because they already gave
            you their advice and nothing changed, and now it&rsquo;s a little embarrassing that
            you&rsquo;re in the same spot. So it just lives in your head now, going in circles. And
            honestly? You&rsquo;re tired of your own thoughts about it.
          </p>
          <blockquote className="cdd-pull" data-reveal>
            Here&rsquo;s the part nobody told you: more thinking was never going to get you out. The
            thing keeping you stuck isn&rsquo;t in the plan. It&rsquo;s in you. And you can&rsquo;t see
            it from where you&rsquo;re standing.
          </blockquote>
        </div>
      </section>

      {/* ============ SECTION 2 — THE FORMULA ============ */}
      <section className="cdd-sec cdd-sec-navy">
        <div className="cdd-wrap cdd-narrow">
          <p className="cdd-intro-navy" data-reveal>
            After watching person after person sit in this exact spot, here&rsquo;s what I know to be true:
          </p>

          <div className="cdd-formula" data-reveal>
            <div className="cdd-formula-part">
              <span className="cdd-formula-num cdd-dim">10%</span>
              <span className="cdd-formula-label">Strategy</span>
            </div>
            <div className="cdd-formula-bar" aria-hidden="true">
              <span className="cdd-bar-strategy" />
              <span className="cdd-bar-self" />
            </div>
            <div className="cdd-formula-part">
              <span className="cdd-formula-num">90%</span>
              <span className="cdd-formula-label">Getting out of your own way</span>
            </div>
          </div>

          <p className="cdd-h2-navy" data-reveal>
            Starting a business while you&rsquo;re still employed is <em>10% strategy</em> and{" "}
            <em>90% getting out of your own way.</em>
          </p>

          <p className="cdd-body-navy" data-reveal>
            Everyone pours their time into the 10%. More research. Another course. A better plan. And
            they wonder why they&rsquo;re still stuck.
          </p>
          <p className="cdd-body-navy" data-reveal>
            The 90% is the part no one helps you with. The fear that quietly dresses itself up as
            logic. The belief that it&rsquo;s not the right time. The version of you that feels safer
            as someone <em>with potential</em> than as someone who actually tried and found out.
          </p>
          <blockquote className="cdd-pull cdd-pull-navy" data-reveal>
            That 90% is the whole game. That&rsquo;s the part I do.
          </blockquote>

          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-cream" onClick={scrollToBook}>
              Show me what&rsquo;s in my way
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — THE 90% ============ */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap">
          <p className="cdd-body cdd-center cdd-narrow-text" data-reveal>
            When I say &ldquo;getting out of your own way,&rdquo; I don&rsquo;t mean some vague mindset
            thing. I mean something specific is running underneath your decisions, and you&rsquo;ve
            never named it. Usually it&rsquo;s one of these:
          </p>

          <div className="cdd-cards">
            {[
              {
                n: "01",
                t: "Afraid of being seen trying",
                b: "You're not scared of failing in private — you're scared of failing where people who know you can watch. So you keep it \u201Calmost,\u201D because almost is safe.",
              },
              {
                n: "02",
                t: "Protecting a version of yourself",
                b: "As long as you don't fully go for it, you get to keep the story that you could. Testing it risks losing it. So you don't test it, and you call it being busy.",
              },
              {
                n: "03",
                t: "A rule you never agreed to",
                b: "Something you absorbed a long time ago about what people like you are allowed to want. It feels like a fact. It isn't.",
              },
              {
                n: "04",
                t: "Calling it a strategy problem",
                b: "\u201CI need to figure out my plan\u201D sounds so much better than \u201CI'm scared,\u201D and it keeps you safely busy instead of actually moving.",
              },
            ].map((c) => (
              <div className="cdd-card" data-reveal key={c.n}>
                <span className="cdd-card-num">{c.n}</span>
                <h3 className="cdd-card-title">{c.t}</h3>
                <p className="cdd-card-body">{c.b}</p>
              </div>
            ))}
          </div>

          <p className="cdd-body cdd-center cdd-narrow-text" data-reveal>
            You can&rsquo;t think your way out of any of these, because they&rsquo;re not in your
            thinking. They&rsquo;re underneath it. You need someone outside the situation to see them
            clearly and show you &mdash; which is exactly what happens in a session.
          </p>
        </div>
      </section>

      {/* ============ SECTION 4 — PROOF ============ */}
      <section className="cdd-sec cdd-sec-warm">
        <div className="cdd-wrap">
          <p className="cdd-eyebrow cdd-center" data-reveal>What happens when the block comes off</p>

          <div className="cdd-stat" data-reveal>
            <span className="cdd-stat-num">300x</span>
            <span className="cdd-stat-label">revenue growth &mdash; after we unlocked the mental blocks holding her back.</span>
          </div>

          <div className="cdd-testi-feature" data-reveal>
            <p>
              &ldquo;I&rsquo;ve started 3 businesses in the last 3 years, and the hardest part was
              always aligning on the path most authentic to me &mdash; not just building another thing
              someone already built. With Chi-Chi, I found my area of genius and unlocked the mental
              blocks that were holding me back from fully monetizing my business in a way that reflects
              my value. I&rsquo;ve 300x&rsquo;d my revenue so far.&rdquo;
            </p>
            <span className="cdd-testi-name">&mdash; Lola, Rapid Reinvent Hair Treatment</span>
          </div>

          <div className="cdd-testi-grid">
            <div className="cdd-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi is a consummate professional who truly listens and provides expert
                advice tailored to your level of experience. Her breadth of knowledge and thoughtful
                guidance make working with her a great experience.&rdquo;
              </p>
              <span className="cdd-testi-name">&mdash; James G.</span>
            </div>
            <div className="cdd-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi helped me identify decision-making tools and exercises to clarify my
                values as I weighed some big decisions. Her guidance reframed and clarified my next
                steps in a valuable way. If you have a business decision or operational problem to
                solve, Ideal Clarity can help you find your way.&rdquo;
              </p>
              <span className="cdd-testi-name">&mdash; Hannah Bailey, Studio Northwood</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — WHAT A SESSION IS ============ */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-narrow">
          <h2 className="cdd-h2" data-reveal>What a session is</h2>
          <div className="cdd-steps">
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">Before we meet</span>
              <p>I send you three short questions, so I come in already understanding your situation. Five minutes of your time.</p>
            </div>
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">The 75 minutes</span>
              <p>
                We get on a video call. You tell me what&rsquo;s been going on. I listen &mdash; really
                listen, to what&rsquo;s underneath what you&rsquo;re saying, the thing you might not
                have words for yet. And then I show it to you. The actual barrier. The thing that&rsquo;s
                been running the show. That&rsquo;s usually the moment people go quiet, and then say
                some version of: <em>&ldquo;Wow. I never thought about it that way.&rdquo;</em> We sit
                with it until it lands, then we figure out one thing for you to do this week &mdash; not
                a twelve-step plan, just the next real move.
              </p>
            </div>
            <div className="cdd-step" data-reveal>
              <span className="cdd-step-num">The day after</span>
              <p>I send you a one-page summary of everything we found, so you can come back to it when the old thinking tries to creep in.</p>
            </div>
          </div>
          <blockquote className="cdd-pull" data-reveal>
            One conversation. You start carrying something you&rsquo;ve held for months. You leave
            lighter, clearer, and actually moving.
          </blockquote>
        </div>
      </section>

      {/* ============ SECTION 6 — HOW YOU'LL LEAVE ============ */}
      <section className="cdd-sec cdd-sec-warm">
        <div className="cdd-wrap">
          <h2 className="cdd-h2 cdd-center" data-reveal>How you&rsquo;ll leave</h2>
          <div className="cdd-leave-grid">
            <div className="cdd-leave" data-reveal>
              <h3>Relief</h3>
              <p>The thing you&rsquo;ve been carrying finally has a name, and named things stop running you from the dark.</p>
            </div>
            <div className="cdd-leave" data-reveal>
              <h3>Clarity</h3>
              <p>Not certain about how it all turns out &mdash; clear about the next right move. That&rsquo;s the part that actually gets you going.</p>
            </div>
            <div className="cdd-leave" data-reveal>
              <h3>Surprised at yourself</h3>
              <p>You realize you knew more than you were giving yourself credit for. You didn&rsquo;t need more information. You needed to see what was in the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 7 — ABOUT ============ */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-about">
          <div className="cdd-about-photo" data-reveal>
            {/* Replace with a candid, warm photo of Chi-Chi */}
            <div className="cdd-photo-placeholder"><span>Chi-Chi&rsquo;s photo</span></div>
          </div>
          <div className="cdd-about-text" data-reveal>
            <h2 className="cdd-h2">I&rsquo;m Chi-Chi Jones.</h2>
            <p className="cdd-body">
              I&rsquo;ve spent over fifteen years in corporate, including nearly a decade at one of the
              largest companies in the world. I&rsquo;ve built things on the side of that career. And
              I&rsquo;ve had my own long stretches of knowing exactly what I wanted and not being able
              to make myself move.
            </p>
            <p className="cdd-body">
              I know what it&rsquo;s like to be the person everyone else comes to when they need to
              think something through &mdash; and then go home and circle your own thing for months.
            </p>
            <p className="cdd-body">
              At some point I realized the thing I do without trying &mdash; helping someone see their
              situation from an angle they couldn&rsquo;t reach on their own, the thing where I ask the
              one question nobody else thought to ask and the whole thing cracks open &mdash; that&rsquo;s
              not small. That&rsquo;s the work. So now I do it on purpose, for people who are done going
              in circles.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 8 — IS THIS YOU ============ */}
      <section className="cdd-sec cdd-sec-cream cdd-sec-tight">
        <div className="cdd-wrap cdd-narrow">
          <div className="cdd-fit">
            <div className="cdd-fit-col cdd-fit-yes" data-reveal>
              <h3>This is for you if</h3>
              <ul>
                <li>There&rsquo;s a specific thing you&rsquo;ve been wanting to build, and you&rsquo;ve been at it long enough to know more research isn&rsquo;t the answer.</li>
                <li>You&rsquo;re sharp and self-aware, you&rsquo;ve done some inner work, and you don&rsquo;t need a cheerleader &mdash; you need someone who can actually see what you can&rsquo;t.</li>
                <li>Once you see clearly, you move. You don&rsquo;t need someone holding your hand through every step. You need the sight.</li>
              </ul>
            </div>
            <div className="cdd-fit-col cdd-fit-no" data-reveal>
              <h3>It&rsquo;s probably not for you if</h3>
              <ul>
                <li>You want weekly accountability or someone to build your funnels with you. That&rsquo;s a different thing, and there are good people for it. This is the conversation that gets you unstuck &mdash; the doing is yours.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 9 — OFFER ============ */}
      <section className="cdd-sec cdd-sec-navy">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <h2 className="cdd-h2-navy" data-reveal>One Clarity Deep Dive Session. 75 minutes. Just the two of us.</h2>
          <p className="cdd-body-navy" data-reveal>
            You bring what you&rsquo;ve been stuck on. I help you see what&rsquo;s actually in the way.
            You leave knowing your next move &mdash; with a one-page summary in your inbox the next day.
          </p>
          <div className="cdd-price" data-reveal>$750</div>
          <ul className="cdd-spec" data-reveal>
            <li>75 minutes, one-on-one</li>
            <li>By video</li>
            <li>One-page summary the next day</li>
            <li>No program &middot; no subscription</li>
          </ul>
          <p className="cdd-body-navy" data-reveal>
            That&rsquo;s real money, and I won&rsquo;t pretend otherwise. But sit with this for a second:
            how long have you been carrying this idea? A year? Two? What has all that circling already
            cost you &mdash; in time, in energy, in the quiet weight of it just sitting there undone?
          </p>
          <p className="cdd-body-navy" data-reveal>
            One conversation that finally moves it is one of the most practical things you can buy.
          </p>
          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-gold" onClick={scrollToBook}>
              Book Your Clarity Deep Dive
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 10 — FAQ ============ */}
      <section className="cdd-sec cdd-sec-cream">
        <div className="cdd-wrap cdd-narrow">
          <h2 className="cdd-h2 cdd-center" data-reveal>Questions</h2>
          <div className="cdd-faq" data-reveal>
            {[
              {
                q: "Is this therapy?",
                a: "No. We're not spending our time in your past. We're looking at what's happening right now, why you're stuck, and what to do about it.",
              },
              {
                q: "How is this different from talking to a smart friend?",
                a: "Your friends are inside the situation with you. They have history, opinions, and a stake in protecting you. I come in with none of that. I just see what's there.",
              },
              {
                q: "What if my situation is complicated?",
                a: "It usually feels that way from the inside. Most of the time there's one thing underneath holding the whole mess in place. We find it.",
              },
              {
                q: "Will you tell me what business to start?",
                a: "No — and you don't actually need that. You already have the idea. What you need is to see what's stopping you from moving on it. That's what we do.",
              },
              {
                q: "What if I'm not sure I'm \u201Cstuck enough\u201D for this?",
                a: "If you've been circling the same thing for more than a few months and it still hasn't moved, you're stuck enough. That hesitation you're feeling right now is worth paying attention to.",
              },
              {
                q: "What's your cancellation policy?",
                a: "Your session is reserved just for you. You can reschedule for free up to 24 hours before. If you cancel at least 48 hours in advance, you'll get a full refund; within 48 hours the session is non-refundable, but I'll gladly reschedule you once. And if we complete our session and you feel it didn't give you real clarity, tell me by the end of our call and I'll refund you in full. I only want you paying for this if it actually helps.",
              },
            ].map((f, i) => (
              <details className="cdd-faq-item" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOK ============ */}
      <section id="book" className="cdd-sec cdd-sec-cream cdd-book">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <p className="cdd-eyebrow" data-reveal>Your Clarity Deep Dive</p>
          <h2 className="cdd-h2" data-reveal>Pick a time. Answer a few questions. I&rsquo;ll see you there.</h2>
          <p className="cdd-body cdd-center" data-reveal>
            75 minutes, one-on-one, $750. You&rsquo;ll choose your time and complete your booking right here.
          </p>
          <div className="cdd-cal" data-reveal>
            <div
              className="calendly-inline-widget"
              data-url={CAL_URL}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </div>
      </section>

      {/* ============ CLOSE ============ */}
      <section className="cdd-sec cdd-sec-cream cdd-close">
        <div className="cdd-wrap cdd-narrow cdd-center">
          <p className="cdd-body" data-reveal>If you&rsquo;ve read this far, something here was about you.</p>
          <p className="cdd-body" data-reveal>
            You already know what you want to build. You&rsquo;ve known for a while. The question was
            never <em>what</em>. It&rsquo;s why you keep stopping right before you start.
          </p>
          <p className="cdd-body" data-reveal>That&rsquo;s what we&rsquo;ll figure out. In one conversation.</p>
          <blockquote className="cdd-pull cdd-center" data-reveal>
            &ldquo;Wow. I never thought about it that way. I finally know what to do.&rdquo;
          </blockquote>
          <p className="cdd-body" data-reveal>That&rsquo;s what I want for you.</p>
          <div className="cdd-cta-row" data-reveal>
            <a href="#book" className="cdd-btn cdd-btn-gold" onClick={scrollToBook}>
              Book Your Clarity Deep Dive
            </a>
            <p className="cdd-microcopy">Questions first? chi-chi@idealclarity.com</p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="cdd-footer">
        <div className="cdd-wrap cdd-center">
          <p>&copy; 2026 Ideal Clarity Solutions. All rights reserved.</p>
          <p className="cdd-foot-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a href="https://instagram.com/idealclarity" target="_blank" rel="noopener noreferrer">@idealclarity</a>
            <a href="https://www.idealclarity.com/privacy">Privacy Policy</a>
          </p>
        </div>
      </footer>

      {/* ============ STICKY MOBILE BAR ============ */}
      <div className={`cdd-sticky ${showBar ? "is-on" : ""}`}>
        <span>The Clarity Deep Dive</span>
        <a href="#book" className="cdd-btn cdd-btn-gold cdd-btn-sm" onClick={scrollToBook}>Book your session</a>
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
.cdd-narrow-text{max-width:640px; margin-left:auto; margin-right:auto;}
.cdd-center{text-align:center;}

[data-reveal]{opacity:0; transform:translateY(16px); transition:opacity .7s ease, transform .7s ease;}
[data-reveal].is-visible{opacity:1; transform:none;}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1; transform:none; transition:none;}}

/* Type */
.cdd-eyebrow{font-family:'Poppins','Helvetica Neue',Arial,sans-serif; text-transform:uppercase;
  letter-spacing:.18em; font-size:.72rem; font-weight:600; color:var(--gold-deep); margin:0 0 1.2rem;}
.cdd-h1{font-size:clamp(2.4rem,6vw,4rem); line-height:1.08; font-weight:600; color:var(--navy);
  margin:0 0 1.5rem; letter-spacing:-.01em;}
.cdd-h1 em{font-style:italic; color:var(--gold-deep);}
.cdd-h2{font-size:clamp(1.7rem,3.5vw,2.5rem); line-height:1.15; font-weight:600; color:var(--navy); margin:0 0 1.4rem;}
.cdd-h2 em{font-style:italic; color:var(--gold-deep);}
.cdd-sub{font-size:clamp(1.05rem,1.8vw,1.3rem); line-height:1.6; font-style:italic; color:var(--char);
  max-width:620px; margin:0 0 2.4rem;}
.cdd-body{font-size:1.12rem; line-height:1.75; margin:0 0 1.3rem; color:var(--char);}
.cdd-pull{font-size:clamp(1.3rem,2.4vw,1.7rem); line-height:1.4; font-style:italic; color:var(--navy);
  border-left:3px solid var(--gold); padding:.2rem 0 .2rem 1.4rem; margin:2.4rem 0; font-weight:500;}
.cdd-pull.cdd-center{border-left:none; padding:0; max-width:640px; margin:2.4rem auto;}

/* Buttons */
.cdd-btn{display:inline-block; font-family:'Poppins','Helvetica Neue',Arial,sans-serif; font-weight:600;
  font-size:1rem; letter-spacing:.01em; padding:1.05rem 2.2rem; border-radius:6px; text-decoration:none;
  cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; border:none;}
.cdd-btn-gold{background:var(--gold); color:#fff; box-shadow:0 6px 20px rgba(184,147,95,.35);}
.cdd-btn-gold:hover{transform:translateY(-2px); box-shadow:0 10px 28px rgba(184,147,95,.45);}
.cdd-btn-cream{background:var(--cream); color:var(--navy);}
.cdd-btn-cream:hover{transform:translateY(-2px);}
.cdd-btn-sm{padding:.7rem 1.2rem; font-size:.9rem;}
.cdd-cta-row{margin-top:2rem;}
.cdd-microcopy{font-family:'Poppins',sans-serif; font-size:.85rem; color:var(--gold-deep); margin:1rem 0 0; letter-spacing:.02em;}

/* Hero */
.cdd-hero{padding:clamp(3.5rem,8vw,6rem) 0 clamp(3rem,6vw,5rem); background:
  radial-gradient(120% 80% at 80% -10%, rgba(184,147,95,.10), transparent 60%), var(--cream);}
.cdd-video{margin:2.6rem 0 .8rem; border-radius:12px; overflow:hidden; box-shadow:0 24px 60px rgba(26,35,50,.18);
  aspect-ratio:16/9; background:var(--navy);}
.cdd-video-placeholder{width:100%; height:100%; display:flex; flex-direction:column; gap:.4rem;
  align-items:center; justify-content:center; color:#cdd3dd; text-align:center; padding:1rem;}
.cdd-video-placeholder span{font-family:'Poppins',sans-serif; font-size:1rem; letter-spacing:.05em;}
.cdd-video-placeholder small{font-family:'Poppins',sans-serif; font-size:.78rem; opacity:.6;}
.cdd-video-cap{font-style:italic; color:#6b6b6b; font-size:.98rem; margin:0;}

/* Sections */
.cdd-sec{padding:clamp(3.5rem,7vw,6rem) 0;}
.cdd-sec-tight{padding:clamp(2rem,4vw,3.5rem) 0;}
.cdd-sec-cream{background:var(--cream);}
.cdd-sec-warm{background:var(--warm);}
.cdd-sec-navy{background:var(--navy);}
.cdd-intro-navy{color:#aeb6c4; font-size:1.05rem; line-height:1.7; margin:0 0 2rem; font-style:italic;}
.cdd-h2-navy{font-size:clamp(1.7rem,3.6vw,2.6rem); line-height:1.2; font-weight:600; color:var(--cream-light); margin:0 0 1.4rem;}
.cdd-h2-navy em{font-style:italic; color:var(--gold);}
.cdd-body-navy{font-size:1.12rem; line-height:1.75; color:#d4d9e2; margin:0 0 1.3rem;}
.cdd-body-navy em{color:var(--gold); font-style:italic;}
.cdd-pull-navy{color:var(--cream-light); border-left-color:var(--gold);}

/* Formula graphic */
.cdd-formula{display:flex; align-items:center; gap:1.5rem; margin:1rem 0 2.6rem; flex-wrap:wrap; justify-content:center;}
.cdd-formula-part{display:flex; flex-direction:column; align-items:center; gap:.3rem; min-width:120px;}
.cdd-formula-num{font-size:clamp(3rem,8vw,5rem); font-weight:700; color:var(--gold); line-height:1;}
.cdd-formula-num.cdd-dim{color:#5a6478;}
.cdd-formula-label{font-family:'Poppins',sans-serif; font-size:.8rem; text-transform:uppercase;
  letter-spacing:.1em; color:#aeb6c4; text-align:center; max-width:160px;}
.cdd-formula-bar{flex:1 1 200px; height:14px; border-radius:8px; overflow:hidden; display:flex; min-width:160px; background:#2a3548;}
.cdd-bar-strategy{width:10%; background:#5a6478;}
.cdd-bar-self{width:90%; background:var(--gold);}

/* Cards (the 90%) */
.cdd-cards{display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; margin:2.5rem 0;}
.cdd-card{background:var(--cream-light); border:1px solid rgba(184,147,95,.25); border-radius:12px;
  padding:2rem 1.8rem; box-shadow:0 4px 18px rgba(26,35,50,.04);}
.cdd-card-num{font-family:'Poppins',sans-serif; font-weight:700; color:var(--gold); font-size:1rem; letter-spacing:.08em;}
.cdd-card-title{font-size:1.3rem; color:var(--navy); margin:.5rem 0 .7rem; font-weight:600;}
.cdd-card-body{font-size:1.02rem; line-height:1.6; margin:0; color:var(--char);}

/* Proof */
.cdd-stat{text-align:center; margin:1.5rem auto 2.8rem; max-width:620px;}
.cdd-stat-num{display:block; font-size:clamp(4rem,12vw,7rem); font-weight:700; color:var(--gold); line-height:1;}
.cdd-stat-label{display:block; font-style:italic; color:var(--navy); font-size:1.1rem; margin-top:.4rem;}
.cdd-testi-feature{background:var(--cream-light); border:1px solid rgba(184,147,95,.3); border-radius:14px;
  padding:2.4rem; max-width:760px; margin:0 auto 1.6rem; box-shadow:0 8px 30px rgba(26,35,50,.06);}
.cdd-testi-feature p{font-size:1.18rem; line-height:1.65; font-style:italic; color:var(--navy); margin:0 0 1.1rem;}
.cdd-testi-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; max-width:760px; margin:0 auto;}
.cdd-testi{background:var(--cream-light); border:1px solid rgba(184,147,95,.2); border-radius:12px; padding:1.8rem;}
.cdd-testi p{font-size:1rem; line-height:1.6; font-style:italic; color:var(--char); margin:0 0 .9rem;}
.cdd-testi-name{font-family:'Poppins',sans-serif; font-size:.85rem; font-weight:600; color:var(--gold-deep); letter-spacing:.02em;}

/* Steps */
.cdd-steps{display:flex; flex-direction:column; gap:1.6rem; margin:1.5rem 0;}
.cdd-step{border-left:2px solid var(--gold); padding-left:1.4rem;}
.cdd-step-num{display:block; font-family:'Poppins',sans-serif; font-weight:600; text-transform:uppercase;
  letter-spacing:.1em; font-size:.78rem; color:var(--gold-deep); margin-bottom:.5rem;}
.cdd-step p{font-size:1.08rem; line-height:1.7; margin:0; color:var(--char);}
.cdd-step em{font-style:italic; color:var(--navy);}

/* Leave grid */
.cdd-leave-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; margin-top:2rem;}
.cdd-leave{text-align:center; padding:1rem;}
.cdd-leave h3{font-size:1.35rem; color:var(--gold-deep); margin:0 0 .7rem; font-weight:600; font-style:italic;}
.cdd-leave p{font-size:1.02rem; line-height:1.6; margin:0;}

/* About */
.cdd-about{display:grid; grid-template-columns:0.8fr 1.2fr; gap:3rem; align-items:center;}
.cdd-about-photo{width:100%;}
.cdd-photo-placeholder{aspect-ratio:4/5; border-radius:14px; background:linear-gradient(135deg,#e8ddca,#d8c4a8);
  display:flex; align-items:center; justify-content:center; box-shadow:0 14px 40px rgba(26,35,50,.12);}
.cdd-photo-placeholder span{font-family:'Poppins',sans-serif; color:#8a7a5c; font-size:.9rem;}

/* Fit */
.cdd-fit{display:grid; grid-template-columns:1fr 1fr; gap:1.6rem;}
.cdd-fit-col{padding:2rem 1.8rem; border-radius:12px;}
.cdd-fit-yes{background:var(--cream-light); border:1px solid rgba(184,147,95,.3);}
.cdd-fit-no{background:rgba(26,35,50,.03); border:1px solid rgba(26,35,50,.1);}
.cdd-fit-col h3{font-size:1.2rem; color:var(--navy); margin:0 0 1rem; font-weight:600;}
.cdd-fit-col ul{margin:0; padding-left:1.1rem;}
.cdd-fit-col li{font-size:1.02rem; line-height:1.6; margin-bottom:.9rem; color:var(--char);}

/* Offer */
.cdd-price{font-size:clamp(3rem,9vw,5rem); font-weight:700; color:var(--gold); line-height:1; margin:1.4rem 0;}
.cdd-spec{list-style:none; padding:0; margin:0 auto 2rem; display:flex; flex-wrap:wrap; gap:.7rem 1.6rem; justify-content:center;}
.cdd-spec li{font-family:'Poppins',sans-serif; font-size:.92rem; color:#d4d9e2; position:relative; padding-left:1.1rem;}
.cdd-spec li::before{content:'\\2666'; color:var(--gold); position:absolute; left:0;}

/* FAQ */
.cdd-faq{margin-top:2rem;}
.cdd-faq-item{border-bottom:1px solid rgba(26,35,50,.12); padding:1.2rem 0;}
.cdd-faq-item summary{font-family:'Poppins',sans-serif; font-weight:600; font-size:1.08rem; color:var(--navy);
  cursor:pointer; list-style:none; position:relative; padding-right:2rem;}
.cdd-faq-item summary::-webkit-details-marker{display:none;}
.cdd-faq-item summary::after{content:'+'; position:absolute; right:0; top:-2px; font-size:1.5rem; color:var(--gold); font-weight:400;}
.cdd-faq-item[open] summary::after{content:'\\2013';}
.cdd-faq-item p{font-size:1.05rem; line-height:1.7; margin:1rem 0 0; color:var(--char);}

/* Book */
.cdd-cal{margin-top:2.2rem; background:var(--cream-light); border:1px solid rgba(184,147,95,.25);
  border-radius:14px; padding:12px; box-shadow:0 10px 36px rgba(26,35,50,.08);}

/* Footer */
.cdd-footer{background:var(--navy); color:#aeb6c4; padding:3rem 0; font-family:'Poppins',sans-serif; font-size:.88rem;}
.cdd-footer p{margin:.4rem 0;}
.cdd-foot-links{display:flex; gap:1.6rem; justify-content:center; flex-wrap:wrap;}
.cdd-foot-links a{color:var(--gold); text-decoration:none;}
.cdd-foot-links a:hover{text-decoration:underline;}

/* Sticky bar */
.cdd-sticky{position:fixed; bottom:0; left:0; right:0; background:var(--navy); color:#fff;
  display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:.8rem 1.2rem;
  transform:translateY(110%); transition:transform .3s ease; z-index:50; box-shadow:0 -6px 24px rgba(0,0,0,.2);}
.cdd-sticky.is-on{transform:translateY(0);}
.cdd-sticky span{font-family:'Poppins',sans-serif; font-weight:600; font-size:.95rem;}

/* Responsive */
@media (max-width:780px){
  .cdd-cards{grid-template-columns:1fr;}
  .cdd-testi-grid{grid-template-columns:1fr;}
  .cdd-leave-grid{grid-template-columns:1fr; gap:1.2rem;}
  .cdd-about{grid-template-columns:1fr; gap:2rem;}
  .cdd-about-photo{max-width:320px; margin:0 auto;}
  .cdd-fit{grid-template-columns:1fr;}
}
@media (min-width:781px){
  .cdd-sticky{display:none;}
}
`;
