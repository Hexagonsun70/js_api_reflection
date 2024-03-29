const URL = 'https://picsum.photos/300/200';
let IMG = document.getElementById('img');
let inputVal = document.getElementById("email-input").value;

// users created before usersRetrieved is assigned to users, so that
// emailCheckArr is populated by the locally stored emails.
let users = [];
// This for loop populates the array users with numerically indexed objects.
for (var i=0 ; i<5 ; i++) {
    users[i] = {
      /*white space used incase somebodies email contains the word email
      followed by a number.*/
        email: "email " + i,
        urlCount: 0,
        url0: "url" +0,
    };
};

console.log(users);

const usersRetrieved = JSON.parse(localStorage.getItem("userStore"));
Object.assign(users, usersRetrieved);

window.onload = function() {
  Object.assign(users, usersRetrieved);
  function profileCheck(userNumber) {
    document.getElementById("email-id-" + userNumber).innerHTML = users[userNumber].email;
    document.getElementById("email-link-" +userNumber).innerHTML = "<img src='"+ users[userNumber].url0 +"' />";
    $('#delete-' + userNumber).css('display', 'block');
  }

  for (var i=0 ; i<5 ; i++){
    if (! (usersRetrieved[i].url0 === "url0")){
      profileCheck(i);
    }
  }
}

let emailCheckArr = [];
/*
This for loop populates arrays that function as an index for each of the users
objects
*/
for (var i=0; i < 5; i++) {
    emailCheckArr.push(users[i].email);
}

const axiosImgGet = function() {
  axios.get(URL)
.then((response) => {
  let picID = response.headers['picsum-id'];
  let picURL = `https://picsum.photos/id/${picID}/300/200`;
  IMG.src = picURL;
})
};

//
console.log(axiosImgGet());

document.getElementById('random-btn').onclick = function(){
  axiosImgGet()
};

