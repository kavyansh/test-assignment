const logo = new URL("./../assets/Intersect.png", import.meta.url).href;

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="" />
      <h3 className="logo__heading">E-COMM</h3>
    </div>
  );
}

export default Logo;
