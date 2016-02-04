Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;
    var nameVar = event.target.registerName.value;
    var surnameVar = event.target.registerSurname.value;

    Accounts.createUser({
      email: emailVar,
      password: passwordVar,
      name: nameVar,
      surname: surnameVar
    });
  }
});
