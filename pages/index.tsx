import type { NextPage } from 'next'
import Dashboard from '../components/dashboard/Dashboard'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { DashboardContent } from '../components/index/dashboardContent';
import { ListItem, DashboardProps } from '../components/dashboard/utils';



const Home: NextPage = () => {

  let mainListItems:ListItem[] = [
    {
      name: "Dashboard",
      icon: <DashboardIcon/>,
      component: <DashboardContent/>
    },
    {
      name: "Inventory Manager",
      icon: <AssignmentIcon/>,
      component: null
    },
    {
      name: "Equipment Maintenance",
      icon: <AssignmentIcon/>,
      component: null
    },
    {
      name: "Jobs",
      icon: <AssignmentIcon/>,
      component: null
    }
  ]

  let secondaryListItems:ListItem[] = [
  ]

  let dashboardProps:DashboardProps = {
    title: "Home",
    mainListItems,
    secondaryTitle: "",
    secondaryListItems
  }

  return (<Dashboard {...dashboardProps}></Dashboard>)
}

export default Home
