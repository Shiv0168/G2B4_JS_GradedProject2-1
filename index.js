// Setting default username and pw
const usernameData = "admin";
localStorage.setItem("Username" , usernameData);

const passwordData = "test123";
localStorage.setItem("Password" , passwordData);

// Function to validate the username and password
function check(){
    var storedName = localStorage.getItem('Username');
    var storedPw = localStorage.getItem('Password');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

    if(userName.value == storedName && userPw.value == storedPw){
        window.location.assign("./resumePage.html")
        
    }else{
        alert('Invalid username/password');
        document.getElementById("login-page-container").innerHTML = 
        `<form action = "./index.html">
            <input id="username" type="text" placeholder="User Name">
            <input id="password" type="password" placeholder="Password">
            <input id="login-button" type="button" value="Login" style="font-size: x-large;" onclick="check()">
        </form>`
    }
}

//GET JSON DATA
fetch("./Data.json")
  .then((response) => response.json())
  .then( value => console.log(value))
  .catch((error) => console.log(error.message));





//GET JSON DATA
  const fetchData = async() => {
    try {
        const response = await fetch("./Data.json");
        const data1 = await response.json();
        console.log(data1);
    } catch (error) {
        console.log(error.message)
    }
  };
  fetchData();
