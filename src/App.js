import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    pracName: null,
    orgName: null,
    loading: true
  }

  async componentDidMount() {
    const pracRes = await fetch("http://hapi.fhir.org/baseDstu3/Practitioner?family=Watson");
    const pracJson = await pracRes.json();
    const pracName = await pracJson.entry[0].resource.name
    this.setState({ pracName });
    const orgId = await pracJson.entry[0].resource.extension[0].valueReference.reference;
    const orgRes = await fetch(`http://hapi.fhir.org/baseDstu3/${orgId}`);
    const orgJson = await orgRes.json();
    this.setState({
      orgName: orgJson.name,
      loading: false
    });
  }

  render() {
    const {pracName, orgName, loading} = this.state;
    if (loading) {
      return <h1>Loading...</h1>
    }
    const name = pracName[0];
    return (
      <div className="main-card">
        <i className="fas fa-user-md fa-10x"></i>
        <h1>{name.prefix[0]}{" "}{name.given[0]}{" "}{name.family}</h1>
        <p>{orgName}</p>
      </div>
    );
  }
}

export default App;
