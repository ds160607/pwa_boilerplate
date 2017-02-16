import React from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import { Layout, Navigation, Drawer, Content } from 'react-mdl'

const onRouting = () => {
  let layout = document.querySelector('.mdl-layout')
  layout.MaterialLayout.toggleDrawer()
}

const drawer = (
  <Drawer title='Title'>
    <Navigation>
      <Link to='/' onClick={onRouting}>main</Link>
      <Link to='/counter' onClick={onRouting}>counter</Link>
    </Navigation>
  </Drawer>
)

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Layout fixedHeader >
      <Header />
      { drawer }
      <Content>
        {children}
      </Content>
    </Layout>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
