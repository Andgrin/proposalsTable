import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Premisions(props) {
    const pm = props.pm;

    if ( pm.adr || pm.cmr || pm.t1 || pm.tir || pm.medBook ) {
        let arr = [];
        if (pm.adr) arr.push('ADR ' + pm.adr);
        if (pm.cmr) arr.push("CMR");
        if (pm.t1) arr.push("T1");
        if (pm.tir) arr.push("TIR");
        if (pm.medBook) arr.push("MedBook");

        const str = arr.join(", ")

        return (
            <Typography variant="body1">
                Premisions: {str}
            </Typography>
        )
    }
    return false;
}

Premisions.propTypes = {
    pm: PropTypes.object.isRequired
};

export default Premisions;
