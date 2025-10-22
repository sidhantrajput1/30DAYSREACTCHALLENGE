import React from 'react';
import ModalCoponent from './component/modalCoponent';
import Tooltip from './component/Tooltip';
import ToastNotification from './component/ToastNotification';


const App = () => {
  return (
    <div className='flex flex-col'>
      {/* <Modal /> */}
      <ModalCoponent />
      <Tooltip />
      <ToastNotification />
    </div>
  );
}

export default App;
