import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    label: "Workspace",
    id: "workspace"
  },
  {
    label: "Security",
    id: "security"
  },
  {
    label: "Alerts & Monitoring",
    id: "alerts-monitoring"
  },
  {
    label: "Workflow",
    id: "workflow"
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
