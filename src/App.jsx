import Header from "./Header";
import Footer from "./Footer";
import CustomClock from "./CustomClock";
import Settings from "./Settings";
import { useState } from "react";

function App() {
  const [openSetting,setOpenSetting] = useState(false);
  const [interval,setInterval] = useState(10);
  const [soundOn,setSoundOn] = useState(true);

  return (
    <>
      <Header toggleSetting={setOpenSetting} ></Header>
      <CustomClock soundOn={soundOn} interval={interval} />
      <Settings soundOn={soundOn} setSoundOn={setSoundOn}  setInterval={setInterval} interval={interval} openSetting={openSetting} toggleSetting={setOpenSetting}></Settings>
      <Footer></Footer>
    </>
  );
}

export default App
