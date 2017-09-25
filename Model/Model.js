
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userID = Schema.ObjectId;

var mainMenuSchema = new Schema({
 
    mainMenu    : String,
    recipe      : String,
    duration    : String

});

var subMenuSchema = new Schema({
    
       subMenu    : String,
       recipe     : String,
       duration   : String
   
});

var desertSchema = new Schema({
    
       desert    : String,
       recipe    : String,
       duration  : String
   
});
   
   var soupSchema = new Schema({
       
      soup      : String,
      recipe    : String,
      duration  : String
      
});

var saladSchema = new Schema({
    
   salad      : String,
   recipe    : String,
   duration  : String
   
});


var combinationSchema = new Schema({
    menuName         : String,
    mainMenu         : String,
    subMenu          : String,
    desert           : String,
    soup             : String,
    salad            : String,
    totalDuration    : String
});

var Table = new Schema({
  ID                  :userID,
  email               : { type: String, required: true, unique: true },
  password            : { type: String, required: true},
  combination         : [combinationSchema],
  mainMenu            : [mainMenuSchema],
  subMenu             : [subMenuSchema],
  desert              : [desertSchema],
  soup                : [soupSchema],
  salad               : [saladSchema]
  
});

var table = mongoose.model('Table', Table);
module.exports = table;

