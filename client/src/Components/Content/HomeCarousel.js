import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import styled from 'styled-components';
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

const ImageContainer = styled.div`
    margin: auto;
`;


class HomeCarousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };

    render() {
        let { leftIcon, rightIcon } = this.state;
        return (
            <ImageContainer>
                <RBCarousel
                    animation={true}
                    autoplay={this.state.autoplay}
                    slideshowSpeed={3000}
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                    onSelect={this.onSelect}
                    ref={r => (this.slider = r)}
                    version={4}
                    indicators={false}
                >
                    <div style={{ height: 400 }}>
                        <img
                            style={{ width: "100%", height: "100%" }}
                            src="https://www.w3schools.com/bootstrap/ny.jpg"
                        />
                    </div>
                    <div style={{ ...styles, backgroundColor: "aqua" }}>
                        <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>

                    </div>
                    <div style={{ height: 400, width: "100%", backgroundColor: "lightpink" }}>
                        <div className="carousel-center">center Text</div>

                    </div>
                    <div style={{ ...styles, backgroundColor: "lightblue" }}>
                        <span>text</span>
                    </div>
                </RBCarousel>
            </ImageContainer>
        );
    }
}

export default HomeCarousel;

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
    <div className={`col-${props.span}`} style={props.style}>
        {props.children}
    </div>
);
const Button = props => {
    const { style, bsStyle, onClick } = props;
    const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
    return (
        <button style={style} className={className} onClick={onClick}>
            {props.children}
        </button>
    );
};