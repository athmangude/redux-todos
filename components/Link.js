import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
            onClick = {event => {
                event.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: propTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;
