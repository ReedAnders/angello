/**
 * Created by reedanderson on 1/29/15.
 */
"use strict";

describe('Utility Service', function () {
    var UtilsService;
    //var correct = [];

    beforeEach(module('Angello.Common'));

    beforeEach(inject(function(_UtilsService_) {
        UtilsService = _UtilsService_;
    }));

    //TODO create mock $http.get() promise for content.data obj
    //var content = {};
    //content.data = '';

    // Test UtilsService.objectToArray
    //it('should... work', function() {
    //    var result = UtilsService.objectToArray(content);
    //    expect(result).toEqual(correct);
    //});
});