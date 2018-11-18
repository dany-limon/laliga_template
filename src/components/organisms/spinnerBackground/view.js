import React from 'react'
import classNames from 'classnames'
import './spinner.css'

export default ({ children, isFetching, label }) => (
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
