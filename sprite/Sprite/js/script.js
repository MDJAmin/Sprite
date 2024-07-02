containerWidth = document.getElementById("container").clientWidth;
nextButton = document.getElementById("next-button");
previousButton = document.getElementById("previous-button");
slide = document.getElementById("slide");

firstCardLeftMargin = 10;
cardWidthAndRightMargin = 120 + 10;
totalWidth = slide.clientWidth;

const transformSlide = (val) => {
  slide.style.transform = `translate(${val}px,0px)`;
};

const getCurrentPosition = () => {
  const stringValue = slide.style.transform;
  const transformValue = stringValue.substring(
    stringValue.indexOf("(") + 1,
    stringValue.lastIndexOf("p")
  );
  return transformValue ? parseInt(transformValue) : 0;
};

const getNextPosition = () => {
  const currentPosition = getCurrentPosition();

  const lastVisiblePixel = containerWidth + -1 * currentPosition;

  const lastFullyVisibleCard = Math.floor(
    (lastVisiblePixel - firstCardLeftMargin) / cardWidthAndRightMargin
  );

  const distanceToNextCard =
    lastFullyVisibleCard * cardWidthAndRightMargin + firstCardLeftMargin;
  if (distanceToNextCard + containerWidth > totalWidth) {
    return totalWidth - containerWidth + firstCardLeftMargin;
  }
  return distanceToNextCard - 10;
};

const getPreviousPosition = () => {
  const currentPosition = getCurrentPosition();

  const firstPartiallyVisibleCard = Math.floor(
    (-1 * currentPosition - firstCardLeftMargin) / cardWidthAndRightMargin
  );

  const distanceToCardEndFromSlideStart =
    firstPartiallyVisibleCard * cardWidthAndRightMargin + firstCardLeftMargin;

  const distanceNeeded = distanceToCardEndFromSlideStart - containerWidth;
  if (distanceNeeded > 0) {
    return -distanceNeeded;
  }
  return 0;
};

nextButton.addEventListener("click", (event) => {
  transformSlide(-getNextPosition());
});

previousButton.addEventListener("click", (event) => {
  transformSlide(getPreviousPosition());
});

document.addEventListener("DOMContentLoaded", function () {
  var menuContainerSpans = document.querySelectorAll(
    ".menu-container-span, .headerMenu .close"
  );
  var liContainer = document.querySelector(".li-container");
  var menuItems = document.querySelectorAll(".li-container ul li");

  menuContainerSpans.forEach(function (element) {
    element.addEventListener("click", function () {
      if (
        liContainer.style.display === "none" ||
        liContainer.style.display === ""
      ) {
        liContainer.style.display = "block";
        fadeIn(liContainer);
        menuItems.forEach(function (item) {
          item.style.display = "block";
          fadeIn(item);
        });
      } else {
        fadeOut(liContainer);
        menuItems.forEach(function (item) {
          fadeOut(item);
        });
      }
    });
  });

  function fadeIn(element) {
    var opacity = 0;
    element.style.opacity = opacity;

    var fadeInInterval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 90);
  }

  function fadeOut(element) {
    var opacity = 1;
    element.style.opacity = opacity;

    var fadeOutInterval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        element.style.display = "none";
        clearInterval(fadeOutInterval);
      }
    }, 90);
  }
});

const menuburg = document.querySelector(".menuburg");
const menuMobile = document.querySelector(".menu.mobile");
const close = document.querySelector(".close");
menuburg.addEventListener("click", (e) => {
  menuMobile.style.display = "block";
});

close.addEventListener("click", (e) => {
  menuMobile.style.display = "none";
});

let mybutton = document.getElementById("go-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const footerEl = document.querySelectorAll(".footer-box");
// const apiEl = document.querySelectorAll("#api");
// const showEl = document.querySelector("#show")
// apiEl.map(async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     showEl.innerHRML = ` <div class="product-item">
//     <img src=${data.image} alt="">`;
//   } catch {
//     err;
//   }
//   {
//     alert(err);
//   }
// });
