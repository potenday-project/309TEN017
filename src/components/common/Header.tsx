import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-[90px] bg-red-300">
      <div className="flex justify-between h-full [&_a]:h-full [&_button]:h-full">
        <h1 className="bg-red-200">LOGO AREA</h1>

        <h2 className="bg-red-200 [&>a]:inline-block [&>a]:h-full">
          <Link to="/">거지 월드</Link>
        </h2>

        <Link to="/guide">
          <button type="button" className="bg-red-200">
            도움말
          </button>
        </Link>
      </div>
    </header>
  );
}
