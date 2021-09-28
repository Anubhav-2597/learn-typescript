function printAddress(street: string, streetTwo?: string, state = 'AZ'){
    console.log(street);
    if(streetTwo){
        console.log(streetTwo);
    }
    console.log(state);
}

printAddress('123, tilak nagar'); 
printAddress('144 savid nagar', 'suite 405 SE');
printAddress('144 Goyal nagar', 'wall street', 'UT');

//////////////////////////////////////////////////////////////////////////

function lineupCard(team: string, ...players: string[]){
    console.log("Team: " + team);
    for(let player of players){
        console.log(player);
    }
}

lineupCard("Barcelona", "Messi", "Ronaldo", "Neymar");