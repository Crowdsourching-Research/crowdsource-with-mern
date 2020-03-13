import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import Card from 'react-bootstrap/Card';
import Flexbox from 'flexbox-react';
import "../App.css";
import { Grid } from '@material-ui/core';
class Posts extends Component {
    componentDidMount() {
        this.props.getPosts()
    }
    render() {
       
        const postItems = this.props.posts.map(post => (
                // <div className="cards">
                    <Grid item xs>
                    <Card style={{ width: '18rem' }}>
                        <p>Paper Title: {post.paperName} </p>
                        <p>Paper Author: {post.paperAuthor} </p>
                        <p>Video Creator: {post.videoCreator} </p>
                    </Card>
                  </Grid>
                // </div>
        ))
       
        return (


<div>
    <Grid 
    container spacing = {5}

    >
                    {postItems} 
                    </Grid>
</div>
        )

    }
}
// Posts.propTypes = {
//     getPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { getPosts })(Posts);