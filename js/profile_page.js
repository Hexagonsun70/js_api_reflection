let profileRetrieved = JSON.parse(localStorage.getItem("userStore"));
let users = [];
Object.assign(users, profileRetrieved);

window.onload = function() {
  function populateDoc(userNumber) {
    $(".user-"+ userNumber +"__email").html(`Profile of: ${users[userNumber].email}<br><br>Click on an Image to email it to the above address`);
    if (! (users[userNumber].url1 === "url1")) {
      $(".user-"+ userNumber +"--img-1").attr("href", `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&body=${users[userNumber].url1}%0A%0A`);
      $(".user-"+ userNumber +"--img-1").html("<img class='link-img-1' src='"+ users[userNumber].url1 +"' />");
      $(".user-"+ userNumber +"--url-1").html(users[userNumber].url1);
    };
    if (! (users[userNumber].url2 === "url2")) {
      $(".user-"+ userNumber +"--img-2").attr("href", `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&body=${users[userNumber].url2}%0A%0A`);
      $(".user-"+ userNumber +"--img-2").html("<img class='link-img-2' src='"+ users[userNumber].url2 +"' />");
      $(".user-"+ userNumber +"--url-2").html(users[userNumber].url2);
    };
    if (! (users[userNumber].url3 === "url3")) {
      $(".user-"+ userNumber +"--img-3").attr("href", `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&body=${users[userNumber].url3}%0A%0A`);
      $(".user-"+ userNumber +"--img-3").html("<img class='link-img-3' src='"+ users[userNumber].url3 +"' />");
      $(".user-"+ userNumber +"--url-3").html(users[userNumber].url3);
    };
    $(".user-"+ userNumber +"__email-all").html(`Email all images to ${users[userNumber].email} by clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Links&body=${users[userNumber].url1}%0A%0A${users[userNumber].url2}%0A%0A${users[userNumber].url3}%0A%0A">here</a>`);
    };
  populateDoc(0);
  populateDoc(1);
  populateDoc(2);
  populateDoc(3);
  populateDoc(4);
};
