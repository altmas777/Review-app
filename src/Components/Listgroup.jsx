import React, { useContext } from 'react'
import Listgroupitems from './Listgroupitems'
import ReviewContext from './Context/ReviewContext'

function Listgroup() {

const {reviews} = useContext (ReviewContext)
  
  return (
    <>
      <div className='p-4    w-full pt-10 '>
        <h2 className='text-2xl font-semibold mb-4'>Reviews</h2>
{
  reviews.map(review => <Listgroupitems key={review.id} review={review}/>)
}

      </div>  
    </>
  )
}

export default Listgroup
