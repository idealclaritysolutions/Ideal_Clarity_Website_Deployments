import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mutual Advantage Intensive | Ideal Clarity",
  description:
    "A private interview strategy intensive for experienced professionals who are qualified—but are not consistently turning interviews into offers.",
};

const CALENDLY_URL =
  "https://calendly.com/idealclaritysolutions/the-mutual-advantage-intensive-session";

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
          <img
            src="/images/ideal-clarity-logo.png"
            alt="Ideal Clarity — Here to make it make sense."
            className="brandLogo"
          />
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
              You keep getting interviews.
              <br />
              <span>You keep not getting offers.</span>
            </h1>

            <div className="statStrip" aria-label="Chi-Chi's interview results">
              <span className="statStripFrom">34 interviews → 1 offer</span>
              <span className="statStripArrow">➔</span>
              <span className="statStripNow">
                <strong>80%</strong> success rate today
              </span>
            </div>

            <p className="heroSub">
              The best candidate doesn’t always win.
              <br />
              <span className="heroSubAccent">
                The one who communicates their value most clearly does.
              </span>
            </p>

            <p className="heroLead">
              You’ve spent years learning to <strong>create</strong> value—and
              almost no time learning to <strong>communicate</strong> it.
              <br />
              One focused 90-minute session changes that.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="#probably-here">
                Keep scrolling ↓
              </a>
              <a className="textLink" href="#method">
                Why most interview advice doesn’t work
              </a>
            </div>

            <div className="credibilityRow" aria-label="Experience highlights">
              <span>10+ years in a Fortune 1 environment</span>
              <span>HR + recruiting experience</span>
              <span>Hiring-panel perspective</span>
            </div>
          </div>

          <aside className="heroCard" aria-label="Core philosophy">
            <div className="statBadge" aria-label="Chi-Chi's interview results">
              <span className="statBadgeTop">34 interviews → 1 offer</span>
              <span className="statBadgeBig">80%</span>
              <span className="statBadgeBottom">success rate today</span>
            </div>

            <div className="quoteIcon">
              <QuoteIcon />
            </div>
            <p>Interviews aren’t tests.</p>
            <p>
              They’re mutual business conversations where both sides are
              deciding whether working together creates value.
            </p>
            <p>
              The best interviews don’t feel like performances. They feel like
              two professionals exploring whether there’s a genuine{" "}
              <em>mutual advantage</em>.
            </p>
            <div className="cardLabel">
              The philosophy behind the Mutual Advantage Method™
            </div>
          </aside>
        </div>
      </section>

      <section
        className="section"
        id="probably-here"
        style={{ background: "#fff" }}
      >
        <div className="shell narrow">
          <p className="eyebrow dark">YOU’RE PROBABLY HERE BECAUSE…</p>

          <h2>
            You’re doing everything people told you to do…
            <br />
            but you’re still not getting the offer.
          </h2>

          <div className="deliverableGrid">
            <article className="deliverable">
              <div className="deliverableCheck">
                <CheckIcon />
              </div>
              <div>
                <h3>You keep getting interviews.</h3>
                <p>
                  Which means your résumé is working. Something changes once
                  the conversation starts.
                </p>
              </div>
            </article>

            <article className="deliverable">
              <div className="deliverableCheck">
                <CheckIcon />
              </div>
              <div>
                <h3>You leave interviews feeling… “I thought that went well.”</h3>
                <p>Then another rejection arrives.</p>
              </div>
            </article>

            <article className="deliverable">
              <div className="deliverableCheck">
                <CheckIcon />
              </div>
              <div>
                <h3>You’ve watched YouTube…</h3>
                <p>
                  Used ChatGPT. Practiced STAR. Read articles. Yet nothing
                  seems to change.
                </p>
              </div>
            </article>

            <article className="deliverable">
              <div className="deliverableCheck">
                <CheckIcon />
              </div>
              <div>
                <h3>You’re beginning to question yourself.</h3>
                <p>Even though deep down… you know you’re qualified.</p>
              </div>
            </article>
          </div>

          <p
            style={{
              marginTop: 40,
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.3rem",
            }}
          >
            If that sounds familiar… you’re exactly who I built this for.
          </p>
        </div>
      </section>

      <section className="problem section">
        <div className="shell narrow">
          <p className="eyebrow dark">
            WHY MOST INTERVIEW ADVICE DOESN’T WORK
          </p>
          <h2>Most coaching starts with your answers. That’s backwards.</h2>

          <div className="problemGrid">
            <div className="problemCard muted">
              <p className="problemLabel">Interview coaching usually teaches</p>
              <div className="flowChain mutedChain">
                <span>✔ Better answers</span>
                <span>✔ Better stories</span>
                <span>✔ Better confidence</span>
                <span className="flowArrow">↓</span>
                <span className="flowResult">Hope for better results</span>
              </div>
            </div>

            <div className="problemCard accent">
              <p className="problemLabel">
                The Mutual Advantage Method teaches
              </p>
              <div className="flowChain">
                <span>Employer Needs</span>
                <span className="flowArrow">↓</span>
                <span>Hiring Decisions</span>
                <span className="flowArrow">↓</span>
                <span>Interview Questions</span>
                <span className="flowArrow">↓</span>
                <span>Professional Identity</span>
                <span className="flowArrow">↓</span>
                <span className="flowResult">Your Answers</span>
              </div>
            </div>
          </div>

          <p className="centerStatement">
            When you understand what interviewers are actually trying to
            learn, your answers naturally become{" "}
            <strong>more relevant, more strategic, and more convincing.</strong>
          </p>
        </div>
      </section>

      <section className="convo section">
        <div className="shell narrow">
          <p className="eyebrow light">CONVERSATIONS I HEAR ALL THE TIME</p>
          <h2>Maybe one of these sounds like you.</h2>

          <div className="convoBubbles">
            <div className="bubble">
              <p>I don’t understand it.</p>
              <p>I keep getting interviews…</p>
              <p>but never the offer.</p>
            </div>

            <div className="bubble">
              <p>Everyone keeps telling me I interview well…</p>
              <p>so why isn’t anything happening?</p>
            </div>

            <div className="bubble">
              <p>I know I’m qualified.</p>
              <p>I just don’t know how to communicate it.</p>
            </div>
          </div>

          <p className="convoDisclaimer">
            These aren’t testimonials. They’re versions of conversations I’ve
            had with professionals before they changed how they approached
            interviews.
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
              A hiring decision is a business decision—and business decisions
              follow logic. The method works backwards from that logic: from
              what the employer needs, to what their questions are really
              asking, to answers that make your value obvious.
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

      <section className="about section">
        <div className="shell aboutGrid">
          <div className="portraitWrap">
            <img
              src="/images/chichi-headshot.jpg"
              alt="Chi-Chi, creator of the Mutual Advantage Method"
              className="portrait"
            />
          </div>

          <div className="aboutCopy">
            <p className="eyebrow dark">MEET CHI-CHI</p>
            <h2>I have seen interviews from both sides of the table.</h2>
            <p>
              My perspective comes from experience across HR, recruiting, hiring
              panels, and program leadership inside a Fortune 1 environment.
            </p>
            <p>
              I also know what it feels like to be a qualified candidate who
              keeps approaching interviews as a performance—because I was one.
            </p>
            <p>
              Early in my career, I went through{" "}
              <strong>34 interviews before landing a single role</strong>.
            </p>
            <p>
              Then I stopped treating interviews like tests and started
              treating them like mutual business conversations. Everything
              about how I prepared changed—and so did my results:{" "}
              <strong>
                an 80% interview success rate, meaning 8 of the last 10 roles
                I’ve interviewed for ended in an offer.
              </strong>
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
            <p className="priceStatement">
              Your next interview could determine the next several years of
              your career.
            </p>
            <p className="priceSubStatement">
              Let’s make sure it tells the right story.
            </p>

            <p className="priceListHeading">During our session, we’ll build:</p>
            <ul className="checkList compact priceChecklist">
              <li>
                <CheckIcon /> Your “Tell Me About Yourself” narrative, built on
                your Professional Identity Statement
              </li>
              <li>
                <CheckIcon /> Your interview positioning strategy
              </li>
              <li>
                <CheckIcon /> Your personalized interview framework
              </li>
              <li>
                <CheckIcon /> Your action plan
              </li>
            </ul>

            <div className="priceDivider" />

            <p className="priceListHeading">So that you can…</p>
            <ul className="checkList compact priceChecklist">
              <li>
                <CheckIcon /> Stop trying to impress interviewers
              </li>
              <li>
                <CheckIcon /> Stop rambling through your answers
              </li>
              <li>
                <CheckIcon /> Communicate your value with clarity and
                confidence
              </li>
              <li>
                <CheckIcon /> Become the candidate employers can clearly
                envision succeeding in the role
              </li>
            </ul>

            <p className="priceLine">
              <span className="priceAmount">$697</span> · one private
              90-minute intensive
            </p>

            <a
              className="primaryButton full"
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Make my next interview count <ArrowIcon />
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
            <p className="eyebrow light">YOU DON’T NEED BETTER ANSWERS.</p>
            <h2>You need a better way to communicate your value.</h2>
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

      <style>{`
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
          margin-bottom: 22px;
          font-size: clamp(2.7rem, 6.2vw, 5.6rem);
          max-width: 980px;
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

        .brandLogo {
          display: block;
          height: 48px;
          width: auto;
          padding: 5px 12px;
          border-radius: 12px;
          background: #fff;
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
          align-items: start;
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

        .heroSub {
          margin-bottom: 14px;
          color: #fff;
          font-size: clamp(1.28rem, 2.4vw, 1.7rem);
          font-weight: 800;
          letter-spacing: -0.015em;
          line-height: 1.3;
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

        .heroSubAccent {
          color: var(--orange);
        }

        .heroCard {
          position: relative;
          margin-top: clamp(72px, 9.5vw, 138px);
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
        }

        .statBadge {
          position: absolute;
          top: -46px;
          right: -30px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 164px;
          height: 164px;
          padding: 20px;
          border-radius: 50%;
          transform: rotate(7deg);
          color: var(--ink-deep);
          background: var(--orange);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
          text-align: center;
          line-height: 1.15;
        }

        .statBadgeTop {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          opacity: 0.85;
        }

        .statBadgeBig {
          margin: 3px 0 1px;
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .statBadgeBottom {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          opacity: 0.85;
        }

        .statStrip {
          display: none;
          align-items: center;
          gap: 10px;
          width: fit-content;
          margin: -4px 0 22px;
          padding: 10px 16px;
          border-radius: 999px;
          color: var(--ink-deep);
          background: var(--orange);
          font-size: 0.86rem;
          font-weight: 750;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
        }

        .statStrip strong {
          font-weight: 900;
          font-size: 1.05rem;
        }

        .statStripArrow {
          opacity: 0.7;
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

        .problemCard ul {
          margin: 0;
          padding-left: 20px;
        }

        .problemCard li {
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

        .flowChain {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
          font-size: 1.02rem;
          font-weight: 650;
        }

        .mutedChain {
          color: var(--muted);
        }

        .flowArrow {
          opacity: 0.55;
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1;
        }

        .flowResult {
          font-weight: 850;
        }

        .problemCard.accent .flowResult {
          color: var(--orange);
        }

        .convo {
          color: #fff;
          background:
            radial-gradient(circle at 80% 10%, rgba(242, 140, 40, 0.1), transparent 40%),
            var(--ink-deep);
        }

        .convoBubbles {
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-width: 560px;
          margin-top: 44px;
        }

        .bubble {
          position: relative;
          align-self: flex-start;
          max-width: 88%;
          padding: 16px 20px;
          border-radius: 22px;
          border-bottom-left-radius: 6px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bubble:nth-child(2) {
          align-self: flex-end;
          border-bottom-left-radius: 22px;
          border-bottom-right-radius: 6px;
          background: rgba(242, 140, 40, 0.22);
        }

        .bubble p {
          margin: 0;
          font-size: 1.04rem;
          line-height: 1.5;
        }

        .bubble p + p {
          margin-top: 4px;
        }

        .convoDisclaimer {
          max-width: 640px;
          margin-top: 44px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.86rem;
        }

        .priceStatement {
          margin-bottom: 6px;
          font-size: 1.14rem;
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .priceSubStatement {
          margin-bottom: 14px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.98rem;
        }

        .priceListHeading {
          margin: 22px 0 14px;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--orange);
        }

        .priceDivider {
          height: 1px;
          margin: 22px 0;
          background: rgba(255, 255, 255, 0.14);
        }

        .priceChecklist {
          margin: 0;
        }

        .priceChecklist:last-of-type {
          margin-bottom: 28px;
        }

        .priceChecklist li {
          color: #fff;
          font-size: 1.04rem;
          font-weight: 600;
        }

        .priceLine {
          margin: 0 0 14px;
          text-align: center;
          color: rgba(255, 255, 255, 0.72);
          font-size: 1rem;
        }

        .priceAmount {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 850;
          letter-spacing: -0.02em;
        }

        .priceChecklist li {
          font-size: 0.98rem;
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

        .aboutCopy p:not(.eyebrow) {
          margin-bottom: 18px;
          line-height: 1.65;
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
            margin-top: 0;
          }

          .statBadge {
            display: none;
          }

          .statStrip {
            display: inline-flex;
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
            font-size: clamp(2.3rem, 11vw, 3.6rem);
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

          .brandLogo {
            height: 40px;
            padding: 4px 9px;
          }

          .statStrip {
            gap: 8px;
            padding: 9px 13px;
            font-size: 0.78rem;
          }

          .statStrip strong {
            font-size: 0.95rem;
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
          .pillarGrid {
            grid-template-columns: 1fr;
          }

          .problemCard,
          .priceCard,
          .heroCard {
            padding: 26px;
            margin-top: 0;
          }

          .bubble {
            max-width: 100%;
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
