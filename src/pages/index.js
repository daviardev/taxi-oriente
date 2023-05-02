import Head from 'next/head'

import { useSession, getProviders, getSession } from 'next-auth/react'

import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'

export default function Home ({ providers }) {
  const { data: session } = useSession()

  if (!session) return <Login providers={providers} />
  return (
    <>
      <Head>
        <title>Inicio | Taxi Orientes S.A.S</title>
        <link rel='icon' href='/logo-taxiapp.png' />
      </Head>

      <h1>Inicio</h1>
      <Sidebar />
    </>
  )
}

export async function getServerSideProps (context) {
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      providers,
      session
    }
  }
}
