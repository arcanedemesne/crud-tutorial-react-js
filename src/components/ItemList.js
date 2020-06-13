import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getAllItems,
  getItem,
  setItem,
  deleteAllItems,
} from "../store/actions/item.actions";
import { Item } from "../objects";
import SearchItem from "./SearchItem";
import { DisplayItem } from "./DisplayItem";
import { ItemTable } from "./ItemTable";
import { DeleteAllButton } from "./buttons";

class ItemList extends PureComponent {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
  }

  componentDidMount() {
    this.refreshList();
    this.setActiveItem(new Item());
  }

  refreshList() {
    const { actions } = this.props;
    actions.getAllItems();
  }

  setActiveItem(item) {
    const { actions } = this.props;
    actions.setItem(item);
  }

  deleteAllItems() {
    const { actions } = this.props;
    actions.deleteAllItems();
  }

  render() {
    const { items, currentItem } = this.props;

    return (
      <div className="list row">
        <SearchItem />
        <div className="col-md-6">
          <ItemTable
            title="Item List"
            items={items}
            currentItemId={currentItem && currentItem.id}
            setActiveItem={this.setActiveItem}
          />
          <DeleteAllButton onClick={this.deleteAllItems} />
        </div>
        <DisplayItem currentItem={currentItem} />
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  const { itemReducer } = state;
  return {
    items: itemReducer.items,
    currentItem: itemReducer.currentItem,
  };
};

const mapDispatchToProps = (dispatch /*ownProps*/) => {
  return {
    actions: bindActionCreators(
      {
        getAllItems,
        getItem,
        setItem,
        deleteAllItems,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
