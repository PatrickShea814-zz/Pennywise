import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
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