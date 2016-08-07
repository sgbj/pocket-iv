angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('IvCtrl', function($scope, $timeout, $ionicScrollDelegate, iv) {
  $scope.pokemon = iv.pokemon;
  $scope.dust = iv.dust;
  $scope.form = { };

  $scope.calculate = function () {
    $scope.loading = true;
    $scope.results = iv.calculate({
      pokemonId: $scope.form.pokemonId || 0, 
      hp: $scope.form.hp || 0, 
      cp: $scope.form.cp || 0, 
      dust: $scope.form.dust || 0, 
      isPowered: $scope.form.isPowered === true
    });
    $timeout(function () {
      $scope.loading = false;
      $ionicScrollDelegate.resize();
    }, 200);
  };
});