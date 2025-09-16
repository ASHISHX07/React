const fruitList = ["Apple", "Banana", "Orange", "Mango"];

function App() {
    return (
        <ul>
            {fruitList.map((fruit, index, array) => {
              setTimeout(() => {
                return (
                    <li key={fruit}>
                        Number: {fruit}, index: {index}, array: {array}
                    </li>
                );
              }, 2000);
            })}
        </ul>
    );
}

export default App;