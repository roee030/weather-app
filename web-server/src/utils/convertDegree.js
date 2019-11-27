const convertDegree = (fahrenheit) => {
        var fTemp = fahrenheit;
        var fToCel = (fTemp - 32) * 5 / 9;
        return Math.round(fToCel)
}      
module.exports = convertDegree; 
