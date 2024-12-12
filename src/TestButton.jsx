
// Function to get CSRF token from cookies
function getCSRFToken() {
    if (document.cookie == ''){
        fetch("http://127.0.0.1:8000/")  
        .then(response => {
           
        });
    }
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("csrftoken="));
    return cookie ? cookie.split("=")[1] : "";
  }
  
  // Function to send POST request
  async function sendPostRequest() {
    const url = "http://127.0.0.1:8000/test"; 
    const data = {
      test: "value", 
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",  // Include cookies for CSRF and authentication
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(),  
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  
function TestButton(){
    function test(){
        sendPostRequest();
    }

    return (<button onClick={() => test()}>
        test
    </button>)
}




export default TestButton