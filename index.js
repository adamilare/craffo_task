const swiper = new Swiper(".mySwiper, .swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    }
  });

  tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Zurich', 'sans-serif'],
                'ext': ['"Zurich Extended"', 'sans-serif'],
            },
            colors: {
                'primary': '#F3FF34',
            },
        },
    },
}