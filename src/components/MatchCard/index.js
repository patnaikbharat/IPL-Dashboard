import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = {matchDetails}
  const addStyle = matchStatus === 'Lost' && 'red'

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        className="match-card-team-logo"
        alt={competingTeam}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${addStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
