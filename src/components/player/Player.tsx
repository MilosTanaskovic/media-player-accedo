import React from 'react'
import { PlayerIcon } from '../../designsystem/atoms'
import { previous, backward, play, forward, next } from "../../assets/intex"

interface PlayerProps {}

// eslint-disable-next-line no-empty-pattern
const Player: React.FC<PlayerProps> = ({}) => {
  return (
    <section id="player" className='player-container'>
        <div className="player">
            <div className='time-control'>
                <span>Start Time</span>
                <input type="range" />
                <span>End Time</span>
            </div>
            <div className='play-control'>
                <PlayerIcon icon={previous} />
                <PlayerIcon icon={backward} />
                <PlayerIcon icon={play} />
                <PlayerIcon icon={forward} />
                <PlayerIcon icon={next} />
            </div>
        </div>
    </section>
  )
}

export default Player