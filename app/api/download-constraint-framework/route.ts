import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") || "there"

  // Import react-pdf dynamically to avoid SSR issues
  const ReactPDF = await import("@react-pdf/renderer")
  const { Document, Page, Text, View, StyleSheet, Font } = ReactPDF

  // Define styles
  const styles = StyleSheet.create({
    page: {
      padding: 50,
      fontSize: 11,
      fontFamily: "Helvetica",
    },
    titlePage: {
      padding: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
    },
    mainTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#1a1a1a",
      marginBottom: 20,
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: 2,
    },
    subtitle: {
      fontSize: 16,
      color: "#4a5568",
      marginBottom: 10,
      textAlign: "center",
      lineHeight: 1.5,
    },
    tagline: {
      fontSize: 13,
      color: "#718096",
      marginTop: 30,
      marginBottom: 50,
      textAlign: "center",
      fontStyle: "italic",
    },
    author: {
      fontSize: 12,
      color: "#2d3748",
      marginTop: 40,
      textAlign: "center",
    },
    header: {
      fontSize: 10,
      color: "#718096",
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: "1pt solid #e2e8f0",
    },
    footer: {
      position: "absolute",
      bottom: 30,
      left: 50,
      right: 50,
      fontSize: 9,
      color: "#a0aec0",
      textAlign: "center",
      borderTop: "1pt solid #e2e8f0",
      paddingTop: 10,
    },
    pageNumber: {
      position: "absolute",
      bottom: 30,
      right: 50,
      fontSize: 9,
      color: "#a0aec0",
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: 15,
      marginTop: 10,
    },
    sectionSubtitle: {
      fontSize: 13,
      color: "#4a5568",
      marginBottom: 20,
      fontStyle: "italic",
    },
    body: {
      fontSize: 11,
      lineHeight: 1.6,
      color: "#2d3748",
      marginBottom: 12,
    },
    bold: {
      fontWeight: "bold",
    },
    list: {
      marginLeft: 15,
      marginBottom: 10,
    },
    listItem: {
      fontSize: 11,
      lineHeight: 1.6,
      color: "#2d3748",
      marginBottom: 5,
    },
    checkbox: {
      fontSize: 11,
      marginBottom: 8,
      display: "flex",
      flexDirection: "row",
    },
    box: {
      backgroundColor: "#f7fafc",
      border: "1pt solid #e2e8f0",
      padding: 15,
      marginBottom: 15,
      marginTop: 10,
    },
    categoryTitle: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#2d3748",
      marginTop: 15,
      marginBottom: 8,
    },
    fillable: {
      borderBottom: "1pt solid #cbd5e0",
      marginBottom: 12,
      paddingBottom: 5,
    },
    emphasis: {
      backgroundColor: "#edf2f7",
      padding: 12,
      marginTop: 10,
      marginBottom: 10,
      border: "1pt solid #cbd5e0",
    },
  })

  // Create PDF Document
  const PDFDocument = () => (
    <Document>
      {/* PAGE 1: TITLE PAGE */}
      <Page size="A4" style={styles.titlePage}>
        <Text style={styles.mainTitle}>
          THE CONSTRAINT{"\n"}SOLUTION{"\n"}FRAMEWORK
        </Text>
        <Text style={styles.subtitle}>How to Solve Your Constraint AND{"\n"}Build Momentum at the Same Time</Text>
        <Text style={styles.tagline}>
          A step-by-step guide to stop 'stuck waiting'{"\n"}and start actively building
        </Text>
        <View
          style={{
            marginTop: 60,
            marginBottom: 60,
            width: 100,
            height: 100,
            backgroundColor: "#e2e8f0",
            borderRadius: 50,
          }}
        />
        <Text style={styles.author}>By: Chi-Chi | Ideal Clarity Solutions</Text>
        <Text style={{ ...styles.footer, position: "relative", bottom: 0, left: 0, right: 0, marginTop: 40 }}>
          Ideal Clarity Solutions | idealclarity.com
        </Text>
      </Page>

      {/* PAGE 2: INTRODUCTION */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>You Have a Real Constraint. Now What?</Text>

        <Text style={styles.body}>If you're reading this, you have a genuine obstacle keeping you stuck:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Money you need to save</Text>
          <Text style={styles.listItem}>• A non-compete you're bound by</Text>
          <Text style={styles.listItem}>• Time constraints from caregiving or job demands</Text>
          <Text style={styles.listItem}>• A skill gap you need to close</Text>
          <Text style={styles.listItem}>• A health situation limiting your capacity</Text>
        </View>

        <Text style={styles.body}>And it IS real.</Text>

        <Text style={styles.body}>
          But here's the problem: Most people with real constraints make one critical mistake: They wait.
        </Text>

        <Text style={styles.body}>They tell themselves:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>"I can't do ANYTHING until this is solved."</Text>
          <Text style={styles.listItem}>"I'll start when the constraint is gone."</Text>
          <Text style={styles.listItem}>"There's no point building now if I can't launch yet."</Text>
        </View>

        <Text style={styles.body}>And they waste months (or years) doing nothing.</Text>

        <Text style={styles.body}>
          This framework shows you a different way: Solve the constraint AND build momentum at the same time.
        </Text>

        <Text style={styles.body}>
          Because the most successful people don't wait for perfect conditions. They build the bridge while solving the
          obstacle.
        </Text>

        <Text style={styles.body}>
          And by the time the constraint is solved? They're ready to launch. Not starting from scratch.
        </Text>

        <Text style={{ ...styles.body, fontWeight: "bold", marginTop: 20 }}>Let's build your bridge.</Text>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>2</Text>
      </Page>

      {/* PAGE 3: STEP 1 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 1: Diagnose Your Constraint</Text>
        <Text style={styles.sectionSubtitle}>(Is It Real or Fear?)</Text>

        <Text style={styles.body}>Before you can solve it, you need to know if it's ACTUALLY a constraint.</Text>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.bold}>
            Question 1: If your constraint disappeared tomorrow, would you start immediately with no hesitation?
          </Text>
          <Text style={styles.checkbox}>☐ Yes → Your constraint is REAL</Text>
          <Text style={styles.checkbox}>☐ No / Maybe → Fear is ALSO present (address both)</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.bold}>
            Question 2: Has your constraint been the SAME reason for X months, or have your reasons changed?
          </Text>
          <Text style={styles.checkbox}>☐ Same reason the whole time → Likely REAL</Text>
          <Text style={styles.checkbox}>☐ Reasons keep evolving → Likely FEAR disguised as constraint</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.bold}>
            Question 3: Can you define a clear endpoint for when the constraint will be solved?
          </Text>
          <Text style={styles.checkbox}>☐ Yes (specific date/amount/milestone) → Constraint is REAL and solvable</Text>
          <Text style={styles.checkbox}>☐ No (vague 'someday' timeline) → Might be fear-based avoidance</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.bold}>
            Question 4: Are you actively working to SOLVE the constraint, or just waiting for it to solve itself?
          </Text>
          <Text style={styles.checkbox}>☐ Actively solving → Good. Keep reading.</Text>
          <Text style={styles.checkbox}>☐ Passively waiting → This is the problem. This framework will fix it.</Text>
        </View>

        <View style={styles.box}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>YOUR DIAGNOSIS:</Text>
          <Text style={styles.body}>
            If you answered Q1: YES, Q2: Same reason, Q3: YES, Q4: Actively solving{"\n"}→ You have a REAL constraint.
            This framework will help you solve it AND build momentum.
          </Text>
          <Text style={styles.body}>
            If you answered differently:{"\n"}→ Fear might be disguised as a constraint. Consider taking the Facts or
            Fear Assessment at idealclarity.com/facts-or-fear
          </Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>3</Text>
      </Page>

      {/* PAGE 4: STEP 2 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 2: Map Your Timeline</Text>
        <Text style={styles.sectionSubtitle}>(When Will the Constraint Be Solved?)</Text>

        <Text style={styles.body}>You can't plan around a constraint if you don't know when it ends.</Text>

        <Text style={styles.categoryTitle}>FINANCIAL/SAVINGS CONSTRAINT</Text>
        <Text style={styles.fillable}>Goal amount needed: $__________________</Text>
        <Text style={styles.fillable}>Current savings: $__________________</Text>
        <Text style={styles.fillable}>Amount still needed: $__________________</Text>
        <Text style={styles.fillable}>Monthly savings rate: $__________________</Text>
        <Text style={styles.fillable}>Months until goal: __________________ (Amount needed ÷ Monthly rate)</Text>
        <Text style={styles.fillable}>Target date: __________________</Text>

        <Text style={styles.categoryTitle}>TIME-BASED CONSTRAINT</Text>
        <Text style={styles.fillable}>Constraint expires on: __________________</Text>
        <Text style={styles.fillable}>Today's date: __________________</Text>
        <Text style={styles.fillable}>Months remaining: __________________</Text>
        <Text style={styles.fillable}>Target date: __________________</Text>

        <Text style={styles.categoryTitle}>SKILL/CREDENTIAL GAP</Text>
        <Text style={styles.fillable}>Skill/credential needed: __________________</Text>
        <Text style={styles.fillable}>Time required to acquire: __________________ (weeks/months)</Text>
        <Text style={styles.fillable}>Hours per week available: __________________</Text>
        <Text style={styles.fillable}>Total weeks: __________________</Text>
        <Text style={styles.fillable}>Target completion date: __________________</Text>

        <View style={styles.emphasis}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>YOUR TIMELINE:</Text>
          <Text style={styles.fillable}>My constraint will be solved by: __________________</Text>
          <Text style={styles.fillable}>That's __________________ months from now.</Text>
          <Text style={{ ...styles.body, marginTop: 10 }}>
            Now the question is: What are you going to DO during those _______ months?
          </Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>4</Text>
      </Page>

      {/* PAGE 5: STEP 3 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 3: What You CAN Do NOW</Text>
        <Text style={styles.sectionSubtitle}>(30 Actions While Solving the Constraint)</Text>

        <Text style={styles.body}>You don't have to wait to START. You just have to wait to LAUNCH.</Text>

        <Text style={styles.categoryTitle}>NETWORK BUILDING</Text>
        <Text style={styles.checkbox}>☐ 1. Connect with 50 people in your target industry on LinkedIn</Text>
        <Text style={styles.checkbox}>☐ 2. Send 10 personalized DMs to people doing what you want</Text>
        <Text style={styles.checkbox}>☐ 3. Join 3 online communities in your niche</Text>
        <Text style={styles.checkbox}>☐ 4. Comment thoughtfully on 5 LinkedIn posts per day</Text>
        <Text style={styles.checkbox}>☐ 5. Reach out to 3 people for informational interviews</Text>

        <Text style={styles.categoryTitle}>CONTENT CREATION</Text>
        <Text style={styles.checkbox}>☐ 6. Write 10 LinkedIn posts (schedule for launch day)</Text>
        <Text style={styles.checkbox}>☐ 7. Outline 5 blog posts or articles</Text>
        <Text style={styles.checkbox}>☐ 8. Record 3 video scripts</Text>
        <Text style={styles.checkbox}>☐ 9. Create content calendar for first 30 days post-launch</Text>
        <Text style={styles.checkbox}>☐ 10. Develop your origin story</Text>

        <Text style={styles.categoryTitle}>SKILL DEVELOPMENT</Text>
        <Text style={styles.checkbox}>☐ 11. Take 1 free online course relevant to your goal</Text>
        <Text style={styles.checkbox}>☐ 12. Read 3 books in your target field</Text>
        <Text style={styles.checkbox}>☐ 13. Watch 10 YouTube tutorials</Text>
        <Text style={styles.checkbox}>☐ 14. Practice the skill 30 minutes/day</Text>
        <Text style={styles.checkbox}>☐ 15. Build a portfolio project</Text>

        <Text style={styles.categoryTitle}>SYSTEMS & SETUP</Text>
        <Text style={styles.checkbox}>☐ 16. Set up website/landing page</Text>
        <Text style={styles.checkbox}>☐ 17. Create email templates</Text>
        <Text style={styles.checkbox}>☐ 18. Set up CRM or project management system</Text>
        <Text style={styles.checkbox}>☐ 19. Design offers/packages/pricing</Text>
        <Text style={styles.checkbox}>☐ 20. Write sales scripts</Text>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>5</Text>
      </Page>

      {/* PAGE 6: STEP 3 CONTINUED */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>

        <Text style={styles.categoryTitle}>VALIDATION & TESTING</Text>
        <Text style={styles.checkbox}>☐ 21. Survey 10 people in target audience</Text>
        <Text style={styles.checkbox}>☐ 22. Offer free beta sessions</Text>
        <Text style={styles.checkbox}>☐ 23. Run a pilot program with 3 people</Text>
        <Text style={styles.checkbox}>☐ 24. Test messaging</Text>
        <Text style={styles.checkbox}>☐ 25. Validate pricing</Text>

        <Text style={styles.categoryTitle}>STRATEGIC POSITIONING</Text>
        <Text style={styles.checkbox}>☐ 26. Update LinkedIn profile</Text>
        <Text style={styles.checkbox}>☐ 27. Start posting about learning journey</Text>
        <Text style={styles.checkbox}>☐ 28. Share your "why" publicly</Text>
        <Text style={styles.checkbox}>☐ 29. Position as "emerging expert"</Text>
        <Text style={styles.checkbox}>☐ 30. Build anticipation for launch</Text>

        <View style={styles.emphasis}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
            PICK 10 FROM THIS LIST. DO THEM IN THE NEXT 30 DAYS.
          </Text>
          <Text style={styles.body}>
            While solving your constraint, you're also building your: network, content, skills, systems, validation,
            positioning.
          </Text>
          <Text style={{ ...styles.body, fontWeight: "bold" }}>
            When the constraint is solved? You're READY. Not starting from scratch.
          </Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>6</Text>
      </Page>

      {/* PAGE 7: STEP 4 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 4: Break It Down</Text>
        <Text style={styles.sectionSubtitle}>(Week-by-Week Action Plan)</Text>

        <Text style={styles.body}>Take your timeline and break it into weekly actions.</Text>

        <View style={styles.box}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 10 }}>YOUR WEEK-BY-WEEK PLAN:</Text>

          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 10 }}>MONTH 1:</Text>
          <Text style={styles.fillable}>Week 1: _________________________________________</Text>
          <Text style={styles.fillable}>Week 2: _________________________________________</Text>
          <Text style={styles.fillable}>Week 3: _________________________________________</Text>
          <Text style={styles.fillable}>Week 4: _________________________________________</Text>

          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 15 }}>MONTH 2:</Text>
          <Text style={styles.fillable}>Week 1: _________________________________________</Text>
          <Text style={styles.fillable}>Week 2: _________________________________________</Text>
          <Text style={styles.fillable}>Week 3: _________________________________________</Text>
          <Text style={styles.fillable}>Week 4: _________________________________________</Text>

          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 15 }}>MONTH 3:</Text>
          <Text style={styles.fillable}>Week 1: _________________________________________</Text>
          <Text style={styles.fillable}>Week 2: _________________________________________</Text>
          <Text style={styles.fillable}>Week 3: _________________________________________</Text>
          <Text style={styles.fillable}>Week 4: _________________________________________</Text>
        </View>

        <View style={styles.emphasis}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>Key Principle:</Text>
          <Text style={styles.body}>
            Every week, do something that moves you forward. Even if small. Even if you can't launch yet.
          </Text>
          <Text style={styles.body}>By constraint-solving end, you'll have:</Text>
          <Text style={styles.listItem}>✓ 50+ new connections</Text>
          <Text style={styles.listItem}>✓ 20+ pieces of content ready</Text>
          <Text style={styles.listItem}>✓ Systems set up</Text>
          <Text style={styles.listItem}>✓ Skills developed</Text>
          <Text style={styles.listItem}>✓ Concept validated</Text>
          <Text style={{ ...styles.body, fontWeight: "bold", marginTop: 8 }}>
            Ready to LAUNCH. Not starting from scratch.
          </Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>7</Text>
      </Page>

      {/* PAGE 8: STEP 5 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 5: Track Your Progress</Text>
        <Text style={styles.sectionSubtitle}>(Stay Accountable)</Text>

        <Text style={styles.categoryTitle}>WEEKLY CHECK-IN TEMPLATE:</Text>
        <View style={styles.box}>
          <Text style={styles.fillable}>WEEK OF: _________________________________________</Text>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 10 }}>This week I:</Text>
          <Text style={styles.checkbox}>☐ Solved [X amount] of my constraint</Text>
          <Text style={styles.fillable}>☐ Built momentum by: _________________________________________</Text>
          <Text style={styles.fillable}>☐ Made progress on: _________________________________________</Text>
          <Text style={styles.fillable}>What's working: _________________________________________</Text>
          <Text style={styles.fillable}>What's not working: _________________________________________</Text>
          <Text style={styles.fillable}>What I'll adjust next week: _________________________________________</Text>
        </View>

        <Text style={styles.categoryTitle}>MONTHLY MILESTONE CHECK TEMPLATE:</Text>
        <View style={styles.box}>
          <Text style={styles.fillable}>MONTH: _________________________________________</Text>
          <Text style={styles.fillable}>Constraint progress: ________________% solved</Text>

          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 10 }}>Momentum built:</Text>
          <Text style={styles.fillable}>- Network: ________________ new connections</Text>
          <Text style={styles.fillable}>- Content: ________________ posts/articles created</Text>
          <Text style={styles.fillable}>- Skills: ________________ hours practiced</Text>
          <Text style={styles.fillable}>- Systems: ________________ tools/systems set up</Text>

          <Text style={{ fontSize: 11, marginTop: 10 }}>Am I on track?</Text>
          <Text style={styles.checkbox}>☐ Yes ☐ No ☐ Need to adjust</Text>

          <Text style={{ fontSize: 11, marginTop: 10 }}>If not on track, what needs to change?</Text>
          <Text style={styles.fillable}>_________________________________________</Text>
          <Text style={styles.fillable}>_________________________________________</Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>8</Text>
      </Page>

      {/* PAGE 9: STEP 6 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>STEP 6: Launch Day Plan</Text>
        <Text style={styles.sectionSubtitle}>(What Happens on Day 1?)</Text>

        <Text style={styles.body}>
          When your constraint is solved, what do you do IMMEDIATELY? Map out your Day 1 plan NOW:
        </Text>

        <View style={styles.box}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 10 }}>DAY 1 ACTIONS:</Text>
          <Text style={styles.fillable}>1. _________________________________________</Text>
          <Text style={styles.fillable}>2. _________________________________________</Text>
          <Text style={styles.fillable}>3. _________________________________________</Text>
          <Text style={styles.fillable}>4. _________________________________________</Text>
          <Text style={styles.fillable}>5. _________________________________________</Text>
        </View>

        <View style={styles.box}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>EXAMPLE DAY 1 PLAN:</Text>
          <Text style={styles.listItem}>1. Publish all 20 LinkedIn posts I pre-wrote</Text>
          <Text style={styles.listItem}>2. Launch website publicly</Text>
          <Text style={styles.listItem}>3. Send announcement email to network</Text>
          <Text style={styles.listItem}>4. Open booking for discovery calls</Text>
          <Text style={styles.listItem}>5. Reach out to 10 warm leads</Text>
        </View>

        <View style={styles.emphasis}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>By planning Day 1 NOW:</Text>
          <Text style={styles.listItem}>✓ You have clarity on what 'launch-ready' looks like</Text>
          <Text style={styles.listItem}>✓ You stay motivated during constraint-solving phase</Text>
          <Text style={styles.listItem}>✓ You hit the ground running on Day 1 (no hesitation, no delay)</Text>
        </View>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>9</Text>
      </Page>

      {/* PAGE 10: FINAL */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>The Constraint Solution Framework</Text>
        <Text style={styles.sectionTitle}>You Don't Have to Wait.</Text>

        <Text style={styles.body}>Your constraint is real. But it doesn't have to keep you stuck.</Text>

        <Text style={styles.body}>
          Most people make this mistake: They wait for the constraint to be solved. THEN they try to start.
        </Text>

        <Text style={styles.body}>
          But by then: They've lost momentum, lost confidence, they're starting from scratch, they've wasted months
          doing nothing.
        </Text>

        <Text style={styles.body}>You're not going to do that.</Text>

        <Text style={styles.body}>You're going to:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>✓ Solve the constraint (with a clear timeline)</Text>
          <Text style={styles.listItem}>✓ Build momentum (while solving it)</Text>
          <Text style={styles.listItem}>✓ Launch ready (on Day 1)</Text>
        </View>

        <Text style={styles.body}>
          That's the difference between people who break through... and people who stay stuck waiting.
        </Text>

        <Text style={{ ...styles.body, fontWeight: "bold", marginTop: 15 }}>
          You're not waiting anymore. You're building.
        </Text>

        <Text style={{ ...styles.body, fontWeight: "bold" }}>Start today.</Text>

        <View style={{ marginTop: 30, padding: 20, backgroundColor: "#edf2f7", border: "2pt solid #cbd5e0" }}>
          <Text style={{ fontSize: 13, fontWeight: "bold", marginBottom: 12 }}>WHAT TO DO NEXT:</Text>

          <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 10 }}>OPTION 1: Do this on your own</Text>
          <Text style={styles.listItem}>• Use this framework</Text>
          <Text style={styles.listItem}>• Execute the plan</Text>
          <Text style={styles.listItem}>• Stay accountable to yourself</Text>
          <Text style={styles.listItem}>• Build while you solve</Text>

          <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 15 }}>OPTION 2: Get support</Text>
          <Text style={{ fontSize: 10, marginTop: 5, lineHeight: 1.5 }}>
            If you want help mapping your specific constraint solution, building your week-by-week plan, staying
            accountable, troubleshooting obstacles...
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 8 }}>
            Book a free 15-minute Clarity Call: idealclarity.com/clarity-call
          </Text>
          <Text style={{ fontSize: 10, marginTop: 8, lineHeight: 1.5 }}>
            We'll diagnose your constraint, map your timeline, and see if the 4-Week Unstuck Intensive is right for you.
          </Text>
        </View>

        <Text style={{ fontSize: 11, marginTop: 25, textAlign: "center", fontStyle: "italic" }}>
          Your constraint is solvable. Your momentum is buildable. Your future is in motion.
        </Text>

        <Text style={{ fontSize: 12, marginTop: 15, textAlign: "center", fontWeight: "bold" }}>Let's go.</Text>

        <Text style={{ fontSize: 10, marginTop: 30, textAlign: "center", color: "#4a5568" }}>
          — Chi-Chi | Founder, Ideal Clarity Solutions | idealclarity.com
        </Text>

        <Text style={styles.footer}>Ideal Clarity Solutions | idealclarity.com</Text>
        <Text style={styles.pageNumber}>10</Text>
      </Page>
    </Document>
  )

  try {
    // Generate PDF
    const pdfStream = await ReactPDF.renderToStream(<PDFDocument />)

    // Convert stream to buffer
    const chunks: Uint8Array[] = []
    for await (const chunk of pdfStream) {
      chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks)

    // Return PDF response
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Constraint-Solution-Framework.pdf"`,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("[v0] PDF generation error:", error)
    return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export const dynamic = "force-dynamic"
export const revalidate = 0
