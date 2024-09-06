/** @jsxImportSource @emotion/react */
import { theme } from "antd";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import CardToolBar from "./CardToolbar";
import { codeBoxHighlightCss } from "./DemoCard.style";
import syntaxTheme from "./HLTheme";

const { useToken } = theme;

const CodeBox = ({ language, children }) => {
  const [codeExpand, setCodeExpand] = useState(false);

  const { token } = useToken();

  const handleExpand = () => {
    setCodeExpand(!codeExpand);
  };

  return (
    <>
      <CardToolBar
        code={children}
        expand={handleExpand}
        isExpand={codeExpand}
      />
      <div css={codeBoxHighlightCss(token, codeExpand)}>
        <SyntaxHighlighter language={language} style={syntaxTheme}>
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBox;
