import { Link } from 'react-router-dom';
import { FaRegCircleQuestion } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="h-[90px]">
      <div className="flex justify-between items-center h-full">
        <h1 className="h-full">
          <img src="./brand.png" alt="Brand" className="h-full" />
        </h1>

        <Link to="/">
          <h2 className="font-bold text-2xl">거지 월드</h2>
        </Link>

        <Link to="/guide">
          <button type="button" className="w-[46px]">
            <FaRegCircleQuestion size="100%" />
          </button>
        </Link>
      </div>
    </header>
  );
}
