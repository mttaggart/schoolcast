const assert = require("chai").assert;
const models = require("../../models");

var testFeed;

describe("Item", () => {
    before(done => {
        models.Feed.create({
            name: "TestFeed",
            description: "Here is a test feed"
        })
        .then( f => {
            testFeed = f;
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new Item", done => {
            models.Item.create({
                name: "test",
                content: "Here is a test item"
            })
            .then( i => {
                assert.equal(i.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.Item.create({
                name:null,
                content: "a test item"
            })
            .then( i => {
                done(i.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
        it("should prevent null content", done => {
            models.Item.create({
                name:"Test Item",
                content: null
            })
            .then( i => {
                done(i.get("content"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
        it("should be able to associate a feed", done => {
            models.Item.create({
                name:"Test Item",
                content: "A test content!"
            })
            .then( i => {
                i.setFeed(testFeed)
                .then( i => {
                    assert.equal(i.get("FeedId"),testFeed.id);
                    done();
                })
                .catch( err => {
                    done(err);
                });
            })
            .catch( err => {
                done(err);
            });
        });
    });
    describe("Find", () => {
        const testName = "Test Item"
        before( done => {
            models.Item.create({
                name: testName,
                content: "Here is another test item"
            })
            .then( i => {
                done();
            });
        });
        it("should find the test Item", done => {
            models.Item.findOne({where: {name: testName}})
            .then( i => {
                assert.equal(i.get("name"),testName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
});