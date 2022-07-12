import React from "react";
import PropType from "prop-types";

function Button(props) { 
    const { children, onClick } = props;

    return (
        <button onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    onClick: PropType.func.isRequired
}

export default Button;