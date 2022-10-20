import React from "react";
import { render } from "@testing-library/react";
import JobCardList from "./JobCardList";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
<JobCardList/>      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});