import React, { Component } from 'react';
import Schema from '../../../../octaform-additional/src';
import Octaform from '../../../../octaform/src';
import Errors from '../Errors';
import ValidationMap from './ValidationMap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: [],
    }

    this.octaform = new Octaform();
    this.octaform.validator.add(Schema);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.hasFieldError = this.hasFieldError.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.validate();
  }

  onChange(){
    this.validate();
  }

  validate() {
    const validate = this.octaform.validateAll(ValidationMap);
    console.log('Validation::', validate);

    this.setState({
      hasErrors: validate
    }, () => this.hasFieldError(validate));
  }

  hasFieldError(validate){
    const classError = 'invalid';
    document.querySelectorAll(`.${classError}`)
      .forEach(element => {
        element.classList.remove(classError);
      });

    validate.forEach(item => {
      const elem = document.getElementsByName(this[item.field].name);
      if(elem.length > 1) {
        elem.forEach(elm => elm.classList.add(classError))
      }else{
        this[item.field].classList.add(classError);
      }
    });
  }

  render() {
    const { hasErrors } = this.state;

    return (
      <div>
        <form className="container" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-12">
              <h4 className="col-6 first">Octaform Validate - Demo</h4>

              <div className="col-6 text-right last">
                <a href="https://github.com/octaform/octaform" rel="noopener noreferrer" target="_blank" className="github-link">
                  <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Octaform - Github" />
                  <span>Github</span>
                </a>
              </div>
            </div>

            {!!hasErrors.length && (
              <div className="col-12">
                <Errors errors={hasErrors} />
              </div>
            )}

            <label className="col-6">
              <strong>First name:</strong>
              <input 
                type="text" 
                name="firstName"
                autoComplete='given-name'
                ref={r => this.firstName = r}
                onChange={this.onChange}
              />
            </label>

            <label className="col-6">
              <strong>Last name:</strong>
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
            <label className="col-7">
              <strong>Email:</strong>
              <input 
                type="text" 
                name="email" 
                autoComplete='email'
                ref={r => this.email = r}
                onChange={this.onChange}
              />
            </label>

            <label className="col-5">
              <strong>Country:</strong>
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

            <label className="col-12">
              <strong>Upload a file:</strong>
              <input 
                name="file" 
                type="file"
                ref={r => this.file = r}
                onChange={this.onChange}
              />
            </label>

            <div className="col-6">
              <strong>Gender:</strong>
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
            
            <div className="col-6">
              <strong>Do you have a portfolio:</strong>
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
            <div className="col-12">
              <label>
                <strong>Resume:</strong>
                <textarea 
                  name="resume" 
                  ref={r => this.resume = r}
                  onChange={this.onChange}
                />
              </label>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 right">
              <br />
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
