import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import { PanelTitle } from '../../atoms'

export default class ActiveExemptionsPanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    season: PropTypes.number,
    countDown: PropTypes.string,
    breaches: PropTypes.number
  }

  static defaultProps = {
    title: '',
    code: null,
    season: 0,
    countDown: '-',
    breaches: 0
  }

  render() {
    const { title, code } = this.props
    return (
      <Styled.activeExemptionsPanel>
        <PanelTitle title={title} code={code} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Artículo</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RSG001</td>
              <td>3.4</td>
              <td>Pend</td>
              <td>24 nov 2018</td>
              <td>12:00</td>
              <td>Ver</td>
            </tr>
            <tr>
              <td>RSG001</td>
              <td>3.4</td>
              <td>Pend</td>
              <td>24 nov 2018</td>
              <td>12:00</td>
              <td>Ver</td>
            </tr>
            <tr>
              <td>RSG001</td>
              <td>3.4</td>
              <td>Pend</td>
              <td>24 nov 2018</td>
              <td>12:00</td>
              <td>Ver</td>
            </tr>
          </tbody>
        </table>
      </Styled.activeExemptionsPanel>
    )
  }
}
