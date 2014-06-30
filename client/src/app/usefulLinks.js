angular.module('usefulLinks', ['ngRoute', 'ngResource']);


angular.module('usefulLinks').controller('headerController', function($scope) {
    $scope.header = 'Je suis un header';
});

angular.module('usefulLinks').controller('notificationsController', function($scope) {
    $scope.notification = 'je suis le notificateur';
});

angular.module('usefulLinks').controller('mainController', function($scope) {
    $scope.main = 'Je suis le controller du main'
});