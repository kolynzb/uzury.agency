// Sticky nav
export const stickyNav = (extraClass) => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(
      extraClass ? `.${extraClass}` : ".mil-animated"
    );
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (extraClass) {
        if (stick) {
          if (offset > 10) {
            stick.classList.add("mil-hide-top");
          } else {
            stick.classList.remove("mil-hide-top");
          }
        }
      } else {
        if (stick) {
          if (offset > 10) {
            stick.classList.remove("mil-top-panel-transparent");
          } else {
            stick.classList.add("mil-top-panel-transparent");
          }
        }
      }
    }
  });
};

export const milButtonClick = () => {
  const milTabButtons = document.querySelectorAll(".mil-tab-buttons a");
  milTabButtons.forEach((a) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element) => {
        element.classList.remove("mil-active");
      });
      a.classList.add("mil-active");
    });
  });
};
export const milButtonClick2 = () => {
  const milTabButtons = document.querySelectorAll(".mil-tabs-left-nav a");
  milTabButtons.forEach((a) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element) => {
        element.classList.remove("mil-active");
      });
      a.classList.add("mil-active");
    });
  });
};

export const accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }
};
