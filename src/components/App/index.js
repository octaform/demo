import React, { Component } from 'react';
import additionalPkg from 'octaform-additional/package.json';
import additional from 'octaform-additional';
import octaPkg from 'octaform/package.json';
import Octaform from 'octaform';
import classNames from 'classnames';
import Errors from '../Errors';
import ValidationMap from './ValidationMap';
import images from '../../utils/images';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldErrors: {}
    }

    Octaform.validator.add(
      Object.keys(additional).map(
        key => additional[key]
      )
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const validate = Octaform.validate(ValidationMap);

    this.setState({
      fieldErrors: validate.reduce((acc, item) => ({ ...acc, [item.field]: item }), {})
    });

    console.log('onSubmit::', validate);
  }

  onChange = (event) => {
    const fieldname = event.target.name;
    const validate = Octaform.validate({ [fieldname]: ValidationMap[fieldname] });

    this.setState((state) => {
      const newState = {
        ...state.fieldErrors,
        [fieldname]: validate.filter(item => item.field === fieldname)[0]
      };

      if(!validate.some(item => item.field === fieldname)) {
        delete newState[fieldname];
      }

      return {
        fieldErrors: newState
      };
    });

    console.log('onChange::', validate);
  }

  render() {
    const { fieldErrors } = this.state;
    const errors = Object.values(fieldErrors);

    return (
      <div>
        <form className="container" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-12">
              <h4 className="container__title">Octaform Validate - Demo</h4>

              <div className="container__links">
                <a href="https://github.com/octaform/octaform" rel="noopener noreferrer" target="_blank" className="github-link">
                  <img src={images.githubLogo} alt="Octaform - Github" />
                  <span>Github</span>
                </a>
              </div>
            </div>

            {!!errors.length && (
              <div className="col-12">
                <Errors errors={errors} />
              </div>
            )}

            <div className="col-12">
              <span className="span__info">* Required fields</span>
            </div>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.firstName
              })
            }>
              <span className="label">First Name*</span>
              <input 
                type="text" 
                name="firstName"
                autoComplete='given-name'
                ref={r => this.firstName = r}
                onChange={this.onChange}
              />
            </label>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.lastName
              })
            }>
              <span className="label">Last Name*</span>
              <input 
                type="text"
                name="lastName"
                autoComplete='family-name'
                ref={r => this.lastName = r}
                onChange={this.onChange}
              />
            </label>
          </div>

          <div className="row">
            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.email
              })
            }>
              <span className="label">Email*</span>
              <input 
                type="text" 
                name="email"
                autoComplete='email'
                ref={r => this.email = r}
                onChange={this.onChange}
              />
            </label>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.country
              })
            }>
              <span className="label">Country*</span>
              <select 
                name="country" 
                autoComplete='country-name'
                ref={r => this.country = r}
                onChange={this.onChange}
              >
                <option value="">Select a country</option>
                <option value="BR">Brazil</option>
                <option value="UA">Ukraine</option>
                <option value="US">United States</option>
              </select>
            </label>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.password
              })
            }>
              <span className="label">Password*</span>
              <input 
                type="password" 
                name="password"
                ref={r => this.password = r}
                onChange={this.onChange}
              />
            </label>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.confirmPassword
              })
            }>
              <span className="label">Confirm password*</span>
              <input 
                type="password" 
                name="confirmPassword" 
                ref={r => this.confirmPassword = r}
                onChange={this.onChange}
              />
            </label>
            
            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.range
              })
            }>
              <span className="label">Type a value between 5 and 8</span>
              <input 
                name="range" 
                type="text"
                ref={r => this.range = r}
                onChange={this.onChange}
              />
            </label>

            <label className={
              classNames("col-6", {
                'invalid': fieldErrors.url
              })
            }>
              <span className="label">Type your site address</span>
              <input 
                name="url" 
                type="text"
                ref={r => this.url = r}
                onChange={this.onChange}
              />
            </label>

            <label className={
              classNames("col-12", {
                'invalid': fieldErrors.file
              })
            }>
              <span className="label">Upload a file*</span>
              <input 
                name="file" 
                type="file"
                ref={r => this.file = r}
                onChange={this.onChange}
              />
            </label>

            <div className={
              classNames("col-6", {
                'invalid': fieldErrors.gender
              })
            }>
              <span className="label">Gender*</span>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                id="genderMale"
                ref={r => this.gender = r}
                onChange={this.onChange}
              /> <label htmlFor="genderMale">Male</label>

              <input 
                type="radio" 
                name="gender" 
                value="female" 
                id="genderFemale"
                ref={r => this.gender = r}
                onChange={this.onChange}
              /> <label htmlFor="genderFemale">Female</label>
            </div>
            
            <div className={
              classNames("col-6", {
                'invalid': fieldErrors.checkbox
              })
            }>
              <span className="label">Do you have a portfolio*</span>
              <label className="checkbox">
                <input 
                  name="checkbox" 
                  type="checkbox" 
                  value="yes"
                  ref={r => this.checkbox = r}
                  onChange={this.onChange}
                />
                <span>Yes</span>
              </label>

              <label className="checkbox">
                <input 
                  name="checkbox" 
                  type="checkbox" 
                  value="no"
                  ref={r => this.checkbox = r}
                  onChange={this.onChange}
                />
                <span>No</span>
              </label>
              
              <label className="checkbox">
                <input 
                  name="checkbox" 
                  type="checkbox" 
                  value="maybe"
                  ref={r => this.checkbox = r}
                  onChange={this.onChange}
                />
                <span>Maybe</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className={
              classNames("col-12", {
                'invalid': fieldErrors.resume
              })
            }>
              <label>
                <span className="label">Resume*</span>
                <textarea 
                  name="resume" 
                  ref={r => this.resume = r}
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
              <button 
                className="button-primary" 
                type="submit"
              >Validate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
