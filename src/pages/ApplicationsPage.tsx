import { useNavigate } from "react-router-dom";
import { ApplicationItem } from "../components/ApplicationItem/ApplicationItem";
import { WizardLayout } from "./WizardLayout/WizardLayout";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useApplications,
  useDeleteApplication,
} from "../api/applications.queries";

export const ApplicationsPage = () => {
  const navigate = useNavigate();
  const qc = useQueryClient();

  const { data, isLoading, isError, error } = useApplications();
  const deleteApplication = useDeleteApplication();

  useEffect(() => {
    if (isError) {
      // TODO add toast
      console.error(error);
    }
  }, [isError, error]);

  // TODO add loader

  return (
    <>
      <WizardLayout
        title="Applications"
        ctaLabel="Apply again"
        ctaType="button"
        onCtaClick={() => navigate("/personal-info")}
      >
        {isLoading && <p>Loading...</p>}

        {!isLoading && !isError && (!data || data.length === 0) ? (
          <p>No applications found.</p>
        ) : (
          data?.map((application) => (
            <ApplicationItem
              key={application.id}
              email={application.email}
              employmentType={application.employmentType}
              income={application.income}
              onDelete={() =>
                deleteApplication.mutate(application.id, {
                  onSuccess: () => {
                    qc.invalidateQueries({ queryKey: ["applications"] });
                  },
                  onError: (error) => {
                    // TODO show toast
                    console.error(error);
                  },
                })
              }
            />
          ))
        )}
      </WizardLayout>
    </>
  );
};
