import React, { Component } from "react";
import WishList from "./WishList";
import ViewItem from "../Buttons/ViewItem";
import RemoveItem from "../Buttons/RemoveItem"
import Microlink from '@microlink/react';
import "../../Assets/css/WishList.css";

// let brakePoints = [350, 500, 750];
// let images = [];
// const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
// for (let i = 0; i < imgId.length; i++) {
//   const ih = 200 + Math.floor(Math.random() * 10) * 15;
//   images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
// }


class Masonry extends Component {

    state = {
        url: '',
        itemID: '',
        images: [],
        brakePoints: [350, 500, 750],
        imgId: [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]
    }

    displayImages() {
        console.log("Display Image");
        const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
        for (let i = 0; i < imgId.length; i++) {
            const ih = 200 + Math.floor(Math.random() * 10) * 15;
            let newArr = this.state.images;
            newArr.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
            this.setState({ images: newArr });
        }
    }

    componentDidMount() {
        this.displayImages();
    }

    removeImage() {
    }

    render() {
        return (
            <div className="container">
                <div className="masonry-container">
                    <WishList brakePoints={this.state.brakePoints}>
                        {this.state.images.map((image, id) => {
                            return (
                                <Tile
                                    key={id}
                                    src={image}
                                    rem={() => this.removeImage}
                                />
                            )
                        })}
                    </WishList>
                </div>
            </div>
        )
    }
}


const Tile = ({ src }, props) => {
    { console.log("PROPS : ", props) }
    return (
        <div className="card" id="itemCard">
            <div className="tile">
                <img src={src} alt="Masonry Images" />
            </div>
            <div className="card-body" id="itemContent">
                <ViewItem />
                <RemoveItem />
            </div>
        </div>
    );
};


export default Masonry;