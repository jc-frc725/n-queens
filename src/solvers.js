/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// I: number
// O: a array of arrays that is our board
// C: 'n'x'n' board
// E: if passed 0

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  // loop over 'n'
  //
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //   }
  // }
  // toggle pieces on solution on each iteration - make row and column indexs i and j
  // solution.toggle(i, j) <-- only called n times
  //
  // console.log(solution);
  // console.log('this is n: ' + solution.get('n'));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};
/////////////////////////////////////////////////////////////////////////////////////

// I: is a number, which we need to use to create a 'new Board' that we can work with
// O: Number of solutions
// C:
// E: what if passed 0, what if passed 1

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board({n: n});
  var solutionCount = 0;
  var countNRooksHelper = function(row) {
    // if reached last row in this iteration of helper,
    // n should equal # of pieces placed | row is equal to n
    if (row === n) {
      // increment solutionCount
      solutionCount++;
      // go back up
      return;
    }

    // with board of n size, go over each row
    for (let i = 0; i < n; i++) {
      // place a piece
      newBoard.togglePiece(row, i);
      // check if board has no conflicts after placing piece
      // if so, recurse
      if (!newBoard.hasAnyRooksConflicts()) {
        // recursive into remaining problem
        countNRooksHelper(row + 1);
      }
      // unplace piece
      newBoard.togglePiece(row, i);
    }
  };
  countNRooksHelper(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n: n});

  var countNQueensHelper = function(row) {

    // if reached last row in this iteration of helper,
    // n should equal # of pieces placed | row is equal to n
    if (row === n) {
      // increment solutionCount
      solutionCount++;
      // go back up
      return;
    }

    // with board of n size, go over each row
    for (let i = 0; i < n; i++) {
      // place a piece
      newBoard.togglePiece(row, i);
      // check if board has no conflicts after placing piece
      // if so, recurse
      if (!newBoard.hasAnyQueensConflicts()) {
        // recursive into remaining problem
        countNQueensHelper(row + 1);
      }

      // unplace piece
      newBoard.togglePiece(row, i);

    }
  };
  countNQueensHelper(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};