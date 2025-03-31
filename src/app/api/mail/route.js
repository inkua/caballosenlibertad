import { contactTemplate } from "@/utils/HTML_templates";

import { sendEmail } from "../send-email";

export async function POST(req) {
    try {
        const { data } = await req.json();
        if (!data.name || !data.email || !data.content) {
            return new Response(null, { status: 400 });
        }
        const { subject, message } = contactTemplate(
            data.name,
            data.phone,
            data.email,
            data.content
        );

        const response = await sendEmail(
            "caballosenlibertadlp@gmail.com",
            subject,
            message
        );

        if (response) {
            return new Response(true, { status: 200 });
        } else {
            return new Response(null, { status: 500 });
        }
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
