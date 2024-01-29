import './index.css'

const HistoryItem = props => {
  const {historyList, deleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <div className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="card-container">
        <div className="logo-container">
          <div>
            <img src={logoUrl} alt="domain logo" className="logo-img" />
          </div>

          <div>
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            data-testid="delete"
            onClick={onDelete}
            className="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistoryItem
