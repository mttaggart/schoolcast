const sequelize = require("sequelize");
const SequelizeMock = require("sequelize-mock");
const assert = require("assert");

const dbMock = new SequelizeMock();

const TransitionTypeMock = dbMock.define("TransitionType", {
    name: "Fade"
});


describe("TransitionType", () => {
    describe("GET", () => {
        it("should return 'Fade' as the TT name", () => {
            TransitionTypeMock.findById(1)
            .then((tt) => {
                assert.equal(tt.get("name"), "Fade");
            });
        });
    });
    describe("POST", () => {
        it("should create a new transitionType", () => {
            TransitionTypeMock.create({name: "test"})
            .then((tt) => {
                assert.equal(tt.get("name"), "test");
            });
        });
    });
});