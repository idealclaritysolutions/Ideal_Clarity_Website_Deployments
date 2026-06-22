"use client";

import { useEffect, useState } from "react";

/**
 * From Idea to First Offer — VSL Landing Page
 * Ideal Clarity Solutions
 * Route: app/start-your-business/page.tsx (URL stays /start-your-business)
 * Self-contained: no Tailwind / design-system dependency.
 * Built around The Breakthrough Protocol (3 blocks: Validation / Visibility / Commitment).
 * FERAL structure: Feel seen -> Enlighten -> Reveal -> Announce -> Let them see what good looks like.
 */

const CAL_URL = "https://calendly.com/idealclaritysolutions/30min";
const EBOOK_STRIPE = "https://buy.stripe.com/3cIdRae6KdDr8aPaLNdAk0r";
const PROGRAM_STRIPE = "https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q";
const ASSESSMENT_URL = "https://www.idealclarity.com/resources/10-questions";

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

function useBarFill() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>("[data-bar]");
    if (!bar) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { bar.classList.add("is-filled"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-filled"); io.unobserve(e.target); }
      }),
      { threshold: 0.4 }
    );
    io.observe(bar);
    return () => io.disconnect();
  }, []);
}

function scrollTo(id: string, e?: React.MouseEvent) {
  e?.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BlockIcon({ name }: { name: string }) {
  const common = {
    width: 26, height: 26, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "validation") {
    // lucide: badge-check — needing external permission/proof
    return (
      <svg {...common}>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (name === "visibility") {
    // lucide: eye-off — fear of being seen
    return (
      <svg {...common}>
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
      </svg>
    );
  }
  // commitment — lucide: git-fork (branching, never choosing a path)
  return (
    <svg {...common}>
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

export default function StartYourBusinessPage() {
  useReveal();
  useBarFill();
  useBarFill();

  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const target = document.getElementById("mirror-end");
    if (!target) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setShowBar(e.isIntersecting || e.boundingClientRect.top < 0)),
      { threshold: 0 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div className="syb-root">
      <style>{CSS}</style>

      {/* HERO — FEEL SEEN */}
      <header className="syb-hero">
        <div className="syb-wrap">
          <p className="syb-eyebrow syb-center" data-reveal>
            For senior corporate professionals with a business they keep meaning to start
          </p>
          <h1 className="syb-h1 syb-center" data-reveal>
            You&rsquo;ve spent decades building someone else&rsquo;s company.
            <em> The one you keep meaning to build is still waiting.</em>
          </h1>
          <p className="syb-sub syb-center" data-reveal>
            You&rsquo;re good at what you do. You&rsquo;ve led teams, made the hard calls, earned the
            title. And quietly, for years now, you&rsquo;ve been telling yourself that one of these days
            you&rsquo;ll finally start the thing that&rsquo;s actually yours.
          </p>
          <div className="syb-hero-urgent" data-reveal>
            <p>
              But &ldquo;one of these days&rdquo; has a way of becoming ten years. And the quiet fear you
              don&rsquo;t say out loud isn&rsquo;t that you&rsquo;ll fail &mdash; it&rsquo;s that
              you&rsquo;ll reach the end of your career, and then your life, with the best thing you had
              in you <em>still unbuilt</em>.
            </p>
          </div>
          <p className="syb-watch syb-center" data-reveal>
            Below, I&rsquo;ll show you the three blocks that keep capable, accomplished people exactly
            where you are &mdash; and which one has been quietly running your decisions.
          </p>
          <div className="syb-cta-row syb-center" data-reveal>
            <a href="#mirror" className="syb-btn syb-btn-ghost syb-btn-lg" onClick={(e) => scrollTo("mirror", e)}>
              Walk me through it &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* MIRROR — FEEL SEEN + ENLIGHTEN */}
      <section id="mirror" className="syb-sec syb-sec-cream syb-sec-mirror">
        <div className="syb-wrap syb-narrow">
          <h2 className="syb-h2" data-reveal>First, let me describe the last few years &mdash; see how much of this sounds like you.</h2>
          <p className="syb-body" data-reveal>
            You&rsquo;ve thought about this business for longer than you&rsquo;d admit out loud.
            It comes up on the drive home. On Sunday evenings, when the week ahead feels heavier than
            it should for someone as established as you. You&rsquo;ve researched it, sketched it on
            napkins, maybe bought the domain. You&rsquo;ve told one or two people you trust.
          </p>
          <p className="syb-body" data-reveal>And here you are. Still thinking about it.</p>
          <p className="syb-body" data-reveal>
            What makes it sharper now is the math you don&rsquo;t say out loud. You&rsquo;ve given
            twenty, twenty-five years to building other people&rsquo;s companies. You&rsquo;re good at
            it &mdash; that&rsquo;s the problem. The competence is comfortable. And every year you stay
            comfortable is a year off the window you have left to build something that&rsquo;s actually
            yours.
          </p>
          <p className="syb-body" data-reveal>
            You&rsquo;ve watched people you started out with retire having only ever worked someone
            else&rsquo;s plan. Some of them are at peace with it. Some carry a quiet ache they&rsquo;d
            never name at dinner &mdash; the sense that they had something more in them and let the
            years decide for them. You know which group you want to be in. You also know that wanting it
            and doing it have been two different things for a long time now.
          </p>
          <blockquote className="syb-pull" data-reveal>
            You don&rsquo;t have a planning problem. You&rsquo;ve done enough planning for three
            businesses. What you have is something underneath the planning &mdash; and you can&rsquo;t
            see it from where you&rsquo;re standing.
          </blockquote>
        </div>
      </section>

      {/* REVEAL — the three blocks in depth */}
      <section id="blocks" className="syb-sec syb-sec-cream syb-sec-blocks">
        <div className="syb-wrap">
          <div className="syb-divider" id="mirror-end" data-reveal aria-hidden="true">
            <span></span><span className="syb-divider-dot"></span><span></span>
          </div>
          <p className="syb-eyebrow syb-center" data-reveal>What&rsquo;s actually in your way</p>
          <p className="syb-body syb-center syb-narrow-text" data-reveal>
            That thing underneath the planning &mdash; the one you can&rsquo;t see from the inside
            &mdash; isn&rsquo;t vague. It&rsquo;s specific, and for accomplished people it&rsquo;s almost
            always one of these three. As you read, notice which one you start explaining away.
          </p>
          <h2 className="syb-h2 syb-center" data-reveal>The three blocks</h2>
          <div className="syb-cards">

            <div className="syb-card" data-reveal>
              <div className="syb-card-head">
                <span className="syb-card-num">01</span>
                <span className="syb-card-icon"><BlockIcon name="validation" /></span>
              </div>
              <h3 className="syb-card-title">The Validation Block</h3>
              <p className="syb-card-body">
                You&rsquo;re waiting to feel <em>sure</em> before you move. Sure the idea is good
                enough. Sure the market wants it. Sure you won&rsquo;t look foolish to the people whose
                opinion you&rsquo;ve spent a career earning.
              </p>
              <p className="syb-card-body">
                So you research one more competitor. Ask one more trusted contact what they think. Take
                one more course to feel qualified. It looks like diligence &mdash; the same rigor that
                made you successful. But this time it&rsquo;s doing something else: outsourcing a
                decision only you can make.
              </p>
              <p className="syb-card-body">
                The certainty you&rsquo;re waiting for doesn&rsquo;t arrive before you start. It&rsquo;s
                on the other side of starting. And the longer you wait for permission, the more the
                idea quietly becomes &ldquo;something I looked into once.&rdquo;
              </p>
            </div>

            <div className="syb-card" data-reveal>
              <div className="syb-card-head">
                <span className="syb-card-num">02</span>
                <span className="syb-card-icon"><BlockIcon name="visibility" /></span>
              </div>
              <h3 className="syb-card-title">The Visibility Block</h3>
              <p className="syb-card-body">
                You&rsquo;re not afraid of the work. You&rsquo;re afraid of being <em>seen</em> doing it
                &mdash; visibly trying, visibly a beginner again &mdash; in front of the colleagues,
                peers, and direct reports who know you as the established one.
              </p>
              <p className="syb-card-body">
                So you keep it quiet. You don&rsquo;t post. You don&rsquo;t announce. You tell yourself
                you&rsquo;ll go public once it&rsquo;s polished, once it&rsquo;s undeniable, once you
                can&rsquo;t be questioned. After thirty years of being the expert in the room, going
                back to &ldquo;new and unproven&rdquo; feels like a loss of something you worked hard
                for.
              </p>
              <p className="syb-card-body">
                But a business no one can see is a business that doesn&rsquo;t exist yet. The exposure
                you&rsquo;re avoiding is the exact thing that turns an idea into an offer someone can
                actually say yes to.
              </p>
            </div>

            <div className="syb-card" id="block-three" data-reveal>
              <div className="syb-card-head">
                <span className="syb-card-num">03</span>
                <span className="syb-card-icon"><BlockIcon name="commitment" /></span>
              </div>
              <h3 className="syb-card-title">The Commitment Block</h3>
              <p className="syb-card-body">
                You&rsquo;ve kept your options open your whole career, because options felt like safety
                &mdash; the next role, the better offer, the door you didn&rsquo;t close. That instinct
                served you. Now it quietly works against you: committing to <em>one</em> idea means
                admitting this is the thing, and that you&rsquo;re accountable for whether it works.
              </p>
              <p className="syb-card-body">
                So you keep a foot in both worlds. You explore instead of decide. You tell yourself
                you&rsquo;re weighing it carefully &mdash; the same prudence that made you a good leader.
                But there&rsquo;s a difference between weighing a decision and avoiding one, and somewhere
                inside you know which this has become.
              </p>
              <p className="syb-card-body">
                Choosing one path means the comfortable safety of &ldquo;I could always&rdquo; is gone.
                That&rsquo;s the real fear &mdash; not failure, but no longer getting to keep the option.
                Yet nothing real gets built from the fence. Commitment isn&rsquo;t the cage. After all
                these years, it&rsquo;s the only door out.
              </p>
            </div>

          </div>
          <div className="syb-discomfort" data-reveal>
            <p>
              If reading those made you a little uncomfortable &mdash; if you caught yourself explaining
              why <em>yours</em> is different &mdash; don&rsquo;t look away.
            </p>
            <p>
              That&rsquo;s the sound of a rationalization being interrupted. And after years of the same
              loop, that discomfort might be the most useful thing that&rsquo;s happened to your idea in
              a long time.
            </p>
          </div>
          <p className="syb-body syb-center syb-narrow-text" data-reveal>
            You can&rsquo;t think your way out of these, because they aren&rsquo;t in your thinking
            &mdash; they&rsquo;re underneath it. But the moment someone names the one that&rsquo;s been
            running your decisions, removes the belief behind it, and hands you the one move that breaks
            the pattern, everything shifts. That&rsquo;s exactly what The Breakthrough Protocol does.
          </p>
        </div>
      </section>

      {/* PROOF under blocks — Peace */}
      <section className="syb-sec syb-sec-cream syb-sec-tight">
        <div className="syb-wrap syb-narrow">
          <p className="syb-eyebrow syb-center" data-reveal>From someone who was exactly here</p>
          <div className="syb-testi-feature syb-testi-gold" data-reveal>
            <span className="syb-quote-mark" aria-hidden="true">&ldquo;</span>
            <p>
              Before reaching out to Ideal Clarity, I felt overwhelmed by everything involved
              in starting and growing a business. There was so much information, so many decisions to
              make, and it was hard to know where to focus my time and energy. Ideal Clarity helped
              turn that uncertainty into a clear, actionable path forward. Chi-Chi took the time to
              understand my goals, asked thoughtful questions, and provided practical guidance tailored
              to my situation. If you are looking for clarity, accountability, and experienced guidance,
              I highly recommend Ideal Clarity.
            </p>
            <span className="syb-testi-name">&mdash; Peace</span>
          </div>
        </div>
      </section>

      {/* ENLIGHTEN — why this is the hard part */}
      <section className="syb-sec syb-sec-navy">
        <div className="syb-wrap syb-narrow">
          <p className="syb-intro-navy" data-reveal>
            Here&rsquo;s why a person as capable as you stays stuck on this, of all things:
          </p>
          <p className="syb-h2-navy" data-reveal>
            The reason you haven&rsquo;t started isn&rsquo;t a lack of <em>information</em>,
            <em> time</em>, or <em>ability</em>. You have all three in abundance.
          </p>
          <div className="syb-formula" data-reveal>
            <div className="syb-formula-row">
              <div className="syb-formula-end syb-formula-end-left">
                <span className="syb-formula-num syb-dim">10%</span>
                <span className="syb-formula-label">Strategy</span>
              </div>
              <div className="syb-formula-bar" data-bar aria-hidden="true">
                <span className="syb-bar-strategy" />
                <span className="syb-bar-self" />
              </div>
              <div className="syb-formula-end syb-formula-end-right">
                <span className="syb-formula-num">90%</span>
                <span className="syb-formula-label">Getting out of your own way</span>
              </div>
            </div>
          </div>
          <p className="syb-body-navy" data-reveal>
            Starting the business you&rsquo;ve been circling is <em>10% strategy</em> and{" "}
            <em>90% getting out of your own way.</em> The blocks above are that 90%. You&rsquo;ve poured
            years into the 10% &mdash; more research, another plan, one more course &mdash; and wondered
            why you&rsquo;re still standing in the same place.
          </p>
          <p className="syb-body-navy" data-reveal>
            That&rsquo;s the part that confuses you most. You&rsquo;ve solved harder problems than this
            at work. You&rsquo;ve launched products, turned around teams, made decisions with far less
            certainty than you have here. So why does <em>this</em> &mdash; the thing you actually want
            &mdash; keep stalling?
          </p>
          <p className="syb-body-navy" data-reveal>
            Because every &ldquo;I just need to figure out X first&rdquo; is doing a quiet job for you.
            It keeps you safely busy. It feels like progress. And it protects you from the one thing
            your whole career has taught you to avoid: being visibly unsure of yourself in front of
            people who know you as the one who has it together. Meanwhile the calendar keeps turning,
            and the 90% never gets touched.
          </p>
          <blockquote className="syb-pull syb-pull-navy" data-reveal>
            The block isn&rsquo;t in your plan. It&rsquo;s in you. And until someone names it,
            you&rsquo;ll keep solving the wrong problem beautifully &mdash; for another year, and the
            one after that.
          </blockquote>
        </div>
      </section>

      {/* ANNOUNCE — choose your path */}
      <section id="paths" className="syb-sec syb-sec-warm">
        <div className="syb-wrap">
          <p className="syb-eyebrow syb-center" data-reveal>Choose your path forward</p>
          <h2 className="syb-h2 syb-center" data-reveal>Three ways to get unstuck</h2>
          <p className="syb-body syb-center syb-narrow-text" data-reveal>
            Whether you want to figure it out yourself or work through it with me directly,
            there&rsquo;s a path that fits where you are right now.
          </p>
          <div className="syb-paths">

            <div className="syb-path" data-reveal>
              <span className="syb-path-tag">Free</span>
              <span className="syb-path-kicker">Self-discovery</span>
              <h3 className="syb-path-title">Take the 2-minute assessment</h3>
              <p className="syb-path-desc">
                Find out which of the three blocks is keeping you stuck. Instant results, zero fluff.
              </p>
              <ul className="syb-path-list">
                <li>Identify your specific block</li>
                <li>Get personalized insight</li>
                <li>Instant results</li>
              </ul>
              <a href={ASSESSMENT_URL} className="syb-btn syb-btn-gold syb-btn-full">Start free assessment</a>
            </div>

            <div className="syb-path" data-reveal>
              <span className="syb-path-tag">$27</span>
              <span className="syb-path-kicker">DIY roadmap</span>
              <h3 className="syb-path-title">Get the complete playbook</h3>
              <p className="syb-path-desc">
                My exact system for building your business while keeping your paycheck. No coaching
                required &mdash; the real-time playbook, delivered the moment you buy.
              </p>
              <ul className="syb-path-list">
                <li>36-page tactical guide</li>
                <li>My daily schedule, outreach scripts &amp; tech stack</li>
                <li>Instant access after checkout</li>
              </ul>
              <a href={EBOOK_STRIPE} className="syb-btn syb-btn-gold syb-btn-full">Get instant access &mdash; $27</a>
            </div>

            <div className="syb-path syb-path-feature" data-reveal>
              <span className="syb-path-flag">Best results &middot; most complete</span>
              <span className="syb-path-tag">The Breakthrough</span>
              <span className="syb-path-kicker">Done-with-you &middot; 1-on-1</span>
              <h3 className="syb-path-title">Remove the block. Make your first offers.</h3>
              <p className="syb-path-desc">
                Four weeks, one-on-one, to find and remove <em>your</em> specific block and get you
                making your first ten offers to real people &mdash; while still employed.
              </p>
              <ul className="syb-path-list">
                <li>The clarity of the assessment &mdash; done <em>with</em> you, not by a quiz</li>
                <li>Every tactic in the playbook &mdash; applied to your situation</li>
                <li>Your personalized Breakthrough Protocol &amp; weekly accountability</li>
                <li>Direct access to me the whole way through</li>
              </ul>
              <a href={PROGRAM_STRIPE} className="syb-btn syb-btn-gold syb-btn-full">Enroll now &mdash; start this week &rarr;</a>
              <a href={CAL_URL} className="syb-btn syb-btn-ghost syb-btn-full syb-btn-stack">Book a free strategy call first</a>
            </div>

          </div>
          <p className="syb-paths-foot" data-reveal>
            Not sure which is right for you? Start with the free assessment &mdash; it takes two minutes.
          </p>
        </div>
      </section>

      {/* LET THEM SEE WHAT GOOD LOOKS LIKE */}
      <section className="syb-sec syb-sec-cream">
        <div className="syb-wrap syb-narrow">
          <h2 className="syb-h2 syb-center" data-reveal>What changes once the block comes off</h2>
          <p className="syb-body syb-center" data-reveal>
            Not a burst of motivation that fades by Monday. Specific, visible change &mdash; fast:
          </p>
          <div className="syb-leave-list">
            <div className="syb-leave-item" data-reveal>
              <span className="syb-leave-num">1</span>
              <div>
                <h3>You&rsquo;ll officially be in business.</h3>
                <p>Within a week, you make the first real offer &mdash; to an actual person, for actual
                money. Not more research, not another plan. The thing you&rsquo;ve circled for years
                finally exists in the world. Whether they say yes or no almost doesn&rsquo;t matter; what
                matters is you&rsquo;ve crossed the line from &ldquo;thinking about it&rdquo; to <em>in
                it</em>. That single act rewires how you see yourself.</p>
              </div>
            </div>
            <div className="syb-leave-item" data-reveal>
              <span className="syb-leave-num">2</span>
              <div>
                <h3>You&rsquo;ll have proof instead of theories.</h3>
                <p>Within a month: real conversations, real feedback, maybe your first paying client. You
                stop wondering &ldquo;would this even work?&rdquo; because you have evidence now, not
                guesses. The thing that lived only in your head is alive in the world &mdash; and you can
                see exactly what to do next instead of imagining it.</p>
              </div>
            </div>
            <div className="syb-leave-item" data-reveal>
              <span className="syb-leave-num">3</span>
              <div>
                <h3>You&rsquo;ll stop carrying it.</h3>
                <p>This is the one no one tells you about. The unstarted business isn&rsquo;t just a
                to-do &mdash; it&rsquo;s a weight. A low background hum of &ldquo;someday&rdquo; that
                follows you into every Sunday evening. When you finally move, that weight lifts. You
                sleep differently. You&rsquo;re not the person with the someday dream anymore &mdash;
                you&rsquo;re the one building it. A few weeks from now, you won&rsquo;t recognize the
                person who was just reading this page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="syb-sec syb-sec-warm">
        <div className="syb-wrap">
          <p className="syb-kicker syb-center" data-reveal>Real results from real people</p>
          <div className="syb-testi-feature" data-reveal>
            <p>
              &ldquo;I&rsquo;ve started 3 businesses in the last 3 years, and the hardest part was always
              aligning on the path most authentic to me &mdash; not just building another thing someone
              already built. With Chi-Chi, I found my area of genius and unlocked the mental blocks that
              were holding me back from fully monetizing my business in a way that reflects my value.
              I&rsquo;ve 300x&rsquo;d my revenue so far.&rdquo;
            </p>
            <span className="syb-testi-name">&mdash; Lola, Rapid Reinvent Hair Treatment</span>
          </div>
          <div className="syb-testi-grid">
            <div className="syb-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi helped me identify decision-making tools and exercises to clarify my values
                as I weighed some big decisions. Her guidance reframed and clarified my next steps in a
                valuable way. If you have a business decision or operational problem to solve, Ideal
                Clarity can help you find your way.&rdquo;
              </p>
              <span className="syb-testi-name">&mdash; Hannah Bailey, Studio Northwood</span>
            </div>
            <div className="syb-testi" data-reveal>
              <p>
                &ldquo;Chi-Chi is a consummate professional who truly listens and provides expert advice
                tailored to your level of experience. Her breadth of knowledge and thoughtful guidance
                make working with her a great experience.&rdquo;
              </p>
              <span className="syb-testi-name">&mdash; James G.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="syb-sec syb-sec-cream">
        <div className="syb-wrap syb-about">
          <div className="syb-about-photo" data-reveal>
            <img className="syb-photo" src="/chichi.png" alt="Chi-Chi Jones, founder of Ideal Clarity Solutions" />
          </div>
          <div className="syb-about-text" data-reveal>
            <h2 className="syb-h2">I&rsquo;m Chi-Chi Jones.</h2>
            <p className="syb-body">
              I&rsquo;ve spent over fifteen years in corporate leadership, including nearly a decade at
              one of the largest companies in the world. I&rsquo;ve built businesses on the side of that
              career. And I&rsquo;ve had my own long stretches of knowing exactly what I wanted and not
              being able to make myself move on it.
            </p>
            <p className="syb-body">
              For years I was the person people came to when they needed to think something through
              &mdash; the one who could see someone else&rsquo;s situation clearly in minutes. Then
              I&rsquo;d go home and circle my own for months. That gap used to confuse me. Now I
              understand it: no one can see their own block from the inside. That&rsquo;s not a flaw
              &mdash; it&rsquo;s just how being human works.
            </p>
            <p className="syb-body">
              So I made it my work. Not cheerleading, not advice you&rsquo;ve already heard &mdash; but
              the specific skill of seeing the one thing you can&rsquo;t see in yourself, naming it, and
              handing you a way forward. If you&rsquo;ve been circling the same idea for longer than
              you&rsquo;d like to admit, that&rsquo;s exactly what I&rsquo;m here for.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="syb-sec syb-sec-cream syb-sec-tight">
        <div className="syb-wrap syb-narrow">
          <h2 className="syb-h2 syb-center" data-reveal>Common questions</h2>
          <div className="syb-faq" data-reveal>
            {[
              { q: "I've been successful in my career. Isn't it a bit late to start something new?", a: "It's exactly the right time, and you have more raw material than someone half your age \u2014 judgment, a network, capital, credibility. The block was never your age or ability. It's the three patterns above, and those are removable. The only thing that makes it 'too late' is waiting another year to look at them." },
              { q: "Is this therapy?", a: "No. We're not spending our time in your past. We look at what's happening right now, why a capable person keeps stalling on this specific thing, and what to do about it this week." },
              { q: "How is this different from talking to a smart friend or mentor?", a: "Your friends and mentors are inside your world. They have history with you, opinions, and a stake in how you see yourself. I come in with none of that. I just see the block that's there and show it to you plainly." },
              { q: "Will you tell me what business to start?", a: "No \u2014 and you don't actually need that. You already have the idea (or three). What you need is to see what's stopping you from committing to one and moving on it. That's the work." },
              { q: "I'm still employed. Can I really do this without quitting?", a: "Yes \u2014 and for most established professionals, building while employed is the smarter path, not the compromise. The $27 playbook lays out exactly how I do it: the schedule, the stealth-mode tactics, the systems. You don't need to burn anything down to start." },
              { q: "What's the difference between the $27 playbook and the 1-on-1 program?", a: "The playbook is the 'how' \u2014 my exact tactical system, yours to read and apply on your own. The 1-on-1 program is the 'why you specifically aren't moving' \u2014 we find and remove your particular block, then get you making your first ten offers. Many people start with the playbook and the free assessment, then book a call when they're ready to go deeper." },
            ].map((f, i) => (
              <details className="syb-faq-item" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="syb-sec syb-sec-navy syb-close">
        <div className="syb-wrap syb-narrow syb-center">
          <h2 className="syb-h2-navy" data-reveal>You&rsquo;ve been planning long enough.</h2>
          <p className="syb-body-navy" data-reveal>
            You already know what you want to build. The question was never <em>what</em>. It&rsquo;s
            why someone as capable as you keeps stopping right before the start &mdash; and how many
            more years you&rsquo;re willing to let that go unanswered.
          </p>
          <p className="syb-body-navy" data-reveal>
            A year from now you&rsquo;ll be a year older either way. The only question is whether
            you&rsquo;ll be a year into building the thing that&rsquo;s yours &mdash; or a year deeper
            into wishing you had. The window doesn&rsquo;t stay open forever. But today, it&rsquo;s
            still open.
          </p>
          <div className="syb-final-paths" data-reveal>
            <a href={ASSESSMENT_URL} className="syb-btn syb-btn-cream">Take the free assessment</a>
            <a href={CAL_URL} className="syb-btn syb-btn-gold syb-btn-lg">Book your free strategy call</a>
          </div>
          <div className="syb-final-enroll" data-reveal>
            <a href={PROGRAM_STRIPE} className="syb-btn syb-btn-enroll syb-btn-lg">
              Or enroll now &mdash; don&rsquo;t let another year decide for you &rarr;
            </a>
          </div>
          <p className="syb-microcopy" data-reveal>No pitch. No pressure. Just clarity on what&rsquo;s in your way &mdash; before another year decides for you.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="syb-footer">
        <div className="syb-wrap">
          <div className="syb-disclaimer">
            <strong>Important: Earnings and Income Disclaimer</strong>
            <p>All testimonials on this page are from real clients. The results shown are not typical. Their experiences do not guarantee similar results. Individual results may vary based on your skills, experience, motivation, and other unforeseen factors. The Company has not performed studies of the results of its typical clients. Your results may vary.</p>
            <p>Ideal Clarity Solutions is a coaching, advisory, and education company. We do not sell a business opportunity, &ldquo;get rich quick&rdquo; program, or money-making system. We believe that, with education, individuals can be better prepared to make decisions, but we do not guarantee you will make money using our services.</p>
            <p>This site is not part of, nor endorsed by, YouTube, Google, Bing, Meta, or Facebook in any way. FACEBOOK is a trademark of Meta, Inc. YOUTUBE is a trademark of GOOGLE, Inc. BING is a trademark of MICROSOFT, Inc.</p>
          </div>
        </div>
        <div className="syb-wrap syb-center">
          <p>&copy; 2026 Ideal Clarity Solutions LLC. All rights reserved.</p>
          <p className="syb-foot-links">
            <a href="mailto:idealclaritysolutions@gmail.com">Email</a>
            <a href="https://instagram.com/idealclarity" target="_blank" rel="noopener noreferrer">@idealclarity</a>
            <a href="https://www.idealclarity.com/privacy">Privacy Policy</a>
          </p>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div className={`syb-sticky ${showBar ? "is-on" : ""}`}>
        <span>From Idea to First Offer</span>
        <a href="#paths" className="syb-btn syb-btn-gold syb-btn-sm" onClick={(e) => scrollTo("paths", e)}>See your options</a>
      </div>
    </div>
  );
}

const CSS = `
.syb-root{
  --cream:#FAF7F0; --cream-light:#FDF8EE; --navy:#1A2332; --gold:#B8935F;
  --gold-deep:#A07D4C; --terra:#C05A3A; --char:#2D2D2D; --warm:#FCF0E6; --sage:#87A96B;
  --maxw:1080px; --narrow:720px;
  background:var(--cream); color:var(--char);
  font-family:'Lora',Georgia,'Times New Roman',serif;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.syb-root *{box-sizing:border-box;}
.syb-wrap{max-width:var(--maxw); margin:0 auto; padding:0 24px; width:100%;}
.syb-narrow{max-width:var(--narrow);}
.syb-narrow-text{max-width:640px; margin-left:auto; margin-right:auto;}
.syb-center{text-align:center;}
[data-reveal]{opacity:0; transform:translateY(16px); transition:opacity .7s ease, transform .7s ease;}
[data-reveal].is-visible{opacity:1; transform:none;}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1; transform:none; transition:none;}}

.syb-kicker{font-family:'Poppins','Helvetica Neue',Arial,sans-serif; text-transform:uppercase; letter-spacing:.08em; font-size:clamp(1.05rem,2vw,1.3rem); font-weight:700; color:var(--gold-deep); margin:0 0 1.8rem; line-height:1.3;}
.syb-eyebrow{font-family:'Poppins','Helvetica Neue',Arial,sans-serif; text-transform:uppercase; letter-spacing:.16em; font-size:.72rem; font-weight:600; color:var(--gold-deep); margin:0 0 1.2rem;}
.syb-h1{font-size:clamp(2.1rem,5vw,3.5rem); line-height:1.1; font-weight:600; color:var(--navy); margin:0 0 1.4rem; letter-spacing:-.01em;}
.syb-h1 em{font-style:italic; color:var(--gold-deep);}
.syb-h2{font-size:clamp(1.7rem,3.5vw,2.5rem); line-height:1.15; font-weight:600; color:var(--navy); margin:0 0 1.4rem;}
.syb-h2 em{font-style:italic; color:var(--gold-deep);}
.syb-sub{font-size:clamp(1.05rem,1.7vw,1.25rem); line-height:1.6; color:var(--char); max-width:680px; margin:0 auto 1.4rem;}
.syb-hero-urgent{max-width:620px; margin:.5rem auto 2.2rem; padding:1.5rem 1.9rem; background:rgba(192,90,58,.06); border:1px solid rgba(192,90,58,.22); border-left:3px solid var(--terra); border-radius:12px;}
.syb-hero-urgent p{font-size:clamp(1.12rem,1.9vw,1.3rem); line-height:1.55; color:var(--navy); margin:0; font-style:italic;}
.syb-hero-urgent em{font-style:italic; color:var(--terra); font-weight:600;}
.syb-watch{font-size:clamp(1.05rem,1.7vw,1.22rem); line-height:1.6; color:var(--navy); font-weight:600; max-width:700px; margin:0 auto 2.2rem;}
.syb-body{font-size:1.12rem; line-height:1.75; margin:0 0 1.3rem; color:var(--char);}
.syb-body em{font-style:italic; color:var(--gold-deep);}
.syb-pull{font-size:clamp(1.3rem,2.4vw,1.7rem); line-height:1.4; font-style:italic; color:var(--navy); border-left:3px solid var(--gold); padding:.2rem 0 .2rem 1.4rem; margin:2.4rem 0; font-weight:500;}

.syb-btn{display:inline-block; font-family:'Poppins','Helvetica Neue',Arial,sans-serif; font-weight:600; font-size:1rem; letter-spacing:.01em; padding:1.05rem 2.2rem; border-radius:6px; text-decoration:none; cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; border:none; text-align:center;}
.syb-btn-lg{font-size:1.08rem; padding:1.2rem 2.6rem;}
.syb-btn-sm{padding:.7rem 1.2rem; font-size:.9rem;}
.syb-btn-full{display:block; width:100%; margin-top:auto;}
.syb-btn-stack{margin-top:.7rem;}
.syb-btn-gold{background:var(--gold); color:#fff; box-shadow:0 6px 20px rgba(184,147,95,.35);}
.syb-btn-gold:hover{transform:translateY(-2px); box-shadow:0 10px 28px rgba(184,147,95,.45);}
.syb-btn-cream{background:var(--cream); color:var(--navy);}
.syb-btn-cream:hover{transform:translateY(-2px);}
.syb-btn-ghost{background:transparent; color:var(--gold-deep); border:1.5px solid var(--gold); box-shadow:none;}
.syb-btn-ghost:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}
.syb-cta-row{margin-top:2rem;}
.syb-microcopy{font-family:'Poppins',sans-serif; font-size:.85rem; color:var(--gold-deep); margin:1rem 0 0; letter-spacing:.01em;}

.syb-hero{padding:clamp(3rem,7vw,5rem) 0 clamp(2.5rem,5vw,4rem); background:radial-gradient(120% 80% at 80% -10%, rgba(184,147,95,.12), transparent 60%), var(--cream);}

.syb-sec{padding:clamp(3.5rem,7vw,6rem) 0;}
.syb-sec-tight{padding:clamp(2.2rem,4vw,3.5rem) 0;}
.syb-sec-blocks{padding-top:clamp(2rem,4vw,3rem);}
.syb-sec-mirror{padding-bottom:clamp(2rem,4vw,3rem);}
.syb-divider{display:flex; align-items:center; justify-content:center; gap:.7rem; width:160px; margin:0 auto 1.2rem;}
.syb-divider span:first-child,.syb-divider span:last-child{height:1px; width:56px; flex:0 0 auto;}
.syb-divider span:first-child{background:linear-gradient(90deg, transparent, var(--gold));}
.syb-divider span:last-child{background:linear-gradient(90deg, var(--gold), transparent);}
.syb-divider-dot{flex:0 0 auto; width:7px; height:7px; background:var(--gold); transform:rotate(45deg); border-radius:1px;}
.syb-sec-cream{background:var(--cream);}
.syb-sec-warm{background:var(--warm);}
.syb-sec-navy{background:var(--navy);}

.syb-intro-navy{color:#aeb6c4; font-size:1.05rem; line-height:1.7; margin:0 0 2rem; font-style:italic;}
.syb-h2-navy{font-size:clamp(1.7rem,3.6vw,2.6rem); line-height:1.2; font-weight:600; color:var(--cream-light); margin:0 0 1.4rem;}
.syb-h2-navy em{font-style:italic; color:var(--gold);}
.syb-body-navy{font-size:1.12rem; line-height:1.75; color:#d4d9e2; margin:0 0 1.3rem;}
.syb-body-navy em{color:var(--gold); font-style:italic;}
.syb-pull-navy{color:var(--cream-light); border-left-color:var(--gold);}

/* FORMULA */
.syb-formula{margin:1.8rem 0 2.4rem;}
.syb-formula-row{display:flex; align-items:center; gap:1.4rem; justify-content:center;}
.syb-formula-end{display:flex; flex-direction:column; gap:.3rem; flex-shrink:0;}
.syb-formula-end-left{align-items:flex-start;}
.syb-formula-end-right{align-items:flex-end; text-align:right;}
.syb-formula-num{font-weight:700; line-height:1;}
.syb-formula-end-left .syb-formula-num{font-size:clamp(2rem,5vw,2.8rem); color:#5a6478;}
.syb-formula-end-right .syb-formula-num{font-size:clamp(3.2rem,8vw,4.8rem); color:var(--gold);}
.syb-formula-label{font-family:'Poppins',sans-serif; font-size:.72rem; text-transform:uppercase; letter-spacing:.1em; color:#aeb6c4; max-width:140px; line-height:1.3;}
.syb-formula-end-left .syb-formula-label{text-align:left;}
.syb-formula-bar{flex:1 1 auto; max-width:340px; height:14px; border-radius:8px; overflow:hidden; display:flex; background:#2a3548;}
.syb-bar-strategy{width:10%; background:#5a6478; transform:scaleX(0); transform-origin:left; transition:transform 1s ease .1s;}
.syb-bar-self{width:90%; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform 1.1s ease .35s;}
.syb-formula-bar.is-filled .syb-bar-strategy,
.syb-formula-bar.is-filled .syb-bar-self{transform:scaleX(1);}
@media (prefers-reduced-motion: reduce){
  .syb-bar-strategy, .syb-bar-self{transform:scaleX(1); transition:none;}
}

/* CARDS */
.syb-cards{display:flex; flex-direction:column; gap:1.6rem; margin:2.5rem auto; max-width:720px;}
.syb-card{background:var(--cream-light); border:1px solid rgba(184,147,95,.25); border-radius:12px; padding:2.4rem 2.2rem; box-shadow:0 4px 18px rgba(26,35,50,.04);}
.syb-card-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:.3rem;}
.syb-card-icon{color:var(--gold); flex-shrink:0; width:54px; height:54px; border-radius:50%; background:rgba(184,147,95,.1); border:1px solid rgba(184,147,95,.28); display:flex; align-items:center; justify-content:center;}
.syb-card-icon svg{display:block;}
.syb-card-num{font-family:'Poppins',sans-serif; font-weight:700; color:var(--gold); font-size:1rem; letter-spacing:.08em;}
.syb-card-title{font-size:1.5rem; color:var(--navy); margin:.5rem 0 1.1rem; font-weight:600;}
.syb-card-body{font-size:1.08rem; line-height:1.6; margin:0 0 .9rem; color:var(--char);}
.syb-card-body:last-child{margin-bottom:0;}
.syb-card-body em{font-style:italic; color:var(--gold-deep);}

.syb-discomfort{max-width:640px; margin:2.6rem auto 0; padding:1.9rem 2.2rem; background:rgba(192,90,58,.06); border:1px solid rgba(192,90,58,.22); border-radius:14px; text-align:center;}
.syb-discomfort p{font-size:clamp(1.12rem,1.9vw,1.32rem); line-height:1.55; color:var(--navy); margin:0 0 .8rem; font-style:italic;}
.syb-discomfort p:last-child{margin-bottom:0;}
.syb-discomfort em{font-style:italic; color:var(--terra); font-weight:600;}
.syb-cards + .syb-discomfort{margin-top:.4rem;}
.syb-discomfort + .syb-body{margin-top:2.4rem;}

/* PATHS */
.syb-paths{display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin:2.6rem 0 1.5rem; align-items:stretch;}
.syb-path{display:flex; flex-direction:column; background:var(--cream-light); border:1px solid rgba(184,147,95,.28); border-radius:14px; padding:2rem 1.8rem; position:relative; box-shadow:0 6px 22px rgba(26,35,50,.05);}
.syb-path-feature{border:2px solid var(--gold); box-shadow:0 18px 48px rgba(184,147,95,.26); transform:translateY(-6px); background:linear-gradient(180deg, #fffdf8, var(--cream-light));}
.syb-path-flag{position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--gold); color:#fff; font-family:'Poppins',sans-serif; font-size:.7rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; padding:.35rem 1rem; border-radius:20px; white-space:nowrap;}
.syb-path-secondary{display:block; text-align:center; margin-top:.9rem; font-family:'Poppins',sans-serif; font-size:.85rem; color:var(--gold-deep); text-decoration:underline; text-underline-offset:2px;}
.syb-path-secondary:hover{color:var(--gold);}
.syb-path-tag{font-family:'Poppins',sans-serif; font-size:2rem; font-weight:700; color:var(--navy); line-height:1;}
.syb-path-feature .syb-path-tag{font-size:1.5rem;}
.syb-path-kicker{font-family:'Poppins',sans-serif; font-size:.72rem; text-transform:uppercase; letter-spacing:.1em; color:var(--gold-deep); font-weight:600; margin:.4rem 0 .8rem;}
.syb-path-title{font-size:1.32rem; color:var(--navy); margin:0 0 .7rem; font-weight:600; line-height:1.25;}
.syb-path-desc{font-size:1rem; line-height:1.55; color:var(--char); margin:0 0 1.1rem;}
.syb-path-list{list-style:none; padding:0; margin:0 0 1.6rem;}
.syb-path-list li{font-size:.95rem; line-height:1.4; color:var(--char); padding-left:1.4rem; position:relative; margin-bottom:.6rem;}
.syb-path-list li::before{content:''; position:absolute; left:.1rem; top:.18rem; width:.42rem; height:.72rem; border-right:2px solid var(--sage); border-bottom:2px solid var(--sage); transform:rotate(45deg);}
.syb-paths-foot{text-align:center; font-style:italic; font-size:1.05rem; color:var(--gold-deep); margin:1rem 0 0;}

/* LEAVE LIST */
.syb-leave-list{display:flex; flex-direction:column; gap:1.6rem; margin:2.2rem 0 0;}
.syb-leave-item{display:flex; gap:1.3rem; align-items:flex-start; background:var(--cream-light); border:1px solid rgba(184,147,95,.25); border-radius:12px; padding:1.8rem;}
.syb-leave-num{flex-shrink:0; width:44px; height:44px; border-radius:50%; background:var(--gold); color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Poppins',sans-serif; font-weight:700; font-size:1.3rem;}
.syb-leave-item h3{font-size:1.22rem; color:var(--navy); margin:.2rem 0 .5rem; font-weight:600;}
.syb-leave-item p{font-size:1.04rem; line-height:1.65; margin:0; color:var(--char);}
.syb-leave-item em{font-style:italic; color:var(--gold-deep);}

/* TESTIMONIALS */
.syb-testi-feature{background:var(--cream-light); border:1px solid rgba(184,147,95,.3); border-radius:14px; padding:2.4rem; max-width:760px; margin:1.5rem auto 1.6rem; box-shadow:0 8px 30px rgba(26,35,50,.06);}
.syb-testi-feature-strong{border:2px solid var(--gold); box-shadow:0 14px 44px rgba(184,147,95,.18); margin-top:2.4rem;}
.syb-testi-gold{position:relative; background:linear-gradient(160deg, rgba(184,147,95,.14), rgba(184,147,95,.05)); border:2px solid var(--gold); box-shadow:0 16px 48px rgba(184,147,95,.22); margin-top:1.2rem; padding-top:2.8rem;}
.syb-testi-gold p{color:var(--navy);}
.syb-quote-mark{position:absolute; top:.3rem; left:1.6rem; font-family:'Lora',Georgia,serif; font-size:4.5rem; line-height:1; color:var(--gold); opacity:.55;}
.syb-testi-feature p{font-size:1.18rem; line-height:1.65; font-style:italic; color:var(--navy); margin:0 0 1.1rem;}
.syb-testi-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; max-width:760px; margin:0 auto;}
.syb-testi{background:var(--cream-light); border:1px solid rgba(184,147,95,.2); border-radius:12px; padding:1.8rem;}
.syb-testi p{font-size:1rem; line-height:1.6; font-style:italic; color:var(--char); margin:0 0 .9rem;}
.syb-testi-name{font-family:'Poppins',sans-serif; font-size:.85rem; font-weight:600; color:var(--gold-deep); letter-spacing:.02em;}

/* ABOUT */
.syb-about{display:grid; grid-template-columns:0.8fr 1.2fr; gap:3rem; align-items:center;}
.syb-about-photo{width:100%;}
.syb-photo{width:100%; aspect-ratio:4/5; object-fit:cover; object-position:center top; border-radius:14px; box-shadow:0 14px 40px rgba(26,35,50,.12); display:block;}

/* FAQ */
.syb-faq{margin-top:2rem;}
.syb-faq-item{border-bottom:1px solid rgba(26,35,50,.12); padding:1.2rem 0;}
.syb-faq-item summary{font-family:'Poppins',sans-serif; font-weight:600; font-size:1.08rem; color:var(--navy); cursor:pointer; list-style:none; position:relative; padding-right:2rem;}
.syb-faq-item summary::-webkit-details-marker{display:none;}
.syb-faq-item summary::after{content:'+'; position:absolute; right:0; top:-2px; font-size:1.5rem; color:var(--gold); font-weight:400;}
.syb-faq-item[open] summary::after{content:'\\2013';}
.syb-faq-item p{font-size:1.05rem; line-height:1.7; margin:1rem 0 0; color:var(--char);}

/* CLOSE */
.syb-close{text-align:center;}
.syb-final-paths{display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:2rem;}
.syb-final-enroll{margin-top:1.1rem;}
.syb-btn-enroll{background:transparent; color:var(--gold); border:1.5px solid var(--gold); box-shadow:none;}
.syb-btn-enroll:hover{background:var(--gold); color:#fff; transform:translateY(-2px);}

/* FOOTER */
.syb-footer{background:var(--navy); color:#aeb6c4; padding:3rem 0; font-family:'Poppins',sans-serif; font-size:.88rem;}
.syb-disclaimer{max-width:820px; margin:0 auto 2.4rem; padding-bottom:2rem; border-bottom:1px solid rgba(255,255,255,.12);}
.syb-disclaimer strong{display:block; color:#cdd3dd; font-size:.8rem; letter-spacing:.04em; text-transform:uppercase; margin-bottom:.8rem;}
.syb-disclaimer p{font-size:.76rem; line-height:1.6; color:#8b94a4; margin:0 0 .8rem;}
.syb-footer p{margin:.4rem 0;}
.syb-foot-links{display:flex; gap:1.6rem; justify-content:center; flex-wrap:wrap;}
.syb-foot-links a{color:var(--gold); text-decoration:none;}
.syb-foot-links a:hover{text-decoration:underline;}

/* STICKY */
.syb-sticky{position:fixed; bottom:0; left:0; right:0; background:var(--navy); color:#fff; display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:.8rem 1.2rem; transform:translateY(110%); transition:transform .3s ease; z-index:50; box-shadow:0 -6px 24px rgba(0,0,0,.2);}
.syb-sticky.is-on{transform:translateY(0);}
.syb-sticky span{font-family:'Poppins',sans-serif; font-weight:600; font-size:.95rem;}

@media (max-width:880px){
  .syb-paths{grid-template-columns:1fr; max-width:440px; margin-left:auto; margin-right:auto;}
  .syb-path-feature{transform:none;}
}
@media (max-width:780px){
  .syb-card{padding:1.8rem 1.5rem;}
  .syb-testi-grid{grid-template-columns:1fr;}
  .syb-about{grid-template-columns:1fr; gap:2rem;}
  .syb-about-photo{max-width:320px; margin:0 auto;}
}
@media (min-width:781px){
  .syb-sticky{left:50%; right:auto; transform:translate(-50%,160%); bottom:1.5rem; max-width:520px; width:auto; border-radius:14px; padding:.85rem 1.1rem .85rem 1.6rem;}
  .syb-sticky.is-on{transform:translate(-50%,0);}
}
`;
