import './header.css'
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png'

const Header = () => {
    return <div className='header'>
        <div className='pass-logo'>
            <img src={pass_logo} alt="" />
        </div>
        <div className='header-left-icon'>
            <div className=''>
            <img src={sync} alt="" />
            </div>

            <div>
            <img src={profile} alt="" />
            </div>

        </div>
    </div>
}

export default Header;