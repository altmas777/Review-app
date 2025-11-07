import React, { useContext } from 'react'
import ReviewContext from './Context/ReviewContext'

function Listgroupitems({review}) {


  const {dispatch} = useContext (ReviewContext)

  const handleRemove =(id) => {

    dispatch({
      type : "REMOVE_REVIEW",
      payload : id
    })
  }

  const handleEdit = (review) => {
    dispatch({
      type : "EDIT_REVIEW",
      payload: review
    })
  }


  return (
    <>
       <div className='space-y-4 relative my-3'>
          <div className='p-8  rounded shadow-lg'>

            <h1 className='rating  pb-4 text-lg font-semibold text-yellow-500'>RATING : {review.rating}</h1>
            <h3 className='font-bold uppercase text-black-500 text-3xl'> NAME : {review.name}</h3>
  <p className='mt-2 text-2xl font-semibold'>  review : {review.review} </p>

            <div className='absolute right-2 top-2 p-1 space-x-2 flex'>
                <button onClick={()=>handleEdit(review)} className=' bg-yellow-500 hover:bg-yellow-700 cursor-pointer transition-all bg-yelllow-500 text-white px-4 py-1 rounded-lg
                                border-yellow-800
                               border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                               active:border-b-[2px] active:brightness-90 active:translate-y-[2px] '>EDIT</button>
                <button onClick={()=>handleRemove(review.id)} className=' bg-red-500 hover:bg-red-700 cursor-pointer transition-all bg-red-500 text-white px-4 py-1 rounded-lg
                                    border-red-800
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]' >DELETE</button>
            </div>
          </div>

        </div>
    </>
  )
}

export default Listgroupitems
