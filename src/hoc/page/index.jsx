import React, { Component, createRef } from 'react';
import Loading from '~/comps/loading';
import NetWorkError from '~/comps/network-error';
import TopLoadingBar from '~/comps/top-loading-bar';

const THEME_COLOR = '#15C5CE';

function PageHOC(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        stage: 'init', // stage转换: init -> success/fail
        response: {},
      }
      this.barRef = createRef(null);
    }

    async componentDidMount() {
      const self = this;
      if (WrappedComponent.fetch) {
        self.barRef.current.continuousStart()
        try {
          const response = await WrappedComponent.fetch();
          self.setState({
            stage: 'success',
            response
          })
        } catch (error) {
          self.setState({
            stage: 'fail'
          })
          // TODO  report error
        } finally {
          // TODO report error or some clean job.
          self.barRef.current.complete()
        }
      } else {
        self.setState({
          stage: 'success',
        })
      }
    }

    render() {
      const { stage, response } = this.state;
      return (
        <>
          <TopLoadingBar color={THEME_COLOR} ref={this.barRef} />
          {stage === 'init' && <Loading />}
          {stage === 'fail' && <NetWorkError />}
          {stage === 'success' && <WrappedComponent {...response} {...this.props} />}
        </>
      )
    }
  };
}

export default PageHOC;