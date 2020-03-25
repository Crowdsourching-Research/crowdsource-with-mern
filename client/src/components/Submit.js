import React, { Component } from "react";
import axios from "axios";
import '../App.css';
// import Modal from 'react-modal';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
 import Navbar from "./layout/Navbar";
// import Navbar from "./Navbar/Navbar";
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import AlertModal from './modals/AlertModal';

  
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
             alert("Yay");
            // function Example() {
            //     const [show, setShow] = React.useState(false);
              
            //     const handleClose = () => setShow(false);
            //     const handleShow = () => setShow(true);
              
            //     return (
            //       <>
            //         <Button variant="primary" onClick={handleShow}>
            //           Launch demo modal
            //         </Button>
              
            //         <Modal show={show} onHide={handleClose}>
            //           <Modal.Header closeButton>
            //             <Modal.Title>Modal heading</Modal.Title>
            //           </Modal.Header>
            //           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            //           <Modal.Footer>
            //             <Button variant="secondary" onClick={handleClose}>
            //               Close
            //             </Button>
            //             <Button variant="primary" onClick={handleClose}>
            //               Save Changes
            //             </Button>
            //           </Modal.Footer>
            //         </Modal>
            //       </>
            //     );
            //   };
              
              // ReactDOM.render([Example]);
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
            {/* <AlertModal/> */}
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