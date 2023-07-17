let x = Number(prompt("x oxu uzerindeki noqteni qeyd edin!"))
let y = Number(prompt("y oxu uzerindeki noqteni qeyd edin!"))


if(x>0 & y>0){
    console.log(` x=${x} , y=${y} olduqda hemin noqte birinci rubde yerlesir`)
}else if(x<0 & y>0){
    console.log(` x=${x} , y=${y} olduqda hemin noqte ikinci rubde yerlesir`)  
}else if(x<0 & y<0){
    console.log(` x=${x} , y=${y} olduqda hemin noqte ucuncu rubde yerlesir`)
}else if(x>0 & y<0){
    console.log(` x=${x} , y=${y} olduqda hemin noqte birinci rubde yerlesir`)
}else if(x>0 || x<0 & y===0){
    console.log(` x=${x} , y=${y} olduqda hemin noqte  absis oxu uzerinde yerlesir`)
}else if(y>0 || y<0 & x===0 ){
    console.log(` x=${x} , y=${y} olduqda hemin noqte ordinat oxu uzerinde yerlesir`)
}else{
    console.log(` x=${x} , y=${y} olduqda hemin noqte koordinat baslangicinda  yerlesir`)
}



