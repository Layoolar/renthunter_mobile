import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0", // TODO: Replace with your actual DSN
  // You can add more options here
});

export default Sentry;
