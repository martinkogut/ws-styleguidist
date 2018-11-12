import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from '../../assets/scss/_buttons.scss'

class Pagination extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    const baseClass = s.pagination
    return (
      <ul className={baseClass}>
        <li>
          <a href="#">
            <i>1</i>
          </a>
        </li>
      </ul>
    )
  }
}

export default Pagination
