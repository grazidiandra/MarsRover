
const spirit = {
  name: 'spirit',
  direction: 'E',
  y: 9,
  x: 1,
  travelLog: [{ y: 9, x: 1 }]
}

const opportunity = {
  name: 'opportunity',
  direction: 'W',
  y: 9,
  x: 8,
  travelLog: [{ y: 9, x: 8 }]
}

const grid = [
  // 0x    1x     2x     3x     4x    5x     6x     7x     8x    9x 
  [false, false, false, false, false, false, false, false, false, false],  //0y
  [false, false, true, false, false, false, false, false, false, false],   //1y
  [false, false, false, false, false, false, false, false, false, false],  //2y
  [false, false, false, false, false, false, false, true, false, false],   //3y
  [false, false, false, false, true, false, false, false, false, false],   //4y
  [false, false, false, false, false, false, false, false, false, false],  //5y
  [false, true, false, false, false, false, false, false, false, false],   //6y
  [false, false, false, false, false, false, false, true, false, false],   //7y
  [false, false, false, false, true, false, false, false, false, false],   //8y
  [false, false, false, false, false, false, false, false, false, false]   //9y
]

function turnLeft(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'S';
  } else if (rover.direction === 'S') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'N';
  }
  return `New direction: ${rover.direction}`;
}

function turnRight(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'S';
  } else if (rover.direction === 'S') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'N';
  }
  return `New direction: ${rover.direction}`;
}

function moveForward(rover, grid) {
  if (rover.direction === 'N' && (rover.y - 1) >= 0) {
    if (grid[rover.y - 1][rover.x] === false) {
      rover.y -= 1;
      rover.travelLog.push({ y: rover.y, x: rover.x });
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y + 1][rover.x] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else if (rover.direction === 'W' && (rover.x - 1) >= 0) {
    if (grid[rover.y][rover.x - 1] === false) {
      rover.x -= 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y][rover.x + 1] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else if (rover.direction === 'S' && (rover.y + 1) <= 9) {
    if (grid[rover.y + 1][rover.x] === false) {
      rover.y += 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y - 1][rover.x] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else if (rover.direction === 'E' && (rover.x + 1) <= 9) {
    if (grid[rover.y][rover.x + 1] === false) {
      rover.x += 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y][rover.x - 1] = false;
      return ` rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else {
    return 'You can not place rover outside of the grid!'
  }
}

function moveBackward(rover) {
  if (rover.direction === 'N' && (rover.y + 1) <= 9) {
    if (grid[rover.y + 1][rover.x] === false) {
      rover.y += 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y - 1][rover.x] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else if (rover.direction === 'W' && (rover.x + 1) <= 9) {
    if (grid[rover.y][rover.x + 1] === false) {
      rover.x += 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y][rover.x - 1] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`;
    }
  } else if (rover.direction === 'S' && (rover.y - 1) >= 0) {
    if (grid[rover.y - 1][rover.x] === false) {
      rover.y -= 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y + 1][rover.x] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`
    }
  } else if (rover.direction === 'E' && (rover.x - 1) >= 0) {
    if (grid[rover.y][rover.x - 1] === false) {
      rover.x -= 1;
      rover.travelLog.push({ y: rover.y, x: rover.x })
      grid[rover.y][rover.x] = rover.name;
      grid[rover.y][rover.x + 1] = false;
      return `rover: ${rover.name}, y: ${rover.y}, x: ${rover.x} and direction: ${rover.direction}`;
    } else {
      return `Obstacle!`
    }
  } else {
    return 'You can not place rover outside of the grid!'
  }
}

function command(rover, grid, orders) {
  for (let i = 0; i < orders.length; i++) {
    switch (orders[i]) {
      case 'f':
        console.log(moveForward(rover, grid));
        break;
      case 'l':
        console.log(turnLeft(rover));
        break;
      case 'b':
        console.log(moveBackward(rover, grid));
        break;
      case 'r':
        console.log(turnRight(rover));
        break;
      default:
        console.log(`Please, inputs must be f, b, r, or l`);
    }
  }
  console.log(grid);
  return ` rover: ${rover.name} - x: ${rover.x}, y: ${rover.y} and direction: ${rover.direction}`;
}

