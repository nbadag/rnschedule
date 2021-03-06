import React from 'react';
import { View } from 'react-native';
import ApptView from './ApptView';

const RowView = ({row, hour_size, onEventPress, theme, rowIndex, renderApptView}) =>{
  return <View
    style={{
      width: '100%',
      position: 'absolute',
      marginTop: row.hrsBefore * hour_size,
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    {row.rowAppts.map((appt, i) => <ApptView key={i} rowIndex={rowIndex} topTime={row.start} appt={appt} hour_size={hour_size} onEventPress={onEventPress} renderApptView={renderApptView} theme={theme}/>)}
  </View>
}

export default RowView
