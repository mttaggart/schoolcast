import React from "react";
import {
    Label,
} from "@blueprintjs/core";
import styles from "./styles";

const TextInput = ({
    label, 
    id, 
    value, 
    type, 
    placeholder, 
    changeHandler
}) =>
    <div>
        <Label style={styles.label}>{label}</Label>
        <input 
            id={id} 
            className="pt-input" 
            type={type ? type : "text"}
            value={value}
            onChange={changeHandler}
            style={styles.input}
        />
    </div>


export default TextInput;