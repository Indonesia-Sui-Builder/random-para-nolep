export interface Lesson {
  id: string;
  title: string;
  type: 'reading' | 'challenge';
  isCompleted: boolean;
}

export interface LessonDetail extends Lesson {
  descriptionMarkdown: string;
  starterCode: string;
  expectedOutput: string;
  solutionCode: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export interface LessonDetailMap {
  [lessonId: string]: LessonDetail;
}
