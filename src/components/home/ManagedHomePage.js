import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {withRouter} from 'react-router-dom';
import HomePage from './HomePage';
import toastr from 'toastr';
import axios from 'axios';
import {managedVendorApiUrl} from '../common/constants';

export class ManagedHomePage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            vendor: {confidential: false},
            isBusy: false,
            vendors: [],
            criteria: 0,
        };

        this.onVendorChanged = this.onVendorChanged.bind(this);
        this.onVendorInputChange = this.onVendorInputChange.bind(this);
        this.onRoleChanged = this.onRoleChanged.bind(this);
        this.onConfidentialChange = this.onConfidentialChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {

    }

    onConfidentialChange(item){
      let vendor = Object.assign({}, this.state.vendor);
      vendor.confidential = item;
      this.setState({vendor: vendor},this.test);
    }

    onVendorInputChange(input){
      this.props.actions.loadVendors(input).then(() => {
            let vendors = Object.assign([], this.props.vendors);
            this.setState({vendors: vendors, vendor: {confidential: false}});
          })
          .catch(error => {
              this.setState({vendors: []});
          });

    }

    onRoleChanged(item){

      let vendor = Object.assign({}, this.state.vendor);
      if(item != null){
          vendor.role = item.value;
      }
      else{
        vendor.role = '';
      }

      this.setState({vendor: vendor});
    }

    onVendorChanged(item){

      if(item != null){
        let vendor = Object.assign({}, item);
        vendor.uno = item.value;
        this.setState({vendor: vendor, criteria: item.value});
      }
      else{
          this.setState({vendors: [], vendor: {confidential: false}, criteria:0});
      }


    }

    onSave(){
      this.setState({isBusy: true});

      let data = {};
      data.uno = this.state.vendor.uno;
      if(this.state.vendor.role){
          data.role = this.state.vendor.role;
      }
      else{
        data.role = '';
      }

      data.confidential = this.state.vendor.confidential;

      axios.post(managedVendorApiUrl + 'api/aderant/', data).then(status => {
        let vendor = {confidential: false};
        let vendors = [];
        this.setState({vendors: vendors, vendor: vendor, isBusy: false});
        toastr.success('Successfully saved.');
      }).catch(error => {
          this.setState({isBusy: false});
          toastr.error('Error! Unable to save changes.');
          throw(error);
      });

    }

    render() {
        return (
            <HomePage
              errors={this.state.errors}
              vendor={this.state.vendor}
              vendors={this.state.vendors}
              criteria={this.state.criteria}
              isBusy={this.state.isBusy}
              onVendorChanged={this.onVendorChanged}
              onRoleChanged={this.onRoleChanged}
              onConfidentialChange={this.onConfidentialChange}
              onVendorInputChange={this.onVendorInputChange}
              onSave={this.onSave}
              roles={this.props.roles}
            />
        );
    }
}

ManagedHomePage.propTypes = {
    username: PropTypes.string.isRequired,
    vendors: PropTypes.array.isRequired,
    roles: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {

    return {
        username: state.username,
        vendors: state.vendors,
        roles: state.roles,
    };
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, userActions), dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManagedHomePage));
