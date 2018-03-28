const assert = require("chai").assert;
process.env.NODE_ENV = "test";
const models = require("../../models");

const testUserData = {
    firstName: "Bob",
    lastName: "Bobson",
    email: "bob@bob.com",
    password: "mypassword"
}

const testAdminData = {
    firstName: "Jane",
    lastName: "Adminson",
    email: "jane@bob.com",
    password: "mypassword",
    isAdmin: true
}

describe("User", () => {
    before(done => {
        models.User.sync()
        .then(() => {
            done();
        });
    });
    describe("Create new", () => {
        it("should create a new User", done => {
            models.User.create(testUserData)
            .then( u => {
                assert.equal(u.get("email"), testUserData.email);
                done();
            })
            .catch(err => {
                done(err);
            });
        });
        // it("should create a new Admin", done => {
        //     models.User.create(testAdminData)
        //     .then( u => {
        //         assert.isTrue(u.isAdmin);
        //         done();
        //     })
        //     .catch(err => {
        //         done(err);
        //     });
        // });
        it("should prevent null names", done => {
            models.User.create({firstName:null})
            .then( u => {
                done(tt.get("firstName"));
            })
            .catch( err => {
                assert.exists(err);
                done();
            });
        });
    });
    describe("Find", () => {
        const testName = "Bobson"
        before( done => {
            models.User.create(testUserData)
            .then( tt => {
                done();
            });
        });
        it("should find Bob Bobson", done => {
            models.User.findOne({where: {lastName: testUserData.lastName}})
            .then( u => {
                assert.equal(u.get("lastName"),testUserData.lastName);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
        it("should encrypt", done => {
            models.User.findOne({where: {lastName: testUserData.lastName}})
            .then( u => {
                console.log(u.get("password"));
                assert.notEqual(u.get("password"),testUserData.password);
                done();
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        });
    });
    describe("Validate Password", () => {
        it("should validate a correct password", done => {
            models.User.findOne({where: {lastName: testUserData.lastName}})
            .then( u => {
                u.authenticate(testUserData.password)
                .then( res => {
                    assert.isTrue(res);
                    done();
                });
            })
            .catch( err => {
                assert.exists(err);
                done(err);
            });
        })
    })
    after( done => {
        models.User.destroy({
            where: {},
            truncate: true
        })
        .then( () => {
            done();
        });
    });
});