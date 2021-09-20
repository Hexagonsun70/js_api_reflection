var flag = false;

// returns nodelist of all id's containing delete
var deleteID = document.querySelectorAll('[id^=delete]');

console.log(deleteID);

let string = deleteID[0];

console.log(string);

$(".delete").click(function (){
  console.log("flag is true");
  flag = true;
  if (flag) {
    console.log('delete clicked')
    for (var i=0; i < 5; i++) {
      console.log(i);
      if (deleteID[i].clicked == true) {
        deleteUser(i);
        // localStorage.setItem("userStore", JSON.stringify(users));
      }
      flag=false;
    }
  };
});
