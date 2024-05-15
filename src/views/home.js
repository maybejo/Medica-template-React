import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Doctor from '../components/doctor'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Medica template</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="/Branding/logo-1500h.png"
              className="home-logo"
            />
            <nav className="home-links">
              <a href="#how-it-works" className="home-link">
                Wie es funktioniert
              </a>
              <span className="home-link01">Preise</span>
              <span className="home-link02">Kontakt</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image06"
              />
              <span className="home-text06">0511-1316991</span>
            </button>
            <a href="#book" className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image07"
              />
              <span className="home-text07">Kontaktiere uns</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container01">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-image08"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text08">Features</span>
                <span className="home-text09">How it works</span>
                <span className="home-text10">Prices</span>
                <span className="home-text11">Contact</span>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image09"
                  />
                  <span className="home-text12">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-image10">
            <form className="home-form"></form>
            <div className="home-container02"></div>
            <form className="home-form1"></form>
            <div className="home-container03">
              <div className="home-container04">
                <p className="home-caption6">
                  <span className="home-text13">Fair Projekt</span>
                  <br></br>
                  <span>Montagedienstleistung</span>
                  <br></br>
                </p>
                <h1 className="home-header07">
                  Let&apos;s make your vision come to life
                </h1>
                <button className="home-book2 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image11"
                  />
                  <span>Kontaktiere uns</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-heading07">
          <h2 className="home-text18">
            Fair Projekt basiert auf der Einzigartigkeit des Bauens.
          </h2>
          <p className="home-text19">
            <span>
              Professioneller Messebau-, Ladenbau-, Küchen- und Möbelmontagen
              aller Art.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Wir bieten Ihnen auch gerne Stahlbau- und Bühnenmontagen, sowie
              Grafikarbeiten und Teile der Fertigung an.
            </span>
          </p>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading08">
          <h2 className="home-text24">
            Zählen Sie auf Fair Projekt, wenn es um Ihr Bauvorhaben geht
          </h2>
          <p className="home-header08">
            <span>
              Langjährige Erfahrungen im Bereich Messebau garantieren für
            </span>
            <br></br>
            <span>
              fachliche Kompetenz und individuelle Lösungen, aber auch für
            </span>
            <br></br>
            <span>persönliches Engagement und technisches Know-how.</span>
          </p>
        </div>
        <div className="home-content">
          <div className="home-caption7">
            <h3 className="home-header09">
              Zuverlässig
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
          </div>
          <h3 className="home-header10">
            Individuelles Vorgehen
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
          <h3 className="home-header11">
            Fristgerecht
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
          <h3 className="home-header12">Hohe Standarts</h3>
        </div>
      </section>
      <section className="home-features">
        <div className="home-container05">
          <div className="home-section6">
            <div className="home-content1">
              <div className="home-header13">
                <h3 className="home-heading09">Unser Service</h3>
                <p className="home-capton">
                  <span>
                    Wir sind für Sie in Deutschland und europaweit tätig.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Unsere Dienstleistungen liegen im Bereich Messebau und
                    vielem mehr.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>Die Loyalität Ihnen</span>
                  <br></br>
                  <span>
                    gegenüber hat für uns Priorität.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Wir sorgen für Ihre Zufriedenheit, und dem sorgfältigen
                    Umgang mit den uns anvertrauten Materialien.
                  </span>
                </p>
              </div>
              <div className="read-more">
                <span className="home-text42">Unsere Projekte</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image12"
                />
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxjb21wYW55fGVufDB8fHx8MTcxNTc1NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image13"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxjb21wYW55fGVufDB8fHx8MTcxNTc1NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image14"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxjb21wYW55fGVufDB8fHx8MTcxNTc1NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image15"
            />
          </div>
          <div className="home-header14"></div>
        </div>
        <div className="home-container06">
          <h2 className="home-heading10">
            <span>30+</span>
            <br></br>
            <span>Beendete Projekte</span>
          </h2>
          <h2 className="home-heading11">
            <span>24+</span>
            <br></br>
            <span>Jahre in Betrieb</span>
          </h2>
          <h2 className="home-heading12">
            <span>1</span>
            <br></br>
            <span>Büro</span>
            <br></br>
            <span>Bundesweit</span>
          </h2>
        </div>
        <button className="home-book3 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
      <section id="book" className="home-book4">
        <div className="home-heading13">
          <h2 className="home-text55">Kontaktiere uns</h2>
          <p className="home-text56">Wir sind gespannt!</p>
        </div>
        <div className="home-form2">
          <div className="home-types"></div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <input
              type="text"
              placeholder="Anliegen"
              className="input book-input"
            />
            <div className="home-lower">
              <div className="home-button">
                <button className="home-book5 button button-main">
                  <span>Senden</span>
                </button>
                <p className="home-text58">
                  <span>Ihre Daten sind laut unseren </span>
                  <span className="home-text60">Datenschutzrichtlinien</span>
                  <span>
                     gesichert und werden nicht an dritte weitergegeben
                  </span>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-meet">
        <div className="home-heading14">
          <h2 className="home-text63">Kundenreferenzen</h2>
        </div>
        <div className="home-list">
          <div data-teleport="doctors" className="home-doctors">
            <Doctor rootClassName="doctor-root-class-name3"></Doctor>
            <Doctor
              imageSrc="/Doctors/doctor-2-300w.png"
              rootClassName="doctor-root-class-name2"
            ></Doctor>
            <Doctor
              imageSrc="/Doctors/doctor-3-300w.png"
              rootClassName="doctor-root-class-name1"
            ></Doctor>
            <Doctor
              imageSrc="/Doctors/doctor-4-300w.png"
              rootClassName="doctor-root-class-name"
            ></Doctor>
          </div>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="Bewertung schreiben"
            className="home-textinput4 input book-input"
          />
          <button className="home-book6 button button-main">
            <span>Absenden</span>
          </button>
        </div>
      </section>
      <div className="home-download"></div>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/Branding/logo-2.svg"
              className="home-image16"
            />
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image17"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image18"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image19"
              />
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2000 fairproject. Alle Rechte vorbehalten.
            </span>
            <span className="legal-link">Datenschutzrichtlinien</span>
            <span className="legal-link">Nutzungsbedingungen</span>
          </div>
        </div>
        <div className="home-right1">
          <div className="home-list1">
            <span className="home-header15">Menu</span>
            <div className="home-links1">
              <span className="home-link03">Home</span>
              <span className="home-link04">Über uns</span>
              <span className="home-link05">Service</span>
              <span className="home-link06">Referenzen</span>
              <span className="home-link07">Support</span>
            </div>
          </div>
          <div className="home-list2">
            <span className="home-header16">Kontakt</span>
            <div className="home-links2">
              <span className="home-link08">
                <span>Gustav-Adolf-Strasse 16</span>
                <br></br>
                <span>30167 Hannover</span>
                <br></br>
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link09"
              >
                Email: info@fair-project.de
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link10">
                <span>Tel. 0511-1316991</span>
                <br></br>
                <span>Fax: 0511-1316993</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="home-container08">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container10">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container12">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
