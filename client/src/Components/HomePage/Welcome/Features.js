import React from "react";
import { CardGroup, Card } from 'react-bootstrap';
import MagicLamp from '../../../Assets/FeaturesImages/magiclamp.png';
import Present from '../../../Assets/FeaturesImages/present.png';
import PiggyBank from '../../../Assets/FeaturesImages/piggybank.png';

class Features extends React.PureComponent {
    render() {
        return (
            <CardGroup>
                <Card className="FeatureCards">
                    <Card.Img variant="top" className="FeatureImg" src={MagicLamp} />
                    <Card.Body>
                        <Card.Title>
                            No Commitments.
                        </Card.Title>
                        <Card.Text>
                            Window-shop now, buy later.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="FeatureCards">
                    <Card.Img variant="top" className="FeatureImg" src={PiggyBank} />
                    <Card.Body>
                        <Card.Title>
                            Avoid impulse purchases.
                        </Card.Title>
                        <Card.Text>
                            Effortlessly save your pocket change for future purchases.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="FeatureCards">
                    <Card.Img variant="top" className="FeatureImg" src={Present} />
                    <Card.Body>
                        <Card.Title>
                            Treat yourself!
                        </Card.Title>
                        <Card.Text>
                            Get notified when you have saved enough for any item on your wish list.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}

export default Features;