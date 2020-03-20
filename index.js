const setSwitch = () => {
  document.querySelector('.switch-wrapper').onclick = e => {
    document.querySelectorAll('*').forEach(e => {
      e.classList.toggle('dark')
    })
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

window.onload = () => {
  setSwitch()
  setPosts()
}
