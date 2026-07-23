import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mutual Advantage Method™ | Interview Strategy for Experienced Professionals",
  description:
    "Turn unpredictable interviews into clear, mutual business conversations—and learn to communicate the value you already know how to create.",
};

const CALENDLY_URL =
  "https://calendly.com/idealclaritysolutions/interview-strategy-call-with-chi-chi";

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function MutualAdvantagePage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Ideal Clarity home">
          <img
            src="/images/ideal-clarity-logo-dark.png"
            alt="Ideal Clarity — Here to make it make sense."
            className="brandLogo"
          />
        </a>
        <a className="navCta" href="#book">
          Book a free conversation
        </a>
      </header>

      {/* HERO — recognition first */}
      <section className="hero" id="top">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="shell heroInner">
          <p className="eyebrow">YOU’RE PROBABLY HERE BECAUSE…</p>
          <h1>
            You keep getting interviews…
            <span>but not offers.</span>
          </h1>

          <div className="heroTruths">
            <p>
              People tell you that you “interviewed well,” yet nothing happens afterward.
            </p>
            <p>
              You know you’re qualified. You just don’t know how to communicate it.
            </p>
            <p>
              You’ve watched YouTube videos. Memorized STAR. Practiced with ChatGPT.
            </p>
          </div>

          <p className="heroTurn">Yet interviews still feel unpredictable.</p>
          <p className="heroImagine">
            Imagine walking into your next interview already knowing what the
            interviewer is trying to determine—and exactly how to help them see
            why you’re the right person for the role.
          </p>
          <p className="heroClose">
            That’s what the Mutual Advantage Method™ is designed to help you do.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#book">
              Book a free 30-minute conversation <ArrowIcon />
            </a>
            <a className="heroSecondaryButton" href="#why">
              See why the usual advice fails <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="heroMicrocopy">
            Walk away understanding what may be costing you offers—and what to change before your next interview.
          </p>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="credStrip" aria-label="Chi-Chi's interview track record">
        <div className="shell credStripInner">
          <div className="credSeg">
            <span className="credLabel">Then</span>
            <span>34 interviews, 1 offer</span>
          </div>
          <div className="credDivide" aria-hidden="true" />
          <div className="credSeg">
            <span className="credLabel">What changed</span>
            <span>Built the Mutual Advantage Method™</span>
          </div>
          <div className="credDivide" aria-hidden="true" />
          <div className="credSeg">
            <span className="credLabel">The result</span>
            <strong>~80% of my interviews ended in offers</strong>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="section origin">
        <div className="shell narrow centered">
          <p className="eyebrow dark">WHY I BUILT THIS</p>
          <h2>It started with 34 interviews and one offer.</h2>

          <div className="timeline">
            <span className="tNode">34 interviews</span>
            <span className="tArrow" aria-hidden="true">↓</span>
            <span className="tNode">1 offer</span>
            <span className="tArrow" aria-hidden="true">↓</span>
            <span className="tNode">
              Became obsessed with how hiring managers actually make hiring
              decisions
            </span>
            <span className="tArrow" aria-hidden="true">↓</span>
            <span className="tNode">Built the Mutual Advantage Method™</span>
            <span className="tArrow" aria-hidden="true">↓</span>
            <span className="tNode tAccent">
              Went from 1 offer in 34 interviews to 8 of my last 10 ending in
              an offer—an ~80% success rate
            </span>
          </div>

          <div className="originStory">
            <p>For years, I was asking the wrong question.</p>
            <p>I thought interviews were about better answers.</p>
            <p>
              <strong>
                They weren’t. They were about understanding how hiring
                decisions are actually made.
              </strong>
            </p>
            <p>
              My years in HR and on hiring panels showed me that truth from
              the inside. Those 34 interviews taught me what it costs
              candidates who can’t see it.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why" id="why">
        <div className="shell narrow">
          <p className="eyebrow dark">WHY MOST INTERVIEW ADVICE DOESN’T WORK</p>
          <h2>The best candidate doesn’t always get the offer.</h2>
          <p className="lead centered">
            The candidate who understands how hiring managers make hiring
            decisions—and knows how to communicate their value
            accordingly—usually does. The Mutual Advantage Method™ helps you
            become that candidate.
          </p>

          <div className="comparisonGrid">
            <article className="comparisonCard mutedCard">
              <p className="comparisonLabel">Traditional interview coaching</p>
              <div className="comparisonFlow">
                <strong>Better answers</strong><span>↓</span>
                <strong>Better stories</strong><span>↓</span>
                <strong>Better confidence</strong><span>↓</span>
                <strong>Hope for better results</strong>
              </div>
              <p>
                It starts with the question and teaches you how to produce a more polished response.
              </p>
            </article>

            <article className="comparisonCard featuredCard">
              <p className="comparisonLabel">The Mutual Advantage Method™</p>
              <div className="comparisonFlow">
                <strong>Understand what employers actually need</strong><span>↓</span>
                <strong>Understand how hiring managers make decisions</strong><span>↓</span>
                <strong>Understand what interview questions are really asking</strong><span>↓</span>
                <strong>Position your experience strategically</strong><span>↓</span>
                <strong>Answer with clarity and purpose</strong>
              </div>
              <p>
                It starts with the business decision beneath the question—so your answers become relevant, credible, and easier to act on.
              </p>
            </article>
          </div>

          <p className="whyStatement">
            Most interview coaching starts with your answers. The Mutual
            Advantage Method™ starts with the hiring decision. Because once you
            understand what interviewers are trying to determine…{" "}
            <strong>
              your answers naturally become more relevant, more credible, and
              easier to say yes to.
            </strong>
          </p>

          <div className="outcomeStrip">
            <p>Instead of leaving the call replaying every answer and wondering what you should have said…</p>
            <strong>
              You leave interviews knowing you made your value unmistakable, asked the questions that matter, and gave yourself a real chance to be chosen.
            </strong>
          </div>
        </div>
      </section>

      {/* COMMON CONVERSATIONS */}
      <section className="section conversations">
        <div className="shell narrow">
          <p className="eyebrow light">CONVERSATIONS I HEAR ALL THE TIME</p>
          <h2>Qualified professionals often describe the same frustration.</h2>

          <div className="messageStack" aria-label="Common interview frustrations">
            <article className="messageBubble left">
              <span>Unknown sender · 9:41 AM</span>
              <p>“I don’t understand it… I keep getting interviews, but never the offer.”</p>
            </article>
            <article className="messageBubble right">
              <span>Unknown sender · 2:18 PM</span>
              <p>“Everyone tells me I interview well… so why am I still getting rejected?”</p>
            </article>
            <article className="messageBubble left">
              <span>Unknown sender · 6:07 PM</span>
              <p>“I know I’m qualified. I just don’t know how to communicate it.”</p>
            </article>
          </div>

          <p className="conversationNote">
            These aren’t testimonials. They’re versions of conversations I’ve had with professionals before they changed how they approached interviews.
          </p>
        </div>
      </section>

      {/* REAL FEEDBACK */}
      <section className="section voices">
        <div className="shell narrow">
          <p className="eyebrow dark">WHAT PEOPLE TELL ME AFTERWARD</p>
          <h2>The shift is real—and it shows up in the very next interview.</h2>

          <div className="voiceGrid">
            <figure className="voiceCard">
              <blockquote>
                “I realized halfway through my interview that I wasn’t trying
                to win them over anymore. I was showing them how I solve
                problems and seeing if it was a good fit for both of us. That
                shift changed everything—best interview I’ve had in years.”
              </blockquote>
              <figcaption>Ashley W.</figcaption>
            </figure>

            <figure className="voiceCard">
              <blockquote>
                “The framework for ‘tell me about yourself’ was a game changer.
                I didn’t ramble. The interviewer even said, ‘I appreciate how
                you connected your experience directly to what we’re looking
                for.’ I’d never heard that before.”
              </blockquote>
              <figcaption>James M.</figcaption>
            </figure>

            <figure className="voiceCard">
              <blockquote>
                “I finally have a clear understanding of what I bring to the
                table and how to communicate it. I walked into my interview
                feeling calm, confident, and focused instead of anxious and
                trying to prove myself.”
              </blockquote>
              <figcaption>Michael J.</figcaption>
            </figure>

            <figure className="voiceCard">
              <blockquote>
                “I always walked in feeling like I had to impress them.
                Realizing it’s actually a conversation about whether we’re the
                right fit completely changed my perspective. I’m genuinely
                excited for my next interview now.”
              </blockquote>
              <figcaption>Sarah M.</figcaption>
            </figure>
          </div>

          <p className="voicesNote">
            Real feedback from professionals I’ve coached through real
            interviews, shared with their permission. Names shortened for
            privacy.
          </p>
        </div>
      </section>

      {/* METHOD */}
      <section className="section method" id="method">
        <div className="shell">
          <div className="sectionIntro">
            <div>
              <p className="eyebrow dark">THE MUTUAL ADVANTAGE METHOD™</p>
              <h2>Interviews aren’t tests.</h2>
            </div>
            <div>
              <p className="lead">
                They’re mutual business conversations where two parties are deciding whether working together creates value.
              </p>
              <p>
                The employer is asking whether you can solve problems worth paying for. You are asking whether this is an environment where your strengths can create meaningful value. The strongest interviews answer both questions.
              </p>
            </div>
          </div>

          <div className="pillarGrid">
            <article className="pillar">
              <span>01</span>
              <h3>Professional Identity</h3>
              <p>Define the strengths, patterns, judgment, and character behind the results on your résumé.</p>
            </article>
            <article className="pillar">
              <span>02</span>
              <h3>Evidence of Value</h3>
              <p>Turn achievements into credible proof of how you think, operate, and consistently create outcomes.</p>
            </article>
            <article className="pillar">
              <span>03</span>
              <h3>Employer Perspective</h3>
              <p>Understand what each question is designed to assess and what uncertainty the interviewer needs resolved.</p>
            </article>
            <article className="pillar">
              <span>04</span>
              <h3>Strategic Positioning</h3>
              <p>Connect who you are, what you’ve done, and why it matters for this role—without sounding rehearsed.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TACTICAL EXAMPLE */}
      <section className="section identity">
        <div className="shell identityGrid">
          <div>
            <p className="eyebrow light">THE QUESTION BEHIND THE QUESTION</p>
            <h2>“Tell me about yourself” is not asking for your biography.</h2>
          </div>
          <div className="identityCopy">
            <p>
              Your interviewer already has your résumé. They’re trying to
              answer one question:{" "}
              <em>“Can I picture this person creating value here?”</em> What
              they’re really trying to understand is the professional identity
              behind it.
            </p>
            <ul className="checkList">
              <li><CheckIcon /> What qualities repeatedly show up in the way you work?</li>
              <li><CheckIcon /> What abilities produced the successes on your résumé?</li>
              <li><CheckIcon /> Which parts of your experience matter most for this role?</li>
              <li><CheckIcon /> Can they trust you to recreate that value on their team?</li>
            </ul>
            <p className="identityClosing">
              The Method helps you answer that question with a clear professional narrative—not a chronological résumé recap.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="section transformation">
        <div className="shell narrow centered">
          <p className="eyebrow dark">WHAT CHANGES</p>
          <h2>You stop treating every interview like a verdict on your worth.</h2>
          <p className="lead centered">
            You walk in knowing what you bring, how to prove it, and what you need to learn before deciding whether the opportunity is right for you.
          </p>
          <div className="changeGrid">
            <article><strong>Before</strong><p>Trying to impress them</p></article>
            <article><strong>After</strong><p>Walking in as an equal business partner</p></article>
            <article><strong>Before</strong><p>Rambling through your history</p></article>
            <article><strong>After</strong><p>Telling a clear story they remember after you leave</p></article>
            <article><strong>Before</strong><p>Guessing what they want to hear</p></article>
            <article><strong>After</strong><p>Knowing exactly what each answer needs to prove</p></article>
          </div>
          <div className="futurePace">
            <p>Imagine this…</p>
            <h3>
              You walk into your next interview calm. You already know what
              every question is trying to uncover.
            </h3>
            <p>
              You’re no longer wondering how to impress them. You’re simply
              helping them understand who you are professionally, how you’ve
              created value before, and why you can do it again. When the
              interview ends, you’re not replaying every answer in your head.
              You leave knowing you communicated your value clearly.
            </p>
          </div>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section className="section offers" id="work-together">
        <div className="shell">
          <div className="sectionIntro">
            <div>
              <p className="eyebrow dark">TWO WAYS TO WORK TOGETHER</p>
              <h2>The right level of support depends on what you need.</h2>
            </div>
            <p>
              The free conversation is where we diagnose what is getting in the way and determine which path—if either—makes sense for you.
            </p>
          </div>

          <div className="offerGrid">
            <article className="offerCard premium">
              <div className="offerBadge">Most comprehensive</div>
              <p className="offerKicker">4-WEEK PRIVATE PROGRAM</p>
              <h3>The Mutual Advantage Program™</h3>
              <p className="offerLead">
                For professionals seeking complete transformation—a full
                interview-positioning system, guided practice, and support
                across an active search.
              </p>
              <ul className="checkList compact">
                <li><CheckIcon /> Four weeks of private strategy and coaching</li>
                <li><CheckIcon /> Résumé and target-role analysis</li>
                <li><CheckIcon /> Professional identity and positioning</li>
                <li><CheckIcon /> “Tell me about yourself” narrative</li>
                <li><CheckIcon /> Evidence-based story bank</li>
                <li><CheckIcon /> Live practice, feedback, and refinement</li>
                <li><CheckIcon /> Between-session support</li>
              </ul>
              <a className="primaryButton full" href="#book">
                Book a free strategy call <ArrowIcon />
              </a>
            </article>

            <article className="offerCard">
              <p className="offerKicker">PRIVATE 90-MINUTE SESSION</p>
              <h3>The Mutual Advantage Intensive™</h3>
              <p className="offerLead">
                For professionals needing targeted interview help—focused on
                the most important challenge in front of you right now.
              </p>
              <ul className="checkList compact">
                <li><CheckIcon /> Pre-session résumé and role review</li>
                <li><CheckIcon /> One 90-minute private strategy session</li>
                <li><CheckIcon /> Focus on your highest-priority gap</li>
                <li><CheckIcon /> Personalized frameworks and notes</li>
                <li><CheckIcon /> Clear post-session action plan</li>
              </ul>
              <a className="secondaryButton full" href="#book">
                Book a free strategy call <ArrowIcon />
              </a>
            </article>
          </div>
          <div className="offerCallout">
            <div>
              <strong>Not sure which level of support you need?</strong>
              <p>You do not need to decide before we speak. We will identify the real gap and recommend the smallest level of support that can genuinely help.</p>
            </div>
            <a className="primaryButton" href="#book">
              Book the free strategy call <ArrowIcon />
            </a>
          </div>
          <p className="offerNote">
            We’ll talk through fit and investment on the call—after we’ve
            identified what you actually need. The call itself is free,
            private, and pressure-free.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div className="shell aboutGrid">
          <div className="aboutImageWrap">
            <img
              src="/images/chichi-headshot.jpg"
              alt="Chi-Chi, creator of the Mutual Advantage Method"
              className="aboutImage"
            />
            <div className="aboutExperience"><strong>10+</strong><span>years across HR, recruiting, hiring panels, and leadership</span></div>
          </div>
          <div>
            <p className="eyebrow dark">MEET CHI-CHI</p>
            <h2>For years, I thought interviews were about giving better answers.</h2>
            <p>
              So I prepared harder. Practiced more. Researched every company.
              And still—I went through{" "}
              <strong>34 interviews before finally receiving an offer</strong>.
            </p>
            <p>
              That experience changed everything. Instead of asking, “How do I
              answer interview questions better?” I became obsessed with a
              different question:{" "}
              <strong>
                How do hiring managers actually decide who gets hired?
              </strong>
            </p>
            <p>
              That question—explored across more than a decade in HR,
              recruiting, hiring panels, and program leadership inside a
              Fortune 1 environment—eventually became the Mutual Advantage
              Method™. I went from 1 offer in 34 interviews to 8 of my last 10
              interviews ending in an offer—an 80% success rate.
            </p>
            <p>
              Now I help experienced professionals understand the hiring
              decision behind every interview question—so they can communicate
              their value with clarity instead of hoping the interviewer
              connects the dots.
            </p>
            <p className="aboutPromise">
              My goal is not to make you sound polished for one interview. It is to help you become the person who can walk into any interview knowing what you offer, why it matters, and how to make that value easy to recognize.
            </p>
            <div className="credibilityRow darkRow">
              <span>HR + recruiting</span>
              <span>Hiring-panel perspective</span>
              <span>Fortune 1 leadership experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* FREE CALL */}
      <section className="section booking" id="book">
        <div className="shell bookingGrid">
          <div>
            <p className="eyebrow light">A FREE 30-MINUTE CONVERSATION</p>
            <h2>Let’s figure out what your interviews have been missing.</h2>
            <p className="bookingLead">
              This is not a generic discovery call. We’ll look at what has been happening in your interviews, identify the most likely gap, and determine the right next step.
            </p>
            <p className="bookingKnow">By the end of our conversation, you’ll know:</p>
            <ul className="checkList lightList">
              <li><CheckIcon /> Why you’ve been getting interviews but not offers</li>
              <li><CheckIcon /> The biggest gap holding you back</li>
              <li><CheckIcon /> Whether the Mutual Advantage Method™ can help</li>
              <li><CheckIcon /> Which level of support (if any) makes sense</li>
            </ul>
            <p className="microcopy lightMicrocopy">
              No pressure. No promise of a job offer. Just an honest conversation about what would make the biggest difference.
            </p>
          </div>

          <div className="calendarCard">
            <div className="calendarHeader">
              <strong>Book your free conversation</strong>
              <span>30 minutes · Private · No obligation</span>
            </div>
            <iframe
              title="Schedule a free 30-minute interview strategy conversation"
              src={CALENDLY_URL}
              width="100%"
              height="720"
              frameBorder="0"
            />
            <a className="primaryButton full fallbackButton" href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Open Calendly in a new tab <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <p className="eyebrow light">
              YOUR NEXT INTERVIEW DOESN’T HAVE TO FEEL UNPREDICTABLE.
            </p>
            <h2>
              Learn how hiring managers actually make hiring decisions—and
              become the candidate they can confidently say yes to.
            </h2>
          </div>
          <a className="primaryButton" href="#book">
            Book a free strategy call <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <span>© {new Date().getFullYear()} Ideal Clarity Solutions</span>
          <span>
            The Mutual Advantage Method™ is an independent career-development framework. Coaching cannot guarantee a hiring decision or job offer.
          </span>
        </div>
      </footer>

      <a className="floatingCta" href="#book" aria-label="Book a free 30-minute interview strategy call">
        <span>Free 30-minute strategy call</span>
        <strong>Book now →</strong>
      </a>

      <div className="mobileBar">
        <div>
          <strong>Free interview strategy call</strong>
          <span>30 minutes · No obligation</span>
        </div>
        <a href="#book">Book now</a>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              if (location.hash) {
                history.replaceState(null, "", location.pathname + location.search);
                window.scrollTo(0, 0);
              }
              document.addEventListener("click", function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
                if (!a) return;
                var t = document.querySelector(a.getAttribute("href"));
                if (!t) return;
                e.preventDefault();
                t.scrollIntoView({ behavior: "smooth", block: "start" });
              });
            })();
          `,
        }}
      />

      <style>{`
        :root{--ink:#102844;--deep:#081a2f;--orange:#f28c28;--orange-dark:#cf6f15;--cream:#fff8ef;--paper:#fff;--muted:#607086;--line:#dfe6ee;--shadow:0 24px 70px rgba(16,40,68,.12)}
        *{box-sizing:border-box}html{scroll-behavior:auto}body{margin:0;color:var(--ink);background:var(--paper);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}a{color:inherit;text-decoration:none}h1,h2,h3,p{margin-top:0}h1,h2,h3{line-height:1.08;letter-spacing:-.035em}h1{max-width:980px;margin-bottom:30px;font-size:clamp(3.1rem,7.5vw,7rem)}h1 span{display:block;color:var(--orange)}h2{margin-bottom:24px;font-size:clamp(2.25rem,4.6vw,4.5rem)}h3{margin-bottom:12px;font-size:1.5rem}p{font-size:1.06rem}.shell{width:min(1180px,calc(100% - 40px));margin:0 auto}.narrow{width:min(900px,calc(100% - 40px))}.section{padding:110px 0}.centered{text-align:center}.nav{position:relative;z-index:20;display:flex;align-items:center;justify-content:space-between;min-height:82px;padding:0 max(24px,calc((100vw - 1180px)/2));border-bottom:1px solid rgba(255,255,255,.12);color:#fff;background:var(--deep)}.brand{display:flex;align-items:center;gap:12px}.brandMark{display:grid;width:42px;height:42px;place-items:center;border-radius:50%;color:#fff;background:var(--orange);font-weight:850}.brand strong,.brand small{display:block}.brand small{opacity:.7;font-size:.74rem}.navCta{padding:10px 16px;border:1px solid rgba(255,255,255,.25);border-radius:999px;font-size:.92rem;font-weight:750}.hero{position:relative;overflow:hidden;padding:105px 0 120px;color:#fff;background:linear-gradient(125deg,rgba(8,26,47,.99),rgba(16,40,68,.96)),var(--deep)}.heroGlow{position:absolute;border-radius:999px;filter:blur(8px);pointer-events:none}.heroGlowOne{top:-240px;right:-120px;width:540px;height:540px;background:rgba(242,140,40,.2)}.heroGlowTwo{bottom:-320px;left:-180px;width:650px;height:650px;background:rgba(51,125,171,.17)}.heroInner{position:relative;z-index:2;max-width:1000px}.eyebrow{margin-bottom:18px;color:#ffc789;font-size:.78rem;font-weight:850;letter-spacing:.17em}.eyebrow.dark{color:var(--orange-dark)}.eyebrow.light{color:#ffd3a6}.heroTruths{display:grid;gap:12px;max-width:830px;margin:0 0 28px}.heroTruths p{margin:0;padding:14px 18px;border-left:3px solid var(--orange);background:rgba(255,255,255,.06);font-size:clamp(1.08rem,2vw,1.3rem)}.heroTurn{margin:32px 0 4px;color:rgba(255,255,255,.68);font-size:clamp(1.15rem,2vw,1.4rem)}.heroClose{margin-bottom:34px;font-size:clamp(1.45rem,2.6vw,2.05rem);font-weight:850}.heroActions{display:flex;flex-wrap:wrap;align-items:center;gap:20px}.primaryButton,.secondaryButton{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:56px;padding:15px 22px;border-radius:12px;font-weight:850;transition:.2s ease}.primaryButton{color:#fff;background:linear-gradient(135deg,var(--orange),var(--orange-dark));box-shadow:0 14px 30px rgba(242,140,40,.24)}.secondaryButton{color:var(--ink);border:2px solid var(--ink);background:#fff}.primaryButton:hover,.secondaryButton:hover{transform:translateY(-2px)}.heroSecondaryButton{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:56px;padding:14px 21px;border:1.5px solid rgba(255,255,255,.48);border-radius:12px;color:#fff;background:rgba(255,255,255,.04);font-weight:800;transition:.2s ease}.heroSecondaryButton:hover{transform:translateY(-2px);border-color:#fff;background:rgba(255,255,255,.09)}.heroMicrocopy{max-width:650px;margin:17px 0 0;color:rgba(255,255,255,.63);font-size:.88rem}.full{width:100%}.lead{color:var(--muted);font-size:clamp(1.14rem,2vw,1.38rem)}.lead.centered{max-width:760px;margin:-5px auto 48px;text-align:center}.why{background:var(--cream)}.why>.shell>h2,.why>.shell>.eyebrow{text-align:center}.comparisonGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.comparisonCard{padding:34px;border-radius:22px}.mutedCard{border:1px solid #eadfce;background:rgba(255,255,255,.58)}.featuredCard{border:1px solid #efc392;background:#fff;box-shadow:var(--shadow)}.comparisonLabel{margin-bottom:24px;color:var(--orange-dark);font-size:.8rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.comparisonFlow{display:grid;gap:8px;margin-bottom:24px;text-align:center}.comparisonFlow strong{padding:13px 15px;border:1px solid var(--line);border-radius:10px;background:#fff}.comparisonFlow span{color:var(--orange-dark);font-weight:900}.comparisonCard>p:last-child{margin-bottom:0;color:var(--muted)}.outcomeStrip{margin-top:28px;padding:30px;border-radius:18px;color:#fff;background:var(--ink);text-align:center}.outcomeStrip p{margin-bottom:10px;color:#cbd5e1}.outcomeStrip strong{font-size:clamp(1.18rem,2vw,1.5rem)}.conversations{color:#fff;background:var(--deep)}.conversations h2{max-width:780px;margin-bottom:46px}.messageStack{display:grid;gap:20px}.messageBubble{width:min(640px,88%);padding:22px 24px;border-radius:22px;box-shadow:0 18px 48px rgba(0,0,0,.18)}.messageBubble.left{justify-self:start;border-bottom-left-radius:7px;color:var(--ink);background:#fff}.messageBubble.right{justify-self:end;border-bottom-right-radius:7px;color:#fff;background:var(--orange-dark)}.messageBubble span{display:block;margin-bottom:8px;opacity:.6;font-size:.76rem}.messageBubble p{margin:0;font-size:1.22rem;line-height:1.45}.conversationNote{max-width:720px;margin:35px auto 0;color:rgba(255,255,255,.58);font-size:.9rem;text-align:center}.method{background:#fff}.sectionIntro{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:48px}.sectionIntro p:last-child{color:var(--muted)}.pillarGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.pillar{padding:28px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 14px 42px rgba(16,40,68,.06)}.pillar>span{display:block;margin-bottom:40px;color:var(--orange-dark);font-weight:900;letter-spacing:.12em}.pillar p{margin:0;color:var(--muted)}.identity{color:#fff;background:var(--ink)}.identityGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.identityCopy>p{color:#d3dce6}.checkList{display:grid;gap:13px;margin:26px 0;padding:0;list-style:none}.checkList li{display:flex;gap:11px;align-items:flex-start}.checkList svg{flex:0 0 auto;margin-top:3px;color:var(--orange)}.identityClosing{padding:20px;border-left:3px solid var(--orange);background:rgba(255,255,255,.06);font-weight:750}.transformation{background:#fff}.changeGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:46px;text-align:left}.changeGrid article{padding:22px;border:1px solid var(--line);border-radius:16px}.changeGrid article:nth-child(even){border-color:#efc392;background:var(--cream)}.changeGrid strong{display:block;margin-bottom:6px;color:var(--orange-dark);font-size:.76rem;letter-spacing:.12em;text-transform:uppercase}.changeGrid p{margin:0;font-weight:750}.futurePace{max-width:860px;margin:42px auto 0;padding:34px;border:1px solid #efc392;border-radius:22px;background:var(--cream);text-align:left;box-shadow:0 16px 48px rgba(16,40,68,.07)}.futurePace>p:first-child{margin-bottom:10px;color:var(--orange-dark);font-size:.78rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.futurePace h3{margin-bottom:16px;font-size:clamp(1.55rem,3vw,2.35rem)}.futurePace>p:last-child{margin:0;color:var(--muted)}.offers{background:var(--cream)}.offerGrid{display:grid;grid-template-columns:1.08fr .92fr;gap:24px}.offerCard{position:relative;padding:38px;border:1px solid var(--line);border-radius:24px;background:#fff;box-shadow:0 18px 54px rgba(16,40,68,.08)}.offerCard.premium{border:2px solid var(--orange);box-shadow:var(--shadow)}.offerBadge{position:absolute;top:-14px;right:24px;padding:7px 12px;border-radius:999px;color:#fff;background:var(--orange-dark);font-size:.75rem;font-weight:850}.offerKicker{margin-bottom:12px;color:var(--orange-dark);font-size:.78rem;font-weight:900;letter-spacing:.12em}.price{margin:18px 0 10px;font-size:3rem;font-weight:900;letter-spacing:-.05em}.offerLead{color:var(--muted)}.compact{margin-bottom:30px}.offerCallout{display:flex;align-items:center;justify-content:space-between;gap:28px;margin-top:28px;padding:28px;border-radius:20px;color:#fff;background:var(--ink)}.offerCallout strong{display:block;margin-bottom:5px;font-size:1.18rem}.offerCallout p{max-width:670px;margin:0;color:#cbd5e1}.offerCallout .primaryButton{flex:0 0 auto}.offerNote{max-width:820px;margin:20px auto 0;color:var(--muted);font-size:.9rem;text-align:center}.about{background:#fff}.aboutGrid{display:grid;grid-template-columns:260px 1fr;gap:70px;align-items:center}.aboutImageWrap{position:relative}.aboutImage{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;object-position:center top;border-radius:26px;box-shadow:var(--shadow)}.aboutExperience{position:absolute;right:-20px;bottom:24px;max-width:210px;padding:16px 18px;border-radius:16px;color:#fff;background:var(--ink);box-shadow:0 18px 45px rgba(16,40,68,.22)}.aboutExperience strong,.aboutExperience span{display:block}.aboutExperience strong{color:var(--orange);font-size:2rem;line-height:1}.aboutExperience span{margin-top:5px;font-size:.76rem;line-height:1.35}.aboutPromise{padding:18px 20px;border-left:3px solid var(--orange);background:var(--cream);font-weight:700}.darkRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}.darkRow span{padding:8px 12px;border:1px solid var(--line);border-radius:999px;font-size:.82rem;font-weight:750}.booking{color:#fff;background:var(--deep)}.bookingGrid{display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:start}.bookingLead{color:#d6deea;font-size:1.2rem}.lightList li{color:#eef3f8}.lightMicrocopy{color:#9eabba}.calendarCard{overflow:hidden;padding:12px;border:1px solid rgba(255,255,255,.16);border-radius:22px;background:#fff;box-shadow:0 28px 80px rgba(0,0,0,.28)}.calendarHeader{display:flex;justify-content:space-between;gap:14px;padding:16px;color:var(--ink)}.calendarHeader strong,.calendarHeader span{display:block}.calendarHeader span{color:var(--muted);font-size:.86rem}.calendarCard iframe{display:block;border-radius:12px}.fallbackButton{margin-top:10px}.finalCta{padding:78px 0;color:#fff;background:var(--ink)}.finalCtaInner{display:flex;align-items:center;justify-content:space-between;gap:38px}.finalCta h2{max-width:760px;margin:0}footer{padding:42px 0 110px;color:#8da0b4;background:var(--deep)}.footerInner{display:flex;justify-content:space-between;gap:30px;font-size:.82rem}.footerInner span:last-child{max-width:700px;text-align:right}.floatingCta{position:fixed;z-index:45;right:24px;bottom:24px;display:flex;align-items:center;gap:14px;padding:13px 17px;border:1px solid rgba(255,255,255,.22);border-radius:16px;color:#fff;background:rgba(8,26,47,.96);box-shadow:0 18px 45px rgba(0,0,0,.28);backdrop-filter:blur(12px)}.floatingCta span,.floatingCta strong{display:block}.floatingCta span{font-size:.78rem;color:#cbd5e1}.floatingCta strong{color:#ffc789;font-size:.9rem}.mobileBar{display:none}        .brandLogo{display:block;height:44px;width:auto}        .heroImagine{max-width:820px;margin:0 0 14px;color:rgba(255,255,255,.88);font-size:clamp(1.18rem,2.1vw,1.5rem);font-weight:700;line-height:1.5}        .credStrip{padding:22px 0;color:#fff;background:var(--deep);border-top:2px solid var(--orange);border-bottom:1px solid rgba(255,255,255,.1)}        .credStripInner{display:flex;flex-wrap:wrap;align-items:stretch;justify-content:center;gap:18px 26px;text-align:center}        .credSeg{display:flex;flex-direction:column;gap:3px;justify-content:center;font-size:.95rem;font-weight:750}        .credSeg strong{color:#ffc789;font-weight:900}        .credLabel{color:var(--orange);font-size:.66rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}        .credDivide{width:1px;background:rgba(255,255,255,.18)}        .origin{background:#fff}        .timeline{display:flex;flex-direction:column;align-items:center;gap:9px;max-width:620px;margin:44px auto 0}        .tNode{width:100%;padding:15px 20px;border:1px solid var(--line);border-radius:12px;background:var(--cream);font-weight:750;line-height:1.45}        .tArrow{color:var(--orange-dark);font-weight:900;font-size:1.1rem;line-height:1}        .tAccent{border:2px solid var(--orange);background:#fff;box-shadow:0 14px 40px rgba(242,140,40,.14);font-weight:850}        .originStory{max-width:620px;margin:40px auto 0}        .originStory p{margin:0 0 10px;font-size:clamp(1.08rem,2vw,1.28rem)}        .originStory strong{color:var(--orange-dark)}        .whyStatement{max-width:780px;margin:34px auto 0;text-align:center;font-size:clamp(1.08rem,2vw,1.3rem);line-height:1.6}        .whyStatement strong{color:var(--orange-dark)}        .voices{background:var(--cream)}        .voiceGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:44px}        .voiceCard{margin:0;padding:28px 30px;border:1px solid #eadfce;border-radius:20px;background:#fff;box-shadow:0 14px 40px rgba(16,40,68,.07)}        .voiceCard blockquote{margin:0 0 15px;font-size:1.02rem;line-height:1.65}        .voiceCard figcaption{font-weight:850;color:var(--orange-dark)}        .voicesNote{margin-top:26px;color:var(--muted);font-size:.88rem}        .bookingKnow{margin:22px 0 4px;font-weight:850;color:#fff}
        @media(max-width:900px){.heroInner{max-width:800px}.comparisonGrid,.sectionIntro,.identityGrid,.offerGrid,.aboutGrid,.bookingGrid{grid-template-columns:1fr}.offerCallout{align-items:flex-start;flex-direction:column}.aboutImageWrap{width:min(440px,100%)}.aboutExperience{right:-10px}.pillarGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.calendarHeader{flex-direction:column}.finalCtaInner{align-items:flex-start;flex-direction:column}.footerInner{flex-direction:column}.footerInner span:last-child{text-align:left}}
        @media(max-width:650px){.voiceGrid{grid-template-columns:1fr}.brandLogo{height:34px}.credStripInner{gap:8px 12px;font-size:.82rem}.shell,.narrow{width:min(100% - 28px,1180px)}.section{padding:78px 0}.nav{min-height:70px;padding:0 14px}.brand small{display:none}.navCta{padding:9px 12px;font-size:.78rem}.hero{padding:72px 0 90px}.heroTruths p{padding:12px 14px}.heroActions{align-items:stretch;flex-direction:column}.primaryButton,.secondaryButton,.heroSecondaryButton{width:100%}.comparisonGrid,.pillarGrid,.changeGrid{grid-template-columns:1fr}.comparisonCard,.offerCard{padding:26px 22px}.messageBubble{width:94%;padding:18px}.messageBubble p{font-size:1.06rem}.aboutExperience{right:10px;bottom:12px}.floatingCta{display:none}.calendarCard{padding:7px}.calendarCard iframe{height:660px}.finalCta{padding-bottom:120px}footer{padding-bottom:140px}.mobileBar{position:fixed;z-index:50;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 14px;border-top:1px solid rgba(255,255,255,.16);color:#fff;background:rgba(8,26,47,.98);backdrop-filter:blur(12px)}.mobileBar strong,.mobileBar span{display:block}.mobileBar strong{font-size:.88rem}.mobileBar span{color:#aeb9c6;font-size:.72rem}.mobileBar a{padding:11px 14px;border-radius:9px;background:var(--orange);font-size:.82rem;font-weight:850;white-space:nowrap}}
      `}</style>
    </main>
  );
}
