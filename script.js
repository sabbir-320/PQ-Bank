// Login button event handler
const loginButton = document.getElementById('button')
loginButton.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//transaction deposit button event handler
function update(p, id){
    const CurrentDeposit = document.getElementById(id).innerText;
    const updateCurrentDeposit = parseFloat(CurrentDeposit);
    const totalCurrentDeposit = p + updateCurrentDeposit;
    document.getElementById(id).innerText = totalCurrentDeposit;
}
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const clickNewAmount = document.getElementById('amountPlace').value;
    const clickedDepositNumberAmount = parseFloat(clickNewAmount);

    update(clickedDepositNumberAmount, 'current-deposit')
    update(clickedDepositNumberAmount, 'balance')
})


// transaction withdraw button event handler
const withdrawBtn = document.getElementById('click-withdraw');
withdrawBtn.addEventListener('click', function(){
    const clickAmount = document.getElementById('withdrawPlace').value;
    const clickedDepositAmount = parseFloat(clickAmount);

    const currentWithdraw = document.getElementById('current-withdraw').innerText;
    const currentAmountConvertToNumber = parseFloat(currentWithdraw);
    const totalWithdraw = clickedDepositAmount + currentAmountConvertToNumber;

    document.getElementById('current-withdraw').innerText = totalWithdraw;
    document.getElementById('withdrawPlace').value = '';


    const currentBalance = document.getElementById('total-balance').innerText;
    const newBalance = parseFloat(currentBalance);
    const totalBalance = newBalance - totalWithdraw

    document.getElementById('total-balance').innerText = totalBalance;


})