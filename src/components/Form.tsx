import * as React from "react";
import { Card } from "@uifabric/react-cards";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { useConstCallback } from "@uifabric/react-hooks";
import { PrimaryButton } from "office-ui-fabric-react";

const Form: React.FunctionComponent = () => {
  const [firstTextFieldValue, setFirstTextFieldValue] = React.useState("");

  const onChangeFirstTextFieldValue = useConstCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setFirstTextFieldValue(newValue || "");
    }
  );

  return (
    <div className="form">
      <Card aria-label="Basic vertical card" className="form__card">
        <Card.Section>
          <form>
            <Stack gap={15}>
              <TextField
                label="Basic controlled TextField"
                value={firstTextFieldValue}
                onChange={onChangeFirstTextFieldValue}
              />
              <TextField label="Standard" />
              <TextField
                label="Disabled"
                disabled
                defaultValue="I am disabled"
              />
              <TextField
                label="Read-only"
                readOnly
                defaultValue="I am read-only"
              />
              <TextField label="Required " required />
              <TextField ariaLabel="Required without visible label" required />
              <TextField
                label="With error message"
                errorMessage="Error message"
              />
              <PrimaryButton text="Submit" />
            </Stack>
          </form>
        </Card.Section>
      </Card>
    </div>
  );
};

export default Form;
