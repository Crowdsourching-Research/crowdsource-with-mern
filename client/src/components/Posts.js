import React, { Component } from "react";
// import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getPosts} from '../actions/postActions';
import Card from 'react-bootstrap/Card'

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts()
    }
    render() {
        const postItems = this.props.posts.map ( post => (
            <div><Card>
                <p> {post.paperName} </p>
                <p> {post.paperAuthor} </p>
                <p> {post.videoCreator} </p></Card>
            </div> 
        )) 
        return (
        
            <div>
                <h1> Posts </h1>
                {postItems} 
            </div>
           
        )

}}
// Posts.propTypes = {
//     getPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    posts: state.posts.items
})
  
export default connect(mapStateToProps , {getPosts}) (Posts);