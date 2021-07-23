const URL = 'https://picsum.photos/300/200';
let IMG = document.getElementById('img');
let inputVal = document.getElementById("email-input").value;
// users created before usersRetrieved is assigned to users, so that
// emailCheckArr is populated by the locally stored emails
let users = [];
for (var i=0; i < 5; i++) {
    users[i] = {
      /*white space used incase somebodies email contains the word email
      followed by a number.*/
        email: "email " + i,
        url1: "url" +1,
        url2: "url" +2,
        url3: "url" +3,
    };
};
const usersRetrieved = JSON.parse(localStorage.getItem("userStore"));
Object.assign(users, usersRetrieved);

window.onload = function() {
  Object.assign(users, usersRetrieved);
  if (! (usersRetrieved[0].url1 === "url1")){
    document.getElementById("email-id-0").innerHTML = users[0].email;
    document.getElementById("email-link-0").innerHTML = "<img src='"+ users[0].url1 +"' />";
  }
  if (! (usersRetrieved[1].url1 === "url1")){
    document.getElementById("email-id-1").innerHTML = users[1].email;
    document.getElementById("email-link-1").innerHTML = "<img src='"+ users[1].url1 +"' />";
  }
  if (! (usersRetrieved[2].url1 === "url1")){
    document.getElementById("email-id-2").innerHTML = users[2].email;
    document.getElementById("email-link-2").innerHTML = "<img src='"+ users[2].url1 +"' />";
  }
  if (! (usersRetrieved[3].url1 === "url1")){
    document.getElementById("email-id-3").innerHTML = users[3].email;
    document.getElementById("email-link-3").innerHTML = "<img src='"+ users[3].url1 +"' />";
  }
  if (! (usersRetrieved[4].url1 === "url1")){
    document.getElementById("email-id-4").innerHTML = users[4].email;
    document.getElementById("email-link-4").innerHTML = "<img src='"+ users[4].url1 +"' />";
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
      users[userNumber].url1 = IMG.src;
      emailCheckArr.splice(userNumber,1, users[userNumber].email);
      localStorage.setItem("userStore", JSON.stringify(users));
      console.log(emailCheckArr);
      console.log(users);
      console.log(users[userNumber]);
    }
    //checks if email already exists in index array
    if(emailCheckArr.includes(inputEmail)){
      // checks if the image already is stored in the target email address
      if (users[emailIndex].url1 === IMG.src || users[emailIndex].url2 === IMG.src  || users[emailIndex].url3 === IMG.src) {
        alert("Image is already stored under this email address")
      } //checks if a url slot is empty. saves it to the next available slot and
        //refreshes the local storage with the new information.
      else if (users[emailIndex].url2 === "url2") {
        users[emailIndex].url2 = IMG.src
        localStorage.setItem("userStore", JSON.stringify(users));
      } else if (users[emailIndex].url3 === "url3") {
        users[emailIndex].url3 = IMG.src
        localStorage.setItem("userStore", JSON.stringify(users));
      } else {
        alert("Sorry, no more photos can be saved to this email address")
      }
      console.log(users[emailCheckArr.indexOf(inputEmail)])

    } else if(users[0].email === "email 0") {
      saveEmail(0);
      document.getElementById("email-id-0").innerHTML = inputEmail;
      document.getElementById("email-link-0").innerHTML = "<img src='"+ users[0].url1 +"' />";

    } else if(users[1].email === "email 1") {
      saveEmail(1)
      document.getElementById("email-id-1").innerHTML = inputEmail;
      document.getElementById("email-link-1").innerHTML = "<img src='"+ users[1].url1 +"' />";

    } else if(users[2].email === "email 2") {
      saveEmail(2)
      document.getElementById("email-id-2").innerHTML = inputEmail;
      document.getElementById("email-link-2").innerHTML = "<img src='"+ users[2].url1 +"' />";

    } else if(users[3].email === "email 3") {
      saveEmail(3)
      document.getElementById("email-id-3").innerHTML = inputEmail;
      document.getElementById("email-link-3").innerHTML = "<img src='"+ users[3].url1 +"' />";

    } else if(users[4].email === "email 4") {
      saveEmail(4)
      document.getElementById("email-id-4").innerHTML = inputEmail;
      document.getElementById("email-link-4").innerHTML = "<img src='"+ users[4].url1 +"' />";

    } else (
      alert("Sorry, only 5 profiles allowed per user, please use a previous email address")
    )

 } else if(document.getElementById("email-input").classList.contains("invalid")){
   alert("Email Address Entered invalid, please try again")
 } else {
   alert("Please enter email address to save photo")
 }
};

// window.addEventListener('beforeunload', (localStorage.setItem("userStore", JSON.stringify(users))));
