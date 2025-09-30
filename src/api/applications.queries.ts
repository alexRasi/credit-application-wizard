import { useQuery, useMutation } from "@tanstack/react-query";
import type { ApplicationRecord } from "../types/application";
import { deleteApplication, fetchApplications, createApplication } from "./api";

export const applicationKeys = {
  //TODO remove
  all: ["applications"] as const,
};

export const useApplications = () =>
  useQuery<ApplicationRecord[]>({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

export const useCreateApplication = () =>
  useMutation({
    mutationFn: createApplication,
  });

export const useDeleteApplication = () =>
  useMutation({
    mutationFn: deleteApplication,
  });
