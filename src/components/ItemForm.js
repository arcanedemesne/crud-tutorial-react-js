import React from "react";
import { DeleteButton, SubmitButton, ToggleButton } from "./buttons";
import { TextBox } from "./inputs";

export const ItemForm = ({
  currentItem,
  formTitle = null,
  onChangeTitle = () => {},
  onChangeDescription = () => {},
  onCheckChanged = () => {},
  onDeleteItem = () => {},
  onSumbitItem = () => {},
}) => (
  <div>
    {currentItem && (
      <div className={`${currentItem.id ? "edit" : "submit"}-form`}>
        <h4>{formTitle}</h4>
        <form>
          <TextBox
            id="title"
            label="Title"
            value={currentItem.title}
            onChange={onChangeTitle}
          />

          <TextBox
            id="description"
            label="Description"
            value={currentItem.description}
            onChange={onChangeDescription}
          />

          {currentItem.id && (
            <ToggleButton
              text={`Mark as ${currentItem.isChecked ? "Un" : ""}Checked`}
              isChecked={currentItem.isChecked}
              onChange={onCheckChanged}
            />
          )}
        </form>

        {currentItem.id && <DeleteButton onClick={onDeleteItem} />}

        <SubmitButton
          text={currentItem.id ? "Update" : "Save"}
          onClick={onSumbitItem}
        />
      </div>
    )}
  </div>
);
