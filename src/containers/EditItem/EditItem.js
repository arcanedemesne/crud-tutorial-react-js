import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getItem,
  setItem,
  deleteItem,
  updateItem,
} from "../../store/actions/item.actions";
import ItemForm from "../../components/ItemForm";

class EditItem extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onCheckChanged = this.onCheckChanged.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getItem(this.props.match.params.id);
  }

  updateItem(prop, value) {
    const { actions } = this.props;
    let currentItem = { ...this.props.currentItem };
    currentItem[prop] = value;
    actions.setItem(currentItem);
  }

  onChangeTitle(e) {
    this.updateItem("title", e.target.value);
  }

  onChangeDescription(e) {
    this.updateItem("description", e.target.value);
  }

  onCheckChanged() {
    const { currentItem } = this.props;
    this.updateItem("isChecked", !currentItem.isChecked);
  }

  onDeleteItem() {
    const { actions, currentItem, history } = this.props;
    actions.deleteItem(currentItem.id);
    history.push("/");
  }

  onSubmitItem() {
    const { actions, currentItem, history } = this.props;
    actions.updateItem(currentItem);
    history.push("/");
  }

  onCancel() {
    const { history } = this.props;
    history.push("/");
  }

  render() {
    const { currentItem } = this.props;
    return (
      <ItemForm
        formTitle="Edit Item"
        currentItem={currentItem}
        onChangeTitle={this.onChangeTitle}
        onChangeDescription={this.onChangeDescription}
        onCheckChanged={this.onCheckChanged}
        onDeleteItem={this.onDeleteItem}
        onSumbitItem={this.onSubmitItem}
        onCancel={this.onCancel}
      />
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  const { itemReducer } = state;
  return {
    currentItem: itemReducer.currentItem,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    actions: bindActionCreators(
      {
        getItem,
        setItem,
        deleteItem,
        updateItem,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
