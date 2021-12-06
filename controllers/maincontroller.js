const IntroModel=require('../models/intromodel');
const User = require('../models/user');

exports.getintroDetails = async (req, res) => {
    try {
      const details = await IntroModel.find();
      return res.render("final", { details , user:req.user});
    } catch (error) {
      console.log(error.message);
    }
  };

  exports.getRender = async (req, res) => {
    try {
      const details = await IntroModel.find();
      return res.render("final", { details , user:req.user }, (err, html) => {
        res.status(200).send('<textarea style="height:100%; width:100%; font-family: Monospace; font-size:10px; border:0;" rows="30" disabled >' + html + "</textarea>");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  exports.addintroForm = async (req, res) => {
    try {
      return res.render("intro",{user:req.user});
    } catch (error) {
      console.log(error.message);
    }
  };

  exports.postintroDetails = async (req, res) => {
    try {
      var { name , about, email } = req.body;
  
      const image = '/uploads/' + req.file.filename;
      console.log(image)
      //console.log(path);
      const newintroDetail = await new IntroModel({
        name,
        about,
        email,
        image,
      }).save();
     
      return res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  };