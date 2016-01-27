import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    id: "workspace",
    label: "Workspace",
    description: "Automate your workspace."
  },
  {
    id: "security",
    label: "Security",
    description: "Create automations to ensure security."
  },
  {
    id: "monitoring-alerts",
    label: "Monitoring & Alerts",
    description: "Get notified when things no worky."
  },
  {
    id: "workflow",
    label: "Workflow",
    description: "I don't understand this one at all."
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
