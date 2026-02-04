// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://3496fe98c2bf83a0f63c3fbd9440964c@o4510822505971712.ingest.us.sentry.io/4510822518161408",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
 
  integrations: [
    Sentry.mongooseIntegration()
],

});