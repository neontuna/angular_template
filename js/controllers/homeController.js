myapp.controller('HomeCtrl', ['$scope', '$stateParams', 
  function($scope, $stateParams){

  $scope.id = $stateParams.id;
  $scope.test = "Hello Angular World.";

}]);