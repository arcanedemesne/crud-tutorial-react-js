import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
   findByTitle,
   getAllItems, 
   setItem } from "../store/actions/item.actions";
import { Item } from "../objects";
import { TextBox } from "./inputs";
import { SearchButton } from "./buttons";

class SearchItem extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.onSearchTitle = this.onSearchTitle.bind(this);

    this.state = {
      searchTitle: "",
    };
  }

  onChangeSearchTitle(e) {
    this.setState({
      searchTitle: e.target.value,
    });
  }

  onSearchTitle() {
    const { searchTitle } = this.state;
    const { actions } = this.props;
    if (searchTitle.length > 0) {
      actions.findByTitle(searchTitle);
    } else {
      actions.getAllItems();
    }
    actions.setItem(new Item());
  }

  render() {
    const { searchTitle } = this.state;
    return (
      <div className="col-md-8">
        <div className="input-group mb-3">
          <TextBox
            placeholder="Search by Title"
            value={searchTitle}
            onChange={this.onChangeSearchTitle}
          />
          <SearchButton onClick={this.onSearchTitle} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    actions: bindActionCreators(
      {
        findByTitle,
        getAllItems,
        setItem,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(SearchItem);
