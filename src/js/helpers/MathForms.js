const FIRST_DATA = 495;
const FINAL_DATA = 450

const FIRST_DATA_MALE = 1.0324;
const SECOND_DATA_MALE = 0.19077;
const THIRD_DATA_MALE = 0.15456;

const FIRST_DATA_FEMALE = 1.29579;
const SECOND_DATA_FEMALE = 0.35004;
const THIRD_DATA_FEMALE = 0.221;


export const BFP_Male = (weight, neck, height) => {
    const data1 = SECOND_DATA_MALE * Math.log10(weight - neck);
    
    const data2 = THIRD_DATA_MALE * Math.log10(height);

    const firstResult = FIRST_DATA_MALE - data1 + data2;

    const finalResult = (FIRST_DATA / firstResult) - FINAL_DATA;
    
    return finalResult.toFixed(2);
}

export const BFP_Female = (weight, hip, neck, height) => {
    
    const result = parseInt(weight, 10) + parseInt(hip, 10) - parseInt(neck, 10);

    const data1 = SECOND_DATA_FEMALE * Math.log10(result);
    
    const data2 = THIRD_DATA_FEMALE * Math.log10(height);

    const firstResult = FIRST_DATA_FEMALE - data1 + data2;

    const finalResult = (FIRST_DATA / firstResult) - FINAL_DATA;
    
    return finalResult.toFixed(2);
}