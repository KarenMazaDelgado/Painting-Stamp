let strokes = [
  {
    points: [
      //1st character (right)
      { x: 319, y: 218 },
      { x: 340, y: 218 },
      { x: 380, y: 218 },
      { x: 410, y:218 },
      { x: 434, y: 218 }
    ],
    tolerance: 18,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 378, y: 142 },
      { x: 378, y: 170 },
      { x: 378, y: 195 },
      { x: 378, y: 247 },
      { x: 379, y: 273 }
    ],
    tolerance: 18,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 346, y: 265 },
      { x: 346, y: 288 },
      { x: 350, y: 317 },
      { x: 359, y: 337 },
      { x: 383, y: 344 },
      { x: 412, y: 338 },
      { x: 421, y: 308 },
      { x: 419, y: 263 }

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },

   {
    points: [
      { x: 346, y: 281 },
      { x: 381, y: 285 },
      { x: 416, y: 284 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
//(2)left
  {
    points: [
      { x: 144, y: 155 },
      { x: 106, y: 191 },
      { x: 65, y: 227 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 70, y: 181 },
      { x: 104, y: 193 },
      { x: 144, y: 214 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 123, y: 227 },
      { x: 91, y: 255 },
      { x: 59, y: 281 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 88, y: 231 },
      { x: 128, y: 253 },
      { x: 166, y: 273 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 81, y: 347 },
      { x: 81, y: 300 },
      { x: 114, y: 295 },
      { x: 138, y: 294 },
      { x: 141, y: 324 },
      { x: 143, y: 347 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  
  {
    points: [
      { x: 115, y: 275 },
      { x: 114, y: 330 },
      { x: 116, y: 382 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },

    //(3)UP
    {
    points: [
      { x: 173, y: 70 },
      { x: 238, y: 70 },
      { x: 301, y: 70 },
    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  
  {
    points: [
      { x: 177, y: 208 },
      { x: 181, y: 151 },
      { x: 198, y: 123 },
      { x: 213, y: 113 },
      { x: 236, y: 109 },
      { x: 254, y: 107 },
      { x: 272, y: 111 },
      { x: 281, y: 114 },
      { x: 287, y: 124 },
      { x: 291, y: 149 },
      { x: 297, y: 210 },


    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
    {
    points: [
      { x: 250, y: 70 },
      { x: 241, y: 89 },
      { x: 232, y: 103 },
      { x: 226, y: 110 },
      { x: 226, y: 150 },
      { x: 219, y: 226 },
      { x: 215, y: 241 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 256, y: 109 },
      { x: 259, y: 183 },
      { x: 265, y: 221 },
      { x: 270, y: 242 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },

  //4th (bottom)

  {
    points: [
      { x: 181, y:314 },
      { x: 186, y: 363 },
      { x: 208, y: 376 },
      { x: 228, y: 380 },
      { x: 269, y: 378 },
      { x: 288, y: 361 },
      { x: 295, y: 350 },
      { x: 300, y: 326 },
      { x: 301, y: 310 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },
  {
    points: [
      { x: 244, y: 333 },
      { x: 266, y: 309 },
      { x: 271, y: 284 },
      { x: 246, y: 281 },
      { x: 219, y: 290 },
      { x: 227, y: 313 },
      { x: 244, y: 335 },
      { x: 247, y: 378 },
      { x: 245, y: 407 },
      { x: 243, y: 415 },
      { x: 232, y: 426 },
      { x: 203, y: 435 },

    ],
    tolerance: 20,
    startTolerance: 22,
    endTolerance: 22
  },

];

let currentStrokeIndex = 0;
let userStroke = [];
let isDrawing = false;
let strokeStartedCorrectly = false;
let completedStrokes = [];


function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < strokes.length; i++) {
    completedStrokes.push(false);
  }
}

function draw() {
  background(245);

  push();
  noFill();
  stroke(0);
  strokeWeight(10);
  circle(250, 250, 480);
  pop();

  drawCompletedStrokes();

  if (currentStrokeIndex < strokes.length) {
    drawCurrentGuide(strokes[currentStrokeIndex]);
  }

  drawUserStroke();
}

function drawCompletedStrokes() {
  for (let i = 0; i < currentStrokeIndex; i++) {
    drawStrokePath(strokes[i], color(40, 40, 40), 12, false);
  }
}


//YELLOW GUIDE + START/END POINTS
function drawCurrentGuide(strokeObj) {
  // guide path
  drawStrokePath(strokeObj, color(255, 204, 0, 180), strokeObj.tolerance * 2, false);
  drawStrokePath(strokeObj, color(180, 140, 0), 3, false);

  // start point
  let start = strokeObj.points[0];
  let end = strokeObj.points[strokeObj.points.length - 1];

  push();
  noStroke();

  fill(0, 200, 0);
  circle(start.x, start.y, 16);

  fill(200, 0, 0);
  circle(end.x, end.y, 16);
  pop();

}

//the ACTUAL line
function drawStrokePath(strokeObj, strokeCol, strokeWeightValue, showPoints = false) {
  push();
  noFill();
  stroke(strokeCol);
  strokeWeight(strokeWeightValue);
  strokeJoin(ROUND);
  strokeCap(ROUND);

  beginShape();
  for (let pt of strokeObj.points) {
    vertex(pt.x, pt.y);
  }
  endShape();

  if (showPoints) {
    fill(0);
    noStroke();
    for (let pt of strokeObj.points) {
      circle(pt.x, pt.y, 6);
    }
  }
  pop();
}

function drawUserStroke() {
  if (userStroke.length < 2) return;

  push();
  noFill();
  stroke(20, 20, 20);
  strokeWeight(8);
  strokeJoin(ROUND);
  strokeCap(ROUND);

  beginShape();
  for (let pt of userStroke) {
    vertex(pt.x, pt.y);
  }
  endShape();
  pop();
}

function mousePressed() {
  if (currentStrokeIndex >= strokes.length) return;

  let currentStroke = strokes[currentStrokeIndex];
  let start = currentStroke.points[0];

  let d = dist(mouseX, mouseY, start.x, start.y);

  if (d <= currentStroke.startTolerance) {
    isDrawing = true;
    strokeStartedCorrectly = true;
    userStroke = [{ x: mouseX, y: mouseY }];
  } else {
    isDrawing = false;
    strokeStartedCorrectly = false;
    userStroke = [];
  }
}

function mouseDragged() {
  if (!isDrawing || currentStrokeIndex >= strokes.length) return;

  let currentStroke = strokes[currentStrokeIndex];

  if (pointNearStroke(mouseX, mouseY, currentStroke.points, currentStroke.tolerance)) {
    userStroke.push({ x: mouseX, y: mouseY });
  } else {
    //feedback here or allow to go outside??
   // userStroke.push({ x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  if (!isDrawing || currentStrokeIndex >= strokes.length) return;

  isDrawing = false;

  let currentStroke = strokes[currentStrokeIndex];
  let result = validateStroke(userStroke, currentStroke);

  if (result.success) {
    completedStrokes[currentStrokeIndex] = true;
    currentStrokeIndex++;
    userStroke = [];

    if (currentStrokeIndex >= strokes.length) {
    }
  } else {
    userStroke = [];
  }
}

function validateStroke(userPts, strokeObj) {
  if (userPts.length < 2) {
    return {
      success: false,
    };
  }

  let start = strokeObj.points[0];
  let end = strokeObj.points[strokeObj.points.length - 1];
  let userStart = userPts[0];
  let userEnd = userPts[userPts.length - 1];

  let goodStart = dist(userStart.x, userStart.y, start.x, start.y) <= strokeObj.startTolerance;
  let goodEnd = dist(userEnd.x, userEnd.y, end.x, end.y) <= strokeObj.endTolerance;

  let coverageData = getStrokeCoverage(userPts, strokeObj.points, strokeObj.tolerance);
  let coverage = coverageData.coverage;

  let directionGood = checkDirection(userPts, strokeObj.points);

  if (!goodStart) {
    return {
      success: false,
    };
  }

  if (coverage < 0.65) {
    return {
      success: false,
    };
  }

  if (!directionGood) {
    return {
      success: false,
    };
  }

  if (!goodEnd) {
    return {
    };
  }

  return {
    success: true,
  };
}

function pointNearStroke(px, py, strokePoints, tolerance) {
  for (let pt of strokePoints) {
    if (dist(px, py, pt.x, pt.y) <= tolerance) {
      return true;
    }
  }
  return false;
}

function getStrokeCoverage(userPts, targetPts, tolerance) {
  let covered = new Array(targetPts.length).fill(false);

  for (let i = 0; i < targetPts.length; i++) {
    for (let userPt of userPts) {
      if (dist(userPt.x, userPt.y, targetPts[i].x, targetPts[i].y) <= tolerance) {
        covered[i] = true;
        break;
      }
    }
  }

  let coveredCount = covered.filter(Boolean).length;
  return {
    covered,
    coverage: coveredCount / targetPts.length
  };
}

function checkDirection(userPts, targetPts) {
  if (userPts.length < 2 || targetPts.length < 2) return true;

  let userStart = userPts[0];
  let userEnd = userPts[userPts.length - 1];
  let targetStart = targetPts[0];
  let targetEnd = targetPts[targetPts.length - 1];

  let userVec = createVector(userEnd.x - userStart.x, userEnd.y - userStart.y);
  let targetVec = createVector(targetEnd.x - targetStart.x, targetEnd.y - targetStart.y);

  if (userVec.mag() === 0 || targetVec.mag() === 0) return false;

  userVec.normalize();
  targetVec.normalize();

  let dotProduct = userVec.dot(targetVec);

  // closer to 1 = same direction, closer to -1 = opposite direction
  return dotProduct > 0.3;
}


// function keyPressed() {
//   if (key === 'r' || key === 'R') {
//     resetCurrentStroke();
//   }
// }

// function resetCurrentStroke() {
//   userStroke = [];
//   isDrawing = false;
// }