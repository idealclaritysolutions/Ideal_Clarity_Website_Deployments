import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mutual Advantage Method™ | Interview Strategy for Experienced Professionals",
  description:
    "Turn unpredictable interviews into clear, mutual business conversations—and learn to communicate the value you already know how to create.",
};

// Replace this placeholder with the exact 30-minute free-call Calendly URL.
const CALENDLY_URL =
  "https://calendly.com/REPLACE-WITH-YOUR-30-MINUTE-CALL";

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
          <span className="brandMark">IC</span>
          <span>
            <strong>Ideal Clarity</strong>
            <small>The Mutual Advantage Method™</small>
          </span>
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
          <p className="heroClose">
            If that’s you, you’re exactly who I built this for.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#why">
              See why the usual advice fails <span aria-hidden="true">↓</span>
            </a>
            <a className="textLink" href="#book">
              Book a free 30-minute conversation
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why" id="why">
        <div className="shell narrow">
          <p className="eyebrow dark">WHY MOST INTERVIEW ADVICE DOESN’T WORK</p>
          <h2>The best candidate doesn’t always get the offer.</h2>
          <p className="lead centered">
            The candidate who communicates their value most clearly usually does.
            The Mutual Advantage Method™ helps you become that candidate.
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
                <strong>Employer needs</strong><span>↓</span>
                <strong>Hiring decisions</strong><span>↓</span>
                <strong>Interview questions</strong><span>↓</span>
                <strong>Your professional value</strong><span>↓</span>
                <strong>Your answers</strong>
              </div>
              <p>
                It starts with the business decision beneath the question—so your answers become relevant, credible, and easier to act on.
              </p>
            </article>
          </div>

          <div className="outcomeStrip">
            <p>Instead of trying to impress, rambling, or wondering what they want to hear…</p>
            <strong>
              You communicate your value with clarity and confidence—and become the candidate they can clearly picture in the role.
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
              Your interviewer already has your résumé. What they’re really trying to understand is the professional identity behind it.
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
            <article><strong>After</strong><p>Evaluating mutual value</p></article>
            <article><strong>Before</strong><p>Rambling through your history</p></article>
            <article><strong>After</strong><p>Communicating a clear professional identity</p></article>
            <article><strong>Before</strong><p>Guessing what they want to hear</p></article>
            <article><strong>After</strong><p>Answering the business question underneath</p></article>
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
              <div className="price">$3,500</div>
              <p className="offerLead">
                For professionals who want a complete interview-positioning system, guided practice, and support across an active search.
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
                Explore the 4-week program <ArrowIcon />
              </a>
            </article>

            <article className="offerCard">
              <p className="offerKicker">PRIVATE 90-MINUTE SESSION</p>
              <h3>The Mutual Advantage Intensive™</h3>
              <div className="price">$750</div>
              <p className="offerLead">
                For someone who wants focused help solving the most important interview challenge in front of them right now.
              </p>
              <ul className="checkList compact">
                <li><CheckIcon /> Pre-session résumé and role review</li>
                <li><CheckIcon /> One 90-minute private strategy session</li>
                <li><CheckIcon /> Focus on your highest-priority gap</li>
                <li><CheckIcon /> Personalized frameworks and notes</li>
                <li><CheckIcon /> Clear post-session action plan</li>
              </ul>
              <a className="secondaryButton full" href="#book">
                Explore the Intensive <ArrowIcon />
              </a>
            </article>
          </div>
          <p className="offerNote">
            You do not need to decide which option you want before the call. We will use the conversation to understand your situation and recommend the smallest level of support that can genuinely help.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div className="shell aboutGrid">
          <div className="aboutMark">10+</div>
          <div>
            <p className="eyebrow dark">MEET CHI-CHI</p>
            <h2>I’ve seen interviews from both sides of the table.</h2>
            <p>
              My perspective comes from more than a decade across HR, recruiting, hiring panels, and program leadership inside a Fortune 1 environment.
            </p>
            <p>
              I created the Mutual Advantage Method™ to help experienced professionals stop performing for approval, understand the decision beneath the questions, and communicate their value with clarity, confidence, and credibility.
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
            <ul className="checkList lightList">
              <li><CheckIcon /> Clarify where your interview process is breaking down</li>
              <li><CheckIcon /> Identify what interviewers may not be understanding about you</li>
              <li><CheckIcon /> Decide whether the Program, the Intensive, or neither is the right fit</li>
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
            <p className="eyebrow light">YOU DON’T NEED BETTER-SOUNDING ANSWERS.</p>
            <h2>You need a better way to communicate your value.</h2>
          </div>
          <a className="primaryButton" href="#book">
            Book the free conversation <ArrowIcon />
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

      <div className="mobileBar">
        <div>
          <strong>Free interview strategy call</strong>
          <span>30 minutes · No obligation</span>
        </div>
        <a href="#book">Book now</a>
      </div>

      <style>{`
        :root{--ink:#102844;--deep:#081a2f;--orange:#f28c28;--orange-dark:#cf6f15;--cream:#fff8ef;--paper:#fff;--muted:#607086;--line:#dfe6ee;--shadow:0 24px 70px rgba(16,40,68,.12)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:var(--paper);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}a{color:inherit;text-decoration:none}h1,h2,h3,p{margin-top:0}h1,h2,h3{line-height:1.08;letter-spacing:-.035em}h1{max-width:980px;margin-bottom:30px;font-size:clamp(3.1rem,7.5vw,7rem)}h1 span{display:block;color:var(--orange)}h2{margin-bottom:24px;font-size:clamp(2.25rem,4.6vw,4.5rem)}h3{margin-bottom:12px;font-size:1.5rem}p{font-size:1.06rem}.shell{width:min(1180px,calc(100% - 40px));margin:0 auto}.narrow{width:min(900px,calc(100% - 40px))}.section{padding:110px 0}.centered{text-align:center}.nav{position:relative;z-index:20;display:flex;align-items:center;justify-content:space-between;min-height:82px;padding:0 max(24px,calc((100vw - 1180px)/2));border-bottom:1px solid rgba(255,255,255,.12);color:#fff;background:var(--deep)}.brand{display:flex;align-items:center;gap:12px}.brandMark{display:grid;width:42px;height:42px;place-items:center;border-radius:50%;color:#fff;background:var(--orange);font-weight:850}.brand strong,.brand small{display:block}.brand small{opacity:.7;font-size:.74rem}.navCta{padding:10px 16px;border:1px solid rgba(255,255,255,.25);border-radius:999px;font-size:.92rem;font-weight:750}.hero{position:relative;overflow:hidden;padding:105px 0 120px;color:#fff;background:linear-gradient(125deg,rgba(8,26,47,.99),rgba(16,40,68,.96)),var(--deep)}.heroGlow{position:absolute;border-radius:999px;filter:blur(8px);pointer-events:none}.heroGlowOne{top:-240px;right:-120px;width:540px;height:540px;background:rgba(242,140,40,.2)}.heroGlowTwo{bottom:-320px;left:-180px;width:650px;height:650px;background:rgba(51,125,171,.17)}.heroInner{position:relative;z-index:2;max-width:1000px}.eyebrow{margin-bottom:18px;color:#ffc789;font-size:.78rem;font-weight:850;letter-spacing:.17em}.eyebrow.dark{color:var(--orange-dark)}.eyebrow.light{color:#ffd3a6}.heroTruths{display:grid;gap:12px;max-width:830px;margin:0 0 28px}.heroTruths p{margin:0;padding:14px 18px;border-left:3px solid var(--orange);background:rgba(255,255,255,.06);font-size:clamp(1.08rem,2vw,1.3rem)}.heroTurn{margin:32px 0 4px;color:rgba(255,255,255,.68);font-size:clamp(1.15rem,2vw,1.4rem)}.heroClose{margin-bottom:34px;font-size:clamp(1.45rem,2.6vw,2.05rem);font-weight:850}.heroActions{display:flex;flex-wrap:wrap;align-items:center;gap:20px}.primaryButton,.secondaryButton{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:56px;padding:15px 22px;border-radius:12px;font-weight:850;transition:.2s ease}.primaryButton{color:#fff;background:linear-gradient(135deg,var(--orange),var(--orange-dark));box-shadow:0 14px 30px rgba(242,140,40,.24)}.secondaryButton{color:var(--ink);border:2px solid var(--ink);background:#fff}.primaryButton:hover,.secondaryButton:hover{transform:translateY(-2px)}.textLink{color:rgba(255,255,255,.82);font-weight:750;text-decoration:underline;text-underline-offset:5px}.full{width:100%}.lead{color:var(--muted);font-size:clamp(1.14rem,2vw,1.38rem)}.lead.centered{max-width:760px;margin:-5px auto 48px;text-align:center}.why{background:var(--cream)}.why>.shell>h2,.why>.shell>.eyebrow{text-align:center}.comparisonGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.comparisonCard{padding:34px;border-radius:22px}.mutedCard{border:1px solid #eadfce;background:rgba(255,255,255,.58)}.featuredCard{border:1px solid #efc392;background:#fff;box-shadow:var(--shadow)}.comparisonLabel{margin-bottom:24px;color:var(--orange-dark);font-size:.8rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.comparisonFlow{display:grid;gap:8px;margin-bottom:24px;text-align:center}.comparisonFlow strong{padding:13px 15px;border:1px solid var(--line);border-radius:10px;background:#fff}.comparisonFlow span{color:var(--orange-dark);font-weight:900}.comparisonCard>p:last-child{margin-bottom:0;color:var(--muted)}.outcomeStrip{margin-top:28px;padding:30px;border-radius:18px;color:#fff;background:var(--ink);text-align:center}.outcomeStrip p{margin-bottom:10px;color:#cbd5e1}.outcomeStrip strong{font-size:clamp(1.18rem,2vw,1.5rem)}.conversations{color:#fff;background:var(--deep)}.conversations h2{max-width:780px;margin-bottom:46px}.messageStack{display:grid;gap:20px}.messageBubble{width:min(640px,88%);padding:22px 24px;border-radius:22px;box-shadow:0 18px 48px rgba(0,0,0,.18)}.messageBubble.left{justify-self:start;border-bottom-left-radius:7px;color:var(--ink);background:#fff}.messageBubble.right{justify-self:end;border-bottom-right-radius:7px;color:#fff;background:var(--orange-dark)}.messageBubble span{display:block;margin-bottom:8px;opacity:.6;font-size:.76rem}.messageBubble p{margin:0;font-size:1.22rem;line-height:1.45}.conversationNote{max-width:720px;margin:35px auto 0;color:rgba(255,255,255,.58);font-size:.9rem;text-align:center}.method{background:#fff}.sectionIntro{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:48px}.sectionIntro p:last-child{color:var(--muted)}.pillarGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.pillar{padding:28px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 14px 42px rgba(16,40,68,.06)}.pillar>span{display:block;margin-bottom:40px;color:var(--orange-dark);font-weight:900;letter-spacing:.12em}.pillar p{margin:0;color:var(--muted)}.identity{color:#fff;background:var(--ink)}.identityGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.identityCopy>p{color:#d3dce6}.checkList{display:grid;gap:13px;margin:26px 0;padding:0;list-style:none}.checkList li{display:flex;gap:11px;align-items:flex-start}.checkList svg{flex:0 0 auto;margin-top:3px;color:var(--orange)}.identityClosing{padding:20px;border-left:3px solid var(--orange);background:rgba(255,255,255,.06);font-weight:750}.transformation{background:#fff}.changeGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:46px;text-align:left}.changeGrid article{padding:22px;border:1px solid var(--line);border-radius:16px}.changeGrid article:nth-child(even){border-color:#efc392;background:var(--cream)}.changeGrid strong{display:block;margin-bottom:6px;color:var(--orange-dark);font-size:.76rem;letter-spacing:.12em;text-transform:uppercase}.changeGrid p{margin:0;font-weight:750}.offers{background:var(--cream)}.offerGrid{display:grid;grid-template-columns:1.08fr .92fr;gap:24px}.offerCard{position:relative;padding:38px;border:1px solid var(--line);border-radius:24px;background:#fff;box-shadow:0 18px 54px rgba(16,40,68,.08)}.offerCard.premium{border:2px solid var(--orange);box-shadow:var(--shadow)}.offerBadge{position:absolute;top:-14px;right:24px;padding:7px 12px;border-radius:999px;color:#fff;background:var(--orange-dark);font-size:.75rem;font-weight:850}.offerKicker{margin-bottom:12px;color:var(--orange-dark);font-size:.78rem;font-weight:900;letter-spacing:.12em}.price{margin:18px 0 10px;font-size:3rem;font-weight:900;letter-spacing:-.05em}.offerLead{color:var(--muted)}.compact{margin-bottom:30px}.offerNote{max-width:820px;margin:30px auto 0;color:var(--muted);text-align:center}.about{background:#fff}.aboutGrid{display:grid;grid-template-columns:260px 1fr;gap:70px;align-items:center}.aboutMark{display:grid;width:230px;height:230px;place-items:center;border-radius:50%;color:#fff;background:linear-gradient(135deg,var(--orange),var(--orange-dark));font-size:5rem;font-weight:900;box-shadow:var(--shadow)}.darkRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}.darkRow span{padding:8px 12px;border:1px solid var(--line);border-radius:999px;font-size:.82rem;font-weight:750}.booking{color:#fff;background:var(--deep)}.bookingGrid{display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:start}.bookingLead{color:#d6deea;font-size:1.2rem}.lightList li{color:#eef3f8}.lightMicrocopy{color:#9eabba}.calendarCard{overflow:hidden;padding:12px;border:1px solid rgba(255,255,255,.16);border-radius:22px;background:#fff;box-shadow:0 28px 80px rgba(0,0,0,.28)}.calendarHeader{display:flex;justify-content:space-between;gap:14px;padding:16px;color:var(--ink)}.calendarHeader strong,.calendarHeader span{display:block}.calendarHeader span{color:var(--muted);font-size:.86rem}.calendarCard iframe{display:block;border-radius:12px}.fallbackButton{margin-top:10px}.finalCta{padding:78px 0;color:#fff;background:var(--ink)}.finalCtaInner{display:flex;align-items:center;justify-content:space-between;gap:38px}.finalCta h2{max-width:760px;margin:0}footer{padding:42px 0 110px;color:#8da0b4;background:var(--deep)}.footerInner{display:flex;justify-content:space-between;gap:30px;font-size:.82rem}.footerInner span:last-child{max-width:700px;text-align:right}.mobileBar{display:none}
        @media(max-width:900px){.heroInner{max-width:800px}.comparisonGrid,.sectionIntro,.identityGrid,.offerGrid,.aboutGrid,.bookingGrid{grid-template-columns:1fr}.pillarGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.aboutMark{width:170px;height:170px;font-size:3.5rem}.calendarHeader{flex-direction:column}.finalCtaInner{align-items:flex-start;flex-direction:column}.footerInner{flex-direction:column}.footerInner span:last-child{text-align:left}}
        @media(max-width:650px){.shell,.narrow{width:min(100% - 28px,1180px)}.section{padding:78px 0}.nav{min-height:70px;padding:0 14px}.brand small{display:none}.navCta{padding:9px 12px;font-size:.78rem}.hero{padding:72px 0 90px}.heroTruths p{padding:12px 14px}.heroActions{align-items:stretch;flex-direction:column}.primaryButton,.secondaryButton{width:100%}.comparisonGrid,.pillarGrid,.changeGrid{grid-template-columns:1fr}.comparisonCard,.offerCard{padding:26px 22px}.messageBubble{width:94%;padding:18px}.messageBubble p{font-size:1.06rem}.aboutMark{width:130px;height:130px;font-size:2.8rem}.calendarCard{padding:7px}.calendarCard iframe{height:660px}.finalCta{padding-bottom:120px}footer{padding-bottom:140px}.mobileBar{position:fixed;z-index:50;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 14px;border-top:1px solid rgba(255,255,255,.16);color:#fff;background:rgba(8,26,47,.98);backdrop-filter:blur(12px)}.mobileBar strong,.mobileBar span{display:block}.mobileBar strong{font-size:.88rem}.mobileBar span{color:#aeb9c6;font-size:.72rem}.mobileBar a{padding:11px 14px;border-radius:9px;background:var(--orange);font-size:.82rem;font-weight:850;white-space:nowrap}}
      `}</style>
    </main>
  );
}
