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
  label: "Geolocation & XenMobile",
  id: "5733402e-9633-492f-ab9d-d540a90642e7",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['rightSignature'],
  collectionIds:['workflow', 'workspace'],
  intro: "Automate your workplace wherever you are!",
  description: "Using XenMobile's geolocation abilities, have your lights turn on anywhere you decide to work."
},
{
  label: "Netscaler Monitor",
  id: "a4f81fde-f8a3-4a2d-944e-898db62989d3",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['netscaler'],
  collectionIds:['monitoring-alerts', 'security'],
  intro: "Get Notified when Netscaler does things",
  description: "Be sent an sms or email when your netscaler instance goes down, goes up, or does anything."
},
{
  label: "Splunk",
  id: "638b4ee9-466c-4bff-aae6-dc33883a70c1",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['netscaler'],
  collectionIds:['monitoring-alerts', 'security'],
  intro: "Make your Netscaler instance even more powerful with Splunk reporting!",
  description: "Send all your Netscaler data to Splunk."
},
{
  label: "Drop-File",
  id: "e8ec011f-c36e-4ef3-b749-b07b4a799215",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['sharefile'],
  collectionIds:['workflow', 'workspace'],
  intro: "Send Dropbox files to Sharefile.",
  description: "Transfer all of your DropBox files to Sharefile easily and painlessly."
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
