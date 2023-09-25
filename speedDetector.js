function speedDetector(speed){
    const speedlimit =80;
    const kmPerDemeritPoint =5;

    if(speed <= speedLimit){
        return "OK";
    }else {
        const demeritPoints =(speed- speedlimit)/ kmPerDemeritPoint;

        if (demeritPoints <=12){
            return ("Points:"+ demeritPoints)
        }else{
            return("License suspended");
        }
    }
}
console.log(speedDetector(90));
console.log(speedDetector(70));
console.log(speedDetector(150));
console.log(speedDetector(40));