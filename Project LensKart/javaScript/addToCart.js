// single power js
function addtocart() {
  var cartdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}cartdata`)
  );
  var productdetails = JSON.parse(localStorage.getItem("productDetails"));

  if (productdetails) {
    var image = productdetails[0].imageBg;
    var price = productdetails[0].price;
    var qty = productdetails[0].qty;
    var description = productdetails[0].productName;
    var productid = productdetails[0].productid;
  }
  var newData = {
    image,
    description,
    price,
    productid,
    qty,
  };

  if (!cartdata || cartdata.length == 0) {
    var arr = [];
    arr.push(newData);
    localStorage.setItem(`${currentUsr[0].fname}cartdata`, JSON.stringify(arr));
    appendingCart();
    updateCartCounter();
    addCartPopOut();
    cartPopUp();
  } else {
    cartdata.push(newData);
    localStorage.setItem(
      `${currentUsr[0].fname}cartdata`,
      JSON.stringify(cartdata)
    );
    appendingCart();
    updateCartCounter();
    addCartPopOut();
    cartPopUp();
  }
}

// zero power js

function addtocartX() {
  var cartdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}cartdata`)
  );
  var productdetails = JSON.parse(localStorage.getItem("productDetails"));

  if (productdetails) {
    var image = productdetails[0].imageBg;
    var price = productdetails[0].price;
    var qty = productdetails[0].qty;
    var description = productdetails[0].productName;
    var productid = productdetails[0].productid;
  }
  var newData = {
    image,
    description,
    price,
    productid,
    qty,
  };

  if (cartdata) {
    cartdata.push(newData);
    localStorage.setItem(
      `${currentUsr[0].fname}cartdata`,
      JSON.stringify(cartdata)
    );
    appendingCart();
    updateCartCounter();
    addCartPopOutX();
    cartPopUp();
  } else {
    var arr = [];
    arr.push(newData);
    localStorage.setItem(`${currentUsr[0].fname}cartdata`, JSON.stringify(arr));
    appendingCart();
    updateCartCounter();
    addCartPopOutX();
    cartPopUp();
  }
}

//no lens frame only
function addtocartY() {
  var cartdata = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}cartdata`)
  );
  var productdetails = JSON.parse(localStorage.getItem("productDetails"));

  if (productdetails) {
    var image = productdetails[0].imageBg;
    var price = productdetails[0].price;
    var qty = productdetails[0].qty;
    var description = productdetails[0].productName;
    var productid = productdetails[0].productid;
  }
  var newData = {
    image,
    description,
    price,
    productid,
    qty,
  };

  if (!cartdata || cartdata.length == 0) {
    var arr = [];
    arr.push(newData);
    localStorage.setItem(`${currentUsr[0].fname}cartdata`, JSON.stringify(arr));
    appendingCart();
    updateCartCounter();
    cartPopUp();
  } else {
    cartdata.push(newData);
    localStorage.setItem(
      `${currentUsr[0].fname}cartdata`,
      JSON.stringify(cartdata)
    );
    appendingCart();
    updateCartCounter();
    cartPopUp();
  }
}
