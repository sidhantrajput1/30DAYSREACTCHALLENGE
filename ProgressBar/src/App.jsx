import React from 'react';
import ProgressBar from './components/ProgressBar';
import OtpInput from './components/OtpInput';

const App = () => {
  return (
    <div className='p-4'>
      {/* <h1 className='text-center font-extrabold text-2xl'>Progress Bar</h1>
      <ProgressBar progress={50}/> */}
      <OtpInput />
    </div>
  );
}

export default App;
