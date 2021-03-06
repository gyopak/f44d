const toggleTheme = () => {
  document.querySelectorAll('*').forEach(e => {
      e.classList.toggle('dark')
    })
  let theme = localStorage.getItem('config.theme');
  let newTheme = theme === 'white' ? 'dark' : 'white';
  localStorage.setItem('config.theme', newTheme);
}

const setSwitch = () => {
  document.querySelector('.theme-switch').onclick = e => {
    toggleTheme();
    document.querySelector('.switch-wrapper').classList.toggle('active')
  }
}

const setPosts = () => {
  document.querySelectorAll('.post').forEach(p => {
      p.onclick = e => {
        if(e.target.classList.contains('opener')) {
          e.currentTarget.classList.toggle('open')
          document.querySelector('.chevron').classList.remove('open')
          document.querySelector('.menu').classList.remove('open')
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

const setMenu = () => {
  document.querySelector('header').onclick = e => {
    document.querySelector('.chevron').classList.toggle('open')
    document.querySelector('.menu').classList.toggle('open')
  }
}

window.onload = () => {
  setSwitch()
  setPosts()
  setMenu()
  setTheme()
}
