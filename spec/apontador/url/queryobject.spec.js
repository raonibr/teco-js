/*global describe, it, expect, beforeEach*/
require(['apontador/url/queryobject'], function (QueryObject) {
    'use strict';
    describe("Url QueryObject",  function () {
        var url = "http://site.com/level?param1=value1&param2=value2",
            queryObject = new QueryObject(url);

        it("should can get a parameter from URL", function () {
            expect(queryObject.get("param1")).to.eql('value1');
        });
        it("should can get another parameter from URL", function () {
            expect(queryObject.get("param2")).to.eql('value2');
        });
        it("should can change a parameter from URL", function () {
            expect(queryObject.get("param1")).to.eql('value1');
            queryObject.set("param1", "newValue1");
            expect(queryObject.get("param1")).to.eql('newValue1');
        });
        it("should can get a new query string after change a parameter from URL", function () {
            queryObject.set("param1", "newValue1");
            expect(queryObject.toString()).to.eql(
                '?param1=newValue1&param2=value2'
            );
        });
    });
});
