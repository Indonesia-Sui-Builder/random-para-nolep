import { Panel, Group, Separator } from 'react-resizable-panels';
import { CourseSidebar } from './CourseSidebar';
import { ProblemDescription } from './ProblemDescription';
import { CodeWorkspace } from './CodeWorkspace';
import { MobileWarning } from './MobileWarning';
import type { Course } from '@/types/course';

interface ThreePanelLayoutProps {
  course: Course;
  lessonId: string;
}

export function ThreePanelLayout({ course, lessonId }: ThreePanelLayoutProps) {
  return (
    <>
      <MobileWarning />
      <div className="h-[calc(100vh-64px)] hidden md:block">
        <Group orientation="horizontal" className="h-full">
          {/* Pane A - Sidebar (20%) */}
          {/* <Panel id="sidebar" defaultSize={20} minSize={15} maxSize={30}> */}
          <CourseSidebar course={course} activeLessonId={lessonId} />
          {/* </Panel> */}

          <Separator className="w-1.5 bg-zinc-800 hover:bg-blue-500 transition-colors cursor-col-resize" />

          {/* Pane B - Problem Description (40%) */}
          <Panel id="description" defaultSize={40} minSize={25}>
            <ProblemDescription lessonId={lessonId} />
          </Panel>

          <Separator className="w-1.5 bg-zinc-800 hover:bg-blue-500 transition-colors cursor-col-resize" />

          {/* Pane C - Code Editor & Console (40%) */}
          <Panel id="workspace" defaultSize={40} minSize={25}>
            <CodeWorkspace lessonId={lessonId} />
          </Panel>
        </Group>
      </div>
    </>
  );
}
