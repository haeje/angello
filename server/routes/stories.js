const router = require('express').Router();
const Story = require('../models/story');


// Find All
router.get('/', (req, res) => {
    Story.findAll()
    .then((stories) => {
      if (!stories.length) return res.status(404).send({ err: 'Todo not found!!' });
      res.json(stories);
    })
    .catch(err => res.status(500).send(err));


});

router.get('/test', (req, res)=>{
    var StoryIns = new Story({ 
        "assignee" : "1",
        "criteria" : "테스트1",
        "description" : "테스트입니다. ",
        "id" : "1",
        "reporter" : "2",
        "status" : "할 일",
        "title" : "첫 번째 스토리",
        "type" : "Spike"
    });
    StoryIns.save();
    res.send(`find successfully: ${StoryIns}`);
    // return res.json(StoryIns)
    
});

// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
  Todo.findOneByTodoid(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
  Todo.updateByTodoid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
  Todo.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
