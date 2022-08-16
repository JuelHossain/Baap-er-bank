const $ = (id) => {
  return document.getElementById(id);
};

// show values
const deposit = $("deposit");
const withdraw = $("withdraw");
const balance = $("balance");

// inputs
const depositInput = $("depositInput");
const withdrawInput = $("withdrawInput");

// error fields
const depositError = $("depositError");
const withdrawError = $("withdrawError");

// buttons
const withdrawButton = $("withdrawButton");
const depositButton = $("depositButton");

// notification

const toast = (text, el, cl) => {
  const ts = document.createElement("p");
  ts.classList = `absolute top-2 right-2 ${cl} text-white p-2 rounded-xl text-xs `;
  ts.innerText = text;
  el.appendChild(ts);
  setTimeout(() => el.removeChild(ts), 3000);
};

// events handler
const depositHandler = (e) => {
  const value = depositInput.value;
  if (value === "") {
    toast(
      "Please Give Me An Amount",
      depositInput.parentElement,
      "bg-violet-500"
    );
  } else {
    deposit.innerText = parseInt(deposit.innerText) + parseInt(value);
    balance.innerText = parseInt(balance.innerText) + parseInt(value);
    depositInput.value = "";
  }
};
const withdrawHandler = (e) => {
  const value = withdrawInput.value;
  if (value === "") {
    toast(
      "Please Give Me An Amount",
      withdrawInput.parentElement,
      "bg-rose-500"
    );
  } else {
    withdraw.innerText = parseInt(withdraw.innerText) + parseInt(value);
    balance.innerText = parseInt(balance.innerText) - parseInt(value);
    withdrawInput.value = "";
  }
};

depositButton.addEventListener("click", depositHandler);
withdrawButton.addEventListener("click", withdrawHandler);
