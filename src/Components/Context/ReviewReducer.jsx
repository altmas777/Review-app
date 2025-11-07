    //reducer function
 export const ReviewReducer =(state,action)=>{


    if(action.type === "REMOVE_REVIEW"){
        return {
            ...state, 
            reviews : state.reviews.filter(review => review.id !== action.payload)
        }
    }   else if (action.type === "ADD_REVIEW"){
            return{
                ...state,
                reviews: [action.payload , ...state.reviews]
            }
        }
        else if (action.type === "EDIT_REVIEW"){
            return {
                ...state,
                edit : {review: action.payload , isEdit: true}
            }
        }
        else if (action.type === "UPDATE_REVIEW") {
            return{
                ...state,
                reviews : state.reviews.map(review => review.id === action.payload.id ? action.payload : review),
                edit : {review :{}, isEdit : false }

            }
        }
        else 
            return state

    }
    