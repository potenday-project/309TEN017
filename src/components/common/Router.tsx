import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Post from '../../pages/Post';
import Guide from '../../pages/Guide';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<Post />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
  );
}
