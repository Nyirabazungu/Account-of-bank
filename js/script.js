// business logic
function Account(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.Initialamout=Initialamout
    this.deposit= deposit;
    this.withdraw=withdraw;
    totalamount=Initialamout+this.deposit
    totalbalance=totalamount-this.withdraw 
  }
  
  account.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
    $("ul#account").text("<li><span class='account'>" + newAccount.firstName + "</span></li>");
  }
  
  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $("ul#contacts").text("<li><span class='account'>" + newContact.firstName + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  }); 
