import { createFileRoute, Link } from '@tanstack/react-router';
import { BookOpen, ArrowRight } from 'lucide-react';
import { courses } from '@/data/courses';

export const Route = createFileRoute('/')(
  {
    component: HomePage,
  }
);

function HomePage() {
  const firstCourse = courses[0];
  const firstLesson = firstCourse?.modules[0]?.lessons[0];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Learn to Code
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          Pelajari dasar-dasar pemrograman dengan latihan interaktif dan feedback langsung.
        </p>

        {firstCourse && firstLesson && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-left mb-6">
            <h2 className="font-semibold text-white mb-2">{firstCourse.title}</h2>
            <p className="text-sm text-zinc-500 mb-4">{firstCourse.description}</p>

            <Link
              to="/course/$courseId/lesson/$lessonId"
              params={{ courseId: firstCourse.id, lessonId: firstLesson.id }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              Mulai Belajar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <p className="text-xs text-zinc-600">
          Dibuat dengan ❤️ untuk pembelajaran yang menyenangkan
        </p>
      </div>
    </div>
  );
}
