var mongoose = require("mongoose");
var User = require("../../models/user.js")
   
var UserData = [
    {
        username: "1",
        password: "1",
        userlevel: "Administrator"
    },
    {
        username: "2",
        password: "3",
        userlevel: "Administrator"
    },   
    {
        username: "3",
        password: "3",
        userlevel: "Regular User"
    }    
];

function seedDB() {
    // User.remove({}, function(err) {
    //     if (err) {
    //         console.log("Error: ", err)
    //     } else {
    //         console.log("Removed Users!")
    //     }
    //     UserData.forEach(function(seed) {
    //         User.create(seed, function(err, data) {
    //             if (err) {
    //                 console.log("Error creating User. ", err)
    //             } else {
    //                 console.log("Inserted User.");
    //             }
    //         })
    //     })
    // })
    
    
    //Remove all campgrounds
    // Campground.remove({}, function(err) {
    //     if (err) {
    //         console.log("Error: ", err);
    //     } else {
            // console.log("Removed campgrounds!");
            // //Add a few campgrounds. Include as part of the callback from above.
            // CampgroundData.forEach(function(seed) { //puts data array into DB
            //     Campground.create(seed, function(err, campground) {
            //         if (err) {
            //             console.log("Error: ", err);
            //         } else {
            //             console.log("Added campground!");
            //             //Create a comment
            //             Comment.create(
            //                 {
            //                     text: "This place is great but I wish there was internet!",
            //                     author: "Josh"
            //                 }, function(err, comment) {
            //                     if (err) {
            //                         console.log("Error: ", err);
            //                     } else {
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("Created new comment");
            //                     }
            //                 }
            //             )
            //         }
            //     })
            // })
//         }
//     });
}

module.exports = seedDB;



