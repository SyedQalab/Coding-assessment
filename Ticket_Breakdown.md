# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket 1: Update Agent ID Storage**
**Acceptance Criteria:**

- Facilities should be able to save custom IDs for each Agent they work with.
- The custom Agent ID should be associated with the Facility.
- The custom Agent ID should be stored in the database.
- Time/Effort Estimate: 4 hours

**Implementation Details:**

- Add a new field called "customId" to the Agents table in the database schema.
- Update the Facility-Agent relationship table to include the custom Agent ID.
- Modify the "getShiftsByFacility" function to fetch the custom Agent ID for each Shift from the database.
- Update the "generateReport" function to use the custom Agent ID when generating reports.

**Ticket 2: User Interface Update for Custom Agent IDs**
**Acceptance Criteria:**

- Facilities should be able to enter and update custom IDs for Agents they work with.
- The User Interface (UI) should provide a form to enter and update custom IDs.
- The UI should validate and handle any conflicts with existing custom IDs.
- Time/Effort Estimate: 6 hours

**Implementation Details:**

- Add an input field on the Facility's dashboard to enter and update custom Agent IDs.
- Implement client-side validation to ensure the custom ID is unique and follows any required format.
- Make an API call to update the custom Agent ID in the database when the form is submitted.
- Handle conflicts with existing custom IDs by displaying appropriate error messages.