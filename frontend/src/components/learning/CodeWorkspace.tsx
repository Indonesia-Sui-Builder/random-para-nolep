import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Loader2 } from 'lucide-react';
import { useEffect, useCallback } from 'react';
import { useCourseStore } from '@/store/courseStore';
import { getLessonDetail } from '@/data/courses';

interface CodeWorkspaceProps {
  lessonId: string;
}

export function CodeWorkspace({ lessonId }: CodeWorkspaceProps) {
  const lesson = getLessonDetail(lessonId);
  const {
    currentCode,
    setCurrentCode,
    isProcessing,
    setIsProcessing,
    consoleOutput,
    setConsoleOutput,
    markLessonCompleted,
    resetConsole,
  } = useCourseStore();

  // Load starter code when lesson changes
  useEffect(() => {
    if (lesson) {
      setCurrentCode(lesson.starterCode);
      resetConsole();
    }
  }, [lessonId, lesson, setCurrentCode, resetConsole]);

  const handleReset = useCallback(() => {
    if (lesson) {
      setCurrentCode(lesson.starterCode);
      resetConsole();
    }
  }, [lesson, setCurrentCode, resetConsole]);

  const handleRunCode = useCallback(async () => {
    if (!lesson) return;

    setIsProcessing(true);
    resetConsole();

    // Simulate server latency (1-2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Simple mock execution - capture console.log output
      let output = '';
      const mockConsole = {
        log: (...args: unknown[]) => {
          output += args.map((arg) => String(arg)).join(' ') + '\n';
        },
      };

      // Create a safe evaluation context
      const codeToRun = currentCode;
      const func = new Function('console', codeToRun);
      func(mockConsole);

      const trimmedOutput = output.trim();
      const expectedOutput = lesson.expectedOutput.trim();

      if (trimmedOutput === expectedOutput) {
        setConsoleOutput(`${trimmedOutput}\n\n✅ Passed! Output matches expected result.`);
        markLessonCompleted(lessonId);
      } else {
        setConsoleOutput(
          `${trimmedOutput}\n\n❌ Failed: Expected "${expectedOutput}" but got "${trimmedOutput}"`
        );
      }
    } catch (error) {
      setConsoleOutput(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  }, [currentCode, lesson, lessonId, markLessonCompleted, resetConsole, setConsoleOutput, setIsProcessing]);

  if (!lesson) {
    return (
      <div className="h-full bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-500">Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-zinc-950 flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <span className="text-sm font-medium text-zinc-400">main.js</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            disabled={isProcessing}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleRunCode}
            disabled={isProcessing}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-500 rounded-md transition-colors disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={currentCode}
          onChange={(value) => setCurrentCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'JetBrains Mono, Fira Code, monospace',
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            automaticLayout: true,
          }}
        />
      </div>

      {/* Console Output */}
      <div className="h-36 bg-zinc-900 border-t border-zinc-800 flex flex-col">
        <div className="px-4 py-2 border-b border-zinc-800">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Console</span>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          {isProcessing ? (
            <div className="flex items-center gap-2 text-zinc-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Running code...</span>
            </div>
          ) : consoleOutput ? (
            <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">
              {consoleOutput}
            </pre>
          ) : (
            <p className="text-sm text-zinc-600">Click "Run" to execute your code</p>
          )}
        </div>
      </div>
    </div>
  );
}
