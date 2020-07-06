import React, { PureComponent } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "shards-react";

import { shardReactEnums } from "../constants/shardReactEnums";

class ConfirmationModal extends PureComponent {
  render() {
    const {
      open = false,
      title = null,
      body = null,
      accept = {
        onClick: () => {},
        text: "ACCEPT",
        theme: null
      },
      decline = {
        onClick: () => {},
        text: "CANCEL",
        theme: null
      },
      canDismiss = true,
    } = this.props;
    return (
      <Modal
        open={open}
        toggle={() => {
          canDismiss && decline.onClick();
        }}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              squared
              theme={decline.theme || shardReactEnums.Themes.SECONDARY}
              onClick={decline.onClick}
            >
              {decline.text}
            </Button>
            <Button
              squared
              theme={accept.theme || shardReactEnums.Themes.PRIMARY}
              onClick={accept.onClick}
            >
              {accept.text}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ConfirmationModal;
