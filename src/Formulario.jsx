import React from "react";
import { FORM, VALIDATION } from './constants';

const Formulario = ({gender, setGender, height, setHeight, weight, setWeight, hip, setHip, neck, setNeck, onAccept, onClean}) => {

    const validateFields = ev => {
        ev.preventDefault();

        if(gender === '' || height === null || weight === null || hip === null || neck === null ){
            alert(VALIDATION.IS_DATA_NULL);
        } else if ( height < 0 || weight < 0 || hip < 0 || neck < 0 )
            alert(VALIDATION.VALUE);
        else{
            onAccept(ev);
        }
    };

    return(
        <>
            <form>
                <p>{ FORM.GENDER }</p>
                <input type="radio" name='Gender' value={ FORM.MALE } onChange={ev => setGender(ev.target.value)}/> <label>{FORM.MALE}</label>
                <input type="radio" name='Gender' value={ FORM.FEMALE }  onChange={ev => setGender(ev.target.value)}/> <label>{FORM.FEMALE}</label>
                <br></br>
                <p>{ FORM.HEIGHT }</p>
                <input 
                    type='number'
                    name='height'
                    className='body-fat-calculator-input'
                    placeholder={ FORM.HEIGHT_DESC }
                    value={height}
                    onChange={ev => setHeight(ev.target.value)}
                ></input>
                <p>{ FORM.WEIGHT }</p>
                <input 
                    type='number'
                    name='weight'
                    className='body-fat-calculator-input'
                    placeholder={ FORM.WEIGHT_DESC }
                    value={weight}
                    onChange={ev => setWeight(ev.target.value)}
                ></input>
                <p>{ FORM.HIP }</p>
                <input 
                    type='number'
                    name='hip'
                    className='body-fat-calculator-input'
                    placeholder={ FORM.HIP_DESC }
                    value={hip}
                    onChange={ev => setHip(ev.target.value)}
                ></input>
                
                <p>{ FORM.NECK }</p>
                <input 
                    type='number'
                    name='neck'
                    className='body-fat-calculator-input'
                    placeholder={ FORM.NECK_DESC }
                    value={neck}
                    onChange={ev => setNeck(ev.target.value)}
                ></input>
                <br></br>
                <br></br>
                <button className="body-fat-calculator-button" onClick={validateFields}>{FORM.ACCEPT}</button>
                <button onClick={onClean}>{FORM.CLEAN}</button>
            </form>
        </>
    )
}

export default Formulario;