//клік на кнопку Записатись на курс  
  const btn = document.querySelector('.btn.neon-btn')
  const forma = document.querySelector('.forma.container')

  btn.addEventListener('click', () => {
    forma.scrollIntoView({ behavior: 'smooth' })
  })

// projects
const projectImgBigBg = document.querySelectorAll('.project-imgBig__bg')
const btnProject = document.querySelectorAll('.item__content-btn')
const imgProjectBig = document.querySelectorAll(".project-imgBig")
const projects = document.querySelector('.projects')

btnProject.forEach((btn, index) => {
  btn.onclick = function() {
    imgProjectBig[index].classList.add("active")
    projects.classList.add("active")
    document.body.classList.add("no-scroll")
    projectImgBigBg[index].classList.add('active')
  }
})

// закриття при кліку будь-де поза картинкоюs

projectImgBigBg.forEach((bg, index) => {
  bg.addEventListener("click", function(e) {
    // перевіряємо, щоб клік був саме по фону, а не по картинці
    if (!imgProjectBig[index].contains(e.target)) {
      imgProjectBig[index].classList.remove("active")
      bg.classList.remove("active")
      document.body.classList.remove("no-scroll")
    }
  })
  
})





