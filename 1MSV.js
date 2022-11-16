document.addEventListener('DOMContentLoaded',f_main);

let pos = 0;
let tmp;

function f_main()
{
    console.info('Joc de prova: ',(pos+1));
    array[pos].sortida = Date.randomDate()
    document.getElementById('test').textContent = JSON.stringify(array[pos]); //Imprimim la posicio de l'array JSON
    tmp = setInterval(f_nou,5000); //cada 5 segons nou joc de prova
}

function f_nou()
{
    pos++;
    if (pos == array.length)
        clearInterval(tmp);
    else
    {
        console.info('Joc de prova: ',(pos+1));
        switch (pos) //param1, param2, param3 fan referència a les propietats de cada posició de l'array JSON
        {
            case 1: //Segon joc de prova, cap parametre
                    array[pos].sortida = Date.randomDate();
                    break;
            case 2: case 3: case 4: //3er, 4t, 5é jocs de proves amb un parametre
                    array[pos].sortida = Date.randomDate(array[pos].param1);
                    break;
            case 5: case 6: case 7: case 8: case 9: //6é, 7é, 8é, 9é i 10é jocs de proves amb dos parametres
                    array[pos].sortida = Date.randomDate(array[pos].param1,array[pos].param2);
                    break;
            default:    //Ultim joc de proves amb tots els parametres posibles
                array[pos].sortida = Date.randomDate(array[pos].param1,array[pos].param2,array[pos].param3)
       }
        document.getElementById('test').textContent = JSON.stringify(array[pos]);    
        console.info(array[pos].sortida);
    }
}

Date.randomDate = function ()
{
    let d;
    let ini = new Date('1970-01-01');
    let milisegons1dia = 1000*60*60*24;
    let avui = new Date(); //Data d'avui
    avui.setHours(ini.getHours());
    avui.setMinutes(ini.getMinutes());
    avui.setSeconds(ini.getSeconds());
    avui.setMilliseconds(ini.getMilliseconds());
    let fi = new Date( avui.getTime() + (370*milisegons1dia));
    
    //Si no ens pasem cap parametre fem una data aleatoria entre la data 'ini' i la data de fi que es la d'avui mes un any i uns dies
    if (arguments.length==0)
    {
        d = new Date(random(ini.getTime(),fi.getTime()) );
    } //Si ens pasen 1 parametre verifiquem que no sigui invalid, i aleshores asignem la data de fi al primer argument que ens pasen
    else if (arguments.length==1)
    {
        let test = new Date(arguments[0]);
        if (test == 0 || test == 'Invalid Date' || test < new Date('1970-01-01'))
        {
            return -1;
        }

        fi = new Date(arguments[0]);
        d = new Date(random(ini.getTime(),fi.getTime()) );
    } //Su ebs pasen 2 arguments verifiquem que no son null
    else if (arguments.length>=2)
    {
        if (!isNaN(arguments[0]) || !isNaN(arguments[1]))
        {
            return -1;
        }
        
        //Asignem a ini el primer argument, i verifiquem que no es invalid
        ini = new Date(arguments[0]);
        if ( ini == 'Invalid Date')
        {
            return -1;
        }

        //Asignem a fi el segon argument, i verifiquem que no es invalid
        fi = new Date(arguments[1]);
        if (fi =='Invalid Date')
        {
            return -1;
        }

        //Comprovem que ini i fi no siguin menors que l'any de 1970
        if (ini  < new Date('1970-01-01') || fi < new Date('1970-01-01'))
        {
            return -1;
        }

        console.info(ini);
        console.info(fi);

        //Comprovem que no son la mateixa data
        if (ini.getTime() == fi.getTime())
        {
            return -1;
        }

        //Fem un intercanvi en cas de que inici sigui més gran que fi
        if (ini > fi)
        {
            aux = ini;
            ini = fi;
            fi = aux;
        }
        
        //Finalment asignem una data aleatoria a 'd' entre ini i fi :)
        d = new Date(random(ini.getTime(),fi.getTime()) );
    }

    console.info(ini.toLocaleDateString());
    console.info(fi.toLocaleDateString());

    return d;
}

//Funció random que utilitzem per a crear dates entre ini i fi ;)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let dm200 = new Date()
dm200.setDate(dm200.getDate()+200);
dm200 = dm200.getFullYear()+"-"+ (dm200.getMonth()+1) + "-" + dm200.getDate();
let dme200 = new Date()
dme200.setDate(dme200.getDate()-200);
dme200 = dme200.getFullYear()+"-"+ (dme200.getMonth()+1) + "-" + dme200.getDate();

//array d'objectes JSON
let array = [
    {
        param1: undefined,
        param2: undefined,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: undefined,
        param2: undefined,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: undefined,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '1969-11-01',
        param2: undefined,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: 'qualsevol',
        param2: undefined,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: dm200,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: dme200,
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: '1969-01-12',
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: '2022-11-10',
        param3: undefined,
        sortida: undefined
    },
    {
        param1: '2022-11-10',
        param2: '32',
        param3: undefined,
        sortida: undefined
    },
    {
        param1: dme200,
        param2: dm200,
        param3: 23,
        sortida: undefined
    }
];