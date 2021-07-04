
export function Button({ onClick, children, warning }) {
  return <>
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
    <style jsx>{`
      button {
      display: block;
      background-color: ${warning ? 'transparent' : "var(--dark)"};
      width: 115px;
      cursor: pointer;
      color: ${warning ? 'red' : "#fff"};
      margin: 0 auto 5rem;
      border: none;
      border-radius: 3px;
      height: 32px;
      }
    `}</style>
  </>
}