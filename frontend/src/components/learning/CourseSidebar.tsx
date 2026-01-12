import { Link } from '@tanstack/react-router';
import { BookOpen, Code, CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useCourseStore } from '@/store/courseStore';
import type { Course, Module } from '@/types/course';

interface CourseSidebarProps {
  course: Course;
  activeLessonId: string;
}

interface ModuleSectionProps {
  module: Module;
  courseId: string;
  activeLessonId: string;
}

function ModuleSection({ module, courseId, activeLessonId }: ModuleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isLessonCompleted } = useCourseStore();

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-700 rounded-lg transition-colors"
      >
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>{module.title}</span>
      </button>

      {isExpanded && (
        <div className="ml-2 mt-1 space-y-1">
          {module.lessons.map((lesson) => {
            const isActive = lesson.id === activeLessonId;
            const isCompleted = isLessonCompleted(lesson.id);

            return (
              <Link
                key={lesson.id}
                to="/course/$courseId/lesson/$lessonId"
                params={{ courseId, lessonId: lesson.id }}
                className={`
                  flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors
                  ${isActive
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-zinc-200 hover:bg-zinc-700 hover:text-white'}
                `}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                ) : lesson.type === 'challenge' ? (
                  <Code className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                )}
                <span className="truncate">{lesson.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CourseSidebar({ course, activeLessonId }: CourseSidebarProps) {
  return (
    <div className="h-full bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
      <div className="p-4 border-b border-zinc-800">
        <h2 className="font-bold text-white text-lg">{course.title}</h2>
        <p className="text-xs text-zinc-400 mt-1">{course.description}</p>
      </div>

      <nav className="p-3">
        {course.modules.map((module) => (
          <ModuleSection
            key={module.id}
            module={module}
            courseId={course.id}
            activeLessonId={activeLessonId}
          />
        ))}
      </nav>
    </div>
  );
}
