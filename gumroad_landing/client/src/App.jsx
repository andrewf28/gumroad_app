// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatorLanding from './pages/CreatorLanding';

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