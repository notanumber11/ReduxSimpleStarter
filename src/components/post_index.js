import React, { Component } from "react"

class PostIndex extends Component{
    
    constructor(props){
        super(props)
        this.props = props;
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                PostIndex
            </div>
        )
    }
}

export default PostIndex;