import React, { useState } from 'react'
import resturant_items from '../data/resturant.json'

const Home = () => {
  
  function getRandom (num) {
    return Math.floor(Math.random()*num) + 1
  }

  const [store, setStore] = useState(0);

  // Math.random 產出 0-1 之間小數
  // Math.floor 無條件捨去
  // 因為要產生 1-num 之間數字，所以 +1 才不會為 0
  const handleClick = () => {
    setStore(getRandom(11))
  }

  return (
    <div className="h-screen">
      <div className="max-w-7xl my-12 mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-primary tracking-widest">午餐吃什麼</h1>
      <button 
        onClick={handleClick}
        className="text-2xl px-6 py-4 my-8 bg-primary rounded-3xl text-background tracking-widest hover:opacity-75"
      >
        點我決定
      </button>
      {
        resturant_items.map((item, store_id) => (
          item.id === store ?
          <div key={store_id}>
            <div className="text-3xl py-10 tracking-widest">{item.name}</div>
            <div className="text-lg tracking-wider">預約電話：{item.phone}</div>
            <div className="text-lg tracking-wider">營業時間：{item.status.Mon}</div>
          </div>
          : (
            <div></div>
          )
          
        ))
      }
     </div>
    </div>
  )
}

export default Home