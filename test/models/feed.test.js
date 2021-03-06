const assert = require("chai").assert;
const models = require("../../models");

describe("Feed", () => {
    describe("Create new", () => {
        it("should create a new Feed", done => {
            models.Feed.create({
                name: "test",
                description: "test feed"
            })
            .then( f => {
                assert.equal(f.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.Feed.create({name:null})
            .then( f => {
                done(f.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
    });
    describe("Find", () => {
        const testName = "Test Feed"
        before( done => {
            models.Feed.create({
                name: testName,
                description: "test description"
            })
            .then( f => {
                done();
            });
        });
        it("should find the test Feed", done => {
            models.Feed.findOne({where: {name: testName}})
            .then( f => {
                assert.equal(f.get("name"),testName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
    after( done => {
        models.Feed.destroy({
            where: {name: ["test","Test Feed"]}
        })
        .then( rows => {
            console.log(`Deleted ${rows} rows`);
            done();
        });
    });
});