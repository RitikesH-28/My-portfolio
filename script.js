const words = ["Student","Developer","Problem Solver"];
    let i = 0, j = 0, current = "", isDeleting = false;
    const typing = document.getElementById("typing");

    function typeEffect() {
      current = words[i];
      if (isDeleting) {
        typing.textContent = current.substring(0, j--);
      } else {
        typing.textContent = current.substring(0, j++);
      }

      if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(typeEffect, 300);
      } else {
        setTimeout(typeEffect, isDeleting ? 60 : 150);
      }
    }

    document.addEventListener("DOMContentLoaded", typeEffect);