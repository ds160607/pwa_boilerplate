import React from 'react'
import './HomeView.scss'
import database from '../../../database/firebase'

import { Menu, MenuItem, IconButton, Button } from 'react-mdl'

export const HomeView = () => (
  <div>
    <IconButton name='more_vert' className='more_vert' id='icon_button_1' />
    <Menu target='icon_button_1'>
      <MenuItem>Some Action</MenuItem>
      <MenuItem>Another Action</MenuItem>
      <MenuItem disabled>Disabled Action</MenuItem>
      <MenuItem>Yet Another Action</MenuItem>
    </Menu>
    <Button ripple raised>sss</Button>
  </div>
)

export default HomeView
