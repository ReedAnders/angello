'use strict';

// The primary job of LoadingService is to control a property on the $rootScope

describe('Loading Service', function () {

    // Available for entire spec
    var $rootScope, LoadingService;

    // Load module configuration code
    beforeEach(module('Angello.Common'));

    // Inject $rootScope and Loading service with underscore wrapping
    beforeEach(inject(function (_$rootScope_, _LoadingService_) {
        $rootScope = _$rootScope_;
        LoadingService = _LoadingService_;
    }));

    it('should update $rootScope to false when setLoading is set to false', function () {
        LoadingService.setLoading(false);
        expect($rootScope.loadingView).toEqual(false);
    });

    it('should update $rootScope to true when setLoading is set to true', function () {
        LoadingService.setLoading(true);
        expect($rootScope.loadingView).toEqual(true);
    });
});