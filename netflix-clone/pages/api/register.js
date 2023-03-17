import { NextApiResponse, NextApiRequest } from "next";
import prismadb from '../../lib/prismadb'
import bcrypt from 'bcrypt'


export default async function handler(req, res) {

        if(req.method !== 'POST'){
        res.status(405).end()
        console.log('jaja');
    }
    try {

    const { email, name, password} = req.body
    const existingUser = await prismadb.user.findUnique({
        where:{
            email,
            }
        })
        if(existingUser){
            return res.status(422).json({error: 'Email Token'})
        }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await prismadb.user.create({
        data:{
            email,
            name,
            hashedPassword,
            image:'',
            emailVerified: new Date(),
            }
        })
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(405).end()
    }

}
