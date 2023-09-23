import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import MyPage from '../../pages/Mypage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