document.getElementById('save-btn').onclick = function(){
  if(document.getElementById("email-input").classList.contains("valid")){
    let inputEmail = document.getElementById("email-input").value;
    let emailIndex = emailCheckArr.indexOf(inputEmail);
    // let urlCheck =
    /*
    function initialises user object based off of whether they are position
    0 - 4. Takes the input email, assigns it to the object, takes the img url
    and assigns it to the first url slot and splices the email into the index
    array, so that it can be used as a short hand to track and edit the object.
    saves the object to local storage so that it can be accessed on load and
    across different pages.
    */
    function saveEmail(userNumber) {
      users[userNumber].email = inputEmail;
      users[userNumber].url0 = IMG.src;
      // Creates an empty url ahead of the first url.
      users[userNumber]["url1"] = "url1";
      emailCheckArr.splice(userNumber,1, users[userNumber].email);
      localStorage.setItem("userStore", JSON.stringify(users));
      console.log(emailCheckArr);
      console.log(users);
      console.log(users[userNumber]);
    }

    function makeProfile(userNumber) {
      saveEmail(userNumber);
      document.getElementById("email-id-" + userNumber).innerHTML = inputEmail;
      document.getElementById("email-link-" + userNumber).innerHTML = "<img src='"+ users[userNumber].url0 +"' />";
      users["url1"] = "url1";
      users[userNumber].urlCount = 1;
      $('#delete-' + userNumber).css('display', 'block');
      $('#delete-' + userNumber).parent().css('display', 'flex');
    }
    //checks if email already exists in index array
    if(emailCheckArr.includes(inputEmail)){
      let urlCount = users[emailIndex].urlCount;
      let urlPresent = false;
      if (users[emailIndex].url0 != "url0") {

        for (let i=0; i <`${urlCount + 1}`; i++) {
          /*
          this function has been created so each url containing key-value pair
          of the specified users object can be iterated over. it returns true
          when the key-value pair fed in, is present in the object.
          */
          function checkUrl(obj,key,value){
              return obj.hasOwnProperty(key) && obj[key]===value;
          }
          //preparing the variables to be iterated over and compared.
          let urlKey = `url` + i;
          let urlVal = IMG.src;
          // If the exact key-value pair is present, this returns true.
          if (checkUrl(users[emailIndex], `${urlKey}`, `${urlVal}`)) {
            alert("Image is already stored under this email address");
            return urlPresent = true;
            break;
          }
        }

        /*
        This checks whether the url was present already, and if not, adds the
        new url in the blank key value pair, and adds another blank key value
        pair ahead of that.
        */
        for (let i=0; i <`${urlCount + 1}`; i++) {
          if (urlPresent === true) {
            break;
          } else if (eval(`users[emailIndex].url${i}`) === `url${i}` && urlPresent === false) {
            let urlEval = eval(`users[${emailIndex}].url${urlCount} = IMG.src`);
            console.log(urlEval);
            users[emailIndex].urlCount = urlCount + 1;
            users[emailIndex]["url" + (i + 1)] = "url" + (i + 1);
            console.log(users["url" + i]);
            localStorage.setItem("userStore", JSON.stringify(users));
            alert("Image linked succesfully");
          }
          }
        }

    } else if(users[0].email === "email 0") {
      makeProfile(0);
      localStorage.setItem("userStore", JSON.stringify(users));

    } else if(users[1].email === "email 1") {
      makeProfile(1);
      localStorage.setItem("userStore", JSON.stringify(users));

    } else if(users[2].email === "email 2") {
      makeProfile(2);
      localStorage.setItem("userStore", JSON.stringify(users));

    } else if(users[3].email === "email 3") {
      makeProfile(3);
      localStorage.setItem("userStore", JSON.stringify(users));

    } else if(users[4].email === "email 4") {
      makeProfile(4);
      localStorage.setItem("userStore", JSON.stringify(users));

    } else (
      alert("Sorry, only 5 profiles allowed per user, please use a previous email address")
    )

 } else if(document.getElementById("email-input").classList.contains("invalid")){
   alert("Email Address Entered invalid, please try again");
 } else {
   alert("Please enter email address to save photo");
 }
localStorage.setItem("userStore", JSON.stringify(users));
};

function deleteUser(userNumber) {
  $('#delete-' + userNumber).parent().css('display', 'none');
  document.getElementById("email-id-" + userNumber).innerHTML = '';
  document.getElementById("email-link-" + userNumber).innerHTML = '';
  users[userNumber] = {
    email: "email " + userNumber,
    urlCount: 0,
    url0: "url0"
  };
  emailCheckArr[userNumber] = 'email ' + userNumber;
  console.log(users[userNumber]);
}

$('#delete-0').click( function() {
  if(confirm("Are you sure you want to delete this profile?")) {
    deleteUser(0);
    localStorage.setItem("userStore", JSON.stringify(users));
  } else {
    alert("profile not deleted");
  }
});

$('#delete-1').click( function() {
  if(confirm("Are you sure you want to delete this profile?")) {
    deleteUser(1);
    localStorage.setItem("userStore", JSON.stringify(users));
  } else {
    alert("profile not deleted");
  }
});

$('#delete-2').click( function() {
  if(confirm("Are you sure you want to delete this profile?")) {
    deleteUser(2);
    localStorage.setItem("userStore", JSON.stringify(users));
  } else {
    alert("profile not deleted");
  }
});

$('#delete-3').click( function() {
  if(confirm("Are you sure you want to delete this profile?")) {
    deleteUser(3);
    localStorage.setItem("userStore", JSON.stringify(users));
  } else {
    alert("profile not deleted");
  }
});

$('#delete-4').click( function() {
  if(confirm("Are you sure you want to delete this profile?")) {
    deleteUser(4);
    localStorage.setItem("userStore", JSON.stringify(users));
  } else {
    alert("profile not deleted");
  }
});
