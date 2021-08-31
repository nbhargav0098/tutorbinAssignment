// Write your code here
import './index.css'

const SongItem = props => {
  const {songDetails} = props
  const {name, cover} = songDetails

  return (
    <li className="song-item">
      <img className="song-image" src={cover} alt={name} />
      <p className="song-name">{name}</p>
    </li>
  )
}

export default SongItem
