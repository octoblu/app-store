let bluprints = [{
    label: "Dropbox To Sharefile",
    id: "edfa76a2-5fce-436b-a1e6-03434d3c2eff",
    tags: ['sharefile'],
    collectionIds:['workflow'],
    intro: "Transfer files from Dropbox to ShareFile",
    description: "Automate folder and file transfers from DropBox to ShareFile.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "RightSignature Email Reminder",
    id: "e5be22d0-709f-4083-b833-b5f239c986cc",
    tags: ['rightSignature'],
    collectionIds:['workspace', 'workflow'],
    intro: "Automatically email clients who have not signed a doc.",
    description: "Send emails out to pending signees on a specified interval.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "Start Meeting when in range of a Beacon",
    id: "654fb609-dc26-4921-851f-d4aaf549bcef",
    tags: ['gotomeeting', 'podio'],
    collectionIds:['workspace', 'workflow'],
    intro: "Automatically start a meeting when you enter the conference room.",
    description: "Automatically start a GoToMeeting when you are in range of your beacon, then post the link to your Podio group.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "Automated Meeting with Email Notifications",
    id: "67efb102-b229-424a-a569-caa7b4554449",
    tags: ['podio', 'gotomeeting'],
    collectionIds:['workflow', 'monitoring-alerts'],
    intro: "Automatically start a meeting and send links to a list from a Podio app!",
    description: "Compile a list of emails and a date in a Podio app. On that date, a GoToMeeting will start and send out links to everyone in the email list.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "Automated Daily Meetings",
    id: "e16c9ce7-0b72-4f1b-ad5b-b09e115ad5f9",
    tags: ['gotomeeting', 'podio'],
    collectionIds:['workspace', 'workflow'],
    intro: "Host daily meetings with teams around the globe!",
    description: "Start a meeting with GoToMeeting, then immediately post a status to your Podio group with the information to join.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "Email List Defined By Podio App",
    id: "ced4a912-6a18-40e0-8c9a-fd38a4e30248",
    tags: ['podio'],
    collectionIds:['workspace', 'workflow'],
    intro: "You'll never have to send a mass email again.",
    description: "Create a Podio app that stores contact information and use Octoblu to send emails to each person. You can customize the subject and body of the email.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "ShareFile Virus Alert via SMS or Email",
    id: "0a4bd94b-684c-431e-b86a-27257f6ac7a0",
    tags: ['sharefile'],
    collectionIds:['monitoring-alerts', 'security'],
    intro: "File virus detection with SMS and Email alerts.",
    description: "Get an Email and SMS when ShareFile detects that one of your files has a virus.",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "ShareFile to Podio Status",
    id: "d12c446a-8636-4ace-84bc-564d61043847",
    tags: ['sharefile', 'podio'],
    collectionIds:['workspace'],
    intro: "Let your Podio group know when you upload to ShareFile.",
    description: "Checks if the upload is recent, then sends a Podio status update when you share a file with ShareFile! ",
    author: "Octoblu",
    active: true,
    installs: "333"
  },
  {
    label: "Launch XenDesktop On Entry",
    id: "5733402e-9633-492f-ab9d-d540a90642e7",
    tags: ['xenapp'],
    collectionIds:['security', 'workspace'],
    intro: "Save time by launching XenDesktop when employees enter",
    description: "Using either XenMobile geolocation or beacon detection, Octoblu can launch or reconfigure XenDesktop sessions so they are ready when the employee reaches their workspace ",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Auto-Start Your Next Meeting",
    id: "9135019c-ead1-4f20-9d3f-78536e2a099d",
    tags: ['gotomeeting'],
    collectionIds: ['workspace', 'workflow'],
    intro: "Automate meetings in conference rooms",
    description: "Octoblu can automate the bridge dial-in, presentation displays, lighting, and thermostats based on meetings starting and stopping.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Netscaler Cyber Threat Detection",
    id: "ec1ff208-244b-42b0-bcf1-7d54c44f40ba",
    tags: ['netscaler-logo'],
    collectionIds:['monitoring-alerts', 'security'],
    intro: "Cyber threat detection and NetScaler remediation",
    description: "Using Splunk's advanced Enterprise Security module, Octoblu can be notified of various cyber threat activity on a network and block IP address and/or disable ports on NetScalers affected.",
    blogPost: "https://www.citrix.com/blogs/2015/11/23/automate-netscaler-security-with-octoblu/",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Sharefile Cyber Threat Detection",
    id: "b40396b0-8185-4943-b30d-d37a45b246ae",
    tags: ['sharefile'],
    collectionIds:['monitoring-alerts', 'security'],
    intro: "Cyber threat detection and ShareFile remediation",
    description: "Using Splunk's advanced Enterprise Security module, Octoblu can be notified of various cyber threat activity on a network and disable user accounts on ShareFile to stop downloads.",
    blogPost: "https://www.citrix.com/blogs/2015/11/23/automate-netscaler-security-with-octoblu/",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Director SMS Alerts",
    id: "d0d1c6e0-5c14-4e64-933a-cf228884899c",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Send SMS alerts when Director detects issues",
    description: "Send multiple SMS messages to IT personnel if/when a platform error occurs. Integrate with Twilio to build a pagerduty-like call/acknowledge tree.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Health Based Lighting",
    id: "29841084-b4cd-4655-95a6-1728472d3795",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Change lighting based on platform health",
    description: "Change the lights (or sirens) in your datacenter based on overall health of the platform.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Auto-Open Support Tickets",
    id: "a4f81fde-f8a3-4a2d-944e-898db62989d3",
    tags: ['director'],
    collectionIds:['workflow'],
    intro: "Open support tickets for issues automatically",
    description: "Automatically create trouble tickets in any tracking system based on issues detected by Director",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "App Approval",
    id: "a1ae6b79-950a-4af9-b95d-4977b0e027d2",
    tags: ['xenapp'],
    collectionIds:['workflow'],
    intro: "App approval process automation",
    description: "Streamline application access requests and manager approval processes. If the manager approves access to an application, Octoblu will update permissions in StoreFront.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Get Daily Reports",
    id: "ea169335-317b-4064-8134-062cf0d9f2e6",
    tags: ['director'],
    collectionIds:['workflow'],
    intro: "Schedule daily report generation",
    description: "Octoblu can schedule various reports. Export data from Director, generate PDF, upload PDF to ShareFile, and email employees links.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Self-Healing System",
    id: "2c0eddc3-4bfd-4b97-8700-3483be70f2c3",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Self-healing system automation",
    description: "Allows IT personnel to auto-run specific powershell (or bash) scripts to fix issues detected by Director",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Display Director Alerts",
    id: "896ec2f4-1c1f-43d0-a7a3-877149e5f9d6",
    tags: ['director'],
    collectionIds:['monitoring-alerts'],
    intro: "Display information on monitors when Director detects an issue",
    description: "Update dashboards in realtime or display specific URLs, html, or text on a big screen monitor in a NOC or SOC based on an event.",
    author: "Octoblu",
    active: false,
    installs: "333"
  },
  {
    label: "Geofence Your Office",
    id: "638b4ee9-466c-4bff-aae6-dc33883a70c1",
    tags: ['xenapp'],
    collectionIds:['workspace', 'security'],
    intro: "Add perimeter security to Apps!",
    description: "Setup a geofence perimeter around your office and activate/de-activate user profiles when employees enter/leave the office.",
    author: "Octoblu",
    active: false,
    installs: "333"
  }
]


export default bluprints
