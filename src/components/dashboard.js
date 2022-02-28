import React from 'react'

const Dashboard = ({ props }) => {
  return (
    <div className="h-screen">
      <header className="bg-white">
        <div className="max-w-7xl my-12 mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-primary tracking-widest">{props}</h1>
        </div>
      </header>
    </div>
  )
}

export default Dashboard