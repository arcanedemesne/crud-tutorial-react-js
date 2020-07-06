import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
   findByTitle,
   getAllItems, 
   setItem } from "../store/actions/item.actions";
import { Item } from "../objects";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  InputGroup, InputGroupAddon, InputGroupText, FormInput,
} from "shards-react";

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
      <InputGroup size="sm" seamless>
        <FormInput
          className="border-0"
          placeholder="Search by Title"
          value={searchTitle}
          onChange={this.onChangeSearchTitle}
        />
        <InputGroupAddon type="append"
          onClick={this.onSearchTitle}
        >
          <InputGroupText>
            <FontAwesomeIcon style={{cursor: "pointer"}} icon={faSearch} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
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
