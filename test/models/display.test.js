const assert = require("chai").assert;
process.env.NODE_ENV = "test";
const models = require("../../models");

describe("Display", () => {
    before(done => {
        models.Display.sync()
        .then(() => {
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new Display", done => {
            models.Display.create({name: "test"})
            .then((d) => {
                assert.equal(d.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.Display.create({name:null})
            .then( d => {
                done(d.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
        it("should save custom css", done => {
            const customCSS = {
                "width": "50px"
            };
            models.Display.create({name:"WideDisplay",customCSS})
            .then( d => {
                const css = d.get("customCSS");
                assert.equal(css.width, "50px");
                done();
            })
            .catch( err => {
                done(err);
            });
        });
    });
    describe("Find", () => {
        const testName = "Test Display"
        before( done => {
            models.Display.create({name: testName})
            .then( d => {
                done();
            });
        });
        it("should find the test display", done => {
            models.Display.findOne({where: {name: testName}})
            .then( d => {
                assert.equal(d.get("name"),testName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
    after( done => {
        models.Display.destroy({
            where: {},
            truncate: true
        }).then(() => {
            done();
        });
    });
});