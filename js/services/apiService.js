
app.service('apiService', function($http) {

    // GET request - Fetch users
    this.getUsers = function() {
        return $http.get(
            'https://jsonplaceholder.typicode.com/users'
        );
    };

    // POST request - Add a new user
    this.addUser = function(user) {
        return $http.post(
            'https://jsonplaceholder.typicode.com/users',
            user
        );
    };

});
