/**
 * Created by Dan Stevenson on 7/30/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Checkbox from '../common/Checkbox';
import busyIcon from '../../assets/images/saving.gif';

const selectErrorStyle = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#cc0000'
};

class HomePage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.onVendorSelection = this.onVendorSelection.bind(this);
        this.onRoleSelection = this.onRoleSelection.bind(this);
        this.onVendorInputChange = this.onVendorInputChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
    }

    onCheckboxChange(item, fieldName){
      this.props.onConfidentialChange(!this.props.vendor.confidential);
    }

    onSaveClicked(){
      this.props.onSave();
    }

    onVendorInputChange(input){
      if(input.length > 2){
         this.props.onVendorInputChange(input);
       }
    }

    onRoleSelection(item){
      this.props.onRoleChanged(item);
    }

    onVendorSelection(item){
      this.props.onVendorChanged(item);
    }

    render() {
        return (
            <div>
                <h3>Chrome River Managed Vendor Settings</h3>
                <div className="formContent">
                    <h4><b>Vendor Lookup:</b></h4>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="virtualSelectWrapper">
                          <Select
                            name="vendorSearch"
                            value={this.props.criteria}
                            onInputChange={this.onVendorInputChange}
                            onChange={this.onVendorSelection}
                            options={this.props.vendors}
                            disabled= {this.props.isBusy}
                            placeholder="Vendor Name or Vendor ID"
                            style= {this.props.errors.vendorSearch ? selectErrorStyle : undefined}
                          />
                          {this.props.errors.vendorSearch && <div className="alert alert-danger">{this.props.errors.vendorSearch}</div>}
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4">
                        <h4><b>Vendor:</b></h4>
                        <span className="venderName">{this.props.vendor.name}</span>
                        {this.props.vendor.address1 && this.props.vendor.address1.trim().length > 0 ? <br /> : ''}
                        {this.props.vendor.address1 ? this.props.vendor.address1.trim() : ''}
                        {this.props.vendor.address2 && this.props.vendor.address2.trim().length > 0 ? <br /> : ''}
                        {this.props.vendor.address2 ? this.props.vendor.address2.trim() : ''}
                        {this.props.vendor.address3 && this.props.vendor.address3.trim().length > 0 ? <br /> : ''}
                        {this.props.vendor.address3 ? this.props.vendor.address3.trim() : ''}
                        {this.props.vendor.address4 && this.props.vendor.address4.trim().length > 0 ? <br /> : ''}
                        {this.props.vendor.address4 ? this.props.vendor.address4.trim() : ''}
                        {(this.props.vendor.city && this.props.vendor.city.trim().length > 0) ||
                         (this.props.vendor.state && this.props.vendor.state.trim().length > 0) ||
                         (this.props.vendor.zipcode && this.props.vendor.zipcode.trim().length > 0) ? <br /> : ''}
                        {this.props.vendor.city ? this.props.vendor.city : ''}
                        {(this.props.vendor.city && this.props.vendor.city.trim().length > 0) ? ', ' : ''}
                        {this.props.vendor.state ? this.props.vendor.state : ''}
                        {(this.props.vendor.city && this.props.vendor.city.trim().length > 0) ||
                         (this.props.vendor.state && this.props.vendor.state.trim().length > 0) ? ' ' : ''}
                        {this.props.vendor.zipcode ? this.props.vendor.zipcode : ''}
                      </div>
                      <div className="col-lg-2">
                        <h4><b>Vendor ID:</b></h4>
                        <span className="venderName">{this.props.vendor.id}</span>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-4">
                        <h4><b>Role:</b></h4>
                        <div className="virtualSelectWrapper">
                          <Select
                            name="role"
                            value={this.props.vendor.role}
                            onChange={this.onRoleSelection}
                            options={this.props.roles}
                            disabled= {this.props.isBusy}
                            placeholder="Managed Vendor Role"
                            style= {this.props.errors.role ? selectErrorStyle : undefined}
                          />
                          {this.props.errors.role && <div className="alert alert-danger">{this.props.errors.role}</div>}
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <h4><b>Confidential:</b></h4>
                        <Checkbox
                                  checked={this.props.vendor.confidential}
                                  disabled={this.props.isBusy}
                                  name="confidential"
                                  onChange={this.onCheckboxChange}
                                  error={this.props.errors.confidential} />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                        <input
                          type="button"
                          value={'Save'}
                          className="btn btn-primary"
                          onClick={this.onSaveClicked}
                          disabled={this.props.isBusy} />
                        </div>
                    </div>
                </div>
                {
                  this.props.isBusy ?
                  <div className="busyindicator">
                    <img src={busyIcon} />
                  </div>
                  :
                  <div>
                  </div>
                }
            </div>
        );
    }
}

HomePage.propTypes = {
    errors: PropTypes.object.isRequired,
    isBusy: PropTypes.bool.isRequired,
    vendors: PropTypes.array.isRequired,
    criteria: PropTypes.number.isRequired,
    roles: PropTypes.array.isRequired,
    vendor: PropTypes.object.isRequired,
    onVendorChanged: PropTypes.func.isRequired,
    onVendorInputChange: PropTypes.func.isRequired,
    onRoleChanged: PropTypes.func.isRequired,
    onConfidentialChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default HomePage;
