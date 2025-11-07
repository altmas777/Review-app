import React, { useContext } from 'react'
import ReviewContext from './Context/ReviewContext';

function Totalreviews() {

 const {reviews} = useContext(ReviewContext)



  const totalReviews=reviews.length;
 
  
  const averageRating = reviews.reduce((a,c)=>a+c.rating / reviews.length,0)

// const total = reviews.filter(review => review.rating > 0 ).reduce((a , c) => a + c.rating ,0)
// const avg = reviews.filter(review => review.rating > 0 ).reduce((a , c) => a + c.rating /500 ,0)


  
  return (
    <>
       <div className="total-review absolute pl-10 p-4 w-full  md:w-168   shadow-lg  md:top-130 rounded md:left-8 mb-10">
        <h2 className='text-2xl font-semibold mb-4'>Total REVIEW : {totalReviews} </h2>
        <p className='text-gray-600'>This is the total number of RATING submitted.</p>
        <div className='text-gray-600'>average rating: {averageRating}</div>
      </div>
    </>
  )
}

export default Totalreviews
