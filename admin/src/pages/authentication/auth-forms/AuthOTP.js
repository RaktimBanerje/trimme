import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { axiosInstance } from '../../../utils/index';
import { StoreContext } from '../../../App';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Alert
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthOTP = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(false);
    const {appState, setAppState} = React.useContext(StoreContext)


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: state?.email,
                    otp: ''
                    // password: '123456',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    otp: Yup.string().max(4, "OTP should not be greater than 4 charecters").required("OTP is required")
                    // password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        axiosInstance.post("/user/verify", values)
                        .then(response => {
                            setStatus({ success: true });
                            setAppState({
                                ...appState, 
                                loggedIn: true, 
                                token: response.token, 
                                user: response.user
                            })
                            localStorage.setItem("token", response.data.token)
                            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
                            navigate("/")
                        })
                        .catch(error => {
                            console.log(error);
                            setStatus({ success: false });
                            setErrors({ hasError:true, message: error.message });
                        })
                        setSubmitting(false);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ hasError:true, message: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({status, errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                {errors.hasError && <Alert severity="error">{errors.message}</Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email">Email address</InputLabel>
                                    <OutlinedInput
                                        id="email"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        readOnly
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="otp">OTP</InputLabel>
                                    <OutlinedInput
                                        id="otp"
                                        type="number"
                                        value={values.otp}
                                        name="otp"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter your OTP"
                                        fullWidth
                                        error={Boolean(touched.otp && errors.otp)}
                                    />
                                    {touched.otp && errors.otp && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.otp}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthOTP;
