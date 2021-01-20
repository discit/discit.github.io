(function(){
"use strict";
window.onload = function init() {
    document.getElementById("create").onclick = createAccount;
}

var accCreator = (function () {
    let balance = 0;
    let accountName = "";
    return { 
        accountCreate: function(name, amount)
        {
            balance = amount;
            accountName = name;
            return {balance, accountName}
        }
    }
})();

var accountInfoList = [];   

function createAccount() {
    let acc = accCreator.accountCreate(document.getElementById("name").value, document.getElementById("deposit").value);
    accountInfoList.push(acc);
    let textareaValue = "";
    for (let a of accountInfoList) {
        textareaValue += `Account Name: ${a.accountName}\t Balance: ${a.balance}\n`;
    }
    document.getElementById("textarea").value = textareaValue;      
}

})();

