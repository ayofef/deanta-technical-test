import { PAYMENT_FIELDS } from '../../../constants/paymentFields';

const COLUMN_NAMES = {
  [PAYMENT_FIELDS.amount]: 'amount',
  [PAYMENT_FIELDS.currency]: 'currency',
  [PAYMENT_FIELDS.status]: 'status',
  [PAYMENT_FIELDS.method]: 'paymentMethod',
  [PAYMENT_FIELDS.type]: 'type',
  [PAYMENT_FIELDS.customer]: 'customerEmail',
  [PAYMENT_FIELDS.processor]: 'paymentGatewayName',
  [PAYMENT_FIELDS.date]: 'date',
  [PAYMENT_FIELDS.id]: 'paymentId',
  [PAYMENT_FIELDS.country]: 'country',
  [PAYMENT_FIELDS.sourceId]: 'sourceId',
  [PAYMENT_FIELDS.net]: 'paymentDetailsNet',
  fee: 'paymentDetailsFee',
  [PAYMENT_FIELDS.processingFee]: 'paymentDetailsProcessingFee',
  tax: 'paymentDetailsTax',
  [PAYMENT_FIELDS.exchangeRate]: 'paymentDetailsExchangeRate',
  [PAYMENT_FIELDS.localCurrency]: 'paymentDetailsLocalCurrency',
  [PAYMENT_FIELDS.localAmount]: 'paymentDetailsLocalAmount',
  [PAYMENT_FIELDS.customerId]: 'customerId',
  [PAYMENT_FIELDS.preferredPaymentMethod]: 'customerPreferredPaymentMethod',
  [PAYMENT_FIELDS.receiptMessage]: 'paymentReceiptMessage',
  [PAYMENT_FIELDS.receiptType]: 'paymentReceiptType',
  [PAYMENT_FIELDS.receiptDate]: 'paymentReceiptDate',
  [PAYMENT_FIELDS.receiptUrl]: 'paymentReceiptReceiptUrl',
  [PAYMENT_FIELDS.networkStatus]: 'paymentCoreNetworkStatus',
  [PAYMENT_FIELDS.corePaymentMethod]: 'paymentCorePaymentMethod',
  [PAYMENT_FIELDS.reason]: 'paymentCoreReason',
  [PAYMENT_FIELDS.riskLevel]: 'paymentCoreRiskLevel',
  [PAYMENT_FIELDS.riskScore]: 'paymentCoreRiskScore',
  [PAYMENT_FIELDS.declineCode]: 'paymentCoreProcessorDeclineCode',
  [PAYMENT_FIELDS.latestCharge]: 'paymentConnectionsLatestCharge',
  [PAYMENT_FIELDS.invoice]: 'paymentConnectionsInvoice',
  [PAYMENT_FIELDS.payout]: 'paymentConnectionsPayout',
  [PAYMENT_FIELDS.statementDescriptor]: 'paymentDetailsStatementDescriptor',
  [PAYMENT_FIELDS.description]: 'paymentDetailsDescription',
  [PAYMENT_FIELDS.paymentServiceId]: 'paymentGatewayServiceId',
  [PAYMENT_FIELDS.phone]: 'customerPhone',
};

export { COLUMN_NAMES };