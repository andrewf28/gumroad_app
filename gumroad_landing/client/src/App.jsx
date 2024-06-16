// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatorLanding from './pages/CreatorLanding';
import RichText from './features/props/RichText';
import ReactDOM from 'react-dom';


function App() {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/creators/:creatorId" element={<CreatorLanding />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;