import { useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { Fragment, useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Stack } from "react-bootstrap";

const HomeMatches = () => {
    const todayDate = new Date();
    const { sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [todayResults, setTodayResults] = useState([]);
    const [key, setKey] = useState('');
    const getResults = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_results',
                    method: 'GET'
                },
                data => {
                    const formatedDate = formatDate(todayDate)
                    let newData = Object.values(data.data[formatedDate]);
                    // console.log(newData);
                    setTodayResults(newData);
                }
            )
        }
    }

    const formatDate = (date) => {
        const todayDay = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        const todayMonth = date.getMonth() > 8 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        return (date.getFullYear() + '-' + todayMonth + '-' + todayDay);
    }

    useEffect(() => {
        getResults();
    }, [token])

    useEffect(() => {
        setKey(todayResults[0]?.league?.id)
    }, [todayResults])
    return (
        <Fragment>
            <div className="matches">
                <header className="text-center">مباريات اليوم</header>
                <Tab.Container id="matches-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    {/* <Row>
                        <Col sm={12}> */}
                    <div className="matches-leagues">
                        <Nav variant="tabs" className="flex-nowrap">
                            {
                                todayResults?.map(league => {
                                    return (
                                        <Nav.Item key={league[0]?.league?.id}>
                                            <Nav.Link eventKey={league[0]?.league?.id}>
                                                <div className="matches-leagues-single">
                                                    <img src={league[0]?.league?.logo_path} alt="league logo" />
                                                    <h6 className="matches-leagues-single-name">{league[0]?.league?.name_ar}</h6>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                    {/* </Col>
                        <Col sm={12}> */}
                    <div className="matches-score">
                        <Tab.Content>
                            {todayResults?.map(league =>
                                <Tab.Pane eventKey={league[0]?.league?.id} key={league[0]?.league?.id}>
                                    <div className="matches-scores">
                                        {
                                            league.map(match => {
                                                return (
                                                    <div key={match.id} className="matches-score-match">
                                                        <div className="row justify-content-around gx-1 align-items-center mb-3">
                                                            <div className="col-3 text-center">
                                                                <img className="img-fluid" src={match.local_team?.logo_path} alt="local team logo" />
                                                                <h6 className="matches-score-match-team-name">{match.local_team?.name}</h6>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="matches-score-match-result text-center">
                                                                    <span className="matches-score-match-result-localteam">2</span>
                                                                    <span className="matches-score-match-result-seperator">:</span>
                                                                    <span className="matches-score-match-result-visitorteam">1</span>
                                                                </div>
                                                                <div className="matches-score-match-time">
                                                                    {/* <span>{match.status === 'NS'}</span> */}
                                                                    <i className="fa-regular fa-clock"></i>
                                                                </div>
                                                            </div>

                                                            <div className="col-3 text-center">
                                                                <img className="img-fluid" src={match.visitor_team?.logo_path} alt="visitor team logo" />
                                                                <h6 className="matches-score-match-team-name">{match.visitor_team?.name}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </div>
                    {/* </Col>
                    </Row> */}
                </Tab.Container>
            </div>

            {/* <div className="matches">
                <header>مباريات اليوم</header>
                <div className="matches-leagues">
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                </div>
                <div className="matches-scores">
                    <div className="matches-score-match">
                        <div className="row justify-content-around">
                            <div className="col-auto">
                                <img src={'/'} alt="team logo" />
                                <h6 className="matches-score-match-team-name">Netharland</h6>
                            </div>

                            <div className="col-auto">
                                <div className="matches-score-match-result">
                                    <span className="matches-score-match-result-localteam">2</span>
                                    <span className="matches-score-match-result-seperator">:</span>
                                    <span className="matches-score-match-result-visitorteam">1</span>
                                </div>
                                <div className="matches-score-match-time">
                                    <span>84:23</span>
                                    <i className="fa-regular fa-clock"></i>
                                </div>
                            </div>

                            <div className="col-auto">
                                <img src={'/'} alt="team logo" />
                                <h6 className="matches-score-match-team-name">Morocco</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>

    )
}

export default HomeMatches;