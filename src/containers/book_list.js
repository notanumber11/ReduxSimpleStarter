import React , { Component } from "react"
import { connect } from "react-redux"
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux"

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li
                    key={book.title}
                    onClick = {()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render(){
        console.log("Rendering book_list with props: " + Object.keys(this.props) )
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    // Whatever returns from here will show as props inside of book list
    return {
        books: state.books
    }
}

// Anything returning this maps will end as props on the booklist container
function mapDispatchToProps(dispatch){
    // Wherever selectbook is called, the result should be passed
    // to all the reducers
    return bindActionCreators({ selectBook: selectBook},dispatch)
}

/* function mapDispatchToProps(dispatch) {
    return({
        selectBook: (book) => {dispatch(selectBook(book))}
    })
} */

// Promote BookList to a component to a container. It makes the container aware
// of mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BookList)