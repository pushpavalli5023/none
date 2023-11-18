import { IProviderConfig } from '../provider.interface';
import {
  gupshupConfig,
  nexmoConfig,
  plivoConfig,
  sms77Config,
  snsConfig,
  telnyxConfig,
  twilioConfig,
  firetextConfig,
  infobipSMSConfig,
  burstSmsConfig,
  clickatellConfig,
  fortySixElksConfig,
  kannelConfig,
  maqsamConfig,
  smsCentralConfig,
  termiiConfig,
  africasTalkingConfig,
  sendchampConfig,
  genericSmsConfig,
  clickSendConfig,
  simpleTextingConfig,
  bandwidthConfig,
  messagebirdConfig,
  azureSmsConfig,
  bulkSmsConfig,
} from '../credentials';
import { SmsProviderIdEnum } from '../provider.enum';

import { ChannelTypeEnum } from '../../../types';

export const smsProviders: IProviderConfig[] = [
  {
    id: SmsProviderIdEnum.Novu,
    displayName: 'Novu SMS',
    channel: ChannelTypeEnum.SMS,
    credentials: [],
    docReference: 'https://docs.novu.co/channels-and-providers/default-providers#novu-sms-provider',
    logoFileName: { light: 'novu.png', dark: 'novu.png' },
  },
  {
    id: SmsProviderIdEnum.Nexmo,
    displayName: 'Nexmo',
    channel: ChannelTypeEnum.SMS,
    credentials: nexmoConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/nexmo',
    logoFileName: { light: 'nexmo.png', dark: 'nexmo.png' },
  },
  {
    id: SmsProviderIdEnum.Plivo,
    displayName: 'Plivo',
    channel: ChannelTypeEnum.SMS,
    credentials: plivoConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/plivo',
    logoFileName: { light: 'plivo.png', dark: 'plivo.png' },
  },

  {
    id: SmsProviderIdEnum.Sms77,
    displayName: 'sms77',
    channel: ChannelTypeEnum.SMS,
    credentials: sms77Config,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/sms77',
    logoFileName: { light: 'sms77.svg', dark: 'sms77.svg' },
  },
  {
    id: SmsProviderIdEnum.SNS,
    displayName: 'SNS',
    channel: ChannelTypeEnum.SMS,
    credentials: snsConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/aws-sns',
    logoFileName: { light: 'sns.svg', dark: 'sns.svg' },
  },
  {
    id: SmsProviderIdEnum.Telnyx,
    displayName: 'Telnyx',
    channel: ChannelTypeEnum.SMS,
    credentials: telnyxConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/telnyx',
    logoFileName: { light: 'telnyx.png', dark: 'telnyx.png' },
  },
  {
    id: SmsProviderIdEnum.MessageBird,
    displayName: 'MessageBird',
    channel: ChannelTypeEnum.SMS,
    credentials: messagebirdConfig,
    docReference: 'https://developers.messagebird.com/quickstarts/sms-overview/',
    logoFileName: { light: 'messagebird.png', dark: 'messagebird.png' },
  },
  {
    id: SmsProviderIdEnum.Twilio,
    displayName: 'Twilio',
    channel: ChannelTypeEnum.SMS,
    credentials: twilioConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/twilio',
    logoFileName: { light: 'twilio.png', dark: 'twilio.png' },
  },
  {
    id: SmsProviderIdEnum.Gupshup,
    displayName: 'Gupshup',
    channel: ChannelTypeEnum.SMS,
    credentials: gupshupConfig,
    docReference: 'https://docs.gupshup.io/docs/send-single-message',
    logoFileName: { light: 'gupshup.png', dark: 'gupshup.png' },
  },
  {
    id: SmsProviderIdEnum.Firetext,
    displayName: 'Firetext',
    channel: ChannelTypeEnum.SMS,
    credentials: firetextConfig,
    docReference: 'https://www.firetext.co.uk/docs',
    logoFileName: { light: 'firetext.svg', dark: 'firetext.svg' },
  },
  {
    id: SmsProviderIdEnum.Infobip,
    displayName: 'Infobip',
    channel: ChannelTypeEnum.SMS,
    credentials: infobipSMSConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/infobip',
    logoFileName: { light: 'infobip.png', dark: 'infobip.png' },
  },
  {
    id: SmsProviderIdEnum.BurstSms,
    displayName: 'BurstSMS',
    channel: ChannelTypeEnum.SMS,
    credentials: burstSmsConfig,
    docReference: 'https://developer.transmitsms.com/',
    logoFileName: { light: 'burst-sms.svg', dark: 'burst-sms.svg' },
  },
  {
    id: SmsProviderIdEnum.BulkSms,
    displayName: 'BulkSMS',
    channel: ChannelTypeEnum.SMS,
    credentials: bulkSmsConfig,
    docReference: 'https://www.bulksms.com/developer/json/v1/',
    logoFileName: { light: 'bulk-sms.png', dark: 'bulk-sms.png' },
  },
  {
    id: SmsProviderIdEnum.Clickatell,
    displayName: 'clickatell',
    channel: ChannelTypeEnum.SMS,
    credentials: clickatellConfig,
    betaVersion: true,
    docReference: 'https://docs.clickatell.com/',
    logoFileName: { light: 'clickatell.png', dark: 'clickatell.png' },
  },
  {
    id: SmsProviderIdEnum.FortySixElks,
    displayName: '46elks',
    channel: ChannelTypeEnum.SMS,
    credentials: fortySixElksConfig,
    docReference: 'https://46elks.com/docs/send-sms',
    logoFileName: { light: '46elks.png', dark: '46elks.png' },
  },
  {
    id: SmsProviderIdEnum.Kannel,
    displayName: 'Kannel SMS',
    channel: ChannelTypeEnum.SMS,
    credentials: kannelConfig,
    betaVersion: true,
    docReference: 'https://www.kannel.org/doc.shtml',
    logoFileName: { light: 'kannel.png', dark: 'kannel.png' },
  },
  {
    id: SmsProviderIdEnum.Maqsam,
    displayName: 'Maqsam',
    channel: ChannelTypeEnum.SMS,
    credentials: maqsamConfig,
    docReference: 'https://portal.maqsam.com/docs/v2/sms',
    logoFileName: { light: 'maqsam.png', dark: 'maqsam.png' },
  },
  {
    id: SmsProviderIdEnum.SmsCentral,
    displayName: 'SMS Central',
    channel: ChannelTypeEnum.SMS,
    credentials: smsCentralConfig,
    docReference: 'https://www.smscentral.com.au/sms-api/',
    logoFileName: { light: 'sms-central.png', dark: 'sms-central.png' },
  },
  {
    id: SmsProviderIdEnum.Termii,
    displayName: 'Termii',
    channel: ChannelTypeEnum.SMS,
    credentials: termiiConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/termii',
    logoFileName: { light: 'termii.png', dark: 'termii.png' },
  },
  {
    id: SmsProviderIdEnum.AfricasTalking,
    displayName: `Africa's Talking`,
    channel: ChannelTypeEnum.SMS,
    credentials: africasTalkingConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/africas-talking',
    logoFileName: { light: 'africas-talking.svg', dark: 'africas-talking.svg' },
  },
  {
    id: SmsProviderIdEnum.Sendchamp,
    displayName: `Sendchamp`,
    channel: ChannelTypeEnum.SMS,
    credentials: sendchampConfig,
    docReference: 'https://docs.novu.co/channels-and-providers/sms/sendchamp',
    logoFileName: { light: 'sendchamp.svg', dark: 'sendchamp.svg' },
  },
  {
    id: SmsProviderIdEnum.GenericSms,
    displayName: `Generic SMS`,
    channel: ChannelTypeEnum.SMS,
    credentials: genericSmsConfig,
    docReference: 'https://docs.novu.co/channels/sms/generic-sms',
    logoFileName: { light: 'generic-sms.svg', dark: 'generic-sms.svg' },
  },
  {
    id: SmsProviderIdEnum.Clicksend,
    displayName: `Clicksend`,
    channel: ChannelTypeEnum.SMS,
    credentials: clickSendConfig,
    docReference: 'https://developers.clicksend.com/docs/rest/v3/?javascript--nodejs#send-sms',
    logoFileName: { light: 'clicksend.png', dark: 'clicksend.png' },
  },
  {
    id: SmsProviderIdEnum.Simpletexting,
    displayName: `SimpleTexting`,
    channel: ChannelTypeEnum.SMS,
    credentials: simpleTextingConfig,
    docReference: 'https://simpletexting.com/api/docs/v2/',
    logoFileName: { light: 'simpletexting.png', dark: 'simpletexting.png' },
  },
  {
    id: SmsProviderIdEnum.Bandwidth,
    displayName: `Bandwidth`,
    channel: ChannelTypeEnum.SMS,
    credentials: bandwidthConfig,
    betaVersion: true,
    docReference: 'https://dev.bandwidth.com/docs/messaging/createMessage',
    logoFileName: { light: 'bandwidth.png', dark: 'bandwidth.png' },
  },
  {
    id: SmsProviderIdEnum.AzureSms,
    displayName: `Azure Sms`,
    channel: ChannelTypeEnum.SMS,
    credentials: azureSmsConfig,
    docReference: 'https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/sms/receive-sms',
    logoFileName: { light: 'azure-sms.png', dark: 'azure-sms.png' },
  },
];