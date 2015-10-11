var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {


    //empty array for task items
    $scope.taskList = [];

    $scope.numTasks = "";

    var sendData = {tasks: $scope.taskName};

    $http({type:"GET", url:"/taskRoute/get"}).then(function(response) {

        console.log(response);

        for (var i = 0; i < response.data.length; i++) {
            $scope.taskList.push(response.data[i]);
        }

        $scope.taskName = ""; //resets text input

        $scope.taskDate = ""; //resets date input

    });


    //sets date for jumbotron header
    $scope.currentTime = moment().format('dddd, MMM Do');

    //pushes text and date from input into empty array
    $scope.addTask = function(event) {

        $http({type: "POST", url: "/taskRoute/add", data: sendData}).then(function (url) {
            createTask(task, due).then(function (response) {
                console.log(response);
                $scope.taskList.push({task:$scope.taskName, date:$scope.taskDate});
                console.log(response.data.text);
            });


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




    //$scope.fetchTasks();





}]);
