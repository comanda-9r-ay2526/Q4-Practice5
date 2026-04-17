function carParking(){
    let carCounter = 15;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Vehicle #" + carCounter + " is entering");
        carCounter += 1;
    }
}
