import type { NextPage } from "next";
import classes from "../styles/index.module.css";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import SubComponent1 from "../components/SubComponent1";
import SubComponent2 from "../components/SubComponent2";

type InputType = {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
};

let schema = yup.object({
    FirstName: yup
        .string()
        .required("Please provide a value")
        .min(4, "Please provide more than 4 charector")
        .max(20, "You cant pass more than 20 charectors"),
    LastName: yup
        .string()
        .required("Please provide a value")
        .min(4, "Please provide more than 4 charector")
        .max(20, "You cant pass more than 20 charectors"),
    Email: yup
        .string()
        .required("Please provide a value")
        .matches(
            /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            "You have to provide a valid email address like example@test"
        ),
    Password: yup
        .string()
        .required("Please provide a value")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i,
            "ur password must contain at least one uppercase letter and at least one lowercase letter and have 8-10 charector and include one spacial charectors like ( @-$-!-%-*-?-& )...please try again "
        ),
});

const Errors = ({ errors }: any) => {
    const entries = Object.entries(errors);
    return (
        <div>
            {entries.map((entie: any) => {
                return (
                    <div style={{ margin: "1rem 0" }}>
                        <h3 style={{ margin: "0.5rem", color: "GrayText" }}>
                            {entie[0]}
                        </h3>
                        <p
                            style={{
                                margin: "0.5rem",
                                fontSize: "14px",
                                color: "lightcoral",
                            }}
                        >
                            {entie[1].message}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const Home: NextPage = () => {
    const methods = useForm<InputType>({
        resolver: yupResolver(schema),
    });

    const submiter: SubmitHandler<InputType> = (data) => {
        console.log(data);
        methods.reset();
    };

    return (
        <div className={classes.root}>
            <FormProvider {...methods}>
                <form
                    className={classes.form}
                    onSubmit={methods.handleSubmit(submiter)}
                >
                    <h1 style={{ color: "lightskyblue" }}>
                        Please fill the form
                    </h1>
                    <SubComponent1 />
                    <SubComponent2 />

                    <Button
                        variant="outlined"
                        type="submit"
                        sx={{ marginTop: "0.3rem", height: "2.7rem" }}
                    >
                        submit
                    </Button>
                    {methods.formState.errors && (
                        <Errors errors={methods.formState.errors} />
                    )}
                </form>
            </FormProvider>
            <div
                style={{
                    direction: "rtl",
                    width: "400px",
                    alignSelf: "flex-start",
                    marginTop: "10rem",
                }}
            >
                <h3 style={{ color: "GrayText" }}>
                    فرم با استفاده از material-ui و react-hook-form و yup
                    library ساخته شده لطفا تست کنید ...
                </h3>
            </div>
        </div>
    );
};

export default Home;
