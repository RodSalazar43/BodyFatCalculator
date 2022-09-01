export const HEADER = 'BodyFat';
export const TITLE = 'Calculadora de Grasa Corporal';
export const DESCRIPTION = 'El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del procentaje de tejido adiposo en el cuerpo de una persona';
export const INSTRUCTIONS = 'Los valores requeridos por la fórmula son los siguientes:';
export const SECOND_TITLE = 'Tu resultado: '

export const FORM = {
    GENDER: 'Género',
    MALE: 'Hombre',
    FEMALE: 'Mujer',
    HEIGHT: 'Altura (cm)',
    HEIGHT_DESC: '  Escribe tu altura',
    WEIGHT: 'Peso (cm)',
    WEIGHT_DESC: '  Escribe tu peso',
    HIP: 'Cintura (cm)',
    HIP_DESC: '  Medida de tu cintura',
    NECK: 'Cuello (cm)',
    NECK_DESC: '  Medida de tu cuello',
    ACCEPT: 'Calcular',
    CLEAN: 'Limpiar',
}

export const Male_Percentage = [
    {id: 1, value: '2-5%', tag: 'Esencial'}, 
    {id: 2, value: '6-13%', tag: 'Deportista'}, 
    {id: 3, value: '14-17%', tag: 'Fitness'}, 
    {id: 4, value: '18-24%', tag: 'Aceptable'}, 
    {id: 5, value: '25+%', tag: 'Obeso'}
];

export const Female_Percentage = [
    {id: 1, value: '10-13%', tag: 'Esencial'}, 
    {id: 2, value: '14-20%', tag: 'Deportista'}, 
    {id: 3, value: '21-24%', tag: 'Fitness'}, 
    {id: 4, value: '25-31%', tag: 'Aceptable'}, 
    {id: 5, value: '32+%', tag: 'Obeso'}
]

export const VALIDATION = {
    VALUE: 'Se requieren valores mayores a 0, verifique los valores ingresados',
    IS_DATA_NULL: 'Se requiere que de un valor a todos los campos'
}