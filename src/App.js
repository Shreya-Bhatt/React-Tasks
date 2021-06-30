import './App.css';

function App() {
  //Task-1:
  let arr = [8,4,6,4,8,1,2];

  function removeDuplicates(arr) {
    return arr.filter((a, b) => arr.indexOf(a) === b);
  };

  function afterSorting() {
    let finalArray = removeDuplicates(arr);
    return finalArray.sort();
  }

  //Task-2: 
  let sum = 0;
  let term = 0;

  function sumOdd(n) {
    term = ( n + 2)/2;
    sum = term * term;
    return parseInt(sum);
  }

  function sumRange(l,r) {
      return sumOdd(r) - sumOdd(l);
  }

  return (
    <div className="App">
      <p>After sorting the numbers in ascending order: {afterSorting()}</p>
      <p>The sum of all odd numbers between 3 and 9 is: {sumRange(2,5)}</p>
    </div>
  );
}

export default App;
