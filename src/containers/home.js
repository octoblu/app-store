import React, { Component } from 'react'
import { Link } from 'react-router'

import CollectionNav from '../components/collection-nav'
import Loading from '../components/loading'

const collections = [
  {
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
  }
]

export default class Home extends Component {
  render() {
    return <div>
      <h1>Automation App Store</h1>
      <CollectionNav items={collections}/>
    </div>
  }
}
