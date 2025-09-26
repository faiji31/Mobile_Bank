const validpin = 1234;
const transationData = [];

// helpers
function getInputValueNumber(id) {
  return parseInt(document.getElementById(id).value) || 0;
}
function getInputValueInner(id) {
  return parseInt(document.getElementById(id).innerText) || 0;
}
function toggoling(id) {
  const forms = document.getElementsByClassName("forms");
  for (const f of forms) f.style.display = "none";
  document.getElementById(id).style.display = "block";
}
function renderTransactions() {
  const container = document.getElementById("transation-list");
  container.innerHTML = "";
  transationData.forEach((t) => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center border border-gray-200 bg-white rounded-xl p-4 shadow-sm";
    div.innerHTML = `
      <div>
        <h1 class="font-semibold">${t.name}</h1>
        <p class="text-sm text-gray-500">${t.date}</p>
      </div>
      <div><i class="fa-solid fa-ellipsis-vertical text-gray-400"></i></div>
    `;
    container.appendChild(div);
  });
}

// Add Money
document.getElementById("add-money-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const account = document.getElementById("account-number").value;
  const addMoney = getInputValueNumber("add-money");
  const pin = getInputValueNumber("pin-number");
  const balance = getInputValueInner("tk");

  if (account.length < 11) return alert("Invalid account number");
  if (pin !== validpin) return alert("Invalid PIN");

  document.getElementById("tk").innerText = balance + addMoney;

  transationData.push({ name: "Add Money", date: new Date().toLocaleString() });
  alert("Money Added Successfully!");
});

// Cash Out
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agent = document.getElementById("agent-number").value;
  const withdraw = getInputValueNumber("withdraw-money");
  const pin = getInputValueNumber("pinnumber");
  const balance = getInputValueInner("tk");

  if (agent.length < 11) return alert("Invalid agent number");
  if (pin !== validpin) return alert("Invalid PIN");
  if (withdraw > balance) return alert("Not enough balance");

  document.getElementById("tk").innerText = balance - withdraw;

  transationData.push({ name: "Cash Out", date: new Date().toLocaleString() });
  alert("Cash Out Successful!");
});

// menu buttons
document.getElementById("add-btn").addEventListener("click", () => toggoling("add-money-bank"));
document.getElementById("cash-btn").addEventListener("click", () => toggoling("cash-out"));
document.getElementById("transation-btn").addEventListener("click", () => {
  toggoling("transation");
  renderTransactions();
});
