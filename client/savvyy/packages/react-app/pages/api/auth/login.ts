import { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth/react'

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {phoneNumber,password} = req.body
   const result =  await signIn('credentials', { redirect: false,
        phoneNumber: phoneNumber,
        password: password, })
 
   // res.status(200).json({ success: true })
  } catch (error:any) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}