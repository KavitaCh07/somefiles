import './dashboard.css';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';
import HomeMainScreen from '../../components/homeMainScreen/homeMainScreen';

function Dashboard () {
    return <div className='dashboard'>
        <Sidebar />
        <Header />
        <HomeMainScreen />

    </div>
}

export default Dashboard;