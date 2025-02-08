import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
})

const sendEmail = async (email, subject, message) => {
    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to:email,
            subject:subject,
            html:message,
        })
        
        if(info.rejected.length != 0){
            return false
        }
        return true
        
    } catch (error) {
        console.error("sendEmail.js service", error)
        return false
    }
}

export {
    sendEmail,
}
