import React from "react";
import {
    Label,
    TextArea,
} from "@blueprintjs/core";
import styles from "./styles";

const BigText = ({label, id, value, changeHandler}) =>
    <div>
        <Label style={styles.label}>{label}</Label>
        <TextArea
            id={id} 
            value={value}
            onChange={changeHandler}
            style={styles.input}
        />
    </div>


export default BigText;