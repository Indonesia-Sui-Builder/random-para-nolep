import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CourseState {
  completedLessonIds: string[];
  currentCode: string;
  isProcessing: boolean;
  consoleOutput: string;

  // Actions
  markLessonCompleted: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  setCurrentCode: (code: string) => void;
  setIsProcessing: (processing: boolean) => void;
  setConsoleOutput: (output: string) => void;
  resetConsole: () => void;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      completedLessonIds: [],
      currentCode: '',
      isProcessing: false,
      consoleOutput: '',

      markLessonCompleted: (lessonId: string) => {
        const { completedLessonIds } = get();
        if (!completedLessonIds.includes(lessonId)) {
          set({ completedLessonIds: [...completedLessonIds, lessonId] });
        }
      },

      isLessonCompleted: (lessonId: string) => {
        return get().completedLessonIds.includes(lessonId);
      },

      setCurrentCode: (code: string) => set({ currentCode: code }),

      setIsProcessing: (processing: boolean) => set({ isProcessing: processing }),

      setConsoleOutput: (output: string) => set({ consoleOutput: output }),

      resetConsole: () => set({ consoleOutput: '' }),
    }),
    {
      name: 'lms-progress',
      partialize: (state) => ({ completedLessonIds: state.completedLessonIds }),
    }
  )
);
