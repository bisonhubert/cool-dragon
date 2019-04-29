import React from 'react';

function Entry(props) {
  console.log(props.player)
  console.log(props.score)
  return (
    <div className="Entry">
      <article class="col">
        <h2>{props.entry.rank}</h2>
      </article>
      <article class="col">
        <h2>{props.entry.player.toUpperCase()}</h2>
      </article>
      <article class="col">
        <h3>{props.entry.score}</h3>
      </article>
      <article class="col">
        <a href={props.entry.entry_doc_href}
             target="_blank"
             rel="noopener noreferrer"><h4>Entry Doc</h4></a>
      </article>
    </div>
  );
}

export default Entry;
