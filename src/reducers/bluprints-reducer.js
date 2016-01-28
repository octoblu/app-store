import _ from 'lodash'
import * as types from '../constants/action-types'

var bluprints = [{
    label: "Sharefile Document Approval",
    id: "9fde959f-4835-4a46-a76d-f6b217118601",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['sharefile'],
    collectionIds:['workspace', 'security'],
    intro: "Enhance your Sharefile account with document approval automation",
    description: "This flow allows you to set people to approve documents sent through Sharefile. (ie: Have your boss approve a memo before it's sent out to the team)."
  },
  {
    label: "Group Email Defined By Podio App",
    id: "79dc87f4-9fab-43fc-8c8d-bcdbbd7e54f7",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['podio'],
    collectionIds:['workspace', 'workflow'],
    intro: "Email large groups defined in a Podio app.",
    description: "Create a Podio app that stores contact information and use Octoblu to send emails to each person. You can customize the subject and body of the email."
  },
  {
    label: "Launch XenMobile On Entry",
    id: "5733402e-9633-492f-ab9d-d540a90642e7",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['xenmobile'],
    collectionIds:['security', 'workspace'],
    intro: "Launch XenDesktop when employee enters office lobby",
    description: "Using either XenMobile geolocation or beacon detection, Octoblu can launch or reconfigure XenDesktop sessions so they are ready when the employee reaches their workspace "
  },
  {
    label: "Auto-Start Your Next Meeting",
    id: "9135019c-ead1-4f20-9d3f-78536e2a099d",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['gotomeeting'],
    collectionIds: ['workspace', 'workflow'],
    intro: "Automate meetings in conference rooms",
    description: "Octoblu can automate the bridge dial-in, presentation displays, lighting, and thermostats based on meetings starting and stopping."
  },
  {
    label: "Netscaler Cyber Threat Detection",
    id: "ec1ff208-244b-42b0-bcf1-7d54c44f40ba",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['netscaler'],
    collectionIds:['monitoring-alerts', 'security'],
    intro: "Cyber threat detection and NetScaler remediation",
    description: "Using Splunk's advanced Enterprise Security module, Octoblu can be notified of various cyber threat activity on a network and block IP address and/or disable ports on NetScalers affected. https://www.citrix.com/blogs/2015/11/23/automate-netscaler-security-with-octoblu/"
  },
  {
    label: "Sharefile Cyber Threat Detection",
    id: "b40396b0-8185-4943-b30d-d37a45b246ae",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['sharefile'],
    collectionIds:['monitoring-alerts', 'security'],
    intro: "Cyber threat detection and ShareFile remediation",
    description: "Using Splunk's advanced Enterprise Security module, Octoblu can be notified of various cyber threat activity on a network and disable user accounts on ShareFile to stop downloads. https://www.citrix.com/blogs/2015/11/23/automate-netscaler-security-with-octoblu/"
  },
  {
    label: "Director SMS Alerts",
    id: "d0d1c6e0-5c14-4e64-933a-cf228884899c",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Send SMS alerts when Director detects issues",
    description: "Send multiple SMS messages to IT personnel if/when a platform error occurs. Integrate with Twilio to build a pagerduty-like call/acknowledge tree."
  },
  {
    label: "Health Based Lighting",
    id: "29841084-b4cd-4655-95a6-1728472d3795",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Change lighting based on platform health",
    description: "Change the lights (or sirens) in your datacenter based on overall health of the platform."
  },
  {
    label: "Auto-Open Support Tickets",
    id: "a4f81fde-f8a3-4a2d-944e-898db62989d3",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['workflow'],
    intro: "Open support tickets for issues automatically",
    description: "Automatically create trouble tickets in any tracking system based on issues detected by Director"
  },
  {
    label: "App Approval",
    id: "a1ae6b79-950a-4af9-b95d-4977b0e027d2",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['xenmobile'],
    collectionIds:['workflow'],
    intro: "App approval process automation",
    description: "Streamline application access requests and manager approval processes. If the manager approves access to an application, Octoblu will update permissions in StoreFront."
  },
  {
    label: "Get Daily Reports",
    id: "ea169335-317b-4064-8134-062cf0d9f2e6",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['workflow'],
    intro: "Schedule daily report generation",
    description: "Octoblu can schedule various reports. Export data from Director, generate PDF, upload PDF to ShareFile, and email employees links."
  },
  {
    label: "Self-Healing System",
    id: "2c0eddc3-4bfd-4b97-8700-3483be70f2c3",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Self-healing system automation",
    description: "Allows IT personnel to auto-run specific powershell (or bash) scripts to fix issues detected by Director"
  },
  {
    label: "Display Director Alerts",
    id: "896ec2f4-1c1f-43d0-a7a3-877149e5f9d6",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Display information on monitors when Director detects an issue",
    description: "Update dashboards in realtime or display specific URLs, html, or text on a big screen monitor in a NOC or SOC based on an event."
  },
  {
    label: "Geofence Your Office",
    id: "638b4ee9-466c-4bff-aae6-dc33883a70c1",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['xenmobile'],
    collectionIds:['workspace', 'security'],
    intro: "Add perimeter security to Apps!",
    description: "Setup a geofence perimeter around your office and activate/de-activate user profiles when employees enter/leave the office."
  },
  {
    label: "Cloud to Sharefile",
    id: "e8ec011f-c36e-4ef3-b749-b07b4a799215",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['sharefile'],
    collectionIds:['workflow'],
    intro: "Transfer files from cloud storage platforms to ShareFile",
    description: "Automate folder and file transfers from Box, DropBox, and Google Drive to ShareFile."
  }]

var initialState = {
  items: bluprints
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_BLUPRINTS:
      return _.assign({}, state, {
        items: bluprints
      })

    case types.FETCH_BLUPRINTS_BY_COLLECTION:
      return _.assign({}, state, {
        items: _.filter(state.items, (bluprint) => {
          return _.includes(bluprint.collectionIds, action.collectionId)
        })
      })

    default:
      return state
  }
}
