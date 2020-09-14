import React from 'react';
import {View} from 'react-native'
import {AppContext} from './ContextProvider';
import RowView from './RowView';
import todayData from '../services/todayData';

const ScheduledData = ({dataArray, onEventPress, currentDate, theme}) =>
  <AppContext.Consumer>
    {(context) => {
      const data = todayData(dataArray, currentDate || context.date);

      return (
        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
          {data.map((row, i) => <RowView key={i} rowIndex={i} row={row} hour_size={context.hour_size} onEventPress={onEventPress} theme={theme}/>)}
        </View>
      )
    }}
  </AppContext.Consumer>

export default ScheduledData
