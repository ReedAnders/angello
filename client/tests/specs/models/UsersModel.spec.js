/**
 * Created by reedanderson on 1/28/15.
 */
'use strict';

describe('Users Model', function () {

    beforeEach(module('Angello.Common'));

    beforeEach(module(function($provide) {
        $provide.value('AuthModel', {
            getCurrentUserId: function(){
                return 1;
            }
        });

        $provide.constant('CURRENT_BACKEND', 'firebase');
    }));

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('Should get all', inject(function(UsersModel, $httpBackend, $rootScope) {
        var response = [];
        $httpBackend.when('GET', 'https://angello-tester.firebaseio.com/clients/1/users/.json').respond(response);

        $rootScope.$broadcast('onCurrentUserId', 1);

        var promise = UsersModel.all();
        $httpBackend.flush();

        promise.then(function(result) {
            expect(result).toEqual(response);
        });
        $rootScope.$digest();
    }));

    it('Should fetch', inject(function(UsersModel, $httpBackend, $rootScope) {
        var response = {};
        $httpBackend.when('GET', 'https://angello-tester.firebaseio.com/clients/1/users/1.json').respond(response);

        $rootScope.$broadcast('onCurrentUserId', 1);

        var promise = UsersModel.fetch(1);
        $httpBackend.flush();

        promise.then(function(result) {
            expect(result.data).toEqual(response);
        });
        $rootScope.$digest();
    }));

    it('Should create', inject(function(UsersModel, $httpBackend, $rootScope) {
        var response = {};
        $httpBackend.when('POST', 'https://angello-tester.firebaseio.com/clients/1/users/.json').respond(response);

        $rootScope.$broadcast('onCurrentUserId', 1);

        var promise = UsersModel.create({});
        $httpBackend.flush();

        promise.then(function(result) {
            expect(result.data).toEqual(response);
        });
        $rootScope.$digest();
    }));

    it('Should update', inject(function(UsersModel, $httpBackend, $rootScope) {
        var response = {};
        $httpBackend.when('PUT', 'https://angello-tester.firebaseio.com/clients/1/users/1.json').respond(response);

        $rootScope.$broadcast('onCurrentUserId', 1);

        var promise = UsersModel.update(1, {});
        $httpBackend.flush();

        promise.then(function(result) {
            expect(result.data).toEqual(response);
        });
        $rootScope.$digest();
    }));

    it('Should destroy', inject(function(UsersModel, $httpBackend, $rootScope) {
        var response = {};
        $httpBackend.when('DELETE', 'https://angello-tester.firebaseio.com/clients/1/users/1.json').respond(response);

        $rootScope.$broadcast('onCurrentUserId', 1);

        var promise = UsersModel.destroy(1);
        $httpBackend.flush();

        promise.then(function(result) {
            expect(result.data).toEqual(response);
        });
        $rootScope.$digest();
    }));
});