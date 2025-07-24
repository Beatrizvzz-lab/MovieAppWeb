import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
