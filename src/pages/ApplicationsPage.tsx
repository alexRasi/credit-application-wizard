import { useNavigate } from "react-router-dom";
import { ApplicationItem } from "../components/ApplicationItem/ApplicationItem";
import { WizardLayout } from "./WizardLayout/WizardLayout";

export const ApplicationsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <WizardLayout
        title="Applications"
        ctaLabel="Apply again"
        onCtaClick={() => navigate("/personal-info")}
      >
        <ApplicationItem
          email="john.doe@mail.com"
          employmentType="Full time"
          income={1000}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jane.smith@mail.com"
          employmentType="Part time"
          income={500}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="jack.brown@mail.com"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
        <ApplicationItem
          email="LAST ITEM"
          employmentType="Freelance"
          income={750}
          onDelete={() => console.log("Delete clicked")}
        />
      </WizardLayout>
    </>
  );
};
