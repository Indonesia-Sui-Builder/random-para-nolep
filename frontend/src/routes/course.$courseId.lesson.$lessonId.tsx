import { createFileRoute, redirect } from '@tanstack/react-router';
import { getCourse, getLessonDetail } from '@/data/courses';
import { ThreePanelLayout } from '@/components/learning';

export const Route = createFileRoute('/course/$courseId/lesson/$lessonId')({
  beforeLoad: ({ params }) => {
    const course = getCourse(params.courseId);
    const lesson = getLessonDetail(params.lessonId);

    if (!course || !lesson) {
      throw redirect({ to: '/' });
    }

    return { course, lesson };
  },
  component: LessonPage,
});

function LessonPage() {
  const { course, lesson } = Route.useRouteContext();

  return <ThreePanelLayout course={course} lessonId={lesson.id} />;
}
