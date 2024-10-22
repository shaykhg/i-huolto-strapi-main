module.exports = ({ env }) => ({
  email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: '',
        domain: 'mg.i-huolto.fi', //Required if you have an account with multiple domains
        host: 'api.eu.mailgun.net', //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'no-reply@i-huolto.fi',
        defaultReplyTo: 'support@i-huolto.fi',
      },
  },
});