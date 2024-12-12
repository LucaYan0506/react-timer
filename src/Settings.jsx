import { useRef, useState } from "react";
import styles from "./settings.module.css"
import TestButton from "./TestButton";

function Settings(props){
    const setting = useRef(null)

    function exitSetting(e){
        if (setting.current && e.target == setting.current)
            props.toggleSetting(s => !s)
    }

    function changeInterval(e){
        props.setInterval(s => s = e.target.value);
    }

    function changeSound(){
        props.setSoundOn(s => !s);
    }


    if (props.openSetting)
        return (<div ref={setting} onClick={(e) => exitSetting(e)} className={styles.settings}>
                <div className={styles.container}>
                    <h1>Settings</h1>
                    <h3 className={styles.sound}>Sound</h3> 
                    <p className={styles.description}>Enable/disable a reminder (beep sound) every ${props.interval} seconds</p>
                    <label className={styles.switch}>
                        <input type="checkbox" onChange={changeSound} checked={props.soundOn}/>
                        <span className={styles.slider}></span>
                    </label>
                    <h3>Set Reminder Frequency</h3>
                        <p>Remind every
                             <input style={{width:"40px",margin:"0 2px"}} type="number" name="" id="" defaultValue={props.interval} onChange={(e) => changeInterval(e)}/> 
                        second</p>
                </div>
                <TestButton></TestButton>
            </div>)
    else
        return (<></>)
}



export default Settings