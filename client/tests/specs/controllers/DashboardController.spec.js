/**
 * Created by reedanderson on 1/29/15.
 */
"use strict";

describe("Dashboard Controller", function () {

    var scope, createController,
        statuses = [
            {name: 'Back Log'},
            {name: 'To Do'},
            {name: 'In Progress'},
            {name: 'Code Review'},
            {name: 'QA Review'},
            {name: 'Verified'},
            {name: 'Done'}
        ],
        types = [
            {name: 'Feature'},
            {name: 'Enhancement'},
            {name: 'Bug'},
            {name: 'Spike'}
        ],
        stories = [
            {title: 'First story', description: 'Our first story.', criteria: 'Criteria pending.', status: 'To Do', type: 'Feature', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford'},
            {title: 'Second story', description: 'Do something.', criteria: 'Criteria pending.', status: 'Back Log', type: 'Feature', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford'},
            {title: 'Another story', description: 'Just one more.', criteria: 'Criteria pending.', status: 'Code Review', type: 'Enhancement', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford'}
        ];

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

    it('should retrieve all stories', function () {
        var ctrl = createController();
        expect(dashboard.stories).toEqual(stories);
    });

    it('should have a statuses count of seven', function () {
        var ctrl = createController();
        expect(dashboard.stories).toBe(7);
    });

});