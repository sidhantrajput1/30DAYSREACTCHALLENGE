import React from 'react';
import InputBox from './component/InputBox';

const App = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-3'>TODO LIST</h1>

      <div className="">
        <InputBox />
      </div>
    </div>
  );
}

export default App;
