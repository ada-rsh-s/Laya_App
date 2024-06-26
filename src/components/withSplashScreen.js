import React, { Component } from 'react';
import laya from '../img/laya.svg';
import './withsplashscreen.css';
import 'animate.css';

function SplashMessage() {
  return (
    <div className='splashmn'>
      <div className='center-content animate__animated animate__bounce'>
        <img className='padaam' srcSet={laya} alt='layaa' />
        <p className='thalaket'>LAYA ARTS FEST</p>
      </div>
    </div>
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}
