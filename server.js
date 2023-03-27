function register(event) {
  //Prevent Default Behaviour of form
  event.preventDefault();
  //Get Data From User using form
  var userName = document.getElementById("name").value;
  var userNumber = document.getElementById("number").value;
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var conformPassword = document.getElementById("conform-password").value;
  // temp variable to create object of users data
  var userData = {
    name: userName,
    number: userNumber,
    email: userEmail,
    password: userPassword,
  };
  //Getting data From Ls
  var dataFromLs = JSON.parse(localStorage.getItem("userData")) || [];

  //Verification for exsiting email
  var flang = false;
  for (var i = 0; i < dataFromLs.length; i++) {
    if (dataFromLs[i].email === userEmail) {
      flang = true;
    }
  }

  if (flang) {
    alert("Email Already existed, Please enter another email");
    document.getElementById("email").value = "";
  } else if (userPassword.length < 8) {
    alert("password Must be greater than 8 characters");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else if (userPassword !== conformPassword) {
    alert("Password does not match please enter similiar conform password");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else {
    //push userdata object to localstorage temp variable
    dataFromLs.push(userData);
    //update local storage
    localStorage.setItem("userData", JSON.stringify(dataFromLs));
    //clear form
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
    //redirect to another page
    window.location.href = "/login.html";
    //registration alert
    alert("registration done");
  }

  //   console.log(dataFromLs,"dataFromLs");
}

function login(event) {
  event.preventDefault();

  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var dataFromLs = JSON.parse(localStorage.getItem("userData"));

  var flag = false;

  for (var i = 0; i < dataFromLs.length; i++) {
    if (
      (dataFromLs[i].email === userEmail) &&
      dataFromLs[i].password === userPassword
    ) {
      flag = true;
    }
  }

  if (flag) {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    var user ={};
    user["currentUserEmail"] =userEmail;
    localStorage.setItem("currentUser",JSON.stringify(user));

    window.location.href = "/homepage.html";
    alert("Loged in Sucessful");
  } else {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Eamil password not matched ");
  }
}

function restEmail(event) {
  event.preventDefault();
  alert("Email verified");

  var dataFromLs = JSON.parse(localStorage.getItem("userData"));
  var emailFromUser = document.getElementById("email").value;

  var flag = false;

  for (var i = 0; i < dataFromLs.length; i++) {
    if (dataFromLs[i].email === emailFromUser) {
      flag = true;
    }
  }

  if (flag) {
    document.getElementById("email").value = "";
    window.location.href = "/hompage.html";
    alert("Email verified");
  } else {
    document.getElementById("email").value = "";
    alert("Please Enter Register email");
  }
}

var gettingEmail;
function forgotPassword(event) {
  event.preventDefault();

  var userEmail = document.getElementById("email").value;
  var dataFromLs = JSON.parse(localStorage.getItem("userData"));

  gettingEmail = userEmail;

  var flag = false;

  for (var i = 0; i < dataFromLs.length; i++) {
    if (dataFromLs[i].email === userEmail) {
      flag = true;
    }
  }

  
  if (flag) {
    var divFromHtml =document.getElementById("change");
    var newCode =`<input
    type="password"
    id="password"
    class="input-fields"
    placeholder="Enter New Password"
    required
  />
  <button class="input-fields submit-btn" onclick="resetPass()">Reset Password</button>`;
  divFromHtml.innerHTML=newCode;
    alert("Now Set New Password");
  } else {
    alert("Please Enter Register Email");
    document.getElementById("email").value = "";
  }
}

function resetPass() {

  var dataFromLs = JSON.parse(localStorage.getItem("userData"));
  var userPassword =document.getElementById("password").value;

  for(var i=0; i<dataFromLs.length; i++){
    if(dataFromLs[i].email === gettingEmail){
      dataFromLs[i].password = userPassword;
    }
  }

  localStorage.setItem("userData",JSON.stringify(dataFromLs));
  gettingEmail="";
  window.location.href="/login.html";
  document.getElementById("password").value="";
}

function addProduct(event){
  alert("Working");

  var productName = document.getElementById("produtName").value;
  var productImage =document.getElementById("productImage").value;
  var productPrice=document.getElementById("productPrice").value;

  var dataFromLs = JSON.parse(localStorage.getItem("product")) || [];
  var addProduct ={name:productName, image:productImage, price:productPrice};

  dataFromLs.push(addProduct);
  document.getElementById("produtName").value ="";
  document.getElementById("productImage").value ="";
  document.getElementById("productPrice").value ="";
  localStorage.setItem("product",JSON.stringify(dataFromLs));
}

