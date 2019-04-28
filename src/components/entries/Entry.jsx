import React from 'react';

function Entry(props) {
  return (
    <tr className="Entry">
      <td>{props.player}</td>
      <td>
        <a href="https://docs.google.com/document/d/1QEXTfXrk4KaDbkPJ3_v33no7EPSMr5PEjWNlSb3x5Ns/edit?usp=sharing"
           target="_blank"
           rel="noopener">Entry</a>
      </td>
    </tr>
  );
}

export default Entry;
