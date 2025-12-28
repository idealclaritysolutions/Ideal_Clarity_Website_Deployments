"use server"

export async function sendAssessmentResultEmail(email: string, isFearBased: boolean, answers: Record<number, string>) {
  try {
    console.log("[v0] Sending assessment email to:", email, "Fear-based:", isFearBased)

    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error("[v0] MailerLite API key not found")
      return { success: false, error: "Email service not configured" }
    }

    // Determine email content based on assessment result
    const emailContent = isFearBased ? getFearBasedEmail() : getConstraintBasedEmail()

    // Send email via MailerLite API
    const response = await fetch("https://connect.mailerlite.com/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        to: [{ email }],
        from: {
          email: "idealclaritysolutions@gmail.com",
          name: "Anike - Ideal Clarity",
        },
        subject: isFearBased
          ? "Your Truth Revealed: Fear Is Running the Show"
          : "Your Truth Revealed: It's Time for Real Support",
        html: emailContent,
        text: stripHtml(emailContent),
      }),
    })

    console.log("[v0] MailerLite response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] MailerLite error:", errorText)
      return { success: false, error: `Failed to send email: ${response.status}` }
    }

    const result = await response.json()
    console.log("[v0] Email sent successfully:", result)

    return { success: true, data: result }
  } catch (error) {
    console.error("[v0] Error sending assessment email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function sendPurchaseOnboardingEmail(email: string, purchaseType: "full" | "plan") {
  try {
    console.log("[v0] Sending onboarding email to:", email, "Type:", purchaseType)

    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error("[v0] MailerLite API key not found")
      return { success: false, error: "Email service not configured" }
    }

    const emailContent = getOnboardingEmail()

    // Send email via MailerLite API
    const response = await fetch("https://connect.mailerlite.com/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        to: [{ email }],
        from: {
          email: "idealclaritysolutions@gmail.com",
          name: "Anike - Ideal Clarity",
        },
        subject: "Welcome to Your Transformation - Let's Get Started! 🎉",
        html: emailContent,
        text: stripHtml(emailContent),
      }),
    })

    console.log("[v0] MailerLite onboarding response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] MailerLite error:", errorText)
      return { success: false, error: `Failed to send email: ${response.status}` }
    }

    const result = await response.json()
    console.log("[v0] Onboarding email sent successfully:", result)

    return { success: true, data: result }
  } catch (error) {
    console.error("[v0] Error sending onboarding email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

function getFearBasedEmail() {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
    .content { padding: 30px 20px; }
    h2 { color: #1a1a1a; }
    .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; }
    .cta { background: #1a1a1a; color: white; padding: 15px 30px; text-decoration: none; display: inline-block; margin: 20px 0; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Your Truth Revealed: Fear Is Running the Show</h1>
  </div>
  <div class="content">
    <p>Hi there,</p>
    
    <p>I want to start by saying this: You're not broken. You're not lazy. And you're not "just not ready."</p>
    
    <p>What you <em>are</em>? Stuck in a cycle that makes complete sense once you see it clearly.</p>
    
    <p>Your assessment revealed something crucial: <strong>Fear is calling the shots.</strong></p>
    
    <div class="highlight">
      <p><strong>Here's what that means:</strong></p>
      <p>Every time you say "I'm too busy," "I need to save more money," or "The timing just isn't right," fear is whispering in your ear, disguising itself as logic.</p>
    </div>
    
    <p>And here's the kicker: <strong>It's working.</strong></p>
    
    <p>Because the more logical your excuse sounds, the easier it is to believe it. The more you can convince yourself (and everyone around you) that you're being "smart" or "practical," the longer you get to avoid the real work—the scary, messy, vulnerable work of actually going after what you want.</p>
    
    <p>But here's the truth you already know deep down:</p>
    
    <p><strong>The timing will never feel "right."</strong><br>
    The fear will never go away on its own.<br>
    And the longer you wait, the louder that fear gets.</p>
    
    <h2>So What Do You Do About It?</h2>
    
    <p>You stop giving fear the microphone.</p>
    
    <p>You stop waiting for the "perfect moment" to magically appear. Because spoiler alert: it won't.</p>
    
    <p>Instead, you take action—<em>despite</em> the fear. You build momentum. You prove to yourself that you're capable of more than fear wants you to believe.</p>
    
    <p>And that's exactly what my 4-Week Build Momentum Intensive is designed to do.</p>
    
    <h2>Here's What Happens When You Join:</h2>
    
    <p><strong>Week 1: We Name the Real Problem</strong><br>
    No more guessing. We identify the exact fear-based patterns keeping you stuck and map out what actually needs to shift.</p>
    
    <p><strong>Week 2: We Build Your Action Plan</strong><br>
    You walk away with a clear, step-by-step roadmap that breaks your big scary goal into manageable, fear-proof actions.</p>
    
    <p><strong>Week 3: We Create Accountability</strong><br>
    This is where the magic happens. You start taking action—real action—and I'm there to keep you moving forward when fear tries to pull you back.</p>
    
    <p><strong>Week 4: We Lock In the Momentum</strong><br>
    By the end of this month, you'll have proof that you can do hard things. And more importantly? You'll have the tools to keep going long after our time together ends.</p>
    
    <h2>What You Get:</h2>
    <ul>
      <li>4 private 1:1 strategy sessions (one per week) where we dig deep and create real change</li>
      <li>Call/text access between sessions so you're never left second-guessing yourself</li>
      <li>Customized action plans tailored to YOUR unique situation and goals</li>
      <li>Accountability check-ins to keep you on track (because let's be honest, fear loves to creep back in when no one's watching)</li>
      <li>My proven framework for building unstoppable momentum—even when fear is screaming at you to quit</li>
    </ul>
    
    <h2>The Investment:</h2>
    <p><strong>$2,997 one-time payment</strong><br>
    Or break it into 2 payments of $1,500 each</p>
    
    <div class="highlight">
      <p><strong>But here's the thing:</strong></p>
      <p>If you're still reading this, you already know you need this.</p>
      <p>The question isn't whether you should do it. The question is: Are you ready to stop letting fear make your decisions?</p>
    </div>
    
    <p>Because another year is about to pass. And you can either spend it making the same excuses, or you can spend it finally building the life you've been putting off.</p>
    
    <p>The choice is yours.</p>
    
    <p><a href="https://www.idealclarity.com/facts-or-fear" class="cta">I'm Ready to Build Momentum</a></p>
    
    <p>Let's make this the year you stop waiting and start doing.</p>
    
    <p>To your momentum,<br>
    <strong>Anike</strong><br>
    Ideal Clarity<br>
    idealclaritysolutions@gmail.com</p>
    
    <p style="font-size: 12px; color: #666; margin-top: 40px;">P.S. Still on the fence? Let's talk it out. Reply to this email or call/text me, and let's figure out if this is the right fit for you. No pressure—just an honest conversation about what you need to finally move forward.</p>
  </div>
</body>
</html>
  `
}

function getConstraintBasedEmail() {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
    .content { padding: 30px 20px; }
    h2 { color: #1a1a1a; }
    .highlight { background: #e7f3ff; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; }
    .cta { background: #1a1a1a; color: white; padding: 15px 30px; text-decoration: none; display: inline-block; margin: 20px 0; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Your Truth Revealed: It's Time for Real Support</h1>
  </div>
  <div class="content">
    <p>Hi there,</p>
    
    <p>Let me start with this: You're not making excuses. You're dealing with <em>real</em> constraints.</p>
    
    <p>Time. Money. Energy. Responsibilities. These aren't made-up problems—they're the things you're juggling every single day.</p>
    
    <p>And here's what I know about you based on your assessment:</p>
    
    <div class="highlight">
      <p><strong>You're stuck because you're trying to do everything on your own.</strong></p>
    </div>
    
    <p>You've been telling yourself, "I just need to figure this out," or "Once I have more time/money/clarity, <em>then</em> I'll do it."</p>
    
    <p>But here's the hard truth:</p>
    
    <p><strong>You don't need more time. You need better systems.<br>
    You don't need more money. You need a clearer plan.<br>
    And you definitely don't need to keep carrying this weight alone.</strong></p>
    
    <p>Because the longer you try to "figure it out" by yourself, the more overwhelmed you get. The more you delay, the heavier the burden becomes.</p>
    
    <p>And before you know it? Another year has passed, and you're still stuck in the same place.</p>
    
    <h2>So What's the Solution?</h2>
    
    <p>You stop trying to do it all alone.</p>
    
    <p>You get someone in your corner who can help you cut through the noise, prioritize what actually matters, and build a plan that works with your life—not against it.</p>
    
    <p>That's what my 4-Week Build Momentum Intensive is for.</p>
    
    <h2>Here's What Happens When You Join:</h2>
    
    <p><strong>Week 1: We Get Crystal Clear</strong><br>
    No more spinning your wheels. We identify what's actually holding you back and create a focused plan that fits your real-life constraints.</p>
    
    <p><strong>Week 2: We Build a System That Works</strong><br>
    I help you design a roadmap that doesn't require you to magically have more time or money. We work with what you have—and make it work for you.</p>
    
    <p><strong>Week 3: We Take Real Action</strong><br>
    This is where things start to shift. You'll take meaningful steps forward, and I'll be there to guide you through the inevitable obstacles.</p>
    
    <p><strong>Week 4: We Lock In Your Momentum</strong><br>
    By the end of this month, you'll have proof that progress is possible—even with all the constraints you're dealing with. And you'll have the tools to keep that momentum going.</p>
    
    <h2>What You Get:</h2>
    <ul>
      <li>4 private 1:1 strategy sessions (one per week) where we tackle your specific challenges head-on</li>
      <li>Call/text access between sessions so you always have support when you need it</li>
      <li>Customized action plans designed around YOUR life and YOUR constraints</li>
      <li>Accountability check-ins to keep you moving forward (because life gets busy, and it's easy to slip back into old patterns)</li>
      <li>My proven system for making progress even when it feels like you have no time, money, or energy left</li>
    </ul>
    
    <h2>The Investment:</h2>
    <p><strong>$2,997 one-time payment</strong><br>
    Or break it into 2 payments of $1,500 each</p>
    
    <div class="highlight">
      <p><strong>Here's what I want you to consider:</strong></p>
      <p>How long have you been dealing with these same constraints?</p>
      <p>How much longer are you willing to wait before you get the support you actually need?</p>
    </div>
    
    <p>Because here's the thing: Those constraints? They're not going anywhere on their own.</p>
    
    <p>But with the right support, the right plan, and the right accountability? You can finally start making real progress—<em>despite</em> the constraints.</p>
    
    <p>Another year is about to start. And you can either spend it continuing to struggle alone, or you can spend it finally getting the help you need to move forward.</p>
    
    <p>The choice is yours.</p>
    
    <p><a href="https://www.idealclarity.com/facts-or-fear" class="cta">I'm Ready for Real Support</a></p>
    
    <p>Let's make this the year you stop carrying it all alone.</p>
    
    <p>To your progress,<br>
    <strong>Anike</strong><br>
    Ideal Clarity<br>
    idealclaritysolutions@gmail.com</p>
    
    <p style="font-size: 12px; color: #666; margin-top: 40px;">P.S. Not sure if this is the right fit? Let's talk it through. Reply to this email or call/text me, and we'll figure out the best next step for you. No pressure—just real talk about what you need.</p>
  </div>
</body>
</html>
  `
}

function getOnboardingEmail() {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
    .content { padding: 30px 20px; }
    h2 { color: #1a1a1a; }
    .highlight { background: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin: 20px 0; }
    .action-box { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Welcome to Your Transformation! 🎉</h1>
  </div>
  <div class="content">
    <p>Hey there!</p>
    
    <p>First things first: <strong>Welcome!</strong></p>
    
    <p>I'm so excited you're here. Seriously. This is a big deal.</p>
    
    <p>You just made a decision that most people never make—to stop waiting, stop making excuses, and start actually building the life you've been putting off.</p>
    
    <p>And I'm honored to be the one walking alongside you for the next 4 weeks.</p>
    
    <h2>So… What Happens Next?</h2>
    
    <div class="action-box">
      <p><strong>Step 1: Check Your Inbox</strong></p>
      <p>Within the next 24 hours, you'll receive a scheduling link to book your first session. Pick a time that works for you, and we'll get started!</p>
    </div>
    
    <div class="action-box">
      <p><strong>Step 2: Start Thinking</strong></p>
      <p>Before our first call, I want you to think about this:</p>
      <ul>
        <li>What's the ONE thing you've been avoiding that you know would change everything?</li>
        <li>What would your life look like 4 weeks from now if everything went exactly the way you wanted?</li>
        <li>What's the biggest fear or obstacle standing between you and that vision?</li>
      </ul>
      <p>You don't need to have all the answers yet. Just start thinking about it. We'll dig into it together on our first call.</p>
    </div>
    
    <div class="action-box">
      <p><strong>Step 3: Save My Contact Info</strong></p>
      <p>You have call/text access to me between sessions, so make sure you save my email: <strong>idealclaritysolutions@gmail.com</strong></p>
      <p>If something comes up, you get stuck, or you just need a pep talk—don't hesitate to reach out. That's what I'm here for.</p>
    </div>
    
    <h2>What to Expect Over the Next 4 Weeks:</h2>
    
    <p><strong>Week 1: We Get Clear</strong><br>
    We'll dig into what's really holding you back and create a focused plan for moving forward.</p>
    
    <p><strong>Week 2: We Build Your Roadmap</strong><br>
    You'll walk away with a step-by-step action plan that feels doable—not overwhelming.</p>
    
    <p><strong>Week 3: We Take Action</strong><br>
    This is where the magic happens. You'll start making real progress, and I'll be there to keep you on track.</p>
    
    <p><strong>Week 4: We Lock In Your Momentum</strong><br>
    By the end of this month, you'll have proof that you can do hard things—and the tools to keep going long after we wrap up.</p>
    
    <div class="highlight">
      <p><strong>Here's my promise to you:</strong></p>
      <p>I'm not here to coddle you. I'm not here to tell you what you want to hear.</p>
      <p>I'm here to help you see the truth, challenge the stories you've been telling yourself, and guide you toward real, lasting change.</p>
      <p>It's going to be uncomfortable at times. But it's also going to be worth it.</p>
    </div>
    
    <h2>One Last Thing…</h2>
    
    <p>I know taking this step wasn't easy. And I want you to know that I see you.</p>
    
    <p>I see the courage it took to invest in yourself. I see the hope you're carrying that things can actually be different. And I see the determination it took to finally say "enough is enough."</p>
    
    <p>So thank you. Thank you for trusting me with this process. Thank you for showing up for yourself.</p>
    
    <p>Now let's get to work. 💪</p>
    
    <p>See you soon,<br>
    <strong>Anike</strong><br>
    Ideal Clarity<br>
    idealclaritysolutions@gmail.com</p>
    
    <p style="font-size: 12px; color: #666; margin-top: 40px;">P.S. Keep an eye out for that scheduling link. It should hit your inbox within 24 hours. If you don't see it, check your spam folder—and if it's still MIA, shoot me an email and I'll get it sorted ASAP.</p>
  </div>
</body>
</html>
  `
}

// Helper function to strip HTML tags for plain text version
function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>.*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()
}
