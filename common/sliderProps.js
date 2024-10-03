import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  latestProjectSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-works-prev",
      nextEl: ".mil-works-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  },
  milBlogSlider: {
    spaceBetween: 30,
    speed: 800,
    slidesPerView: 1,
    navigation: {
      prevEl: ".mil-blog-prev",
      nextEl: ".mil-blog-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: "auto",
      },
    },
  },
  milBannersSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    parallax: true,
    loop: true,
    pagination: {
      el: ".mil-banners-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
  },
  milReviSlider2: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      prevEl: ".mil-revi-prev",
      nextEl: ".mil-revi-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  },
  milBoxSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    effect: "fade",
    navigation: {
      prevEl: ".mil-box-prev",
      nextEl: ".mil-box-next",
    },
  },
  milCoursesSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-courses-prev",
      nextEl: ".mil-courses-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
  milTabsSlider: {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    hashNavigation: {
      watchState: true,
    },
    effect: "fade",
    parallax: true,
  },
  milBoxSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    effect: "fade",
    navigation: {
      prevEl: ".mil-box-prev",
      nextEl: ".mil-box-next",
    },
  },
  milReviSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-revi-prev",
      nextEl: ".mil-revi-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
  milEventsSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-events-prev",
      nextEl: ".mil-events-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
  milServicesSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-services-prev",
      nextEl: ".mil-services-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
};
