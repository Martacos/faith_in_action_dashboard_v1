import "./widjet.scss"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const Widjet =() =>{
    return( 
        <div className="widjet">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">9089</span>
                <span className="link">see all user</span>
            </div>
            <div className="right">
                <div className="pourcentage positive">
                    <ArrowUpwardOutlinedIcon/>
                    20%
                </div>
                <div className="person">
                    <EmojiPeopleOutlinedIcon className="icon"/>
                </div>
            </div>
        </div>
    )
}
export default Widjet

