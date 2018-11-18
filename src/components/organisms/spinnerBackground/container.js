import { connect } from 'react-redux'
import i18n from '../../../assets/i18n'
import view from './view'

const mapStateToProps = state => ({
  label: i18n.loading,
  isFetching: state.auth.isFetching
})

export default connect(
  mapStateToProps,
  null
)(view)
