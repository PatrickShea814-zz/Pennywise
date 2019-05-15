import React, { Component } from "react";
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
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