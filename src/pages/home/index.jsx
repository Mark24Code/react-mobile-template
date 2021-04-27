import React, { Component } from 'react';
import './home.scss';
import { getUser } from '~/api/user'

export default class Home extends Component {
  async componentDidMount() {
    await getUser()
  }

  render() {
    return <div className='box'>Home</div>
  }
}