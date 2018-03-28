const assert = require("chai").assert;
const models = require("../../models");

var testTransitionType;
var testPortalType;
var testDisplay;

describe("Portal", () => {
    before(done => {
        models.Portal.sync({force: true})
        .then(() => {
            models.PortalType.create({name: "TestPortalType"})
            .then( (pt) => {
                testPortalType = pt;
                done();
            })
        });
    });
    before(done => {
        models.TransitionType.create({name: "TestTransitionType"})
        .then( (tt) => {
            testTransitionType = tt;
            done();
        });
    });
    before(done => {
        models.Display.create({name: "TestDisplay"})
        .then( (d) => {
            testDisplay = d;
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new Portal", done => {
            models.Portal.create({
                name: "test",
                top: 10,
                left: 10,
                height: 300,
                width: 300,
                transitionSpeed: 300,
                customCSS: {background: "black"}
            })
            .then( p => {
                assert.equal(p.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.Portal.create({name:null})
            .then( p => {
                done(p.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
        it("should be able to associate a transitionType", done => {
            models.Portal.create({name:null})
            .then( p => {
                p.setTransitionType(testTransitionType)
                .then( p => {
                    assert.equal(p.get("TransitionTypeId"),testTransitionType.id);
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
        it("should be able to associate a portalType", done => {
            models.Portal.create({name:null})
            .then( p => {
                p.setPortalType(testPortalType)
                .then( p => {
                    assert.equal(p.get("PortalTypeId"),testPortalType.id);
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
        it("should be able to associate a display", done => {
            models.Portal.create({name:null})
            .then( p => {
                p.setDisplay(testDisplay)
                .then( p => {
                    assert.equal(p.get("DisplayId"),testDisplay.id);
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
        const testName = "Test Portal"
        before( done => {
            models.Portal.create({name: testName})
            .then( p => {
                done();
            });
        });
        it("should find the test Portal", done => {
            models.Portal.findOne({where: {name: testName}})
            .then( p => {
                assert.equal(p.get("name"),testName);
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
            truncate: true,
            cascade: true
        }).then(() => {
            done();
        });
    });
});