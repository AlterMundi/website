import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "AlterMundi Website <contact@altermundi.net>",
      to: ["info@altermundi.net"],
      replyTo: String(email),
      subject: `Contact from AlterMundi website - ${name}`,
      html: `
        <p><strong>From:</strong> ${String(name)} (${String(email)})</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send message"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
