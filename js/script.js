// business logic
function Account(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.Initialamout=Initialamout
    this.deposit= deposit;
    this.withdraw=withdraw;
    totalAmount=InitiAlamout+this.deposit
    totalBalance=totalAmount-this.withdraw 
  }
  
  account.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
    $("ul#account").text("<li><span class='amount'>" + newAmount.firstName + "</span></li>");
  }
    Balance.prototype.deposit = function(){
                var totalAmount =this.Initialdeposit + deposit;

            }
Balance.prototype.withdraw= function(){
            if(totalAmount==0){
                return"please your balance is broke"
            }
                else if(totalAmount>0){
                    var balance =totalAmount - withdraw;
    
                }
    function resetFields() {
        $("input #Account").val("");
        $("input #initialdeposit").val("");
        $("input #deposit").val("");
        $("input #withdraw").val("");
    }

    // user interface logic
    
   $(document).ready(function() {

    $("form#new-amount").submit(function(event) {
      event.preventDefault();
      $("input").text();
      $(".submit").click();
    });
  
      var newAmount= new Amount(inputtedFirstName, inputtedLastName).val();
    
   $(".check-balance").click(function(){
   var deposit =$("input#new-deposit").val();
   var newbalance= new Balance(inputtedInitialamount,Initialdeposit)
   var withdraw=$("#)
   });
  
