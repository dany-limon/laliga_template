import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import i18n from '../../../assets/i18n'
import { PanelTitle } from '../../atoms'

export default class SimplePanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    pending: PropTypes.number,
    dismissed: PropTypes.number,
    estimated: PropTypes.number,
    activated: PropTypes.number
  }

  static defaultProps = {
    title: '',
    pending: 0,
    dismissed: 0,
    estimated: 0,
    activated: null
  }

  render() {
    const { title, code, pending, dismissed, estimated, activated } = this.props
    return (
      <Styled.StatsSimple>
        <PanelTitle title={title} code={code} centered />
        <Styled.Content>
          <Item value={pending} label={i18n.pending} />
          <Styled.Separator />
          <Item value={dismissed} label={i18n.dismissed} />
          <Styled.Separator />
          <Item value={estimated} label={i18n.estimated} />
          {activated && <Item value={activated} label={i18n.activated} />}
        </Styled.Content>
      </Styled.StatsSimple>
    )
  }
}

const Item = ({ label, value }) => (
  <Styled.Item>
    <Styled.ItemValue>{value}</Styled.ItemValue>
    <Styled.ItemLabel>{label}</Styled.ItemLabel>
  </Styled.Item>
)

Item.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
