/*
NOTICE:
This Snow + LavaMoat scuttling integration is currently being used
with an experimental API (https://github.com/LavaMoat/LavaMoat/pull/462).
*/

(function () {
  const log = console.log.bind(console);
  // eslint-disable-next-line no-undef
  const isWorker = !self.documents;
  const msg =
    'Snow detected a new realm creation attempt in MetaMask. Performing scuttling on new realm.';
  // eslint-disable-next-line no-undef
  Object.defineProperty(self, 'SCUTTLER', {
    value: (realm, scuttle) => {
      if (isWorker) {
        scuttle(realms);
      } else {
        // eslint-disable-next-line no-undef
        self.SNOW((win) => {
          log(msg, win);
          scuttle(win);
        }, realm);
      }
    },
  });
})();
