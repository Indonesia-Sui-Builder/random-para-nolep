import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getLessonDetail } from '@/data/courses';

interface ProblemDescriptionProps {
  lessonId: string;
}

export function ProblemDescription({ lessonId }: ProblemDescriptionProps) {
  const lesson = getLessonDetail(lessonId);

  if (!lesson) {
    return (
      <div className="h-full bg-zinc-900 flex items-center justify-center">
        <p className="text-white">Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
      <div className="p-6 markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-zinc-700">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg font-bold text-white mt-6 mb-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-semibold text-white mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-white leading-relaxed mb-4">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="text-white list-disc list-inside mb-4 space-y-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="text-white list-decimal list-inside mb-4 space-y-1">{children}</ol>
            ),
            li: ({ children }) => <li className="text-white">{children}</li>,
            strong: ({ children }) => (
              <strong className="font-bold text-white">{children}</strong>
            ),
            code: ({ className, children }) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';

              if (language) {
                return (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                );
              }

              return (
                <code className="text-blue-300 bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <div className="mb-4 overflow-hidden rounded-lg border border-zinc-700">
                {children}
              </div>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-blue-400 hover:underline">
                {children}
              </a>
            ),
          }}
        >
          {lesson.descriptionMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
