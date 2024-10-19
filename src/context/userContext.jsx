import { auth } from '@/firebase-config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export function UserContextProvider(props) {
  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

  const [currentUser, setCurrentUser] = useState()
  const [loadingData, setLoadingData] = useState(true)
  let [ passeClick, setPasseClick ] = useState(false)


  useEffect(() => {
    const pasInscrit = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })
    return pasInscrit
  }, [])


  return (
    <UserContext.Provider
      value={{ signUp,currentUser,signIn,passeClick,setPasseClick }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}
