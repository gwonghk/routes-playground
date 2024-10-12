import Field from './field';
import { useFormState } from '../form-context';

const FormField = ({
  id,
  label,
  placeholder,
  type = 'text',
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) => {
  const [state, setState] = useFormState();

  const handleOnBlur = (value: {}) => {
    setState({
      ...state,
      ...value,
    });
  };

  return (
    <Field
      key={id}
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      onBlur={handleOnBlur}
      required={required}
    />
  );
};

export default FormField;
