"use server"

export async function sendAssessmentResultEmail(email: string, firstName: string, isFearBased: boolean) {
  try {
    console.log("[v0] Sending assessment email to:", email, "Fear-based:", isFearBased)

    // Prepare email content based on assessment result
    const emailContent = isFearBased ? getFearBasedEmail(firstName) : getConstraintBasedEmail(firstName)

    // Send email using fetch to a simple email service
    // Using Resend API (works out of the box with Vercel)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY || "re_demo_key"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Chi-Chi @ Ideal Clarity <onboarding@idealclarity.com>",
        to: [email],
        subject: isFearBased
          ? `${firstName}, Here's What Your Assessment Revealed...`
          : `${firstName}, Your Results Are In (And They're Eye-Opening)`,
        html: emailContent,
      }),
    })

    const data = await response.json()
    console.log("[v0] Email API response status:", response.status)
    console.log("[v0] Email API response:", data)

    if (!response.ok) {
      console.error("[v0] Email error:", data)
      // Don't throw error - continue showing results even if email fails
      return { success: false, error: data }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending assessment email:", error)
    // Don't throw error - continue showing results even if email fails
    return { success: false, error }
  }
}

export async function sendPurchaseOnboardingEmail(email: string, firstName: string, planType: string) {
  try {
    console.log("[v0] Sending purchase onboarding email to:", email)

    const emailContent = getOnboardingEmail(firstName, planType)

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY || "re_demo_key"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Chi-Chi @ Ideal Clarity <onboarding@idealclarity.com>",
        to: [email],
        subject: `Welcome to The Momentum Month, ${firstName}! 🎉`,
        html: emailContent,
      }),
    })

    const data = await response.json()
    console.log("[v0] Onboarding email response:", response.status, data)

    if (!response.ok) {
      console.error("[v0] Onboarding email error:", data)
      return { success: false, error: data }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending onboarding email:", error)
    return { success: false, error }
  }
}

function getFearBasedEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Assessment Results</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #2D3748; margin-bottom: 10px;">Your Assessment Results Are In</h1>
    <p style="color: #718096; font-size: 14px;">Understanding what's really holding you back</p>
  </div>

  <div style="background: #F7FAFC; border-left: 4px solid #4299E1; padding: 20px; margin-bottom: 30px;">
    <h2 style="color: #2D3748; margin-top: 0;">Hi ${firstName},</h2>
    <p>Your assessment revealed something important: <strong>fear is the primary force keeping you stuck</strong>.</p>
    <p>This isn't about lacking resources, time, or support. It's about the invisible barriers your mind has constructed to keep you "safe" from potential failure, judgment, or the unknown.</p>
  </div>

  <h3 style="color: #2D3748;">Here's What This Means:</h3>
  
  <div style="background: white; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <p><strong>✓ You're capable</strong> - The skills, intelligence, and potential are already there</p>
    <p><strong>✓ You're aware</strong> - You know what you need to do, but something stops you</p>
    <p><strong>✓ You're ready</strong> - The fact that you took this assessment proves you want change</p>
  </div>

  <div style="background: #FFF5F5; border-left: 4px solid #FC8181; padding: 20px; margin-bottom: 30px;">
    <h3 style="color: #C53030; margin-top: 0;">The Problem:</h3>
    <p>Fear-based stuckness creates a cycle:</p>
    <ul style="margin: 10px 0;">
      <li>You have an idea or goal</li>
      <li>Fear generates "what if" scenarios</li>
      <li>You rationalize waiting for the "perfect time"</li>
      <li>Time passes, nothing changes</li>
      <li>The cycle repeats</li>
    </ul>
    <p style="margin-top: 15px;"><strong>And here's the truth:</strong> This pattern will continue until you directly address the fear underneath it.</p>
  </div>

  <h3 style="color: #2D3748;">The Solution:</h3>
  
  <div style="background: #F0FFF4; border-left: 4px solid #48BB78; padding: 20px; margin-bottom: 30px;">
    <p><strong>The Momentum Month</strong> is specifically designed to break this cycle by:</p>
    <ul style="margin: 10px 0;">
      <li><strong>Identifying your specific fear patterns</strong> - We'll uncover exactly what's triggering your paralysis</li>
      <li><strong>Building evidence against the fear</strong> - Through small, strategic actions that prove the fear wrong</li>
      <li><strong>Creating momentum</strong> - Each small win compounds, making the next step easier</li>
      <li><strong>Rewiring your response</strong> - You'll develop new patterns that default to action, not avoidance</li>
    </ul>
  </div>

  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 40px 0;">
    <h3 style="margin-top: 0; color: white;">Ready to Break Free?</h3>
    <p style="margin-bottom: 25px;">The Momentum Month starts with one decision: choosing to face the fear instead of letting it choose for you.</p>
    <a href="https://www.idealclarity.com/facts-or-fear" style="display: inline-block; background: white; color: #667eea; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">View Your Full Results & Next Steps</a>
  </div>

  <div style="border-top: 2px solid #E2E8F0; padding-top: 20px; margin-top: 40px; text-align: center; color: #718096; font-size: 14px;">
    <p><strong>Chi-Chi Okezie</strong><br>
    Career Clarity Coach<br>
    Ideal Clarity Solutions</p>
    <p style="margin-top: 15px;">
      <a href="mailto:idealclaritysolutions@gmail.com" style="color: #4299E1; text-decoration: none;">idealclaritysolutions@gmail.com</a><br>
      <a href="https://www.idealclarity.com" style="color: #4299E1; text-decoration: none;">www.idealclarity.com</a>
    </p>
  </div>

