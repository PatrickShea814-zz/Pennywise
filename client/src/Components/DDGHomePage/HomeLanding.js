import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider'
import HomeCard from './WelcomeCard';
import FeatureCard from '../HomePage/Welcome/FeatureCards';
import FeaturesInfo from '../HomePage/Welcome/FeaturesInfo';

import image1 from '../../Assets/TestImages/image1.jpg';
import image2 from '../../Assets/TestImages/image2.jpg';
import image3 from '../../Assets/TestImages/image3.jpg';
import MockExtension from '../../Assets/TestImages/mockextension.jpg';


class HomeLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                MockExtension,
                image1,
                image2,
                image3
            ],
            activeIndex: 0
        };
    }

    onSelect = (active) => {
        this.setState({ activeIndex: active })
    };

    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };

    goToSlide = i => {
        this.slider.goToSlide(i);
    };
    render() {
        return (
            <div>
                <HomeCard />
                <CardGroup className="CardWrap">
                    {
                        FeaturesInfo.map((item, index) => {
                            return <FeatureCard key={index} isActive={this.state.activeIndex === index} goToSlide={() => this.goToSlide(index)} icon={require(`../../Assets/FeaturesImages/${item.icon}`)} title={item.title} description={item.description} />
                        })
                    }
                </CardGroup>
                <BackgroundSlider
                    images={this.state.images}
                    duration={8}
                    transition={2}
                />
            </div>
        )
    }
}

export default HomeLanding;

