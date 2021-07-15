const URL = 'https://picsum.photos/300/200';

let IMG = document.getElementById('img');

const axiosImgGet = () => axios.get(URL)
.then((response) => {
  picID = response.headers['picsum-id'];
  picURL = `https://picsum.photos/id/${picID}/300/200`;
  IMG.src = picURL;
});

console.log(axiosImgGet());

// axios.get(URL)
//   .then(response=> {
//     console.log("Initialised get")
//     let picsum = response.headers['picsum-id'];
//     console.log(picsum);
//     let path  = `https://picsum.photos/id/${picsum}/300/200`;
//     IMG.src = path;
//     return path;
//   });

// document.getElementById('random-btn').onclick
