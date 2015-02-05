/**
 * Created by reedanderson on 1/29/15.
 */
"use strict";

describe("Dashboard Controller", function () {

    var ctrl, stories, statuses, types;

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

    beforeEach(inject(function ($controller) {
        ctrl = $controller('DashboardCtrl', {});
        ctrl.detailsForm = {
            $setPristine: function () {},
            $setUntouched: function () {}
        };
    }));

    // TODO mock return promise from .then()

    it('should retrieve all stories', function () {
        expect(ctrl.stories).toEqual(stories);
    });

    it('should have a statuses count of seven', function () {
        expect(ctrl.stories).toBe(7);
    });

});