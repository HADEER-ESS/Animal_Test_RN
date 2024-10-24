import React, { useState } from 'react';
import UserViewModelImplementation from './viewModels/UserViewModelImpl';
import UserScreen from './view/screens/UserScreen';


const App = () => {

  // User View-Model and UserScreen
  const userViewModel = new UserViewModelImplementation();
  const [userData, setUserData] = useState(userViewModel.user);
  const [showFlag, setShowFlag] = useState(false);

  function handleUserUpdateData() {
    const updatedUser = userViewModel.showUser();
    setUserData(updatedUser); // update state with the new user object
    setShowFlag(true);

  }

  return (
    <UserScreen
      user={userData}
      onUpdateUser={handleUserUpdateData}
      viewModel={userViewModel}
      appeare={showFlag}
    />
  );
}

export default App;
