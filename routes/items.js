const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

router.use("/api/items*", verifyToken);

router.route("/api/items")
.get((req, res) => {
  models.Item.findAll({
    where: {},
    include: [models.Feed]
  })
  .then( items => {
    res.status(200).send(items);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No items available");
  });
})
.post((req, res) => {
  const data = req.body;
  models.Item.create(data)
  .then( i => {
    res.status(201).send(`item ${i.name} created`);
  })
  .catch ( err => {
    res.status(500).send("Could not create item");
  });
});

router.route("/api/items/:id")
.get((req, res) => {
  models.Item.findOne({
    where:{id:req.params.id}
  })
  .then( i => {
    res.status(201).send(i);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No items available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.Item.update(data,{where: {id: req.params.id}})
  .then( rows => {
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.Item.destroy({where: {id}})
  .then ( rows => {
    res.status(200).send("item deleted");
  })
  .catch( err => {
    res.status(500).send("Could not delete item");
  })
});

module.exports = router;