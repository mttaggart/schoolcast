const assert = require("chai").assert;
process.env.NODE_ENV = "test";
const models = require("../../models");

describe("PortalType", () => {
    before(done => {
        models.PortalType.sync({force: true})
        .then(() => {
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new portalType", done => {
            models.PortalType.create({name: "test"})
            .then((pt) => {
                assert.equal(pt.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.PortalType.create({name:null})
            .then( pt => {
                done(pt.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
    });
    describe("Find", () => {
        const testName = "Twitter"
        before( done => {
            models.PortalType.create({name: testName})
            .then( pt => {
                done();
            });
        });
        it("should find the starwipe pt", done => {
            models.PortalType.findOne({where: {name: testName}})
            .then( pt => {
                assert.equal(pt.get("name"),testName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
});