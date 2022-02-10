import { TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import classes from "../styles/index.module.css";

const SubComponent2: FC = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <div>
            <Controller
                name="Email"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        className={classes.input}
                        variant="outlined"
                        label="Email"
                        error={!!errors.Email}
                        {...field}
                    />
                )}
            />

            <Controller
                name="Password"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        className={classes.input}
                        variant="outlined"
                        label="Password"
                        type="password"
                        error={!!errors.Password}
                        {...field}
                    />
                )}
            />
        </div>
    );
};

export default SubComponent2;
