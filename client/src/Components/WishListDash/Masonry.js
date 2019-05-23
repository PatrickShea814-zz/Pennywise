import React, { Component } from "react";
import styled from 'styled-components';
import WishList from "./WishList";
import ViewItem from "../Buttons/ViewItem";
import RemoveItem from "../Buttons/RemoveItem";
import history from "../../history";
import Microlink from '@microlink/react';
import "../../Assets/css/WishList.css";
import { Route, Redirect } from 'react-router'
import DashMessage from "../Content/DashMessage";


let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {
    const ih = 200 + Math.floor(Math.random() * 10) * 15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

const Balance = styled.h1`
display: inline-block;
    font-size: 14px;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    letter-spacing: 2px;
    margin: 0px auto;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #00a79d;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid #00a79d;
    line-height: normal;
    &:hover {
        background-color: #7ae0bb;
        border: 1px solid #7ae0bb;
        color: white;
    }
`;


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
        // const imgId = [];
        for (let i = 0; i < imgId.length; i++) {
            const ih = 200 + Math.floor(Math.random() * 10) * 15;
            let newArr = this.state.images;
            newArr.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
            this.setState({ images: newArr });
        }
    }

    componentDidMount() {
        this.displayImages();
        if(this.state.images.length > 0) {
            console.log("img length ", this.state.images.length);
        }
        else {
            this.showDashMessage();
        }
    }

    showDashMessage(){
        console.log("test")
        return(
            history.replace('/dashmessage')
        )
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
    return (
        <div className="card" id="itemCard">
            <div className="tile">
                <img src={src} alt="Masonry Images" />
            </div>
            <Balance>Pennybank: $53.98</Balance>
            <div className="card-body" id="itemContent">
                <ViewItem />
                <RemoveItem />
            </div>
        </div>
    );
};


export default Masonry;
