import React from "react";
import {
    Label
} from "@blueprintjs/core";
import styles from "./styles";

const Select = ({label, id, value, changeHandler, options}) =>
    <div>
        <Label style={styles.label}>{label}</Label>
        <div className="pt-select" style={styles.input}>
            <select id={id} value={value} onChange={changeHandler}>
                {
                    options.map( (option, idx) => 
                        <option key={idx} value={option.id}>
                            {option.name}
                        </option>
                    )
                }
            </select>
        </div>
    </div>


export default Select;