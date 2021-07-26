function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color: "Orange",
        Breed: "Maine Coon",
        Age: 2,
        Sound:"Meow!",
        Name:"Merrick",
    };
    document.getElementById("Dictionary").innerHTML= Animal.Breed;
    delete Animal.Color;
    document.getElementById("Dictionary1").innerHTML= Animal.Color;
}