import _ from 'lodash'

export const getRol = ({ sku, record }) => {
  const groups = _.get(record, 'grupos')
  const isCurrentAppGroup = group => _.get(group, 'aplicacion.sku') === sku
  const appGroup = _.find(groups, isCurrentAppGroup)
  const rol = _.get(appGroup, 'perfil')
  return rol
}
