 // login button start here

 var loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function() {
     var name = document.getElementById("name").value;
     var password = document.getElementById("password").value;
    
     if(name == "AAzim" && password == 2812) {
        var loginArea = document.getElementById("login-area");
         loginArea.style.display = "none";
         var transactionArea = document.getElementById("transaction-area");
         transactionArea.style.display = "block";
     }
     else {
        alert("Enter your Name and Password Plz")
     }
 });

// login button end here

//  deposit button start here

 var depositBtn = document.getElementById("addDeposit");

 depositBtn.addEventListener("click", function() {
     var depositAmount = document.getElementById("depositAmount").value;
     if(isNaN(depositAmount) || depositAmount == "") {
        alert("Please........... enter Number");
     }else {
        var depositNumber = parseFloat(depositAmount);

     var currentDeposit = document.getElementById("currentDeposit").innerText;

     var currentDepositNumber = parseFloat(currentDeposit);

     var totalDeposit = currentDepositNumber + depositNumber;

     document.getElementById("currentDeposit").innerHTML = totalDeposit;

     document.getElementById("depositAmount").value = "";
      
     var currentBalance = document.getElementById("currentBalance").innerText;

     var currentBalanceNumber = parseFloat(currentBalance);

      var totalBalance = totalDeposit + currentBalanceNumber;

      document.getElementById("currentBalance").innerHTML = totalBalance;
     }   
 })
//  deposit button end here

//  withdraw button start here

 var withdrawBtn = document.getElementById("withdrawBtn");

 withdrawBtn.addEventListener("click", function() {
    var withdrawAmount = document.getElementById("withdrawAmount").value;
    if(isNaN(withdrawAmount) || withdrawAmount == "") {
        alert("Please.......... enter Number");
    }else {
       var withdrawAmountNumber = parseFloat(withdrawAmount);
       
       var currentWithdraw = document.getElementById("currentWithdraw").innerText;

       var currentWithdrawNumber = parseFloat(currentWithdraw);

       var totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;

       document.getElementById("currentWithdraw").innerHTML = totalWithdraw;

       var currentBalance = document.getElementById("currentBalance").innerText;

       var currentBalanceNumber = parseFloat(currentBalance);

       var totalCurrentBalance = currentBalanceNumber - withdrawAmountNumber;

       document.getElementById("currentBalance").innerHTML = totalCurrentBalance;

       document.getElementById("withdrawAmount").value = "";
    }
 })

//  withdraw button end here