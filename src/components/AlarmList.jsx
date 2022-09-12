import { Stack, Switch } from '@mui/material'
import React from 'react'
import LabelAndRepeat from './LabelAndRepeat'
import Time from './Time'

const AlarmList = () => {
  return (
    <Stack 
        direction='row' 
        alignItems='center'
        justifyContent='space-between'
    >
        <Time />
        <LabelAndRepeat />
        <Switch />
    </Stack>
  )
}

export default AlarmList