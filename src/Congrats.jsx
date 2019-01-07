import React from "react";
import PropTypes from "prop-types";

/**
 * Stateless Functional Component For Congratulations message.
 * @function
 * @param {object} props - Congrats props.
 * @returns {JSX.Element} - Rendered is Success state is true and null if false
 */

const Congrats = props => {
    if (props.success) {
        return (
            <div data-test="congrats-component">
                <span
                    data-test="congrats-message"
                    className="alert alert-success"
                >
                    Congratulations! That's the correct word guessed!
                </span>
            </div>
        );
    } else {
        return <div data-test="congrats-component" />;
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
