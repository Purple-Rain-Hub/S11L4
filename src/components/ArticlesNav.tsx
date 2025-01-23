import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticlesNav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="px-5">
      <Link to={"/"} className="text-white text-decoration-none fs-4 me-3">
        HOME
      </Link>
      <Nav className="me-auto">
        <Nav.Link href="Javascript:void(0)">Other</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default ArticlesNav;
