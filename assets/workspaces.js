import { SiMarkdown, SiJavascript, SiTypescript, SiPython, SiGoland, SiRust, SiCsharp, SiVisualstudio } from 'react-icons/si'

export const programmingLanguages = [
  {
    lang: 'md',
    label: 'Markdown',
    icon: <SiMarkdown size={32} />,
    available: true,
    color: {
      primary: '#fff4', secondary: '#000'
    }
  },
  {
    lang: 'js',
    label: 'javaScript',
    icon: <SiJavascript />,
    available: true,
    color: {
      primary: '#efd81d44', secondary: '#efd81d'
    }
  },
  {
    lang: 'ts',
    label: 'TypeScript',
    icon: <SiTypescript />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  },
  {
    lang: 'py',
    label: 'Python',
    icon: <SiPython />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  },
  {
    lang: 'go',
    label: 'Go',
    icon: <SiGoland />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  },
  {
    lang: 'rust',
    label: 'Rust',
    icon: <SiRust />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  },
  {
    lang: 'csharp',
    label: 'C Sharp',
    icon: <SiCsharp />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  },
  {
    lang: 'vb',
    label: 'Visual Basic',
    icon: <SiVisualstudio />,
    available: false,
    color: {
      primary: '#3178c644', secondary: '#3178c6'
    }
  }
]
