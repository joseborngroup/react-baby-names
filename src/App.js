function App({names}) {
  return (
    // <pre>{JSON.stringify(names, null, 2)}</pre>
    <ul>
      {
        names.map((entry) => (
           <li key={entry.id} className={entry.sex}>
             <button>{entry.name}</button>
           </li>
        ))
      }
    </ul>
  );
}

export default App;
