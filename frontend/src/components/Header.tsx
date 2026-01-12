import { Link } from '@tanstack/react-router';
import { Code2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 px-4 flex items-center bg-zinc-900 border-b border-zinc-800">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-bold text-white">CodeLearn</span>
      </Link>
    </header>
  );
}
