import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = {latestMatchDetails}

  return (
    <>
      <div>
        <p className="latest-match-team-name">{competingTeam}</p>
        <p className="latest-match-header">{date}</p>
        <p className="other-text">{venue}</p>
        <p className="other-text">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="latest-match-logo"
        alt={competingTeam}
      />
      <div>
        <p className="latest-match-header">First Innings</p>
        <p className="other-text">{firstInnings}</p>
        <p className="latest-match-header">Second Innings</p>
        <p className="other-text">{secondInnings}</p>
        <p className="latest-match-header">Man Of The Match</p>
        <p className="other-text">{manOfTheMatch}</p>
        <p className="latest-match-header">Umpires</p>
        <p className="other-text">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
