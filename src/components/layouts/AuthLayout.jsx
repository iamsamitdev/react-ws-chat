import React from 'react'

function AuthLayout({ children }) {
  return (
    <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                {children}
            </div>
        </div>
    </>
  )
}

export default AuthLayout