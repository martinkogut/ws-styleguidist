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
    const rootClass = classNames(baseClass, {
      ['pagination']: 'pagination',
    })
    return (
      <ul className={rootClass}>
        <li>
          <a href="#">
            <span>
              <i className="fa fa-angle-double-left"></i>
            </span>
          </a>
        </li>
        {
          this.pages()
        }
        <li>
          <a href="#">
            <span>
              <i className="fa fa-angle-double-right"></i>
            </span>
          </a>
        </li>
      </ul>
    )
  }

  pages = () => {
    let pages = this.state.pages
    let temp = []
    for (let i = 1; i <= pages; i++) {
      temp.push(
        <li>
          <a href="#">
            <span>
              {`${i}`}
            </span>
          </a>
        </li>
      )
    }
    return temp
  }

  static propTypes = {
    /** Numbers of pages to paginate */
    pages: PropTypes.number,
  }

}

export default Pagination
