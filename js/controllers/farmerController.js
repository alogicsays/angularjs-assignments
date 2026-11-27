
app.controller('FarmerController', function($scope) {

    // Farmer details
    $scope.farmer = {
        name: '',
        mobile: '',
        address: '',
        village: '',
        crop: ''
    };

    // Registration function
    $scope.registerFarmer = function(form) {

        if (form.$valid) {

            $scope.successMessage =
                "Farmer registered successfully!";

            console.log("Farmer Details:", $scope.farmer);

        } else {

            $scope.successMessage = "";

        }

    };

});
