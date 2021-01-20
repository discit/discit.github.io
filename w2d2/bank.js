window.onload = init;
function init() {
    document.getElementById("create").onclick = createAccount;
}


var accountInfoList = [];   
var makeAccount = function () {
    var balance = 0;
    var accountName = "";
    function setAccount(val) { 
        privateCounter += val;
    }
    return { 
        setAccout: function (name, deposit) { accountName = name; balance = deposit},
        getAccountName: function () { return accountName; },
        getBalance: function () { return balance; }
    }
};


function createAccount() {
    let acc = makeAccount();
    let name = (document.getElementById("name").value)?document.getElementById("name").value:"";
    let deposit = (document.getElementById("deposit").value)?document.getElementById("deposit").value:"";
    acc.setAccout(name, deposit);

    accountInfoList[accountInfoList.length] = acc;
     let textareaValue = "";
    for (let a of accountInfoList) {
        textareaValue += "Account Name:" + a.getAccountName() + "\tBalance: " + a.getBalance() + "\n";
    }
    document.getElementById("textarea").value = textareaValue;      
}



