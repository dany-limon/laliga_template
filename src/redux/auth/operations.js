import { AuthActions } from './'
export const startApp = () => dispatch => {
  dispatch(AuthActions.setIsFetching(true))
  setTimeout(() => dispatch(AuthActions.setIsFetching(false)), 2000)
}
