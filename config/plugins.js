module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "no-replay@mahotaservicos.com",
      defaultReplyTo: "developer@mahotaservicos.com",
      testAddress: "guimaraesmahota@gmail.com",
    },
  },
  // ...
});
