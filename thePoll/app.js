const port= 7070;
const express= require('express');                              // Express engine
const app= express();                                           // run application using Express
const expbs= require('express-handlebars');                     // Express handlebards templating engine
const fs= require('fs');                                        // Node file handling API

/**  APPLICATION SETTINGS*/
app.use(express.static('public'));                              // Set Express fixed path to public directory
app.set('view engine', 'handlebars');                           // Set Handlebars as view-engine
app.engine('handlebars', expbs({                                // Start Handlebars engine and set default layout page
     defaultLayout: 'main'
    }));

/** APPLICATION ROUTES */
app.get('/', function(req,resp){                                // GET landing page
    resp.status(200).render('index', {title: 'HOME'});
    /**''This is the application landing page' */
});

app.get('/vote', function(req, resp){                           // GET poll page
        resp.status(200).render('vote', {title: 'POLL'});
    
})

app.get('/graph', function(req, resp){                          // GET graph page
    resp.status(200).render('graph', {title: 'GRAPH'});
})

/** SERVER START*/
app.listen(port, ()=> console.log('Server is listening on port '+ port));