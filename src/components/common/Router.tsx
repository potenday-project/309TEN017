import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Post from '../../pages/Post';
import Guide from '../../pages/Guide';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
  );
}
