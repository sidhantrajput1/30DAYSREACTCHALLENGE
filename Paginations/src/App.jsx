import { useState } from "react";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Settings from "./component/Settings";
import Tabs from "./component/Tabs";

const App = () => {
  const [user, setUser] = useState({
    name : "",
    email : "",
    phone : ""
  });

  const tabData = [
    {
      label : "Home",
      content : <Home user={user} setUser={setUser} />
    }, 
    {
      label : "Profile",
      content : <Profile user={user} />
    },
    {
      label : "Settings",
      content : <Settings />
    }
  ]
  return (
    <div className='bg-gray-700 h-[100vh] text-white'>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;
