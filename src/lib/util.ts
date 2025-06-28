export interface Field {
  type: string;
  name: string;
}

export interface FormData {
  [key: string]: string | boolean;
}

export const generateState = <T extends Field>(fields: T[]) => {
  return fields.reduce((acc, field) => {
    if (field.type === 'checkbox') {
      acc[field.name] = false;
    } else {
      acc[field.name] = '';
    }
    return acc;
  }, {} as FormData);
};
