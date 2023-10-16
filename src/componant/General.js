import React from 'react'
import "./General.css"
import {useNavigate} from "react-router-dom"


const General = () => {
    const navigate = useNavigate();

const HandleHomeBtnClicked= () => {
        navigate('/home')
        
}
const HandleAboutBtnClicked =() =>{
        navigate('/about')
}
const HandleMoreinformationBtnClicked =() =>{
    navigate('/moreinformation')
}
const HandleContactusBtnClicked =() =>{
    navigate('/contactus')
}
const HandleLinksBtnClicked =() =>{
    navigate('/links')
}

    return (
        <div className='main-div'>
            <div className='home-div'>
                <button type="button" className="btn btn-primary mb-5" onClick={HandleHomeBtnClicked}>HOME</button>

            </div>
            
            <div className='home-div'> 
                <button type="button" className="btn btn-primary mb-5" onClick={HandleAboutBtnClicked}>ABOUT</button>
            </div>
            <div className='home-div'>
                <button type="button" className="btn btn-primary mb-5" onClick={HandleMoreinformationBtnClicked}>MORE INFORMATION</button>
            </div>
            <div className='home-div'>
                <button type="button" className="btn btn-primary mb-5" onClick={HandleContactusBtnClicked}>CONTACT US</button>
            </div>
            <div className='home-div'>
                <button type="button" className="btn btn-primary mb-5" onClick={HandleLinksBtnClicked}>LINKS</button>
            </div>


        </div>

    )
}

export default General
