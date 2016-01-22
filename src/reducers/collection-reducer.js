import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    label: "Meetings",
    id: "meetings"
  },
  {
    label: "Security",
    id: "security"
  },
  {
    label: "Alerts",
    id: "alerts"
  },
  {
    label: "Process Automation",
    id: "process-automation"
  }]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_COLLECTIONS:
      return state

    default:
      return state
  }
}
