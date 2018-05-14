'use strict'

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {

  $scope.userLoaded = false;
  
  $scope.user = {}

  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data;
    $scope.userLoaded = true;
  })  

  $scope.editUser = function (myUser) {

    UsersService.editUser(myUser, $scope.user.id).then(function (response) {
      console.log(response);
    })
  }
})
