/* GET side out  page. */
const about = (req, res) => {
    res.render('generic-text', { title: 'Side Out serv control others' });
};

module.exports = {
      about,
};

  /* GET home page. */
/*const about = (req, res) = {
  res.render('generic-text', { 
    title: 'About Dig Pink',
    content: 'Dig Pink 1'
});
};

module.exports = {
    about
};*/