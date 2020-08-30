/* GET home page. */
const index = (req, res) => {
    res.render('generic-text', { 
      title: 'Dig Pink main.js',
      content: 'Dig Pink Side out.'
     });
  };
  
  module.exports = {
      index
  };

  /*const about = function(req, res) {
    res.render('generic-text', { 
      title: 'About Loc8r  3',
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.<br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolores corrupti? Reiciendis  totam ut amet nam, ex provident. Vel debitis tempora sit velit mollitia libero dolorum, omnis officia quaerat accusantium.'
     });
  };
  
  module.exports = {
      about
  };*/