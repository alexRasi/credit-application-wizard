import { TrashIcon } from "../../icons/TrashIcon";
import {
  Card,
  DeleteButton,
  Email,
  Info,
  Meta,
} from "./ApplicationItem.styles";

type ApplicationItemProps = {
  email: string;
  employmentType: string;
  income: number;
  onDelete: () => void;
};

export const ApplicationItem = ({
  email,
  employmentType,
  income,
  onDelete,
}: ApplicationItemProps) => {
  return (
    <Card>
      <Info>
        <Email>{email}</Email>
        <Meta>
          {employmentType} - <data value={income}>{income} €</data>
        </Meta>
      </Info>
      <DeleteButton
        aria-label={`Delete application for ${email}`}
        onClick={onDelete}
      >
        <TrashIcon width={24} height={24} />
      </DeleteButton>
    </Card>
  );
};
