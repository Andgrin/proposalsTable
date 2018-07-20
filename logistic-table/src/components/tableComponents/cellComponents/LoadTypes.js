import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import crearArray from '../../../globalFunctions/ClearArray';

function LoadTypes(props) {
    const lt = props.lt;
    const cleanArr = crearArray(lt);

    if (lt) {
        const str = cleanArr.join(", ");
        return (
            <Typography variant="body1">
                Loading: {str}
            </Typography>
        )
    }

    return false;
}

LoadTypes.propTypes = {
    lt: PropTypes.array.isRequired
};

export default LoadTypes;
