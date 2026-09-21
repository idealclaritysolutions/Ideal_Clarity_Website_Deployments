"use client"

import { useMemo, useState } from "react"
import {
  buildQuestions,
  calculateResultType,
  isFearPick,
  type Question,
  type ResultType,
} from "./quiz-logic"

type Step = "landing" | "intro" | "assessment" | "email" | "results"

const CALENDLY_URL = "https://calendly.com/idealclaritysolutions/next-chapter"
const BOOK_CTA = "Book Your FREE Next Chapter Conversation"

const STYLES = `
.fof{--navy:#0a1424;--navy2:#12233d;--gold:#b07c1e;--gold-lt:#e8a93d;--gold-pale:#f4c76a;--ivory:#fffdf6;--ivory-dk:#f3e9d2;--ink:#1a2433;--muted:#5b6b80;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  background:var(--ivory);color:var(--ink);line-height:1.6;min-height:100vh}
.fof .serif{font-family:Georgia,"Times New Roman",serif}
.fof .wrap{max-width:860px;margin:0 auto;padding:0 20px}
.fof .hero{background:radial-gradient(1200px 700px at 80% -10%, #16345c 0%, var(--navy) 55%, #081627 100%);
  color:#fff;text-align:center;padding:72px 20px 64px}
.fof .eyebrow{display:inline-block;font-size:12px;letter-spacing:3px;color:var(--gold-pale);
  border:1px solid rgba(232,169,61,.5);border-radius:999px;padding:8px 18px;margin-bottom:24px}
.fof .hero h1{font-size:clamp(34px,6vw,58px);line-height:1.12;margin-bottom:18px;color:#fff}
.fof .hero h1 .gold{color:var(--gold-pale)}
.fof .hero p.lead{font-size:clamp(16px,2.4vw,21px);color:#dbe5f1;max-width:640px;margin:0 auto 14px}
.fof .btn{display:inline-block;background:linear-gradient(135deg,var(--gold-lt),var(--gold));
  color:#fff;font-weight:800;font-size:17px;letter-spacing:.5px;border:none;border-radius:12px;
  padding:18px 42px;cursor:pointer;text-decoration:none;box-shadow:0 8px 24px rgba(176,124,30,.35);
  transition:transform .15s;font-family:inherit}
.fof .btn:hover{transform:translateY(-2px)}
.fof .btn-ghost{background:transparent;border:2px solid var(--gold);color:var(--gold-pale);box-shadow:none}
.fof .trust{display:flex;flex-wrap:wrap;gap:18px;justify-content:center;margin-top:26px;
  font-size:13px;color:#9fb2c8}
.fof section.block{padding:56px 0}
.fof .split{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:28px}
@media(max-width:640px){.fof .split{grid-template-columns:1fr}}
.fof .card{background:#fff;border:1px solid #e8dfc9;border-radius:16px;padding:30px;
  box-shadow:0 4px 18px rgba(10,20,36,.06)}
.fof .card h3{font-size:22px;margin-bottom:14px}
.fof .card.tell{border-top:5px solid var(--muted)}
.fof .card.truth{border-top:5px solid var(--gold);background:linear-gradient(180deg,#fffdf6,#fdf6e3)}
.fof .card ul{list-style:none}
.fof .card li{padding:9px 0;border-bottom:1px dashed #eee2c4;font-size:16px}
.fof .card li:last-child{border:none}
.fof .check-list{list-style:none;margin-top:8px;padding:0}
.fof .check-list li{display:flex;gap:12px;padding:10px 0;font-size:17px;align-items:flex-start}
.fof .check-list .ck{color:var(--gold);font-weight:900;font-size:20px;line-height:1.3}
.fof .x-list{list-style:none;padding:0}
.fof .x-list li{display:flex;gap:12px;padding:8px 0;font-size:16px;color:var(--muted)}
.fof .x-list .xx{color:#c0392b;font-weight:900}
.fof h2.sec{font-size:clamp(26px,4vw,36px);text-align:center;margin-bottom:10px}
.fof p.center{text-align:center;color:var(--muted)}
.fof .quiz-shell{max-width:720px;margin:0 auto;padding:40px 20px 60px}
.fof .progress{height:10px;background:#e8dfc9;border-radius:99px;overflow:hidden;margin:18px 0 30px}
.fof .progress>div{height:100%;background:linear-gradient(90deg,var(--gold-lt),var(--gold));
  border-radius:99px;transition:width .3s}
.fof .q-meta{display:flex;justify-content:space-between;font-size:13px;color:var(--muted);margin-bottom:8px}
.fof .q-card{background:#fff;border:1px solid #e8dfc9;border-radius:18px;padding:34px 30px;
  box-shadow:0 6px 24px rgba(10,20,36,.07)}
.fof .q-card h2{font-size:24px;margin-bottom:6px}
.fof .q-card .sub{color:var(--muted);font-size:14px;margin-bottom:20px}
.fof .opt{display:block;width:100%;text-align:left;background:var(--ivory);border:2px solid #e8dfc9;
  border-radius:12px;padding:15px 18px;font-size:16px;margin-bottom:10px;cursor:pointer;transition:all .15s;
  font-family:inherit;color:var(--ink)}
.fof .opt:hover{border-color:var(--gold-lt)}
.fof .opt.sel{border-color:var(--gold);background:#fdf6e3;box-shadow:0 0 0 3px rgba(232,169,61,.25)}
.fof .opt-group-label{font-size:12px;letter-spacing:2px;color:var(--gold);font-weight:800;margin:16px 0 8px}
.fof .q-nav{display:flex;justify-content:space-between;margin-top:22px;gap:12px}
.fof .btn-sm{padding:13px 30px;font-size:15px}
.fof .btn-back{background:transparent;border:2px solid #d8cba6;color:var(--navy);box-shadow:none}
.fof .btn[disabled]{opacity:.4;cursor:not-allowed;transform:none}
.fof .encourage{background:#fdf6e3;border:1px solid var(--gold-lt);border-radius:12px;
  padding:16px 18px;margin-top:18px;font-size:14px}
.fof .gate-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:40px 20px;background:radial-gradient(900px 500px at 50% 0%, #16345c 0%, var(--navy) 70%)}
.fof .gate-card{background:#fff;border-radius:20px;padding:44px 40px;max-width:560px;width:100%;
  box-shadow:0 20px 60px rgba(0,0,0,.35)}
.fof .gate-card h1{font-size:30px;margin-bottom:12px;text-align:center}
.fof .gate-card p{color:var(--muted);margin-bottom:14px}
.fof .field{margin-bottom:14px}
.fof .field label{display:block;font-size:13px;font-weight:700;margin-bottom:6px}
.fof .field input{width:100%;padding:14px 16px;border:2px solid #e8dfc9;border-radius:10px;font-size:16px;font-family:inherit}
.fof .field input:focus{outline:none;border-color:var(--gold)}
.fof .chk{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:var(--muted);margin:6px 0 4px;cursor:pointer}
.fof .chk input{margin-top:4px;accent-color:var(--gold)}
.fof .privacy{background:var(--ivory);border-radius:10px;padding:14px 16px;font-size:13px;color:var(--muted);margin:14px 0}
.fof .decode-note{font-size:12px;letter-spacing:1.5px;color:var(--gold);font-weight:800;text-align:center;margin-bottom:14px}
.fof .form-error{background:#fdf0ef;border:2px solid #e5a49d;border-radius:12px;padding:16px 18px;margin:14px 0;font-size:14px;color:#8c2f26}
.fof .form-error p{color:#8c2f26;margin-bottom:10px}
.fof .form-error-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.fof .linklike{background:none;border:none;color:var(--gold);font-weight:700;font-size:14px;cursor:pointer;
  text-decoration:underline;font-family:inherit;padding:13px 6px}
.fof .verdict{background:radial-gradient(1000px 600px at 50% -10%, #16345c 0%, var(--navy) 60%, #081627 100%);
  color:#fff;text-align:center;padding:70px 20px 60px}
.fof .verdict .pill{display:inline-block;background:rgba(232,169,61,.15);border:1px solid var(--gold-lt);
  color:var(--gold-pale);font-size:13px;letter-spacing:2.5px;border-radius:999px;
  padding:9px 22px;margin-bottom:20px;font-weight:700}
.fof .verdict h1{font-size:clamp(30px,5vw,46px);margin-bottom:14px;color:#fff}
.fof .verdict h1 .gold{color:var(--gold-pale)}
.fof .verdict p.lead{color:#dbe5f1;max-width:620px;margin:0 auto;font-size:18px}
.fof .rsec{max-width:760px;margin:0 auto;padding:46px 20px}
.fof .diag{background:#fff;border:1px solid #e8dfc9;border-left:6px solid var(--gold);border-radius:14px;
  padding:28px;margin:26px 0}
.fof .diag .lbl{font-size:12px;letter-spacing:2px;color:var(--gold);font-weight:800;margin-bottom:8px}
.fof .diag .quote{font-size:20px;font-style:italic;color:var(--navy)}
.fof .diag p{margin-bottom:0}
.fof .loop{list-style:none;counter-reset:step;margin:18px 0;padding:0}
.fof .loop li{display:flex;gap:16px;padding:12px 0;border-bottom:1px dashed #eee2c4;font-size:16px;align-items:center}
.fof .loop li:last-child{border:none}
.fof .loop .n{flex:0 0 34px;height:34px;border-radius:50%;background:var(--navy);color:var(--gold-pale);
  display:flex;align-items:center;justify-content:center;font-weight:800}
.fof .cost{background:#fff;border:2px solid #e5c07b;border-radius:16px;padding:30px;margin:26px 0}
.fof .cost ul{list-style:none;padding:0;margin:0}
.fof .cost li{display:flex;gap:12px;padding:9px 0;font-size:16px;list-style:none}
.fof .cost .xx{color:#c0392b;font-weight:900;font-size:18px}
.fof .goodnews{background:linear-gradient(180deg,#fffdf6,#fdf3da);border:2px solid var(--gold);
  border-radius:16px;padding:32px;margin:26px 0}
.fof .cta-band{background:var(--navy);border-radius:20px;padding:48px 32px;text-align:center;color:#fff;margin:30px 0}
.fof .cta-band h2{font-size:clamp(26px,4vw,34px);margin-bottom:10px;color:#fff}
.fof .cta-band h2 .gold{color:var(--gold-pale)}
.fof .cta-band p{color:#dbe5f1;margin-bottom:22px;max-width:520px;margin-left:auto;margin-right:auto}
.fof .cta-sub{font-size:13px;color:#9fb2c8;margin-top:12px}
.fof .dl-card{background:#fff;border:2px dashed var(--gold);border-radius:16px;padding:30px;
  text-align:center;margin:26px 0}
.fof .dl-card h3{font-size:22px;margin-bottom:8px}
.fof .site-footer{background:var(--navy);color:#9fb2c8;text-align:center;padding:26px;font-size:13px}
@media(max-width:480px){
  .fof .q-card{padding:24px 18px}
  .fof .gate-card{padding:32px 22px}
  .fof .cta-band{padding:36px 20px}
  .fof .btn{padding:16px 28px;font-size:16px}
}
`

