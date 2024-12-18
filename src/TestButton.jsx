
// Function to get CSRF token from cookies
async function getCSRFToken() {
  const response = await fetch('http://127.0.0.1:8000/', {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  // alert(data['data']);
  // document.cookie = data['data'];
  return data['token']; 
}

  
  // Function to send POST request
  async function sendPostRequest() {
    const url = "http://127.0.0.1:8000/test"; 
    const token = await getCSRFToken();
    let formData = new FormData()
    formData.append("test", "value")
    console.log(token);
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
          "X-CSRFToken": token
      },
      body: formData
  })


  }
  

  
function TestButton(){
    async function test(){
        // const csrfToken = await getCSRFToken();
        // alert(csrfToken);
        sendPostRequest();
    }

    return (<button onClick={() => test()}>
        test
    </button>)
}




export default TestButton