</body>
</html>
  `
}

function getConstraintBasedEmail(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Assessment Results</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #2D3748; margin-bottom: 10px;">Your Assessment Results Are In</h1>
    <p style="color: #718096; font-size: 14px;">Understanding what's really holding you back</p>
  </div>

  <div style="background: #F7FAFC; border-left: 4px solid #4299E1; padding: 20px; margin-bottom: 30px;">
    <h2 style="color: #2D3748; margin-top: 0;">Hi ${firstName},</h2>
    <p>Your assessment revealed something important: <strong>you're facing real, practical constraints</strong>.</p>
    <p>Time, money, support systems - these aren't imaginary obstacles. They're legitimate factors that impact what you can reasonably do right now.</p>
  </div>

  <h3 style="color: #2D3748;">Here's What This Means:</h3>
  
  <div style="background: white; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <p><strong>✓ You're strategic</strong> - You recognize the real limitations in your situation</p>
    <p><strong>✓ You're realistic</strong> - You're not making excuses; you're assessing facts</p>
    <p><strong>✓ You're resourceful</strong> - You're looking for solutions that work within your constraints</p>
  </div>

  <div style="background: #FFFAF0; border-left: 4px solid #ED8936; padding: 20px; margin-bottom: 30px;">
    <h3 style="color: #C05621; margin-top: 0;">The Challenge:</h3>
    <p>Constraint-based stuckness creates a different kind of cycle:</p>
    <ul style="margin: 10px 0;">
      <li>You identify a goal</li>
      <li>You assess your resources</li>
      <li>The gap feels too large</li>
      <li>You wait for circumstances to change</li>
      <li>Time passes, circumstances rarely shift on their own</li>
    </ul>
    <p style="margin-top: 15px;"><strong>The truth:</strong> Waiting for perfect conditions means waiting indefinitely.</p>
  </div>

  <h3 style="color: #2D3748;">The Solution:</h3>
  
  <div style="background: #F0FFF4; border-left: 4px solid #48BB78; padding: 20px; margin-bottom: 30px;">
    <p><strong>The Momentum Month</strong> is designed to help you work WITH your constraints by:</p>
    <ul style="margin: 10px 0;">
      <li><strong>Strategic resource allocation</strong> - Making the most of the time and energy you do have</li>
      <li><strong>Creative problem-solving</strong> - Finding unconventional paths around your obstacles</li>
      <li><strong>Building in micro-steps</strong> - Progress that fits into your real life, not an ideal version of it</li>
      <li><strong>Leveraging what exists</strong> - Identifying hidden resources and support you might be overlooking</li>
    </ul>
  </div>

  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 40px 0;">
    <h3 style="margin-top: 0; color: white;">Ready to Move Forward?</h3>
    <p style="margin-bottom: 25px;">The Momentum Month is about making progress possible, regardless of your constraints.</p>
    <a href="https://www.idealclarity.com/facts-or-fear" style="display: inline-block; background: white; color: #667eea; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">View Your Full Results & Next Steps</a>
  </div>

  <div style="border-top: 2px solid #E2E8F0; padding-top: 20px; margin-top: 40px; text-align: center; color: #718096; font-size: 14px;">
    <p><strong>Chi-Chi Okezie</strong><br>
    Career Clarity Coach<br>
    Ideal Clarity Solutions</p>
    <p style="margin-top: 15px;">
      <a href="mailto:idealclaritysolutions@gmail.com" style="color: #4299E1; text-decoration: none;">idealclaritysolutions@gmail.com</a><br>
      <a href="https://www.idealclarity.com" style="color: #4299E1; text-decoration: none;">www.idealclarity.com</a>
    </p>
  </div>

</body>
</html>
  `
}

