import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';

function App() {
  return (
    <div className="App">
      {/* <Task1 /> */}
      {/* Comment: Task1 Random name */}
      <Task2 />
      {/* Comment: Task2 Todo app include task 3 */}
      {/* <Task4 min="0" max="10" /> */}
      {/* <Task5 /> */}
      {/* Comment: Task5 get API data */}
      {/* <ErrorBoundary><Task6 /></ErrorBoundary> */}
      {/* Comment: Task6 get API data handle the error*/}
      {/* <Task7 /> */}
      {/* <Task8 /> */}
      {/* Comment: Task 8 include task 9-10 */}

    </div>
  );
}

export default App;
