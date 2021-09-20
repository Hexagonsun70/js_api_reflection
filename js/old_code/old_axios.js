const URL = 'https://picsum.photos/300/200';
let IMG = document.getElementById('img');
let inputVal = document.getElementById("email-input").value;

// users created before usersRetrieved is assigned to users, so that
// emailCheckArr is populated by the locally stored emails
let users = [];
for (var i=0 ; i<5 ; i++) {
    users[i] = {
      /*white space used incase somebodies email contains the word email
      followed by a number.*/
        email: "email " + i,
        url0: "url" +0,
        url1: "url" +1,
        url2: "url" +2,
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
    let emailIndex = emailCheckArr.indexOf(inputEmail)
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
      $('#delete-' + userNumber).css('display', 'block');
      $('#delete-' + userNumber).parent().css('display', 'flex');
    }
    //checks if email already exists in index array
    if(emailCheckArr.includes(inputEmail)){
      // checks if the image already is stored in the target email address
      if (users[emailIndex].url0 === IMG.src || users[emailIndex].url1 === IMG.src  || users[emailIndex].url2 === IMG.src) {
        alert("Image is already stored under this email address")
      } /*
          checks if a url slot is empty. saves it to the next available slot and
          refreshes the local storage with the new information.
        */
      else if (users[emailIndex].url1 === "url1") {
        users[emailIndex].url1 = IMG.src
        localStorage.setItem("userStore", JSON.stringify(users));
        alert("Image linked succesfully");
      } else if (users[emailIndex].url2 === "url2") {
        users[emailIndex].url2 = IMG.src
        localStorage.setItem("userStore", JSON.stringify(users));
        alert("Image linked succesfully");
      } else {
        alert("Sorry, no more photos can be saved to this email address")
      }
      console.log(users[emailCheckArr.indexOf(inputEmail)])

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
};

function deleteUser(userNumber) {
  $('#delete-' + userNumber).parent().css('display', 'none');
  document.getElementById("email-id-" + userNumber).innerHTML = '';
  document.getElementById("email-link-" + userNumber).innerHTML = '';
  users[userNumber].email = "email " + userNumber;
  users[userNumber].url0 = 'url0';
  users[userNumber].url1 = 'url1';
  users[userNumber].url2 = 'url2';
  emailCheckArr[userNumber] = 'email ' + userNumber;
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


// $('#delete-1').click(function() {
//  $('#delete-1').parent().css('display', 'none');
//  document.getElementById("email-id-1").innerHTML = '';
//  document.getElementById("email-link-1").innerHTML = '';
//  users[1].email = "email 1";
//  users[1].url0 = 'url0';
//  users[1].url1 = 'url1';
//  users[1].url2 = 'url2';
//  emailCheckArr[1] = 'email 1';
//  localStorage.setItem("userStore", JSON.stringify(users));
//   }
// );
//
// $('#delete-2').click(function() {
//  $('#delete-2').parent().css('display', 'none');
//  document.getElementById("email-id-2").innerHTML = '';
//  document.getElementById("email-link-2").innerHTML = '';
//  users[2].email = "email 2";
//  users[2].url0 = 'url0';
//  users[2].url1 = 'url1';
//  users[2].url2 = 'url2';
//  emailCheckArr[2] = 'email 2';
//  localStorage.setItem("userStore", JSON.stringify(users));
//   }
// );
//
// $('#delete-3').click(function() {
//  $('#delete-3').parent().css('display', 'none');
//  document.getElementById("email-id-3").innerHTML = '';
//  document.getElementById("email-link-3").innerHTML = '';
//  users[3].email = "email 3";
//  users[3].url0 = 'url0';
//  users[3].url1 = 'url1';
//  users[3].url2 = 'url2';
//  emailCheckArr[3] = 'email 3';
//  localStorage.setItem("userStore", JSON.stringify(users));
//   }
// );
//
// $('#delete-4').click(function() {
//  $('#delete-4').parent().css('display', 'none');
//  document.getElementById("email-id-4").innerHTML = '';
//  document.getElementById("email-link-4").innerHTML = '';
//  users[4].email = "email 4";
//  users[4].url0 = 'url0';
//  users[4].url1 = 'url1';
//  users[4].url2 = 'url2';
//  emailCheckArr[4] = 'email 4';
//  localStorage.setItem("userStore", JSON.stringify(users));
//   }
// );

// window.addEventListener('beforeunload', (localStorage.setItem("userStore", JSON.stringify(users))));
