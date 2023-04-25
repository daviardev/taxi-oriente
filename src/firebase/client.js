import { initializeApp, getApp, getApps } from 'firebase/app'

import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_APPID,
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID
}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getStorage(app)
const firestore = getFirestore()
