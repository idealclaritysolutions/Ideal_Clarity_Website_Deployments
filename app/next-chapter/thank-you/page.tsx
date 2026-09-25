import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Booked! | Ideal Clarity",
  description:
    "Your Next Chapter Conversation is on the calendar. Watch this short video before we talk.",
  robots: { index: false, follow: false },
};

const NAVY = "#0B1A2E";
const NAVY_CARD = "#13263F";
const GOLD = "#D9B25F";
const IVORY = "#f7f3ea";
const MUTED = "#c8d2dc";

const steps = [
  {
    n: "1",
    title: "Check your inbox",
    body: "Your confirmation email has your calendar invite and the meeting link. When it's time, just click the link to join.",
  },
  {
    n: "2",
    title: "No prep needed",
    body: "You don't need to have it all figured out. Just bring yourself and the idea you've been carrying.",
  },
  {
    n: "3",
    title: "Protect this time",
    body: "Show up — especially if part of you doesn't want to. That's the pattern we're about to break together.",
  },
];

export default function ThankYouPage() {
  return (
    <main
      style={{
        background: NAVY,
        color: IVORY,
        minHeight: "100vh",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "56px 20px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            letterSpacing: "0.35em",
            fontSize: 13,
            fontWeight: 600,
            margin: "0 0 28px",
          }}
        >
          IDEAL CLARITY
        </p>

        <h1
          style={{
            color: GOLD,
            fontSize: "clamp(34px, 6vw, 54px)",
            fontWeight: 800,
            margin: "0 0 12px",
            lineHeight: 1.15,
          }}
        >
          You&apos;re booked!
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "clamp(16px, 2.6vw, 19px)",
            lineHeight: 1.6,
            margin: "0 0 36px",
            maxWidth: 620,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your Next Chapter Conversation is on the calendar, and I&apos;m
          really looking forward to talking with you. Watch this 2-minute
          video before we talk.
        </p>

        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid rgba(217,178,95,0.35)`,
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            background: "#000",
          }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster="/videos/post-booking/post-booking-cover.jpg"
            src="/videos/post-booking/post-booking-video.mp4"
            style={{ width: "100%", display: "block", aspectRatio: "16 / 9" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            marginTop: 48,
            textAlign: "left",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: NAVY_CARD,
                border: "1px solid rgba(200,210,220,0.14)",
                borderRadius: 14,
                padding: "20px 22px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: GOLD,
                  color: NAVY,
                  fontWeight: 800,
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.n}
              </span>
              <span>
                <strong
                  style={{
                    display: "block",
                    fontSize: 17,
                    marginBottom: 6,
                    color: IVORY,
                  }}
                >
                  {s.title}
                </strong>
                <span style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.6 }}>
                  {s.body}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, fontSize: 14, marginTop: 48, lineHeight: 1.7 }}>
          Questions before we talk? Just reply to your confirmation email.
          <br />
          I&apos;ll see you soon.
        </p>
      </div>
    </main>
  );
}
