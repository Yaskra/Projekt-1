import React  from 'react';
import { NavBarCustom } from './components/NavBar/NavBarCustom.js';
import { WelcomeCustom } from './components/welcome/WelcomeCustom.js';
import { FooterCustom } from './components/Footer/FooterCustom.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AvatarJa from './images/AvatarJa.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeCustom />
      <NavBarCustom />
      <section id="home">
        <article className='article-first'>
          <div className='article-first-div'>
          <h1>Szanowni Państwo.</h1>
          <div className='title'><h2>Mam na imie Bartosz Kołodziejczyk</h2></div>
          <div>
          <p>Tworzyłem te strone w celu pokazania moich umiejętności.</p>
          <p>Jako absolwent Technikum Informatycznego, chciałbym zacząć przygode z tworzeniem stron internetowych.
            Zajmuje sie głównie Front-End-em natomiast lubie sie uczyć nowych rzeczy i od całkiem niedawna ucze sie Back-End'u w jezyku PHP.
            Programowanie to dla mnie sztuka jak i hobby dzieki czemu przykładam sie do tego w 110%
            Jako programista Front-End mam dwu-letnie doświadczenie, projekty jakie tworzyłem były tworzone w celu uczenia sie i poznawania nowych technik.
          </p>
          <h2>Zostawiam państwu CV do pobrania i licze na odzew z Państwa strony.</h2>
          </div>
          <div><button className='cv-download'><a href="/Bartosz kołodziejczyk.pdf" download="Bartosz_Kolodziejczyk_CV.pdf">Moje CV<i class="bi bi-download" style={{ marginLeft: '10px', fontSize: '40px'}}></i></a></button></div>
          </div>
        </article>
        <article className='article-second'>
          <div>
          <div id="image"><img src={AvatarJa} alt="Avatar" width="550px" height="100%"/></div>
            </div>
            <footer className='przejscie'>
            </footer>
        </article>
      </section>

      <section id="o_mnie">
        <article className='omnie_article-first'>
          <div className='omnie-div'>
            <div>
            <h1>Co mnie wyróżnia?</h1>
            <p>
              - Jestem osobą zmobilizowaną.<br />
              - Chętną do pracy.<br />
              - Nie boje sie wyzwań.<br />
              - Starannie wypełniam swoje obowiązki.<br />
              - Szybko sie ucze.<br />
              - Potrafie pracować w grupie jak i samemu.<br />
            </p>
            </div>
            <div>
            <h1>Moje zainteresowania.</h1>
            <p>
              - Programowanie.<br />
              - Sporty zespołowe.<br />
              - Gry FPS, strategiczne.<br />
              - Ekspolaracja muzyki.<br />
              - Tworzenie treści Social-Media.<br />
            </p>
            </div>
            <div>
            <h1>Pare słów o mnie.</h1>
            <p>
            Mam na imię Bartosz, szybko się uczę i jestem otwarty na nowe wyzwania.<br />
            W większości przypadków jestem samoukiem, chętnie zdobywam nową wiedzę i rozwijam swoje umiejętności.<br />
            Jestem osobą ambitną i gotową do podejmowania nowych zadań oraz znajdowania kreatywnych rozwiązań.<br />
            </p>
            </div>
          </div>
        </article>
        <article className='omnie_article_second'>
            <div className='diamond'>

            </div>
        </article>
      </section>

      <section id="projekty">
        <div className='przejscie2'>
        </div>
        <article className='projekty_article_first'>
          <div>
          <h1>Jeżeli Państwa zainteresowałem to zachecam do zapoznania sie z moimi projektami, mam nadzieje ze sie spodobają. Życze miłego oglądania.</h1>
          </div>
        </article>
        <article className='projekty_article_second'>
          <div className='oknaprojektów'>
            <div className='projects'>
              <h1 id="pro1"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum1"><p><i>#1</i></p></h1>
            </div>
            <div className='projects'>
            <h1 id="pro2"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum2"><p><i>#2</i></p></h1>
            </div>
            <div className='projects'>
            <h1 id="pro3"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum3"><p><i>#3</i></p></h1>
            </div>
            <div className='projects'>
            <h1 id="pro4"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum4"><p><i>#4</i></p></h1>
            </div>
            <div className='projects'>
            <h1 id="pro5"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum5"><p><i>#5</i></p></h1>
            </div>
            <div className='projects'>
            <h1 id="pro6"><a href="https://hype2you.pl" rel="noreferrer" target="_blank"><i>Projekt</i></a></h1><h1 id="pronum6"><p><i>#6</i></p></h1>
            </div>
          </div>
        </article>
      </section>

      <section id="kontakt">
      <article className="kontakt_article_first">
        <div>
        <h2>Jeżeli spełniam Państwa oczekiwania bądź nie,<br /> byłbym zachwycony odpowiedzią zwrotną.</h2>
        <p>Zachęcam do skorzystania z linków obok dla zaoszczędzenia Państwa czasu. <br />Pozdrawiam.</p>
        </div>
      </article>
      <article className="kontakt_article_second">
        <div>
          <button><a href="mailto: kolodzbartek@gmail.com" rel="noreferrer" target="_blank">E-Mail</a></button>
          <button><a href="https://www.facebook.com/bartosz.zastepcze/?locale=pl_PL" rel="noreferrer" target="_blank">Facebook</a></button>
          <button><a href="https://www.instagram.com/bartoszkolodziejczyk_5?igsh=MXNsdGd3emIzd2UweQ==" rel="noreferrer" target="_blank">Instagram</a></button>
          <button><p>Telefon: 509779504</p></button>
        </div>
      </article>
      </section>
      <FooterCustom />
    </div>
  );
}

export default App;
