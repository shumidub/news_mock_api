

// Using named route parameters to simulate getting a specific user
// Sandbox.define('/users/{username}', 'GET', function(req, res) {
//     // retrieve users or, if there are none, init to empty array
//     state.users = state.users || [];

//     // route param {username} is available on req.params
//     var username = req.params.username;

//     // log it to the console
//     console.log("Getting user " + username + " details");

//     // use lodash to find the user in the array
//     var user = _.find(state.users, { "username": username});
    
//     return res.json(user);
// });
