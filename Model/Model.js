
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userID = Schema.ObjectId;

var mainMenuSchema = new Schema({
 
    mainMenu    : String,
    recipe      : String

});

var subMenuSchema = new Schema({
    
       subMenu    : String,
       recipe     : String
   
});

var desertSchema = new Schema({
    
       desert    : String,
       recipe    : String
   
});
   
   var soupSchema = new Schema({
       
      soup      : String,
      recipe    : String
      
});


var combinationSchema = new Schema({
    menuName    : String,
    mainMenu    : String,
    subMenu     : String,
    desert      : String,
    soup        : String
});

var Table = new Schema({
  ID                  :userID,
  email               : { type: String, required: true, unique: true },
  password            : { type: String, required: true},
  combination         : [combinationSchema],
  mainMenu            : [mainMenuSchema],
  subMenu             : [subMenuSchema],
  desert              : [desertSchema],
  soup                : [soupSchema]
  
});

var table = mongoose.model('Table', Table);
module.exports = table;

