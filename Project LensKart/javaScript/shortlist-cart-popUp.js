function wishlist(x) {
  console.log(currentUsr);
  let shortlistBox = document.getElementById(`shortlist`);

  if (x == undefined) {
    shortlistBox.classList.toggle("show_wishlist");
  } else {
    shortlistBox.classList.add("show_wishlist");
  }
}

window.addEventListener("load", shortlistItems);

function shortlistItems() {
  let shortlistContainer = document.getElementById("shortlistBox");

  let shortlistObj = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}shortlist`)
  );

  if (shortlistObj == null || shortlistObj.length == 0) {
    shortlistContainer.innerText =
      "You have not selected any product to compare.Please add products of your choice and view here.";
    return;
  } else {
    shortlistContainer.innerText = "";
    shortlistObj.forEach((element) => {
      let productBox = document.createElement("div");
      productBox.setAttribute("class", "shortlist_product_box");
      let imgBox = document.createElement("img");
      imgBox.setAttribute("class", "shortlist_product_image");
      imgBox.src = element.imageFg;

      let productDetail = document.createElement("div");
      productDetail.setAttribute("class", "shortlist_product_detail");
      productDetail.innerHTML = `<p>${element.productcategory}</p><p>₹${element.price}</p>`;

      let clear = document.createElement("button");
      clear.innerText = "X";
      clear.setAttribute("class", "shortlist_product_clear");
      clear.onclick = function () {
        clearShortlistProduct(element);
      };

      productBox.append(imgBox, productDetail, clear);
      shortlistContainer.appendChild(productBox);
    });
  }
}

function clearShortlistProduct(el) {
  let shortlistdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}shortlist`)
  );
  if (shortlistdata.length != 0) {
    for (let i = 0; i < shortlistdata.length; i++) {
      if (Number(shortlistdata[i].productid) == Number(el.productid)) {
        shortlistdata.splice(i, 1);
        localStorage.setItem(
          `${currentUsr[0].fname}shortlist`,
          JSON.stringify(shortlistdata)
        );
        var red = shortlistdata[i];
        break;
      }
    }
    updateCounter();
    fillNone(el);
    shortlistItems();
  }
}

window.addEventListener("load", updateCounter);

function updateCounter() {
  let currentCount = document.getElementById("count");
  let Count = document.getElementById("shortlist_count");
  let shortlistdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}shortlist`)
  );

  if (shortlistdata == null || shortlistdata.length == 0) {
    currentCount.classList.remove("counter_hide");
    Count.innerText = 0;
  } else {
    currentCount.classList.add("counter_hide");
    currentCount.innerText = shortlistdata.length;

    Count.innerText = shortlistdata.length;
  }
}
window.addEventListener("load", updateCartCounter);

function updateCartCounter() {
  let currentCount = document.getElementById("counter");
  let Count = document.getElementById("cart_count");
  let cartdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}cartdata`)
  );

  if (cartdata == null || cartdata.length == 0) {
    currentCount.classList.remove("counter_hide");
    Count.innerText = 0;
  } else {
    currentCount.classList.add("counter_hide");
    currentCount.innerText = cartdata.length;

    Count.innerText = cartdata.length;
  }
}
