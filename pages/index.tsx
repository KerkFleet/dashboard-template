import type { NextPage } from 'next'
import Dashboard from '../components/dashboard/Dashboard'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ListItem, DashboardProps } from '../components/dashboard/utils';



const Home: NextPage = () => {

  let mainListItems:ListItem[] = [{
    name: "Dashboard",
    icon: <DashboardIcon/>
  }]

  let secondaryListItems:ListItem[] = [{
    name: "Reports",
    icon: <AssignmentIcon/>
  }]

  let dashboardProps:DashboardProps = {
    title: "MHT Inventory Manager",
    mainListItems,
    secondaryListItems
  }

  return (<Dashboard {...dashboardProps}></Dashboard>)
}

export default Home
