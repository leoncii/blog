import { createContext, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export const Context = createContext({})

function UserProvider({ children }) {

  const [session, loading] = useSession()

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
