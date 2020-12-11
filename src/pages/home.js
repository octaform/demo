import React, { Component } from "react";
import { Input, Select, Radio, Checkbox, Textarea } from "../components/Fields";
import Errors from "../components/Errors";
import Header from "../components/Header";
import Octaform from '@octaform/core';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldErrors: {}
    };

    Octaform.extend([
      { name: 'hello_1', validator: () => {}, message: 'hello 1' },
      { name: 'hello_2', validator: () => {}, message: 'hello 2' },
      { name: 'hello_3', validator: () => {}, message: 'hello 3' },
    ])

    // Octaform.extend(
    //   { name: 'hello_3', validator: () => {} },
    // )
  }

  onSubmit = e => {
    e.preventDefault();
  }

  onChange = e => {

  }

  render() {
    const { fieldErrors } = this.state;
    const errors = Object.values(fieldErrors);
    console.log("Octaform::", Octaform);

    return (
      <div>
        <Header title="Octaform" subTitle="form validation"/>

        <form className="container" onSubmit={this.onSubmit}>
          <div className="row">
            {!!errors.length && (
              <div className="col-12">
                <Errors errors={errors} />
              </div>
            )}

            <div className="col-12">
              <span className="required-fields-info">
                * Required fields
              </span>
            </div>

            <Input
              className="col-4"
              error={fieldErrors.firstName}
              label="First name"
              onChange={this.onChange}
            />

            <Input
              className="col-4"
              isValid={fieldErrors.lastName}
              label="Last name"
              onChange={this.onChange}
            />

            <Input
              className="col-4"
              isValid={fieldErrors.birthDate}
              label="Birth date"
              onChange={this.onChange}
            />
          </div>

          <div className="row">
            <Input
              className="col-6"
              isValid={fieldErrors.email}
              label="Email"
              onChange={this.onChange}
            />

            <Select
              className="col-6"
              isValid={fieldErrors.country}
              label="Country"
              onChange={this.onChange}
              items={[
                { value: "", label: "Select a country" },
                { value: "BR", label: "Brazil" },
                { value: "UK", label: "United Kingdom" },
                { value: "US", label: "United States" }
              ]}
            />

            <Input
              className="col-6"
              isValid={fieldErrors.password}
              label="Password"
              type="password"
              onChange={this.onChange}
            />

            <Input
              className="col-6"
              isValid={fieldErrors.confirmPassword}
              label="Confirm password"
              type="password"
              onChange={this.onChange}
            />

            <Input
              className="col-6"
              isValid={fieldErrors.range}
              label="Type a value between 5 and 8"
              onChange={this.onChange}
            />

            <Input
              className="col-6"
              isValid={fieldErrors.url}
              label="Site address"
              onChange={this.onChange}
            />

            <Input
              className="col-12"
              isValid={fieldErrors.file}
              label="Upload a file"
              type="file"
              onChange={this.onChange}
            />

            <Radio
              className="col-6"
              isValid={fieldErrors.gender}
              label="Choose your plan"
              onChange={this.onChange}
              items={[
                { label: "Hobby", value: "hobby" },
                { label: "Business", value: "business" }
              ]}
            />

            <Checkbox
              className="col-6"
              isValid={fieldErrors.checkbox}
              label="Filter by plan"
              onChange={this.onChange}
              items={[
                { label: "Free", value: "free" },
                { label: "Premium", value: "premium" }
              ]}
            />
          </div>

          <div className="row">
            <Textarea
              className="col-12"
              isValid={fieldErrors.resume}
              label="What is your project all about?"
              onChange={this.onChange}
            />
          </div>

          <div className="row">
            <div className="col-6 col-version">
              <ul className="package-version">
                <li>{`Octaform core v2.0.0`}</li>
                <li>{`Octaform validator v2.0.0`}</li>
              </ul>
            </div>

            <div className="col-6 col-button">
              <button className="button-primary" type="submit">
                Validate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default Home;
