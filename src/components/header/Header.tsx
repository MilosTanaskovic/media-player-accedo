import React from 'react'

import * as styles from './styles/header.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HeaderProps {}

// eslint-disable-next-line no-empty-pattern
const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <nav className={styles.box}>
            <h1>Media Player</h1>
            <button>Playlist</button>
        </nav>
    )
}

export default Header