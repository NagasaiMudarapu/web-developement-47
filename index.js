// 1.  import or #include liek statement for express

var exprss = require('express');

// 2. Create Application
var ap = exprss();

// 3.  Define Functiosn to run when someone accesses our site
ap.get('/', function(req, res){
    res.send('Hello World, Is this still working??');
})

// 4. Run Application on a port ==> 65xxx (65K ports) Mostly we use beyone 3000
var port= process.env.PORT  || 3000;

// Once site is up, function() will be called automatically
ap.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
});