import { createContext, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getRedirect } from '../firebase/db'

export const Context = createContext({})

function UserProvider({ children }) {

  const [session, loading] = useSession()

  useEffect(() => {
    session === 'undefined' && router.replace('/')
  }, [])


  useEffect(() => {
    getRedirect().then(res => console.log(res))
  }, [])

  const value = {
    session,
    loading,
    signOut,
    signIn
  }


  return <Context.Provider value={value}>
    {children}
  </Context.Provider>

}


export default {
  Provider: UserProvider,
  UserConsumer: Context.Consumer
}