# Instrucciones para Configurar el Envío de Emails

El formulario de contacto está listo para enviar emails a **angelmelo.dev@gmail.com**. 

## Opción 1: Usar Resend (Recomendado - Más Fácil)

### Pasos:

1. **Instalar Resend:**
   ```bash
   npm install resend
   ```

2. **Crear cuenta en Resend:**
   - Ve a https://resend.com y crea una cuenta gratuita
   - El plan gratuito incluye 3,000 emails/mes

3. **Obtener API Key:**
   - Ve a https://resend.com/api-keys
   - Crea una nueva API key
   - Copia la clave

4. **Configurar variable de entorno:**
   - Crea o edita el archivo `.env.local` en la raíz del proyecto
   - Agrega:
     ```
     RESEND_API_KEY=tu_api_key_aqui
     ```

5. **Activar el código en la API:**
   - Abre `app/api/contacto/route.ts`
   - Descomenta la sección "OPCIÓN 1: Usar Resend"
   - Comenta o elimina la sección "TEMPORAL"

6. **Reiniciar el servidor:**
   ```bash
   npm run dev
   ```

---

## Opción 2: Usar Gmail con Nodemailer

### Pasos:

1. **Instalar Nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Habilitar verificación en 2 pasos:**
   - Ve a tu cuenta de Google: https://myaccount.google.com/security
   - Activa "Verificación en 2 pasos" si no está activada

3. **Generar contraseña de aplicación:**
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Escribe "Café Aroma" y genera la contraseña
   - **Copia la contraseña de 16 caracteres** (sin espacios)

4. **Configurar variables de entorno:**
   - Crea o edita el archivo `.env.local` en la raíz del proyecto
   - Agrega:
     ```
     GMAIL_USER=angelmelo.dev@gmail.com
     GMAIL_APP_PASSWORD=tu_contraseña_de_16_caracteres
     ```

5. **Activar el código en la API:**
   - Abre `app/api/contacto/route.ts`
   - Descomenta la sección "OPCIÓN 2: Usar Nodemailer con Gmail SMTP"
   - Comenta o elimina la sección "TEMPORAL"

6. **Reiniciar el servidor:**
   ```bash
   npm run dev
   ```

---

## Verificar que Funciona

1. Ve a la página de contacto: http://localhost:3000/contacto
2. Llena el formulario con datos de prueba
3. Envía el mensaje
4. Revisa tu correo **angelmelo.dev@gmail.com**

---

## Nota Importante

- El archivo `.env.local` NO debe subirse a Git (ya está en .gitignore)
- En producción (Vercel, Netlify, etc.), agrega las variables de entorno en el panel de configuración
- Resend es más fácil de configurar y tiene mejor deliverability
- Gmail tiene límites de envío (500 emails/día en cuentas personales)

