import NavBar from "./nav/NavBar";

function Template({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Template;
