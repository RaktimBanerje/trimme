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

const CustomerList = () => {

    const [isLoading, setLoading] = React.useState(false)
    const [customers, setCustomer] = React.useState([])
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        axiosInstance.get("/user/customer")
        .then(response => {
            if(response.status === 200) {
                setCustomer(response.data.users)
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
                                {customers.map((customer, idx) => (
                                   <tr key={idx}>
                                        <td style={{textAlign: "center"}}>{customer.name}</td>
                                        <td style={{textAlign: "center"}}>{customer.nickname}</td>
                                        <td style={{textAlign: "center"}}>{customer.email}</td>
                                        <td style={{textAlign: "center"}}>{customer.phone}</td>
                                        <td style={{textAlign: "center"}}>{customer.address}</td>
                                        <td style={{textAlign: "center"}}>{customer.gender}</td>
                                        <td style={{textAlign: "center"}}><Switch defaultChecked={customer.is_approve} /></td>
                                        <td style={{textAlign: "center"}}><Switch defaultChecked={customer.is_active} /></td>
                                        <td style={{textAlign: "center"}}>{customer.verified ? "YES" : "NO"}</td>
                                        <td style={{textAlign: "center"}}>{new Date(customer.created_at).toLocaleDateString()}</td>
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

export default CustomerList;
