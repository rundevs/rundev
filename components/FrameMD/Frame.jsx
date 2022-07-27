import React from 'react'
import style from './frame.module.css'

const Frame = () => (
  <div className={style.frame}>
    <div className={style.header}>
      <span />
      <span />
      <span />
    </div>
    <div className={style.content}>
      <div className={style.editor}>
        <pre className={style.line}>
          <span className={style.number}>1</span>
          <span className={style.heading}>#</span>
          <span className={style.headingText}>Markdown Preview</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>2</span>
          <span className={style.heading}>##</span>
          <span className={style.headingText}>Markdown Preview</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>3</span>
          <span className={style.heading}>###</span>
          <span className={style.headingText}>Markdown Preview</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>4</span>
          <hr />
        </pre>
        <pre className={style.line}>
          <span className={style.number}>5</span>
          <span className={style.text}>- List Item 1</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>6</span>
          <span className={style.text}>- List Item 1</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>7</span>
          <hr />
        </pre>
        <pre className={style.line}>
          <span className={style.number}>8</span>
          <span className={style.text}>```<span className={style.property}>js</span></span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>9</span>
          <div className={style.langjs}>
            <span className={style.variable}>console</span>
            <span className={style.text}>.</span>
            <span className={style.property}>log</span>
            <span className={style.text}>{'('}</span>
            <span className={style.string}>{"'"}hello from Markdown{"'"}</span>
            <span className={style.text}>{')'}</span>
          </div>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>10</span>
          <span className={style.text}>```</span>
        </pre>
        <pre className={style.line}>
          <span className={style.number}>11</span>
          <span className={style.text}>{'>'} First quote</span>
        </pre>
      </div>
      <div className={style.preview}>
        <div className={style.linePreview}>
          <h1>Markdown Preview</h1>
        </div>
        <div className={style.linePreview}>
          <h2>Basic Syntax</h2>
        </div>
        <div className={style.linePreview}>
          <h3>Heading 3</h3>
        </div>
        <div className={style.linePreview}>
          <li>List item 1</li>
        </div>
        <div className={style.linePreview}>
          <li>List item 2</li>
        </div>
        <pre className={style.code}>
          <div className={style.langjs}>
            <span className={style.variable}>console</span>
            <span className={style.text}>.</span>
            <span className={style.property}>log</span>
            <span className={style.text}>{'('}</span>
            <span className={style.string}>{"'"}hello from Markdown{"'"}</span>
            <span className={style.text}>{')'}</span>
          </div>
        </pre>
        <div className={style.quote}>
          <div>First quote</div>
        </div>
      </div>
    </div>
  </div>
)

export default Frame