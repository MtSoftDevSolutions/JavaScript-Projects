function displayType(character) {
    var characterType = character.getAttribute ("data-character-type");
    alert(characterType + " was the most popular model of " + character.innerHTML);
}