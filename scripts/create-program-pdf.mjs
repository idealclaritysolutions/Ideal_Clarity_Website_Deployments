import React from "react"
import { renderToFile } from "@react-pdf/renderer"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: { padding: 48, fontFamily: "Helvetica", color: "#263238", fontSize: 10, lineHeight: 1.45 },
  cover: { justifyContent: "center", padding: 64 },
  title: { fontSize: 28, color: "#183B56", marginBottom: 12 },
  subtitle: { fontSize: 14, color: "#C96B4B", marginBottom: 28 },
  heading: { fontSize: 19, color: "#183B56", marginTop: 18, marginBottom: 8 },
  subheading: { fontSize: 13, color: "#C96B4B", marginTop: 12, marginBottom: 5 },
  paragraph: { marginBottom: 7 },
  bullet: { marginBottom: 4, paddingLeft: 10 },
  rule: { borderBottomWidth: 1, borderBottomColor: "#D9E1E5", marginVertical: 14 },
  footer: { position: "absolute", bottom: 28, left: 48, right: 48, textAlign: "center", color: "#718096", fontSize: 8 },
})

const P = ({ children }) => React.createElement(Text, { style: styles.paragraph }, children)
const H = ({ children }) => React.createElement(Text, { style: styles.heading }, children)
const SH = ({ children }) => React.createElement(Text, { style: styles.subheading }, children)
const B = ({ children }) => React.createElement(Text, { style: styles.bullet }, `• ${children}`)
const Footer = () => React.createElement(Text, { style: styles.footer }, "Ideal Clarity Solutions LLC")

