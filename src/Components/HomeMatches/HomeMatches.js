import { useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Loader from "../Loader/Loader";

const HomeMatches = () => {
    const todayDate = new Date();
    const { isLoading, sendRequest } = useHTTP();
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
                    setTodayResults(newData);
                },
                err => {
                    
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    useEffect(() => {
        if (todayResults[0]) {
            setKey(todayResults[0][0]?.league?.id)
        }
    }, [todayResults])
    return (
        isLoading ?
            <Loader />
            :
            <div className="matches">
                <header className="text-center mb-2">مباريات اليوم</header>
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
                    <div className="matches-tab">
                        <Tab.Content>
                            {todayResults?.map(league =>
                                <Tab.Pane eventKey={league[0]?.league?.id} key={league[0]?.league?.id}>
                                    <div className="matches-score">
                                        {
                                            league.map(match => {
                                                return (
                                                    <div key={match.id} className="matches-score-match">
                                                        <div className="row justify-content-around gx-1 align-items-center">
                                                            <div className="col-3 text-center">
                                                                <img src={match.local_team?.logo_path} alt="local team logo" />
                                                                <h6 className="matches-score-match-team-name">{match.local_team?.name}</h6>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="matches-score-match-result text-center">
                                                                    <span className="matches-score-match-result-visitorteam">{match.visitorteam_score}</span>
                                                                    <span className="matches-score-match-result-seperator">:</span>
                                                                    <span className="matches-score-match-result-localteam">{match.localteam_score}</span>
                                                                </div>
                                                                <div className="matches-score-match-time">
                                                                    {match.status === 'NS' && <span>{match.time.slice(0, 5)}</span>}
                                                                    {match.status === 'POSTP' && <span>مؤجل {match.time.slice(0, 5)}</span>}
                                                                    {(match.status === 'FT' || match.status === 'AET' || match.status === 'FT_PEN') && <span>انتهى</span>}
                                                                    {match.status === 'LIVE' && <span>جاري 00 : {match.minutes_passed > 9 ? match.minutes_passed : `0${match.minutes_passed}`}</span>}
                                                                    {match.status === 'HT' && <span>استراحة الشوط الاول</span>}
                                                                    {(match.status === 'ET' || match.status === 'BREAK') && <span>استراحة الوقت الاضافي</span>}
                                                                    {match.status === 'PEN_LIVE' && <span>ركلات ترجيح</span>}
                                                                    {match.status === 'CANCL' && <span>ملغي</span>}
                                                                    {match.status === 'INT' && <span>توقفت</span>}
                                                                    {match.status === 'DELAYED' && <span>متاخر</span>}
                                                                    <i className="fa-regular fa-clock"></i>
                                                                </div>
                                                            </div>

                                                            <div className="col-3 text-center">
                                                                <img src={match.visitor_team?.logo_path} alt="visitor team logo" />
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
                </Tab.Container>
            </div>
    )
}

export default HomeMatches;