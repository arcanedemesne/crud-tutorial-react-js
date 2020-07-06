import React, { Fragment, PureComponent } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormInput,
  ButtonToolbar,
  ButtonGroup,
} from "shards-react";

import ConfirmationModal from "./ConfirmationModal";

class ItemForm extends PureComponent {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
    this.formCancel = this.formCancel.bind(this);
    this.formDelete = this.formDelete.bind(this);
    this.performDelete = this.performDelete.bind(this);
    this.toggleDeleteConfirmation = this.toggleDeleteConfirmation.bind(this);

    this.state = {
      showDeleteConfirmation: false,
    };
  }

  formSubmit() {
    const { onSumbitItem } = this.props;
    onSumbitItem && onSumbitItem();
  }

  formCancel() {
    const { onCancel } = this.props;
    onCancel && onCancel();
  }

  formDelete() {
    this.toggleDeleteConfirmation(true);
  }

  performDelete() {
    const { onDeleteItem } = this.props;
    onDeleteItem();
    this.toggleDeleteConfirmation(false);
  }

  toggleDeleteConfirmation(show = false) {
    const { showDeleteConfirmation } = this.state
    this.setState({ showDeleteConfirmation: show || !showDeleteConfirmation });
  }

  render() {
    const { showDeleteConfirmation } = this.state;
    const {
      currentItem,
      formTitle = null,
      onChangeTitle = () => {},
      onChangeDescription = () => {},
      onCheckChanged = () => {},
    } = this.props;

    return (
      <Fragment>
        {currentItem && (
          <Fragment>
            <h5>{formTitle}</h5>
            <Form>
              <FormGroup>
                <label htmlFor="#title">Title</label>
                <FormInput
                  id="#title"
                  placeholder="Enter a title here..."
                  value={currentItem.title}
                  onChange={onChangeTitle}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#description">Decsription</label>
                <FormInput
                  id="#description"
                  placeholder="Enter a description here..."
                  value={currentItem.description}
                  onChange={onChangeDescription}
                />
              </FormGroup>
              <FormGroup>
                {currentItem.id && (
                  <Button
                    outline
                    squared
                    theme={currentItem.isChecked ? "dark" : "light"}
                    onClick={onCheckChanged}
                  >
                    {`Mark as ${currentItem.isChecked ? "Un" : ""}Checked`}
                  </Button>
                )}
              </FormGroup>
            </Form>

            <ConfirmationModal
              open={showDeleteConfirmation}
              title={`Are you sure you want to delete ${
                currentItem.title || "this item"
              }?`}
              body={`This will delete ${
                currentItem.title || "this item"
              }. This cannot be undone. Are you sure?`}
              accept={{ text: "DELETE", onClick: this.performDelete }}
              decline={{ text: "CANCEL", onClick: () => this.toggleDeleteConfirmation(false) }}
              canDismiss={false}
            />

            <ButtonToolbar>
              <ButtonGroup size="md">
                {currentItem.id && (
                  <Button outline squared theme="danger" onClick={this.formDelete}>
                    Delete
                  </Button>
                )}

                <Button squared theme="secondary" onClick={this.formCancel}>
                  Cancel
                </Button>

                <Button squared theme="primary" onClick={this.formSubmit}>
                  {currentItem.id ? "Update" : "Save"}
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default ItemForm;