import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    id: "workspace",
    label: "Workspace",
    description: "Make your office work for you.",
    logo: "https://icons.octoblu.com/collection/workspace.svg"
  },
  {
    id: "security",
    label: "Security",
    description: "Lock it down with security enforcing automations.",
    logo: "https://icons.octoblu.com/collection/security.svg"
  },
  {
    id: "monitoring-alerts",
    label: "Monitoring & Alerts",
    description: "Never be surprised again. Get notifications instantly.",
    logo: "https://icons.octoblu.com/collection/alert.svg"
  },
  {
    id: "workflow",
    label: "Workflow",
    description: "Make your business more efficient through automation.",
    logo: "https://icons.octoblu.com/collection/workflow.svg"
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
