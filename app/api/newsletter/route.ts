import nodemailer from "nodemailer";

export async function POST(req: any) {
  if (req.method === "POST") {
    const email = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: "Newsletter subscribed from",
      html: `
    <p><strong>${email}</strong></p>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json({ status: 200, success: true });
    } catch (error) {
      return Response.json({ status: 500, success: true });
    }
  }
}
