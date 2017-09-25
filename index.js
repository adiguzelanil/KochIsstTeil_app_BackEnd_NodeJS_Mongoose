
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
 * ***************Login User********************************
 */
app.post('/login',jsonParser, function(request, response) {
  
  var userEmail=request.body.email;
  var userPassword=request.body.password;

        Table.findOne({email: userEmail, password: userPassword}, function(err,newTable){

              if(err) {
                console.log(err);
                return
              }
              else
              {
                if(newTable)

                {
                  response.json({success:true,ID:newTable._id,email:newTable.email,password:newTable.password});
                  
                }

                else
                {
                  response.send({ success : false, message : false });
                }
              }            


          });

  });
   /**
    * ******************************************************************
    */


/**
 * ***************Signup User********************************
 */
app.post('/signup',jsonParser, function(request, response) {

  var userEmail=request.body.email;
  var userPassword=request.body.password;

        Table.findOne({email: userEmail, password: userPassword}, function(err,newTable){

              if(err) {
                console.log(err);
                
              }
              else
              {
                if(newTable)

                {
                  response.json({success:false,message:'NotNull'});
                  
                }

                else
                {
                  var table=new Table();
                  
                    table.email=userEmail;
                    table.password=userPassword;

                    table.save(function (err,newTable) {
                      
                          if(err)
                          {
                            response.send({ success : false, message : err });
                          }
                          else
                          {
                            response.json({success:true,ID:newTable._id,email:newTable.email,password:newTable.password});
                            
                          }
            
                   
                   
                    });
                }
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
    var userRecipe=request.body.recipe;
    var userDuration=request.body.duration;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.mainMenu.push({mainMenu:userMainMenu,recipe:userRecipe,duration:userDuration});
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
                response.json({success:true});
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
    var userRecipe=request.body.recipe;
    var userDuration=request.body.duration;


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
            
            record.subMenu.push({subMenu:userSubMenu,recipe:userRecipe,duration:userDuration});
            record.save(function (err){

              if(err)
              {
                
                response.json({ success : false, message : err });
              }
              else
              {
                console.log('SubMenu Addition succeeded');
                response.json({success:true});
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
    var userRecipe=request.body.recipe;
    var userDuration=request.body.duration;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.desert.push({desert:userDesert,recipe:userRecipe,duration:userDuration});
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
                response.json({success:true});
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
    var userRecipe=request.body.recipe;
    var userDuration=request.body.duration;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.soup.push({soup:userSoup,recipe:userRecipe,duration:userDuration});
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
                response.json({success:true});
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
app.post('/saladAdd',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSalad=request.body.salad;
    var userRecipe=request.body.recipe;
    var userDuration=request.body.duration;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.salad.push({salad:userSalad,recipe:userRecipe,duration:userDuration});
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
                response.json({success:true});
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
    var userSalad=request.body.salad;
    var userDuration=request.body.duration;


          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.combination.push({menuName:userMenuName,mainMenu:userMainMenu,subMenu:userSubMenu,desert:userDesert,soup:userSoup,salad:userSalad,totalDuration:userDuration});
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
                response.json({success:true});
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
                response.json(record);
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
                response.json(record);
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
                response.json(record);
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
                response.json(record);
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
app.delete('/saladRemove',jsonParser, function(request, response) {
  
    var userEmail=request.body.email;
    var userPassword=request.body.password;
    var userSaladId=request.body.saladId;

          Table.findOne({email:userEmail,password:userPassword}).then(function(record){
           
            record.salad.pull({'_id':userSaladId});
            record.save(function (err){

              if(err)
              {
                console.log(err);
                response.send({ success : false, message : err });
              }
              else
              {
                console.log('Soup Remove succeeded');
                response.json(record);
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
                response.json(record);
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
                    console.log('MainMenu reading ok');
                    //response.send({ success : true, message : 'MainMenu succeeded'});
                    response.json(record);
                  }

            });
  
   });
   /**
    * ******************************************************************
    */

        /**
 

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
                    response.json(record);
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
                console.log('subMenu reading succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json(record);
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
                console.log('subMenu reading succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json(record);
              }

        });
  
   });
   /**
    * ******************************************************************
    */



     /**
 * ***************soupRead********************************
 */
app.post('/saladRead',jsonParser, function(request, response) {
  
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
                response.json(record);
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
                console.log('subMenu reading succeeded');
                //response.send({ success : true, message : 'MainMenu succeeded'});
                response.json(record);
              }

        });
  
   });
   /**
    * ******************************************************************
    */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});