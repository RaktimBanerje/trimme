import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthOTP from './auth-forms/AuthOTP';
import AuthWrapper from './AuthWrapper';

// ================================|| OTP ||================================ //

const OneTimePassword = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">OTP Verification</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthOTP />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default OneTimePassword;
