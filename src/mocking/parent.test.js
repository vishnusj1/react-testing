import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GroupForm from "./parent";

let mockUser;
let mockIndex;

jest.mock("./child", () => ({ onAdd, onDelete, onEdit, users }) => (
  <div>
    <button onClick={() => onAdd(mockUser)} data-testid="addUser">
      Add
    </button>
    <button
      onClick={() => onDelete(mockIndex, mockUser)}
      data-testid="deleteUser"
    >
      Delete
    </button>
    <button onClick={() => onEdit(mockIndex, mockUser)} data-testid="editUser">
      Edit
    </button>
    <span data-testid="users">{JSON.stringify(users)}</span>
  </div>
));

const assertUsers = (expectedUsers) => {
  const usersSpan = screen.getByTestId("users");
  const usersText = usersSpan.innerHTML;
  const actualUsers = JSON.parse(usersText);
  expect(expectedUsers).toEqual(actualUsers);
};

describe("Group Form", () => {
  it("handles adding a user correctly", () => {
    mockUser = {
      name: "test user",
      address: "test adress",
    };

    render(<GroupForm />);
    const addUserButton = screen.getByTestId("addUser");
    userEvent.click(addUserButton);

    assertUsers([mockUser]);
  });

  it("handles deleting a user correctly", () => {
    mockIndex = 0;
    const initialUsers = [
      {
        name: "1",
        address: "1",
      },
      {
        name: "2",
        address: "2",
      },
      {
        name: "3",
        address: "3",
      },
    ];
    render(<GroupForm initialUsers={initialUsers} />);
    const deleteUserButton = screen.getByTestId("deleteUser");
    userEvent.click(deleteUserButton);

    const expectedUsers = [initialUsers[1], initialUsers[2]];

    assertUsers(expectedUsers);
  });
  it("handles edit user correctly", () => {
    mockIndex = 0;
    mockUser = {
      name: "4",
      address: "4",
    };
    const initialUsers = [
      {
        name: "1",
        address: "1",
      },
      {
        name: "2",
        address: "2",
      },
      {
        name: "3",
        address: "3",
      },
    ];
    render(<GroupForm initialUsers={initialUsers} />);
    const editUserButton = screen.getByTestId("editUser");
    userEvent.click(editUserButton);
    const expectedUsers = [mockUser,initialUsers[1],initialUsers[2]]
    assertUsers(expectedUsers);
  });
});
