import React, { useContext, useState ,useEffect} from 'react'
import ReviewContext from './Context/ReviewContext'

const Form = () => {

  const { edit, dispatch} = useContext (ReviewContext) 

const [rating,setRating] = useState("")
const [name,setName] = useState("")
const [review,setReview] = useState("")


const handleSubmit=(e)=>{
  e.preventDefault()



  !edit.isEdit ?
  dispatch({
    type : "ADD_REVIEW",
    payload: {id: crypto.randomUUID(),
      rating : +rating ,name,review
    }
  }) 
  
  :
  dispatch({
    type : "UPDATE_REVIEW",
    payload : {id : edit.review.id ,rating : +rating,name,review}
  })

  setRating("")
  setName("")
  setReview("")
}

  useEffect(() => {
    setRating(edit.review.rating)
    setName(edit.review.name)
    setReview(edit.review.review)
  }, [edit])

  return (
    <>
      <div className='p-4 w-full mt-10
      '>
        <h2 className='text-2xl font-semibold mb-4'>Add a Review</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-full-md  '>
          <input onChange={e=>setRating(e.target.value)} value={rating}
            type='number'
             min="1"
  max="5"
            placeholder='select rating (1-5)'
            className='p-2 rounded-mid shadow-lg placeholder:text-bold text-red-400 text-2xl ' 
          />
          <input onChange={e=>setName(e.target.value)} value={name}
            type='text'
            placeholder='Your Name'
            className='p-2  uppercase rounded-mid shadow-lg rounded placeholder:text-bold text-red-400 text-2xl'
          /> 
          <textarea onChange={e=>setReview(e.target.value)} value={review}
            placeholder='Your Review'
            className='p-2 rounded-mid  shadow-lg rounded h-24 placeholder:text-bold text-red-400 text-2xl'
          ></textarea>  

          <button
            type='submit'
            className='p-2 bg-green-500 hover:bg-green-700 text-white rounded cursor-pointer transition-all  border-green-800 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'>
           {edit.isEdit ? "UPDATE REVIEW" : "SUBMIT REVIEW"}
          </button>
        </form>
      </div> 
    </>
  )
}

export default Form
