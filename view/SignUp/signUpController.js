/*** Created by Dell on 15-08-2016.*/
var app = angular.module('AnrApp',['ui.bootstrap']);

app.controller('signUpCntrl',['$scope','$http','API','$filter', function ($scope,$http,API,$filter) {
    $scope.data = null || {};
    $scope.Sangat = null || {};
    $scope.Sangat.phoneNumbers =[];
    $scope.Sangat.emailIds =[];
    $scope.getSangatDetails = function () {
        $http.get(API.ANR+'getsangatdata').then(function (result) {
            $scope.Sangat = result.data;
            $scope.Sangat.phoneNumbers =[];
            $scope.Sangat.emailIds = [];
            angular.forEach($scope.Sangat, function (value) {
                $scope.Sangat.phoneNumbers.push(parseInt(value.phonenum, 10));
            })
            var phnNums = $scope.Sangat.phoneNumbers;
            angular.forEach($scope.Sangat, function (value) {
                $scope.Sangat.emailIds.push(value.mailId);
            });
            console.log($scope.Sangat.emailIds);
        },function (failure) {
            bootbox.alert('Problem in Getting Details');
        })
    }
    $scope.getSangatDetails();

    $scope.sendWelcomeMsg = function () {
        $http.post(API.SMSAPI+'&mobile='+$scope.Sangat.registeredNum+'&message='+msg+'&sender=ASHRAM&type=3').then(function (response) {
            console.log(response);
        })
    }

    var msg = "Welcome To Asif Nagar Ashram SMS Portal. You will now get updates of our Ashram.Jai Sachidanand Ji."

    $scope.Save = function () {
        var phoneNum = [];
        var emailId = [];
        $scope.data.phonenum = $scope.data.phonenum;
        $scope.data.mailId = $scope.data.mailId;
        phoneNum = $filter('filter')($scope.Sangat, { phonenum: $scope.data.phonenum }, true);
        emailId = $filter('filter')($scope.Sangat, { mailId: $scope.data.mailId }, true);
        if (phoneNum.length == 0 ) {
            $http.post(API.ANR+'insertsangatdata', $scope.data).then(function (response) {
                $scope.Sangat.registeredNum = parseInt($scope.data.phonenum, 10);
                bootbox.alert("Saved Successfully!");
                $scope.sendWelcomeMsg();
                $scope.getSangatDetails();
                $scope.data.mailId = '';
                $scope.data.rehbar = '';
            },function (failure) {
                bootbox.alert("Error in saving details Please contact Admin!")
            })
        }
        else if(phoneNum.length != 0)
            bootbox.alert("Phone Number Already Exist!");
        else if(emailId.length !=0)
            bootbox.alert("Email Id Already Exist!")
    };
}])


