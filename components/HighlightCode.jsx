import highlightjs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/github-dark-dimmed.css'

const HighlightCode = ({ codeString }) => {
  return (
    <pre className='px-4 pt-3 pb-2 leading-none'>
      <code dangerouslySetInnerHTML={{ __html: highlightjs.highlight(codeString, { language: 'javascript' }).value }} />
    </pre>
  )
}

export default HighlightCode
