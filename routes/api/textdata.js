const express = require("express");
const router = express.Router();
const Textdata = require("../../models/Textdata");

router.post("/", async (req, res) => {
  const { data } = req.body;
  const length = data.length;
  try {
    // const newTextdata = {
    //   data: req.body.data,
    //   length: req.body.data.length,
    // };
    // const Textdata = await newTextdata.save();
    textdata = new Textdata({
      data,
      length,
    });
    await textdata.save();
    res.send("Textdata");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errorfefef");
  }
});
router.get("/", async (req, res) => {
  try {
    const datas = await Textdata.find();
    const fillterdata = datas.map((data) => {
      let { _id, __v, ...usethis } = data.toObject();

      console.log(data);
      return usethis;
    });
    res.json(fillterdata);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
