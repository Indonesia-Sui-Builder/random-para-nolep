import { Monitor } from 'lucide-react';

export function MobileWarning() {
  return (
    <div className="md:hidden flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-zinc-900 p-6 text-center">
      <Monitor className="w-16 h-16 text-zinc-500 mb-4" />
      <h2 className="text-xl font-bold text-white mb-2">Desktop Required</h2>
      <p className="text-zinc-400 max-w-sm">
        Untuk pengalaman belajar yang optimal, silakan buka halaman ini di perangkat desktop dengan layar yang lebih lebar.
      </p>
    </div>
  );
}
