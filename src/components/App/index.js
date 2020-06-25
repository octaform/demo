/* eslint-disable no-undef */
import React, { Component } from "react";
import classNames from "classnames";
import additionalPkg from "octaform-additional/package.json";
import additional from "octaform-additional";
import octaPkg from "octaform/package.json";
import Octaform, { validate } from "octaform";
import Icon from "../../shared/components/Icon/index";
import Errors from "../Errors";
import ValidationMap from "./ValidationMap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldErrors: {}
    };

    Octaform.validator.add(Object.keys(additional).map(key => additional[key]));
    window.GIT_HASH = GIT.VERSION;

    console.log({ Octaform, validate, additional });
  }

  getValidationMap = () => {
    return Object.keys(ValidationMap).reduce((acc, key) => {
      const ref = this[key];

      if(ref) {
        return { ...acc, [key]: { ...acc[key], ref } }
      }

      return acc;
    }, ValidationMap);
  }

  onSubmit = e => {
    e.preventDefault();
    const validation = this.getValidationMap();
    const valid = Octaform.validate(validation);

    this.setState({
      fieldErrors: valid.reduce(
        (acc, item) => ({ ...acc, [item.field]: item }),
        {}
      )
    });

    console.log("onSubmit::", valid);
  };

  onChange = (event, name) => {
    const fieldname = event.target.name || name;
    const ref = this[fieldname];

    const valid = Octaform.validate({
      [fieldname]: {
        ...(ref && { ref }),
        value: event.target.value,
        ...ValidationMap[fieldname]
      }
    });

    this.setState(state => {
      const newState = {
        ...state.fieldErrors,
        [fieldname]: valid.filter(item => item.field === fieldname)[0]
      };

      if (!valid.some(item => item.field === fieldname)) {
        delete newState[fieldname];
      }

      return {
        fieldErrors: newState
      };
    });

    console.log("onChange::", valid);
  };

  isRequiredField = (field) => {
    const map = ValidationMap[field] || {};
    const isRequired = (
      map.rules
        ? (
          Array.isArray(map.rules)
            ? map.rules.includes('required')
            : Object.keys(map.rules).includes('required')
        )
        : (
          map.constructor === String 
            ? map === 'required'
            : false 
        )
    );

    return isRequired ? '*' : '';
  }

  render() {
    const { fieldErrors } = this.state;
    const errors = Object.values(fieldErrors);

    return (
      <div>
        <header className="header">
          <a className="logo" href="https://github.com/octaform/octaform" rel="noopener noreferrer" target="_blank">
            <Icon slug="logo" className="logo__icon" />
            <p className="logo__content">
              <span className="logo__title">Octaform</span>
              <span className="logo__description">form validation</span>
            </p>
          </a>
        </header>

        <form className="container" onSubmit={this.onSubmit}>
          <div className="row">
            {!!errors.length && (
              <div className="col-12">
                <Errors errors={errors} />
              </div>
            )}

            <div className="col-12">
              <span className="span__info">* Required fields</span>
            </div>

            <label
              className={classNames("col-4", {
                invalid: fieldErrors.firstName
              })}
            >
              <span className="label">First Name {this.isRequiredField('firstName')}</span>
              <input
                type="text"
                autoComplete="given-name"
                ref={r => this.firstName = r}
                onChange={event => this.onChange(event, "firstName")}
              />
            </label>

            <label
              className={classNames("col-4", {
                invalid: fieldErrors.lastName
              })}
            >
              <span className="label">Last Name {this.isRequiredField('lastName')}</span>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                ref={r => this.lastName = r}
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-4", {
                invalid: fieldErrors.birthDate
              })}
            >
              <span className="label">Birth Date {this.isRequiredField('birthDate')}</span>
              <input
                type="text"
                name="birthDate"
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="row">
            <label
              className={classNames("col-6", {
                invalid: fieldErrors.email
              })}
            >
              <span className="label">Email {this.isRequiredField('email')}</span>
              <input
                type="text"
                name="email"
                autoComplete="email"
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-6", {
                invalid: fieldErrors.country
              })}
            >
              <span className="label">Country {this.isRequiredField('country')}</span>
              <select
                name="country"
                autoComplete="country-name"
                onChange={this.onChange}
              >
                <option value="">Select a country</option>
                <option value="BR">Brazil</option>
                <option value="UA">Ukraine</option>
                <option value="US">United States</option>
              </select>
            </label>

            <label
              className={classNames("col-6", {
                invalid: fieldErrors.password
              })}
            >
              <span className="label">Password {this.isRequiredField('password')}</span>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-6", {
                invalid: fieldErrors.confirmPassword
              })}
            >
              <span className="label">Confirm password {this.isRequiredField('confirmPassword')}</span>
              <input
                type="password"
                name="confirmPassword"
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-6", {
                invalid: fieldErrors.range
              })}
            >
              <span className="label">Type a value between 5 and 8 {this.isRequiredField('range')}</span>
              <input
                name="range"
                type="text"
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-6", {
                invalid: fieldErrors.url
              })}
            >
              <span className="label">Type your site address {this.isRequiredField('url')}</span>
              <input
                name="url"
                type="text"
                onChange={this.onChange}
              />
            </label>

            <label
              className={classNames("col-12", {
                invalid: fieldErrors.file
              })}
            >
              <span className="label">Upload a file {this.isRequiredField('file')}</span>
              <input
                name="file"
                type="file"
                onChange={this.onChange}
              />
            </label>

            <div
              className={classNames("col-6", {
                invalid: fieldErrors.gender
              })}
            >
              <span className="label">Gender {this.isRequiredField('gender')}</span>
              <input
                type="radio"
                name="gender"
                value="male"
                id="genderMale"
                onChange={this.onChange}
              />{" "}
              <label htmlFor="genderMale">Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="genderFemale"
                onChange={this.onChange}
              />{" "}
              <label htmlFor="genderFemale">Female</label>
            </div>

            <div
              className={classNames("col-6", {
                invalid: fieldErrors.checkbox
              })}
            >
              <span className="label">Do you have a portfolio {this.isRequiredField('checkbox')}</span>
              <label className="checkbox">
                <input
                  name="checkbox"
                  type="checkbox"
                  value="yes"
                  onChange={this.onChange}
                />
                <span>Yes</span>
              </label>

              <label className="checkbox">
                <input
                  name="checkbox"
                  type="checkbox"
                  value="no"
                  onChange={this.onChange}
                />
                <span>No</span>
              </label>

              <label className="checkbox">
                <input
                  name="checkbox"
                  type="checkbox"
                  value="maybe"
                  onChange={this.onChange}
                />
                <span>Maybe</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div
              className={classNames("col-12", {
                invalid: fieldErrors.resume
              })}
            >
              <label>
                <span className="label">Resume {this.isRequiredField('resume')}</span>
                <textarea
                  name="resume"
                  onChange={this.onChange}
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-version">
              <ul className="package-version">
                <li>{`Octaform v${octaPkg.version}`}</li>
                <li>{`Octaform Additional v${additionalPkg.version}`}</li>
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
