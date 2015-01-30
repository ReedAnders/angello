/**
 * Created by reedanderson on 1/30/15.
 */
"use strict";

describe('StoryBoard Controller', function () {
    var ctrl;

    beforeEach(module('Angello.Storyboard'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('StoryboardCtrl', {});
        ctrl.detailsForm = {
            $setPristine: function () {},
            $setUntouched: function () {}
        };
    }));

    it('should reset the form', function () {
        ctrl.editedStory = ctrl.currentStory = { assignee: '1'};

        ctrl.resetForm();

        expect(ctrl.currentStory).toBeNull();
        expect(ctrl.editedStory).toEqual({});
    });
});