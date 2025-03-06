// Function to calculate the distance from the headquarters in blocks
function distanceFromHqInBlocks(block) {
  const hqBlock = 42;
  return Math.abs(block - hqBlock);
}

// Function to calculate the distance from the headquarters in feet
function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264; // 1 block = 264 feet
}

// Function to calculate the distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  return blocksTravelled * 264; // 1 block = 264 feet
}

// Function to calculate the fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat rate for distance over 2000 feet but under 2500 feet
  } else {
    return "cannot travel that far"; // rides over 2500 feet are not allowed
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
