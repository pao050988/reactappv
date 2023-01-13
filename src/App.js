import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="new York" />
      <footer class="link">
        {" "}
        This project is open source code on{" "}
        <a href="https://github.com/pao050988/reactappv">github</a> and is
        hosted on{" "}
        <a href="https://lambent-toffee-c67b7d.netlify.app">netlify</a>
      </footer>
    </div>
  );
}
