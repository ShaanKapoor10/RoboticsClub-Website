import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import StatusTag from './StatusTag';
import TagTooltip from './TagTooltip';

export function CustomCard(props) {
  return (
    <MaterialCard className="w-full max-w-md h-auto shadow-lg transition-transform duration-500 ease hover:translate-y-[-7px] flex flex-col justify-between p-4">
      <CardHeader floated={false} color="blue-gray" className="h-60">
        <img
          src={props.image}
          alt="ui/ux review check"
          className="w-full h-full object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="text-xs flex-grow p-4">
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h1" color="blue-gray" className="font-medium text-lg">
            {props.title}
          </Typography>
        </div>
        <div className="mb-4 text-gray-600">
          {props.description}
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <StatusTag status={props.status} />
        </div>
        <div className="group mt-4 inline-flex flex-wrap items-center gap-2">
            <TagTooltip tags={props.tags} onTagClick={props.onTagClick} />
        </div>
      </CardBody>
      <CardFooter className="pt-4">
        <Button size="sm" fullWidth={true} className="text-xs">
          Read More
        </Button>
      </CardFooter>
    </MaterialCard>
  );
}
