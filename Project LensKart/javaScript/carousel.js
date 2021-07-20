window.addEventListener("load", carouselSlide);
window.addEventListener("load", prodSlider);

function carouselSlide() {
  let carousel = document.getElementById("carousel");
  let image = document.querySelector("#carousel img");

  const image_1 =
    "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/RevisedAllbannersBanner01Updated_8thJune2021.jpg";
  const image_2 =
    "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/14thMay_Eyeglasses_DesktopBanner_17thMay21.jpg";
  const image_3 =
    "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Desktop_SliderBannerv2_14thMay.jpg";
  const image_4 =
    "https://static1.lenskart.com/media/desktop/img/Mar21/FlexAppeal_Desktop_12thMay21.png";
  const image_5 =
    "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Aquacolor_Desktop_13thApril21.jpg";
  const image_6 =
    "http://static1.lenskart.com/media/desktop/img/Apr21/1912x360.jpg";
  const image_7 =
    "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/MegaSale_Desktop_19thApril21.jpg";

  let arr = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];

  let i = 0;
  let myCarousel = function () {
    let x;

    i++;
    if (i >= arr.length) i = 0;

    function addimg(index) {
      let btns = document.querySelectorAll("#carousel button");
      if (btns.length > 0) {
        btns[0].parentElement.removeChild(btns[0]);
        btns[1].parentElement.removeChild(btns[1]);
      }
      image.src = `${arr[index]}`;

      let forward = document.createElement("button");
      forward.setAttribute("class", "fdbtn");
      forward.innerHTML = '<i class="fas white fa-chevron-right"></i>';
      forward.onclick = function () {
        x = fd(index, arr);
      };

      let backward = document.createElement("button");
      backward.innerHTML = '<i class="fas white fa-chevron-left"></i>';
      backward.setAttribute("class", "bdbtn");
      backward.onclick = function () {
        x = bd(index, arr);
      };

      carousel.append(forward, backward);

      if (x != undefined) return x;
      else return index;
    }

    function fd(index, arr) {
      if (index >= arr.length - 1) index = 0;
      else index++;
      return addimg(index);
    }

    function bd(index, arr) {
      if (index == 0) index = arr.length - 1;
      else index--;
      return addimg(index);
    }

    i = addimg(i);
  };
  let carouselTimer = setInterval(myCarousel, 5000);
}

function prodSlider() {
  let slider = document.querySelectorAll("#product_slider");
  let leftSlide = document.querySelectorAll("#slideLeft");
  let rightSlide = document.querySelectorAll("#slideRight");

  for (let i = 0; i < slider.length; i++) {
    leftSlide[i].addEventListener("click", slideLeft);
    rightSlide[i].addEventListener("click", slideRight);
    function slideLeft() {
      slider[i].style.transform = "translateX(-50%)";
      leftSlide[i].style.display = "none";
      rightSlide[i].style.display = "block";

      setTimeout(slideRight, 4000);
    }
    function slideRight() {
      slider[i].style.transform = "translateX(0%)";
      leftSlide[i].style.display = "block";
      rightSlide[i].style.display = "none";

      setTimeout(slideLeft, 4000);
    }

    setTimeout(slideLeft, 3000);
  }
}

function toggle(i) {
  let wrapper = document.querySelectorAll("#wrapper_description");
  let plus = document.querySelectorAll("#plus");
  if (plus[i].textContent == "+") plus[i].textContent = "-";
  else plus[i].textContent = "+";

  wrapper[i].classList.toggle("description");
}
