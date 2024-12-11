import './header.css'

function Header(props){

    return (
        <header>
            <button onClick={() => props.toggleSetting(s => !s)}>Settings</button>
        </header>
    );
}

export default Header