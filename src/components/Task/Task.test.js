import { render } from "@testing-library/react";
import Task from ".";

const mockTaskDataIncomplete = {
  id: 1,
  title: "walk the doggo",
  completed: false,
};

const mockTaskDataComplete = {
  id: 1,
  title: "feed the doggo",
  completed: true,
};

describe("Task", () => {
  it("should display label correctly", () => {
    const { getByLabelText } = render(
      <Task
        task={mockTaskDataIncomplete}
        handleTaskUpdate={() => {}}
        index={0}
      />
    );
    expect(getByLabelText(mockTaskDataIncomplete.title)).toBeInTheDocument();
  });

  it("should have checkbox checked when complete is set to true", () => {
    const { getByLabelText } = render(
      <Task task={mockTaskDataComplete} handleTaskUpdate={() => {}} index={0} />
    );
    expect(getByLabelText(mockTaskDataComplete.title)).toBeChecked();
  });

  it("should have checkbox is not checked when complete is set to false", () => {
    const { getByLabelText } = render(
      <Task
        task={mockTaskDataIncomplete}
        handleTaskUpdate={() => {}}
        index={0}
      />
    );
    expect(getByLabelText(mockTaskDataIncomplete.title)).not.toBeChecked();
  });
});
