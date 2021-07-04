import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/shadesOfPurple"

export const HighlightCodeBlock = ({ block }) => (
  <Highlight {...defaultProps} theme={theme} code={block} language="jsx">
    {
      ({ className, style, tokens, getLineProps, getTokenProps }) =>
      (<>
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <section key={i} {...getLineProps({ line, key: i })}>
              <div>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </section>
          ))}
        </pre>
        <style jsx>{`
          section {
            display: table-row;
          }
          small {
            display: table-cell;
            text-align: right;
            padding-right: 1em;
            user-select: none;
            opacity: 0.5;
          }
          div {
            display: table-cell;
          }
        `}</style>
      </>)
    }
  </Highlight>
);
