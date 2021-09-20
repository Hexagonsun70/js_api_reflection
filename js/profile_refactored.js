let profileRetrieved = JSON.parse(localStorage.getItem("userStore"));
let users = [];
Object.assign(users, profileRetrieved);

window.onload = function() {
  function populateDoc(userNumber, urlNum) {
    let i = 1;
    let url = eval(`users[userNumber].url${i}`);
    console.log(url);
    $(".user-"+ userNumber +"__email").html(`Profile of: ${users[userNumber].email}<br><br>Click on an Image to mail it to the above email address`);
    if (! (url === "url1")) {
      $(".user-"+ userNumber +"__block-1").addClass("user-"+ userNumber +"__block-1-margin");
      $(".user-"+ userNumber +"--img-1").attr("href", `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&body=${url}%0A%0A`);
      $(".user-"+ userNumber +"--img-1").html("<img class='link-img-1' src='"+ url +"' />");
      $(".user-"+ userNumber +"--url-1").html(url);
      $(".user-"+ userNumber +"--url-1").attr("href", url);
      $(".user-"+ userNumber +"--url-1").attr("target", `_blank`);
      $(".user-"+ userNumber +"__email-all").html(`Email all images to ${users[userNumber].email} by clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Links&body=${users[userNumber].url1}%0A%0A">here</a>`);
    };

    // $(".user-"+ userNumber +"__email-all").html(`Email all images to ${users[userNumber].email} by clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Links&body=${users[userNumber].url1}%0A%0A${users[userNumber].url2}%0A%0A${users[userNumber].url3}%0A%0A">here</a>`);
    };
  populateDoc(0);
  populateDoc(1);
  populateDoc(2);
  populateDoc(3);
  populateDoc(4);
};
