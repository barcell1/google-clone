import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <head>
        <title>Google</title>
      </head>
      <Header />
      {/* <Body/> */}
      <form className="mt-44 flex w-4/5 flex-grow flex-col items-center">
        <Image
          className=""
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="mt-5 flex w-full  max-w-md items-center rounded-full border border-gray-200 py-3 px-5 focus-within:shadow-lg  hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 text-gray-500" />

          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I`m Feeling Lucky
          </button>
        </div>
      </form>
      {/* Footer */}

      <Footer />
    </div>
  )
}
