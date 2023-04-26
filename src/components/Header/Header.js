import "./Header.css";
import MovieIcon from "@material-ui/icons/Movie";

const Header = () => {
  return (
    <div onClick={() => window.scroll(0, 0)} className="header">

      <MovieIcon style={{marginRight:"8px"}}/>
      <div>Movie-Hub</div>
    </div>
  );
};

export default Header;
