export function selectBook(book){
    console.log("Action: SelectBook - " + book.title)
    // SelectBook is an action creator so it return an action
    // An object with a type property
    return{
        type: "BOOK_SELECTED",
        payload: book
    }
}

