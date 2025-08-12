import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { runCode } from '../../services/operations/coursesApi';
import Loader from '../Loader';

const CodeEditor = () => {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('// Output will be displayed here\n// Click "Run Code" to see the output');
  const [staticOutput, setStaticOutput] = useState('')
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth);

  const handleRunCode = () => {
    // For now, just show a static output
    dispatch(runCode(code, setStaticOutput))
  };

  const handleEditorChange = (value, event) => {
    setCode(value)
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#0F0F0F] border-t border-[#2C2C2C] p-2 md:p-4 w-full">
      <div className="w-full bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2C2C2C] shadow-2xl">
        <div className="px-4 py-2 bg-[#1E1E1E] border-b border-[#2C2C2C] text-sm font-medium text-gray-300 flex justify-between items-center">
          <span>code.js</span>
          {isMobile && (
            <button 
              onClick={toggleExpand}
              className="text-gray-400 hover:text-white p-1"
              aria-label={isExpanded ? 'Minimize' : 'Maximize'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isExpanded ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                )}
              </svg>
            </button>
          )}
        </div>
        <div className={`${isMobile && !isExpanded ? 'h-[300px]' : 'h-[450px]'} transition-all duration-300 w-full`}>
          <Editor 
            height="100%"
            width="100%"
            defaultLanguage="javascript"
            defaultValue="// Start coding here..."
            theme="vs-dark"
            options={{
              automaticLayout: true,
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Fira Code, Menlo, Monaco, Consolas, monospace',
              minimap: { 
                enabled: true,
                renderCharacters: false
              },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              tabSize: 2,
              renderWhitespace: 'selection',
              cursorStyle: 'line',
              renderLineHighlight: 'all',
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                useShadows: true
              },
              lineNumbers: 'on',
              glyphMargin: true,
              contextmenu: true,
              autoIndent: 'full',
              formatOnType: true,
              formatOnPaste: true,
              suggestOnTriggerCharacters: true,
              bracketPairColorization: {
                enabled: true,
                independentColorPoolPerBracketType: true
              },
              'semanticHighlighting.enabled': true,
              overviewRulerLanes: 3,
              overviewRulerBorder: false,
              hideCursorInOverviewRuler: true,
              renderIndentGuides: true,
              matchBrackets: 'always',
              guides: {
                indentation: true,
                highlightActiveIndentation: true
              },
              padding: {
                top: 16,
                bottom: 16
              },
              colorDecorators: true
            }}
            beforeMount={(monaco) => {
              monaco.editor.defineTheme('custom-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                  { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
                  { token: 'keyword', foreground: '569CD6' },
                  { token: 'string', foreground: 'CE9178' },
                ],
                colors: {
                  'editor.background': '#1A1A1A',
                  'editor.foreground': '#D4D4D4',
                  'editor.lineHighlightBackground': '#2A2D2E',
                  'editorLineNumber.foreground': '#858585',
                  'editorLineNumber.activeForeground': '#C6C6C6',
                  'editor.selectionBackground': '#264F78',
                  'editor.inactiveSelectionBackground': '#3A3D41',
                }
              });
            }}
            onMount={(editor, monaco) => {
              monaco.editor.setTheme('custom-dark');
              window.addEventListener('resize', () => {
                editor.layout();
              });
            }}
            onChange={handleEditorChange}
          />
        </div>
        
        {/* Run Button and Output Section */}
        <div className="px-4 py-3 bg-[#1E1E1E] border-t border-[#2C2C2C] flex justify-between items-center">
          <button
            onClick={handleRunCode}
            className="px-4 py-2 bg-[#CBAB09] hover:bg-[#b39609] text-black font-medium rounded-md transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Run Code
          </button>
        </div>
        
        {/* Output Panel */}
        <div className="border-t border-[#2C2C2C] text-left">
          {loading ? (<Loader/>) : (<div>
            <div className="px-4 py-2 bg-[#1E1E1E] text-sm font-medium text-gray-300 border-b border-[#2C2C2C]">
            Output
          </div>
          <div className={`${isMobile && !isExpanded ? 'h-64' : 'h-80'} overflow-auto`}>
            <pre className="bg-black p-4 text-sm text-gray-300 font-mono whitespace-pre-wrap min-h-full">
            ----------------<br/>
              {staticOutput || 'No output yet. Click "Run Code" to see the results.'}
            ----------------<br/>
            Your Output Will Appear Here!
            </pre>
          </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
