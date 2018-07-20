import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Mass(props) {
    const {m1, m2} = props;
    if ( m1 && m2 ) {
        return(
            <Typography variant="body1" >
                {m1} - {m2}t
            </Typography>
        )
    } else {
        if (m1) {
            return(
                <Typography variant="body1" >
                    {m1}t
                </Typography>
            )
        }
        if (m2) {
            return(
                <Typography variant="body1" >
                    {m2}t
                </Typography>
            )
        }
    }
}

Mass.propTypes = {
    m1: PropTypes.number,
    m2: PropTypes.number
};

export default Mass;
