import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export class Nav extends Component {
  state = { }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        <a href="/dash">
          <Menu.Item name='work' active={activeItem === 'work'} onClick={this.handleItemClick}>
            <Icon name='cogs' />
            WorkValve
          </Menu.Item>
        </a>

        <Menu.Menu position='right'>
          <a href="/main">
            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
              <Icon name='add' />
              New Job
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
              <Icon name='log out' />
              Log Out
            </Menu.Item>
          </a>
        </Menu.Menu>  
      </Menu>
    )
  }
}


