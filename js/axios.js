const URL = 'https://picsum.photos/300/200';

let IMG = document.getElementById('img');

document.getElementById('random-btn').onclick = axios.get(URL)
.then(response=> {
  let picsum = response.headers['picsum-id'];
  console.log(picsum);
  let path  = `https://picsum.photos/id/${picsum}/300/200`;
  IMG.src = path;
  return path;
});
