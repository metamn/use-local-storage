import React, { useState } from "react";
import PropTypes from "prop-types";

import useLocalStorage from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Test = props => {
  const [value, setValue] = useLocalStorage("test-key", "test-key-value");

  return (
    <div className="Test">
      <p>test-key: {value}</p>
      <p>
        <button onClick={() => setValue("xxx")}>Set value to xxx</button>
      </p>
      <p>
        If you refresh the browser after the click the value should stay 'xxx'
      </p>
    </div>
  );
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
export { propTypes as TestPropTypes, defaultProps as TestDefaultProps };
