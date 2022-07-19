import React from 'react'

const Error = ({error}) => {
  return (
    <div className='h-screen flex items-center justify-center'>
    <p className='px-4 py-2 bg-red-700 text-red-100'>{error.message}</p>
  </div>
  )
}

export default Error