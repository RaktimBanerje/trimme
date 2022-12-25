import React, { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Switch
} from '@mui/material';


// project import
import MainCard from 'components/MainCard';
import { axiosInstance } from 'utils/index';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const BarbarList = () => {

    const [isLoading, setLoading] = React.useState(false)
    const [barbars, setBarbars] = React.useState([])
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        axiosInstance.get("/user/barbar")
        .then(response => {
            if(response.status === 200) {
                setBarbars(response.data.users)
                console.log(response.data)
            }
            else {
                setError("Something went wrong!")
            }
        })
        .catch(err => {
            console.log(err)
            setError("Server Error")
        })
        .finally(() => {
            setLoading(false)
        }) 

    }, [])

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} md={12} lg={12}>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <table style={{width: "100%", padding: "10px"}}>
                            <thead style={{backgroundColor: "lightgrey"}}>
                                <tr>
                                    <th>NAME</th>
                                    <th>NICKNAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>ADDRESS</th>
                                    <th>GENDER</th>
                                    <th>APPROVE</th>
                                    <th>ACTIVE</th>
                                    <th>VERIFIED</th>
                                    <th>SINCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {barbars.map((barbar, idx) => (
                                   <tr key={idx}>
                                        <td style={{textAlign: "center"}}>{barbar.name}</td>
                                        <td style={{textAlign: "center"}}>{barbar.nickname}</td>
                                        <td style={{textAlign: "center"}}>{barbar.email}</td>
                                        <td style={{textAlign: "center"}}>{barbar.phone}</td>
                                        <td style={{textAlign: "center"}}>{barbar.address}</td>
                                        <td style={{textAlign: "center"}}>{barbar.gender}</td>
                                        <td style={{textAlign: "center"}}><Switch defaultChecked={barbar.is_approve} /></td>
                                        <td style={{textAlign: "center"}}><Switch defaultChecked={barbar.is_active} /></td>
                                        <td style={{textAlign: "center"}}>{barbar.verified ? "YES" : "NO"}</td>
                                        <td style={{textAlign: "center"}}>{new Date(barbar.created_at).toLocaleDateString()}</td>
                                   </tr> 
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </MainCard>
            </Grid>

        </Grid>
    );
};

export default BarbarList;
