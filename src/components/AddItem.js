import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItem, setItem, createItem } from "../store/actions/item.actions";
import { Item } from "../objects";
import { ItemForm } from "./ItemForm";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.setItem(new Item());
  }

  updateItem(prop, value) {
    const { actions, currentItem } = this.props;
    let newItem = { ...currentItem };
    newItem[prop] = value;
    actions.setItem(newItem);
  }

  onChangeTitle(e) {
    this.updateItem("title", e.target.value);
  }

  onChangeDescription(e) {
    this.updateItem("description", e.target.value);
  }

  onSubmitItem() {
    const { actions, currentItem, history } = this.props;
    actions.createItem(currentItem);
    history.push("/");
  }

  render() {
    const { currentItem } = this.props;
    return (
      <ItemForm
        currentItem={currentItem}
        formTitle="Add Item"
        onChangeTitle={this.onChangeTitle}
        onChangeDescription={this.onChangeDescription}
        onSumbitItem={this.onSubmitItem}
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
        createItem,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
