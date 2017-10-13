import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export class StageNav extends Component {
  state = { activeItem: 'Application' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>

          <Menu.Item name='Application' active={activeItem === 'Application'} onClick={this.handleItemClick} />

          <Menu.Item name='Interview' active={activeItem === 'Interview'} onClick={this.handleItemClick} />

          <Menu.Item name='Final' active={activeItem === 'Final'} onClick={this.handleItemClick} />
        </Menu>
        
        
      </div>
    )
  }
}