import { PiWarningDuotone } from "react-icons/pi";

interface IFormError {
  message?: string;
}

export const FormError = ({ message }: IFormError) => {
  if (!message) return;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <PiWarningDuotone className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
