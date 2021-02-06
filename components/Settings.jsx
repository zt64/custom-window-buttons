const { React } = require('powercord/webpack');
const { SelectInput, Icon } = require('powercord/components/settings');

module.exports = class Settings extends React.Component {
  render () {
    const { getSetting, toggleSetting, updateSetting } = this.props;

    return <div className="cwb-settings-flex">
      <SelectInput
        searchable={false}
        options={[
          { label: 'Discord', value: 0 }
        ]}
        value={getSetting('minimize', { value: 0 }).value}
        onChange={(e) => updateSetting('indicatorStyle', e.value)}
      >Minimize Button Icon</SelectInput>
      <SelectInput
        searchable={false}
        options={[
          { label: 'Discord', value: 0 }
        ]}
        value={getSetting('maximize', { value: 0 }).value}
        onChange={(e) => updateSetting('indicatorStyle', e.value)}
      >Maximize Button Icon</SelectInput>
      <SelectInput
        searchable={false}
        options={[
          { label: 'Discord', value: 0 }
        ]}
        value={getSetting('close', { value: 0 }).value}
        onChange={(e) => updateSetting('indicatorStyle', e.value)}
      >Close Button Icon</SelectInput>
    </div>;
  }
};
