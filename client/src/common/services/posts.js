angular.module('usefulLinks').factory('PostsFactory', function($resource) {
    return $resource(
        '/posts/:id',
        {}, // Default params
        {
            query: {method: 'GET', isArray: true},
            create: {method: 'POST'},
            update: {method: 'PUT'},
            findById: {method: 'GET', params:{id: '@id'}},
            remove: {method: 'DELETE', params: {id: '@id'}}
        }
    );
});