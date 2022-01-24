import { Col, Container, Row } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
const Header = () => {
    return (
        <header>
            <MobileView>
                <img
                    alt="Clash Of Champions Season III - Selfmade"
                    className="img-fluid"
                    src={require("./images/mobile-banner.webp")}
                />
            </MobileView>
            <BrowserView>
                <img
                    alt="Clash Of Champions Season III - Selfmade"
                    className="img-fluid w-100"
                    src={require("./images/web-banner.webp")}
                />
            </BrowserView>
        </header>
    );
};

const About = () => {
    return (
        <div className="bg pt-md-5">
            <Container className="py-5">
                <h1 className="text-center mb-3">ABOUT COC</h1>
                <div className="fs-5 mb-2">
                    In the history of various contests conducted by Selfmade,
                    Clash of Champions is a significant one. This remarkable
                    contest has created lots of leaders in the past couple of
                    years.
                </div>
                <div className="fs-5">
                    The specialty of this contest is to bring the maximum
                    potential of every individual that helps to get
                    extraordinary results concerning their hard work.
                </div>
            </Container>
        </div>
    );
};

const Upgrades = () => {
    return (
        <div className="bg pb-5">
            <Container className="py-5">
                <h1 className="text-center">COC - 3</h1>
                <div className="fs-5 mb-2">
                    Let us have a look at the new upgrades introduced in this
                    new Season:
                </div>
                <div className="fs-5">
                    <ul>
                        <li>
                            "A good coach can change a game. A great coach can
                            change a life.” - John Wooden. Every team has a
                            dedicated Super Coach who can bring out the maximum
                            capabilities of the participants.
                        </li>
                        <li>
                            Attractive Live UI where you can track the
                            performance of the teams and individuals and plan to
                            compete and win.
                        </li>
                        <li>
                            Enchanting rewards where you can experience a whole
                            new lifestyle experience, Excited?
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

const RankImage = () => {
    const bronze = require("./images/bronze.webp");
    const star = require("./images/star.webp");
    const _3star = require("./images/3star.webp");
    const _5star = require("./images/5star.webp");
    const _7star = require("./images/7star.webp");
    return (
        <div className="bg-light-gray py-5">
            <div className="container">
                <MobileView>
                    <Row>
                        <Col className="align-self-center">
                            <Row>
                                <Col className="my-3">
                                    <img
                                        src={star}
                                        className="img-fluid"
                                        alt="Star"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <img
                                        src={_5star}
                                        className="img-fluid"
                                        alt="5 Star"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="align-self-center">
                            <Row>
                                <Col className="my-3">
                                    <img
                                        src={bronze}
                                        className="img-fluid"
                                        alt="Bronze"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <img
                                        src={_3star}
                                        className="img-fluid"
                                        alt="3 Star"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <img
                                        src={_7star}
                                        className="img-fluid"
                                        alt="7 Star"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </MobileView>
                <BrowserView>
                    <Row>
                        <Col>
                            <img
                                src={bronze}
                                alt="Bronze"
                                className="img-fluid"
                            />
                        </Col>
                        <Col>
                            <img src={star} alt="Star" className="img-fluid" />
                        </Col>
                        <Col>
                            <img
                                src={_3star}
                                alt="Bronze"
                                className="img-fluid"
                            />
                        </Col>
                        <Col>
                            <img
                                src={_5star}
                                alt="Bronze"
                                className="img-fluid"
                            />
                        </Col>
                        <Col>
                            <img
                                src={_7star}
                                alt="Bronze"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </BrowserView>
            </div>
        </div>
    );
};

const Coach = () => {
    return (
        <div className="bg py-5">
            <Container className="py-md-5">
                <div className="position-relative">
                    <BrowserView>
                        <img
                            src={require("./images/coach-web.webp")}
                            className="img-fluid w-100"
                            alt="Coach"
                        />
                        <a
                            href="javascript:"
                            className="position-absolute rounded-pill btn btn-gray"
                            style={{ top: 220, left: 100 }}
                        >
                            View Scorecard
                        </a>
                    </BrowserView>
                    <MobileView>
                        <img
                            src={require("./images/coach-mob.webp")}
                            className="img-fluid w-100"
                            alt="Coach"
                        />
                        <a
                            href="javascript:"
                            className="position-absolute top-50 rounded-pill btn btn-gray"
                            style={{ left: 40 }}
                        >
                            View Scorecard
                        </a>
                    </MobileView>
                </div>
            </Container>
        </div>
    );
};

const Coc2 = () => {
    return (
        <div className="bg py-5">
            <Container className="text-center">
                <h1 className="mb-md-3">COC - 2 RESULTS</h1>
                <BrowserView>
                    <Row className="mb-3">
                        <Col>
                            <img
                                src={require("./images/hari.webp")}
                                className="img-fluid"
                                alt="Hariharan"
                            />
                        </Col>
                        <Col>
                            <img
                                src={require("./images/nishanth.webp")}
                                className="img-fluid"
                                alt="Nishanth"
                            />
                        </Col>
                        <Col>
                            <img
                                src={require("./images/tamizhselvan.webp")}
                                className="img-fluid"
                                alt="Tamizhselvan"
                            />
                        </Col>
                        <Col>
                            <img
                                src={require("./images/surya.webp")}
                                className="img-fluid"
                                alt="Surya Prakash"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                src={require("./images/abishek.webp")}
                                className="img-fluid"
                                alt="Abishek"
                            />
                        </Col>
                        <Col>
                            <img
                                src={require("./images/manoj.webp")}
                                className="img-fluid"
                                alt="Manoj"
                            />
                        </Col>
                        <Col>
                            <img
                                src={require("./images/swathi.webp")}
                                className="img-fluid"
                                alt="Swathi"
                            />
                        </Col>
                    </Row>
                </BrowserView>
                <MobileView>
                    <Row>
                        <Col className="align-self-center">
                            <img
                                src={require("./images/nishanth.webp")}
                                className="img-fluid"
                                alt="Nishanth"
                            />
                            <img
                                src={require("./images/abishek.webp")}
                                className="img-fluid"
                                alt="Abishek"
                            />
                        </Col>
                        <Col className="align-self-center">
                            <img
                                src={require("./images/hari.webp")}
                                className="img-fluid"
                                alt="Hariharan"
                            />
                            <img
                                src={require("./images/tamizhselvan.webp")}
                                className="img-fluid"
                                alt="Tamizhselvan"
                            />
                            <img
                                src={require("./images/manoj.webp")}
                                className="img-fluid"
                                alt="Manoj"
                            />
                        </Col>
                        <Col className="align-self-center">
                            <img
                                src={require("./images/surya.webp")}
                                className="img-fluid"
                                alt="Surya Prakash"
                            />
                            <img
                                src={require("./images/swathi.webp")}
                                className="img-fluid"
                                alt="Swathi"
                            />
                        </Col>
                    </Row>
                </MobileView>
            </Container>
        </div>
    );
};

function App() {
    return (
        <>
            <Header />
            <About />
            <Upgrades />
            <RankImage />
            <Coach />
            <Coc2 />
        </>
    );
}

export default App;
