'use strict'

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {
  
  $scope.userLoaded = false;

  // UsersService.getUsers().then(function (response) {
  //   $scope.users = response.data
  //   $scope.userLoaded = true
  // })

  // PostsService.getPosts().then(function (response) {
  //   $scope.posts = response.data
  //   $scope.userLoaded = true
  // })

  $q.all({
    obj1: UsersService.getUsers(),
    obj2: PostsService.getPosts()
  }).then(function(values){
    $scope.users = values.obj1.data;
    $scope.posts = values.obj2.data;
    $scope.userLoaded = true;
  });


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
