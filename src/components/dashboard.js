import React from 'react'

const Dashboard = ({ props }) => {
  return (
    <div className="h-screen">
      <header className="bg-white">
          <div className="max-w-7xl my-12 mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-primary tracking-widest">{props}</h1>
          </div>
        </header>
        {/* <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
          </div>
        </main> */}
    </div>
  )
}

export default Dashboard