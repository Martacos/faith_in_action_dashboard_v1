import './sidebar.scss'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationAddRoundedIcon from '@mui/icons-material/NotificationAddRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">Abiel</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardCustomizeIcon className='icons'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <GroupAddSharpIcon className='icons'/>
                    <span>Users</span>
                </li>
                <li>
                    <ProductionQuantityLimitsRoundedIcon className='icons'/>
                    <span>Products</span>
                </li>
                <li>
                    <GradingRoundedIcon className='icons'/>    
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingRoundedIcon className='icons'/>
                    <span>Delivery</span>
                </li>
                <li>
                    <QueryStatsRoundedIcon className='icons'/>
                    <span>stat</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <NotificationAddRoundedIcon className='icons'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <LocalHospitalRoundedIcon className='icons'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyRoundedIcon className='icons'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsRoundedIcon className='icons'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <PersonAddRoundedIcon className='icons'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutRoundedIcon className='icons'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='botom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
export default Sidebar