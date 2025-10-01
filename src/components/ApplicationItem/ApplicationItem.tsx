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
  income: number | null;
  testId?: string;
  onDelete: () => void;
};

export const ApplicationItem = ({
  email,
  employmentType,
  income,
  testId,
  onDelete,
}: ApplicationItemProps) => {
  return (
    <CardWrapper>
      <Card>
        <Info>
          <Email>{email}</Email>
          <Data data-testid={`application-data-${testId}`}>
            {employmentType
              ? employmentTypeLabels[employmentType]
              : "No employment type"}{" "}
            - {income} €{/* Assumption: income is in euros*/}
          </Data>
        </Info>
        <DeleteButton
          type="button"
          aria-label={`Delete application for ${email}`}
          onClick={onDelete}
          data-testid={`delete-button-${testId}`}
        >
          <TrashIcon width={24} height={24} />
        </DeleteButton>
      </Card>
    </CardWrapper>
  );
};
