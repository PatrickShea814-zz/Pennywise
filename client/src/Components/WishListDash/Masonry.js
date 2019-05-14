import React, { Component } from "react";
import { Button } from "react-bootstrap";
import WishList from "./WishList";
import Microlink from '@microlink/react';
import "./WishList.css";

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
                <Microlink
                    className='item-shadow'
                    url='https://www.amazon.com/PreSonus-Eris-E3-5-Professional-Multimedia/dp/B075QVMBT9?pf_rd_p=0fc3f2c4-3ed5-4d11-9995-8d7c82394713&pd_rd_wg=V65hf&pf_rd_r=Q1TYXZA2BF4822M873NB&ref_=pd_gw_cr_simh&pd_rd_w=mCjVf&pd_rd_r=9d256a36-7735-427f-880d-a18b8f52ca11'
                    style={{ fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace' }}
                    media={['video', 'image']}
                    size='large'
                    controls
                />
            </div>
            <div className="card-body" id="itemContent">
                {props.price}
                <Button
                    bsStyle="primary"
                    id="viewItem"
                    className="btn"
                    onClick={props.rem}
                >
                    <span>View Item</span>
                </Button>
                <Button
                    bsStyle="danger"
                    id="removeItem"
                    className="btn"
                    onClick={props.rem}
                >
                    <span>Remove</span>
                </Button>
                <p className="card-text" id="itemText">Price:</p>
            </div>
        </div>
    );
};


export default Masonry;
