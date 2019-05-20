$(document).ready(function() {
    var characters = {
        "Obi-Wan Kenobi": {
            name: "Obi-Wan Kenobi",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/obi-wan.jpg",
            enemyAttackBack: 15
        },
        "Luke Skywalker": {
            name: "Luke Skywalker",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/skywalker.jpg",
            enemyAttackBack: 5
        },
        "Darth Sidious": {
            name: "Darth Sidious",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/darth-sidious.jpg",
            enemyAttackBack: 5
        },
        "Darth Maul": {
            name: "Darth Maul",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/darth-maul.jpg",
            enemyAttackBack: 25
        }
    };
        console.log(characters);

        var renderOne = function(character, renderArea){
            var charDiv = $("div class = 'character' data-name'" + character.name + "'>");
            var charName = $("<div class='character.name'>").text(character.name);
            var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
            var charHealth = $("<div class='character-health'>").text(character_health);
            charDiv.append(charName).append(charImage).append(charHealth);
            $(renderArea).append(charDiv);

        }

        var renderCharacters = function(charObj, autoRenders) {
            if (areaRender === "#characters-section") {
                $(areaRender).empty()
                for (var key in charObj) {
                    if(charObj.hasOwnProperty(key)) {
                        renderOne(charObj[key], areaRender);
                }
            }
        }
        renderCharacters(characters, "#characters-sections");
    }
});
