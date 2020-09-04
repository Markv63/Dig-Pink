/* GET tournaments page  page. */
const tournaments = (req, res) => {
    res.render('generic-text', { title: 'app serv control tournament' });
};
  
console.log("serv control tour display 1");

module.exports = {
      tournaments,
};

