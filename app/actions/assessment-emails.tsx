"use server"

export async function sendAssessmentResultEmail(email: string, isFearBased: boolean, answers: Record<number, string>) {
  console.log("[v0] Sending assessment result email to:", email)
  console.log("[v0] Is fear-based:", isFearBased)

  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] MailerLite API key not found")
      return { success: false, error: "API key not configured" }
    }

    // Add subscriber to MailerLite
    const addSubscriberResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: ["assessment-completed"],
        fields: {
          assessment_type: isFearBased ? "fear-based" : "constraint-based",
        },
      }),
    })

    const subscriberData = await addSubscriberResponse.json()
    console.log("[v0] MailerLite subscriber response:", subscriberData)

    // Prepare email content based on assessment result
    const subject = isFearBased
      ? "Your Assessment Results: Fear Is Holding You Back (But It Doesn't Have To)"
      : "Your Assessment Results: You're Stuck in Constraint-Based Thinking"

    const htmlContent = isFearBased
      ? `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e3a5f; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f68d3e 0%, #6ba894 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Your Assessment Results Are In</h1>
        </div>

        <h2 style="color: #f68d3e;">Here's What Your Answers Revealed:</h2>
        
        <p><strong>You're stuck in fear-based thinking.</strong></p>

        <p>You know what you want. You can see the path. But something invisible keeps holding you back.</p>

        <p>It's not lack of clarity. It's not the wrong timing. It's fear disguised as "being practical."</p>

        <h3 style="color: #6ba894; margin-top: 30px;">Here's the truth:</h3>
        
        <p>Every successful person you admire started scared. The difference? They didn't let fear choose their timeline.</p>

        <p>You're not missing information. You're missing permission to move forward anyway.</p>

        <div style="background: #f7f9fc; padding: 25px; border-radius: 8px; border-left: 4px solid #f68d3e; margin: 30px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">What Happens Next?</h3>
          <p style="margin-bottom: 15px;">The 4-Week Clarity Intensive isn't about getting more answers.</p>
          <p style="margin-bottom: 15px;">It's about building the courage to act on what you already know.</p>
          <p style="margin-bottom: 0;">Together, we'll turn your "someday" into your starting line.</p>
        </div>

        <h3 style="color: #6ba894;">Here's What You Get:</h3>
        
        <ul style="line-height: 1.8;">
          <li><strong>4 Strategic 1:1 Sessions</strong> – Deep-dive clarity work that cuts through the noise</li>
          <li><strong>Unlimited Call/Text Support</strong> – Real-time guidance when doubt creeps in</li>
          <li><strong>Custom Action Plan</strong> – Your roadmap from stuck to starting</li>
          <li><strong>Decision Framework</strong> – Tools to move forward with confidence</li>
        </ul>

        <div style="text-align: center; margin: 40px 0;">
          <a href="https://www.idealclarity.com/facts-or-fear#offer" style="background: #f68d3e; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; font-size: 18px;">I'm Ready to Move Forward</a>
        </div>

        <p style="font-style: italic; color: #6ba894; border-top: 2px solid #f68d3e; padding-top: 20px; margin-top: 40px;">
          "The best time to start was last year. The second best time is right now—before another year passes with the same excuses."
        </p>

        <p style="margin-top: 30px;">Let's make this the year you stop waiting,</p>
        <p style="margin: 0;"><strong>— Temi</strong></p>
        <p style="margin: 0; color: #6ba894;">Founder, Ideal Clarity Solutions</p>
        <p style="margin: 0; font-size: 14px; color: #666;">idealclaritysolutions@gmail.com</p>
      </body>
      </html>
    `
      : `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e3a5f; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #6ba894 0%, #f68d3e 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Your Assessment Results Are In</h1>
        </div>

        <h2 style="color: #6ba894;">Here's What Your Answers Revealed:</h2>
        
        <p><strong>You're stuck in constraint-based thinking.</strong></p>

        <p>You're being logical. Responsible. "Realistic."</p>

        <p>But here's what's really happening: You're letting circumstances dictate your timeline instead of creating the circumstances you need.</p>

        <h3 style="color: #f68d3e; margin-top: 30px;">The truth is:</h3>
        
        <p>Those obstacles are real. But they're not unmovable walls—they're puzzles waiting to be solved.</p>

        <p>You don't need perfect conditions. You need a strategic plan that works with your reality, not against it.</p>

        <div style="background: #f7f9fc; padding: 25px; border-radius: 8px; border-left: 4px solid #6ba894; margin: 30px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">What Happens Next?</h3>
          <p style="margin-bottom: 15px;">The 4-Week Clarity Intensive isn't about ignoring your constraints.</p>
          <p style="margin-bottom: 15px;">It's about building a path that acknowledges them—and moves forward anyway.</p>
          <p style="margin-bottom: 0;">Together, we'll turn your obstacles into stepping stones.</p>
        </div>

        <h3 style="color: #f68d3e;">Here's What You Get:</h3>
        
        <ul style="line-height: 1.8;">
          <li><strong>4 Strategic 1:1 Sessions</strong> – Deep-dive clarity work that cuts through the noise</li>
          <li><strong>Unlimited Call/Text Support</strong> – Real-time guidance when obstacles arise</li>
          <li><strong>Custom Action Plan</strong> – Your roadmap that works with your reality</li>
          <li><strong>Resource Navigation</strong> – Tools to solve the "practical" problems holding you back</li>
        </ul>

        <div style="text-align: center; margin: 40px 0;">
          <a href="https://www.idealclarity.com/facts-or-fear#offer" style="background: #6ba894; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; font-size: 18px;">I'm Ready to Find Solutions</a>
        </div>

        <p style="font-style: italic; color: #f68d3e; border-top: 2px solid #6ba894; padding-top: 20px; margin-top: 40px;">
          "Perfect conditions are a myth. Strategic action in imperfect conditions? That's how real progress happens."
        </p>

        <p style="margin-top: 30px;">Let's turn your constraints into your comeback story,</p>
        <p style="margin: 0;"><strong>— Temi</strong></p>
        <p style="margin: 0; color: #6ba894;">Founder, Ideal Clarity Solutions</p>
        <p style="margin: 0; font-size: 14px; color: #666;">idealclaritysolutions@gmail.com</p>
      </body>
      </html>
    `

    // Send email via MailerLite
    const sendEmailResponse = await fetch("https://connect.mailerlite.com/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: "regular",
        name: `Assessment Result - ${email} - ${new Date().toISOString()}`,
        emails: [
          {
            subject,
            from: "idealclaritysolutions@gmail.com",
            from_name: "Temi from Ideal Clarity",
            content: htmlContent,
          },
        ],
        groups: [],
        emails_to: [email],
      }),
    })

    const emailData = await sendEmailResponse.json()
    console.log("[v0] Email send response:", emailData)

    return { success: true, data: emailData }
  } catch (error) {
    console.error("[v0] Error sending assessment email:", error)
    return { success: false, error: String(error) }
  }
}

