const toggleTheme = () => {
  document.querySelectorAll('*').forEach(e => {
      e.classList.toggle('dark')
    })
  let theme = localStorage.getItem('config.theme');
  let newTheme = theme === 'white' ? 'dark' : 'white';
  localStorage.setItem('config.theme', newTheme);
}

const setSwitch = () => {
  document.querySelector('.switch-wrapper').onclick = e => {
    toggleTheme();
    document.querySelector('.switch-wrapper').classList.toggle('active')
  }
}

const setPosts = () => {
  document.querySelectorAll('.post').forEach(p => {
      p.onclick = e => {
        if(e.target.classList.contains('opener')) {
          e.currentTarget.classList.toggle('open')
        }
      }
    })
}

const setTheme = () => {
  let theme = localStorage.getItem('config.theme');
  if (!theme) {
    theme = 'white';
    localStorage.setItem('config.theme', 'white');
  }
  if (theme === 'dark') {
    document.querySelector('.switch-wrapper').classList.toggle('active')
    document.querySelectorAll('*').forEach(e => {
      e.classList.toggle('dark')
    })
  }
}

window.onload = () => {
  setSwitch()
  setPosts()
  setTheme()
}
