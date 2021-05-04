import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

const SaltRounds = 10

export interface SignupRes {
  token: string
}

interface ContextObj {
  req: NextApiRequest
  res: NextApiResponse
  db: any
}

const resolver = {
  Mutation: {
    loginUser: async (root, args, context: ContextObj): Promise<SignupRes> => {
      const { JWT_SECRET } = process.env
      const {
        data: { email, password },
      } = args
      console.log('Args', context.db)
      const encryptedPassword = await bcrypt.hash(password, SaltRounds)
      const token = jsonwebtoken.sign({ email: email }, JWT_SECRET, { expiresIn: '1h' })
      const r = await context.db
        .collection('users')
        .insert({ email: email, password: encryptedPassword })
      context.res.setHeader('Set-Cookie', 'AB=A')
      console.log(r)
      context.res.status(200).send({ token })
    },
  },
}

export default resolver
