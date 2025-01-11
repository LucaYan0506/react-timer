function UpdateSetting() {
  async function test() {
    if (token == null){
      console.log('test');
      getCSRFToken();
    }
    // login()
  }

  return (<button style={{ marginTop: "10px" }} onClick={() => test()}>
    Update Setting
  </button>)
}




export default UpdateSetting