import { Header } from '@layouts';
import './App.scss';

import { Routing } from './Routing';

function App() {
  return (
    <div className="container">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
