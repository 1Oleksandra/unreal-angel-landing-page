// projects

const btnProject = document.querySelectorAll('.item__content-btn');
const imgProjectBig = document.querySelectorAll(".project-imgBig");
const projects = document.querySelector('.projects')

btnProject.forEach((btn, index) => {
  btn.onclick = function() {
    imgProjectBig[index].classList.add("active");
    projects.classList.add("active")
    document.body.classList.add("no-scroll"); // блокуємо скрол
  };
});

// закриття при кліку будь-де поза картинкою
document.addEventListener("click", function(e) {
  imgProjectBig.forEach(img => {
    if (img.classList.contains("active") && !img.contains(e.target) && !e.target.classList.contains("item__content-btn")) {
      img.classList.remove("active");
      document.body.classList.remove("no-scroll"); // повертаємо скрол
    }
  });
});

function createParticles(containerClass, count) {
  const container = document.querySelector(containerClass);

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("particle");

    dot.style.left = Math.random() * 100 + "vw";
    dot.style.top = Math.random() * 100 + "vh";

    dot.style.animationDelay = Math.random() * 10 + "s";

    container.appendChild(dot);
  }
}

createParticles(".layer1", 40);
createParticles(".layer2", 30);
createParticles(".layer3", 20);



