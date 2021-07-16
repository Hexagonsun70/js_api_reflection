const URL = 'https://picsum.photos/300/200';
let IMG = document.getElementById('img');
let inputVal = document.getElementById("email-input").value;
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

let emailCheckArr = [];
/*
This for loop populates arrays that function as an index for each of the users
objects
*/
for (var i=0; i < 5; i++) {
    emailCheckArr.push(users[i].email);
}

const axiosImgGet = () => axios.get(URL)
.then((response) => {
  picID = response.headers['picsum-id'];
  picURL = `https://picsum.photos/id/${picID}/300/200`;
  IMG.src = picURL;
});

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
    */
    function saveEmail(userNumber) {
      users[userNumber].email = inputEmail;
      users[userNumber].url1 = IMG.src;
      emailCheckArr.splice(userNumber,1, users[userNumber].email);
      console.log(emailCheckArr);
      console.log(users);
    }
    //checks if email already exists in index array
    if(emailCheckArr.includes(inputEmail)){
      // checks if the image already is stored in the target email address
      if (users[emailIndex].url1 === IMG.src || users[emailIndex].url2 === IMG.src  || users[emailIndex].url3 === IMG.src) {
        alert("Image is already stored under this email address")
      } //checks if a url is empty
      else if (users[emailIndex].url2 === "url2") {
        users[emailCheckArr.indexOf(inputEmail)].url2 = IMG.src
      } else if (users[emailIndex].url3 === "url3") {
        users[emailCheckArr.indexOf(inputEmail)].url3 = IMG.src
      } else {
        alert("Sorry, no more photos can be saved to this email address")
      }
      console.log(users[emailCheckArr.indexOf(inputEmail)])

    } else if(users[0].email === "email 0") {
      saveEmail(0);

    } else if(users[1].email === "email 1") {
      saveEmail(1)

    } else if(users[2].email === "email 2") {
      saveEmail(2)

    } else if(users[3].email === "email 3") {
      saveEmail(3)

    } else if(users[4].email === "email 4") {
      saveEmail(4)

    } else (
      alert("Sorry, only 5 profiles allowed per user, please use a previous email address")
    )

 } else if(document.getElementById("email-input").classList.contains("invalid")){
   alert("Email Address Entered invalid, please try again")
 } else {
   alert("Please enter email address to save photo")
 }
};
