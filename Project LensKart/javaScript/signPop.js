window.addEventListener("load", signup);

window.addEventListener("load", loginUserCheck);
function loginUserCheck() {
  let user = localStorage.getItem("currentUser");
  let currentUser = document.getElementById("current_user");
  if (!user) return;
  else {
    user = JSON.parse(user);
    currentUser.innerHTML = `${user[0].fname} ${user[0].lname} <i class="fas fa-sign-out-alt"></i>`;
    currentUser.parentElement.onclick = function () {
      signout();
    };
  }

  console.log(user, currentUser);
}

function signout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function signup() {
  document.getElementsByClassName(
    "floatl"
  )[0].innerHTML = `<img  src="https://static1.lenskart.com/media/desktop/img/sign-up.png" alt=" banner">`;

  document.getElementsByClassName("parent1")[0].innerHTML = `<div >
                <input class="width100 details"  type="text" placeholder="First Name" name="firstname" required>
            </div>
            <div>
                <input class="width100 details" type="text" placeholder="Last Name" name="Lasttname" required>
            </div>
            <div>
                <input class="width100 details" type="number" placeholder="Mobile" name="Mobile" required>
            </div>
            <div>
                <input class="width100 details" type="email" placeholder="Email Address" name="EmailAddress" required>
            </div>
            <div>
                <input class="width100 details" type="password" placeholder="Password" name="password" required>
            </div>
            <div>
                <input class="refrel" type="text" name="reffrelcode" placeholder="Referal code">(Optional)
            </div>
            <button class="width100 colorg" onclick="signuplocalstorage()">Register</button><br>
            <div class="checkup floatr">
            <input type="checkbox" name="check" >Get updates on Whatsapp <img class="image " src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png">
            </div>
            <br><br>
            
             <p class="p">Or Sign in Using</p><br>
            <div class="fbbtn"><button class = "fb"><img class="image1" src = "https://static.lenskart.com/media/wysiwyg/sign-register/facebook-b_n.jpg">    
                </button>
           </div>
             `;
}
function signin() {
  document.getElementsByClassName(
    "floatl"
  )[0].innerHTML = `<img  src="http://static.lenskart.com/media/wysiwyg/sign-register/sign-in-offer.jpg" alt=" banner">`;
  document.getElementsByClassName("parent")[0].innerHTML = "";
  document.getElementsByClassName(
    "parent1"
  )[0].innerHTML = `<div class="sign_in_form  ">
        <form>
            <input class="width100 signemail" type="email" name="ep"  placeholder = "Mobile/Email">
            <button class="width100 colorg" onclick = "signincheck(event)">Proceed</button>
            <div class="checkup  floatr">
            <input type="checkbox" name="check" >Get updates on Whatsapp <img class="image" src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png">
            </div><br>
             <p class="p">Or Sign in Using</p><br>
            <div class="fbbtn"><button class = "fb"><img class="image1" src = "https://static.lenskart.com/media/wysiwyg/sign-register/facebook-b_n.jpg">
                </button>
           </div>
            </form>
    </div>
`;
}

function signuplocalstorage() {
  console.log("a");
  var data = document.getElementsByClassName("details");
  let error = document.createElement("p");
  error.setAttribute("class", "error");
  error.innerText = "error";
  if (
    !data[0].value ||
    !data[1].value ||
    !data[2].value ||
    !data[3].value ||
    !data[4].value
  ) {
    return;
  }

  var signupdata = {
    firstname: data[0].value,
    lastname: data[1].value,
    mobile: data[2].value,
    email: data[3].value,
    password: data[4].value,
  };

  var localsignupdata = JSON.parse(localStorage.getItem("signup"));

  var falg2 = true;
  if (localsignupdata) {
    for (key in localsignupdata) {
      if (localsignupdata[key].email == signupdata.email) {
        falg2 = false;
        alert("this eamil address is already registered");
      }
    }
    if (falg2) {
      localsignupdata.push(signupdata);

      localStorage.setItem("signup", JSON.stringify(localsignupdata));

      let loginobj = [
        {
          fname: `${data[0].value}`,
          lname: `${data[1].value}`,
        },
      ];
      localStorage.setItem("currentUser", JSON.stringify(loginobj));
      window.location.href = "index.html";
    }
  } else {
    var arr = [];
    arr.push(signupdata);
    localStorage.setItem("signup", JSON.stringify(arr));

    let loginobj = [
      {
        fname: `${data[0].value}`,
        lname: `${data[1].value}`,
      },
    ];
    localStorage.setItem("currentUser", JSON.stringify(loginobj));
    window.location.href = "index.html";
  }
}
function signincheck(e) {
  e.preventDefault();
  var falg = true;
  var data = JSON.parse(localStorage.getItem("signup"));
  var email = document.getElementsByClassName("signemail")[0].value;
  for (i in data) {
    if (data[i].email == email) {
      falg = false;
      let loginobj = [
        {
          fname: `${data[i].firstname}`,
          lname: `${data[i].lastname}`,
        },
      ];
      localStorage.setItem("currentUser", JSON.stringify(loginobj));
      window.location.href = "index.html";
    }
  }
  if (falg) {
    alert("Please enter correct detail");
  }
}

function signPage() {
  let popUp = document.getElementById("signupPopUp");
  let popUpMain = document.getElementById("mainbox");

  popUp.classList.add("pop_up_page");
  setTimeout(function () {
    popUpMain.classList.add("pop_up_page");
  }, 1);
}
function signPagePopOut() {
  let popUpMain = document.getElementById("mainbox");

  let popUp = document.getElementById("signupPopUp");
  popUp.classList.remove("pop_up_page");
  popUpMain.classList.remove("pop_up_page");
}
