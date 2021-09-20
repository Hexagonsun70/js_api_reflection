let profileRetrieved = JSON.parse(localStorage.getItem("userStore"));
let users = [];
Object.assign(users, profileRetrieved);

window.onload = function() {
  function populateDoc(userNumber, urlNum) {
    $(".user-"+ userNumber +"__email").html(`Profile of: ${users[userNumber].email}<br><br>Click on an Image to mail it to the above email address`);
    for (let i=0; i <= urlNum; i++) {
      let url = eval(`users[userNumber].url${i}`);
      console.log(url);
      if (! (url === "url" + i)) {
        $(".user-"+ userNumber +"__block-" + i).addClass("user-"+ userNumber +"__block-"+ i + "-margin");
        $(".user-"+ userNumber +"--img-" + i).attr("href", `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&body=${url}%0A%0A`);
        $(".user-"+ userNumber +"--img-" + i).html("<img class='link-img-" + i + "' src='"+ url +"' />");
        $(".user-"+ userNumber +"--url-" + i).html(url);
        $(".user-"+ userNumber +"--url-" + i).attr("href", url);
        $(".user-"+ userNumber +"--url-" + i).attr("target", `_blank`);
        $(".user-"+ userNumber +"__email-all").html(`Email all images to ${users[userNumber].email} by clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Links&body=${url}%0A%0A">here</a>`);
      };
    }


    // $(".user-"+ userNumber +"__email-all").html(`Email all images to ${users[userNumber].email} by clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Links&body=${users[userNumber].url1}%0A%0A${users[userNumber].url2}%0A%0A${users[userNumber].url3}%0A%0A">here</a>`);
    };
  populateDoc(0, 2);
  populateDoc(1);
  populateDoc(2);
  populateDoc(3);
  populateDoc(4);
};
