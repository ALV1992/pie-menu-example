    const container = document.querySelector(".container");
    const images = document.querySelectorAll(".container > img");
    
    container.addEventListener('click', () => {
      for (let image = 0; image < 8; image++) {
        if (images[image].className == 'unable') {
          images[image].classList.remove('unable');
          images[image].classList.add('able');
        } else {
          images[image].classList.remove('able');
          images[image].classList.add('unable');
        }
      }
    });