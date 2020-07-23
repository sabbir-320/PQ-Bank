// Login button event handler
const loginButton = document.getElementById('button')
loginButton.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//transaction deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
 const clickedDepositNumberAmount =  convertAmount('deposit-amount')

 displayAmount(clickedDepositNumberAmount, 'current-deposit')
 displayAmount(clickedDepositNumberAmount, 'balance')
})

// transaction withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
 const totalClickWithdraw = convertAmount('withdraw-amount')
 displayAmount(totalClickWithdraw, 'withdraw')
 displayAmount(-1 * totalClickWithdraw, 'balance')
})



function convertAmount (id){
    const stringAmount = document.getElementById(id).value;
    const numAmount = parseFloat(stringAmount);
    document.getElementById(id).value="";
    return numAmount;
}

function displayAmount(deposit, id){
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = deposit + currentAmountNumber;
    document.getElementById(id).innerText = totalAmount;
}




