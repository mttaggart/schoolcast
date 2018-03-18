const SequelizeMock = require("sequelize-mock");
const assert = require("chai").assert;
const dbMock = new SequelizeMock();
const TransitionTypeMock = dbMock.import("../../models/TransitionType");


describe("TransitionType", () => {
    describe("Create new", () => {
        it("should create a new transitionType", (done) => {
            TransitionTypeMock.create({name: "test"})
            .then((tt) => {
                assert.equal(tt.get("name"), "test");
                done();
            })
            .catch(err => {
                if (err) console.log(err);
                done(err);
            });
        });
        it("should not accept null/undefined", (done) => {
            TransitionTypeMock.create({name: null})
            .then((tt) => {
                const name = tt.get("name");
                done(name);
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
    });
    describe("Find", () => {

        before( done => {
            TransitionTypeMock.create({name: "test2"})
            .then (tt => {
                done();
            }); 
        });

        it("should return 'test' as the TT name", (done) => {
            TransitionTypeMock.findOne({where: {name: "test2"}})
            .then( tt => {
                console.log(tt.get("name"));
                assert.equal(tt.get("name"), "test2");
                done();
            })
            .catch( err => {
                done(err);
            });     
        });
    });
});