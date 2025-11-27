import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, mensaje } = await request.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Email de destino
    const emailDestino = 'angelmelo.dev@gmail.com';

    // Configurar el email
    const emailData = {
      to: emailDestino,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto - Café Aroma</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
      `,
      text: `
        Nuevo mensaje de contacto - Café Aroma
        
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}
      `,
    };

    // OPCIÓN 1: Usar Resend (Recomendado - más fácil y gratuito)
    // Pasos:
    // 1. Instalar: npm install resend
    // 2. Crear cuenta en https://resend.com
    // 3. Obtener API key de https://resend.com/api-keys
    // 4. Agregar a .env.local: RESEND_API_KEY=tu_api_key
    // 5. Descomentar el código de abajo
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Puedes usar este para pruebas
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });

    if (error) {
      console.error('Error enviando email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
    */

    // OPCIÓN 2: Usar Nodemailer con Gmail SMTP
    // Pasos:
    // 1. Instalar: npm install nodemailer
    // 2. Habilitar "Verificación en 2 pasos" en tu cuenta de Google
    // 3. Generar "Contraseña de aplicación" desde: https://myaccount.google.com/apppasswords
    // 4. Agregar a .env.local:
    //    GMAIL_USER=angelmelo.dev@gmail.com
    //    GMAIL_APP_PASSWORD=tu_contraseña_de_aplicacion
    // 5. Descomentar el código de abajo
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    });

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
    */

    // TEMPORAL: Solo para desarrollo - muestra el email en consola
    // IMPORTANTE: Reemplazar con una de las opciones de arriba para producción
    console.log('='.repeat(50));
    console.log('EMAIL QUE SE ENVIARÍA:');
    console.log('Para:', emailData.to);
    console.log('Asunto:', emailData.subject);
    console.log('De:', nombre, `<${email}>`);
    console.log('Mensaje:', mensaje);
    console.log('='.repeat(50));

    // Por ahora retornamos éxito (pero no se envía realmente)
    // Descomenta una de las opciones de arriba para que funcione
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

