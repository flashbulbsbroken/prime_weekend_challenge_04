var express = require('express');

var router = express.Router();

var Tasks = require('../models/taskSchema');

router.get('/get/:task?', function(request, response, next) {
  var taskItem = request.params.task;
  if(taskItem){
    Tasks.findOne({task:taskItem}, function(err, tasks) {
      response.json(tasks);
    })
  }else {
    Tasks.find(function(err, item) {
      response.json(item);
    })
  }
});

router.post('/add', function(request, response, next) {
  console.log(request.body);
  Tasks.create(request.body, function(err, post) {
    response.send('ok');
  })
});

//
//router.route('/add')
//    .post(function(request, response) {
//
//      var taskItem = new Task();
//
//      taskItem.task = request.body.task;
//
//      taskItem.save(function(err) {
//        if(err) {
//          response.send(err);
//        }
//
//        Task.find(function(err, tasks) {
//          if(err) {
//            response.send(err);
//          }
//          response.json(tasks);
//        })
//      });
//    });
//
//
//router.get('/get', function(request, response, next) {
//  task.find(function(err, tasks) {
//    if(err)
//      response.send(err)
//
//    response.json(tasks);
//  });
//});






//router.post('/add', function(request, response, next) {
//  var taskItem = new taskSchema(request.body);
//  console.log("Task is: ", taskItem);
//  taskItem.save(function(err){
//    if(err){
//      console.log("Post",err);
//      response.send("cannot post data");
//    }
//    console.log("SAVED!", taskItem);
//    response.sendStatus(200);
//  })
//});
//

module.exports = router;
