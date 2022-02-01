import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+ 86 957 08 57</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Benhung@Genius.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
