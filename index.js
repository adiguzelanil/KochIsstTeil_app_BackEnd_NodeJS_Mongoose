
/**
 * Beschreib Alle Requirements Heir*******************************
 */
var express = require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var jsonParser=bodyParser.json();
var Table=require('./Model/Model');
var app = express();
/**
 * ***********Mongoose Verbingung*********************************
 */

 mongoose.Promise=global.Promise;
 mongoose.connect('mongodb://frei:frei@ds153682.mlab.com:53682/adiguzel2515');
 mongoose.connection.once('openUri', function(){
  console.log('Connection has been made, now make fireworks...');
  done();
}).on('error', function(error){
  console.log('Connection error:', error);
});
/**
 * ******************************************************************
 */

 //*********************Json Body Parser*****************************
app.use( bodyParser.json() );     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: true
}));

/**
 * **************************************************************************
 */

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

/**
 * ***************Signup User********************************
 */
app.post('/signup',jsonParser, function(request, response) {

  var userEmail=request.body.email;
  var userPassword=request.body.password;
  var table=new Table();

  table.email=userEmail;
  table.password=userPassword;

  table.save(function (err) {
          
              if(err)
              {
                console.log(err );
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Signup succeeded');
                response.send({ success : true, message : 'Signup succeeded'});
                
              }

       
       
        });

 });
 /**
  * ******************************************************************
  */


 /**
 * ***************mainMenuAdd********************************
 */
app.post('/mainMenuAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userMainMenu=request.body.mainMenu;
    var userRecipe=request.body.recipe


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.mainMenu.push({mainMenu:userMainMenu,recipe:userRecipe});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('MainMenu Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

 /**
 * ***************subMenuAdd********************************
 */
app.post('/subMenuAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSubMenu=request.body.subMenu;
    var userRecipe=request.body.recipe


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.subMenu.push({subMenu:userSubMenu,recipe:userRecipe});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('SubMenu Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

 /**
 * ***************DesertAdd********************************
 */
app.post('/desertAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userDesert=request.body.desert;
    var userRecipe=request.body.recipe


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.desert.push({desert:userDesert,recipe:userRecipe});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Desert Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

/**
 * ***************SoupAdd********************************
 */
app.post('/soupAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSoup=request.body.soup;
    var userRecipe=request.body.recipe


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.soup.push({soup:userSoup,recipe:userRecipe});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Soup Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

    
/**
 * ***************CombinationAdd********************************
 */
app.post('/combinationAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userMenuName=request.body.menuName;
    var userMainMenu=request.body.mainMenu;
    var userSubMenu=request.body.subMenu;
    var userDesert=request.body.desert;
    var userSoup=request.body.soup;



          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.combination.push({menuName:userMenuName,mainMenu:userMainMenu,subMenu:userSubMenu,desert:userDesert,soup:userSoup});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Combination Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */


     /**
 * ***************mainMenuRemove********************************
 */
app.delete('/mainMenuRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userMainMenuId=request.body.mainMenuId;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.mainMenu.pull({'_id':userMainMenuId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('MainMenu Remove succeeded');
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

         /**
 * ***************subMenuRemove********************************
 */
app.delete('/subMenuRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSubMenuId=request.body.subMenuId;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.subMenu.pull({'_id':userSubMenuId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('SubMenu Remove succeeded');
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

             /**
 * ***************DesertRemove********************************
 */
app.delete('/desertRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userDesertId=request.body.desertId;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.desert.pull({'_id':userDesertId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Desert Remove succeeded');
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

                 /**
 * ***************SoupRemove********************************
 */
app.delete('/soupRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSoupId=request.body.soupId;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.desert.pull({'_id':userSoupId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Soup Remove succeeded');
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */

    /**
 * ***************CombinationRemove********************************
 */
app.delete('/combinationRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userCombinationId=request.body.combinationId;



          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.combination.pull({'_id':userCombinationId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Combination Addition succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json({record});
              }

            });
        });
  
   });
   /**
    * ******************************************************************
    */


    /**
 * ***************mainMenuRead********************************
 */
app.post('/mainMenuRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('MainMenu reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.mainMenu);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

        /**
 * ***************mainMenuRead********************************
 */
app.post('/mainMenuRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('MainMenu reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.mainMenu);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

            /**
 * ***************subMenuRead********************************
 */
app.post('/subMenuRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('subMenu reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.subMenu);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

 /**
 * ***************desertRead********************************
 */
app.post('/desertRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('desert reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.desert);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

 /**
 * ***************soupRead********************************
 */
app.post('/soupRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('soup reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.soup);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

     /**
 * ***************combinationRead********************************
 */
app.post('/combinationRead',jsonParser, function(request, response) {
  
      var userEmail=request.body.email;
      var userPassword=request.body.password;

      Table.findOne({email:userEmail,password:userPassword},function(err,record){
                
                  if(err)
                  {
                    console.log(err);
                    response.json({ success : false, message : err });
                  }
                  else
                  {
                    console.log('combination reading succeeded');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record.combination);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


