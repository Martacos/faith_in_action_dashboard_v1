import'./navbar.scss'
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import PanoramaFishEyeOutlinedIcon from '@mui/icons-material/PanoramaFishEyeOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...'/>
            <PageviewOutlinedIcon className='icon'/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className='icon'/>
                <div className="language">English</div>
            </div>
            <div className="item">
              <ContrastOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <PanoramaFishEyeOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationImportantOutlinedIcon className='icon'/>
              <div className="counter">3</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
              <div className="counter">5</div>
            </div>
            <div className="item">
              <FormatListBulletedOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <img src="https://faithinactionafrica.org/wp-content/themes/yootheme/cache/3b/faithinaction-1-3b3a7cb0.webp" alt="" className='avatar'/>
            </div>
          </div>
        </div>  
    </div>
  )
}
export default Navbar