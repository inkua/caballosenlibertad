const passwordTemplate = (name='voluntario', password)=>{
    const subject = "Cambiar Contraseña - Caballos En Libertad"
    const message = `
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif; color: #333333;">
        <div style="background-color: #007BFF; color: #ffffff; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px;">¡Hola, ${name}!</h1>
        </div>
        <div style="padding: 20px;">
            <p>Tu cuenta en nuestra plataforma ha sido configurada con éxito. Para que puedas acceder, hemos generado una contraseña provisional. Si solicitaste la restauración de tu contraseña, también puedes usar esta para iniciar sesión o puedes personalizarla según tu preferencia.</p>
            <h2 style="font-size: 18px;">Tu contraseña provisional: ${password}</h2>
            <p>Para mayor seguridad, te pedimos que cambies esta contraseña. Haz clic en el siguiente enlace para acceder a la página donde podrás establecer una nueva contraseña personalizada:</p>
            <a href="http://localhost:3000/auth/updatePassword" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">Cambiar mi contraseña</a>
            <br><br>
            <p>Si no solicitaste esta cuenta o la restauración de tu contraseña, por favor contáctanos de inmediato respondiendo a este correo.</p>
            <p>Atentamente,<br>El equipo de Caballos En Libertad</p>
        </div>
        <div style="background-color: #f4f4f4; text-align: center; padding: 15px; font-size: 12px; color: #666666;">
            <p>&copy; Caballos En Libertad</p>
            <p>Síguenos en:
                <a href="https://facebook.com/tu_fundacion" style="color: #007BFF; text-decoration: none; margin: 0 5px;">Facebook</a> |
                <a href="https://twitter.com/tu_fundacion" style="color: #007BFF; text-decoration: none; margin: 0 5px;">Twitter</a> |
                <a href="https://instagram.com/tu_fundacion" style="color: #007BFF; text-decoration: none; margin: 0 5px;">Instagram</a>
            </p>
            <p>Visita nuestra página: <a href="https://www.inkua.de" style="color: #007BFF; text-decoration: none;">www.tu-fundacion.org</a></p>
        </div>
    </div>
    `

    return {message, subject}
}

const contactTemplate = (name='Desconocido', phone, email, content)=>{
    const subject = "Consulta - Página Contacto"
    const message = `
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; color: #333333; padding: 20px;">
    <!-- Cabecera -->
    <div style="background-color: #007BFF; color: #ffffff; text-align: center; padding: 20px 0; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Nuevo mensaje desde el formulario de contacto</h1>
    </div>

    <!-- Cuerpo del mensaje -->
    <div style="padding: 20px;">
        <h2 style="font-size: 18px; color: #007BFF; margin-bottom: 10px;">Detalles del contacto:</h2>
        
        <p style="font-size: 16px; margin: 5px 0; line-height: 1.6;"><strong>Nombre del usuario:</strong> ${name}</p>
        <p style="font-size: 16px; margin: 5px 0; line-height: 1.6;"><strong>Teléfono de contacto:</strong> ${phone}</p>
        <p style="font-size: 16px; margin: 5px 0; line-height: 1.6;"><strong>Correo electrónico:</strong> ${email}</p>

        <h3 style="font-size: 18px; color: #007BFF; margin-top: 20px;">Consulta del usuario:</h3>
        <p style="font-size: 16px; line-height: 1.6;">${content}</p>
    </div>

    <!-- Pie de página -->
    <div style="background-color: #f4f4f4; color: #555555; text-align: center; padding: 15px; border-radius: 0 0 8px 8px; font-size: 14px;">
        <p style="margin: 0;">Este mensaje fue enviado a través del formulario de contacto de Caballos en Libertad.</p>
    </div>
</div>

    `

    return {message, subject}
}

export{
    passwordTemplate,
    contactTemplate,
}