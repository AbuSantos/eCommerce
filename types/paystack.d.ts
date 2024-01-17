interface PaystackPopOptions {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  ref?: string;
  callback?: (response: any) => void;
  onClose?: () => void;
}

interface PaystackPop {
  setup(options: PaystackPopOptions): void;
}

interface Window {
  PaystackPop: PaystackPop;
}
