const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]

function kittens(){
  
  var kittens =["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kitten.shift();
  return kitten;
}

function appendKiteen(name){
  [...kittens, name]
  return kittens;
}