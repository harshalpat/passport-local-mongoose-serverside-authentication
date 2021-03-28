const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.set('Content-Type', 'text/plain');
    next();
})
.get((req, res , next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will create a new promotion: ' + req.body.name + 
    ' with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on the /promotions ');
})
.delete((req, res, next) => {
    res.end('Deleting all the promos..');
});

// 'promotions/:promoId'

promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end('Sending all the promotions of id ' 
    + req.params.promoId + ' to you.')
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promoId ' 
    + req.params.promoId)
})
.put((req, res, next) => {
    res.write('Updating the promo id ' + req.params.promoId +
    '\n');
    res.end('Updatng the promotion ' + req.body.name + 
    ' with details ' + req.body.description);  
})
.delete((req, res, next) => {
    res.end('Deleting the promotion id ' + req.params.promoId);
});


module.exports = promoRouter;