function CombinedGuide() {
  return React.createElement(Document, null,
    React.createElement(Page, { size: "LETTER", style: styles.cover },
      React.createElement(Text, { style: styles.title }, "From Idea to First Offer"),
      React.createElement(Text, { style: styles.subtitle }, "The Program + The Breakthrough Protocol"),
      React.createElement(P, { children: "A practical four-week path from stuck in planning to making real offers, built around identifying and dismantling the block beneath your logical reasons for waiting." }),
      React.createElement(View, { style: styles.rule }),
      React.createElement(P, { children: "Ideal Clarity Solutions LLC" }),
      React.createElement(Footer)
    ),
    React.createElement(Page, { size: "LETTER", style: styles.page },
      React.createElement(H, { children: "The Breakthrough Protocol" }),
      React.createElement(P, { children: "You do not have an information problem. You have a block. You already know how to start a business; the disconnect is between knowing what to do and making yourself do it." }),
      React.createElement(SH, { children: "Common blocks that look like logic" }),
      React.createElement(B, { children: "If I choose the wrong niche, I’ll waste years → Terror of wasting time" }),
      React.createElement(B, { children: "People won’t take me seriously without credentials → Need for external validation" }),
      React.createElement(B, { children: "I can’t start until I quit my job → Belief you must choose between security and building" }),
      React.createElement(B, { children: "My website needs to be perfect first → Fear of being seen before you’re ready" }),
      React.createElement(P, { children: "Your logical reasons are covering up something deeper. Once we identify the actual block and remove it, you can execute what you already know how to do." }),
      React.createElement(H, { children: "How It Works" }),
      React.createElement(SH, { children: "Week 1: Identify the block" }),
      React.createElement(P, { children: "In a 60-minute session, we find the pattern you cannot see from inside. ‘I don’t know my niche,’ ‘I need a website first,’ and ‘I should get certified’ are often symptoms rather than the real block. We find it and name it." }),
      React.createElement(SH, { children: "Between Weeks 1–4: Daily dismantling work" }),
      React.createElement(P, { children: "You do not need to think positive or build confidence. You systematically dismantle the block with 5 minutes of breathwork to calm your nervous system and 10 minutes of evidence-based rewiring." }),
      React.createElement(B, { children: "Calm your nervous system with breathwork." }),
      React.createElement(B, { children: "Read evidence that directly contradicts the block." }),
      React.createElement(B, { children: "Repeat the work daily while your nervous system is calm." }),
      React.createElement(P, { children: "By Day 10–14, the block is significantly weakened. When you think about choosing your niche, your brain does not panic anymore." }),
      React.createElement(Footer)
    ),
    React.createElement(Page, { size: "LETTER", style: styles.page },
      React.createElement(H, { children: "The Four-Week Program" }),
      React.createElement(P, { children: "4 weeks · $3,500 · 10 offers made" }),
      React.createElement(SH, { children: "Week 1 — Identify the Block" }),
      React.createElement(P, { children: "We dig into your pattern: what you have been planning, what keeps stopping you, and what your logical reasons for waiting actually are. By the end, you see the real block for the first time." }),
      React.createElement(B, { children: "Daily dismantling work (10–15 minutes per day)" }), React.createElement(B, { children: "Breathwork to calm your nervous system" }), React.createElement(B, { children: "Evidence-based exercises to rewire the belief" }), React.createElement(B, { children: "Voxer check-ins when you get stuck" }),
      React.createElement(SH, { children: "Week 2 — Build Your Offer" }),
      React.createElement(P, { children: "Finalize your niche, create a simple sellable offer, set pricing with rationale, and craft your positioning without spiraling." }),
      React.createElement(B, { children: "Optimize your LinkedIn profile and create a simple one-page site or outline" }), React.createElement(B, { children: "Continue daily dismantling work" }),
      React.createElement(SH, { children: "Week 3 — Prepare Your Outreach" }),
      React.createElement(P, { children: "Identify 20 people who might need what you offer. Craft customized outreach messages, learn to move from conversation to offer, and handle objections before they arise." }),
      React.createElement(B, { children: "Send your first five outreach messages" }), React.createElement(B, { children: "Schedule conversations with responders" }),
      React.createElement(SH, { children: "Week 4 — Make the Offers" }),
      React.createElement(P, { children: "Make 10 offers to real people with live support, handle ‘no’ without spiraling, track responses, and identify patterns. You are no longer stuck in planning mode." }),
      React.createElement(Footer)
    ),
    React.createElement(Page, { size: "LETTER", style: styles.page },
      React.createElement(H, { children: "What’s Included" }),
      React.createElement(B, { children: "4 weekly 60-minute 1:1 sessions" }), React.createElement(B, { children: "Daily dismantling exercises: breathwork plus evidence work" }), React.createElement(B, { children: "Voxer/email support between sessions, Monday–Friday" }), React.createElement(B, { children: "Offer Blueprint: positioning, pricing, and messaging" }), React.createElement(B, { children: "Outreach templates customized to your business" }), React.createElement(B, { children: "Accountability to actually do the thing" }),
      React.createElement(H, { children: "Execute Without the Block" }),
      React.createElement(P, { children: "The work is the same whether the block is there or not. The difference is that without the block, you can actually do it." }),
      React.createElement(SH, { children: "This is for you if" }),
      React.createElement(B, { children: "You have been planning to start for six or more months but cannot execute." }), React.createElement(B, { children: "You know what to do but cannot make yourself do it." }), React.createElement(B, { children: "You are employed and want to build on the side, not quit and hope." }), React.createElement(B, { children: "You are ready to invest $3,500 and make 10 offers in four weeks." }),
      React.createElement(SH, { children: "This is not for you if" }),
      React.createElement(B, { children: "You are still exploring ideas or genuinely do not know what business you want to build." }), React.createElement(B, { children: "You are looking for Instagram growth tactics or marketing funnels." }), React.createElement(B, { children: "You are not ready to start in the next 30 days." }), React.createElement(B, { children: "$3,500 feels impossible right now." }),
      React.createElement(H, { children: "Next Steps" }),
      React.createElement(P, { children: "Enroll in From Idea to First Offer or book a free strategy call to determine whether the program is the right fit." }),
      React.createElement(Footer)
    )
  )
}

await renderToFile(React.createElement(CombinedGuide), "public/pdfs/from-idea-to-first-offer-combined-guide.pdf")
console.log("Created combined guide PDF")
