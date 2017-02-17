import React from 'react'
import { Link } from 'react-router'
import { Header as MDLHeader, Navigation } from 'react-mdl'
import './Header.scss'

export const Header = () => (
  <MDLHeader title='Title' scroll>
    <Navigation>
      <Link to='/'>main</Link>
      <Link to='/counter'>counter</Link>
    </Navigation>
  </MDLHeader>
)

export default Header
