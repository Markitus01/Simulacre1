document.addEventListener("DOMContentLoaded", main);

const BOLES = 90;
const FILES = 3;
const COLUM = 9;

function main()
{
    let bingo = generarBoles();
    let cartro = generarCartro();
    console.info(bingo);
    console.info(cartro);
}

function generarBoles()
{
    let nums = []; //Array de numeros

    //Mentres no tingui 90 boles
    while (nums.length < BOLES)
    {
        let rand = Math.floor(Math.random() * BOLES + 1); //Num aleatori entre 1 i 90

        //Si el num NO es troba a l'array el fiquem
        if (!nums.includes(rand))
        {
            nums.push(rand);
        }
    }

    return nums;
}

function generarCartro()
{
    let cartro = [];
    let numsCartro = generarNums();
    
    for (let i = 0; i < FILES; i++)
    {
        let buits = generarBuits();
        for (let j = 0; j < COLUM; j++)
        {
            if (buits[j] == j)
            {
                //Si la posicio de buits coincideix amb la posicio de 'j' li asignem un 0 (espai buit) :)
                cartro[i][j] = 0;
            }
            else
            {
                cartro[i][j] = numsCartro[i][j];
            }
        }
    }
    
    return cartro;
}

function generarNums()
{
    let min;
    let max;
    let nums = [];
    
    
    //Bucle per omplir les 9 columnes amb 3 valors ordenats
    for (let j = 0; j < COLUM; j++)
    {
        //Definim els rangs dels numeros generats per a la posicio de la columna
        switch (j) {
            case 0:
                min = 1;
                max = 9;
                break;

            case 1:
                min = 10;
                max = 19;
                break;

            case 2:
                min = 20;
                max = 29;
                break;
            
            case 3:
                min = 30;
                max = 39;
                break;
            
            case 4:
                min = 40;
                max = 49;
                break;

            case 5:
                min = 50;
                max = 59;
                break;

            case 6:
                min = 60;
                max = 69;
                break;

            case 7:
                min = 70;
                max = 79;
                break;

            case 8:
                min = 80;
                max = 90;
                break;
        }

        let columna = []; //Generem una array per omplir la columna
        while (columna.length < FILES)
        {
            let rand = Math.floor(Math.random() * max + min); //Num aleatori entre el max i el min (depen de la columna actual)
            
            if (!columna.includes(rand))
            {
                columna.push(rand); //Si la columna no incloeix el numero generat, aleshores l'introduim
            }
        }

        //Ordenem els 3 nums de la columna
        columna.sort();

        //Expandim nums[] per a que tingui el numero correcte de files
        for (let i = 0; i < FILES; i++)
        {
            nums.push([]);
        }

        //Finalment omplim el bingo amb els numeros ordenats a cada columna
        //Expandim totes les files per tenir el numero desitjat de columnes
        for (let i = 0; i < FILES; i++)
        {
            //nums[i][j] = columna[i]; /** ERROR: Cannot set properties of undefined (setting '0') **/
            for (let k = nums[i].length; k < COLUM; k++)
            {
                nums[i].push(columna[k]);
            }
        }
    }

    return nums;
}

function generarBuits()
{
    let buits = [];

    for (let i = 0; i < FILES; i++)
    {
        while (buits.length < 4)
        {
            let num = Math.floor(Math.random() * 9);

            if (!buits.includes(num))
            {
                buits.push(num);
            }
        }
    }

    //Falta que comprovem que no ha quedat cap columna amb tres valors buits

    return buits;
}