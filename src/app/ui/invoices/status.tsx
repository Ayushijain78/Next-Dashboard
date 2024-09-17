import clsx from "clsx";
import React from "react";

const InvoicesStatus = ({ status }: { status: string }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status == "paid",
        }
      )}
    >
      {status}
    </span>
  );
};

export default InvoicesStatus;
