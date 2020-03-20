const apiUrl = 'https://gist.githubusercontent.com/gyopak/3f44dfb8408a55b742a6dd0eb5b38f8a/raw/68104f288b6bc0b104536ee91d8b0a5b35db1bc4/feed.json';

const setSwitch = () => {
  document.querySelector('.switch-wrapper').onclick = e => {
    document.querySelectorAll('*').forEach(e => {
      e.classList.toggle('dark')
    })
    document.querySelector('.switch-wrapper').classList.toggle('active')
  }
}

const renderPost = (p) => {
  const postContainer = document.querySelector('.posts');
  const post = document.createElement('div');
  post.innerHTML = p.content
  postContainer.appendChild(post);
}

const loadFeed = async () => {
  const feed = await (await fetch(apiUrl)).json();
  feed.forEach(p => renderPost(p));
}


window.onload = () => {
  setSwitch()
  // loadFeed()
}