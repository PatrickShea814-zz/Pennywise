<<<<<<< HEAD
import PropTypes from 'prop-types'
import React, { Component } from 'react'
=======
import React, { Component } from "react";
>>>>>>> master
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
<<<<<<< HEAD
    Sidebar,
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
        <Grid textAlign='center'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid columns={3} divided>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid>
        </Grid>
    </Sidebar>
)

HorizontalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
    state = {
        animation: 'overlay',
        direction: 'right',
        dimmed: true,
        visible: false,
    }

    handleAnimationChange = animation => () =>
        this.setState(prevState => ({ animation, visible: !prevState.visible }))

    render() {
        const { animation, dimmed, direction, visible } = this.state

        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
                    <Sidebar.Pusher dimmed={dimmed && visible}>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
=======
    Sidebar
} from "semantic-ui-react";

class UserSideNav extends Component {
    state = {
        dimmed: true,
        visible: false
    };

    handleSidebar = animation => () =>
        this.setState(prevState => ({ visible: !prevState.visible }));

    render() {
        const { dimmed, visible } = this.state;

        return (
            <div>
                <Header as="h5">All Direction Animations</Header>
                <Button onClick={this.handleSidebar("overlay")}>Overlay</Button>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        direction="right"
                        icon="labeled"
                        inverted
                        vertical
                        visible={visible}
                        width="thin"
                    >
                        <Menu.Item as="a">
                            <Icon name="home" />
                            Home
            </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="gamepad" />
                            Games
            </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="camera" />
                            Channels
            </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic>
                            <Header as="h3">Application Content</Header>
                            <Image src="/images/wireframe/paragraph.png" />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
};

export default UserSideNav;
>>>>>>> master
