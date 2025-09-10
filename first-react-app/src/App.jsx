const fruitList = ['Apple', 'Banana', 'Orange', 'Mango']

function App () {
  return (
    <ul>
      {fruitList.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Number: {fruit}, index: {index}, array: {array}
          </li>
        )
      }
      )}
      
    </ul>
  );
}

export default App;