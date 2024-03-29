import { compare } from "bcrypt"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import prismadb from '../../../lib/prismadb'


export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: Credentials,
            credentials:{
                email:{
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'PassWord',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email and password required')
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })


                if(!user || !user.hashedPassword){
                    throw new Error('Email does not exist')
                }

                const isCorrectPasswor = await compare(
                    credentials.password,
                    user.hashedPassword
                )

                if(!isCorrectPasswor){
                    throw new Error('Password incorrect')
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/Auth'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret : process.env.NEXTAUTH_SECRET
})