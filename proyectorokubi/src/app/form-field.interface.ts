export type FieldType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'textarea' | 'select' | 'date';

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  value?: any;
  required?: boolean;
  placeholder?: string;
  options?: {value: any, label: string}[];
}