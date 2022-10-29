import React from 'react';
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import AddTask from "./AddTask";

const AddTaskButton = ({ index }: any) => {

    return (
        <IconButton size="small"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={ AddTask(index) }>

            <AddCircleOutlineTwoToneIcon />
        </IconButton>
    )
};

export default AddTaskButton;