import {Box, Button, Typography} from '@mui/material';
import React from 'react';
import useStyles from "../../styles/Style";

const MyTaskBar = () => {

    const classes: any = useStyles()

    return (
        <Box className={ classes.ToolBarRight }>
            <Typography variant="body1" component="h3">My Jobs</Typography>

            <Box sx={{ '& .MuiButton-root': { margin: 0.5 } }}>
                <Button variant="text">Delete All</Button>
                <Button variant="text">Colab</Button>
                <Button variant="text">Friend</Button>
            </Box>
        </Box>
    );
};

export default MyTaskBar;