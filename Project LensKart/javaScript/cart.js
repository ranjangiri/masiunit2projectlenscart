let currentUsr = JSON.parse(localStorage.getItem("currentUser"));
if (currentUsr == null) {
  currentUsr = [
    {
      fname: "guest",
    },
  ];
}

window.addEventListener("load", appendingCart);
function appendingCart() {
  var data = JSON.parse(localStorage.getItem(`${currentUsr[0].fname}cartdata`));
  var parent1 = document.getElementsByClassName("parent");
  parent1[0].textContent = "";
  let cartBox = document.getElementsByClassName("table_2")[0];
  var ttp = 0;
  for (i in data) {
    ttp += data[i].price * data[i].qty;
    var tr = document.createElement("tr");
    tr.id = "tr" + i;
    tr.innerHTML = `
            <td ><img class="pimage"  src="https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13778-c2-eyeglasses_g_9929.jpg" alt="ranjan"></td>
            <td><table>
                <tr><td><button value=${i} onclick="fun1([1,this.value])" class="btn-style">+</button></td></tr>
                <tr><td id="qty${i}" class="smallbox">${data[i].qty}</td></tr>
                <tr><td><button value=${i}  onclick="fun1([0,this.value])" class="btn-style">–</button></td></tr>
            </table></td>
            <td>product Price :<br>₹${data[i].price}</td>
            <td><table><tr></tr>
            <tr></tr>
            <tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr><td style="color:grey">selling fast very few left</td></tr></table></td>
            <td id="subtotal${i}">Subtotal Price:<br>₹${
      data[i].price * data[i].qty
    }
                </td>
            <td><button value=${i} onclick="remove(this.value)" class="remove-btn">×</button></td>
        
        `;

    parent1[0].appendChild(tr);
  }
  var tr1 = document.createElement("div");
  cartBox.textContent = "";
  tr1.setAttribute("class", "fixed_tr");
  tr1.innerHTML = `<div class="totalprice" ;>Order Total<span class="prc">₹${ttp}<span></div>

    <div  class="colorp" onclick="checkOut()">PROCEED TO CHECKOUT</div>`;
  cartBox.appendChild(tr1);

  totalprice();
}

function checkOut() {
  window.location.href = "checkout.html";
}

function totalprice() {
  let tr = document.getElementsByClassName("totalprice")[0];
  tr.innerHTML = "2";
  let data = JSON.parse(localStorage.getItem(`${currentUsr[0].fname}cartdata`));
  let ttp = 0;
  for (i1 in data) {
    ttp += data[i1].price * data[i1].qty;
  }
  tr.innerHTML = `<div class="totalprice" ;>Order Total:<span class='prc' style="color:chocolate;">₹${ttp}<span></div>`;
}

function fun1(a) {
  console.log(a);
  if (a[0] == "1") {
    var tempdata = JSON.parse(
      localStorage.getItem(`${currentUsr[0].fname}cartdata`)
    );
    for (j in tempdata) {
      if (j == a[1]) {
        var qty = document.getElementById("qty" + a[1]);
        var subtotal = document.getElementById("subtotal" + a[1]);
        qty.innerHTML = `${tempdata[j].qty + 1}`;
        var newqty = tempdata[j].qty + 1;
        subtotal.innerHTML = `Subtotal Price:<br>₹${
          tempdata[j].price * newqty
        }`;
        tempdata[j].qty = tempdata[j].qty + 1;
        localStorage.setItem(
          `${currentUsr[0].fname}cartdata`,
          JSON.stringify(tempdata)
        );

        totalprice();
      }
    }
  } else {
    var tempdata = JSON.parse(
      localStorage.getItem(`${currentUsr[0].fname}cartdata`)
    );
    for (q in tempdata) {
      if (q == a[1]) {
        var qty = document.getElementById("qty" + a[1]);
        var subtotal = document.getElementById("subtotal" + a[1]);
        var res = tempdata[q].qty - 1;
        tempdata[q].qty = res;

        if (res < 0) {
          res = 0;
          tempdata[q].qty = 0;
          qty.innerHTML = `${0}`;
          subtotal.innerHTML = `Subtotal Price:<br>₹${tempdata[q].price * res}`;
          localStorage.setItem(
            `${currentUsr[0].fname}cartdata`,
            JSON.stringify(tempdata)
          );
          totalprice();
        } else {
          qty.innerHTML = `${res}`;
          subtotal.innerHTML = `Subtotal Price:<br>₹${tempdata[q].price * res}`;
          localStorage.setItem(
            `${currentUsr[0].fname}cartdata`,
            JSON.stringify(tempdata)
          );
          totalprice();
        }
      }
    }
  }
}

function remove(a) {
  var remove1 = document.getElementById("tr" + a);
  var tempdata1 = JSON.parse(
    localStorage.getItem(`${currentUsr[0].fname}cartdata`)
  );
  for (i2 in tempdata1) {
    if (i2 == a) {
      tempdata1.splice(i2, 1);
    }
  }
  localStorage.setItem(
    `${currentUsr[0].fname}cartdata`,
    JSON.stringify(tempdata1)
  );

  remove1.remove();
  updateCartCounter();
  emptyCart();
  totalprice();
}
window.addEventListener("load", emptyCart);
function emptyCart() {
  let parent1 = document.getElementsByClassName("parent");
  let c = JSON.parse(localStorage.getItem(`${currentUsr[0].fname}cartdata`));

  if (!c || c.length == 0) parent1[0].innerHTML = "Your Cart is Empty ";
}
function cartPopUp() {
  appendingCart();
  let item = document.querySelector(".cart_wrapper");
  item.classList.add("cart_pop");
}
function cartPopOut() {
  let item = document.querySelector(".cart_wrapper");
  item.classList.remove("cart_pop");
}
