describe("Unit: Testing Posts services", function() {

    beforeEach(angular.module('usefulLinks'));

    it('should have a non null Posts Service', function() {
        inject(function(PostsFactory) {
           expect(PostsFactory).not.to.equal(null);
        });
    });

});