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
                            Savings History
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="home" />
                            My Accounts
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="gamepad" />
                            About Us
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="camera" />
                            Contact Us
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="camera" />
                            Sign Out
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
