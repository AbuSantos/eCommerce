import nodemailer from "nodemailer";

export async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      country,
      region,
      state,
      city,
      apartmentNumber,
      streetNumber,
      phoneNumber,
      emailAddress,
      extraInformation,
      cartItems,
    } = await req.json();

    //creating the nodemailer transport service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const formattedCartItems = cartItems
      .map(
        (item: any, index: number) =>
          `<p>
            <strong>Item ${index + 1}:</strong> 
            Name: ${item.name},
            Colors: ${item.colors}, 
            Size: ${item.size} xx ${item.qty}<br />
          </p>`
      )
      .join("");

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: "New Order from",
      html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>State:</strong> ${region}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Apartment Number:</strong> ${apartmentNumber}</p>
          <p><strong>Street Number:</strong> ${streetNumber}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email Address:</strong> ${emailAddress}</p>
          <p><strong>Extra Information:</strong> ${extraInformation}</p>
          <p><strong>Extra Information:</strong> ${formattedCartItems}</p>
        `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json({ status: 200, success: true });
    } catch (error) {
      console.error(error);
      return Response.json({ status: 500, success: true });
    }
  }
}
