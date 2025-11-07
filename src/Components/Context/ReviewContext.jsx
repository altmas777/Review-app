import { createContext, useReducer } from "react";
import { ReviewReducer } from "./ReviewReducer";

const ReviewContext = createContext()


export const ReviewProvider =({children}) =>{

 
    const initialState = {
        reviews : [{ id : 1 , rating: 3, name: "Zenith" , review: "Noice" }],
        edit : { review : {} , isEdit : false }
    }

    
   

  const [state , dispatch] = useReducer(ReviewReducer, initialState)

    
    return (
        <ReviewContext.Provider value={{...state , dispatch}}>
{children}
        </ReviewContext.Provider>
    )
}

export default ReviewContext