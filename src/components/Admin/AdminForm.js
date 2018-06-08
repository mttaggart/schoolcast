import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Colors } from "@blueprintjs/core"

const formStyles = StyleSheet.create({
    form: {
        padding: "10px"
    },
    heading: {
        color: Colors.WHITE
    }
});

const AdminForm = ({title, onSubmit, children}) => 
    <form onSubmit={onSubmit} className={css(formStyles.form)}>
        <h4 className={css(formStyles.heading)}>{title}</h4>
        {children}
    </form>


export default AdminForm;