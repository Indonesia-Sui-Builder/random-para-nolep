import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { getCourse } from '@/data/courses';

export const Route = createFileRoute('/course/$courseId')({
  beforeLoad: ({ params }) => {
    const course = getCourse(params.courseId);
    if (!course) {
      throw redirect({ to: '/' });
    }
    return { course };
  },
  component: CourseLayout,
});

function CourseLayout() {
  return <Outlet />;
}
