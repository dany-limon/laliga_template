import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './spinner.css'

const SpinnerBackground = ({ children, isFetching, label }) => (
  <div className={classNames({ 'spinner-active': isFetching })}>
    <div className="LaLigaHolder-bg">
      <div className="spinner-text">
        {label}
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <span className="LaLiga-bg" />
    </div>
    {children}
  </div>
)

SpinnerBackground.propTypes = {
  children: PropTypes.object,
  isFetching: PropTypes.bool,
  label: PropTypes.string
}

export default SpinnerBackground
