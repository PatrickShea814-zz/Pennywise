import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider'
import HomeCard from './WelcomeCard';
import FeatureCard from './FeatureCards';
import FeaturesInfo from './FeaturesInfo';

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

    render() {
        const { activeIndex, images } = this.state;
        const active = num => {

            if ( num === activeIndex ){
                return true
            }

            return false
        }

        setTimeout(()=>{
            if(activeIndex === 2){
                this.onSelect(0);
            } else if (activeIndex === 0) {
                this.onSelect(1);
            } else {
                this.onSelect(2);
            }
        }, 8000)
        
        return (
            <div>
                <HomeCard />
                <CardGroup className="CardWrap">
                    {
                        FeaturesInfo.map((item, index) => {
                            return <FeatureCard key={index} isActive={active(index)} onClick={() => this.onSelect(index)} icon={require(`../../Assets/FeaturesImages/${item.icon}`)} title={item.title} description={item.description} />
                        })
                    }
                </CardGroup>
                <BackgroundSlider
                    images={[images[activeIndex]]}
                    duration={8}
                    transition={0}
                />
            </div>
        )
    }
}

export default HomeLanding;

