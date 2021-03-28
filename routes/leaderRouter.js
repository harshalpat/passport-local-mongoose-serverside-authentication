const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// '/leaders' REST API end points.
leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res , next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will create a dish: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on the /leaders ');
})
.delete((req, res, next) => {
    res.end('Deleting all the leaders..');
});

// '/leaders/:leaderId' API endpoints
leaderRouter.route('/:leaderId')
.get( (req, res , next) => {
    res.end('Will send all the details of the leader: ' + req.params.leaderId 
     + ' to you');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/ ' + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
    ' with details ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the leader: ' + req.params.leaderId);
});


module.exports = leaderRouter;

