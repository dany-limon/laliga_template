import React, { PureComponent } from 'react'
import * as Styled from './styled'

export default class CurrentAllegationsList extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <Styled.CurrentAllegationsList>
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
          </tbody>
        </table>
      </Styled.CurrentAllegationsList>
    )
  }
}
