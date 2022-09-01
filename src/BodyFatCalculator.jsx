import React, {useState, useEffect} from "react";
import './BdyFatCalculator.css';
import { HEADER, TITLE, DESCRIPTION, INSTRUCTIONS, SECOND_TITLE, Male_Percentage, Female_Percentage } from './constants';
import  Formulario  from './Formulario';
import { BFP_Male, BFP_Female } from './js/helpers/MathForms';

export const BodyFatCalculator = () => {

    const [gender, setGender] = useState('');
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [hip, setHip] = useState(null);
    const [neck, setNeck] = useState(null);
    const [result, setResult] = useState(0);

    const firstFunction = () => {
        alert('I should be doing something');
    };

    const handlerCalculateBodyFat = ev => {
        ev.preventDefault();
        var resultado = 0;

        if(gender === 'Hombre'){
            resultado = BFP_Male(weight,neck, height);
        } else{
            resultado = BFP_Female(weight, hip, neck, height);
        }
        setResult(resultado);
    };

    const handlerCleanForm = ev => {
        ev.preventDefault();
        setGender('');
        setHeight(0);
        setWeight(0);
        setHip(0);
        setNeck(0);
        setResult(0)
    };

    useEffect(() => {
        console.log(gender);
    }, [gender]);


    return(
        <div className='body-fat-calculator'>
            <div className='body-fat-calculator-head'>
                <ion-icon name="crop-outline"></ion-icon>
                <h2>{ HEADER }</h2>
                <ion-icon name="reorder-three-outline" onClick={firstFunction}></ion-icon>
            </div>
            <div className='body-fat-calculator-body'>
                <div className='body-fat-calculator-first-part'>
                    <p className='body-fat-calculator-title'>{ TITLE }</p>
                    <p>{ DESCRIPTION }</p>
                    <p>{ INSTRUCTIONS }</p>

                    <Formulario 
                        gender={gender}
                        setGender={setGender} 
                        height={height} 
                        setHeight={setHeight} 
                        weight={weight} 
                        setWeight={setWeight} 
                        hip={hip} 
                        setHip={setHip} 
                        neck={neck} 
                        setNeck={setNeck} 
                        onAccept={handlerCalculateBodyFat}
                        onClean={handlerCleanForm}
                    />
                </div>
                <div className='body-fat-calculator-second-part'>
                    {
                        result > 0 && 
                        <>
                            <p className='body-fat-calculator-second-title'>{SECOND_TITLE + result + '%'}</p>
                            <br></br>
                            
                            <div className='box'></div>
                            
                            <table>
                                { gender === 'Hombre' ?
                                Male_Percentage.map(e => {
                                    return(
                                        <>
                                            <td>
                                                <tr><div className={'box_' + e.id}></div></tr>
                                                <tr><label>{e.value}</label></tr>
                                                <tr><label>{e.tag}</label></tr>
                                            </td>
                                            
                                        </>
                                        
                                    )
                                })
                                :
                                Female_Percentage.map(e => {
                                    return(
                                        <>
                                            <td>
                                                <tr><div className={'box_' + e.id}></div></tr>
                                                <tr><label>{e.value}</label></tr>
                                                <tr><label>{e.tag}</label></tr>
                                            </td>
                                        </>
                                        
                                    )
                                })
                            }
                            </table>
                            
                        </>
                    }
                    
                </div>
            </div>
        </div>
    )
}

