let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (key in statistics) {
    if ((key.charAt(0) == "r") || (statistics[key] % 2 == 1)) {
        console.log(statistics[key]);
    }
}