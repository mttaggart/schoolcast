const router = require("express").Router();
const models = require("../models");

router.route("/api/feeds")
.get((req, res) => {
  models.Feed.findAll()
  .then( feeds => {
    res.status(200).send(feeds);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No feeds available");
  });
})
.post((req, res) => {
  const data = req.body;
  models.Feed.create(data)
  .then( f => {
    res.status(201).send(`feed ${f.name} created`);
  })
  .catch ( err => {
    res.status(500).send("Could not create feed");
  });
});

router.route("/api/feeds/:id")
.get((req, res) => {
  models.Feed.findOne({
    where:{id:req.params.id}
  })
  .then( f => {
    res.status(201).send(f);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No feeds available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.Feed.update(data,{where: {id: req.params.id}})
  .then( rows => {
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.Feed.destroy({where: {id}})
  .then ( rows => {
    res.status(200).send("Feed deleted");
  })
  .catch( err => {
    res.status(500).send("Could not delete Feed");
  })
});

// Extra route for getting the items for a feed
router.route("/api/feeds/:id/items")
.get((req, res) => {
  const FeedId = req.params.id;
  models.Item.findAll({
    where: {FeedId}
  })
  .then( items => {
    res.status(200).send(items);
  })
  .catch( err => {
    res.status(500).send("No associated items");
  });
});

module.exports = router;