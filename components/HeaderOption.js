import React from 'react'

function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`cursor-pointer ${
        selected && 'border-blue-500 text-blue-500'
      } flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  )
}

export default HeaderOption
