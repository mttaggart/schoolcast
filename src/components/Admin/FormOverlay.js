import React from "react";
import { Overlay, Button, Intent } from "@blueprintjs/core";
import { StyleSheet, css } from "aphrodite";

const overlayStyle = StyleSheet.create({
    overlayDiv: {
        background: "black",
        opacity: 1,
        color: "white",
        width: "100%",
    }
})

const FormOverlay = ({history,children}) =>
    <Overlay isOpen={true}>
        <div className={css(overlayStyle.overlayDiv)}>
            <Button 
                onClick={() => history.goBack()}
                intent={Intent.PRIMARY}
                icon="arrow-left"
            >
                Back
            </Button>
            {children}
        </div>
    </Overlay>


export default FormOverlay;

