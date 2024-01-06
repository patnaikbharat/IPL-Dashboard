import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchDataList: [],
    isLoaderLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({
      matchDataList: updatedData,
      isLoaderLoading: false,
    })
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    // return id.toLowerCase()

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'DC':
        return 'dc'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'KXP':
        return 'kxp'
      case 'SRH':
        return 'srh'
      case 'RR':
        return 'rr'
      default:
        return ''
    }
  }

  render() {
    const {matchDataList, isLoaderLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDataList
    const backgroundColor = this.getBackgroundColor()

    return (
      <div className={`team-matches-container ${backgroundColor}`}>
        {isLoaderLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
            <p className="latest-matches-text">Latest Matches</p>
            <div className="latest-matches-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
