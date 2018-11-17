import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import classNames from 'classnames'
import s from '../../assets/scss/_testimonials.scss'
class Testimonial extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    return (
      <div id="testimonials" className={s['gray-bg']}>
        <section className={'container ' + s['testimonials-3col']}>
          <div className="row section">
            <div className="col-md-4 mb-sm-50">
              <div className={s['t-item'] + ' wow fadeIn'} data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeIn'}}>
              <Avatar src="http://themes.89elements.com/definity-html/assets/images/avatar-1.png" alt="Tony Tester" />
                <blockquote>
                  <p>{this.state.quote}</p>
                  <footer>
                    <cite>by {this.state.name}<span>{this.state.company}</span></cite>
                  </footer>
                </blockquote>
                <span className={s['et-quote t-icon']}></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  static propTypes = {
    /** Text of quoate */
    quote: PropTypes.string.isRequired,
    /** Name of the person who wrote the quoate */
    name: PropTypes.string.isRequired,
    /** Company of person's quotation */
    company: PropTypes.string.isRequired,
  }

}

export default Testimonial
