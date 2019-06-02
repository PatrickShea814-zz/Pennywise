import React, { Component } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



const ImageContainer = styled.div`
    width: 30%;
`;

class FeaturesCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            autoPlay: true,
            showThumbnails: true,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showNav: false,
            showPlayButton: false,
            slideDuration: 1000,
            slideInterval: 3200,
            slideOnThumbnailOver: true,
            thumbnailPosition: 'bottom',
            showVideo: {},
        };
    }

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]

        return (
            <ImageContainer>
                <ImageGallery
                    autoPlay={this.state.autoPlay}
                    showThumbnails={this.state.showThumbnails}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showNav={this.state.showNav}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    items={images} />
            </ImageContainer>
        )
    }

}
export default FeaturesCarousel;

