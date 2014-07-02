angular.module('usefulLinks').controller('ViewLinksController', function($scope, PostsFactory) {
    $scope.posts = PostsFactory.get();

});