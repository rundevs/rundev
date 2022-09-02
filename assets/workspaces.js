import { SiMarkdown, SiJavascript, SiTypescript, SiPython, SiGoland, SiRust, SiCsharp, SiVisualstudio } from 'react-icons/si'

export const programmingLanguages = [
  {
    lang: 'md',
    label: 'Markdown',
    icon: <SiMarkdown />,
    available: true,
    color: '#fff'
  },
  {
    lang: 'js',
    label: 'javaScript',
    icon: <SiJavascript />,
    available: true,
    color: '#efd81d'
  },
  {
    lang: 'ts',
    label: 'TypeScript',
    icon: <SiTypescript />,
    available: false
  },
  { lang: 'py', label: 'Python', icon: <SiPython />, available: false },
  { lang: 'go', label: 'Go', icon: <SiGoland />, available: false },
  { lang: 'rust', label: 'Rust', icon: <SiRust />, available: false },
  { lang: 'csharp', label: 'C++', icon: <SiCsharp />, available: false },
  {
    lang: 'vb',
    label: 'Visual Basic',
    icon: <SiVisualstudio />,
    available: false
  }
]
