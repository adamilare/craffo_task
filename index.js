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

const sliderData = [
    {
        h2: { text: "Premium Collection", class: "" },
        h3: ["The Heritage", "Collection"],
        buttons: ["Learn More", "Shop"],
        images: ["https://focal-theme-carbon.myshopify.com/cdn/shop/files/heritage-lp-3.jpg?v=1630492874&width=1600"]
    },
    {
        h2: { text: "Meet The", class: "" },
        h3: ["The Sage", "Collection"],
        buttons: ["Learn More"],
        images: [
            "https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump1-desktop.jpg?v=1630492933&width=800",
            "https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump2-desktop.jpg?v=1630492956&width=800"
        ]
    },
    {
        h2: { text: "Collaboration", class: "" },
        h3: ["Native union x", "Tom dixon"],
        buttons: ["Learn More"],
        images: ["https://focal-theme-carbon.myshopify.com/cdn/shop/files/tom-dixon-lp-tile-1.jpg?v=1630492908&width=1600"]
    },
    {
        h2: { text: "Charge anywhere, anytime", class: "" },
        h3: ["Powerbank", "New Jump+"],
        buttons: ["Shop Jump+"],
        images: [
            "https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump1-desktop.jpg?v=1630492933&width=800",
            "https://focal-theme-carbon.myshopify.com/cdn/shop/files/jump2-desktop.jpg?v=1630492956&width=800"
        ]
    },
    {
        h2: { text: "New In", class: "" },
        h3: ["Kitsuné Collab", "The Maison"],
        buttons: ["Learn More"],
        images: ["https://focal-theme-carbon.myshopify.com/cdn/shop/files/mk-lp-tile-1.jpg?v=1630493139&width=1600"]
    },
];

function generateSlideHTML(slide, index) {
    const imageHTML = slide.images.map(img => `<img src="${img}" alt="Slide ${index + 1}" class="w-full h-full object-cover">`).join('');
    const h3HTML = slide.h3.map(chunk => `<span class="block">${chunk}</span>`).join('');
    const buttonsHTML = slide.buttons.map(btn => `<button class="bg-primary text-black rounded-none font-medium py-2 px-4 rounded-full">${btn}</button>`).join('');

    const contentAlignment = index % 2 === 0 ? 'justify-start text-left' : 'justify-center text-center' ;
    const contentMargin = index % 2 === 0 ?'ml-10 md:ml-20 lg:ml-40' : '';

    return `
        <div class="swiper-slide relative">
            ${imageHTML}
            <div class="absolute inset-0 flex items-center ${contentAlignment}">
                <div class="${contentMargin} text-white">
                    <h2 class="${slide.h2.class} leading-[1.5] text-[13px] font-bold uppercase">${slide.h2.text}</h2>
                    <h3 class="my-10 text-[64px] font-ext">
                        ${h3HTML}
                    </h3>
                    <div class="flex ${index % 2 === 0 ? 'justify-start' : 'justify-center' } space-x-4">
                        ${buttonsHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = sliderData.map((slide, index) => generateSlideHTML(slide, index)).join('');

    var swiper = new Swiper(".mySwiper, .swiper-container", {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
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
        },
        on: {
            slideChangeTransitionStart: function () {
                const activeSlide = this.slides[this.activeIndex];
                const h2 = activeSlide.querySelector('h2');
                const h3 = activeSlide.querySelector('h3');
                const buttons = activeSlide.querySelectorAll('button');

                h2.classList.add('animate-fadeIn');
                h3.classList.add('animate-slideUp');
                buttons.forEach(button => button.classList.add('animate-slideUp'));
            },
            slideChangeTransitionEnd: function () {
                const slides = this.slides;
                slides.forEach(slide => {
                    const h2 = slide.querySelector('h2');
                    const h3 = slide.querySelector('h3');
                    const buttons = slide.querySelectorAll('button');

                    h2.classList.remove('animate-fadeIn');
                    h3.classList.remove('animate-slideUp');
                    buttons.forEach(button => button.classList.remove('animate-slideUp'));
                });
            }
        }
    });
});