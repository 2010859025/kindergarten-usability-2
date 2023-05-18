function Header({ title }) {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-menu">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Header;
