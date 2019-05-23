import React from 'react';
import { Button } from "react-bootstrap";

function ViewItem(props) {
    return (
        <Button
            src={props.url}
            bsstyle="primary"
            id="viewItem"
            className="btn"
            onClick={props.rem}
        >
            <span>View Item</span>
        </Button>
    )
}

export default ViewItem;