import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="enter something..." />
    </FormGroup>{" "}
    <br />
    <Button type="submit" variant="success">
      Search
    </Button>
  </Form>
);

export default SearchForm;
