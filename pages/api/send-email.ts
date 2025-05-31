import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

interface EmailRequestBody {
    name: string;
    email: string;
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email}: EmailRequestBody = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_PASS, // Your Gmail app password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email, // You can change this to the recipient's email
            subject: `Welcome to Unwired ${name}!`,
            // text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f9f9; padding: 40px 0; font-family: Helvetica, Arial, sans-serif;">
                    <tr>
                        <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:12px; padding: 30px; box-shadow:0 8px 20px rgba(0,0,0,0.05);">
                            <tr>
                            <td align="center" style="padding: 20px;background-color: #021936; border-radius: 8px;">
                                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnWired%21%20-%201%20-%20Edited-ZcLKut7EQ7nzj3Th1CctmZvDjZ2mno.png" alt="Unwired Logo" width="120" style="display:block;">
                            </td>
                            </tr>
                            <tr>
                            <td align="center" style="font-size: 28px; font-weight: bold; color: #5cdba5; padding-bottom: 10px;">
                                Welcome to the Future of Charging
                            </td>
                            </tr>
                            <tr>
                            <td align="center" style="font-size: 18px; color: #5f5f5f; padding-bottom: 30px;">
                                You're officially on the Unwired! waitlist 🚗⚡
                            </td>
                            </tr>
                            <tr>
                            <td align="center" style="font-size: 16px; color: #333333; line-height: 1.6; padding: 0 10px;">
                                Thank you for joining the movement toward cleaner, smarter, and wireless mobility.
                                <br><br>
                                At <strong>Unwired</strong>, we’re on a mission to eliminate cables, queues, and range anxiety with our <strong>wireless EV charging solution</strong>—crafted for modern urban life.
                                <br><br>
                                As a waitlist member, you’ll get early access, sneak peeks, and the chance to help shape a product built with <strong>sustainability and seamlessness</strong> at its core.
                                <br><br>
                                Stay tuned — the future is charging, and it’s completely wireless.
                            </td>
                            </tr>
                            <tr>
                            <td align="center" style="padding-top: 30px;">
                                <a href="https://www.getunwired.in" style="display:inline-block; background-color:#5cdba5; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:8px; font-weight:bold; font-size:16px;">
                                Learn More About Unwired
                                </a>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>
                `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}