'use strict'

userApp.controller('UserListCtrl', function ($scope, UsersService, PostsService) {
  
  $scope.userLoaded = false

  UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    $scope.userLoaded = true
  })

  PostsService.getPosts().then(function (response) {
    $scope.posts = response.data
    $scope.userLoaded = true
  })


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
