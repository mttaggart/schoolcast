const assert = require("chai").assert;
process.env.NODE_ENV = "test";
const models = require("../../models");

describe("TransitionType", () => {
    describe("Create new", () => {
        it("should create a new transitionType", (done) => {
            models.TransitionType.create({name: "test"})
            .then((tt) => {
                assert.equal(tt.get("name"), "test");
                done();
            })
            .catch(err => {
                done(err);
            });
        });
    });
});