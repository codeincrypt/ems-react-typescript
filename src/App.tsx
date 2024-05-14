import { BrowserRouter } from 'react-router-dom';
import Navigation from './router/routing';
import "./assets/css/style.scss"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;