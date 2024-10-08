import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">My-Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuIcon} src={getImageUrl("/assets/nav/closeIcon.png")}/>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
