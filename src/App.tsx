import * as React from "react";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import Form from "./components/Form";
import { DetailsListDocumentsExample } from "./components/Table";
import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Pivot aria-label="Basic Pivot Example" className="pivot">
        <PivotItem
          headerText="Form example"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "Form example",
          }}
        >
          <div className="spacer">
            <h3>Form</h3>
          </div>
          <Form />
        </PivotItem>
        <PivotItem headerText="Table example">
          <div className="spacer">
            <h3>Table</h3>
          </div>
          <DetailsListDocumentsExample />
        </PivotItem>
        <PivotItem headerText="Other">
          <div className="spacer">
            <h3>Other</h3>
          </div>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default App;
