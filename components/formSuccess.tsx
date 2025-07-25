import { FaCheck } from "react-icons/fa6";

interface IFormSuccess {
  message?: string;
}

export const FormSuccess = ({ message }: IFormSuccess) => {
  if (!message) return;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <FaCheck className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
