/* get homePage */
const index = (req, res) => {
    res.render('index', { title: 'Dig Pink'});
};

module.exports = {
    index
};