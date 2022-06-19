import React from 'react';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './global';
import Routesapp from './routes';


const App = () => {
  return (
  
     <AuthProvider>
      <Routesapp />
      <GlobalStyle />
     </AuthProvider>
  
  );
}

export default App;