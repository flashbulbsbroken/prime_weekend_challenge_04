var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {


    //empty array for task items
    $scope.taskList = [];

    $scope.numTasks = "";

    //sets date for jumbotron header
    $scope.currentTime = moment().format('dddd, MMM Do');

    //pushes text and date from input into empty array
    $scope.addTask = function(event) {

            var sendData = new createTask($scope.taskName, $scope.taskDate);

            $http({method: "POST", url: "/taskRoute/add", data: sendData}).then(function (response) {
                console.log(response);
                //Upon successful post, get items from server
                $scope.getData();
            });
    };

    var createTask = function(taskParam, dueParam) {
        return {
            task: taskParam,
            due: dueParam
        };
    };



    //changes task to tasks when applicable
    $scope.totalTasks = function() {

        if($scope.taskList.length > 1) {

            $scope.numTasks = $scope.taskList.length + ' tasks';

        }if($scope.taskList.length == 1) {

            $scope.numTasks = $scope.taskList.length + ' task';

        }else{

            $scope.numTasks = $scope.taskList.length + ' tasks';

        }
        return $scope.numTasks;
    };

    //deletes item from array when delete button is clicked
    $scope.delete = function(index) {
        $scope.taskList.splice(index, 1);
    };

    $scope.getData = function(){
        $http({method:"GET", url:"/taskRoute/get"}).then(function(response) {

            console.log(response);

            //Clear out what is currently on the screen
            $scope.taskList = [];

            //Add fresh data to screen
            for (var i = 0; i < response.data.length; i++) {
                $scope.taskList.push(response.data[i]);
            }

            $scope.taskName = ""; //resets text input

            $scope.taskDate = ""; //resets date input

        });
    };

    $scope.getData();


    //$scope.fetchTasks();





}]);
