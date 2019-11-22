var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'))
app.use(express.static('app/images'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
var friendScoreArray = [];
var bestFriend;

var friends = [{
    name: "Yoda",
    image: "Yoda.jpg",
    question1: 1,
    question2: 3,
    question3: 4,
    question4: 2,
    question5: 3,
    question6: 5,
    question7: 5,
    question8: 3,
    question9: 4,
    question10: 2
},
{
    name: "Darth Vader",
    image: "Darth_Vader.jpg",
    question1: 4,
    question2: 5,
    question3: 2,
    question4: 1,
    question5: 4,
    question6: 5,
    question7: 5,
    question8: 5,
    question9: 3,
    question10: 2
},
{
    name: "Obi Wan Kenobi",
    image: "Obi_Wan.jpg",
    question1: 4,
    question2: 3,
    question3: 2,
    question4: 1,
    question5: 5,
    question6: 5,
    question7: 5,
    question8: 5,
    question9: 3,
    question10: 2
},
{
    name: "Princess Leia",
    image: "Princess.jpg",
    question1: 5,
    question2: 5,
    question3: 1,
    question4: 1,
    question5: 1,
    question6: 1,
    question7: 3,
    question8: 4,
    question9: 3,
    question10: 4
},
{
    name: "Rey",
    image: "Rey.jpg",
    question1: 3,
    question2: 3,
    question3: 2,
    question4: 1,
    question5: 1,
    question6: 1,
    question7: 1,
    question8: 2,
    question9: 2,
    question10: 1
},
{
    name: "Darth Maul",
    image: "Darth_Maul.jpg",
    question1: 1,
    question2: 1,
    question3: 1,
    question4: 1,
    question5: 1,
    question6: 1,
    question7: 1,
    question8: 1,
    question9: 2,
    question10: 3
},
{
    name: "Emporer Palpatine",
    image: "emperor_palpatine.jpg",
    question1: 5,
    question2: 4,
    question3: 4,
    question4: 4,
    question5: 3,
    question6: 3,
    question7: 4,
    question8: 4,
    question9: 5,
    question10: 2
}
];

app.get("/api/friends", function (req, res) {
    return res.json(bestFriend);
});
app.post("/api/friends", (req, res) => {
    let newFriend = req.body;

    var lowestScore = 50;
    var score = 0;
    for (i = 0; i < friends.length; i++) {
        for (j = 1; j < 11; j++) {
            score += Math.abs((newFriend["question" + j]) - friends[i]["question" + j]);
        }
        if (score < lowestScore) {
            bestFriend = friends[i];
            lowestScore = score;
        }
        friendScoreArray.push(score)

        score = 0;
    }

    friends.push(newFriend);
    res.json(newFriend);
})
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});