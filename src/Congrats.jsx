import React from "react";

/**
 * Stateless Functional Component For Congratulations message.
 * @function
 * @param {object} props - Congrats props.
 * @returns {JSX.Element} - Rendered is Success state is true and null if false
 */

export default props => {
    if (props.success) {
        return (
            <div data-test="congrats-component">
                <span data-test="congrats-message">
                    Congratulations! That's the correct word guessed!
                </span>
            </div>
        );
    } else {
        return <div data-test="congrats-component" />;
    }
};
