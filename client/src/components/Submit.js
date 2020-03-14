import React, { Component } from "react";
import axios from "axios";
import '../App.css';
import Modal from 'react-modal';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
 import Navbar from "./layout/Navbar";
// import Navbar from "./Navbar/Navbar";
 

  
class Submit extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            video: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitPost = (postData) => {
        axios
            .post("/api/videos", postData)
            .catch(err =>
                console.log(err)
            );
    };


    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();

        const newPost = {
            paperName: this.state.title,
            paperAuthor: this.state.author,
            videoCreator: this.state.video

        }
        this.submitPost(newPost)
    }

    


    render() {
        const mystyle = {
                width: 500,
                marginLeft: "500px"

              };
        return (
            <div>

            {/* <Navbar></Navbar> */}
            
            <form onSubmit={this.handleSubmit} 
            style={mystyle}
            >
                <label>
                    Title:
                 <input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Author:
                 <input type="text" name="author" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Video:
                 <input type="text" name="video" value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}
export default Submit;