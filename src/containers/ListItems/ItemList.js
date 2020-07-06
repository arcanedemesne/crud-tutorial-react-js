import React, { PureComponent, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getAllItems,
  getItem,
  setItem,
  deleteAllItems,
} from "../../store/actions/item.actions";

import { Button, Col, Row } from "shards-react";

import { Item } from "../../objects";
import { DisplayItem } from "../../components/DisplayItem";
import { ItemTable } from "../../components/ItemTable";
import ConfirmationModal from "../../components/ConfirmationModal";

class ItemList extends PureComponent {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
    this.toggleDeleteConfirmation = this.toggleDeleteConfirmation.bind(this);

    this.state = {
      showDeleteConfirmation: false,
    };
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
    this.toggleDeleteConfirmation(false);
  }

  toggleDeleteConfirmation(show = false) {
    const { showDeleteConfirmation } = this.state;
    this.setState({ showDeleteConfirmation: show || !showDeleteConfirmation });
  }

  render() {
    const { showDeleteConfirmation } = this.state;
    const { items, currentItem } = this.props;

    return (
      <Fragment>
        <Row>
          <Col>
            <Fragment>
              <Fragment>
                <ItemTable
                  title="Item List"
                  items={items}
                  currentItemId={currentItem && currentItem.id}
                  setActiveItem={this.setActiveItem}
                />
                <br />
              </Fragment>

              <ConfirmationModal
                open={showDeleteConfirmation}
                title={`Are you sure you want to delete all items?`}
                body={`This will delete all items. This cannot be undone. Are you sure?`}
                accept={{ text: "DELETE", onClick: this.deleteAllItems }}
                decline={{
                  text: "CANCEL",
                  onClick: () => this.toggleDeleteConfirmation(false),
                }}
                canDismiss={false}
              />

              {items && items.length > 0 ? (
                <Button
                  squared
                  theme="danger"
                  onClick={() => this.toggleDeleteConfirmation(true)}
                >
                  Delete All
                </Button>
              ) : (
                <Fragment>
                  <Button squared theme="primary" href="/add">
                    Add item
                  </Button>
                </Fragment>
              )}
            </Fragment>
          </Col>
          <Col>
            {items && items.length > 0 && (
              <DisplayItem currentItem={currentItem} />
            )}
          </Col>
        </Row>
      </Fragment>
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
