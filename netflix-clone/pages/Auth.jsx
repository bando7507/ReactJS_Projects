
import Input from '../src/components/Input'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'


function Auth() {
  const router = useRouter()

  const [name, setUseName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const togglevariant = useCallback(() =>{
    setVariant((curentVariant) => curentVariant === 'login' ? 'register' : 'login')
  },[])

  const login = useCallback(async () => {
    try{
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      })
      router.push('/')
    }catch(err){
      console.log(err);
    }
  }, [email, password, router])

  const register = useCallback(async () =>{
    try{
      await axios.post('/api/register', {
        email,
        name,
        password,
      })

      login()
    }catch(err){
      console.log(err);
    }
  }, [email, password, name])



  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src="/images/logo.png" alt="" className='h-10' />
        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-10 py-10 self-center lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h3 className="text-white text-4xl font-semibold mb-3">
            {variant === 'login' ? 'Sign in' : 'Register'}
            </h3>
            <div className='flex flex-col gap-4'>

            {variant === 'register' && (
              <Input 
              label='Username'
              onChange={(e) => {setUseName(e.target.value)}}
              type='username'
              id='username'
              value={name}
              />
            )}

              <Input 
              label='E-mail'
              onChange={(e) => {setEmail(e.target.value)}}
              type='email'
              id='email'
              value={email}
              />
              <Input 
              label='Password'
              onChange={(e) => {setPassword(e.target.value)}}
              type='password'
              id='password'
              value={password}
              />
            </div>

            {variant === 'login' && (
            <button
            onClick={login} 
            className='bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition mt-7'>
              Login
            </button>
            )}

            {variant === 'register' && (
            <button
            onClick={register} 
            className='bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition mt-7'>
              Sign in
            </button>
            )}
            <div className='flex items-center mt-8 justify-center gap-4'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white hover:opacity-70 transition cursor-pointer'>
                <FcGoogle size={30} />
              </div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white hover:opacity-70 transition cursor-pointer'>
                <FaGithub size={30} />
              </div>
            </div>
            <p className='text-neutral-500 mt-5'>
              {variant === 'login' ? 'Firts time using Netflix?' : 'Already have an account'}
              <span 
              className='text-white ml-2 hover:underline cursor-pointer'
              onClick={togglevariant}
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
              ss
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth