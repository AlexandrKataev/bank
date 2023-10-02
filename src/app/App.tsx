import { Header } from '@layouts';
import './App.scss';

import { Routing } from './Routing';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routing />
      </main>
    </>
  );
}

export default App;
