import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();
        const resendApiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!resendApiKey || !contactEmail) {
            console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
            return NextResponse.json(
                { error: "Email service is not configured" },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

        await resend.emails.send({
            from: "FBT Website <onboarding@resend.dev>",
            to: contactEmail,
            replyTo: email,
            subject: `New contact request from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