function getOnboardingEmail(firstName: string, planType: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to The Momentum Month!</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #2D3748; margin-bottom: 10px;">🎉 Welcome Aboard, ${firstName}!</h1>
    <p style="color: #718096; font-size: 16px;">You just made the decision that changes everything</p>
  </div>

  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
    <h2 style="margin-top: 0; color: white;">This Is Your Moment</h2>
    <p style="margin-bottom: 0;">You didn't just purchase a program - you chose yourself. You chose momentum over stagnation. You chose to face what's been holding you back and break through it.</p>
  </div>

  <h3 style="color: #2D3748;">Here's What Happens Next:</h3>
  
  <div style="background: #F7FAFC; border-left: 4px solid #4299E1; padding: 20px; margin-bottom: 20px;">
    <h4 style="color: #2D3748; margin-top: 0;">📅 Step 1: Schedule Your Kickoff Call</h4>
    <p>Text or call me at <strong>(484) 466-0556</strong> to lock in your first session. We'll spend this time:</p>
    <ul style="margin: 10px 0;">
      <li>Unpacking your specific stuckness pattern</li>
      <li>Identifying your breakthrough goal</li>
      <li>Designing your personalized momentum plan</li>
      <li>Setting your first micro-action</li>
    </ul>
  </div>

  <div style="background: #F7FAFC; border-left: 4px solid #48BB78; padding: 20px; margin-bottom: 20px;">
    <h4 style="color: #2D3748; margin-top: 0;">💬 Step 2: Get Connected</h4>
    <p>After our kickoff call, you'll get:</p>
    <ul style="margin: 10px 0;">
      <li><strong>Direct call/text access</strong> - Quick questions, mid-action guidance, or celebration check-ins</li>
      <li><strong>Your momentum tracker</strong> - A simple tool to visualize your progress</li>
      <li><strong>Weekly session schedule</strong> - We'll set recurring times that work for you</li>
    </ul>
  </div>

  <div style="background: #F7FAFC; border-left: 4px solid #ED8936; padding: 20px; margin-bottom: 20px;">
    <h4 style="color: #2D3748; margin-top: 0;">🚀 Step 3: Take Your First Action</h4>
    <p>Before our kickoff call, do this:</p>
    <p style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0;"><strong>Write down one thing you've been avoiding that would move you forward if you did it.</strong></p>
    <p>Just one. We'll work with this in our first session.</p>
  </div>

  <div style="background: #FFF5F5; border: 2px solid #FC8181; border-radius: 8px; padding: 20px; margin: 30px 0;">
    <h3 style="color: #C53030; margin-top: 0;">⏰ Important Timing Note:</h3>
    <p><strong>Your 4 weeks start the day of our kickoff call, not today.</strong></p>
    <p style="margin-bottom: 0;">So reach out soon to schedule - the sooner we start, the sooner you'll see results.</p>
  </div>

  <div style="background: #FFFAF0; border-radius: 8px; padding: 25px; margin: 30px 0;">
    <h3 style="color: #2D3748; margin-top: 0;">What to Expect Over the Next 4 Weeks:</h3>
    <ul style="margin: 10px 0; line-height: 1.8;">
      <li><strong>Week 1:</strong> Diagnosis & momentum ignition</li>
      <li><strong>Week 2:</strong> Pattern interruption & new neural pathways</li>
      <li><strong>Week 3:</strong> Obstacle navigation & confidence building</li>
      <li><strong>Week 4:</strong> Momentum securing & independence preparation</li>
    </ul>
  </div>

  <div style="text-align: center; margin: 40px 0; padding: 30px; background: #F7FAFC; border-radius: 12px;">
    <p style="font-size: 18px; margin-bottom: 20px; color: #2D3748;"><strong>Ready to get started?</strong></p>
    <p style="font-size: 16px; margin-bottom: 0;">Call or text: <a href="tel:4844660556" style="color: #4299E1; text-decoration: none; font-weight: bold;">(484) 466-0556</a></p>
    <p style="font-size: 14px; color: #718096; margin-top: 10px;">or email: <a href="mailto:idealclaritysolutions@gmail.com" style="color: #4299E1; text-decoration: none;">idealclaritysolutions@gmail.com</a></p>
  </div>

  <div style="border-top: 2px solid #E2E8F0; padding-top: 20px; margin-top: 40px;">
    <p style="color: #2D3748; font-size: 16px;"><strong>I'm excited to work with you, ${firstName}.</strong></p>
    <p style="color: #718096;">This is where things start to shift. Let's make it happen.</p>
    <p style="margin-top: 20px; color: #2D3748;"><strong>- Chi-Chi</strong></p>
  </div>

  <div style="text-align: center; color: #718096; font-size: 14px; margin-top: 40px;">
    <p><strong>Chi-Chi Okezie</strong><br>
    Career Clarity Coach<br>
    Ideal Clarity Solutions</p>
    <p style="margin-top: 15px;">
      <a href="mailto:idealclaritysolutions@gmail.com" style="color: #4299E1; text-decoration: none;">idealclaritysolutions@gmail.com</a><br>
      <a href="https://www.idealclarity.com" style="color: #4299E1; text-decoration: none;">www.idealclarity.com</a>
    </p>
  </div>

</body>
</html>
  `
}
