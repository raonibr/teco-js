/*global describe, it, expect, afterEach, document, AttributeSet*/
require(
    ['apontador/retarget/localTracker'],

    function (localRetarget, $) {
        'use strict';

        describe("LocalTracker Retarget", function () {

            afterEach(function () {
                document.cookie = "";
            });

            it("should get a criteria object", function () {
                var set;

                document.cookie = "";
                set = localRetarget.getCriteria();
                expect(set).to.be.an(Object);
            });

            it("should parse the JSON object of the cookie", function () {
                var set;
                document.cookie = "critGA=" + JSON.stringify({'foo': 1});
                set = localRetarget.getCriteria();
                expect(set.foo).to.eql(1);
            });
        });
    }
);