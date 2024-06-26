interface Invoice {
    id: number;
    name: string;
    attributes: {};
    senderEmail: string;
    recipientEmail: string;
    shippingAddress: string;
    date: string;
    dueDate: string;
    invoiceNote: string;
    description: string;
    qty: number;
    rate: number;
    total: number;
  }