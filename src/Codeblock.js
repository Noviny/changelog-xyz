import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import githubTheme from "prism-react-renderer/themes/github";

export default ({ value, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={
        value || "/* this code block failed to render - please raise a bug */"
      }
      language={language}
      theme={githubTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
