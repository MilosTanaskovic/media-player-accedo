import React from 'react'

interface PlayerIconProps {
    icon: string;
    size?: string;
    className?: string;
}

const PlayerIcon: React.FC<PlayerIconProps> = ({icon, size, className}) => {
  return (
    <img src={icon} width={size} className={` ${className}`} />
  )
}

export default PlayerIcon