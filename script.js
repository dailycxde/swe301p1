document.addEventListener("DOMContentLoaded", () => {
    const balanceDisplay = document.getElementById("balance");
    balanceDisplay.innerText = "0 TL";
  });
  
  function getAmountInput(index) {
    return document.getElementsByClassName("input-amount")[index];
  }
  
  let processWithdrawal = () => {
    const withdrawalInput = document.getElementById("withdrawal-input");
    const balanceDisplay = document.getElementById("balance");
    let currentBalance = parseFloat(balanceDisplay.innerText);
  
    const withdrawalAmount = parseFloat(withdrawalInput.value);
    
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
      if (withdrawalAmount <= currentBalance) {
        currentBalance -= withdrawalAmount;
        balanceDisplay.innerText = `${currentBalance} TL`;
        withdrawalInput.value = '';
      } else {
        alert("Insufficient funds");
        withdrawalInput.value = '';
      }
    } else {
      alert("Please enter a valid amount");
      withdrawalInput.value = '';
    }
  }
  
  function processDeposit() {
    const depositInput = document.getElementById("deposit-input");
    const balanceDisplay = document.getElementById("balance");
    let currentBalance = parseFloat(balanceDisplay.innerText);
  
    const depositAmount = parseFloat(depositInput.value);
    
    if (!isNaN(depositAmount) && depositAmount > 0) {
      currentBalance += depositAmount;
      balanceDisplay.innerText = `${currentBalance} TL`;
      depositInput.value = '';
    } else {
      alert("Please enter a valid amount");
      depositInput.value = '';
    }
  }  