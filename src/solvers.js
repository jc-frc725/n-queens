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
  for (var i = 0; i < n; i++) {
    // for (var j = 0; j < n; j++) {
    //  // place a piece
    //  // check if rook conflict exists
    //  // if so, remove piece
    //  // if not, move onto next board place
    solution.togglePiece(i, i);

    // }
  }
  // toggle pieces on solution on each iteration - make row and column indexs i and j
  // solution.toggle(i, j) <-- only called n times
  //
  console.log(solution);
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

  // var newBoard = new Board({n: n});
  // var solutionCount = 0;

  // Create factorial helper function which will help us recursively repeat our function until 'n' becomes 1
  var factorial = function(n) {
    var nextN = n - 1;
    // Base case
    if (n === 1 || n === 0) {
      return n; // return 1;
    }
    return n * factorial(nextN);
  };
  var solutionCount = factorial(n);
  // console.log(factorial(5));

  // we will need to iterate over


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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
