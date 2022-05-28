import React from 'react'
import Avatar from './Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="text-grey-700 flex w-full justify-between p-5 text-sm">
      <div className="flex items-center space-x-4">
        <p className="link"> About</p>
        <p className="link"> Store</p>
      </div>
      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />
        {/* Avatar */}
        <Avatar url="https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg" />
      </div>
    </header>
  )
}

export default Header
