import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Volume(props) {
    const {v1, v2} = props;
    if ( v1 && v2 ) {
        return(
            <Typography variant="body1" >
                {v1} - {v2}m3
            </Typography>
        )
    } else {
        if (v1) {
            return(
                <Typography variant="body1" >
                    {v1}m3
                </Typography>
            )
        }
        if (v2) {
            return(
                <Typography variant="body1" >
                    {v2}m3
                </Typography>
            )
        }
    }
}

Volume.propTypes = {
    v1: PropTypes.number,
    v2: PropTypes.number
};

export default Volume;