function BookingCta({ heading, body }: { heading: React.ReactNode; body: string }) {
  return (
    <div className="cta-band">
      <h2 className="serif">{heading}</h2>
      <p>{body}</p>
      <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
        {BOOK_CTA}
      </a>
      <p className="cta-sub">45 minutes · Private · Complimentary</p>
    </div>
  )
}

function FrameworkDownload({ body }: { body: string }) {
  return (
    <div className="dl-card">
      <h3 className="serif">📥 Download: The Constraint Solution Framework</h3>
      <p style={{ color: "#5b6b80", marginBottom: 18 }}>{body}</p>
      <a className="btn" href="/api/download-pdf?type=constraint-framework">
        DOWNLOAD FREE FRAMEWORK
      </a>
      <p className="cta-sub" style={{ color: "#5b6b80" }}>
        Free PDF · No extra signup needed
      </p>
    </div>
  )
}

function FactsOrFearClient() {
  const [step, setStep] = useState<Step>("landing")
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [subscribe, setSubscribe] = useState(true)
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "error">("idle")
  const [emailError, setEmailError] = useState("")
  const [startTime] = useState(() => Date.now())
  const [tracked, setTracked] = useState(false)

  const questions = useMemo(() => buildQuestions(answers), [answers])
  const total = questions.length
  const current: Question = questions[Math.min(qIndex, total - 1)]
  const progress = Math.round(((qIndex + 1) / total) * 100)
  const resultType: ResultType = calculateResultType(answers)

  const goTop = () => window.scrollTo(0, 0)

  const handleNext = () => {
    if (!selected) return
    const qid = current.id
    setAnswers((prev) => {
      const next = { ...prev, [qid]: selected }
      // If the Q4 pick flipped between fear/constraint, drop stale branch answers.
      if (qid === "4") {
        delete next["4B"]
        delete next["9A"]
        delete next["9B"]
      }
      return next
    })
    setSelected("")
    if (qIndex < buildQuestions({ ...answers, [qid]: selected }).length - 1) {
      setQIndex(qIndex + 1)
    } else {
      setStep("email")
    }
    goTop()
  }

  const handleBack = () => {
    if (qIndex === 0) return
    const prevQ = questions[qIndex - 1]
    setSelected(answers[prevQ.id] || "")
    setQIndex(qIndex - 1)
    goTop()
  }

  const trackCompletion = async () => {
    if (tracked) return
    const timeToComplete = Math.floor((Date.now() - startTime) / 1000)
    const ua = navigator.userAgent
    const deviceType = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
      ? "tablet"
      : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
        ? "mobile"
        : "desktop"
    try {
      await fetch("/api/track-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resultType,
          userName: firstName || null,
          userEmail: email || null,
          answers,
          timeToComplete,
          deviceType,
          referrer: document.referrer || "direct",
        }),
      })
      setTracked(true)
    } catch {
      // Analytics must never block results.
    }
  }

  const continueToResults = () => {
    trackCompletion()
    setEmailStatus("idle")
    setStep("results")
    goTop()
  }

  const submitGate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return

    // Consent NOT given: skip MailerLite entirely. Results are still shown.
    if (!subscribe) {
      continueToResults()
      return
    }

    setEmailStatus("sending")
    setEmailError("")
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 7)

    try {
      const res = await fetch("/api/assessment-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          q3Answer: answers["3"] || "",
          deadline: deadline.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          isFearBased: isFearPick(answers["4"]),
          resultType,
          consent: true,
          answers: JSON.stringify(answers),
        }),
      })
      let data: { success?: boolean; error?: string } = {}
      try {
        data = await res.json()
      } catch {
        data = {}
      }
      if (!res.ok || data.success === false) {
        throw new Error(data.error || `Request failed (HTTP ${res.status})`)
      }
      continueToResults()
    } catch (err) {
      // Surface the failure visibly instead of silently proceeding.
      setEmailStatus("error")
      setEmailError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  const renderOptions = (q: Question) => {
    const opt = (text: string, key: string) => (
      <button
        key={key}
        type="button"
        className={`opt${selected === text ? " sel" : ""}`}
        onClick={() => setSelected(text)}
      >
        {text}
      </button>
    )
    return (
      <>
        {q.optionGroups
          ? q.optionGroups.map((g) => (
              <div key={g.label}>
                <div className="opt-group-label">{g.label}</div>
                {g.options.map((o, i) => opt(o, `${g.label}-${i}`))}
              </div>
            ))
          : (q.options || []).map((o, i) => opt(o, `opt-${i}`))}
      </>
    )
  }

  return (
    <div className="fof">
      <style>{STYLES}</style>

      {step === "landing" && (
        <>
          <div className="hero">
            <div className="wrap">
              <span className="eyebrow">THE 2-MINUTE HONESTY CHECK</span>
              <h1 className="serif">
                Are Your Reasons <span className="gold">FACTS</span>
                <br />…or <span className="gold">FEAR?</span>
              </h1>
              <p className="lead">
                You keep telling yourself the reasons are solid: the timing, the money, the other priorities. But deep
                down, something isn&apos;t adding up.
              </p>
              <p className="lead">
                <strong style={{ color: "#fff" }}>
                  This free assessment will show you whether your reasons are real — or if fear is running the show.
                </strong>
              </p>
              <div style={{ marginTop: 30 }}>
                <button className="btn" onClick={() => { setStep("intro"); goTop() }}>
                  START FREE ASSESSMENT
                </button>
                <div className="trust" style={{ marginTop: 16 }}>
                  <span>🔒 100% Private &amp; Confidential</span>
                  <span>⏱ 2 minutes</span>
                  <span>✓ Free — no credit card</span>
                </div>
              </div>
            </div>
          </div>

          <section className="block">
            <div className="wrap">
              <h2 className="sec serif">
                The story you tell yourself <em>vs.</em> the truth
              </h2>
              <p className="center">This assessment reveals which one is running your life.</p>
              <div className="split">
                <div className="card tell">
                  <h3 className="serif">What You Tell Yourself</h3>
                  <ul>
                    <li>&quot;I need more experience first&quot;</li>
                    <li>&quot;I&apos;m not ready yet&quot;</li>
                    <li>&quot;I don&apos;t have the time right now&quot;</li>
                  </ul>
                </div>
                <div className="card truth">
                  <h3 className="serif">The Possible Truth</h3>
                  <ul>
                    <li><strong>&quot;I&apos;m scared of failing&quot;</strong></li>
                    <li><strong>&quot;I&apos;m terrified of being seen&quot;</strong></li>
                    <li><strong>&quot;I&apos;m afraid I&apos;m not good enough&quot;</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="block" style={{ background: "#fff", borderTop: "1px solid #eee2c4", borderBottom: "1px solid #eee2c4" }}>
            <div className="wrap" style={{ maxWidth: 700 }}>
              <h2 className="sec serif">In 2 minutes, you&apos;ll discover</h2>
              <ul className="check-list">
                <li><span className="ck">✓</span><span><strong>Your primary excuse pattern</strong> — the story you keep telling yourself</span></li>
                <li><span className="ck">✓</span><span><strong>Whether it&apos;s FACT or FEAR</strong> — real constraint vs. avoidance mechanism</span></li>
                <li><span className="ck">✓</span><span><strong>What&apos;s ACTUALLY keeping you stuck</strong> — the hidden blocker you can&apos;t see on your own</span></li>
                <li><span className="ck">✓</span><span><strong>Your exact next step</strong> — what to do to break free</span></li>
              </ul>
              <p className="center" style={{ margin: "18px 0 26px" }}>No fluff. No theory. Just the truth.</p>
              <div style={{ textAlign: "center" }}>
                <button className="btn" onClick={() => { setStep("intro"); goTop() }}>
                  START FREE ASSESSMENT
                </button>
              </div>
            </div>
          </section>

          <section className="block">
            <div className="wrap" style={{ maxWidth: 700 }}>
              <h2 className="sec serif">This is for you if…</h2>
              <ul className="check-list">
                <li><span className="ck">✓</span><span>You&apos;ve been &quot;about to start&quot; for 3+ months</span></li>
                <li><span className="ck">✓</span><span>You know what you want but can&apos;t get yourself to do it</span></li>
                <li><span className="ck">✓</span><span>You&apos;re tired of your own excuses (but don&apos;t know how to break free)</span></li>
                <li><span className="ck">✓</span><span>You&apos;re ready to see the truth — even if it&apos;s uncomfortable</span></li>
              </ul>
              <h2 className="sec serif" style={{ marginTop: 36 }}>This is <em>not</em> for you if…</h2>
              <ul className="x-list" style={{ maxWidth: 560, margin: "0 auto" }}>
                <li><span className="xx">✕</span><span>You&apos;re still exploring options (you don&apos;t know what you want yet)</span></li>
                <li><span className="xx">✕</span><span>You&apos;re not willing to be honest with yourself</span></li>
                <li><span className="xx">✕</span><span>You&apos;d rather stay comfortable and blame your circumstances</span></li>
              </ul>
              <div style={{ textAlign: "center", marginTop: 34 }}>
                <button className="btn" onClick={() => { setStep("intro"); goTop() }}>
                  READY TO SEE THE TRUTH?
                </button>
                <p className="center" style={{ marginTop: 10, fontSize: 13 }}>Stop wondering. Start knowing.</p>
              </div>
            </div>
          </section>
          <footer className="site-footer">
            Ideal Clarity &nbsp;|&nbsp; Chi-Chi &nbsp;|&nbsp; Mindset &amp; Momentum Coach
          </footer>
        </>
      )}

      {step === "intro" && (
        <div className="gate-wrap">
          <div className="gate-card" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ color: "#b07c1e", borderColor: "#b07c1e" }}>
              THE 2-MINUTE HONESTY CHECK
            </span>
            <h1 className="serif">No fluff. No judgment.</h1>
            <p style={{ textAlign: "center" }}>
              Just straight answers to help you see your blind spots. Every answer stays private.
            </p>
            <ul className="check-list" style={{ textAlign: "left", maxWidth: 420, margin: "0 auto 26px" }}>
              <li><span className="ck">✓</span><span>Choose the answer that feels MOST true</span></li>
              <li><span className="ck">✓</span><span>Be honest even if it&apos;s uncomfortable</span></li>
              <li><span className="ck">✓</span><span>There are no wrong answers</span></li>
            </ul>
            <button className="btn" onClick={() => { setQIndex(0); setStep("assessment"); goTop() }}>
              BEGIN →
            </button>
          </div>
        </div>
      )}

      {step === "assessment" && (
        <div className="quiz-shell">
          <div className="q-meta">
            <span>Question {qIndex + 1} of {total}</span>
            <span>🔒 Your answers are private</span>
          </div>
          <div className="progress"><div style={{ width: `${progress}%` }} /></div>
          <div className="q-card">
            <h2 className="serif">{current.question}</h2>
            {current.subtext && <p className="sub">{current.subtext}</p>}
            <div>{renderOptions(current)}</div>
            {current.encouragement && <div className="encourage">{current.encouragement}</div>}
            <div className="q-nav">
              <button
                className="btn btn-sm btn-back"
                onClick={handleBack}
                style={{ visibility: qIndex === 0 ? "hidden" : "visible" }}
              >
                ← BACK
              </button>
              <button className="btn btn-sm" onClick={handleNext} disabled={!selected}>
                NEXT →
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "email" && (
        <div className="gate-wrap">
          <div className="gate-card">
            <div className="decode-note">THE DECODE STEP · THE IDEAL CLARITY METHOD™</div>
            <h1 className="serif">You Did It.<br />Now Let&apos;s Show You The Truth.</h1>
            <p>
              You just answered <strong>{total} questions</strong> with complete honesty. That takes courage. Most
              people aren&apos;t willing to face the truth about what&apos;s stopping them. <strong>You are.</strong>
            </p>
            <p>Your personalized results are ready. Enter your details to see them:</p>
            <form onSubmit={submitGate}>
              <div className="field">
                <label htmlFor="fof-firstName">First Name</label>
                <input
                  id="fof-firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Your first name"
                  autoComplete="given-name"
                />
              </div>
              <div className="field">
                <label htmlFor="fof-email">Email Address</label>
                <input
                  id="fof-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>
              <label className="chk">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                />
                <span>Yes, send me insights on breaking through fear and getting unstuck (unsubscribe anytime)</span>
              </label>
              <div className="privacy">
                🔒 Your answers and results are completely private. We&apos;ll never share your data.
                <br />📧 No spam. Just your results — plus helpful insights if you opt in above.
              </div>
              {emailStatus === "error" && (
                <div className="form-error" role="alert">
                  <p>
                    <strong>We couldn&apos;t save your details.</strong> {emailError} Your results are still ready —
                    you can try again or continue without saving.
                  </p>
                  <div className="form-error-actions">
                    <button className="btn btn-sm" onClick={submitGate}>
                      TRY AGAIN
                    </button>
                    <button type="button" className="linklike" onClick={continueToResults}>
                      Continue to results →
                    </button>
                  </div>
                </div>
              )}
              {emailStatus !== "error" && (
                <button className="btn" style={{ width: "100%" }} type="submit" disabled={emailStatus === "sending"}>
                  {emailStatus === "sending" ? "SAVING…" : "SHOW ME MY RESULTS"}
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {step === "results" && resultType === "fear" && (
        <>
          <div className="verdict">
            <span className="pill">YOUR ASSESSMENT RESULT</span>
            <h1 className="serif">This is FEAR, <span className="gold">Not Facts.</span></h1>
            <p className="lead">
              Here&apos;s the truth you&apos;ve been avoiding: what you think is a &quot;real obstacle&quot; is
              actually fear disguised as logic.
            </p>
          </div>
          <div className="rsec">
            <div className="diag">
              <div className="lbl">YOUR PRIMARY EXCUSE PATTERN</div>
              <p className="quote serif">&quot;{answers["3"]}&quot;</p>
              <p style={{ marginTop: 14 }}>
                You&apos;re using this as <strong>protection</strong> — from being seen publicly, being judged, being
                &quot;found out&quot; as not good enough, failing where everyone can see.
              </p>
              <p style={{ marginTop: 10 }}>It FEELS like a real constraint. Like a logical, responsible reason to wait.</p>
              <p style={{ marginTop: 10 }}>
                <strong>But here&apos;s the test:</strong> if this obstacle disappeared tomorrow… you&apos;d find
                another reason to wait. Because the obstacle isn&apos;t the issue. <strong>The fear is.</strong>
              </p>
            </div>

            <h2 className="serif" style={{ fontSize: 26, margin: "30px 0 6px" }}>
              Here&apos;s the loop that&apos;s been running your life
            </h2>
            <ol className="loop">
              <li><span className="n">1</span><span>You decide you&apos;re going to start</span></li>
              <li><span className="n">2</span><span>Fear shows up disguised as a &quot;logical reason&quot;</span></li>
              <li><span className="n">3</span><span>You tell yourself &quot;I&apos;ll start once I solve this&quot;</span></li>
              <li><span className="n">4</span><span>You work on &quot;solving&quot; the obstacle (but it never feels fully solved)</span></li>
              <li><span className="n">5</span><span>Repeat.</span></li>
            </ol>

            <div className="cost">
              <h3 className="serif" style={{ fontSize: 22, marginBottom: 10 }}>
                Every month you stay stuck, you&apos;re losing
              </h3>
              <ul>
                <li><span className="xx">✕</span><span><strong>Opportunities</strong> — promotions, clients, partnerships, visibility you didn&apos;t go for</span></li>
                <li><span className="xx">✕</span><span><strong>Momentum</strong> — other people are building while you&apos;re &quot;preparing&quot;</span></li>
                <li><span className="xx">✕</span><span><strong>Mental energy</strong> — the same internal debate on repeat is exhausting</span></li>
                <li><span className="xx">✕</span><span><strong>Time</strong> — another 30 days your future self will never get back</span></li>
              </ul>
            </div>

            <div className="goodnews">
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 10 }}>Here&apos;s what changes everything</h3>
              <p>Once you SEE that it&apos;s fear (not facts), you can choose differently.</p>
              <p style={{ marginTop: 10 }}>
                <strong>You don&apos;t need to</strong> wait until you feel ready, confident, or until conditions are
                perfect.
              </p>
              <p style={{ marginTop: 10, fontSize: 19 }}>
                <strong>You just need to move anyway. While scared. Imperfectly.</strong>
              </p>
              <p style={{ marginTop: 8 }}>And that&apos;s exactly what we help you do.</p>
            </div>

            <BookingCta
              heading={<>Ready to break through<br /><span className="gold">in one conversation?</span></>}
              body="Book a FREE Next Chapter Conversation — 45 minutes with Chi-Chi to name what's actually in the way and map your next move."
            />
          </div>
        </>
      )}

      {step === "results" && resultType === "constraint" && (
        <>
          <div className="verdict">
            <span className="pill">YOUR ASSESSMENT RESULT</span>
            <h1 className="serif">You Have a <span className="gold">Real Constraint.</span></h1>
            <p className="lead">But you&apos;ve been using it as a reason to do nothing.</p>
          </div>
          <div className="rsec">
            <div className="diag">
              <div className="lbl">YOUR PRIMARY CONSTRAINT</div>
              <p className="quote serif">&quot;{answers["4"]}&quot;</p>
              <p style={{ marginTop: 14 }}>
                Yes — this is REAL. It&apos;s not just fear. It&apos;s not an excuse. It&apos;s a legitimate obstacle.
              </p>
              <p style={{ marginTop: 10 }}>
                <strong>But:</strong> you&apos;ve been using it as a reason to do NOTHING while you wait for it to be
                solved. Instead of building momentum NOW, you&apos;ve been &quot;stuck waiting.&quot;
              </p>
            </div>

            <FrameworkDownload body="A practical roadmap to solve your constraint and build momentum at the same time." />

            <BookingCta
              heading={<>Want support <span className="gold">executing this?</span></>}
              body="A real constraint is a design input, not a stop sign. In a FREE Next Chapter Conversation, we'll design around yours — together."
            />
          </div>
        </>
      )}

      {step === "results" && resultType === "mixed" && (
        <>
          <div className="verdict">
            <span className="pill">YOUR ASSESSMENT RESULT</span>
            <h1 className="serif">A Constraint <span className="gold">AND</span> Fear.</h1>
            <p className="lead">
              Let&apos;s address both — because the constraint gives you a &quot;legitimate&quot; excuse, but fear is
              what&apos;s ACTUALLY keeping you frozen.
            </p>
          </div>
          <div className="rsec">
            <div className="diag">
              <div className="lbl">WHAT&apos;S HAPPENING</div>
              <p style={{ marginTop: 6 }}>You have a REAL constraint — that&apos;s legitimate, not just fear.</p>
              <p style={{ marginTop: 10 }}>
                <strong>But there&apos;s something else too:</strong> even if your constraint was solved tomorrow,
                you&apos;d still hesitate. Because fear is ALSO present.
              </p>
            </div>

            <FrameworkDownload body="Start with the practical roadmap for your real constraint — then we'll untangle the fear together." />

            <BookingCta
              heading={<>Let&apos;s untangle <span className="gold">both together.</span></>}
              body="Book a FREE Next Chapter Conversation — 45 minutes to separate what's real from what's fear, and map your next move."
            />
          </div>
        </>
      )}

      {step === "results" && resultType === "unclear" && (
        <>
          <div className="verdict">
            <span className="pill">YOUR ASSESSMENT RESULT</span>
            <h1 className="serif">You Need <span className="gold">Clarity</span> Before You Can Move.</h1>
            <p className="lead">You&apos;re not sure what&apos;s stopping you. And that uncertainty is keeping you stuck.</p>
          </div>
          <div className="rsec">
            <div className="diag">
              <div className="lbl">THE TRUTH</div>
              <p style={{ marginTop: 6, fontSize: 18 }}>
                <strong>You don&apos;t need a program yet. You need a conversation.</strong>
              </p>
              <p style={{ marginTop: 10 }}>A conversation where we:</p>
              <ul className="check-list">
                <li><span className="ck">✓</span><span>Untangle what&apos;s ACTUALLY stopping you</span></li>
                <li><span className="ck">✓</span><span>Expose the hidden patterns you can&apos;t see on your own</span></li>
                <li><span className="ck">✓</span><span>Distinguish fear from constraint from lack of clarity</span></li>
                <li><span className="ck">✓</span><span>Map your next step</span></li>
              </ul>
            </div>

            <BookingCta
              heading={<>You don&apos;t have to stay stuck<br /><span className="gold">in uncertainty.</span></>}
              body="Let's figure this out together — in a FREE 45-minute Next Chapter Conversation."
            />
          </div>
        </>
      )}
    </div>
  )
}

export default FactsOrFearClient
export { FactsOrFearClient }
