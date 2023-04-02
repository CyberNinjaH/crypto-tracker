import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Ticker from '@/components/Ticker'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='py-24'>
        <div className='mx-auto'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold leading-6 text-indigo-400'>
              Cryptocurrency Tracker
            </h2>
            <h1 className='text-4xl font-bold text-slate-200 mt-2'>
              Digital money for a digital world.
            </h1>
            <p className="text-lg text-slate-200 mt-3">Escape the matrix by using currencies they can't track!</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-16">
        <Ticker />
      </div>
      <div className='pb-5 text-center'>
        <p className='text-gray-500'>Powered by</p>
        <a className='text-indigo-500 text' href='https://www.binance.com'>Binance
        </a>
      </div>
    </Layout>
  )
}
