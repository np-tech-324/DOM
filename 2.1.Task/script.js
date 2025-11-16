let iplTeams = [
    {
        team: "Mumbai Indians",
        trophies: 5,
        captain: "Hardik Pandya",
        primary: "blue",
        secondary: "gold",
    },
    {
        team: "Chennai Super Kings",
        trophies: 5,
        captain: "Ruturaj Gaikwad",
        primary: "yellow",
        secondary: "blue"
    },
    {
        team: "Royal Challengers Bengaluru",
        trophies: 0,
        captain: "Virat Kohli",
        primary: "red",
        secondary: "black"
    },
    {
        team: "Kolkata Knight Riders",
        trophies: 3,
        captain: "Shreyas Iyer",
        primary: "purple",
        secondary: "gold"
    },
    {
        team: "Rajasthan Royals",
        trophies: 1,
        captain: "Sanju Samson",
        primary: "pink",
        secondary: "blue"
    },
    {
        team: "Sunrisers Hyderabad",
        trophies: 1,
        captain: "Pat Cummins",
        primary: "orange",
        secondary: "black"
    },
    {
        team: "Delhi Capitals",
        trophies: 0,
        captain: "Rishabh Pant",
        primary: "blue",
        secondary: "red"
    },
    {
        team: "Punjab Kings",
        trophies: 0,
        captain: "Shikhar Dhawan",
        primary: "red",
        secondary: "gold"
    },
    {
        team: "Gujarat Titans",
        trophies: 1,
        captain: "Shubman Gill",
        primary: "navy",
        secondary: "purple"
    },
    {
        team: "Lucknow Super Giants",
        trophies: 0,
        captain: "KL Rahul",
        primary: "lightblue",
        secondary: "orange"
    }
];

var team = document.querySelector('#team')
var trophies = document.querySelector('#trophies')
var captain = document.querySelector('#captain')
var btn = document.querySelector("button")
var main = document.querySelector('main')
console.log(main);



btn.addEventListener("click", function(){
    const a = Math.floor(Math.random()* iplTeams.length)
    team.innerHTML = iplTeams[a].team
    team.style.color = iplTeams[a].secondary
    // team.style.backgroundColor = iplTeams[a].primary
    trophies.innerHTML = iplTeams[a].trophies
    trophies.style.color = iplTeams[a].secondary
    // trophies.style.backgroundColor = iplTeams[a].primary
    captain.innerHTML = iplTeams[a].captain
    captain.style.color = iplTeams[a].secondary
    // captain.style.backgroundColor = iplTeams[a].primary
    
    
    main.style.backgroundColor = iplTeams[a].primary
})
