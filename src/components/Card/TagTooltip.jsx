import { Tooltip } from "@material-tailwind/react";

const TagTooltip = ({ tags, onTagClick }) => {
  const { actual, placeholder } = tags;

  return (
    <div className="flex flex-wrap space-x-2 max-w-full">
      {actual.map((tag, index) => (
        <Tooltip key={index} content={placeholder[index]}>
          <span
            className="bg-gray-200 rounded-md px-2 py-1 text-sm cursor-pointer transition-colors hover:border-gray-900/30 hover:bg-gray-900/30 hover:!opacity-100 group-hover:opacity-50"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        </Tooltip>
      ))}
    </div>
  );
};

export default TagTooltip;
