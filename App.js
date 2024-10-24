import React, { useState } from 'react';
import UserViewModelImplementation from './viewModels/UserViewModelImpl';
import UserScreen from './view/screens/UserScreen';


const App = () => {

  // User View-Model and UserScreen
  const userViewModel = new UserViewModelImplementation();
  const [userData, setUserData] = useState(userViewModel.user);

  function handleUserUpdateData() {
    const updatedUser = userViewModel.updateUserData();
    setUserData(updatedUser); // update state with the new user object

  }

  return (
    <UserScreen
      user={userData}
      onUpdateUser={handleUserUpdateData}
    />
  );
}

export default App;