export async function sendPurchaseOnboardingEmail(email: string, purchaseType: "full" | "plan") {
  console.log("[v0] Sending purchase onboarding email to:", email, "Type:", purchaseType)

  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] MailerLite API key not found")
      return { success: false, error: "API key not configured" }
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e3a5f; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f68d3e 0%, #6ba894 100%); padding: 40px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to Your Clarity Journey! 🎉</h1>
        </div>

        <p style="font-size: 18px; color: #6ba894;"><strong>Hey there,</strong></p>

        <p>First off—<strong>congratulations.</strong></p>

        <p>Seriously. You just made a decision that most people will put off for another year (or ten). You didn't just buy a program. You bet on yourself. And that takes guts.</p>

        <p>Now let's make sure you're set up for success.</p>

        <div style="background: #f7f9fc; padding: 30px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #f68d3e;">
          <h2 style="color: #1e3a5f; margin-top: 0;">Here's What Happens Next:</h2>
          
          <h3 style="color: #f68d3e; margin-bottom: 10px;">📅 Step 1: Schedule Your First Session</h3>
          <p style="margin-top: 5px;">I'll send you a separate email with my calendar link within the next 24 hours. Pick a time that works for you—this is where we lay the foundation.</p>

          <h3 style="color: #f68d3e; margin-bottom: 10px; margin-top: 25px;">📋 Step 2: Complete Your Pre-Session Worksheet</h3>
          <p style="margin-top: 5px;">I'll also send you a quick worksheet to fill out before our first call. This helps me understand where you're starting from so we can hit the ground running.</p>

          <h3 style="color: #f68d3e; margin-bottom: 10px; margin-top: 25px;">💬 Step 3: Save My Contact Info</h3>
          <p style="margin-top: 5px;">You have <strong>unlimited call/text support</strong> for the next 4 weeks. Here's my direct line: <strong>[Your Phone Number]</strong></p>
          <p style="margin-top: 5px; margin-bottom: 0;">Save it. Use it. That's what it's there for.</p>
        </div>

        <h2 style="color: #6ba894;">What to Expect in Our 4 Weeks Together:</h2>
        
        <ul style="line-height: 1.9; margin-left: 20px;">
          <li><strong>Week 1:</strong> Clarity & Foundation – We identify exactly what's been holding you back and create your custom roadmap.</li>
          <li><strong>Week 2:</strong> Strategy & Planning – We build your actionable plan with real deadlines and accountability checkpoints.</li>
          <li><strong>Week 3:</strong> Implementation & Problem-Solving – You start taking action, and I'm here to troubleshoot every obstacle that pops up.</li>
          <li><strong>Week 4:</strong> Momentum & Sustainability – We lock in your progress and set you up to keep moving forward long after our time together ends.</li>
        </ul>

        <div style="background: #fff8f0; padding: 25px; border-radius: 8px; margin: 30px 0; border: 2px solid #f68d3e;">
          <h3 style="color: #1e3a5f; margin-top: 0;">A Quick Note from Me:</h3>
          <p style="margin-bottom: 15px;">I don't do fluff. I don't do motivational speeches that fade by Tuesday.</p>
          <p style="margin-bottom: 15px;">What I <em>do</em> is help you get unstuck—for real. That means honest conversations, strategic planning, and accountability that actually works.</p>
          <p style="margin-bottom: 0;">So show up ready to work. I promise you, it'll be worth it.</p>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <p style="font-size: 18px; color: #6ba894; margin-bottom: 10px;"><strong>Questions? Concerns? Second thoughts?</strong></p>
          <p style="margin-top: 0;">Hit reply. I read every email.</p>
        </div>

        <p style="margin-top: 40px;">Let's do this,</p>
        <p style="margin: 0;"><strong>— Temi</strong></p>
        <p style="margin: 0; color: #6ba894;">Founder, Ideal Clarity Solutions</p>
        <p style="margin: 0; font-size: 14px; color: #666;">idealclaritysolutions@gmail.com</p>

        <div style="border-top: 2px solid #f68d3e; margin-top: 40px; padding-top: 20px;">
          <p style="font-size: 13px; color: #999; text-align: center;">P.S. Check your spam folder if you don't see my calendar link within 24 hours. Sometimes email providers get overzealous.</p>
        </div>
      </body>
      </html>
    `

    const sendEmailResponse = await fetch("https://connect.mailerlite.com/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: "regular",
        name: `Purchase Onboarding - ${email} - ${new Date().toISOString()}`,
        emails: [
          {
            subject: "Welcome! Here's What Happens Next (+ Action Steps)",
            from: "idealclaritysolutions@gmail.com",
            from_name: "Temi from Ideal Clarity",
            content: htmlContent,
          },
        ],
        groups: [],
        emails_to: [email],
      }),
    })

    const emailData = await sendEmailResponse.json()
    console.log("[v0] Purchase email send response:", emailData)

    return { success: true, data: emailData }
  } catch (error) {
    console.error("[v0] Error sending purchase onboarding email:", error)
    return { success: false, error: String(error) }
  }
}
