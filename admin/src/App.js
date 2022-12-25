// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinimalLayout from 'layout/MinimalLayout/index';
import MainLayout from 'layout/MainLayout/index';
import Login from 'pages/authentication/Login';
import OneTimePassword from 'pages/authentication/OneTimePassword';
import DashboardDefault from 'pages/dashboard/index';
import { CircularProgress } from '@mui/material';
import { axiosInstance } from './utils/index';
import BarbarList from 'pages/barbar/index';
import CustomerList from 'pages/customer/index';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
export const StoreContext = React.createContext(null) 

const App = () => {
    const [appState, setAppState] = React.useState({
        loggedIn: false,
        token: null,
        user: null,
    })

    const [isLoading, setLoading] = React.useState(false)

    React.useState(() => {
        setLoading(true)

        const token = localStorage.getItem("token")
        if(token) {
            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }
        
        axiosInstance.get('/user/is-authenticate')
        .then(response => {
            if(response.status == 200) {
                setAppState({...appState, loggedIn: true, token, user: {}})
            }    
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
        })
    }, [])

    return (
        <StoreContext.Provider value={{appState, setAppState}}>
            <ThemeCustomization>
                {isLoading ? (
                    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CircularProgress />
                    </div>
                ) : (
                    <ScrollTop>
                        <Routes>
                            {
                                appState.loggedIn ? (
                                    <Route path="/" element={<MainLayout />}>
                                        <Route path="/" element={<DashboardDefault />} />
                                        <Route path="/barbars" element={<BarbarList />} />
                                        <Route path="/customers" element={<CustomerList />} />
                                    </Route>

                                ) : (
                                    <Route path="/" element={<MinimalLayout />}>
                                        <Route path="/" element={<Login />} />
                                        <Route path="verify" element={<OneTimePassword />} />
                                    </Route>
                                )
                            }

                        </Routes>
                    </ScrollTop>
                )}

            </ThemeCustomization>
        </StoreContext.Provider>
    );
};

export default App;
