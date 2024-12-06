//Challenge 2: Speed Detector (Toy Problem)
function speedDetector(speed) {
    const speedLimit = 70; 
    const demeritPoint = 5; 

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / demeritPoint);
        console.log(`Points: ${points}`);
        if (points > 12) {
            console.log("License suspended");
        }
    }
}

speedDetector(180);
