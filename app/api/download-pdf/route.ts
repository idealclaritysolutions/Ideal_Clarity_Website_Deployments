import { NextRequest, NextResponse } from "next/server"

// This would integrate with your PDF generation/storage service
// For now, we'll use a simple approach with link tracking
export async function GET(req: NextRequest) {
  try {
    const pdfType = req.nextUrl.searchParams.get("type")
    const email = req.nextUrl.searchParams.get("email")

    if (!pdfType || !email) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 })
    }

    // Map PDF types to your hosted PDF URLs or generate them on demand
    const pdfUrls: Record<string, string> = {
      "3-blocks": "https://your-storage.com/pdfs/3-blocks-keeping-you-stuck.pdf",
      "10-questions": "https://your-storage.com/pdfs/10-questions-identify-block.pdf",
      "employed-business": "https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q", // This is the $27 guide
    }

    const pdfUrl = pdfUrls[pdfType]
    if (!pdfUrl) {
      return NextResponse.json({ error: "Invalid PDF type" }, { status: 400 })
    }

    // Log the download for analytics
    console.log(`[v0] PDF download: ${pdfType} for ${email}`)

    // Redirect to the PDF or payment link
    return NextResponse.redirect(pdfUrl)
  } catch (error) {
    console.error("[v0] PDF download error:", error)
    return NextResponse.json({ error: "Failed to download PDF" }, { status: 500 })
  }
}
