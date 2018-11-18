import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import view from './view'

const mapStateToProps = state => ({
  token: state.auth.token,
  isFething: state.auth.isFething
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(view)
)
