const assert = require("chai").assert;
const models = require("../../models");

var testTransitionType;
var testPortalType;
var testDisplay;
var testFeed;
const testPortalData = {
    name: "test",
    top: 10,
    left: 10,
    height: 300,
    width: 300,
    transitionSpeed: 300,
    customCSS: {background: "black"}
}

describe("Portal", () => {
    before(done => {
        models.PortalType.create({name: "TestPortalType"})
        .then( (pt) => {
            testPortalType = pt;
            done();
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
        models.Display.create({
            name: "TestDisplay", 
            description: "test display"
        })
        .then( (d) => {
            testDisplay = d;
            done();
        });
    });
    before(done => {
        models.Feed.create({
            name: "TestFeed", 
            description: "test feed"
        })
        .then( f => {
            testFeed = f;
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new Portal", done => {
            models.Portal.create(testPortalData)
            .then( p => {
                assert.equal(p.get("name"), testPortalData.name);
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        it("should prevent null names", done => {
            models.Portal.create({name: null})
            .then( p => {
                done(p.get("name"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
        it("should be able to associate a transitionType", done => {
            models.Portal.create(testPortalData)
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
            models.Portal.create(testPortalData)
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
            models.Portal.create(testPortalData)
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
        it("should be able to associate a feed", done => {
            models.Portal.create(testPortalData)
            .then( p => {
                p.setFeed(testFeed)
                .then( p => {
                    assert.equal(p.get("FeedId"),testFeed.id);
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
        it("should find the test Portal", done => {
            models.Portal.findOne({where: {name: testPortalData.name}})
            .then( p => {
                assert.equal(p.get("name"),testPortalData.name);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
});