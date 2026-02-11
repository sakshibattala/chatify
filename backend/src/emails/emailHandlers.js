import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (name, email, clientUrl) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to chatify",
    html: createWelcomeEmailTemplate(name, clientUrl),
  });

  if (error) {
    console.log("Error sending welcome email: ", error);
    throw new Error(error);
  }

  console.log("Welcome Email sent successfully", data);
};
