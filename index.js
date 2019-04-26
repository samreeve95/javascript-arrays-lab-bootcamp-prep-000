var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
destructivelyAppendKitten(name)
{
  kittens.push(name);
}
destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}
destructivelyRemoveLastKitten()
{
  kittens.pop();
}
destructivelyRemoveFirstKitten()
{
  kittens.shift();
}


appendKitten(name)
{
  return kittens.concat(name);
}
prependKitten(name)
{
  
}
removeLastKitten()
{
  
}
removeFirstKitten()
{
  
}