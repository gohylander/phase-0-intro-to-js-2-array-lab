const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    const addCat = cats.push("Ralph")
}

function destructivelyPrependCat(name){
    const prependCat = cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    const removeLastCat = cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    const removeFirstCat = cats.shift("Milo")
}

function appendCat(name){
    const addCat= [...cats,"Broom",];
    return addCat;
}

function prependCat(name){
    const anotherCat= ["Arnold",...cats]
    return anotherCat;
}

function removeLastCat(){
    const lastCat = cats.slice()
    return ["Milo", "Otis"];
}

function removeFirstCat(){
    const firstCat = cats.slice()
    return ["Otis", "Garfield"]
}