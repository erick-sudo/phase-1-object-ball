function gameObject(){
    const game = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson" : {
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assists: 12,
              steals: 3,
              blocks: 1,
              slamDunks: 1
          },
          "Reggie Evans" : {
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assists: 12,
              steals: 12,
              blocks: 12,
              slamDunks: 7
          },
          "Brook Lopez" : {
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assists: 10,
              steals: 3,
              blocks: 1,
              slamDunks: 15
          },
          "Mason Plumlee" : {
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assists: 6,
              steals: 3,
              blocks: 8,
              slamDunks: 5
            },
            "Jason Terry" : {
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assists: 2,
              steals: 4,
              blocks: 11,
              slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien" : {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
        },
        "Bismak Biyombo" : {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
        },
        "DeSagna Diop" : {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
        },
        "Ben Gordon" : {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood" : {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    }
  
    return game;
}

function numPointsScored(playerName){
    const myGameObject = gameObject()
    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
          if(player === playerName){
            return game[team]["players"][player]["points"]
          }
        }
    }
}

function shmyGameObjectze(playerName){
    const myGameObject = gameObject();
    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
          if(player === playerName){
            return game[team]["players"][player]["shoe"]
          }
        }
    }
}

function teamColors(teamName) {
    const myGameObject = gameObject()
    for(const team in myGameObject){
        if(myGameObject[team].teamName === teamName){
            return myGameObject[team]["colors"]
        }
    }
}

function teamNames() {
    const myGameObject = gameObject()
    let names = []
    for(const team in myGameObject){
        names.push(myGameObject[team].teamName)
    }

    return names
}

function playerNumbers(teamName){
    const myGameObject = gameObject()
    let jerseyNumbers = []
    for(const team in myGameObject){
        if(myGameObject[team].teamName === teamName){
            for(const player in myGameObject[team]["players"]){
                jerseyNumbers.push(myGameObject[team]["players"][player].number)
            }
            return jerseyNumbers
        }
    }
}

function playerStats(playerName){
    const myGameObject = gameObject();
    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
          if(player === playerName){
            return myGameObject[team]["players"][player]
          }
        }
    }
}

function bigShoeRebounds(){
    const myGameObject = gameObject();
    let playerWithLargestShoeSize = ""
    let largestShoeSize = 0
    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
          if(shoeSize(player)>largestShoeSize){
            largestShoeSize = shoeSize(player)
            playerWithLargestShoeSize = player
          }
        }
    }

    return playerStats(playerWithLargestShoeSize).rebounds
}

function mostPointsScored(){
    const myGameObject = gameObject()
    let mostPointsScored = 0
    let playerWithMostPointsScored = ""
    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
          if(playerStats(player).points>mostPointsScored){
                mostPointsScored = playerStats(player).points
                playerWithMostPointsScored = player
            }
        }
    }

    return playerWithMostPointsScored+" "+mostPointsScored+" Points"
}

function winningTeam(){
    const myGameObject = gameObject()
    let mostPoints = 0
    let teamWithMostPoints = ""
    for(const team in myGameObject){
        let points = 0
        for(const player in myGameObject[team]["players"]){
          points+=playerStats(player).points
        }
        console.log(points)
        if(points>mostPoints){
            mostPoints = points
            teamWithMostPoints = myGameObject[team].teamName
        }
    }

    return teamWithMostPoints
}

function playerWithLongestName(){
    const myGameObject = gameObject()
    let longestLength = 0
    let longestNamePlayer = ""

    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
            if(player.length > longestLength){
                longestLength = player.length
                longestNamePlayer = player
            }
        }
    }

    return longestNamePlayer
}

function doesLongNameStealATon(){
    const myGameObject = gameObject()
    let mostSteals = 0
    let playerWithMostSteals = ""
    let longestNamePlayer = playerWithLongestName()

    for(const team in myGameObject){
        for(const player in myGameObject[team]["players"]){
            if(playerStats(player).steals > mostSteals){
                mostSteals = playerStats(player).steals
                playerWithMostSteals = player
            }
        }
    }

    return longestNamePlayer===playerWithMostSteals
}

//console.log(doesLongNameStealATon())
