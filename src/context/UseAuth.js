import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import app from '../auth/FirebaseAuth'

export const UseUser = createContext()
function UseAuth({ children }) {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [db_user, set_db_user] = useState(null)

  //  sing up
  const sign_up = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const log_out = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [auth])

  useEffect(() => {
    if (user) {
      const load_user = async () => {
        try {
          const load_fetch = await fetch(
            `http://localhost:5000/user-get-by-email?email=${user?.email}`,
          )
          const data = await load_fetch.json()
          setLoading(false)
          set_db_user(data)
        } catch (err) {
          console.log(err)
        }
      }
      load_user()
    } else {
      set_db_user(null)
    }
  }, [user])

  const value = { user, sign_up, loading, setLoading, login, log_out, db_user }
  return <UseUser.Provider value={value}>{children}</UseUser.Provider>
}

export default UseAuth
