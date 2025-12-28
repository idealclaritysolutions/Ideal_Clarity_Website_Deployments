"use server"

export async function sendAssessmentResultEmail(email: string, isFearBased: boolean, answers: Record<number, string>) {
  try {
    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error("MailerLite API key not found")
      return { success: false, error: "Email configuration error" }
    }

    // Determine dynamic content based on assessment results
    const q2TimeFrame = answers[2] || "months"
    const q3Excuse = answers[3] || "waiting for the right moment"

    const subjectLine = `Your "Facts or Fear" Results, ${email.split("@")[0]}`

    let emailBody = `
      <h2>Hey ${email.split("@")[0]},</h2>
      <p>You just took the assessment.</p>
      <p>And based on your answers, here's the truth:</p>
    `

    if (isFearBased) {
      emailBody += `
        <h3 style="color: #f68d3e;">This is FEAR, not facts.</h3>
        <p>What you think is a "real obstacle" is actually fear disguised as logic.</p>
        <p><strong>Your excuse:</strong> <em>"${q3Excuse}"</em></p>
        <p><strong>The pattern:</strong> Even if that obstacle disappeared tomorrow, you'd find another reason to wait.</p>
        <p>Because the obstacle isn't the issue. The fear is.</p>
        
        <h3>Here's what happens next:</h3>
        <p>You have two choices:</p>
        <p><strong>Choice 1:</strong> Close this email. Stay stuck. Keep telling yourself "someday."</p>
        <p><strong>Choice 2:</strong> Break through in the next 4 weeks.</p>
        
        <p>The <strong>4-Week Unstuck Intensive</strong> is designed for people exactly like you.</p>
        <p><strong>We expose the fear, dismantle it, and get you moving by Week 4.</strong></p>
        
        <h3>In 4 weeks:</h3>
        <p>You'll have DONE the thing you've been avoiding (posted content, launched business, had the conversation).</p>
      `
    } else {
      emailBody += `
        <h3 style="color: #f68d3e;">You have a real constraint.</h3>
        <p><strong>Your constraint:</strong> ${q3Excuse}</p>
        <p>Yes, it's REAL.</p>
        <p>But you've been "stuck waiting" instead of solving it AND building momentum.</p>
        
        <h3>Here's what happens next:</h3>
        <p>You have two choices:</p>
        <p><strong>Choice 1:</strong> Close this email. Stay stuck. Keep telling yourself "someday."</p>
        <p><strong>Choice 2:</strong> Break through in the next 4 weeks.</p>
        
        <p>The <strong>4-Week Unstuck Intensive</strong> is designed for people exactly like you.</p>
        <p><strong>We solve the constraint AND build momentum (no more "stuck waiting").</strong></p>
        
        <h3>In 4 weeks:</h3>
        <p>You'll have a clear timeline, active momentum, and won't be "stuck waiting" anymore.</p>
      `
    }

    emailBody += `
      <h3>Investment: $2,997</h3>
      <p>Only 5 spots available.</p>
      <p>Doors close: <strong>Before the New Year</strong></p>
      
      <p style="text-align: center; margin: 30px 0;">
        <a href="https://www.idealclarity.com/facts-or-fear#offer" 
           style="background-color: #f68d3e; color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
          SECURE MY SPOT NOW
        </a>
      </p>
      
      <p>Or reply to this email with questions. I'm here.</p>
      
      <p>— Chi-Chi<br/>Founder, Ideal Clarity Solutions</p>
      
      <p style="font-style: italic; color: #666;">P.S. You've been stuck for ${q2TimeFrame}. How much longer are you willing to stay there?</p>
    `

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        fields: {
          assessment_type: isFearBased ? "fear-based" : "constraint-based",
          assessment_date: new Date().toISOString(),
        },
      }),
    })

    if (!response.ok) {
      console.error("Failed to add subscriber to MailerLite")
    }

    // Send immediate email via MailerLite API
    const emailResponse = await fetch("https://connect.mailerlite.com/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: "regular",
        name: `Assessment Results - ${email} - ${new Date().toISOString()}`,
        subject: subjectLine,
        from: "idealclaritysolutions@gmail.com",
        from_name: "Chi-Chi from Ideal Clarity",
        content: emailBody,
        emails: [email],
      }),
    })

    if (!emailResponse.ok) {
      console.error("Failed to send email via MailerLite")
      return { success: false, error: "Failed to send email" }
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending assessment email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendPurchaseOnboardingEmail(email: string, firstName: string) {
  try {
    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error("MailerLite API key not found")
      return { success: false, error: "Email configuration error" }
    }

    const emailBody = `
      <h2>Hey ${firstName},</h2>
      <h3>You're in. 🎉</h3>
      <p>Welcome to the 4-Week Unstuck Intensive.</p>
      
      <h3>Here's what happens next:</h3>
      
      <h4>STEP 1: Schedule Your Week 1 Session (DO THIS NOW)</h4>
      <p>Your Week 1 session is 90 minutes and we need to meet in the next 3-7 days to get started.</p>
      <p style="text-align: center; margin: 20px 0;">
        <a href="https://calendly.com/idealclarity" 
           style="background-color: #f68d3e; color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
          SCHEDULE MY WEEK 1 SESSION
        </a>
      </p>
      
      <h4>STEP 2: Download Your Welcome Packet</h4>
      <p>I've prepared a welcome packet that explains:</p>
      <ul>
        <li>What to expect each week</li>
        <li>How daily call/text support works</li>
        <li>How to prepare for Week 1</li>
        <li>FAQs</li>
      </ul>
      <p style="text-align: center; margin: 20px 0;">
        <a href="https://www.idealclarity.com/welcome-packet" 
           style="background-color: #6ba894; color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
          DOWNLOAD WELCOME PACKET
        </a>
      </p>
      
      <h4>STEP 3: Fill Out Your Pre-Session Questionnaire</h4>
      <p>This is CRITICAL. It helps me understand your specific situation so we can dive deep in Week 1 (instead of wasting time on surface-level discovery).</p>
      <p>It takes 10 minutes. Do this before our Week 1 call.</p>
      <p style="text-align: center; margin: 20px 0;">
        <a href="https://forms.gle/your-form-link" 
           style="background-color: #1e3a5f; color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
          FILL OUT QUESTIONNAIRE
        </a>
      </p>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
      
      <p><strong>Your investment:</strong> $2,997</p>
      <p><strong>Your commitment:</strong> 4 weeks, showing up fully</p>
      <p><strong>Your outcome:</strong> You'll have DONE the thing by Week 4 (or have clear momentum if constraint-based)</p>
      
      <p style="margin-top: 30px;"><strong>Questions before Week 1?</strong></p>
      <p>Reply to this email. I'll respond within 24 hours.</p>
      
      <p style="margin-top: 30px;">Get ready. Your life is about to change. 🎯</p>
      <p>— Chi-Chi<br/>Founder, Ideal Clarity Solutions</p>
      
      <p style="font-style: italic; color: #666; margin-top: 30px;">
        P.S. Haven't scheduled your Week 1 session yet? Do it now. The sooner we start, the sooner you break through.
      </p>
    `

    const response = await fetch("https://connect.mailerlite.com/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: "regular",
        name: `Onboarding - ${email} - ${new Date().toISOString()}`,
        subject: "🎉 You're in! Welcome to the 4-Week Unstuck Intensive",
        from: "idealclaritysolutions@gmail.com",
        from_name: "Chi-Chi from Ideal Clarity",
        content: emailBody,
        emails: [email],
      }),
    })

    if (!response.ok) {
      console.error("Failed to send onboarding email")
      return { success: false, error: "Failed to send email" }
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending onboarding email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
