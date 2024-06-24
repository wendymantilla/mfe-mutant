import React from "react";

const Alert = (props) => {

    let className = "alert mb-3 "
    if (props.alert.type === "error") {
        className = className.concat("alert-danger")
    } else if (props.alert.type === "success") {
        className = className.concat("alert-success")
    } else if (props.alert.type === "warning") {
        className = className.concat("alert-warning")
    } else {
        className = className.concat("alert-primary")
    }

    return (
        <div style={{display: props.alert.show ? 'block' : 'none'}} className={className} role="alert">
            {props.alert.message}
        </div>
    )

}
export default Alert;