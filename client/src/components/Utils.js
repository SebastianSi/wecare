import React, { Component } from 'react'
export default class Utils extends Component {
  render() {
    return (
      <div className="presentation">
        <iframe
          src={
            'https://prezi.com/embed/efzzocrp6kk2/?bgcolor=ffffff&lock_to_path=0&autoplay=0&autohide_ctrls=0&landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0NUZVTy8xZlpEUEtlTWJPRVhrRWxIdEFnPT0&landing_sign=4DUnTeXykm5q9_Qz4FVBIQbXOmUD_wK-SnsF12SJADk' +
            this.props.code
          }
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }
}
