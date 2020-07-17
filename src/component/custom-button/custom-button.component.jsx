import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({children,togo}) => (
    <div className="btn-mar" onClick={() => togo()}>
        <div class="row">
    <div class="col-12 text-center"><button class="btn-vol"><a >{children}</a></button></div>
  </div>
    </div>
    
)
export default CustomButton;