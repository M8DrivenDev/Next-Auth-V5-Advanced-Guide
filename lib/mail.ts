import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendTwoFactorTokenEmail = async (
  email:string,
  token: string
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two Factor Authentication Code",
    html: `<h3>You'r code is: ${token}</h3>`
  })
}

export const sendVerificationEmail = async (
  email:string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<h3>Click <a href=${confirmLink}>here</a> to confirm email.</h3>`
  })
}

export const sendPasswordResetEmail = async (
  email:string,
  token: string
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<h3>Click <a href=${resetLink}>here</a> to reset your password.</h3>`
  })
}
