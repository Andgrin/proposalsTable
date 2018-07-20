import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Sizes(props) {
    const {l, w, h} = props;
    return (
        <div>
            { (l) ? <Typography variant="body2" >l: {l}, </Typography> : null }
            { (w) ? <Typography variant="body2" >w: {w},</Typography> : null }
            { (h) ? <Typography variant="body2" >h: {h}</Typography> : null }
        </div>
    )
}

Sizes.propTypes = {
    l: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number
};

export default Sizes;

