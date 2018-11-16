import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from '../../assets/scss/_progress.scss'

class ProgressBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    const baseClass = s.progress
    const rootClass = classNames(baseClass, {
      [s[`progress-${this.state.type}`]]: this.props.type
    })
    return (
      <div className={s['progress-group']}>
        <div className={rootClass}>
          <div className={s['progress-bar'] + ' progress-bar'} role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progress}%`}}>
            <span className="sr-only">{this.state.progress}% Complete</span>
          </div>
        </div>
        <span className={s['progress-title']}>{this.state.title}</span>
        <span className={s['progress-value']}>{this.state.progress}%</span>
      </div>
    )
  }
}

ProgressBar.PropTypes = {
  type: PropTypes.string,
  progress: PropTypes.string,
  title: PropTypes.string,
}

export default ProgressBar
