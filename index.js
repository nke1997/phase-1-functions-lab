// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
};

function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street) * 264); 
}