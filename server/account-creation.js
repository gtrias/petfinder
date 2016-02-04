Accounts.onCreateUser(function(options, user) {
  // Basic Role Setup
  user.roles = ["User"];
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};

   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.name;
   user.profile.lastName = options.surname;

   // Returns the user object
   return user;
});
