import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteList = id => {
    const {initialHistoryList} = this.props
    const deleteListItem = initialHistoryList.filter(each => each.id !== id)

    this.setState({initialHistoryList: deleteListItem})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    const searchInputResult = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="searchInput-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />

            <input
              type="search"
              placeholder="Search History"
              className="search-input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>

        <ul className="list-container">
          {searchInputResult.map(each => (
            <HistoryItem
              historyList={each}
              key={each.id}
              deleteList={this.deleteList}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
