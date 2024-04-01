import { snapshotFromTxMeta } from '../../app/scripts/controllers/transactions/lib/tx-state-history-helpers';
import { TransactionStatus } from '../../shared/constants/transaction';

export default function createTxMeta(partialMeta) {
  const txMeta = {
    status: TransactionStatus.unapproved,
    txParams: {},
    ...partialMeta,
  };
  // initialize the history
  txMeta.history = [];
  const snapshot = snapshotFromTxMeta(txMeta);
  txMeta.history.push(snapshot);
  return txMeta;
}
