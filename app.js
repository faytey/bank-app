const deposits = [];
const withdrawals = [];
const total = document.getElementById('totalBalance');
let accountBalance = 100;
let deposit = document.getElementById('deposit');
const btnDeposit = document.getElementById('btnDeposit');
let withdraw = document.getElementById('withdraw');
const btnWithdraw = document.getElementById('btnWithdraw');
const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
});

btnDeposit.addEventListener('click', () => {
    if(isNaN(deposit.value)){
        alert("Please enter a number");
        return deposit.value = '';
    } else {
        if(deposit.value < 10 || deposit.value > 100000){
            alert("Please enter a number not lesser than 10 or greater than 100,000");
            return deposit.value = '';
        } else {
            deposits.push(Number(deposit.value));
            accountBalance += (Number(deposit.value));
            let totalFormatted = formatter.format(accountBalance);
            total.innerHTML = totalFormatted;
            return deposit.value = '';
        }
    }
});

btnWithdraw.addEventListener('click', () => {
    if(isNaN(withdraw.value)){
        alert("Please enter a number");
        return withdraw.value = '';
    } else {
        if(withdraw.value > accountBalance - 10){
            alert("You need to have a minimum fixed amount of 10 naira in your account");
            return withdraw.value = '';
        } else {
            withdrawals.push(Number(withdraw.value));
            accountBalance -= (Number(withdraw.value));
            let totalFormatted = formatter.format(accountBalance);
            total.innerHTML = totalFormatted;
            return withdraw.value = '';
        }
    }
});

let totalFormatted = formatter.format(accountBalance);
total.innerHTML = totalFormatted;