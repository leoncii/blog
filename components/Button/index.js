
export function Button({ modal, onClick, border, children, warning }) {
  return <>
    {
      modal ?
        <button onClick={onClick}>
          <span>{children}</span>
        </button> : false
    }
    <style jsx>{`
      button {
        display: ${modal ? 'block' : 'none'};
        background-color: ${warning ? 'transparent' : "var(--dark)"};
        width: 115px;
        cursor: pointer;
        color: ${warning ? 'red' : "#fff"};
        margin: .13rem auto;
        border: none;
        outline: 1px solid red;
        border-radius: 3px;
        height: 32px;
      }
    `}</style>
  </>
}