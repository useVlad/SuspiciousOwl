//
function showVideo(btn) {
  const element = document.querySelector('.hidden');
  element.classList.remove('hidden');
  btn.classList.add('hidden');
}

//
function showModal(btn) {
  const modal = document.querySelector('.modal');
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.filter = 'blur(1px)';
  modal.classList.add('show');
}

function tlen() {
  const all = document.querySelector('*');
  all.style.filter = 'grayscale(1)';
}

//
function hideModal(event) {
  const modal = document.querySelector('.modal');
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.filter = 'none';
  modal.classList.remove('show');
}

//
function showMenu(btn) {
  //
  const btns = document.querySelector('.btns');
  //
  if (btns.classList.contains('visible')) {
    btns.classList.remove('visible');
  } else {
    btns.classList.add('visible');
  }
}

function crazyButton(event) {
  const size = {
    height: event.target.getBoundingClientRect().height,
    width: event.target.getBoundingClientRect().width,
  };
  event.target.style.transform =
    'translateX(' +
    (event.layerX < size.width / 2 ? size.width : -size.width) +
    'px)';
}

function navigation(selector) {
  let element = document.querySelector(selector);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth',
  });
}
//
function date() {
  let span = document.querySelector('span.date');
  span.innerHTML = new Date(Date.now()).toLocaleDateString();
}
//
window.onscroll = function (e) {
  let y = window.scrollY;
  let header = document.querySelector('header');
  let about = document.querySelector('.about');
  let video = document.querySelector('.video');

  //
  let cone1 = document.querySelector('.cone1');
  cone1.style.transform =
    'translateY(' +
    y / 3 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 120)) +
    'px)';

  //
  let cone2 = document.querySelector('.cone2');
  cone2.style.transform =
    'translateY(' +
    y / 4 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 100)) +
    'px)';

  //
  let cone3 = document.querySelector('.cone3');
  cone3.style.transform =
    'translateY(' +
    y / 5 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 80)) +
    'px)';

  //
  let cone4 = document.querySelector('.cone4');
  cone4.style.transform =
    'translateY(' +
    y / 2 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 40)) +
    'px)';

  //
  let cone5 = document.querySelector('.cone5');
  cone5.style.transform =
    'translateY(' +
    y / 4 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 80)) +
    'px)';

  //
  let cone6 = document.querySelector('.cone6');
  cone6.style.transform =
    'translateY(' +
    y / 6 +
    'px) rotate(' +
    (y % 360) +
    'deg) translateX(' +
    (60 - (y % 30)) +
    'px)';

  let pseudo = y / 2;

  document.body.style.background = `linear-gradient(
    ${90 - (pseudo % 180)}deg,
    rgba(${248 - (pseudo % 10)}, ${255 - (pseudo % 50)}, ${
    58 - (pseudo % 20)
  }, 1) 0%,
    rgba(${94 - (pseudo % 30)}, ${255 - (pseudo % 70)}, ${
    66 - (pseudo % 80)
  }, 1) 25%,
    rgba(${70 - (pseudo % 50)}, ${255 - (pseudo % 30)}, ${
    205 - (pseudo % 30)
  }, 1) 50%,
    rgba(${0 + (pseudo % 60)}, ${140 - (pseudo % 40)}, ${
    255 - (pseudo % 50)
  }, 1) 75%,
    rgba(${96 - (pseudo % 90)}, ${228 - (pseudo % 10)}, ${
    255 - (pseudo % 70)
  }, 1) 100%)`;

  //
  if (y > about.offsetTop) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  if (y > video.offsetTop) {
    header.classList.add('veryactive');
  } else {
    header.classList.remove('veryactive');
  }
};
date();

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 1200,
  spaceBetween: 30,
  // effect: 'cube',
  autoplay: {
    delay: 2000,
  },
});

const slider = document.getElementById('slider');

noUiSlider
  .create(slider, {
    start: [0, 50],
    // start: 0,
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
    tooltips: true,
    pips: {
      mode: 'steps',
      stepped: true,
      density: 1,
    },
  })
  .on('update', function (values) {
    const elements = document.querySelectorAll('button, img');
    elements.forEach(function (item) {
      item.style.transform =
        'rotate(' + values[0] * 500 + 'deg) scale(' + values[1] / 100 + ')';
    });
  });

particlesJS('particles-js', {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
