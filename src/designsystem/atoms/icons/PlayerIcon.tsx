import React from 'react'

interface PlayerIconProps {
    icon: string;
    onClick?: () => void;
    size?: string;
    className?: string;
}

const PlayerIcon: React.FC<PlayerIconProps> = ({icon, onClick, size, className}) => {
  return (
    <img src={icon} onClick={onClick} width={size} className={` ${className}`} />
  )
}

export default PlayerIcon