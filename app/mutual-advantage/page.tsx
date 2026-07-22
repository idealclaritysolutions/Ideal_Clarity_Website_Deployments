import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mutual Advantage Intensive | Ideal Clarity",
  description:
    "A private interview strategy intensive for experienced professionals who are qualified—but are not consistently turning interviews into offers.",
};

const CALENDLY_URL =
  "https://calendly.com/REPLACE-WITH-YOUR-CALENDLY-LINK";

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="currentColor"
  >
    <path d="M7.6 6C4.7 7.8 3 10.3 3 13.5 3 16.2 4.6 18 7 18c2.1 0 3.7-1.6 3.7-3.8 0-2-1.4-3.4-3.4-3.4-.3 0-.7.1-1 .2.5-1.4 1.5-2.6 3-3.6L7.6 6Zm10.3 0c-2.9 1.8-4.6 4.3-4.6 7.5 0 2.7 1.6 4.5 4 4.5 2.1 0 3.7-1.6 3.7-3.8 0-2-1.4-3.4-3.4-3.4-.3 0-.7.1-1 .2.5-1.4 1.5-2.6 3-3.6L17.9 6Z" />
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
            <small>Make the next move make sense.</small>
          </span>
        </a>

        <a className="navCta" href="#investment">
          View the Intensive
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">THE MUTUAL ADVANTAGE INTENSIVE™</p>

            <h1>
              You’re qualified.
              <br />
              <span>Your interview just isn’t making the case.</span>
            </h1>

            <p className="heroLead">
              Stop trying to give the “perfect” answer. Learn how to show
              interviewers <strong>who you are professionally</strong>, why your
              results were not accidental, and why you can create that value
              again in their organization.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="#investment">
                See what we’ll build together <ArrowIcon />
              </a>
              <a className="textLink" href="#method">
                Explore the method
              </a>
            </div>

            <div className="credibilityRow" aria-label="Experience highlights">
              <span>10+ years in a Fortune 1 environment</span>
              <span>HR + recruiting experience</span>
              <span>Hiring-panel perspective</span>
            </div>
          </div>

          <aside className="heroCard" aria-label="Core promise">
            <div className="quoteIcon">
              <QuoteIcon />
            </div>
            <p>
              Your résumé tells them <em>what</em> you’ve done.
            </p>
            <p>
              Your interview must help them understand <em>who</em> produced
              those results—and why they should believe you can do it again.
            </p>
            <div className="cardLabel">The core idea behind the method</div>
          </aside>
        </div>
      </section>

      <section className="problem section">
        <div className="shell narrow">
          <p className="eyebrow dark">WHY STRONG CANDIDATES STILL GET REJECTED</p>
          <h2>
            Most interview advice solves the wrong problem.
          </h2>

          <div className="problemGrid">
            <div className="problemCard muted">
              <p className="problemLabel">What candidates are taught to do</p>
              <ul>
                <li>Memorize polished answers</li>
                <li>Recite accomplishments</li>
                <li>Follow a generic formula</li>
                <li>Try to impress the interviewer</li>
              </ul>
            </div>

            <div className="problemCard accent">
              <p className="problemLabel">What interviewers actually need</p>
              <ul>
                <li>Evidence they can trust</li>
                <li>A clear professional identity</li>
                <li>Confidence you understand their problem</li>
                <li>A reason to believe you can create value again</li>
              </ul>
            </div>
          </div>

          <p className="centerStatement">
            You do not need more rehearsed answers.
            <br />
            <strong>
              You need a stronger business case for why you are the right hire.
            </strong>
          </p>
        </div>
      </section>

      <section className="method section" id="method">
        <div className="shell">
          <div className="sectionIntro">
            <div>
              <p className="eyebrow dark">THE MUTUAL ADVANTAGE METHOD™</p>
              <h2>A different way to understand interviews.</h2>
            </div>
            <p>
              Interviews are not tests. They are mutual business conversations
              where both sides are deciding whether working together creates
              value.
            </p>
          </div>

          <div className="pillarGrid">
            <article className="pillar">
              <span className="pillarNumber">01</span>
              <h3>Professional Identity</h3>
              <p>
                Define the strengths, patterns, judgment, and character traits
                that explain how you consistently create results.
              </p>
            </article>

            <article className="pillar">
              <span className="pillarNumber">02</span>
              <h3>Evidence of Value</h3>
              <p>
                Connect your achievements to the capabilities that produced them
                so your stories become proof—not résumé repetition.
              </p>
            </article>

            <article className="pillar">
              <span className="pillarNumber">03</span>
              <h3>Employer Perspective</h3>
              <p>
                Understand what each question is designed to assess and what
                uncertainty the interviewer is trying to resolve.
              </p>
            </article>

            <article className="pillar">
              <span className="pillarNumber">04</span>
              <h3>Strategic Positioning</h3>
              <p>
                Build a clear, credible case connecting who you are, what you
                have done, and why it matters for this role.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="identity section">
        <div className="shell identityGrid">
          <div>
            <p className="eyebrow light">THE QUESTION BEHIND THE QUESTION</p>
            <h2>“Tell me about yourself” is not asking for your biography.</h2>
          </div>

          <div className="identityCopy">
            <p>
              The interviewer already has your résumé. What they are really
              evaluating is the professional identity behind it:
            </p>

            <ul className="checkList">
              <li>
                <CheckIcon />
                What qualities repeatedly show up in the way you work?
              </li>
              <li>
                <CheckIcon />
                What abilities produced the successes on your résumé?
              </li>
              <li>
                <CheckIcon />
                Can you recognize what is relevant to this opportunity?
              </li>
              <li>
                <CheckIcon />
                Can they trust you to recreate that value on their team?
              </li>
            </ul>

            <p className="identityClosing">
              That is the difference between walking through your history and
              making a compelling case for your future.
            </p>
          </div>
        </div>
      </section>

      <section className="intensive section">
        <div className="shell">
          <div className="sectionIntro">
            <div>
              <p className="eyebrow dark">THE PRIVATE INTENSIVE</p>
              <h2>We will not prepare generic answers.</h2>
            </div>
            <p>
              We will build a personalized interview strategy around your
              experience, your target role, and the value the employer needs to
              see.
            </p>
          </div>

          <div className="deliverableGrid">
            {[
              [
                "Your Professional Identity Statement",
                "A clear articulation of the kind of professional you are and the value you consistently create.",
              ],
              [
                "Your “Tell Me About Yourself” Narrative",
                "A concise, memorable opening that connects your identity, achievements, and fit.",
              ],
              [
                "Your Evidence-Based Story Bank",
                "Role-relevant examples that prove your strengths instead of merely claiming them.",
              ],
              [
                "Your Interviewer Assessment Map",
                "A practical guide to what common questions are really measuring.",
              ],
              [
                "Your Positioning Strategy",
                "A cohesive case for why your background makes sense for this specific opportunity.",
              ],
              [
                "Your Personalized Action Plan",
                "Clear next steps so you know exactly what to practice before your interview.",
              ],
            ].map(([title, copy]) => (
              <article className="deliverable" key={title}>
                <div className="deliverableCheck">
                  <CheckIcon />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="notIncluded">
            <strong>This is not:</strong>
            <span>a generic mock interview</span>
            <span>a list of scripted answers</span>
            <span>a promise that anyone can guarantee an offer</span>
          </div>
        </div>
      </section>

      <section className="fit section">
        <div className="shell fitGrid">
          <div className="fitCard good">
            <p className="eyebrow dark">THIS IS FOR YOU IF…</p>
            <h2>You know you are capable—but your interviews are not proving it.</h2>
            <ul className="checkList">
              <li>
                <CheckIcon /> You are getting interviews but not enough offers.
              </li>
              <li>
                <CheckIcon /> You struggle to explain your value without
                rambling.
              </li>
              <li>
                <CheckIcon /> You are pursuing a competitive or higher-level
                role.
              </li>
              <li>
                <CheckIcon /> You want a framework you can use throughout your
                career.
              </li>
            </ul>
          </div>

          <div className="fitCard neutral">
            <p className="eyebrow dark">THIS IS NOT FOR YOU IF…</p>
            <h2>You are looking for shortcuts, scripts, or guaranteed outcomes.</h2>
            <ul className="plainList">
              <li>You want someone to invent experiences you do not have.</li>
              <li>You are unwilling to examine how you currently interview.</li>
              <li>You only want a last-minute list of “perfect” answers.</li>
              <li>You expect anyone to guarantee a hiring decision.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="shell aboutGrid">
          <div className="portraitWrap">
            <img
              src="/images/chichi-headshot.jpg"
              alt="Chi-Chi, creator of the Mutual Advantage Method"
              className="portrait"
            />
            <div className="portraitNote">
              Replace this image with:
              <br />
              <code>/public/images/chichi-headshot.jpg</code>
            </div>
          </div>

          <div>
            <p className="eyebrow dark">MEET CHI-CHI</p>
            <h2>I have seen interviews from both sides of the table.</h2>
            <p>
              My perspective comes from experience across HR, recruiting, hiring
              panels, and program leadership inside a Fortune 1 environment.
            </p>
            <p>
              I also know what it feels like to be a qualified candidate who
              keeps approaching interviews as a performance. Once I stopped
              treating them like tests and started treating them like mutual
              business conversations, the way I prepared—and the outcomes I
              achieved—changed.
            </p>
            <p>
              I created the Mutual Advantage Method™ to help experienced
              professionals understand what interviewers are actually trying to
              learn and communicate their value with greater clarity,
              confidence, and credibility.
            </p>
          </div>
        </div>
      </section>

      <section className="investment section" id="investment">
        <div className="shell investmentGrid">
          <div>
            <p className="eyebrow light">THE MUTUAL ADVANTAGE INTENSIVE™</p>
            <h2>Make your next interview tell the right story.</h2>
            <p className="investmentLead">
              A focused, private strategy intensive built around your
              experience, your target role, and the interview decisions you need
              to influence.
            </p>

            <ul className="checkList compact">
              <li>
                <CheckIcon /> 90-minute private strategy session
              </li>
              <li>
                <CheckIcon /> Pre-session résumé and job-description review
              </li>
              <li>
                <CheckIcon /> Personalized frameworks and working materials
              </li>
              <li>
                <CheckIcon /> Action plan for your next interview
              </li>
            </ul>
          </div>

          <div className="priceCard">
            <p className="priceLabel">Your investment</p>
            <div className="price">$697</div>
            <p className="priceNote">One private 90-minute intensive</p>

            <a
              className="primaryButton full"
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book the Mutual Advantage Intensive <ArrowIcon />
            </a>

            <p className="microcopy">
              Secure checkout and scheduling are completed through Calendly.
              No job offer is guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="shell narrow">
          <p className="eyebrow dark">FREQUENTLY ASKED QUESTIONS</p>
          <h2>Before you book</h2>

          <div className="faqList">
            <details>
              <summary>Can you guarantee I will get the job?</summary>
              <p>
                No. No ethical interview professional can control or guarantee a
                company’s hiring decision. What I can do is help you build a
                clearer, stronger, evidence-based case for why you are a fit.
              </p>
            </details>

            <details>
              <summary>Is this just a mock interview?</summary>
              <p>
                No. A mock interview may be part of the work when useful, but
                the Intensive focuses first on the strategy behind your answers:
                your professional identity, evidence, positioning, and the
                interviewer’s decision criteria.
              </p>
            </details>

            <details>
              <summary>What should I send before the session?</summary>
              <p>
                You will be asked to provide your résumé, the target job
                description, your interview timeline, and the areas where you
                currently feel least confident.
              </p>
            </details>

            <details>
              <summary>What if I do not have an interview scheduled yet?</summary>
              <p>
                You can still benefit. We can build the framework around the
                types of roles you are targeting so you are prepared before an
                opportunity becomes urgent.
              </p>
            </details>

            <details>
              <summary>Who is this best suited for?</summary>
              <p>
                The Intensive is designed primarily for experienced
                professionals, career changers, and emerging or established
                leaders pursuing competitive roles where clear positioning
                matters.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <p className="eyebrow light">YOU ALREADY HAVE THE EXPERIENCE.</p>
            <h2>Now make the interviewer understand its value.</h2>
          </div>
          <a
            className="primaryButton lightButton"
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book your Intensive <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <span>© {new Date().getFullYear()} Ideal Clarity Solutions</span>
          <span>
            The Mutual Advantage Method™ is an independent career-development
            framework. It is not affiliated with or endorsed by any employer.
          </span>
        </div>
      </footer>

      <div className="mobileBar">
        <div>
          <strong>Mutual Advantage Intensive™</strong>
          <span>Private 90-minute strategy session</span>
        </div>
        <a href="#investment">View details</a>
      </div>

      <style jsx global>{`
        :root {
          --ink: #102844;
          --ink-deep: #081a2f;
          --orange: #f28c28;
          --orange-dark: #cf6f15;
          --cream: #fff8ef;
          --sand: #f3eadf;
          --paper: #ffffff;
          --muted: #607086;
          --line: #dfe6ee;
          --success: #227a5b;
          --shadow: 0 24px 70px rgba(16, 40, 68, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: var(--ink);
          background: var(--paper);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        h1 {
          margin-bottom: 26px;
          font-size: clamp(3rem, 7.3vw, 6.7rem);
          max-width: 900px;
        }

        h1 span {
          color: var(--orange);
        }

        h2 {
          margin-bottom: 24px;
          font-size: clamp(2.25rem, 4.5vw, 4.4rem);
        }

        h3 {
          margin-bottom: 12px;
          font-size: 1.35rem;
        }

        p {
          font-size: 1.06rem;
        }

        .shell {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .narrow {
          width: min(900px, calc(100% - 40px));
        }

        .section {
          padding: 110px 0;
        }

        .nav {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 82px;
          padding: 0 max(24px, calc((100vw - 1180px) / 2));
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          background: var(--ink-deep);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandMark {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: var(--orange);
          font-weight: 850;
        }

        .brand strong,
        .brand small {
          display: block;
        }

        .brand small {
          opacity: 0.7;
          font-size: 0.74rem;
        }

        .navCta {
          padding: 10px 16px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 750;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 110px 0 125px;
          color: #fff;
          background:
            linear-gradient(125deg, rgba(8, 26, 47, 0.98), rgba(16, 40, 68, 0.96)),
            var(--ink-deep);
        }

        .heroGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(8px);
          pointer-events: none;
        }

        .heroGlowOne {
          top: -220px;
          right: -120px;
          width: 520px;
          height: 520px;
          background: rgba(242, 140, 40, 0.18);
        }

        .heroGlowTwo {
          bottom: -280px;
          left: -160px;
          width: 600px;
          height: 600px;
          background: rgba(51, 125, 171, 0.16);
        }

        .heroGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.72fr);
          gap: 72px;
          align-items: center;
        }

        .eyebrow {
          margin-bottom: 18px;
          color: #ffc789;
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.17em;
        }

        .eyebrow.dark {
          color: var(--orange-dark);
        }

        .eyebrow.light {
          color: #ffd3a6;
        }

        .heroLead {
          max-width: 780px;
          margin-bottom: 34px;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1.14rem, 2vw, 1.42rem);
        }

        .heroLead strong {
          color: #fff;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-bottom: 36px;
        }

        .primaryButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 56px;
          padding: 15px 22px;
          border-radius: 12px;
          color: #fff;
          background: linear-gradient(135deg, var(--orange), var(--orange-dark));
          box-shadow: 0 14px 30px rgba(242, 140, 40, 0.24);
          font-weight: 850;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .primaryButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(242, 140, 40, 0.3);
        }

        .textLink {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 750;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .credibilityRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .credibilityRow span {
          padding: 8px 11px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 0.82rem;
        }

        .heroCard {
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
        }

        .quoteIcon {
          color: var(--orange);
        }

        .heroCard p {
          margin-bottom: 14px;
          font-size: 1.24rem;
          line-height: 1.48;
        }

        .heroCard em {
          color: #ffc789;
          font-style: normal;
          font-weight: 850;
        }

        .cardLabel {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .problem {
          background: var(--cream);
        }

        .problem h2,
        .centerStatement {
          text-align: center;
        }

        .problemGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin: 54px 0;
        }

        .problemCard {
          padding: 34px;
          border-radius: 20px;
        }

        .problemCard.muted {
          border: 1px solid #eadfce;
          background: rgba(255, 255, 255, 0.52);
        }

        .problemCard.accent {
          border: 1px solid #efc392;
          background: #fff;
          box-shadow: var(--shadow);
        }

        .problemLabel {
          margin-bottom: 20px;
          font-weight: 850;
        }

        .problemCard ul,
        .plainList {
          margin: 0;
          padding-left: 20px;
        }

        .problemCard li,
        .plainList li {
          margin: 12px 0;
        }

        .centerStatement {
          font-size: clamp(1.3rem, 2.6vw, 1.9rem);
        }

        .sectionIntro {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 56px;
        }

        .sectionIntro p:last-child {
          color: var(--muted);
          font-size: 1.18rem;
        }

        .pillarGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .pillar {
          min-height: 290px;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #fff;
        }

        .pillarNumber {
          display: block;
          margin-bottom: 62px;
          color: var(--orange-dark);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .pillar p,
        .deliverable p,
        .about p {
          color: var(--muted);
        }

        .identity {
          color: #fff;
          background: var(--ink);
        }

        .identityGrid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 90px;
          align-items: start;
        }

        .identityCopy > p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1.14rem;
        }

        .checkList {
          display: grid;
          gap: 14px;
          margin: 28px 0;
          padding: 0;
          list-style: none;
        }

        .checkList li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .checkList svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--orange);
        }

        .identityClosing {
          padding-left: 18px;
          border-left: 3px solid var(--orange);
          color: #fff !important;
          font-weight: 750;
        }

        .deliverableGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .deliverable {
          display: flex;
          gap: 18px;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 18px;
        }

        .deliverableCheck {
          display: grid;
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: var(--success);
        }

        .notIncluded {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-top: 28px;
          padding: 20px 24px;
          border-radius: 14px;
          background: var(--cream);
        }

        .notIncluded span {
          padding: 6px 10px;
          border: 1px solid #eadfce;
          border-radius: 999px;
          color: var(--muted);
          background: #fff;
          font-size: 0.85rem;
        }

        .fit {
          background: #f7f9fb;
        }

        .fitGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .fitCard {
          padding: 42px;
          border-radius: 22px;
        }

        .fitCard.good {
          border: 1px solid #dfe9e5;
          background: #fff;
          box-shadow: var(--shadow);
        }

        .fitCard.neutral {
          border: 1px solid var(--line);
          background: #edf1f5;
        }

        .fitCard h2 {
          font-size: clamp(2rem, 3.3vw, 3.2rem);
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 0.74fr 1.26fr;
          gap: 80px;
          align-items: center;
        }

        .portraitWrap {
          position: relative;
        }

        .portrait {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 26px;
          background: var(--sand);
          box-shadow: var(--shadow);
        }

        .portraitNote {
          position: absolute;
          right: 18px;
          bottom: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          color: #fff;
          background: rgba(8, 26, 47, 0.84);
          font-size: 0.72rem;
        }

        .portraitNote code {
          color: #ffd3a6;
        }

        .investment {
          color: #fff;
          background:
            radial-gradient(circle at 20% 20%, rgba(242, 140, 40, 0.12), transparent 30%),
            var(--ink-deep);
        }

        .investmentGrid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 80px;
          align-items: center;
        }

        .investmentLead {
          max-width: 680px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 1.18rem;
        }

        .compact {
          margin-bottom: 0;
        }

        .priceCard {
          padding: 38px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .priceLabel {
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .price {
          margin: 8px 0;
          font-size: clamp(3.8rem, 7vw, 6.2rem);
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 1;
        }

        .priceNote {
          margin-bottom: 26px;
          color: rgba(255, 255, 255, 0.72);
        }

        .full {
          width: 100%;
        }

        .microcopy {
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.76rem;
          text-align: center;
        }

        .faq {
          background: var(--cream);
        }

        .faqList {
          margin-top: 38px;
        }

        details {
          border-bottom: 1px solid #ded5ca;
        }

        summary {
          cursor: pointer;
          padding: 24px 0;
          font-size: 1.08rem;
          font-weight: 850;
        }

        details p {
          max-width: 760px;
          padding: 0 0 24px;
          color: var(--muted);
        }

        .finalCta {
          padding: 76px 0;
          color: #fff;
          background: var(--orange-dark);
        }

        .finalCtaInner {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: space-between;
        }

        .finalCta h2 {
          max-width: 760px;
          margin-bottom: 0;
        }

        .lightButton {
          flex: 0 0 auto;
          color: var(--ink);
          background: #fff;
          box-shadow: none;
        }

        footer {
          padding: 34px 0 100px;
          color: rgba(255, 255, 255, 0.58);
          background: var(--ink-deep);
        }

        .footerInner {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          font-size: 0.74rem;
        }

        .footerInner span:last-child {
          max-width: 660px;
          text-align: right;
        }

        .mobileBar {
          display: none;
        }

        @media (max-width: 960px) {
          .heroGrid,
          .sectionIntro,
          .identityGrid,
          .aboutGrid,
          .investmentGrid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .pillarGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroCard {
            max-width: 640px;
          }

          .portraitWrap {
            max-width: 480px;
          }

          .sectionIntro {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 700px) {
          h1 {
            font-size: clamp(2.85rem, 14vw, 4.7rem);
          }

          h2 {
            font-size: clamp(2.1rem, 10vw, 3.4rem);
          }

          .shell,
          .narrow {
            width: min(100% - 28px, 1180px);
          }

          .section {
            padding: 78px 0;
          }

          .nav {
            min-height: 72px;
            padding: 0 16px;
          }

          .navCta {
            display: none;
          }

          .brand small {
            display: none;
          }

          .hero {
            padding: 78px 0 90px;
          }

          .heroGrid {
            gap: 36px;
          }

          .heroActions {
            align-items: stretch;
            flex-direction: column;
          }

          .primaryButton {
            width: 100%;
          }

          .textLink {
            text-align: center;
          }

          .problemGrid,
          .deliverableGrid,
          .fitGrid,
          .pillarGrid {
            grid-template-columns: 1fr;
          }

          .problemCard,
          .fitCard,
          .priceCard,
          .heroCard {
            padding: 26px;
          }

          .pillar {
            min-height: auto;
          }

          .pillarNumber {
            margin-bottom: 32px;
          }

          .notIncluded {
            align-items: flex-start;
            flex-direction: column;
          }

          .finalCtaInner,
          .footerInner {
            align-items: stretch;
            flex-direction: column;
          }

          .footerInner span:last-child {
            text-align: left;
          }

          footer {
            padding-bottom: 120px;
          }

          .mobileBar {
            position: fixed;
            z-index: 50;
            right: 10px;
            bottom: 10px;
            left: 10px;
            display: flex;
            gap: 14px;
            align-items: center;
            justify-content: space-between;
            padding: 12px 12px 12px 15px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 16px;
            color: #fff;
            background: rgba(8, 26, 47, 0.96);
            box-shadow: 0 18px 50px rgba(8, 26, 47, 0.25);
            backdrop-filter: blur(14px);
          }

          .mobileBar strong,
          .mobileBar span {
            display: block;
          }

          .mobileBar strong {
            font-size: 0.78rem;
          }

          .mobileBar span {
            color: rgba(255, 255, 255, 0.62);
            font-size: 0.67rem;
          }

          .mobileBar a {
            flex: 0 0 auto;
            padding: 10px 12px;
            border-radius: 9px;
            color: #fff;
            background: var(--orange-dark);
            font-size: 0.75rem;
            font-weight: 850;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .primaryButton {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
