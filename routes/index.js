const users = require("./users");
const portalTypes = require("./portalTypes");
const transitionTypes = require("./transitionTypes");
const feeds = require("./feeds");
const displays = require("./displays");
const items = require("./items");
const portals = require("./portals");
const public = require("./public");
const auth = require("./auth");

module.exports = {
    public,
    users,
    auth,
    portalTypes,
    transitionTypes,
    displays,
    feeds,
    items,
    portals
}