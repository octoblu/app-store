import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    id: "workspace",
    label: "Workspace",
    description: "Make your office work for you.",
    logo: "http://0.0.0.0:7777/workspace.svg"
  },
  {
    id: "security",
    label: "Security",
    description: "Lock it down with security enforcing automations.",
    logo: "http://0.0.0.0:7777/security.svg"
  },
  {
    id: "monitoring-alerts",
    label: "Monitoring & Alerts",
    description: "Never be surprised again. Get notifications instantly.",
    logo: "http://0.0.0.0:7777/alert.svg"
  },
  {
    id: "workflow",
    label: "Workflow",
    description: "Make your business more efficient through automation.",
    logo: "http://0.0.0.0:7777/workflow.svg"
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
