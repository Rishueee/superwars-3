const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [


    ];
    // Create players using for loop
    
    players.forEach((player,index) => {
        detailedPlayers.push({

            name:player,
            strength:(2+index),
            image:'images/super-' + (index + 1) + '.png',
            type: index%2==0?"hero":"villain",
            id:index+1
        })
    });
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    
   
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const view = (userobj)=>{
    let player = document.createElement("div");

    player.classList.add("player");

    let image = document.createElement("img");

    image.setAttribute("src", userobj.image);

    image.setAttribute("alt","")

    let name = document.createElement("div");

    name.className="name";

    name.textContent = userobj.name;

    

    let strength = document.createElement("div");

    strength.textContent = userobj.strength;

    strength.className = "strength";

    player.append(image, name, strength);

    return player;

}

const buildPlayers = (players, type) => {

    let fru = document.createElement("div");

    players.filter((player) => player.type == type).forEach((player) => fru.append(view(player)));

    return fru.innerHTML;

  

}

const play = (players) => {


    document.getElementById("heroes").innerHTML = buildPlayers(players, 
        "hero");
''
    document.getElementById("villains").innerHTML = buildPlayers(players, 
        "villain");

}

window.onload = () => {
    play(initPlayers
        (PLAYERS)
        
        );
}