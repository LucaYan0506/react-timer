import './header.css'
import profileImg from './assets/profile.png'

function Header(props){
    function togglePage(page){
        if (page == 'setting'){
            props.toggleSetting(s => !s)
            props.toggleProfile(s => false)
        }else if (page == 'profile'){
            props.toggleProfile(s => !s)
            props.toggleSetting(s => false)
        }
    }
    return (
        <header>
            <button onClick={() => togglePage("setting")}>Settings</button>
            <img id="profile" src={profileImg} alt="profile" onClick={() => togglePage("profile")}/>
        </header>
    );
}

export default Header