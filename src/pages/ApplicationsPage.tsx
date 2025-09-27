import { useNavigate } from "react-router-dom";
import { ApplicationItem } from "../components/ApplicationItem/ApplicationItem";
import { WizardLayout } from "./WizardLayout/WizardLayout";
import { useEffect, useState } from "react";
import type { ApplicationRecord } from "../types/application";

export const ApplicationsPage = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(
          "https://682de3f5746f8ca4a47b0980.mockapi.io/applications",
        );
        const data = await res.json();
        setApplications(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Failed to fetch applications:", err);
      }
    };

    fetchApplications();
  }, []); // run once on mount

  return (
    <>
      <WizardLayout
        title="Applications"
        ctaLabel="Apply again"
        ctaType="button"
        onCtaClick={() => navigate("/personal-info")}
      >
        {applications.length === 0 && loading === false ? (
          <p>No applications found.</p>
        ) : (
          applications.map((app) => (
            <ApplicationItem
              key={app.id}
              email={app.email}
              employmentType={app.employmentType}
              income={app.income}
              onDelete={async () => {
                await fetch(
                  `https://682de3f5746f8ca4a47b0980.mockapi.io/applications/${app.id}`,
                  { method: "DELETE" },
                );
                setApplications((prev) =>
                  prev.filter((item) => item.id !== app.id),
                );
              }}
            />
          ))
        )}

        {/* <ApplicationItem
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
        /> */}
      </WizardLayout>
    </>
  );
};
