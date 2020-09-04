/* GET memorials  page. */
const memorials = (req, res) => {
    res.render('generic-text', { title: 'honors serv control memorial' });
};
  

console.log("serv control mem display 1");
module.exports = {
      memorials,
};

