const assert = require("chai").assert;
const models = require("../../models");

describe("TransitionType", () => {
    describe("Create new", () => {
        it("should create a new transitionType", done => {
            models.TransitionType.create({name: "test"})
            .then((tt) => {
                assert.equal(tt.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.TransitionType.create({name:null})
            .then( tt => {
                done(tt.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
    });
    describe("Find", () => {
        const testName = "StarWipe"
        before( done => {
            models.TransitionType.create({name: testName})
            .then( tt => {
                done();
            });
        });
        it("should find the starwipe tt", done => {
            models.TransitionType.findOne({where: {name: testName}})
            .then( tt => {
                assert.equal(tt.get("name"),testName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
    after( done => {
        models.TransitionType.destroy({
            where: {name: ["StarWipe","test"]},
        })
        .then( rows => {
            console.log(`Deleted ${rows} rows`);
            done();
        });
    });
});