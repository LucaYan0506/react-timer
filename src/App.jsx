import Header from "./Header";
import Footer from "./Footer";
import CustomClock from "./CustomClock";
import Settings from "./Settings";
import Profile from "./Profile";
import { useState } from "react";

function App() {
  const [openSetting,setOpenSetting] = useState(false);
  const [interval,setInterval] = useState(10);
  const [soundOn,setSoundOn] = useState(true);
  const [openProfile,setOpenProfile] = useState(false);


  return (
    <>
      <Header toggleSetting={setOpenSetting} toggleProfile={setOpenProfile}></Header>
      <CustomClock soundOn={soundOn} interval={interval} />
      <Settings soundOn={soundOn} setSoundOn={setSoundOn}  setInterval={setInterval} interval={interval} openSetting={openSetting} toggleSetting={setOpenSetting}></Settings>
      <Profile openProfile={openProfile} toggleProfile={setOpenProfile}></Profile>
      <Footer></Footer>
    </>
  );
}

export default App
