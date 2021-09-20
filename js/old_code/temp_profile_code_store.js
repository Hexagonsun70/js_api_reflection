// else if(users[0].email === "email 0") {
//   makeProfile(0);
//   localStorage.setItem("userStore", JSON.stringify(users));
//
// } else if(users[1].email === "email 1") {
//   makeProfile(1);
//   localStorage.setItem("userStore", JSON.stringify(users));
//
// } else if(users[2].email === "email 2") {
//   makeProfile(2);
//   localStorage.setItem("userStore", JSON.stringify(users));
//
// } else if(users[3].email === "email 3") {
//   makeProfile(3);
//   localStorage.setItem("userStore", JSON.stringify(users));
//
// } else if(users[4].email === "email 4") {
//   makeProfile(4);
//   localStorage.setItem("userStore", JSON.stringify(users));

for (var i=0 ; i<5 ; i++){
   let emailNum = "email " + i;
   console.log(emailNum);
   if (users[i].email === emailNum) {
     makeProfile(i);
     localStorage.setItem("userStore", JSON.stringify(users));
   } else (
     alert("Sorry, only 5 profiles allowed per user, please use a previous email address");

}
