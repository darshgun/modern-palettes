import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { colorBrewer, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from './SyntaxBox.module.scss';

function SyntaxBox({ language, theme, lineNumbers, children, code }) {
  const themeCheck = theme === 'light' ? colorBrewer : atomOneDark;

  return (
    <div className={styles.syntaxbox}>
      <SyntaxHighlighter language={language} style={themeCheck} showLineNumbers={lineNumbers}>
        {code}
      </SyntaxHighlighter>
      {children}
    </div>
  );
}

SyntaxBox.defaultProps = {
  language: 'css',
  theme: 'light',
  code: `{}`,
  lineNumbers: true,
};

export default SyntaxBox;
