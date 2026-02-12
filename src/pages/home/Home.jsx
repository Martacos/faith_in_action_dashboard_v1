import './home.scss';
import Sidebar from'../../components/sidebar/Sidebar'
import Navbar from'../../components/navbar/Navbar'
import Widjet from '../../components/widjet/Widjet';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';   

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widjets">
                   <Widjet type="user" />
                   <Widjet type="order" />
                   <Widjet type="earning" />
                   <Widjet type="balance" />
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    );
}
export default Home;