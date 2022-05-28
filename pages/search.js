import Head from 'next/head'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'

function Search() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0  bg-white">
        <div className="flex w-full items-center p-6">
          <Image
            className="cursor-pointer"
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            onClick={(e) => router.push('/')}
            height={40}
            width={120}
          />
          <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 py-3 px-6 shadow-lg">
            <input
              ref={searchInputRef}
              className="flex w-full flex-grow focus:outline-none"
              type="text"
            />
            <XIcon
              className="h-7 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3 "
              onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className=" mr-3 hidden h-6 border-l-2 border-gray-400 pl-4 text-blue-500 sm:inline-flex " />
            <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
            <button hidden type="submit" onClick={search}></button>
          </form>

          <Avatar
            className="ml-auto"
            url="https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg"
          />
        </div>
        <HeaderOptions />
      </header>
    </div>
  )
}

export default Search
