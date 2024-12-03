//Challenge 2: Speed Detector (Toy Problem)
function radarDevice(speed) { //This function is called radar device.
    const speedLimit = 70; //The legal velocitylimit is 70.
    const distancePerPoint = 5; // The distance travelled per every point is 5km.
  
    if (speed <= speedLimit) {//This a conditional statement. it checks if the speed is <= the velocitylimit
        console.log("Ok"); //If true it will display the string "ok".
    } else if (speed > speedLimit) {
        // If the speed is greater than the velocitylimit,velocitylimit is being called.

    }
}  
    radarDevice(80); 

radarDevice(210); 
radarDevice(50);