import React from 'react'
import BarbarDrawer from '../navigators/drawer/BarbarDrawer'
import CustomerDrawer from '../navigators/drawer/CustomerDrawer'
import { StoreContext } from '../App'

const MainScreen = () => {

  const {state, setState} = React.useContext(StoreContext)

  return (
    <>
      {state.user!=null && state.user.role == "BARBAR" && <BarbarDrawer />}
      {state.user!=null && state.user.role == "CUSTOMER" && <CustomerDrawer />}
    </>
  )
}

export default MainScreen