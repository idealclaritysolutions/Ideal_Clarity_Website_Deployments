import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET(req: NextRequest) {
  try {
    const pdfType = req.nextUrl.searchParams.get("type")
    const email = req.nextUrl.searchParams.get("email")

    if (!pdfType) {
      return NextResponse.json({ error: "Missing PDF type" }, { status: 400 })
    }

    // Map PDF types to local files
    const pdfFiles: Record<string, { filename: string; requiresPayment: boolean }> = {
      "3-blocks": { filename: "3-blocks-keeping-you-stuck.pdf", requiresPayment: false },
      "10-questions": { filename: "10-questions-identify-block.pdf", requiresPayment: false },
      "employed-business": { filename: "running-business-while-employed.pdf", requiresPayment: true },
    }

    const pdfInfo = pdfFiles[pdfType]
    if (!pdfInfo) {
      return NextResponse.json({ error: "Invalid PDF type" }, { status: 400 })
    }

    // For paid PDF, redirect to Stripe
    if (pdfInfo.requiresPayment) {
      return NextResponse.redirect("https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q")
    }

    // For free PDFs, serve the file directly
    const filePath = path.join(process.cwd(), "public", "pdfs", pdfInfo.filename)
    
    try {
      const fileBuffer = await readFile(filePath)
      
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${pdfInfo.filename}"`,
        },
      })
    } catch {
      // If file doesn't exist, redirect to the interactive version
      if (pdfType === "10-questions") {
        return NextResponse.redirect("/resources/10-questions")
      }
      return NextResponse.json({ error: "PDF not found" }, { status: 404 })
    }
  } catch (error) {
    console.error("PDF download error:", error)
    return NextResponse.json({ error: "Failed to download PDF" }, { status: 500 })
  }
}
