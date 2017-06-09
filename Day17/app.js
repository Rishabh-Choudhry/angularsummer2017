angular.module("firebaseapp",["firebase"])
.controller("dataCtrl",dataCtrl)

function dataCtrl($firebaseObject,$firebaseArray){


    var data = this;

     var rootRef =  firebase.database().ref();
     var studentRef = rootRef.child("students");
     data.students  =  $firebaseArray(studentRef);         
    console.log(data.students);
    
     data.add = function(student){
            data.students.$add(student);
            data.student = {};
            console.log(data.students);
     }

         
}