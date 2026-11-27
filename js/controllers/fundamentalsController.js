
app.controller('FundamentalsController', function($scope) {

    // Two-way data binding
    $scope.studentName = "Amulya";

    // List of subjects
    $scope.subjects = [
        "JavaScript",
        "AngularJS",
        "HTML",
        "CSS"
    ];

    // Add a new subject
    $scope.newSubject = "";

    $scope.addSubject = function() {

        if ($scope.newSubject.trim() !== "") {
            $scope.subjects.push($scope.newSubject);
            $scope.newSubject = "";
        }

    };

    // Show or hide a message
    $scope.showMessage = true;

});
