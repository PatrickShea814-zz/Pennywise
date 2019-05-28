import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import styled from 'styled-components';
import RBCarousel from "react-bootstrap-carousel";
import ExtensionImage from '../../Assets/CarouselImages/pennywiseextension.png';

const styles = { height: 400, width: "100%" };

const ImageContainer = styled.div`
    margin: auto;
    max-width: 100%;
`;

const Slide = styled.div`
height: 400px;
width: 100%;
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
                    <Slide>
                        <img
                            style={{ width: "100%", height: "100%" }}
                            src="https://www.w3schools.com/bootstrap/ny.jpg"
                        />
                    </Slide>
                    <Slide>
                        <div className="carousel-center">center Text</div>

                    </Slide>
                    <Slide>
                        <span>text</span>
                    </Slide>
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
    <div className={`col-${props.span} `} style={props.style}>
        {props.children}
    </div>
);
const Button = props => {
    const { style, bsStyle, onClick } = props;
    const className = bsStyle ? `btn btn - ${bsStyle} ` : "btn";
    return (
        <button style={style} className={className} onClick={onClick}>
            {props.children}
        </button>
    );
};