import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import MuiMenu from '@material-ui/core/Menu'
import MuiMenuItem from '@material-ui/core/MenuItem'

import { MenuItem } from './../../types/MenuItem'

type MenuPropsType = { menuItems: MenuItem[] }

const Menu = ({ menuItems }: MenuPropsType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item: MenuItem) => (
          <Link to={item.linkTo} onClick={handleClose} key={item.key}>
            <MuiMenuItem>{item.label}</MuiMenuItem>
          </Link>
        ))}
      </MuiMenu>
    </>
  )
}

export default Menu
