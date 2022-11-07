import ProfileCardContainer from "./components/ProfileCardContainer";
import PageNav from "./components/PageNav";

function App() {

  return (
    <main>
      <section className="app-container">
        <header className="app-header">
          <h1 className="head-gear app-title">Pagination</h1>
          <div className="underline"></div>
        </header>
        <ProfileCardContainer />
        {/* <PageNav/> */}
      </section>
    </main>
  );
}

export default App;
