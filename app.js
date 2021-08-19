// Update Values

function updateValue(selector, isPlus) {
  // get qunatity
  let input = document.getElementById(selector + "-quantity");
  let quantity = parseInt(input.value);

  //   check condition for plus and minus and showing value in ui
  if (isPlus == "plus") {
    input.value = quantity + 1;
  } else if (quantity > 0) {
    input.value = quantity - 1;
  }

  //   set changed value in quantity,
  quantity = input.value;

  //   update UI
  updateUI(selector, quantity);

  //   Total Update
  totalUpdate();
}

// update right side ui for product pricing
function updateUI(selector, quantity) {
  let target = document.getElementById(selector + "-price");
  if (selector == "phone") {
    target.innerText = quantity * 1219;
  } else {
    target.innerText = quantity * 59;
  }
}

// Total update or total cost
function totalUpdate() {
  let mobilePrice =
    parseInt(document.getElementById("phone-quantity").value) * 1219;
  let casePrice = parseInt(document.getElementById("case-quantity").value) * 59;
  let subtotal = mobilePrice + casePrice;
  let tax = subtotal / 10;
  let total = subtotal + tax;

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}

// Button acions

document.getElementById("phone-plus").addEventListener("click", function () {
  updateValue("phone", "plus");
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateValue("phone", "minus");
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateValue("case", "plus");
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateValue("case", "minus");
});
