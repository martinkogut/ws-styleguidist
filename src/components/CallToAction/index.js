import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from '../../assets/scss/_cta.scss'

import Button from '../Button'

class CallToAction extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    const baseClass = this.state.newsletter ? s['cta-newsletter'] : s['cta-link']
    const rootClass = classNames(baseClass, {
      [s[`cta-dark`]]: this.state.dark
    })
    return (
      <div className={rootClass}>
        <div className={s['bg-overlay']}>
          <div className={s['cta-wrapper']}>
            <h3 className="h-alt wow fadeIn animated" data-wow-delay=".1s" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s'}}>{this.state.text}</h3>
            {
              this.state.newsletter ?
                <input type="email" placeholder="Your email address" />
              : null
            }
            <Button className="wow fadeIn animated" context="light" text="Get in touch" data-wow-delay=".3s" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s'}} />
          </div>
        </div>
      </div>
    )
  }
}

CallToAction.PropTypes = {
  dark: PropTypes.string,
  text: PropTypes.string,
}

export default CallToAction
