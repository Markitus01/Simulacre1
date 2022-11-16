document.addEventListener('DOMContentLoaded',f_main);
const BOLES = 90;
const F = 3;
const C = 9;
function f_main()
{
	// generar les boles del bombo del bingo
	let bingo = [];
	for (let i=0;i<BOLES;i++)
	{
		bingo.push(i+1);
	}
	bingo.sort(desordenar);
	console.info(bingo);
	// disseny del cartró
	// omplir tot el cartró amb el valor -1
	let cartro = [];

	for (let i=0;i<F;i++)
	{
		cartro[i] = [];
		for (let j=0;j<C;j++)
		{
			cartro[i][j] = -1;
		}
	}
	console.info(cartro);
	// generar les cel·les que quedaran buides
	// són 4 cel·les per fila i no hi poden haver 3 cel·les de la mateixa columna
	let valors = [];
	valors[0] = [];
	valors[1] = []
	valors[2] = []
	let i = 0;
		while (i<F)
		{
			while (valors[i].length < 4)
			{
				pos = random(0,C-1); //  VALOR ENTRE 0-8
				if (valors[i].includes(pos) == false)
				{ // controlar que si és la ultima fila(2) no estiguin buides les mateixes posicions en les files anteriors
					if (i==2 && !(valors[0].includes(pos) && valors[1].includes(pos)) )
					{
						valors[i].push(pos);
					} else if (i!=2)
					{
						valors[i].push(pos);
					}
				}
			}
			i++;
		}
	// col·locar les cel·les buides
		for (let i=0;i<F;i++)
		{
			for (let j=0;j<C;j++)
			{
				if (valors[i].includes(j))
					cartro[i][j] = '';
			}
		}

	console.info(valors);
	console.info(cartro);
	// omplir amb números el cartró
	let rangs = [
		{min:1,max:9},
		{min:10,max:19},
		{min:20,max:29},
		{min:30,max:39},
		{min:40,max:49},
		{min:50,max:59},
		{min:60,max:69},
		{min:70,max:79},
		{min:80,max:90}
	];

	for (let i=0;i<F;i++)
		{
			for (let j=0;j<C;j++)
			{
				if (cartro[i][j]!='')
				{
					let num = random(rangs[j].min,rangs[j].max);
					// evitar repeticions de valors per la mateixa columna
					while (i==1 && num == cartro[i-1][j] 
						 || i==2 && (num == cartro[i-1][j] || num== cartro[i-2][j]))
					{ 
						num = random(rangs[j].min,rangs[j].max);
					}
					cartro[i][j] = num;
				}
			}
		}
		console.info(cartro);
				// ordenar per columnes
		for (let j=0;j<C;j++)	
		{
			let a = [];
			if (cartro[0][j]!='') a.push(cartro[0][j]);
			if (cartro[1][j]!='') a.push(cartro[1][j]);
			if (cartro[2][j]!='') a.push(cartro[2][j]);
			a.sort(function (a,b)
			{
				return a-b;
			})
			let w=0;
			if (cartro[0][j]!='')
				{ 
					cartro[0][j] = a[w];
					w++;
				}
			if (cartro[1][j]!='') 
			{
				cartro[1][j] = a[w];
				w++;
			}
			if (cartro[2][j]!='')	cartro[2][j] = a[w];
		}


		
		// pintar el cartró en la web
		let celes = document.getElementById('cartro').getElementsByTagName('TD');
		let posCela = 0;
		for (let i=0;i<F;i++)
		{
			for (let j=0;j<C;j++)
			{
				celes[posCela].textContent = cartro[i][j];
				posCela++;
			}
		}
		posarEstilsCartro();
} // FI main


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function desordenar()
{
	return 0.5-Math.random();
}