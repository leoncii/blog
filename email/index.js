import fs from 'fs'
import path from 'path'
export const text = ({ url, site }) => `Sign in to ${site}\n${url}\n\n`

export const html = ({ url, site, email, base64file = '' }) => {
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
  const escapedSite = `${site.replace(/\./g, '&#1b1f24;.')}`

  const backgroundColor = '#f2f2f2'
  // const backgroundColor = "#f2f2ef";
  const styleBody = 'background: rgb(33,62,48);background: linear-gradient(90deg, rgba(33,62,48,1) 0%, rgba(40,57,77,1) 50%, rgba(98,54,91,1) 100%);'
  const textColor = '#fff'

  const mainBackgroundColor = '#255843'
  const buttonBackgroundColor = '#fff'
  const buttonBorderColor = '#cfcfcf'
  const buttonTextColor = '#000'

  return `
<body style="background: ${styleBody};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong style="color:#222">${escapedSite}</strong>
      </td>
      <td align="center" style="min-width: 50px; max-height: 50px; fit-content:contain;">
        <img style="width: 100px; height: 50px; object-fit: contain;" src="https://res.cloudinary.com/djc1umong/image/upload/v1626473655/leoBlu_iergws.jpg" />
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
            <td align="center" style="color:${textColor}; padding-bottom: 15px;" bgcolor="transparent">Gracias por registrarte a <strong style="color: #39ffbf">${escapedEmail}</strong> solo queda un paso. ⛵</td>
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="width: -webkit-fill-available;font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr style="display:grid;">
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        O puedes seguir el siguiente enlace para terminar el registro: 
         <a href=${url} target="_blank"> <small>${url}</small> </a>
      </td>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
      </td>
    </tr>
  </table>
</body>
`
}
