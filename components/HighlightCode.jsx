import highlightjs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const HighlightCode = ({ codeString, language }) => {
  return (
    <pre className='px-4 pt-3 pb-2 leading-none'>
      <code
        dangerouslySetInnerHTML={{
          __html: highlightjs.highlight(codeString, { language }).value
        }}
      />
    </pre>
  )
}

export default HighlightCode
