import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
});

export default Sentry;
