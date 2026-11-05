const loki = require('lokijs'); 
  
const db = new loki('monkey.db'); 
  
function initDatabase(cb) { 
    db.loadDatabase({}, err => { 
        if (err) { 
            return cb(err); 
        } 
  
        let monkeyModel = db.getCollection('monkeys'); 
        if (monkeyModel === null) { 
            monkeyModel = db.addCollection('monkeys'); 
        } 
        let bananaModel = db.getCollection('bananas'); 
        if (bananaModel === null) { 
            bananaModel = db.addCollection('bananas'); 
        } 
  
        db.saveDatabase(err => { 
            return cb(err, { db, monkeyModel, bananaModel }); 
        }); 
    }); 
} 
  
module.exports.initDatabase = initDatabase;