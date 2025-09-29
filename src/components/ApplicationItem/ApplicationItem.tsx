import { TrashIcon } from "../../icons/TrashIcon";
import {
  employmentTypeLabels,
  type EmploymentType,
} from "../../types/application";
import {
  Card,
  CardWrapper,
  DeleteButton,
  Email,
  Info,
  Data,
} from "./ApplicationItem.styles";

type ApplicationItemProps = {
  email: string;
  employmentType: EmploymentType | "";
  income: number | "";
  onDelete: () => void;
};

export const ApplicationItem = ({
  email,
  employmentType,
  income,
  onDelete,
}: ApplicationItemProps) => {
  return (
    <CardWrapper>
      <Card>
        <Info>
          <Email>{email}</Email>
          <Data>
            {employmentType
              ? employmentTypeLabels[employmentType]
              : "No employment type"}{" "}
            - <data value={income}>{income} €</data>
          </Data>
        </Info>
        <DeleteButton
          type="button"
          aria-label={`Delete application for ${email}`}
          onClick={onDelete}
        >
          <TrashIcon width={24} height={24} />
        </DeleteButton>
      </Card>
    </CardWrapper>
  );
};
