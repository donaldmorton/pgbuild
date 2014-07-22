angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	//$scope.fire = $firebase(new Firebase('https://donaldio.firebaseio.com/'));
	//$scope.fire.$add({'hola':"hola2"});
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
	
})

.controller('homeCtrl', function($scope) {
	
})


.controller('expCtrl', function($scope, $ionicModal) {

	 $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }

 $ionicModal.fromTemplateUrl('templates/my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })

 .then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

	
});

