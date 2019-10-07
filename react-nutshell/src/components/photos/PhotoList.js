import React, { Component } from 'react'
//import the components used
import PhotoCard from './PhotoCard'
import PhotoManager from './PhotoManager'

class PhotoList extends Component {
    //define what this component needs to render
    state = {
        url: [],
    }
// method for deleting 1 photo
    deletePhoto = id => {
        PhotoManager.delete(id)
            .then(() => {
                PhotoManager.getAll()
                    .then((newPhoto) => {
                        this.setState({
                            url: newPhoto
                        })
                    })
            })
    }
    componentDidMount() {
        console.log("PHOTOLIST: ComponentDidMount");
        //getAll from PhotoManager and hang on to that data; put it in state
        PhotoManager.getAll()
            .then((newPhotoFromDatabase) => {
                this.setState({
                    url: newPhotoFromDatabase
                })
            })
    }
// render method for printing to DOM
    render() {
        console.log("PHOTO LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/photos/new") }}>
                        Import Photo
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.url.map(singlePhoto =>

                    <PhotoCard key={singlePhoto.id} photoProp={singlePhoto} deletePhoto={this.deletePhoto} {...this.props}  /> )}
            </div>
            </>
        )
    }
}
export default PhotoList;