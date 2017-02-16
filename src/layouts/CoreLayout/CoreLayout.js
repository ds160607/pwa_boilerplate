import React from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import { Layout, Navigation, Drawer, Content } from 'react-mdl';

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Layout fixedHeader >
      <Header />
      <Drawer title='Title'>
        <Navigation>
          <Link to="/">main</Link>
          <Link to="/counter">counter</Link>
        </Navigation>
      </Drawer>
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
