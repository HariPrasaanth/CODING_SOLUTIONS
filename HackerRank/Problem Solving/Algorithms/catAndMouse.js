// Cats and a Mouse
function catAndMouse(x, y, z) {
    let x_units = z>x?z-x:x-z;
    let y_units = z>y?z-y:y-z;
    if(x_units == y_units){
        return "Mouse C";
    }
    else if(x_units > y_units){
        return "Cat B";
    }
    else{
        return "Cat A";
    }
}