import DocumentTitle from "../../components/DocumentTitle";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1>
          Task manager welcome page
          <span role="img" aria-label="Greeting icon"></span>
        </h1>
      </div>
    </>
  );
};
export default HomePage;
