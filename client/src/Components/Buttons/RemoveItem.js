import React from 'react';
import { Button } from "react-bootstrap";

function RemoveItem(props) {
    return (
        <Button
            src={props.itemID}
            bsStyle="danger"
            id="removeItem"
            className="btn"
            onClick={props.rem}
        >
            <span>Remove</span>
        </Button>
    )
}

export default RemoveItem;