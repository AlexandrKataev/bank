import { Header } from '@layouts';
import './App.scss';
import { CurrentCard } from '@entities';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="homepage">
        <CurrentCard />
      </div>
    </div>
  );
}

export default App;
