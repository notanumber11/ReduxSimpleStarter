import React , { Component } from "react"
import { connect } from "react-redux"


class BookDetail extends Component {
    render(){
        console.log("Rendering book_detail with props: " + Object.keys(this.props) )
        if (!this.props.book){
            return(
                <div>Select a book to get started</div>
            )
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    // Whatever returns from here will show as props inside of book detail
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)