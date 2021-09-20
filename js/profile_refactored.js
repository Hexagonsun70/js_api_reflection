let profileRetrieved = JSON.parse(localStorage.getItem("userStore"));
let users = [];
Object.assign(users, profileRetrieved);

window.onload = function() {
  function populateDoc(userNumber, urlNum) {
    $(".content__header-ie").after
      (`<div class="user-${userNumber} user"></div>`)

    $(`.user-${userNumber}`).append(
      `<div class="hp-link">
          <a href="../index.html">
            <i class="fas fa-arrow-left"></i>
          </a>
      </div>
      <div class="blocks-end"></div>`
    );
    $(`.hp-link`).after(`<div class="user-${userNumber}__email email"></div>`)
    $(".user-"+ userNumber +"__email").html(`Profile of: `+
      `${users[userNumber].email}<br><br>Click on the images url to mail it to
      the above email address`);

    /*
    for loop creates the html for images and urls to be populated with and
    assigns the images and urls to relevant divs.also creates a link that emails
    each image to the profiles email address, and a link that emails all images
    to it.
    */
    //Placeholder to be filled with all url's in the for loop.
    allUrl = "";
    for (let i=0 ; i <= urlNum; i++) {
      // Creates a reference to the user object for the relevant url.
      let url = eval(`users[userNumber].url${i}`);
      allUrl += `${url}%0A%0A`;
      console.log(allUrl);
      // Detects whether an empty url slot is present, and stops the loop if so
      if (! (url === "url" + i)) {
        // Creates the html for each image block
        $(`.user-${userNumber}__email`).after(
        `<div class="user-${userNumber}__block block">
          <a href="" class="user-${userNumber}--img-${i} img"></a>
          <a class="user-${userNumber}--url-${i} url"></a>
        </div>`
        );

        // Assigns relevant atrr to the img and url divs and populates them.
        $(`.user-${userNumber}--img-${i}`).attr("href", url);
        $(`.user-${userNumber}--img-${i}`).attr("target", `_blank`);
        $(`.user-${userNumber}--img-${i}`).html("<img class='link-img' " +
        "src='"+ url +"' />");
        $(`.user-${userNumber}--url-${i}`).html(url);
        $(`.user-${userNumber}--url-${i}`).attr("href",
          `mailto:${users[userNumber].email}?&subject=Photo%20Grabber%20Link&`+
          `body=${url}%0A%0A`);
      };
      // Creates a link with all urls associated with the profile.
      $(".blocks-end").html(`Email all images to ${users[userNumber].email} by
        clicking <a href="mailto:${users[userNumber].email}?&subject=Photo%20`+
        `Grabber%20Links&body=${allUrl}">here</a>`);
    }

    };

  /*
  This for loop finds the page url and initiates the populateDoc function
  with the relevant profile information. This works by iterating over each
  potential profile number and comparing it to the current html document name.
  */
  for (let i = 0; i<=4; i++){
    // Finds current url.
    var path = window.location.pathname;
    // Removes forward slashes so it can be evaluated.
    var page = path.split("/").pop();
    console.log(page);
    // checks current url and initialises function with matching url value.
      if (page === `profile-${i}.html`) {
        populateDoc(i, 2);
        break;
    }
  }
};
