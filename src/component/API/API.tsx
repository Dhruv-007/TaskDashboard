import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

// Dummy data array
const dummyData = [
  {
    title: "Complete Project Proposal",
    description: "Write and finalize the project proposal document.",
    due_date: "2024-06-15",
    status: "Pending",
  },
  {
    title: "Meeting with Client",
    description: "Discuss project requirements and timelines with the client.",
    due_date: "2024-06-10",
    status: "Completed",
  },
  {
    title: "Design Mockups",
    description: "Create mockups for the project's user interface.",
    due_date: "2024-06-20",
    status: "Pending",
  },
  {
    title: "Code Refactoring",
    description: "Refactor existing codebase for better performance and maintainability.",
    due_date: "2024-06-25",
    status: "All",
  },
];

// Custom baseQuery to return the mock data
const mockBaseQuery = async () => {
  return { data: dummyData };
};

// Create the API
export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getDummyData: builder.query({
      queryFn: () => mockBaseQuery(), // Use queryFn to return static data
    }),
  }),
});

// Extracting hooks from the created API
export const { useGetDummyDataQuery } = dummyApi;
