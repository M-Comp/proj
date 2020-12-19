import PropTypes from 'prop-types';
import {useState, createContext} from 'react';
import ListaGenerica from './ListaGenerica';
import SignupForm from './SignupForm';
import "./css/index.css";
import Banner from './Banner';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

export const Theme = createContext();

function App(props){

    const [theme, setTheme] = useState("dark");
    const [mainContent, setMainContent] = useState(MainContent.BANNER)
    const navBarOptions = [
        {text: "Premium", content: MainContent.NYI},
        {text: "Ajuda", content: MainContent.NYI},
        {text: "Baixar", content: MainContent.NYI},
        "divider",
        {text: "Inscrever-se", content: MainContent.FORM},
        {text: "Entrar", content: MainContent.NYI},
    ]

    const style={
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black"
    }

    return(
        <BrowserRouter>
        <Theme.Provider
            value={style}
        >
            <header style={style} className="fixed h-10 w-100 bg-dark color-light mb-col mb-jc-sb dk-row dk-jc-sb mb-ai-c">
                <Link to="/">
                    <button>
                        🏠
                    </button>
                </Link>
                <button
                    onClick={(event) => setTheme(theme === "dark" ? "light" : "dark") }
                >
                    {`tema ${theme === "dark" ? "claro" : "escuro"}`}
                </button>
                <nav style={style} className="top-nav w-50 min-w-20rem">
                    <ListaGenerica
                        listClassName="mb-row dk-row mb-jc-sa dk-jc-sa mb-ai-c mb-wrap"
                        array={navBarOptions}
                        mapFunc={(elem, index) =>
                            <li key={index}>
                                {elem !== "divider" ?
                                    <Link
                                        to={elem.content === MainContent.NYI ?
                                            "/nyi"
                                        : elem.content === MainContent.FORM &&
                                            "/signup"
                                        }
                                    >
                                        <span> {elem.text} </span>
                                    </Link>
                                    :
                                    <div className="separator"></div>
                                }
                            </li>
                        }
                    />
                </nav>
            </header>
        </Theme.Provider>
            <main>
                <Switch>
                    <Route path="/signup">
                        <SignupForm/>
                    </Route>

                    <Route path="/nyi">
                        <p> NYI </p>
                    </Route>

                    <Route path="/">
                        <Banner
                            className="hero-bg mb-col dk-col mb-jc-c mb-ai-c mb-jc-c mb-ai-c"
                            titleClassName="hero-heading color-light text-center pad-5"
                            subtitleClassName="hero-subtitle color-light text-center pad-5"
                            title="Escutar muda tudo"
                            subtitle="Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito."
                            credits={
                                <div className="credits discreet">
                                    <a className="discreet" href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>
                                    <div> Ícones feitos por <a className="discreet" href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a className="discreet" href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a></div>
                                </div>
                            }
                        >
                            <Link to="/signup">
                                <button className="btn bg-primary color-light text-center">
                                    Obtenha o yfitops free
                                </button>
                            </Link>
                        </Banner>
                    </Route>
                </Switch>
            </main>

            <footer>

            </footer>
        </BrowserRouter>
    );
}

export default App;

const MainContent = Object.freeze({
    BANNER: "BANNER",
    NYI: "NYI",
    FORM: "FORM"
})
