import { useEffect, useState } from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import { HashRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
    return (
        <header>
            <MobileView>
                <LazyLoadImage
                    alt="Clash Of Champions Season III - Selfmade"
                    className="img-fluid"
                    src={require("./images/mobile-banner.webp")}
                />
            </MobileView>
            <BrowserView>
                <LazyLoadImage
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
                <div className="mb-2">
                    In the history of various contests conducted by Selfmade,
                    Clash of Champions is a significant one. This remarkable
                    contest has created lots of leaders in the past couple of
                    years.
                </div>
                <div>
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
                <div className="mb-2">
                    Let us have a look at the new upgrades introduced in this
                    new Season:
                </div>
                <div>
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
                                    <Link
                                        to={{
                                            pathname: "/rank/2",
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={star}
                                            alt="Star"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <Link
                                        to={{
                                            pathname: "/rank/4",
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={_5star}
                                            alt="Bronze"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="align-self-center">
                            <Row>
                                <Col className="my-3">
                                    <Link
                                        to={{
                                            pathname: "/rank/1",
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={bronze}
                                            alt="Bronze"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <Link
                                        to={{
                                            pathname: "/rank/3",
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={_3star}
                                            alt="Bronze"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-3">
                                    <Link
                                        to={{
                                            pathname: "/rank/5",
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={_7star}
                                            alt="Bronze"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </MobileView>
                <BrowserView>
                    <Row>
                        <Col>
                            <Link
                                to={{
                                    pathname: "/rank/1",
                                }}
                            >
                                <LazyLoadImage
                                    src={bronze}
                                    alt="Bronze"
                                    className="img-fluid"
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={{
                                    pathname: "/rank/2",
                                }}
                            >
                                <LazyLoadImage
                                    src={star}
                                    alt="Star"
                                    className="img-fluid"
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={{
                                    pathname: "/rank/3",
                                }}
                            >
                                <LazyLoadImage
                                    src={_3star}
                                    alt="Bronze"
                                    className="img-fluid"
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={{
                                    pathname: "/rank/4",
                                }}
                            >
                                <LazyLoadImage
                                    src={_5star}
                                    alt="Bronze"
                                    className="img-fluid"
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={{
                                    pathname: "/rank/5",
                                }}
                            >
                                <LazyLoadImage
                                    src={_7star}
                                    alt="Bronze"
                                    className="img-fluid"
                                />
                            </Link>
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
                        <LazyLoadImage
                            src={require("./images/coach-web.webp")}
                            className="img-fluid w-100"
                            alt="Coach"
                        />
                        <Link
                            to={{
                                pathname: "/coach",
                            }}
                        >
                            <button
                                className="position-absolute rounded-pill btn btn-gray"
                                style={{ top: 220, left: 100 }}
                            >
                                View Scorecard
                            </button>
                        </Link>
                    </BrowserView>
                    <MobileView>
                        <LazyLoadImage
                            src={require("./images/coach-mob.webp")}
                            className="img-fluid w-100"
                            alt="Coach"
                        />
                        <button
                            className="position-absolute top-50 rounded-pill btn btn-gray"
                            style={{ left: 40 }}
                        >
                            View Scorecard
                        </button>
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
                <h1 className="mb-md-4">COC - 2 RESULTS</h1>
                <BrowserView>
                    <Row className="mb-3">
                        <Col>
                            <LazyLoadImage
                                src={require("./images/hari.webp")}
                                className="img-fluid"
                                alt="Hariharan"
                            />
                        </Col>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/tamizhselvan.webp")}
                                className="img-fluid"
                                alt="Tamizhselvan"
                            />
                        </Col>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/nishanth.webp")}
                                className="img-fluid"
                                alt="Nishanth"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/surya.webp")}
                                className="img-fluid"
                                alt="Surya Prakash"
                            />
                        </Col>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/swathi.webp")}
                                className="img-fluid"
                                alt="Swathi"
                            />
                        </Col>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/abishek.webp")}
                                className="img-fluid"
                                alt="Abishek"
                            />
                        </Col>
                        <Col>
                            <LazyLoadImage
                                src={require("./images/manoj.webp")}
                                className="img-fluid"
                                alt="Manoj"
                            />
                        </Col>
                    </Row>
                </BrowserView>
                <MobileView>
                    <Row>
                        <Col className="align-self-center">
                            <LazyLoadImage
                                src={require("./images/nishanth.webp")}
                                className="img-fluid"
                                alt="Nishanth"
                            />
                            <LazyLoadImage
                                src={require("./images/abishek.webp")}
                                className="img-fluid"
                                alt="Abishek"
                            />
                        </Col>
                        <Col className="align-self-center">
                            <LazyLoadImage
                                src={require("./images/hari.webp")}
                                className="img-fluid"
                                alt="Hariharan"
                            />
                            <LazyLoadImage
                                src={require("./images/tamizhselvan.webp")}
                                className="img-fluid"
                                alt="Tamizhselvan"
                            />
                            <LazyLoadImage
                                src={require("./images/manoj.webp")}
                                className="img-fluid"
                                alt="Manoj"
                            />
                        </Col>
                        <Col className="align-self-center">
                            <LazyLoadImage
                                src={require("./images/surya.webp")}
                                className="img-fluid"
                                alt="Surya Prakash"
                            />
                            <LazyLoadImage
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
const rankName = {
    1: "Bronze",
    2: "Star",
    3: "3 Star",
    4: "5 Star",
    5: "7 Star",
};
function RankHeader() {
    const { rankId } = useParams();
    return (
        <div className="bg p-5 text-center">
            <h1>{rankName[rankId]}</h1>
        </div>
    );
}

const host = "https://lycra.eselfmade.in";
// const host = "http://localhost:8080";

function CoachScorecard() {
    const [score, setScore] = useState([]);
    useEffect(() => {
        fetch(`${host}/api/coc/coaches`)
            .then((r) => r.json())
            .then((r) => {
                setScore(r.scores);
            });
    });
    return (
        <>
            <div className="bg p-5 text-center">
                <h1>Coach Score Card</h1>
            </div>
            <div className="bg-light-gray fs-6 px-md-5">
                <Container className="rank-list text-center pb-5">
                    {score.map((player, index) => {
                        return (
                            <Row
                                className="align-items-center py-2"
                                key={index}
                            >
                                <Col className="col-1 fw-bold">
                                    {index + 1}.
                                </Col>
                                <Col className="col-3">
                                    <LazyLoadImage
                                        width={150}
                                        alt={player.name + " " + player.team}
                                        src={
                                            player.image
                                                ? toImage(player.image)
                                                : `https://ui-avatars.com/api/?name=${player.name}&background=random`
                                        }
                                        className="img-fluid rounded-circle border border-4"
                                    />
                                </Col>
                                <Col className="col-5">
                                    <div className="fw-bold">{player.name}</div>
                                    <div className="text-gray">
                                        {player.team}
                                    </div>
                                </Col>
                                <Col className="col-3 fw-bold">
                                    {player.score}
                                </Col>
                            </Row>
                        );
                    })}
                </Container>
            </div>
        </>
    );
}

function RankList() {
    let { rankId } = useParams();
    const [rank, setRank] = useState([]);
    const [range, setRange] = useState({ limit: 20, offset: 0 });
    useEffect(() => {
        fetch(`${host}/api/coc/rank/${rankId}`)
            .then((r) => r.json())
            .then((r) => {
                setRank(r.rank);
            });
    }, [rankId]);

    function next() {
        setRange({
            limit: range.limit + 20,
            offset: range.offset + 20,
        });
    }

    function prev() {
        setRange({
            limit: range.limit - 20,
            offset: range.offset - 20,
        });
    }

    return (
        <div className="bg-light-gray fs-6 px-md-5">
            <Container className="rank-list text-center pb-5">
                {rank.slice(range.offset, range.limit).map((player, index) => {
                    return (
                        <Row className="align-items-center py-2" key={index}>
                            <Col className="col-1 fw-bold">
                                {range.offset + index + 1}.
                            </Col>
                            <Col className="col-3">
                                <LazyLoadImage
                                    width={150}
                                    alt={player.name + " " + player.team}
                                    src={
                                        player.image
                                            ? toImage(player.image)
                                            : `https://ui-avatars.com/api/?name=${player.name}&background=random`
                                    }
                                    className="img-fluid rounded-circle border border-4"
                                />
                            </Col>
                            <Col className="col-5">
                                <div className="fw-bold">{player.name}</div>
                                <div className="text-gray">{player.team}</div>
                            </Col>
                            <Col className="col-3 fw-bold">
                                ₹{player.income}/-
                            </Col>
                        </Row>
                    );
                })}
                <Row className="mt-3">
                    <Col>
                        <Pagination className="justify-content-evenly">
                            <Pagination.Prev
                                disabled={range.offset === 0}
                                onClick={prev}
                            />
                            <Pagination.Next
                                disabled={range.limit >= rank.length}
                                onClick={next}
                            />
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function toImage(id) {
    return `https://download-accl.zoho.in/public/workdrive/previewdata/${id}?orig=true`;
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <RankImage />
                            <About />
                            <Upgrades />
                            <Coach />
                            <Coc2 />
                        </>
                    }
                ></Route>
                <Route
                    path="/rank/:rankId"
                    element={
                        <>
                            <Header />
                            <RankHeader />
                            <RankList />
                        </>
                    }
                ></Route>
                <Route
                    path="/coach"
                    element={
                        <>
                            <Header />
                            <CoachScorecard />
                        </>
                    }
                ></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
