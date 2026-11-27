
app.controller('ApiController', function($scope, apiService) {

    $scope.users = [];

    $scope.loading = false;
    $scope.errorMessage = '';
    $scope.successMessage = '';

    // Fetch users using GET
    $scope.fetchUsers = function() {

        $scope.loading = true;
        $scope.errorMessage = '';

        apiService.getUsers()

            .then(function(response) {

                $scope.users = response.data;

            })

            .catch(function(error) {

                $scope.errorMessage =
                    "Unable to fetch users. Please try again.";

            })

            .finally(function() {

                $scope.loading = false;

            });

    };


    // Add user using POST
    $scope.newUser = {
        name: '',
        email: ''
    };

    $scope.addUser = function() {

        $scope.errorMessage = '';
        $scope.successMessage = '';

        apiService.addUser($scope.newUser)

            .then(function(response) {

                $scope.successMessage =
                    "User added successfully!";

                console.log("Added User:", response.data);

                $scope.newUser = {
                    name: '',
                    email: ''
                };

            })

            .catch(function(error) {

                $scope.errorMessage =
                    "Unable to add user. Please try again.";

            });

    };


    // Fetch users when the page loads
    $scope.fetchUsers();

});
