import React, { useCallback, useState } from 'react'
import Editor from '../components/Editor/Editor'
import Navigation from '../components/Navbar'
import Preview from '../components/Preview/Preview'
import style from '../styles/app.module.css'

const App = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const handleChange = useCallback((/** @type string */ newDoc) => {
    setDoc(newDoc)
  }, [])

  return (
    <main className={style.app}>
      <Navigation />
      <section className={style.workArea}>
        <Editor initialDoc={doc} onChange={handleChange} />
        <Preview doc={doc} />
      </section>
    </main>
  )
}

export default App

const INITIAL_STATE = `# Welcome to Markdown Preview
## Basic Syntax
### Heading 3

- List Item 1
- List Item 2

1. Ordered list item 1
2. Ordered list item 2

---
\`\`\`js
const message = "Hello "
function sayHello(name) {
  return message + name
}
console.log(sayHello('Bob')) // Hello Bob
\`\`\`

> Quote,
> Hello world of quote

- [ ] Task item todo
- [x] Task list item checkend
`
