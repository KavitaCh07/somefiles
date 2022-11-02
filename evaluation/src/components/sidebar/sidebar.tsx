import './sidebar.css';
import burger_menu from '../../assets/icons/burger_menu.png';
import home_icn from '../../assets/icons/home_icn.png';

const Sidebar = () => {
    return <div>
        <div className="sidebar">
                    <div className="burger-logo">
                        <img src={burger_menu} alt="icon" />
                    </div>
                    <div className="home-icon">
                        <img src={home_icn} alt="icon" />
                    </div>
                    <div className="round"></div>
                </div>
    </div>
}

export default Sidebar;