import React from "react";
import { CardGroup, Card } from 'react-bootstrap';
import MagicLamp from '../../../Assets/FeaturesImages/magiclamp.png';
import Present from '../../../Assets/FeaturesImages/present.png';
import PiggyBank from '../../../Assets/FeaturesImages/piggybank.png';

class Features extends React.PureComponent {
    render() {
        return (
            <CardGroup>
                <Card className="FeatureCards" onClick={this.props.goToSlide} key={0}>
                    <Card.Img variant="top" className="FeatureImg" src={MagicLamp} />
                    <Card.Body>
                        <Card.Title>
                            No Commitments.
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="FeatureCards" onClick={this.props.goToSlide} key={1}>
                    <Card.Img variant="top" className="FeatureImg" src={PiggyBank} />
                    <Card.Body>
                        <Card.Title>
                            Avoid impulse purchases.
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="FeatureCards" onClick={this.props.goToSlide} key={2}>
                    <Card.Img variant="top" className="FeatureImg" src={Present} />
                    <Card.Body>
                        <Card.Title>
                            Treat yourself!
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}

export default Features;