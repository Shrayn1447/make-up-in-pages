
import './Main.css'
import Service from './Componets/Servise'
import Amazing from './Componets/Amazing'
import Who from './Componets/Who'
import Latest from './Componets/Latest'
import Free from './Componets/Free'
import Experience from './Componets/Experience'
import Footer from './Componets/Footer'

export function Button({children}) {
  return (
   <button className='button-nav'>{children}</button>
  )
 }
function Header() {
  return (
    <>
      <header>
        <img className='logo' src="https://s3-alpha-sig.figma.com/img/59e2/1fdc/f4e4e01572fab116d0ce7393c5627f4f?Expires=1694390400&Signature=ls9AoAh5l4W2jrRqHGOyfUIznMLLbW9XAih5HsE2PQjoiWwjRzYqiqoPRYA-5m3ZsmxC5Uq2A3xDJ6QqwwYtjMBWBOv7X3f1FXH2ri5S87GM-bSoVMdVp2si3A2Uw-RhtZDznWQmEmy4tQJQKUU-KJ0z-BW-Nwp7fszAO9RQ8DgzTAns1q4-W8Genz0Gib6n1ndedKYC7n97ZzLGAiFBWEY7FHbosKz0zFolNaELbdq4ZwKPPELkFJZs6~ftL1FEHxqKGnTBb4Ue-KEnpc0JdskLaDkM4Z1LyyegBYcyEtQ4EfR4NTSFq9IP-TrRDkGhBpjBGtknjZ7oSI8vK99kRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="LOGO" />
        <ul className='nav'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Resources</a></li>
          <li><a href="">Projects</a></li>
        </ul>
        <Button>Contact us today</Button>
      </header>
      <section className='main'>
      <div className='car'>
        <img className='iimg' src="./src/img/Dotted.png" alt="car" />
        <img className='img' src="./src/img/Dotted.png" alt="car" />
      </div>
        <div>
        <h1>Our <span>consultation</span> is <br /> always in sync <br /> with your strategy</h1>
        <p>Scelerisque dignissim in leo at magna donec mi metus ipsum <br /> luctus nam elit sociis luctus et aliquam libero.</p>
        <Button>Our Services</Button>
        </div>
        <img src="./src/img/man.png" alt="Man" />
      </section>
    </>
  )
}

export default function App() {
  return (
    <>
    <Header/>
    <Service/>
    <Amazing/>
    <Who/>
    <Latest/>
    <Free/>
    <Experience/>
    <Footer/>
    </>
  )
}
 


