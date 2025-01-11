import { useRef, useEffect, useState } from "react";
import style from "./profile.module.css"
import { username, isAuthenticated, login, logout } from './auth';
import { updateToken } from "./globalVar";

function Profile(props){
    const profileRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const errorMessageRef = useRef(null)
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        async function checkAuthentication() {
            const authStatus = await isAuthenticated();
            setAuthenticated(authStatus);
        }
        updateToken()
        checkAuthentication();
    }, []);

    function exit(e){
        if (e.target == profileRef.current)
            props.toggleProfile(s => !s)
    }

    if (props.openProfile){
      if (authenticated)
          return (
            <div ref={profileRef} onClick={(e) => exit(e)} className={style.profile} >
            <div className={style.container}>
                <h1>Profile detail</h1>
                <p>Username: {username}</p>
                <button onClick={() => logout()}>Log out</button>                  
            </div>
        </div>)
        else
          return (
              <div ref={profileRef} onClick={(e) => exit(e)} className={style.profile} >
                  <div className={style.container}>
                      <h1>Login</h1>
                      <form onSubmit={(e) => {e.preventDefault(); login(usernameRef.current.value, passwordRef.current.value, errorMessageRef)}}>
                          <div className={style['form-group']}>
                              <label htmlFor="username">Username</label>
                              <input ref={usernameRef} type="username" className={style['form-control']} id="username" placeholder="Enter username" required/>
                              <small id="emailHelp" className={style.description}>We'll never share your information with anyone else.</small>
                          </div>
                          <div className={style['form-group']}>
                              <label htmlFor="password">Password</label>
                              <input ref={passwordRef}  type="password" className={style['form-control']} id="password" placeholder="Password" autoComplete="new-password" required/>
                            <p className={style.description} style={{color: '#cc0000'}} ref={errorMessageRef}></p>
                          </div>
                          <button type="submit" className="btn btn-primary">Log in</button>
                          <button style={{float:"right"}} className="btn btn-primary">register</button>
                      </form>
                  </div>
              </div>)
    }else
        return (<></>)
}



export default Profile