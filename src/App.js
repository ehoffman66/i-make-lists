import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<ListCreationForm />} />
        <Route path="/lists/:id" element={<ListDisplay />} />
      </Routes>
    </Router>
  );
}
