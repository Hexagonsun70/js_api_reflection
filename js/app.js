document.getElementById('random-btn').onclick = function(){
  console.log("clicked");
  // document.getElementById('img')[0].style.backgroundImage = "url(https://picsum.photos/200/300/?random&t" + new Date().getTime() +")";
  };

document.getElementById('save-btn').onclick = function(){
  alert('User must input an email address before saving a photo.');
};
