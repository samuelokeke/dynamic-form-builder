import data from './data.json';
import Card from '@/components/ui/Card';
import { useForm } from '@/contexts/FormContext';
import { type ChangeEvent, type FormEvent } from 'react';

function App() {
  const { form, updateField } = useForm();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    updateField(name, type === 'checkbox' ? checked : value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted: ', form);
  };

  return (
    <div className="min-h-screen bg-background flex justify-center items-start">
      <Card title={data.title || 'Dynamic Form Builder'} className="mt-24">
        <form className="w-full space-y-6" onSubmit={onSubmit}>
          {data.fields.map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={field.type === 'checkbox' ? undefined : String(form[field.name])}
                checked={field.type === 'checkbox' ? Boolean(form[field.name]) : undefined}
                onChange={handleChange}
                placeholder={field.label}
                className={field.type === 'checkbox' ? 'form-checkbox' : 'form-control'}
              />
            </div>
          ))}

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default App;
