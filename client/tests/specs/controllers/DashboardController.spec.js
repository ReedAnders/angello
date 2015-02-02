/**
 * Created by reedanderson on 1/29/15.
 */
"use strict";

describe("Dashboard Controller", function () {

    var scope, createController;

    beforeEach(module('Angello.Dashboard'));

    beforeEach(module(function($provide) {
        $provide.value('StoriesModel', {
            all: function() {
                return stories;
            }
        });

        $provide.constant('STORY_STATUSES', statuses);
        $provide.constant('STORY_TYPES', types);
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('DashboardCtrl', {
                '$scope': scope
            });
        };
    }));

    // TODO debug ctrl init
    it('should retrieve all stories', function () {
        var ctrl = createController();
        expect(dashboard.stories).toEqual(stories);
    });

    it('should have a statuses count of seven', function () {
        var ctrl = createController();
        expect(dashboard.stories).toBe(7);
    });

});