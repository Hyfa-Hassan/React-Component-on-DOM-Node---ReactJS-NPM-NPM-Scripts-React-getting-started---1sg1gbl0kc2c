const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function App() {
  const element = (
    <div>
    <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
  root.render(element);
}
export default App;
