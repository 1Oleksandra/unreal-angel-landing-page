function createParticles(containerClass, count) {
  const container = document.querySelector(containerClass);

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div")
    dot.classList.add("particle");

    dot.style.left = Math.random() * 100 + "vw"
    dot.style.top = Math.random() * 100 + "vh"

    dot.style.animationDelay = Math.random() * 10 + "s"

    container.appendChild(dot);
  }
}

createParticles(".layer1", 40)
createParticles(".layer2", 30)
createParticles(".layer3", 20)