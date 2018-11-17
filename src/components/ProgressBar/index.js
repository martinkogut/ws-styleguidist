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

  static propTypes = {
    /** Type of progress bar [small] */
    type: PropTypes.string,
    /** Value of progress from 0 to 100 percent */
    progress: PropTypes.number.isRequired,
    /** Description below progress bar */
    title: PropTypes.string,
  }

  static defaultProps = {
    type: null,
    progress: 0
  }

}

export default ProgressBar
