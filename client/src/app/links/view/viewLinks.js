angular.module('usefulLinks').controller('ViewLinksController', function($scope) {
    $scope.posts = [
        {
            _id: '132132131232',
            title: 'titre1',
            description: 'description1'
        },
        {
            _id: '12375866',
            title: 'titre222',
            description: 'description222'
        },
        {
            _id: '467464657465',
            title: 'titre33',
            description: 'description32'
        }
    ];

});