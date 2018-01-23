// Default state = null put undefined instead of null
export default function(state = null, action){
    console.log("Calling reducer_active_book...")
    switch(action.type){
        case "BOOK_SELECTED":
            return action.payload;
    }
    return state
}