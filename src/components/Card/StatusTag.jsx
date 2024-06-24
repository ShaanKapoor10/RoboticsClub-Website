import { Tooltip } from "@material-tailwind/react";

const StatusTag = ({ status }) => {
  const statusColors = {
    Completed: "green",
    Ongoing: "yellow",
  };

  const color = statusColors[status] || "gray";
  const textColor = color === "green" ? "white" : "black";

  return (
    <Tooltip content={status}>
      <span
        className="text-xs px-2 py-1 rounded-full"
        style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      >
        {status}
      </span>
    </Tooltip>
  );
};

export default StatusTag;
