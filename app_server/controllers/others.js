/* GET side out  page. */
const about = (req, res) => {
    res.render('generic-text', { title: 'Side Out serv control others' });
};

module.exports = {
      about,
};

