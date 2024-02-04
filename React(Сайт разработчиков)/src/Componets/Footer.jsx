import "./scss/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="main-d">
        <div className="main-f">
          <div>
            <h1>Subscribe to Our Newsletter For Weekly Article Update.</h1>
            <p>
              Passages of lorem ipsum available, but the majority have suffered
              alteration, by injected words.
            </p>
          </div>
          <button>Get Started</button>
        </div>
      </div>
      <div className="footer">
        <div className="left">
          <img src="/src/img/logo.png" alt="" />
          <p>2021 Award winning Vaccination and Lorem ipsum dolor sit amet</p>
          <div>
            <a href="#">
              <img src="/src/img/Group 67.png" alt="" />
            </a>
          </div>
        </div>
        <div>
          <table>
            <tr>
             
             <td className="tr">Location</td>
              <td className="tr">Contact</td>
              <td className="tr">Legals</td>
            
            </tr>
            <tr>
              <td><a href="">America</a></td>
              <td><a href="">About Me</a></td>
              <td><a href="">Privacy</a></td>
            </tr>
            <tr>
              <td><a href="">Asia</a></td>
              <td><a href="">Teams</a></td>
              <td><a href="">Disclaimer</a></td>
            </tr>
            <tr>
              <td><a href="">Europe</a></td>
              <td><a href="">Profile</a></td>
              <td><a href="">Terms</a></td>
            </tr>
            <tr>
              <td><a href="">Africa</a></td>
              <td><a href="">FAQ</a></td>
              <td><a href="">Company</a></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
