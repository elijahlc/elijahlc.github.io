import { useState } from 'react';

type FormValues = Record<string, string>;

interface UseFormProps<T extends FormValues> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends FormValues>({
  initialValues,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof T]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await onSubmit(values);
      setValues(initialValues as T);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    errors,
    submitError,
    setErrors,
  };
}
