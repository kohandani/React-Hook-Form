import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import classes from "../styles/index.module.css";

const SubComponent1 = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <div>
            <Controller
                name="FirstName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        className={classes.input}
                        label="First Name"
                        variant="outlined"
                        error={!!errors.FirstName}
                        {...field}
                    />
                )}
            />
            <Controller
                name="LastName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        className={classes.input}
                        variant="outlined"
                        label="LastName"
                        error={!!errors.LastName}
                        {...field}
                    />
                )}
            />
        </div>
    );
};

export default SubComponent1;
