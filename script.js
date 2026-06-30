// 1. BANCO DE TIMES (Insira seus times aqui!)
const textoBrutoDosTimes = `
Time: Flamengo 2025
Rossi, GOL, 84
Matheus Cunha, GOL, 69
Danilo, ZAG/LD, 78
Léo Ortiz, ZAG/VOL, 82
Léo Pereira, ZAG, 85
Ayrton Lucas, LE, 74
Alex Sandro, LE, 83
Varela, LD, 84
Emerson Royal, LD, 75
Jorginho, VOL/MC, 87
Erick Pulgar, VOL, 82
Evertton Araújo, VOL/MC, 74
Saúl, MC, 72
Arrascaeta, MEI/ME, 90
Carrascal, MEI/PE, 81
Samu Lino, PE/ME, 78
Everton, PE, 77
Plata, PD/ATA, 80
Bruno Henrique, ATA/PE, 81
Pedro, ATA, 85

Time: Flamengo 2025
Formação: 4-3-3
Rossi, GOL, 84
Léo Ortiz, ZAG/VOL, 82
Léo Pereira, ZAG, 85
Alex Sandro, LE, 83
Varela, LD, 84
Jorginho, VOL/MC, 87
Erick Pulgar, VOL, 82
Arrascaeta, MEI/ME, 90
Carrascal, MEI/PE, 81
Plata, PD/ATA, 80
Pedro, ATA, 85

Time: Flamengo 2019
Diego Alves, GOL, 87
César, GOL, 75
Rodrigo Caio, ZAG/VOL, 85
Pablo Marí, ZAG, 83
Rhodolfo, ZAG, 71
Filipe Luís, LE, 88
Renê, LE, 76
Rafinha, LD, 84
Rodinei, LD, 77
Willian Arão, VOL/MC, 83
Gerson, VOL/MC, 85
Diego Ribas, MC/MEI, 82
Everton Ribeiro, MEI/MD, 87
Arrascaeta, MEI/ME, 89
Reinier, MEI/SA, 74
Vitinho, PE/SA, 78
Bruno Henrique, PE/ATA, 90
Berrío, PD, 74
Lincoln, ATA, 71
Gabigol, ATA, 90

Time: Flamengo 2019
Formação: 4-4-2
Diego Alves, GOL, 87
Rodrigo Caio, ZAG/VOL, 85
Pablo Marí, ZAG, 83
Filipe Luís, LE, 88
Rafinha, LD, 84
Willian Arão, VOL/MC, 83
Gerson, VOL/MC, 85
Everton Ribeiro, MEI/MD, 87
Arrascaeta, MEI/ME, 89
Bruno Henrique, PE/ATA, 90
Gabigol, ATA, 90

Time: Flamengo 2009
Bruno, GOL, 81
Paulo Victor, GOL, 73
David Braz, ZAG, 80
Ronaldo Angelim, ZAG, 82 
Fábio Luciano, ZAG, 79
Juan, LE, 81
Egídio, LE, 76
Léo Moura, LD, 86
Gonzalo Fierro, LD, 76
Maldonado, VOL, 78
Willians, VOL, 81
Airton, VOL, 81
Toró, MC/VOL, 82
Kléberson, MC, 80
Zé Roberto, MEI, 83
Petkovic, MEI/PE, 86
Emerson Sheik, PE/ATA, 82
Éverton, PD/PE, 76
Obina, ATA, 80
Adriano, ATA, 90

Time: Flamengo 2009
Formação: 4-3-3
Bruno, GOL, 81
David Braz, ZAG, 80
Ronaldo Angelim, ZAG, 82 
Juan, LE, 81
Léo Moura, LD, 86
Willians, VOL, 81
Airton, VOL, 81
Toró, MC/VOL, 82
Zé Roberto, MEI, 83
Petkovic, MEI/PE, 86
Adriano, ATA, 90

Time: Flamengo 1992
Gilmar, GOL, 83
Adriano, GOL, 68
Júnior Baiano, ZAG, 82
Wilson Gottardo, ZAG, 81
Claudio, ZAG, 74
Piá Carioca, LE, 80
Mauro, LE, 72
Charles Guerreiro, LD, 82
Uidemar, VOL, 83
Fabinho, VOL, 75
Zé Ricardo, MC, 74
Djalminha, MEI, 80
Marcelinho Carioca, MEI, 80
Júlio César, MEI, 76
Júnior, MEI/LE, 89
Nélio, MEI/SA, 84
Zinho, MEI, 85
Paulo Nunes, ATA/SA, 87
Gaúcho, ATA, 85
Toto, ATA, 71

Time: Flamengo 1992
Formação: 4-1-3-2
Gilmar, GOL, 83
Júnior Baiano, ZAG, 82
Wilson Gottardo, ZAG, 81
Piá Carioca, LE, 80
Charles Guerreiro, LD, 82
Uidemar, VOL, 83
Júnior, MEI/LE, 89
Nélio, MEI/SA, 84
Zinho, MEI, 85
Paulo Nunes, ATA/SA, 87
Gaúcho, ATA, 85

Time: Flamengo 1981
Raul Plassmann, GOL, 85
Cantarelli, GOL, 79
Marinho, ZAG, 83
Mozer, ZAG, 82
Luís Pereira, ZAG, 79
Rondinelli, ZAG, 77
Júnior, LE, 90
Leandro, LD 90
Carlos Alberto, LD, 76
Andrade, VOL, 88
Adílio, MC, 87
Vítor, MC, 72
Peu, MEI, 74
Zico, MEI/SA, 96
Tita, PD/MEI, 87
Fumanchu, PD, 78
Julio César Uri Geller, PE, 75
Lico, PE/MEI, 86
Nunes, ATA, 92
Reinaldo, ATA, 77

Time: Flamengo 1981
Formação: 4-3-3
Raul Plassmann, GOL, 85
Marinho, ZAG, 83
Mozer, ZAG, 82
Júnior, LE, 90
Leandro, LD 90
Carlos Alberto, LD, 76
Andrade, VOL, 88
Adílio, MC, 87
Zico, MEI/SA, 96
Tita, PD/MEI, 87
Lico, PE/MEI, 86
Nunes, ATA, 92

Time: Flamengo 1955
Garcia, GOL, 87
Ary, GOL, 77
Tomires, ZAG, 82
Marinho, ZAG, 79
Pavão, ZAG, 83
Joubert, ZAG, 77
Jadir, ZAG, 78
Servílio, MC, 82
Dequinha, MC, 86
Jordan, MC, 83
Rubens, MC, 79
Luís Roberto, MC, 77
Milton Bororo, MC, 77
Joel, ATA, 84
Índio, ATA, 84
Dida, ATA, 86
Evaristo de Macedo, ATA/MEI, 91
Zagallo, ATA, 88
Esquerdinha, ATA, 81
Benitez, ATA, 79

Time: Flamengo 1955
Formação: 2-3-5
Garcia, GOL, 87
Tomires, ZAG, 82
Servílio, MC, 82
Dequinha, MC, 86
Jordan, MC, 83
Joel, ATA, 84
Índio, ATA, 84
Dida, ATA, 86
Evaristo de Macedo, ATA/MEI, 91
Zagallo, ATA, 88

Time: Corinthians 2015
Cássio, GOL, 89
Walter, GOL, 77
Felipe, ZAG, 85
Gil, ZAG, 86
Edú Dracena, ZAG, 81
Fábio Santos, LE, 85 
Uendel, LE, 80
Fagner LD, 86
Edílson, LD, 80
Ralf, VOL, 84
Jadson, MC/MEI, 85
Elias, MC, 84
Rodriguinho, MEI, 82
Danilo, MEI, 83
Renato Augusto, ME/MC, 90 
Malcom, MD/PD, 83
Emerson Sheik, PE/ATA, 82
Romero, PD/PE, 82
Vagner Love, ATA, 86
Guerrero, ATA, 83

Time: Corinthians 2015
Formação: 4-1-4-1
Cássio, GOL, 89
Felipe, ZAG, 85
Gil, ZAG, 86
Fábio Santos, LE, 85 
Fagner LD, 86
Ralf, VOL, 84
Jadson, MC/MEI, 85
Elias, MC, 84
Renato Augusto, ME/MC, 90 
Malcom, MD/PD, 83
Vagner Love, ATA, 86

Time: Corinthians 2012
Cássio, GOL, 92
Júlio César, GOL, 80
Chicão, ZAG, 88
Paulo André, ZAG, 85
Leandro Castán, ZAG, 83
Marquinhos, ZAG, 77
Felipe, ZAG, 80
Fábio Santos, LE, 87
Alessandro, LD, 86
Ralf, VOL, 86
Paulinho, VOL/MC, 90
Willian Arão, VOL, 75
Jorge Henrique, PD, 88
Danilo, MEI, 89
Renato Augusto, MEI, 86
Douglas, MEI, 84
Emerson Sheik, PE, 90
Paolo Guerrero, ATA, 89
Romarinho, ATA, 86
Liedson, ATA, 84

Time: Corinthians 2012
Formação: 4-2-3-1
Cássio, GOL, 92
Chicão, ZAG, 88
Paulo André, ZAG, 85
Fábio Santos, LE, 87
Alessandro, LD, 86
Ralf, VOL, 86
Paulinho, VOL/MC, 90
Jorge Henrique, PD, 88
Danilo, MEI, 89
Emerson Sheik, PE, 90
Paolo Guerrero, ATA, 89

Time: Corinthians 2005
Fábio Costa, GOL, 84
Marcelo, GOL, 77
Betão, ZAG, 85
Marinho, ZAG, 82
Sebá Domínguez, ZAG, 80
Gustavo Nery, LE, 82
Coelho, LD, 79
Edson Sitta, LD, 81
Marcelo Mattos, VOL, 83
Wendel, VOL, 84
Fabrício de Souza, VOL 77
Mascherano, VOL, 81
Nilton, VOL 76
Carlos Alberto, MEI, 85
Rosinei Adolfo, MEI, 87
Roger Flores, MEI, 82
Bruno Otávio, MEI, 79
Tévez, ATA, 90
Jô, ATA, 88
Nilmar, ATA, 82

Time: Corinthians 2005
Formação: 4-2-2-2
Fábio Costa, GOL, 84
Betão, ZAG, 85
Marinho, ZAG, 82
Gustavo Nery, LE, 82
Edson Sitta, LD, 81
Marcelo Mattos, VOL, 83
Wendel, VOL, 84
Carlos Alberto, MEI, 85
Rosinei Adolfo, MEI, 87
Tévez, ATA, 90
Jô, ATA, 88

Time: Corinthians 2000
Dida, GOL, 85
Maurício, GOL, 75
Fábio Luciano, ZAG, 82
Adílson, ZAG, 83
João Carlos, ZAG, 76
Ávalos, ZAG, 72
Kléber, LE, 82
Índio, LD, 82
Marcos Senna, VOL, 80
Vampeta, MC, 87
Freddy Rincón, MC, 87
Edú Gaspar, MC, 78
André Luiz, MEI, 77
Ricardinho, MEI, 85
Marcelinho Carioca, MEI, 91
Luís Mário, SA, 79
Müller, SA/ATA, 83
Edílson Capetinha, ATA, 88
Luizão, ATA, 88
Dinei, ATA, 80

Time: Corinthians 2000
Formação: 4-2-2-2
Dida, GOL, 85
Fábio Luciano, ZAG, 82
Adílson, ZAG, 83
Kléber, LE, 82
Índio, LD, 82
Vampeta, MC, 87
Freddy Rincón, MC, 87
Ricardinho, MEI, 85
Marcelinho Carioca, MEI, 91
Edílson Capetinha, ATA, 88
Luizão, ATA, 88

Time: Corinthians 1990
Ronaldo, GOL, 88
Jairo, GOL, 75
Marcelo Djian, ZAG, 85
Guinei, ZAG, 82
Dama, ZAG, 76
Giba, LD, 83
Jacenir, LE, 81
Ayrton, LE, 75
Márcio Bittencourt, VOL, 84
Wilson Mano, VOL/MC, 85
Ezequiel, VOL, 79
Valdir, VOL, 76
Neto, MEI, 92
Tupãzinho, MEI/ATA, 86
Eduardo Marques, MEI, 76
Fabinho, ATA/PE, 84
Paulo Sérgio, ATA/PE, 83
Mauro, ATA, 81
Dinei, ATA, 80
Marcos Roberto, ATA, 77

Time: Corinthians 1990
Formação: 4-4-2
Ronaldo, GOL, 88
Giba, LD, 83
Marcelo Djian, ZAG, 85
Guinei, ZAG, 82
Jacenir, LE, 81
Márcio Bittencourt, VOL, 84
Wilson Mano, VOL/MC, 85
Neto, MEI, 92
Tupãzinho, MEI/ATA, 86
Fabinho, ATA/PE, 84
Mauro, ATA, 81

Time: Corinthians 1982
Solito, GOL, 83
César, GOL, 75
Mauro, ZAG, 82
Daniel González, ZAG, 81
Gomes, ZAG, 78
Wágner, ZAG, 76
Zé Maria, LD, 84
Alfinete, LD, 81
Wladimir, LE, 89
Paulinho, VOL, 82
Biro-Biro, VOL/MC, 87
Wagner Basílio, VOL, 77
Sócrates, MEI, 93
Zenon, MEI, 88
Eduardo Amorim, MD/MEI, 84
Casagrande, ATA, 89
Ataliba, ATA, 85
Joãozinho, PE/ATA, 79
Paulo Egídio, PE, 77
Mário, ATA, 76

Time: Corinthians 1982
Formação: 4-4-2
Solito, GOL, 83
Alfinete, LD, 81
Mauro, ZAG, 82
Daniel González, ZAG, 81
Wladimir, LE, 89
Paulinho, VOL, 82
Biro-Biro, VOL/MC, 87
Zenon, MEI, 88
Sócrates, MEI, 93
Ataliba, ATA, 85
Casagrande, ATA, 89

Time: Palmeiras 2021
Weverton, GOL, 88
Jailson, GOL, 75
Gustavo Gómez, ZAG, 89
Luan, ZAG, 83
Renan, ZAG, 77
Marcos Rocha, LD, 82
Mayke, LD, 80
Piquerez, LE, 82
Jorge, LE, 75
Danilo, VOL, 84
Zé Rafael, VOL/MC, 82
Felipe Melo, VOL, 79
Gabriel Menino, MC/LD, 76
Raphael Veiga, MEI, 88
Gustavo Scarpa, MEI/PE, 85
Dudu, PE/MEI, 86
Rony, ATA/PD, 83
Breno Lopes, PE/ATA, 76
Wesley, PE, 75
Luiz Adriano, ATA, 77

Time: Palmeiras 2021
Formação: 4-2-3-1
Weverton, GOL, 88
Marcos Rocha, LD, 82
Luan, ZAG, 83
Gustavo Gómez, ZAG, 89
Piquerez, LE, 82
Danilo, VOL, 84
Zé Rafael, VOL/MC, 82
Dudu, PE/MEI, 86
Raphael Veiga, MEI, 88
Gustavo Scarpa, MEI/PE, 85
Rony, ATA/PD, 83

Time: Palmeiras 2016
Fernando Prass, GOL, 84
Jailson, GOL, 85
Yerry Mina, ZAG, 85
Vitor Hugo, ZAG, 83
Edu Dracena, ZAG, 79
Thiago Martins, ZAG, 76
Jean, LD/VOL, 83
Fabiano, LD, 75
Zé Roberto, LE/MC, 81
Egídio, LE, 76
Tchê Tchê, VOL/MC, 84
Moisés, MC/MEI, 86
Thiago Santos, VOL, 77
Cleiton Xavier, MEI, 80
Dudu, PE/MEI, 87
Róger Guedes, PD, 81
Gabriel Jesus, ATA, 88
Alecsandro, ATA, 75
Erik, PE, 74
Lucas Barrios, ATA, 76

Time: Palmeiras 2016
Formação: 4-3-3
Jailson, GOL, 85
Jean, LD/VOL, 83
Yerry Mina, ZAG, 85
Vitor Hugo, ZAG, 83
Zé Roberto, LE/MC, 81
Tchê Tchê, VOL/MC, 84
Moisés, MC/MEI, 86
Cleiton Xavier, MEI, 80
Róger Guedes, PD, 81
Dudu, PE/MEI, 87
Gabriel Jesus, ATA, 88

Time: Palmeiras 1999
Marcos, GOL, 92
Velloso, GOL, 82
Arce, LD, 89
Neném, LD, 75
Júnior Baiano, ZAG, 86
Roque Júnior, ZAG, 85
Cléber, ZAG, 83
Agnaldo, ZAG, 76
Júnior, LE, 87
Tiago Silva, LE, 75
César Sampaio, VOL, 88
Galeano, VOL, 82
Rogério, VOL/LD, 80
Alex, MEI, 91
Zinho, MEI, 87
Jackson, MEI, 78
Paulo Nunes, ATA, 87
Oséas, ATA, 84
Evair, ATA, 86
Euller, ATA, 81

Time: Palmeiras 1999
Formação: 4-4-2
Marcos, GOL, 92
Arce, LD, 89
Júnior Baiano, ZAG, 86
Roque Júnior, ZAG, 85
Júnior, LE, 87
César Sampaio, VOL, 88
Rogério, VOL/LD, 80
Alex, MEI, 91
Zinho, MEI, 87
Paulo Nunes, ATA, 87
Oséas, ATA, 84

Time: Palmeiras 1994
Velloso, GOL, 86
Sérgio, GOL, 80
Cláudio, LD, 81
Antônio Carlos, ZAG, 88
Cléber, ZAG, 87
Tonhão, ZAG, 80
Roberto Carlos, LE, 90
Wagner, LE, 75
César Sampaio, VOL, 89
Flávio Conceição, VOL/LD, 84
Amaral, VOL, 81
Rincón, VOL/MC, 86
Mazinho, MC/MEI, 87
Zinho, MEI, 88
Rivaldo, MEI, 91
Jean Carlo, MEI, 76
Edmundo, ATA/SA, 92
Evair, ATA, 90
Maurílio, ATA, 78
Sorato, ATA, 75

Time: Palmeiras 1994
Formação: 4-4-2
Velloso, GOL, 86
Cláudio, LD, 81
Antônio Carlos, ZAG, 88
Cléber, ZAG, 87
Roberto Carlos, LE, 90
César Sampaio, VOL, 89
Flávio Conceição, VOL/LD, 84
Mazinho, MC/MEI, 87
Zinho, MEI, 88
Edmundo, ATA/SA, 92
Evair, ATA, 90

Time: Palmeiras 1973
Leão, GOL, 91
Raul Marcel, GOL, 75
Eurico, LD, 85
Luís Pereira, ZAG, 92
Alfredo Mostarda, ZAG, 85
Polaco, ZAG, 75
Zeca, LE, 83
Celso, LE, 74
Dudu, VOL, 88
Zé Carlos, VOL, 80
Ademir da Guia, MEI, 94
Ronaldo, MC, 78
Madurga, MC, 76
Mílton, MC, 75
Edu Bala, PD/ATA, 85
Leivinha, MEI/ATA, 90
César Maluco, ATA, 88
Nei, PE/ATA, 84
Pio, ATA, 75
Fedato, ATA, 74

Time: Palmeiras 1973
Formação: 4-2-4
Leão, GOL, 91
Eurico, LD, 85
Luís Pereira, ZAG, 92
Alfredo Mostarda, ZAG, 85
Zeca, LE, 83
Dudu, VOL, 88
Ademir da Guia, MEI, 94
Ronaldo, MC, 78
Leivinha, MEI/ATA, 90
César Maluco, ATA, 88
Nei, PE/ATA, 84

Time: Palmeiras 1967
Valdir de Morais, GOL, 86
Perez, GOL, 80
Djalma Santos, LD, 88
Geraldo Scalera, LD, 77
Baldocchi, ZAG, 84
Minuca, ZAG, 82
Djalma Dias, ZAG, 83
Ferrari, LE, 83
Zequinha, VOL, 84
Dudu, VOL, 86
Ademir da Guia, MEI, 93
Jorge, MEI, 76
Suingue, MEI, 74
Gallardo, PD, 77
Gildo, PD, 80
Servílio, MEI/ATA, 86
César Maluco, ATA, 88
Tupãzinho, ATA, 85
Rinaldo, PE, 81
Lula, PE, 78

Time: Palmeiras 1967
Formação: 4-2-4
Valdir de Morais, GOL, 86
Djalma Santos, LD, 88
Baldocchi, ZAG, 84
Minuca, ZAG, 82
Ferrari, LE, 83
Zequinha, VOL, 84
Ademir da Guia, MEI, 93
Servílio, MEI/ATA, 86
Tupãzinho, ATA, 85
César Maluco, ATA, 88
Rinaldo, PE, 81

Time: São Paulo 2008
Rogério Ceni, GOL, 90
Bosco, GOL, 75
Miranda, ZAG, 89
André Dias, ZAG, 86
Rodrigo, ZAG, 84
Anderson, ZAG, 77
Zé Luís, LD/VOL, 80
Joilson, LD, 76
Jorge Wagner, LE/MEI, 85
Richarlyson, VOL/LE/ZAG, 82
Hernanes, VOL/MC, 90
Jean, VOL/LD, 81
Arouca, VOL, 77
Wellington, VOL, 74
Hugo, MEI, 83
Dagoberto, ATA, 83
Borges, ATA, 85
Aloísio, ATA, 80
Eder Luis, ATA, 78
André Lima, ATA, 76

Time: São Paulo 2008
Formação: 3-5-2
Rogério Ceni, GOL, 90
Rodrigo, ZAG, 84
André Dias, ZAG, 86
Miranda, ZAG, 89
Zé Luís, LD/VOL, 80
Jean, VOL/LD, 81
Hernanes, VOL/MC, 90
Hugo, MEI, 83
Jorge Wagner, LE/MEI, 85
Dagoberto, ATA, 83
Borges, ATA, 85

Time: São Paulo 2005
Rogério Ceni, GOL, 93
Bosco, GOL, 76
Lugano, ZAG, 91
Fabão, ZAG, 84
Edcarlos, ZAG, 80
Alex Bruno, ZAG, 78
Cicinho, LD, 90
Júnior, LE, 86
Fábio Santos, LE, 77
Mineiro, VOL, 89
Josué, VOL, 88
Renan, VOL, 76
Danilo, MEI, 87
Souza, MEI/LD, 82
Leandro Bonfim, MEI, 75
Amoroso, ATA, 89
Luizão, ATA, 86
Aloísio, ATA, 83
Grafite, ATA, 85
Christian, ATA, 78

Time: São Paulo 2005
Formação: 3-5-2
Rogério Ceni, GOL, 93
Fabão, ZAG, 84
Lugano, ZAG, 91
Edcarlos, ZAG, 80
Cicinho, LD, 90
Mineiro, VOL, 89
Josué, VOL, 88
Danilo, MEI, 87
Júnior, LE, 86
Amoroso, ATA, 89
Luizão, ATA, 86

Time: São Paulo 1992
Zetti, GOL, 91
Alexandre, GOL, 76
Antônio Carlos, ZAG, 87
Ronaldão, ZAG, 86
Adilson, ZAG, 83
Válber, ZAG/VOL, 85
Cafu, LD/MEI, 90
Vítor, LD, 80
Ivan, LE, 78
Ronaldo Luiz, LE, 79
Pintado, VOL, 85
Dinho, VOL, 83
Toninho Cerezo, VOL/MC, 89
Raí, MEI, 95
Palhinha, MEI/ATA, 87
Suélio, MEI, 75
Müller, ATA, 90
Macedo, ATA, 83
Elivélton, PE/MEI, 84
Catê, PD/ATA, 79

Time: São Paulo 1992
Formação: 4-2-2-2
Zetti, GOL, 91
Cafu, LD/MEI, 90
Antônio Carlos, ZAG, 87
Ronaldão, ZAG, 86
Ronaldo Luiz, LE, 79
Pintado, VOL, 85
Toninho Cerezo, VOL/MC, 89
Raí, MEI, 95
Palhinha, MEI/ATA, 87
Müller, ATA, 90
Macedo, ATA, 83

Time: São Paulo 1977
Waldir Peres, GOL, 89
Toinho, GOL, 76
Tecão, ZAG, 82
Bezerra, ZAG, 83
Estevam, ZAG, 77
Getúlio, LD, 84
Antenor, LE, 80
Gilberto Sorriso, LE, 78
Chicão, VOL, 88
Teodoro, VOL/MC, 82
Darío Pereyra, ZAG/VOL, 86
Peres, MC/MEI, 79
Neca, MEI/ATA, 83
Pedro Rocha, MEI, 85
Viana, MEI/PE, 78
Zé Sérgio, PE, 87
Mirandinha, ATA, 84
Serginho Chulapa, ATA, 89
Muller, PD, 75
Edu Bala, PD, 78

Time: São Paulo 1977
Formação: 4-3-3
Waldir Peres, GOL, 89
Getúlio, LD, 84
Tecão, ZAG, 82
Bezerra, ZAG, 83
Antenor, LE, 80
Chicão, VOL, 88
Teodoro, VOL/MC, 82
Darío Pereyra, ZAG/VOL, 86
Zé Sérgio, PE, 87
Mirandinha, ATA, 84
Serginho Chulapa, ATA, 89

Time: São Paulo 1970
Sérgio, GOL, 84
Picasso, GOL, 79
Roberto Dias, ZAG, 90
Jurandir, ZAG, 85
Tenente, ZAG, 77
Lima, ZAG, 74
Forlán, LD, 86
Gilberto Sorriso, LE, 82
Edson, VOL, 83
Nenê, VOL, 78
Gérson, MC/MEI, 94
Carlos Alberto, MEI, 76
Benê, MEI, 74
Pedro Rocha, MEI, 92
Paraná, PE, 85
Terto, PD/ATA, 84
Toninho Guerreiro, ATA, 88
Mirandinha, ATA, 80
Babá, ATA, 77
Paulo Nani, ATA, 75

Time: São Paulo 1970
Formação: 4-3-3
Sérgio, GOL, 84
Forlán, LD, 86
Jurandir, ZAG, 85
Roberto Dias, ZAG, 90
Gilberto Sorriso, LE, 82
Edson, VOL, 83
Gérson, MC/MEI, 94
Pedro Rocha, MEI, 92
Terto, PD/ATA, 84
Toninho Guerreiro, ATA, 88
Paraná, PE, 85

Time: São Paulo 1949
Mário, GOL, 83
Poy, GOL, 85
Mauro Ramos, ZAG, 89
Savério, ZAG, 84
Renato, ZAG, 78
Rui, MC/VOL, 88
Bauer, MC/VOL, 91
Noronha, MC/LE, 88
Jacó, MC, 76
Zezé Procópio, MC, 79
Ponce de León, MEI/ATA, 84
Azambuja, MEI, 75
Leônidas da Silva, ATA, 93
Friaça, PD/ATA, 87
Teixeirinha, PE/ATA, 87
Remo, MEI/ATA, 83
Lelé, ATA, 78
Bóve, ATA, 76
Leopoldo, ATA, 74
Yeso, PE, 75

Time: São Paulo 1949
Formação: 2-3-5
Mário, GOL, 83
Savério, ZAG, 84
Mauro Ramos, ZAG, 89
Rui, MC/VOL, 88
Bauer, MC/VOL, 91
Noronha, MC/LE, 88
Friaça, PD/ATA, 87
Ponce de León, MEI/ATA, 84
Leônidas da Silva, ATA, 93
Remo, MEI/ATA, 83
Teixeirinha, PE/ATA, 87

Aqui estão as listas e escalações titulares dos times históricos do Santos que você pediu, seguindo exatamente o seu padrão de formatação e refletindo o "overall" de cada jogador com base no desempenho que tiveram naquelas temporadas específicas:

Time: Santos 2011
Rafael, GOL, 84
Aranha, GOL, 76
Edu Dracena, ZAG, 85
Durval, ZAG, 82
Bruno Rodrigo, ZAG, 77
Danilo, LD/MEI, 85
Jonathan, LD, 79
Léo, LE, 83
Alex Sandro, LE, 82
Arouca, VOL, 86
Adriano, VOL, 80
Henrique, VOL, 81
Elano, MEI, 85
Paulo Henrique Ganso, MEI, 89
Alan Patrick, MEI, 76
Felipe Anderson, MEI, 74
Neymar, PE/ATA, 94
Borges, ATA, 85
Zé Eduardo, ATA, 79
Diogo, ATA, 75

Time: Santos 2011
Formação: 4-3-1-2
Rafael, GOL, 84
Danilo, LD/MEI, 85
Edu Dracena, ZAG, 85
Durval, ZAG, 82
Léo, LE, 83
Adriano, VOL, 80
Arouca, VOL, 86
Elano, MEI, 85
Paulo Henrique Ganso, MEI, 89
Neymar, PE/ATA, 94
Borges, ATA, 85

Time: Santos 2004
Mauro, GOL, 81
Tápia, GOL, 76
Antônio Carlos, ZAG, 84
Ávalos, ZAG, 79
Domingos, ZAG, 77
Paulo César, LD, 82
Flávio, LD, 76
Léo, LE, 87
Preto Casagrande, VOL, 83
Fabinho, VOL, 81
Zé Elias, VOL, 79
Bóvio, VOL, 76
Ricardinho, MEI, 89
Elano, MEI, 88
Marcinho, MEI/ATA, 80
Luiz Augusto, MEI, 75
Robinho, ATA, 92
Deivid, ATA, 86
Basílio, ATA, 82
William, ATA, 77

Time: Santos 2004
Formação: 4-4-2
Mauro, GOL, 81
Paulo César, LD, 82
Antônio Carlos, ZAG, 84
Ávalos, ZAG, 79
Léo, LE, 87
Fabinho, VOL, 81
Preto Casagrande, VOL, 83
Elano, MEI, 88
Ricardinho, MEI, 89
Robinho, ATA, 92
Deivid, ATA, 86

Time: Santos 1995
Edinho, GOL, 85
Gilberto, GOL, 75
Narciso, ZAG/VOL, 84
Ronaldo Marconato, ZAG, 80
Jean, ZAG, 77
Marquinhos Capixaba, LD, 79
Arthur, LD, 75
Marcos Adriano, LE, 80
Gallo, VOL, 84
Carlinhos, VOL, 81
Pintado, VOL, 79
Baiano, VOL/LD, 76
Marcelo Passos, MEI, 81
Robert, MEI, 82
Giovanni, MEI/ATA, 94
Marcos Paulo, MEI, 74
Jamelli, ATA/MEI, 84
Macedo, ATA, 83
Camanducaia, ATA, 80
Serginho Fraldinha, ATA, 76

Time: Santos 1995
Formação: 4-4-2
Edinho, GOL, 85
Marquinhos Capixaba, LD, 79
Ronaldo Marconato, ZAG, 80
Narciso, ZAG/VOL, 84
Marcos Adriano, LE, 80
Gallo, VOL, 84
Carlinhos, VOL, 81
Marcelo Passos, MEI, 81
Robert, MEI, 82
Giovanni, MEI/ATA, 94
Macedo, ATA, 83

Time: Santos 1978
Vitor, GOL, 82
Flávio, GOL, 75
Joãozinho, ZAG, 83
Neto, ZAG, 81
Fernando, ZAG, 77
Nelsinho Baptista, LD, 84
Carlos Alberto Garcia, LD, 76
Gilberto Sorriso, LE, 80
Washington, LE, 75
Clodoaldo, VOL, 86
Zé Carlos, VOL, 81
Aílton Lira, MEI, 86
Pita, MEI, 87
Toninho Vieira, MEI, 78
Rubens Feijão, MEI, 76
Nilton Batata, PD, 84
Juary, ATA, 88
João Paulo, PE, 85
Claudinho, ATA, 79
Célio, ATA, 77

Time: Santos 1978
Formação: 4-3-3
Vitor, GOL, 82
Nelsinho Baptista, LD, 84
Joãozinho, ZAG, 83
Neto, ZAG, 81
Gilberto Sorriso, LE, 80
Zé Carlos, VOL, 81
Aílton Lira, MEI, 86
Pita, MEI, 87
Nilton Batata, PD, 84
Juary, ATA, 88
João Paulo, PE, 85

Time: Santos 1963
Gilmar, GOL, 92
Laércio, GOL, 80
Mauro Ramos, ZAG, 91
Calvet, ZAG, 87
Joel Camargo, ZAG, 84
Dalmo, LE/ZAG, 86
Zé Carlos, LD, 83
Ismael, LD, 79
Geraldino, LE, 80
Zito, VOL, 93
Lima, VOL/ZAG/LD, 88
Mengálvio, MC/MEI, 89
Batista, VOL, 78
Dorval, PD, 89
Pelé, MEI/ATA, 99
Coutinho, ATA, 92
Pepe, PE, 91
Almir Pernambuquinho, ATA, 85
Pagão, ATA, 84
Tite, PE/ATA, 82

Time: Santos 1963
Formação: 4-2-4
Gilmar, GOL, 92
Lima, VOL/ZAG/LD, 88
Mauro Ramos, ZAG, 91
Calvet, ZAG, 87
Dalmo, LE/ZAG, 86
Zito, VOL, 93
Mengálvio, MC/MEI, 89
Dorval, PD, 89
Coutinho, ATA, 92
Pelé, MEI/ATA, 99
Pepe, PE, 91

Time: Santos 1958
Manga, GOL, 83
Urubatão, ZAG/VOL, 82
Ramiro, ZAG/LD, 84
Fioti, ZAG, 79
Getúlio, LD, 82
Mourão, ZAG, 77
Dalmo, LE, 83
Feijó, LE, 78
Zito, VOL, 90
Álvaro, MEI/VOL, 84
Jair da Rosa Pinto, MEI, 90
Afonsinho, MC, 79
Dorval, PD, 87
Pelé, ATA, 98
Pagão, ATA, 89
Pepe, PE, 89
Tite, PE, 81
Guerra, ATA, 77
Hélio, ZAG, 75
Laércio, GOL, 78

Time: Santos 1958
Formação: 4-2-4
Manga, GOL, 83
Getúlio, LD, 82
Ramiro, ZAG/LD, 84
Urubatão, ZAG/VOL, 82
Dalmo, LE, 83
Zito, VOL, 90
Jair da Rosa Pinto, MEI, 90
Dorval, PD, 87
Pagão, ATA, 89
Pelé, ATA, 98
Pepe, PE, 89

Time: Fluminense 2023
Fábio, GOL, 88
Pedro Rangel, GOL, 72
Nino, ZAG, 87
Felipe Melo, ZAG/VOL, 83
Marlon, ZAG, 79
David Braz, ZAG, 76
Samuel Xavier, LD, 84
Guga, LD, 78
Marcelo, LE/MEI, 85
Diogo Barbosa, LE, 77
André, VOL, 89
Martinelli, VOL/MC, 84
Alexsander, VOL/LE, 82
Ganso, MEI, 86
Jhon Arias, MEI/PD, 90
Lima, MEI, 80
Keno, PE, 85
John Kennedy, ATA, 84
Germán Cano, ATA, 92
Lelê, ATA, 76

Time: Fluminense 2023
Formação: 4-2-3-1
Fábio, GOL, 88
Samuel Xavier, LD, 84
Nino, ZAG, 87
Felipe Melo, ZAG/VOL, 83
Marcelo, LE/MEI, 85
André, VOL, 89
Martinelli, VOL/MC, 84
Jhon Arias, MEI/PD, 90
Ganso, MEI, 86
Keno, PE, 85
Germán Cano, ATA, 92

Time: Fluminense 2010
Ricardo Berna, GOL, 81
Fernando Henrique, GOL, 78
Gum, ZAG, 84
Leandro Euzébio, ZAG, 85
André Luis, ZAG, 77
Thiago Sales, ZAG, 74
Mariano, LD, 86
Thiaguinho, LD, 75
Carlinhos, LE, 84
Julio Cesar, LE, 79
Diguinho, VOL, 83
Valencia, VOL, 81
Diogo, VOL, 78
Fernando Bob, VOL, 76
Darío Conca, MEI, 93
Deco, MEI, 83
Marquinho, MEI/LE, 82
Washington, ATA, 84
Emerson Sheik, ATA, 85
Fred, ATA, 87

Time: Fluminense 2010
Formação: 4-4-2
Ricardo Berna, GOL, 81
Mariano, LD, 86
Gum, ZAG, 84
Leandro Euzébio, ZAG, 85
Carlinhos, LE, 84
Diguinho, VOL, 83
Valencia, VOL, 81
Marquinho, MEI/LE, 82
Darío Conca, MEI, 93
Emerson Sheik, ATA, 85
Fred, ATA, 87

Time: Fluminense 2008
Fernando Henrique, GOL, 83
Ricardo Berna, GOL, 75
Thiago Silva, ZAG, 91
Luiz Alberto, ZAG, 84
Roger, ZAG, 79
Edcarlos, ZAG, 76
Gabriel, LD, 85
Rafael, LD, 76
Junior Cesar, LE, 86
Dieguinho, LE, 74
Ygor, VOL, 82
Arouca, VOL, 84
Romeu, VOL, 79
Fabinho, VOL, 77
Cícero, MEI/VOL, 85
Darío Conca, MEI, 87
Thiago Neves, MEI, 89
Washington, ATA, 88
Dodô, ATA, 83
Somália, ATA, 78

Time: Fluminense 2008
Formação: 4-4-2
Fernando Henrique, GOL, 83
Gabriel, LD, 85
Thiago Silva, ZAG, 91
Luiz Alberto, ZAG, 84
Junior Cesar, LE, 86
Ygor, VOL, 82
Arouca, VOL, 84
Cícero, MEI/VOL, 85
Thiago Neves, MEI, 89
Darío Conca, MEI, 87
Washington, ATA, 88

Time: Fluminense 1985
Paulo Victor, GOL, 86
Ricardo Cruz, GOL, 75
Duílio, ZAG, 84
Vica, ZAG, 83
Oswaldo, ZAG, 78
Aldo, LD, 85
Betinho, LD, 77
Branco, LE, 88
Renato, LE, 76
Jandir, VOL, 84
Renê, VOL, 80
Leomir, VOL, 78
Deley, MEI, 85
Assis, MEI, 87
Edson Souza, MEI, 77
Romerito, MEI/ATA, 89
Tato, PE, 84
Paulinho Carioca, PD, 79
Washington, ATA, 88
João Santos, ATA, 75

Time: Fluminense 1985
Formação: 4-3-3
Paulo Victor, GOL, 86
Aldo, LD, 85
Duílio, ZAG, 84
Vica, ZAG, 83
Branco, LE, 88
Jandir, VOL, 84
Deley, MEI, 85
Assis, MEI, 87
Romerito, MEI/ATA, 89
Washington, ATA, 88
Tato, PE, 84

Time: Fluminense 1976
Renato, GOL, 85
Wendell, GOL, 78
Miguel, ZAG, 85
Edinho, ZAG, 87
Silveira, ZAG, 79
Carlos Alberto Torres, LD/ZAG, 90
Rubens Galaxe, LD/VOL, 83
Rodrigues Neto, LE, 86
Marco Antônio, LE, 84
Pintinho, VOL, 86
Cleber, VOL, 77
Rivellino, MEI, 95
Paulo César Caju, MEI/PE, 89
Erivelto, MEI, 79
Gil, PD, 88
Dirceu, PE, 87
Doval, ATA, 89
Cafuringa, PD, 81
Luís Henrique, ATA, 76
Mário, ATA, 75

Time: Fluminense 1976
Formação: 4-3-3
Renato, GOL, 85
Carlos Alberto Torres, LD/ZAG, 90
Miguel, ZAG, 85
Edinho, ZAG, 87
Rodrigues Neto, LE, 86
Pintinho, VOL, 86
Rivellino, MEI, 95
Paulo César Caju, MEI/PE, 89
Gil, PD, 88
Doval, ATA, 89
Dirceu, PE, 87

Time: Fluminense 1952
Castilho, GOL, 92
Veludo, GOL, 80
Píndaro, ZAG, 86
Pinheiro, ZAG, 87
Nestor, ZAG, 78
Jair Santana, LD/ZAG, 79
Edson, VOL/LE, 83
Bigode, LE/VOL, 85
Vitor, VOL/MC, 82
Emilson, VOL, 77
Didi, MEI, 94
Robson, MEI, 76
Orlando Pingo de Ouro, MEI/ATA, 88
Telê Santana, PD/ATA, 85
Quincas, PE, 82
Marinho, ATA, 84
Carlyle, ATA, 83
Simões, ATA, 79
Santo Cristo, ATA, 78
Villalobos, ATA, 75

Time: Fluminense 1952
Formação: 2-3-5
Castilho, GOL, 92
Píndaro, ZAG, 86
Pinheiro, ZAG, 87
Jair Santana, LD/ZAG, 79
Edson, VOL/LE, 83
Bigode, LE/VOL, 85
Telê Santana, PD/ATA, 85
Didi, MEI, 94
Marinho, ATA, 84
Orlando Pingo de Ouro, MEI/ATA, 88
Quincas, PE, 82

Time: Vasco 2012
Fernando Prass, GOL, 85
Alessandro, GOL, 75
Dedé, ZAG, 89
Renato Silva, ZAG, 81
Rodolfo, ZAG, 79
Douglas, ZAG, 76
Fagner, LD, 84
Auremir, LD, 74
Thiago Feltri, LE, 78
William Matheus, LE, 75
Rômulo, VOL, 85
Nilton, VOL, 82
Fellipe Bastos, VOL/MC, 80
Eduardo Costa, VOL, 78
Juninho Pernambucano, MC/MEI, 87
Diego Souza, MEI, 86
Carlos Alberto, MEI, 80
Eder Luis, ATA/PD, 83
Alecsandro, ATA, 84
Tenorio, ATA, 81

Time: Vasco 2012
Formação: 4-2-2-2
Fernando Prass, GOL, 85
Fagner, LD, 84
Dedé, ZAG, 89
Renato Silva, ZAG, 81
Thiago Feltri, LE, 78
Rômulo, VOL, 85
Nilton, VOL, 82
Juninho Pernambucano, MC/MEI, 87
Diego Souza, MEI, 86
Eder Luis, ATA/PD, 83
Alecsandro, ATA, 84

Time: Vasco 1998
Carlos Germano, GOL, 89
Márcio, GOL, 77
Mauro Galvão, ZAG, 90
Odvan, ZAG, 86
Alex Pinho, ZAG, 79
Válber, ZAG/VOL, 81
Vítor, LD, 82
Maricá, LD, 78
Felipe, LE/MEI, 88
Ronaldo Luiz, LE, 77
Luisinho, VOL, 86
Nasa, VOL, 83
Nelson, VOL, 78
Juninho Pernambucano, MEI/MC, 89
Pedrinho, MEI, 87
Ramon, MEI, 86
Vagner, MEI, 84
Donizete, ATA, 87
Luizão, ATA, 88
Sorato, ATA, 80

Time: Vasco 1998
Formação: 4-4-2
Carlos Germano, GOL, 89
Vítor, LD, 82
Odvan, ZAG, 86
Mauro Galvão, ZAG, 90
Felipe, LE/MEI, 88
Luisinho, VOL, 86
Nasa, VOL, 83
Juninho Pernambucano, MEI/MC, 89
Ramon, MEI, 86
Donizete, ATA, 87
Luizão, ATA, 88

Time: Vasco 1989
Acácio, GOL, 87
Régis, GOL, 76
Quiñónez, ZAG, 85
Marco Aurélio, ZAG, 84
Célio Silva, ZAG, 82
Leonardo, ZAG, 78
Luiz Carlos Winck, LD, 86
França, LD, 77
Mazinho, LE/MEI, 87
Cássio, LE, 80
Zé do Carmo, VOL, 85
Boiadeiro, VOL/MC, 84
Andrade, VOL, 83
Bismarck, MEI, 88
William, MEI, 83
Tita, MEI, 85
Geovani, MEI, 86
Bebeto, ATA, 92
Sorato, ATA, 85
Vivinho, PD, 82

Time: Vasco 1989
Formação: 4-4-2
Acácio, GOL, 87
Luiz Carlos Winck, LD, 86
Quiñónez, ZAG, 85
Marco Aurélio, ZAG, 84
Mazinho, LE/MEI, 87
Zé do Carmo, VOL, 85
Boiadeiro, VOL/MC, 84
William, MEI, 83
Bismarck, MEI, 88
Bebeto, ATA, 92
Sorato, ATA, 85

Time: Vasco 1974
Andrada, GOL, 88
Carlos Henrique, GOL, 75
Moisés, ZAG, 86
Miguel, ZAG, 85
Renê, ZAG, 79
Joel, ZAG, 78
Fidelis, LD, 82
Paulo César, LD, 77
Alfinete, LE, 83
Pedrinho, LE, 76
Alcir Portela, VOL, 85
Zanata, VOL/MC, 82
Zé Mário, VOL, 84
Ademir, MEI, 80
Gaúcho, MEI, 78
Carlinhos, MEI, 79
Jorginho Carvoeiro, PD/ATA, 84
Roberto Dinamite, ATA, 90
Luiz Carlos, PE/ATA, 82
Jaílson, ATA, 77

Time: Vasco 1974
Formação: 4-3-3
Andrada, GOL, 88
Fidelis, LD, 82
Miguel, ZAG, 85
Moisés, ZAG, 86
Alfinete, LE, 83
Alcir Portela, VOL, 85
Zanata, VOL/MC, 82
Ademir, MEI, 80
Jorginho Carvoeiro, PD/ATA, 84
Roberto Dinamite, ATA, 90
Luiz Carlos, PE/ATA, 82

Time: Vasco 1948
Barbosa, GOL, 92
Barqueta, GOL, 76
Augusto, ZAG, 88
Wilson, ZAG, 85
Rafanelli, ZAG, 81
Laerte, ZAG, 78
Ely, VOL/MD, 87
Danilo Alvim, MC/VOL, 91
Jorge, VOL/ME, 86
Alfredo, VOL, 80
Djalma, PD, 84
Maneca, MEI/ATA, 86
Friaça, PD/ATA, 88
Ademir de Menezes, ATA, 94
Ipojucan, MEI/ATA, 87
Chico, PE, 89
Lelé, ATA, 82
Dimas, ATA, 80
Ismael, ATA, 78
Nestor, ATA, 77

Time: Vasco 1948
Formação: 2-3-5
Barbosa, GOL, 92
Augusto, ZAG, 88
Wilson, ZAG, 85
Ely, VOL/MD, 87
Danilo Alvim, MC/VOL, 91
Jorge, VOL/ME, 86
Friaça, PD/ATA, 88
Maneca, MEI/ATA, 86
Ademir de Menezes, ATA, 94
Ipojucan, MEI/ATA, 87
Chico, PE, 89

Time: Vasco 1924
Nelson, GOL, 85
Amaral, GOL, 75
Leitão, ZAG, 84
Mingote, ZAG, 83
Claudio, ZAG, 76
Nicolino, VOL/MD, 85
Claudionor, MC/VOL, 84
Artur, VOL/ME, 83
Nolasco, VOL, 78
Paschoal, PD, 88
Torterolli, MEI/ATA, 86
Arlindo, ATA, 85
Cecy, ATA/MEI, 87
Negrito, PE, 84
Bolão, ATA, 80
Russo, ATA, 78
Pires, ATA, 76
Adão, ATA, 75
João, ATA, 74
Mário, ATA, 73

Time: Vasco 1924
Formação: 2-3-5
Nelson, GOL, 85
Leitão, ZAG, 84
Mingote, ZAG, 83
Nicolino, VOL/MD, 85
Claudionor, MC/VOL, 84
Artur, VOL/ME, 83
Paschoal, PD, 88
Torterolli, MEI/ATA, 86
Arlindo, ATA, 85
Cecy, ATA/MEI, 87
Negrito, PE, 84

Time: Botafogo 2024
John, GOL, 86
Gatito Fernández, GOL, 79
Bastos, ZAG, 85
Alexander Barboza, ZAG, 87
Adryelson, ZAG, 84
Lucas Halter, ZAG, 76
Vitinho, LD, 83
Mateo Ponte, LD, 79
Alex Telles, LE, 84
Marçal, LE, 81
Gregore, VOL, 87
Marlon Freitas, VOL, 87
Tchê Tchê, VOL/MC, 82
Danilo Barbosa, VOL, 80
Thiago Almada, MEI, 88
Eduardo, MEI, 81
Jefferson Savarino, MEI/PE, 86
Luiz Henrique, PD/ATA, 89
Igor Jesus, ATA, 86
Tiquinho Soares, ATA, 84

Time: Botafogo 2024
Formação: 4-2-3-1
John, GOL, 86
Vitinho, LD, 83
Bastos, ZAG, 85
Alexander Barboza, ZAG, 87
Alex Telles, LE, 84
Gregore, VOL, 87
Marlon Freitas, VOL, 87
Luiz Henrique, PD/ATA, 89
Thiago Almada, MEI, 88
Jefferson Savarino, MEI/PE, 86
Igor Jesus, ATA, 86

Time: Botafogo 1962
Manga, GOL, 92
Adalberto, GOL, 77
Zé Maria, ZAG, 85
Paulistinha, ZAG/LD, 83
Jomar, ZAG, 78
Joel, LD, 84
Rildo, LE, 86
Nilton Santos, LE/ZAG, 94
Ayrton, VOL, 83
Pampolini, VOL, 82
Didi, MEI, 95
Édison, MEI, 79
Garrincha, PD, 97
Amarildo, ATA, 90
Quarentinha, ATA, 89
Zagallo, PE, 91
Amoroso, ATA, 82
Neivaldo, ATA, 76
Cacá, MEI, 75
Romeu, ATA, 74

Time: Botafogo 1962
Formação: 4-2-4
Manga, GOL, 92
Joel, LD, 84
Zé Maria, ZAG, 85
Paulistinha, ZAG/LD, 83
Nilton Santos, LE/ZAG, 94
Ayrton, VOL, 83
Didi, MEI, 95
Garrincha, PD, 97
Quarentinha, ATA, 89
Amarildo, ATA, 90
Zagallo, PE, 91

Time: Botafogo 1968
Cao, GOL, 85
Wendell, GOL, 78
Zé Carlos, ZAG, 86
Leônidas, ZAG, 84
Dimas, ZAG, 80
Paulistinha, ZAG/LD, 81
Moreira, LD, 83
Valtencir, LE, 84
Mura, LE, 76
Carlos Roberto, VOL, 86
Nei Conceição, VOL, 83
Afonsinho, VOL, 82
Gérson, MEI/MC, 94
Zequinha, MEI, 79
Humberto, MEI, 77
Rogério, PD, 84
Roberto Miranda, ATA, 88
Jairzinho, ATA/PD, 92
Paulo Cézar Caju, PE/MEI, 90
Ferretti, ATA, 81

Time: Botafogo 1968
Formação: 4-2-4
Cao, GOL, 85
Moreira, LD, 83
Zé Carlos, ZAG, 86
Leônidas, ZAG, 84
Valtencir, LE, 84
Carlos Roberto, VOL, 86
Gérson, MEI/MC, 94
Rogério, PD, 84
Roberto Miranda, ATA, 88
Jairzinho, ATA/PD, 92
Paulo Cézar Caju, PE/MEI, 90

Time: Botafogo 1995
Wagner, GOL, 85
Carlão, GOL, 75
Wilson Gottardo, ZAG, 88
Gonçalves, ZAG, 87
Grotto, ZAG, 80
Márcio Theodoro, ZAG, 78
Wilson Goiano, LD, 83
Eliomar, LD/ZAG, 76
André Silva, LE, 81
Jefferson, LE, 77
Leandro Ávila, VOL, 84
Jamir, VOL, 83
Moisés, VOL, 80
Sérgio Manoel, MEI, 87
Beto, MEI, 85
Iranildo, MEI, 83
Túlio Maravilha, ATA, 92
Donizete Pantera, ATA, 88
Dauri, ATA, 80
Narcízio, ATA, 76

Time: Botafogo 1995
Formação: 4-4-2
Wagner, GOL, 85
Wilson Goiano, LD, 83
Wilson Gottardo, ZAG, 88
Gonçalves, ZAG, 87
André Silva, LE, 81
Leandro Ávila, VOL, 84
Jamir, VOL, 83
Beto, MEI, 85
Sérgio Manoel, MEI, 87
Donizete Pantera, ATA, 88
Túlio Maravilha, ATA, 92

Time: Botafogo 1993
William Bacana, GOL, 83
Carlão, GOL, 78
André Santos, ZAG, 82
Cláudio Henrique, ZAG, 80
Clei, ZAG, 78
Eliomar, ZAG, 77
Perivaldo, LD, 81
Odemilson, LD, 75
China, LE/LD, 76
Nélson, VOL, 83
Suélio, VOL, 84
Marcelo Costa, VOL, 80
Aléssio, MEI, 81
Rogerinho, MEI, 83
Marcos Paulo, MEI, 79
Sidney, MEI, 76
Sinval, ATA, 87
Eliel, ATA, 84
André Duarte, ATA, 76
Marcos, ATA, 75

Time: Botafogo 1993
Formação: 4-4-2
William Bacana, GOL, 83
Perivaldo, LD, 81
André Santos, ZAG, 82
Cláudio Henrique, ZAG, 80
Clei, LE/ZAG, 78
Nélson, VOL, 83
Suélio, VOL, 84
Marcelo Costa, VOL, 80
Aléssio, MEI, 81
Sinval, ATA, 87
Eliel, ATA, 84

Time: Botafogo 1912
Coggin, GOL, 85
Álvaro Werneck, GOL, 75
Edgard Pullen, ZAG, 83
Dinorah, ZAG, 82
Octávio Werneck, ZAG, 78
João Leal, ZAG, 76
Rolando de Lamare, VOL, 84
Lulú Rocha, VOL, 86
Lefèvre, VOL, 82
Juca Couto, VOL, 79
Mário Pinto, MEI, 78
Emmanuel Sodré, MEI, 85
Osvaldo de Lamare, MEI, 84
Décio Viccari, MEI, 82
Abelardo de Lamare, ATA, 88
Mimi Sodré, ATA, 92
Carlos Villaça, ATA, 89
Lauro Sodré, ATA, 85
Flávio Ramos, ATA, 83
Gilbert Hime, ATA, 80

Time: Botafogo 1912
Formação: 2-3-5
Coggin, GOL, 85
Edgard Pullen, ZAG, 83
Dinorah, ZAG, 82
Rolando de Lamare, VOL, 84
Lulú Rocha, VOL, 86
Lefèvre, VOL, 82
Emmanuel Sodré, MEI, 85
Osvaldo de Lamare, MEI, 84
Abelardo de Lamare, ATA, 88
Mimi Sodré, ATA, 92
Carlos Villaça, ATA, 89

Time: Atlético-MG 2021
Everson, GOL, 86
Rafael, GOL, 75
Junior Alonso, ZAG, 87
Nathan Silva, ZAG, 84
Réver, ZAG, 80
Igor Rabello, ZAG, 79
Mariano, LD, 83
Guga, LD, 79
Guilherme Arana, LE, 88
Dodô, LE, 78
Allan, VOL, 86
Jair, VOL, 85
Tchê Tchê, VOL, 80
Matías Zaracho, MEI/MC, 86
Nacho Fernández, MEI, 87
Nathan, MEI, 76
Keno, PE, 84
Hulk, ATA, 92
Eduardo Vargas, ATA/SA, 82
Diego Costa, ATA, 83

Time: Atlético-MG 2021
Formação: 4-2-3-1
Everson, GOL, 86
Mariano, LD, 83
Nathan Silva, ZAG, 84
Junior Alonso, ZAG, 87
Guilherme Arana, LE, 88
Allan, VOL, 86
Jair, VOL, 85
Matías Zaracho, MEI/MC, 86
Nacho Fernández, MEI, 87
Keno, PE, 84
Hulk, ATA, 92

Time: Atlético-MG 2013
Victor, GOL, 90
Giovanni, GOL, 74
Réver, ZAG, 87
Leonardo Silva, ZAG, 86
Gilberto Silva, ZAG/VOL, 80
Rafael Marques, ZAG, 76
Marcos Rocha, LD, 85
Carlos César, LD, 75
Richarlyson, LE/VOL, 80
Júnior César, LE, 79
Pierre, VOL, 84
Leandro Donizete, VOL, 84
Josué, VOL, 81
Rosinei, VOL, 76
Ronaldinho Gaúcho, MEI, 92
Guilherme, MEI/ATA, 82
Bernard, MEI/PE, 87
Diego Tardelli, ATA/PE, 89
Luan, ATA/PD, 83
Jô, ATA, 88

Time: Atlético-MG 2013
Formação: 4-2-3-1
Victor, GOL, 90
Marcos Rocha, LD, 85
Leonardo Silva, ZAG, 86
Réver, ZAG, 87
Richarlyson, LE/VOL, 80
Pierre, VOL, 84
Leandro Donizete, VOL, 84
Diego Tardelli, ATA/PE, 89
Ronaldinho Gaúcho, MEI, 92
Bernard, MEI/PE, 87
Jô, ATA, 88

Time: Atlético-MG 1992
João Leite, GOL, 84
Humberto, GOL, 75
Luiz Eduardo, ZAG, 83
Ryuler, ZAG, 82
André Figueiredo, ZAG, 79
João Carlos, ZAG, 77
Alfinete, LD, 81
Carlos Roberto, LD, 76
Paulo Roberto Prestes, LE, 82
Valdir, LE, 77
Éder Lopes, VOL, 83
Moacir, VOL/MC, 85
Valdir Bigu, VOL, 80
Negrini, MEI, 82
Vantuil, MEI, 79
Aílton, MEI, 84
Sérgio Araújo, PD/ATA, 85
Claudinho, ATA, 81
Arouca, ATA, 83
Lê, ATA, 79

Time: Atlético-MG 1992
Formação: 4-4-2
João Leite, GOL, 84
Alfinete, LD, 81
Luiz Eduardo, ZAG, 83
Ryuler, ZAG, 82
Paulo Roberto Prestes, LE, 82
Éder Lopes, VOL, 83
Moacir, VOL/MC, 85
Negrini, MEI, 82
Aílton, MEI, 84
Sérgio Araújo, PD/ATA, 85
Arouca, ATA, 83

Time: Atlético-MG 1981
João Leite, GOL, 88
Sérgio, GOL, 75
Luizinho, ZAG, 89
Osmar, ZAG, 85
Vantuir, ZAG, 82
Miranda, ZAG, 78
Orlando, LD/ZAG, 81
Fernando, LD, 76
Jorge Valença, LE, 84
Chicão, VOL, 87
Toninho Cerezo, VOL/MC, 90
Heleno, VOL, 79
Palhinha, MEI/ATA, 86
Pedrinho, MEI, 83
Renato, MEI, 82
Ângelo, MEI, 77
Reinaldo, ATA, 95
Éder Aleixo, PE, 91
Vaguinho, PD, 84
Bira, ATA, 79

Time: Atlético-MG 1981
Formação: 4-3-3
João Leite, GOL, 88
Orlando, LD/ZAG, 81
Osmar, ZAG, 85
Luizinho, ZAG, 89
Jorge Valença, LE, 84
Chicão, VOL, 87
Toninho Cerezo, VOL/MC, 90
Palhinha, MEI/ATA, 86
Pedrinho, MEI, 83
Reinaldo, ATA, 95
Éder Aleixo, PE, 91

Time: Atlético-MG 1971
Renato, GOL, 87
Careca, GOL, 75
Grapete, ZAG, 84
Vantuir, ZAG, 86
Normandes, ZAG, 79
Humberto Monteiro, LD, 83
Zé Maria, LD, 76
Oldair, LE/VOL, 87
Cincunegui, LE, 80
Vanderlei Paiva, VOL, 85
Humberto Ramos, MEI, 85
Lola, MEI, 84
Tião, MEI, 82
Ronaldo, MEI/PE, 81
Spencer, MEI, 78
Dadá Maravilha, ATA, 92
Romeu Cambalhota, ATA, 83
Guará, ATA, 77
Beto, PE, 79
Vantuil, ZAG, 75

Time: Atlético-MG 1971
Formação: 4-2-4
Renato, GOL, 87
Humberto Monteiro, LD, 83
Grapete, ZAG, 84
Vantuir, ZAG, 86
Oldair, LE/VOL, 87
Vanderlei Paiva, VOL, 85
Humberto Ramos, MEI, 85
Ronaldo, MEI/PE, 81
Lola, MEI, 84
Dadá Maravilha, ATA, 92
Romeu Cambalhota, ATA, 83

Time: Atlético-MG 1937
Kafunga, GOL, 88
Clóvis, GOL, 75
Floriano, ZAG, 86
Zezé Procópio, ZAG, 87
Evandro, ZAG, 78
Lola, VOL/MC, 83
Bala, VOL, 81
Joãozinho, VOL, 82
Alcindo, MC, 77
Elói, ZAG/MC, 79
Cláudio, MC, 76
Aurélio, LD, 77
Jairo, LE, 76
Paulista, PD, 84
Alfredo Bernardino, MEI/ATA, 85
Guará, ATA, 90
Nicola, PE/ATA, 83
Resende, ATA, 82
Bazzoni, ATA, 78
Babilônia, ATA, 75

Time: Atlético-MG 1937
Formação: 2-3-5
Kafunga, GOL, 88
Floriano, ZAG, 86
Zezé Procópio, ZAG, 87
Lola, VOL/MC, 83
Bala, VOL, 81
Joãozinho, VOL, 82
Paulista, PD, 84
Alfredo Bernardino, MEI/ATA, 85
Guará, ATA, 90
Nicola, PE/ATA, 83
Resende, ATA, 82

Time: Cruzeiro 2003
Gomes, GOL, 86
Artur, GOL, 75
Cris, ZAG, 87
Edu Dracena, ZAG, 85
Luisão, ZAG, 86
Thiago Gosling, ZAG, 77
Maurinho, LD, 85
Maicon, LD, 82
Leandro, LE, 84
Augusto Recife, VOL, 83
Maldonado, VOL, 85
Wendell, VOL, 82
Felipe Melo, VOL, 80
Martinez, VOL, 81
Alex, MEI, 95
Zinho, MEI, 84
Aristizábal, ATA, 89
Deivid, ATA, 88
Márcio Nobre, ATA, 84
Mota, ATA, 83

Time: Cruzeiro 2003
Formação: 4-4-2
Gomes, GOL, 86
Maurinho, LD, 85
Cris, ZAG, 87
Edu Dracena, ZAG, 85
Leandro, LE, 84
Augusto Recife, VOL, 83
Maldonado, VOL, 85
Wendell, VOL, 82
Alex, MEI, 95
Aristizábal, ATA, 89
Deivid, ATA, 88

Time: Cruzeiro 1966
Raul Plassmann, GOL, 88
Tonho, GOL, 75
William, ZAG, 86
Procópio, ZAG, 85
Fontana, ZAG, 83
Darci Menezes, ZAG, 80
Pedro Paulo, LD, 84
Neco, LE, 78
Hilton Oliveira, PE/LE, 84
Piazza, VOL, 89
Zé Carlos, VOL, 86
Ílton Chaves, VOL, 79
Dirceu Lopes, MEI, 92
Marco Antônio, MEI, 75
Tostão, MEI/ATA, 94
Natal, PD, 85
Evaldo, ATA, 84
Dalmar, ATA, 77
Fescina, ATA, 76
Bita, ATA, 74

Time: Cruzeiro 1966
Formação: 4-2-4
Raul Plassmann, GOL, 88
Pedro Paulo, LD, 84
William, ZAG, 86
Procópio, ZAG, 85
Neco, LE, 78
Piazza, VOL, 89
Dirceu Lopes, MEI, 92
Natal, PD, 85
Tostão, MEI/ATA, 94
Evaldo, ATA, 84
Hilton Oliveira, PE/LE, 84

Time: Cruzeiro 1976
Raul Plassmann, GOL, 89
Hélio, GOL, 76
Nelinho, LD, 90
Moraes, ZAG, 84
Darci Menezes, ZAG, 82
Zezinho Figueroa, ZAG, 80
Ozires, ZAG, 78
Vanderlei, LE, 83
Valdo, LE, 75
Piazza, VOL, 87
Zé Carlos, VOL, 86
Ronaldo, VOL, 79
Eduardo Amorim, MC/MEI, 85
Dirceu Lopes, MEI, 84
Jairzinho, ATA/PD, 88
Palhinha, ATA, 89
Joãozinho, PE, 88
Roberto Batata, PD, 86
Silva, ATA, 77
Eli Mendes, ATA, 76

Time: Cruzeiro 1976
Formação: 4-3-3
Raul Plassmann, GOL, 89
Nelinho, LD, 90
Moraes, ZAG, 84
Darci Menezes, ZAG, 82
Vanderlei, LE, 83
Piazza, VOL, 87
Zé Carlos, VOL, 86
Eduardo Amorim, MC/MEI, 85
Jairzinho, ATA/PD, 88
Palhinha, ATA, 89
Joãozinho, PE, 88

Time: Cruzeiro 2014
Fábio, GOL, 88
Rafael, GOL, 76
Dedé, ZAG, 86
Léo, ZAG, 83
Manoel, ZAG, 82
Bruno Rodrigo, ZAG, 84
Mayke, LD, 84
Ceará, LD, 79
Egídio, LE, 83
Samudio, LE, 77
Henrique, VOL, 85
Lucas Silva, VOL, 86
Nilton, VOL, 81
Willian Farias, VOL, 76
Éverton Ribeiro, MEI, 89
Ricardo Goulart, MEI, 88
Júlio Baptista, MEI/ATA, 80
Marquinhos, PE/PD, 82
Willian, ATA, 84
Marcelo Moreno, ATA, 86

Time: Cruzeiro 2014
Formação: 4-2-3-1
Fábio, GOL, 88
Mayke, LD, 84
Dedé, ZAG, 86
Léo, ZAG, 83
Egídio, LE, 83
Henrique, VOL, 85
Lucas Silva, VOL, 86
Éverton Ribeiro, MEI, 89
Ricardo Goulart, MEI, 88
Willian, ATA, 84
Marcelo Moreno, ATA, 86

Time: Cruzeiro 1997
Dida, GOL, 90
Jean, GOL, 76
Vitor, LD, 83
Wilson Gottardo, ZAG, 86
Gélson Baresi, ZAG, 84
Célio Lúcio, ZAG, 81
João Carlos, ZAG, 82
Nonato, LE, 85
Ricardinho, VOL, 84
Fabinho, VOL, 83
Donizete Oliveira, VOL, 82
Cleisson, VOL/MC, 81
Palhinha, MEI, 85
Aílton, MEI, 79
Geovanni, MEI/ATA, 77
Elivélton, PE/MEI, 84
Marcelo Ramos, ATA, 87
Alex Mineiro, ATA, 80
Da Silva, ATA, 76
Tico, ATA, 74

Time: Cruzeiro 1997
Formação: 4-4-2
Dida, GOL, 90
Vitor, LD, 83
Gélson Baresi, ZAG, 84
Wilson Gottardo, ZAG, 86
Nonato, LE, 85
Fabinho, VOL, 83
Ricardinho, VOL, 84
Cleisson, VOL/MC, 81
Palhinha, MEI, 85
Elivélton, PE/MEI, 84
Marcelo Ramos, ATA, 87

Time: Cruzeiro 1993
Paulo César, GOL, 83
Dida, GOL, 82
Paulo Roberto, LD, 84
Luizinho, ZAG, 84
Célio Lúcio, ZAG, 82
Robson, ZAG, 80
Nonato, LE, 85
Lira, LE, 77
Douglas, VOL, 83
Rogério Lage, VOL, 80
Ademir, VOL, 79
Boiadeiro, MEI/MC, 84
Luiz Fernando, MEI, 82
Edenílson, MEI, 80
Macalé, MEI, 77
Roberto Gaúcho, PE/ATA, 85
Ronaldo, ATA, 87
Careca, ATA, 78
Tote, ATA, 76
Nivaldo, ATA, 75

Time: Cruzeiro 1993
Formação: 4-4-2
Paulo César, GOL, 83
Paulo Roberto, LD, 84
Célio Lúcio, ZAG, 82
Luizinho, ZAG, 84
Nonato, LE, 85
Douglas, VOL, 83
Rogério Lage, VOL, 80
Edenílson, MEI, 80
Boiadeiro, MEI/MC, 84
Roberto Gaúcho, PE/ATA, 85
Ronaldo, ATA, 87

Time: Internacional 2010
Renan, GOL, 82
Abbondanzieri, GOL, 78
Bolívar, ZAG, 84
Índio, ZAG, 85
Sorondo, ZAG, 80
Fabiano Eller, ZAG, 79
Nei, LD, 81
Bruno Silva, LD, 75
Kleber, LE, 85
Sandro, VOL, 86
Guiñazú, VOL, 86
Tinga, VOL/MC, 84
Wilson Mathias, VOL, 77
D'Alessandro, MEI, 89
Giuliano, MEI, 85
Andrezinho, MEI, 82
Taison, ATA/PE, 84
Alecsandro, ATA, 83
Rafael Sóbis, ATA, 85
Leandro Damião, ATA, 79

Time: Internacional 2010
Formação: 4-2-3-1
Renan, GOL, 82
Nei, LD, 81
Bolívar, ZAG, 84
Índio, ZAG, 85
Kleber, LE, 85
Sandro, VOL, 86
Guiñazú, VOL, 86
Tinga, VOL/MC, 84
D'Alessandro, MEI, 89
Taison, ATA/PE, 84
Alecsandro, ATA, 83

Time: Internacional 2006
Clemer, GOL, 84
Renan, GOL, 77
Fabiano Eller, ZAG, 86
Índio, ZAG, 85
Ediglê, ZAG, 77
Ceará, LD, 85
Elder Granja, LD, 81
Jorge Wagner, LE/MEI, 85
Rubens Cardoso, LE, 79
Edinho, VOL, 83
Wellington Monteiro, VOL, 82
Fabinho, VOL, 81
Tinga, VOL/MC, 87
Alex, MEI, 86
Fernandão, MEI/ATA, 90
Adriano Gabiru, MEI, 80
Rafael Sóbis, ATA, 87
Iarley, ATA, 86
Alexandre Pato, ATA, 84
Luiz Adriano, ATA, 82

Time: Internacional 2006
Formação: 4-2-3-1
Clemer, GOL, 84
Ceará, LD, 85
Índio, ZAG, 85
Fabiano Eller, ZAG, 86
Jorge Wagner, LE/MEI, 85
Edinho, VOL, 83
Wellington Monteiro, VOL, 82
Tinga, VOL/MC, 87
Alex, MEI, 86
Fernandão, MEI/ATA, 90
Rafael Sóbis, ATA, 87

Time: Internacional 1992
Fernández, GOL, 85
André, GOL, 76
Célio Silva, ZAG, 86
Pinga, ZAG, 84
Ricardo, ZAG, 78
Célio Lino, LD, 80
Luiz Carlos Winck, LD, 82
Daniel Franco, LE, 81
Zé Carlos, LE, 77
Ricardo Franco, VOL, 80
Élson, VOL, 82
Anderson, VOL, 78
Marquinhos, MEI, 83
Silas, MEI, 84
Lucas, MEI, 79
Caíco, MEI/PE, 80
Maurício, ATA, 85
Gérson, ATA, 83
Nílson, ATA, 84
Jairo Lenzi, PE, 79

Time: Internacional 1992
Formação: 4-4-2
Fernández, GOL, 85
Célio Lino, LD, 80
Célio Silva, ZAG, 86
Pinga, ZAG, 84
Daniel Franco, LE, 81
Ricardo Franco, VOL, 80
Élson, VOL, 82
Marquinhos, MEI, 83
Silas, MEI, 84
Gérson, ATA, 83
Maurício, ATA, 85

Time: Internacional 1979
Benítez, GOL, 86
Bagatini, GOL, 75
Mauro Galvão, ZAG, 88
Mauro Pastor, ZAG, 84
Joãozinho, ZAG, 78
João Carlos, LD, 83
Hermes, LD, 77
Cláudio Mineiro, LE, 84
Chico Spina, LE/ATA, 79
Batista, VOL, 89
Falcão, VOL/MC, 96
Toninho, VOL, 80
Jair, MEI, 87
Valdomiro, PD/MEI, 88
Mário Sérgio, PE/MEI, 89
Bira, ATA, 85
Adílson, ATA, 77
Valdir Lima, ATA, 76
Washington, ATA, 78
Jones, ATA, 75

Time: Internacional 1979
Formação: 4-3-3
Benítez, GOL, 86
João Carlos, LD, 83
Mauro Pastor, ZAG, 84
Mauro Galvão, ZAG, 88
Cláudio Mineiro, LE, 84
Batista, VOL, 89
Falcão, VOL/MC, 96
Jair, MEI, 87
Valdomiro, PD/MEI, 88
Bira, ATA, 85
Mário Sérgio, PE/MEI, 89

Time: Internacional 1974
Manga, GOL, 90
Schneider, GOL, 75
Figueroa, ZAG, 95
Pontes, ZAG, 85
Hermínio, ZAG, 78
Cláudio, LD, 83
Paulinho, LD, 77
Vacaria, LE, 84
Jorge Tabajara, LE, 79
Carpegiani, VOL/MC, 88
Falcão, VOL/MC, 91
Tovar, VOL, 80
Jair, MEI, 83
Escurinho, MEI/ATA, 85
Dorinho, MEI, 82
Borjita, MEI, 76
Valdomiro, PD, 88
Claudiomiro, ATA, 86
Lula, PE, 85
Sérgio, ATA, 78

Time: Internacional 1974
Formação: 4-3-3
Manga, GOL, 90
Cláudio, LD, 83
Figueroa, ZAG, 95
Pontes, ZAG, 85
Vacaria, LE, 84
Carpegiani, VOL/MC, 88
Falcão, VOL/MC, 91
Escurinho, MEI/ATA, 85
Valdomiro, PD, 88
Claudiomiro, ATA, 86
Lula, PE, 85

Time: Internacional 1948
Ivo, GOL, 83
Évora, GOL, 75
Nena, ZAG, 86
Ilha, ZAG, 84
Alfeu, ZAG, 80
Ávila, ZAG/VOL, 84
Abigail, VOL, 85
Viana, VOL, 79
Mário, VOL, 77
Ghiggi, VOL, 76
Tesourinha, PD, 93
Carlitos, PE, 92
Adãozinho, MEI/ATA, 88
Villalba, ATA, 85
Ruy Motorzinho, MEI/ATA, 83
Farias, ATA, 79
Roberto, ATA, 77
Leônidas, ATA, 80
Ghizoni, ATA, 78
Joãozinho, ATA, 75

Time: Internacional 1948
Formação: 2-3-5
Ivo, GOL, 83
Nena, ZAG, 86
Ilha, ZAG, 84
Viana, VOL, 79
Ávila, ZAG/VOL, 84
Abigail, VOL, 85
Tesourinha, PD, 93
Ruy Motorzinho, MEI/ATA, 83
Adãozinho, MEI/ATA, 88
Villalba, ATA, 85
Carlitos, PE, 92

Time: Grêmio 2017
Marcelo Grohe, GOL, 88
Paulo Victor, GOL, 76
Pedro Geromel, ZAG, 90
Walter Kannemann, ZAG, 87
Bressan, ZAG, 77
Bruno Rodrigo, ZAG, 75
Edílson, LD, 84
Léo Moura, LD, 81
Cortez, LE, 82
Marcelo Oliveira, LE, 78
Arthur, VOL/MC, 89
Michel, VOL, 82
Maicon, VOL, 83
Jailson, VOL, 79
Luan, MEI/ATA, 92
Ramiro, MEI/MD, 84
Cícero, MEI/VOL, 80
Everton Cebolinha, PE/ATA, 85
Fernandinho, PE/ATA, 82
Lucas Barrios, ATA, 84

Time: Grêmio 2017
Formação: 4-2-3-1
Marcelo Grohe, GOL, 88
Edílson, LD, 84
Pedro Geromel, ZAG, 90
Walter Kannemann, ZAG, 87
Cortez, LE, 82
Michel, VOL, 82
Arthur, VOL/MC, 89
Ramiro, MEI/MD, 84
Luan, MEI/ATA, 92
Fernandinho, PE/ATA, 82
Lucas Barrios, ATA, 84

Time: Grêmio 1996
Danrlei, GOL, 87
Murilo, GOL, 76
Adilson Batista, ZAG, 85
Rivarola, ZAG, 84
Mauro Galvão, ZAG, 86
Luciano, ZAG, 78
Arce, LD, 89
Marco Antônio, LD, 77
Roger, LE, 85
André Silva, LE, 79
Dinho, VOL, 85
Goiano, VOL, 84
Emerson, VOL/MC, 83
João Antônio, VOL, 80
Carlos Miguel, MEI/LE, 86
Ailton, MEI, 81
Paulo Nunes, ATA, 89
Jardel, ATA, 90
Zé Alcino, ATA, 82
Rodrigo Gral, ATA, 77

Time: Grêmio 1996
Formação: 4-4-2
Danrlei, GOL, 87
Arce, LD, 89
Rivarola, ZAG, 84
Adilson Batista, ZAG, 85
Roger, LE, 85
Dinho, VOL, 85
Goiano, VOL, 84
Emerson, VOL/MC, 83
Carlos Miguel, MEI/LE, 86
Paulo Nunes, ATA, 89
Jardel, ATA, 90

Time: Grêmio 1989
Mazaropi, GOL, 85
Gomes, GOL, 75
Edinho, ZAG, 86
Luis Eduardo, ZAG, 84
João Marcelo, ZAG, 80
Vilson, ZAG, 78
Alfinete, LD, 82
Trasante, LD/ZAG, 79
Hélcio, LE, 81
Lino, LE/VOL, 77
Jandir, VOL, 83
Bonamigo, VOL, 82
Darci, VOL, 79
Cuca, MEI/VOL, 85
Assis, MEI, 84
Adílson Heleno, MEI, 80
Paulo Egídio, PE, 83
Kita, ATA, 81
Nando, ATA, 82
Gilson, ATA, 78

Time: Grêmio 1989
Formação: 4-4-2
Mazaropi, GOL, 85
Alfinete, LD, 82
Edinho, ZAG, 86
Luis Eduardo, ZAG, 84
Hélcio, LE, 81
Jandir, VOL, 83
Lino, LE/VOL, 77
Cuca, MEI/VOL, 85
Assis, MEI, 84
Nando, ATA, 82
Paulo Egídio, PE, 83

Time: Grêmio 1983
Mazaropi, GOL, 86
Beto, GOL, 75
Baidek, ZAG, 85
De León, ZAG, 89
Leandro, ZAG, 80
Newmar, ZAG, 78
Paulo Roberto, LD, 86
Silmar, LD, 76
Casemiro, LE, 84
PC Magalhães, LE, 79
China, VOL, 86
Osvaldo, VOL, 85
Bonamigo, VOL, 79
Tita, MEI/PD, 87
Mário Sérgio, MEI/PE, 88
Tonho, MEI, 78
Renato Gaúcho, PD/ATA, 91
Tarciso, PE/ATA, 88
César, ATA, 84
Caio, ATA, 82

Time: Grêmio 1983
Formação: 4-3-3
Mazaropi, GOL, 86
Paulo Roberto, LD, 86
Baidek, ZAG, 85
De León, ZAG, 89
PC Magalhães, LE, 79
China, VOL, 86
Osvaldo, VOL, 85
Mário Sérgio, MEI/PE, 88
Renato Gaúcho, PD/ATA, 91
César, ATA, 84
Tarciso, PE/ATA, 88

Time: Grêmio 1977
Corbo, GOL, 85
Remi, GOL, 75
Cassiá, ZAG, 83
Oberdan, ZAG, 85
Ancheta, ZAG, 86
Vilson, ZAG, 80
Eurico, LD, 84
Rocha, LD, 76
Ladinho, LE, 84
Jorge Vicente, LE, 76
Vitor Hugo, VOL, 83
Zequinha, VOL, 80
Tadeu Ricci, VOL/MEI, 85
Iura, MEI, 87
Leandro, MEI, 77
Tarciso, PD/ATA, 88
Éder Aleixo, PE, 87
André Catimba, ATA, 86
Alcindo, ATA, 84
Zé Augusto, ATA, 76

Time: Grêmio 1977
Formação: 4-3-3
Corbo, GOL, 85
Eurico, LD, 84
Cassiá, ZAG, 83
Oberdan, ZAG, 85
Ladinho, LE, 84
Vitor Hugo, VOL, 83
Tadeu Ricci, VOL/MEI, 85
Iura, MEI, 87
Tarciso, PD/ATA, 88
André Catimba, ATA, 86
Éder Aleixo, PE, 87

Time: Grêmio 1904
Victor Sisson, GOL, 78
Cândido Dias da Silva, GOL/ZAG, 72
Ercolani, ZAG, 76
Otto Schuchard, ZAG, 75
Augusto Koch, ZAG, 70
Francisco Pinto, ZAG, 69
J. R. Roberts, VOL, 79
Pedro Huch, VOL, 77
H. Wood, VOL, 78
Carlos Luiz Bohrer, VOL, 74
João de Castro, VOL, 71
Guilherme Kallfelz, PD, 82
C. L. Moritz, MEI/ATA, 80
A. C. Schuett, ATA, 81
Alberto Cox, ATA, 83
F. M. Esbiteskoski, PE, 79
Leopoldo Olavo Assis, MEI, 73
Henrique Kallfelz, MEI, 74
Oswald Siebel, ATA, 72
Álvaro de Carvalho, ATA, 71

Time: Grêmio 1904
Formação: 2-3-5
Victor Sisson, GOL, 78
Ercolani, ZAG, 76
Otto Schuchard, ZAG, 75
J. R. Roberts, VOL, 79
Pedro Huch, VOL, 77
H. Wood, VOL, 78
Guilherme Kallfelz, PD, 82
C. L. Moritz, MEI/ATA, 80
Alberto Cox, ATA, 83
A. C. Schuett, ATA, 81
F. M. Esbiteskoski, PE, 79

Aqui estão as listas e escalações titulares dos times que você pediu, seguindo exatamente o seu padrão de formatação e refletindo o "overall" de cada jogador com base no desempenho que tiveram naquelas respectivas temporadas:

Time: Athletico-PR 2001
Flávio, GOL, 88
Carlos Miguel, GOL, 75
Nem, ZAG, 87
Gustavo, ZAG, 86
Rogério Corrêa, ZAG, 83
Igor, ZAG, 77
Alessandro, LD, 85
Fabiano, LE, 82
Flávio Luiz, LE, 76
Cocito, VOL, 84
Kléberson, VOL/MEI, 89
Pires, VOL, 79
Donizete Amorim, VOL, 77
Adriano, MEI, 86
Kelly, MEI, 85
Souza, MEI, 81
Alex Mineiro, ATA, 90
Kléber, ATA, 88
Ilan, ATA, 84
Adauto, ATA, 76

Time: Athletico-PR 2001
Formação: 3-5-2
Flávio, GOL, 88
Gustavo, ZAG, 86
Nem, ZAG, 87
Rogério Corrêa, ZAG, 83
Alessandro, LD, 85
Cocito, VOL, 84
Kléberson, VOL/MEI, 89
Kelly, MEI, 85
Fabiano, LE, 82
Kléber, ATA, 88
Alex Mineiro, ATA, 90

Time: Athletico-PR 2019
Santos, GOL, 88
Léo, GOL, 76
Thiago Heleno, ZAG, 86
Léo Pereira, ZAG, 87
Robson Bambu, ZAG, 83
Lucas Halter, ZAG, 77
Jonathan, LD, 83
Khellven, LD, 80
Renan Lodi, LE, 87
Márcio Azevedo, LE, 81
Wellington, VOL, 84
Bruno Guimarães, VOL, 90
Camacho, VOL, 81
Lucho González, VOL/MEI, 83
Nikão, MEI/MD, 86
Léo Cittadini, MEI, 84
Thonny Anderson, MEI, 80
Rony, PE/ATA, 88
Marcelo Cirino, PD/ATA, 85
Marco Ruben, ATA, 84

Time: Athletico-PR 2019
Formação: 4-2-3-1
Santos, GOL, 88
Jonathan, LD, 83
Thiago Heleno, ZAG, 86
Léo Pereira, ZAG, 87
Renan Lodi, LE, 87
Wellington, VOL, 84
Bruno Guimarães, VOL, 90
Marcelo Cirino, PD/ATA, 85
Nikão, MEI/MD, 86
Rony, PE/ATA, 88
Marco Ruben, ATA, 84

Time: Bahia 1959
Nadinho, GOL, 86
Jair, GOL, 75
Henrique, ZAG, 85
Leone, ZAG, 84
Ney, ZAG, 77
Carioca, ZAG, 76
Nenzinho, LD, 81
Bombeiro, LD, 75
Vicente, LE, 82
Beto, VOL, 80
Flávio, VOL, 84
Alexandre, VOL, 76
Mário, MC, 83
Ari, MEI, 78
Marito, PD, 87
Biriba, PE, 85
Alencar, ATA, 88
Léo Briglia, ATA, 89
Hamilton, ATA, 77
Florisvaldo, ATA, 75

Time: Bahia 1959
Formação: 4-2-4
Nadinho, GOL, 86
Nenzinho, LD, 81
Henrique, ZAG, 85
Leone, ZAG, 84
Vicente, LE, 82
Flávio, VOL, 84
Mário, MC, 83
Marito, PD, 87
Alencar, ATA, 88
Léo Briglia, ATA, 89
Biriba, PE, 85

Time: Bahia 1988
Ronaldo, GOL, 87
Sidmar, GOL, 77
João Marcelo, ZAG, 86
Claudir, ZAG, 85
Edinho, ZAG, 79
Pereira, ZAG, 78
Tarantini, LD, 84
Renato, LD, 76
Paulo Robson, LE, 85
Paulo Rodrigues, VOL, 87
Gil, VOL, 84
Sales, VOL, 78
Bobô, MEI, 91
Zé Carlos, MEI, 88
Marquinhos, PD, 86
Charles, ATA, 87
Sandro, ATA, 84
Osmar, PE, 82
Duda, ATA, 77
Cláudio Adão, ATA, 81

Time: Bahia 1988
Formação: 4-4-2
Ronaldo, GOL, 87
Tarantini, LD, 84
João Marcelo, ZAG, 86
Claudir, ZAG, 85
Paulo Robson, LE, 85
Paulo Rodrigues, VOL, 87
Gil, VOL, 84
Bobô, MEI, 91
Zé Carlos, MEI, 88
Marquinhos, PD, 86
Charles, ATA, 87

Time: Sport Recife 1987
Flávio, GOL, 86
Rafael, GOL, 76
Marco Antônio, ZAG, 85
Estevam, ZAG, 84
Augusto, ZAG, 78
Ismael, ZAG, 76
Betão, LD, 82
Baiano, LD, 77
Macaé, LE, 83
Zé Carlos Macaé, LE, 79
Rogério, VOL, 85
Disco, VOL, 77
Ribamar, MEI, 86
Zico, MEI, 84
Afrânio, MEI, 78
Édson, MEI, 75
Robertinho, PD, 86
Neco, PE, 85
Nando, ATA, 87
Guina, ATA, 79

Time: Sport Recife 1987
Formação: 4-3-3
Flávio, GOL, 86
Betão, LD, 82
Estevam, ZAG, 84
Marco Antônio, ZAG, 85
Macaé, LE, 83
Rogério, VOL, 85
Zico, MEI, 84
Ribamar, MEI, 86
Robertinho, PD, 86
Nando, ATA, 87
Neco, PE, 85

Time: Sport Recife 2008
Magrão, GOL, 89
Cleber, GOL, 75
Durval, ZAG, 88
Igor, ZAG, 84
Gabriel, ZAG, 77
Luisinho Netto, LD, 82
Diogo, LD, 76
Dutra, LE, 85
Márcio Goiano, LE, 78
Daniel Paulista, VOL, 84
Sandro Goiano, VOL, 85
Fábio Gomes, VOL, 80
Elias, VOL, 77
Romerito, MEI, 87
Kássio, MEI, 76
Reginaldo, MEI, 75
Carlinhos Bala, ATA, 88
Leandro Machado, ATA, 85
Enílton, ATA, 82
Roger, ATA, 79

Time: Sport Recife 2008
Formação: 4-4-2
Magrão, GOL, 89
Luisinho Netto, LD, 82
Igor, ZAG, 84
Durval, ZAG, 88
Dutra, LE, 85
Daniel Paulista, VOL, 84
Sandro Goiano, VOL, 85
Fábio Gomes, VOL, 80
Romerito, MEI, 87
Carlinhos Bala, ATA, 88
Leandro Machado, ATA, 85

Time: Coritiba 1985
Rafael, GOL, 88
Gerson, GOL, 75
Gomes, ZAG, 86
Heraldo, ZAG, 85
Vavá, ZAG, 79
Cuca, ZAG, 77
André, LD, 83
Marco Aurélio, LD/ZAG, 76
Dida, LE, 84
Paulinho, LE, 78
Almir, VOL, 85
Marildo, VOL, 84
Éliseu, VOL, 76
Tóbi, MEI, 86
Douglas Onça, MEI, 79
Lela, PD, 88
Edson, PE, 83
Índio, ATA, 87
Reinaldo, ATA, 78
Vicente, ATA, 76

Time: Coritiba 1985
Formação: 4-3-3
Rafael, GOL, 88
André, LD, 83
Gomes, ZAG, 86
Heraldo, ZAG, 85
Dida, LE, 84
Almir, VOL, 85
Marildo, VOL, 84
Tóbi, MEI, 86
Lela, PD, 88
Índio, ATA, 87
Edson, PE, 83

Time: Coritiba 2011
Edson Bastos, GOL, 84
Vanderlei, GOL, 80
Emerson, ZAG, 86
Jeci, ZAG, 83
Pereira, ZAG, 81
Cleiton, ZAG, 76
Jonas, LD, 84
Lucas Mendes, LE/ZAG, 82
Eltinho, LE, 80
Léo Gago, VOL, 85
Willian Farias, VOL, 83
Leandro Donizete, VOL, 86
Everton Ribeiro, MEI, 85
Davi, MEI, 84
Rafinha, MEI/PD, 87
Tcheco, MEI, 82
Marcos Aurélio, MEI/ATA, 86
Bill, ATA, 84
Anderson Aquino, ATA, 83
Geraldo, PE, 79

Time: Coritiba 2011
Formação: 4-2-3-1
Edson Bastos, GOL, 84
Jonas, LD, 84
Jeci, ZAG, 83
Emerson, ZAG, 86
Lucas Mendes, LE/ZAG, 82
Léo Gago, VOL, 85
Leandro Donizete, VOL, 86
Rafinha, MEI/PD, 87
Davi, MEI, 84
Marcos Aurélio, MEI/ATA, 86
Bill, ATA, 84

Time: Fortaleza 2022
Fernando Miguel, GOL, 84
Marcelo Boeck, GOL, 78
Titi, ZAG, 85
Marcelo Benevenuto, ZAG, 84
Brítez, ZAG/LD, 83
Ceballos, ZAG, 76
Tinga, LD/ZAG, 86
Yago Pikachu, LD/MD, 88
Juninho Capixaba, LE, 87
Lucas Crispim, MEI/LE, 84
Hércules, VOL, 85
Sasha, VOL, 82
Zé Welison, VOL, 83
Ronald, VOL, 79
Caio Alexandre, VOL, 84
Moisés, PE, 87
Romarinho, ATA, 83
Pedro Rocha, ATA, 84
Thiago Galhardo, ATA, 86
Robson, ATA, 81

Time: Fortaleza 2022
Formação: 3-5-2
Fernando Miguel, GOL, 84
Brítez, ZAG/LD, 83
Marcelo Benevenuto, ZAG, 84
Titi, ZAG, 85
Yago Pikachu, LD/MD, 88
Hércules, VOL, 85
Zé Welison, VOL, 83
Lucas Crispim, MEI/LE, 84
Juninho Capixaba, LE, 87
Moisés, PE, 87
Thiago Galhardo, ATA, 86

Time: Fortaleza 2019
Felipe Alves, GOL, 85
Marcelo Boeck, GOL, 79
Quintero, ZAG, 84
Paulão, ZAG, 83
Jackson, ZAG, 80
Tinga, LD, 85
Gabriel Dias, LD, 79
Carlinhos, LE, 82
Bruno Melo, LE, 81
Felipe, VOL, 86
Juninho, VOL, 85
Derley, VOL, 78
Araruna, VOL, 76
Marlon, MEI, 80
Osvaldo, PE, 86
Edinho, PD, 84
Romarinho, ATA, 83
Wellington Paulista, ATA, 87
Kieza, ATA, 79
André Luis, ATA, 78

Time: Fortaleza 2019
Formação: 4-2-3-1
Felipe Alves, GOL, 85
Tinga, LD, 85
Quintero, ZAG, 84
Paulão, ZAG, 83
Carlinhos, LE, 82
Felipe, VOL, 86
Juninho, VOL, 85
Edinho, PD, 84
Romarinho, ATA, 83
Osvaldo, PE, 86
Wellington Paulista, ATA, 87

Time: Ceará 2015
Éverson, GOL, 84
Luís Carlos, GOL, 77
Charles, ZAG, 82
Sandro, ZAG, 81
Wellington Carvalho, ZAG, 78
Tiago Cametá, LD, 83
Victor Luís, LE, 84
Fernandinho, LE, 77
João Marcos, VOL, 82
Uillian Correia, VOL, 83
Baraka, VOL, 80
Fabinho, VOL, 79
Ricardinho, MEI, 86
Wescley, MEI, 83
Bernardo, MEI, 76
Rafael Costa, ATA, 85
Magno Alves, ATA, 87
Siloé, ATA, 78
Júlio César, ATA, 76
Alex Amado, ATA, 75

Time: Ceará 2015
Formação: 4-4-2
Éverson, GOL, 84
Tiago Cametá, LD, 83
Charles, ZAG, 82
Sandro, ZAG, 81
Victor Luís, LE, 84
João Marcos, VOL, 82
Uillian Correia, VOL, 83
Wescley, MEI, 83
Ricardinho, MEI, 86
Rafael Costa, ATA, 85
Magno Alves, ATA, 87

Time: Ceará 2011
Fernando Henrique, GOL, 84
Diego, GOL, 76
Fabrício, ZAG, 83
Erivelton, ZAG, 81
Thiago Matias, ZAG, 80
Boiadeiro, LD, 84
Vicente, LE, 83
Eusébio, LE/VOL, 79
Michel, VOL, 85
João Marcos, VOL/LD, 84
Heleno, VOL, 80
Juca, VOL, 81
Thiago Humberto, MEI, 83
Geraldo, MEI, 82
Leandro Chaves, MEI, 77
Osvaldo, ATA/PE, 87
Washington, ATA, 85
Marcelo Nicácio, ATA, 84
Felipe Azevedo, ATA, 82
Iarley, ATA, 81

Time: Ceará 2011
Formação: 4-4-2
Fernando Henrique, GOL, 84
Boiadeiro, LD, 84
Fabrício, ZAG, 83
Erivelton, ZAG, 81
Vicente, LE, 83
Michel, VOL, 85
João Marcos, VOL/LD, 84
Thiago Humberto, MEI, 83
Geraldo, MEI, 82
Osvaldo, ATA/PE, 87
Washington, ATA, 85

Time: Vitória 1993
Dida, GOL, 89
Ronaldo, GOL, 75
João Marcelo, ZAG, 85
Rodrigo, ZAG, 83
Dão, ZAG, 80
Jomar, ZAG, 77
Rodrigo, LD, 82
Evandro, LD, 76
China, LE, 83
Renato Martins, LE, 81
Roberto Cavalo, VOL, 86
Vampeta, VOL, 82
Borges, VOL, 78
Paulo Isidoro, MEI, 87
Giuliano, MEI, 84
Gil Sergipano, MEI, 79
Alex Alves, ATA, 89
Claudinho, ATA, 85
Pichetti, ATA, 83
Fabão, ATA, 76

Time: Vitória 1993
Formação: 4-3-3
Dida, GOL, 89
Rodrigo, LD, 82
João Marcelo, ZAG, 85
Rodrigo, ZAG, 83
China, LE, 83
Roberto Cavalo, VOL, 86
Paulo Isidoro, MEI, 87
Giuliano, MEI, 84
Pichetti, ATA, 83
Alex Alves, ATA, 89
Claudinho, ATA, 85

Time: Vitória 2013
Wilson, GOL, 85
Deola, GOL, 76
Victor Ramos, ZAG, 84
Kadu, ZAG, 83
Gabriel Paulista, ZAG, 84
Luiz Gustavo, ZAG, 77
Ayrton, LD, 83
Dimas, LD, 75
Juan, LE, 85
Tarracha, LE, 77
Michel, VOL, 82
Cáceres, VOL, 83
Marcelo, VOL, 78
Escudero, MEI, 86
Renato Cajá, MEI, 83
Vander, MEI/PE, 79
Marquinhos, PE/MEI, 85
Maxi Biancucchi, ATA/PD, 87
Dinei, ATA, 86
William Henrique, ATA, 80

Time: Vitória 2013
Formação: 4-2-3-1
Wilson, GOL, 85
Ayrton, LD, 83
Victor Ramos, ZAG, 84
Kadu, ZAG, 83
Juan, LE, 85
Michel, VOL, 82
Cáceres, VOL, 83
Marquinhos, PE/MEI, 85
Escudero, MEI, 86
Maxi Biancucchi, ATA/PD, 87
Dinei, ATA, 86

Time: Goiás 1990
Eduardo, GOL, 85
Márcio, GOL, 75
Richard, ZAG, 83
Jorge Batata, ZAG, 82
Gomes, ZAG, 78
Rubens, ZAG, 76
Wallace, LD, 81
Wilson Goiano, LD, 80
Lira, LE, 84
Dalton, LE, 77
Fagundes, VOL, 82
Uidemar, VOL, 84
Luvanor, VOL/MEI, 85
Péricles, MEI, 81
Josué, MEI, 83
Carlos Magno, MEI, 79
Formiga, MEI, 78
Niltinho, ATA/PD, 84
Túlio, ATA, 90
Cacau, ATA, 76

Time: Goiás 1990
Formação: 4-4-2
Eduardo, GOL, 85
Wallace, LD, 81
Richard, ZAG, 83
Jorge Batata, ZAG, 82
Lira, LE, 84
Fagundes, VOL, 82
Luvanor, VOL/MEI, 85
Péricles, MEI, 81
Josué, MEI, 83
Niltinho, ATA/PD, 84
Túlio, ATA, 90

Time: Goiás 2005
Harlei, GOL, 87
Kléber, GOL, 75
Júlio Santos, ZAG, 83
André Leone, ZAG, 84
Aldo, ZAG/LD, 81
Rafael, ZAG, 76
Paulo Baier, LD/MD, 89
Vítor, LD, 79
Jadílson, LE/ME, 86
Michel, LE, 77
Cléber Gaúcho, VOL, 84
Danilo Portugal, VOL, 82
Juliano, VOL, 78
Rodrigo Tabata, MEI, 87
Jorge Mutuca, MEI, 81
Romerito, MEI, 83
Roni, ATA, 86
Souza, ATA, 88
Dodô, ATA, 82
Fabiano, ATA, 77

Time: Goiás 2005
Formação: 3-5-2
Harlei, GOL, 87
Aldo, ZAG/LD, 81
Júlio Santos, ZAG, 83
André Leone, ZAG, 84
Paulo Baier, LD/MD, 89
Cléber Gaúcho, VOL, 84
Danilo Portugal, VOL, 82
Rodrigo Tabata, MEI, 87
Jadílson, LE/ME, 86
Roni, ATA, 86
Souza, ATA, 88

Time: Figueirense 2007
Wilson, GOL, 86
Edson Bastos, GOL, 78
Felipe Santana, ZAG, 86
Chicão, ZAG, 87
Asprilla, ZAG, 82
Anderson Luiz, ZAG, 79
Ruy, LD/MD, 84
Peter, LD, 81
André Santos, LE/ME, 87
Carlinhos, LE, 77
Diogo, VOL, 83
Henrique, VOL, 81
Léo, VOL, 76
Cleiton Xavier, MEI, 88
Fernandes, MEI, 85
Ramón, MEI, 80
Victor Simões, ATA, 85
Jean Carlos, ATA, 83
Rafael Coelho, ATA, 78
Alexandre, ATA, 75

Time: Figueirense 2007
Formação: 3-5-2
Wilson, GOL, 86
Asprilla, ZAG, 82
Felipe Santana, ZAG, 86
Chicão, ZAG, 87
Ruy, LD/MD, 84
Diogo, VOL, 83
Fernandes, MEI, 85
Cleiton Xavier, MEI, 88
André Santos, LE/ME, 87
Jean Carlos, ATA, 83
Victor Simões, ATA, 85

Time: Figueirense 2011
Wilson, GOL, 87
Ricardo, GOL, 76
João Paulo, ZAG, 84
Edson Silva, ZAG, 85
Roger Carvalho, ZAG, 82
Renato, ZAG, 78
Bruno, LD, 83
Coutinho, LD, 79
Juninho, LE, 84
Helder, LE, 77
Ygor, VOL, 85
Túlio, VOL, 84
Pittoni, VOL, 79
Elias, MEI, 83
Maicon, MEI/VOL, 85
Fernandes, MEI, 81
Wellington Nem, PE/ATA, 88
Júlio César, ATA, 86
Aloísio, ATA, 84
Reinaldo, ATA, 80

Time: Figueirense 2011
Formação: 4-2-3-1
Wilson, GOL, 87
Bruno, LD, 83
João Paulo, ZAG, 84
Edson Silva, ZAG, 85
Juninho, LE, 84
Ygor, VOL, 85
Túlio, VOL, 84
Elias, MEI, 83
Maicon, MEI/VOL, 85
Wellington Nem, PE/ATA, 88
Júlio César, ATA, 86

Time: Criciúma 1992
Alexandre, GOL, 85
Mocelin, GOL, 75
Vilmar, ZAG, 84
Altair, ZAG, 82
Wilsão, ZAG, 79
Sílvio, ZAG, 76
Sarandi, LD, 83
Omar, LD, 77
Itá, LE, 84
Castelo, LE, 75
Roberto Cavalo, VOL, 86
Gélson, VOL, 83
Zé Roberto, VOL, 78
Emerson, VOL, 77
Grizzo, MEI, 85
Adilson, MEI, 76
Jairo Lenzi, PE/ATA, 87
Soares, ATA, 85
Vanderlei, ATA, 83
Everaldo, ATA, 80

Time: Criciúma 1992
Formação: 4-4-2
Alexandre, GOL, 85
Sarandi, LD, 83
Vilmar, ZAG, 84
Altair, ZAG, 82
Itá, LE, 84
Roberto Cavalo, VOL, 86
Gélson, VOL, 83
Grizzo, MEI, 85
Vanderlei, ATA, 83
Jairo Lenzi, PE/ATA, 87
Soares, ATA, 85

Time: Criciúma 2023
Gustavo, GOL, 84
Alisson, GOL, 76
Rodrigo, ZAG, 85
Walisson Maia, ZAG, 83
Rayan, ZAG, 80
Matheus Mancini, ZAG, 77
Jonathan, LD, 82
Cristovam, LD, 78
Marcelo Hermes, LE/ME, 84
Hélder, LE, 79
Arilson, VOL, 85
Rômulo, VOL, 82
Barreto, VOL, 81
Fellipe Mateus, MEI, 86
Marquinhos Gabriel, MEI, 84
Crystopher, MEI, 79
Fabinho, PE/ATA, 83
Eder, ATA, 85
Felipe Vizeu, ATA, 82
Hygor, ATA/PD, 80

Time: Criciúma 2023
Formação: 4-2-3-1
Gustavo, GOL, 84
Jonathan, LD, 82
Rodrigo, ZAG, 85
Walisson Maia, ZAG, 83
Marcelo Hermes, LE/ME, 84
Arilson, VOL, 85
Rômulo, VOL, 82
Fellipe Mateus, MEI, 86
Marquinhos Gabriel, MEI, 84
Fabinho, PE/ATA, 83
Eder, ATA, 85

Time: Chapecoense 2016
Danilo, GOL, 88
Follmann, GOL, 76
Thiego, ZAG, 85
Neto, ZAG, 84
Filipe Machado, ZAG, 81
Marcelo, ZAG, 79
Gimenez, LD, 83
Mateus Caramelo, LD, 78
Dener, LE, 86
Alan Ruschel, LE/ME, 80
Josimar, VOL, 84
Gil, VOL, 83
Matheus Biteco, VOL, 82
Cleber Santana, MEI, 87
Arthur Maia, MEI, 83
Ananias, PE, 84
Tiaguinho, PD, 85
Lucas Gomes, ATA, 81
Kempes, ATA, 84
Bruno Rangel, ATA, 86

Time: Chapecoense 2016
Formação: 4-2-3-1
Danilo, GOL, 88
Gimenez, LD, 83
Thiego, ZAG, 85
Neto, ZAG, 84
Dener, LE, 86
Josimar, VOL, 84
Gil, VOL, 83
Tiaguinho, PD, 85
Cleber Santana, MEI, 87
Ananias, PE, 84
Kempes, ATA, 84

Time: Chapecoense 2020
João Ricardo, GOL, 86
Keiller, GOL, 76
Joílson, ZAG, 84
Luiz Otávio, ZAG, 86
Derlan, ZAG, 81
Kadu, ZAG, 77
Matheus Ribeiro, LD, 83
Ezequiel, LD, 79
Alan Ruschel, LE/ME, 85
Busanello, LE, 82
Willian Oliveira, VOL, 84
Anderson Leite, VOL, 83
Ronei, VOL, 80
Foguinho, VOL, 78
Denner, MEI, 82
Aylon, PE/ATA, 82
Paulinho Moccelin, PE, 84
Mike, PD, 83
Anselmo Ramon, ATA, 86
Lucas Tocantins, ATA, 80

Time: Chapecoense 2020
Formação: 4-2-3-1
João Ricardo, GOL, 86
Matheus Ribeiro, LD, 83
Joílson, ZAG, 84
Luiz Otávio, ZAG, 86
Alan Ruschel, LE/ME, 85
Willian Oliveira, VOL, 84
Anderson Leite, VOL, 83
Mike, PD, 83
Denner, MEI, 82
Paulinho Moccelin, PE, 84
Anselmo Ramon, ATA, 86

Time: Avaí 2009
Eduardo Martini, GOL, 85
Renan, GOL, 76
Emerson, ZAG, 85
Augusto, ZAG, 83
André Turatto, ZAG, 81
Rafael, ZAG/LD, 82
Luís Ricardo, LD/MD, 83
Uendel, LE, 80
Eltinho, LE, 84
Ferdinando, VOL, 83
Léo Gago, VOL, 84
Marcus Winícius, VOL, 79
Marquinhos, MEI, 88
Caio, MEI/ATA, 82
Odair, MEI, 78
Cristian, MEI, 80
Muriqui, PE/ATA, 87
William, ATA, 85
Roberto, ATA, 81
Leonardo, ATA, 79

Time: Avaí 2009
Formação: 3-5-2
Eduardo Martini, GOL, 85
Rafael, ZAG/LD, 82
Emerson, ZAG, 85
Augusto, ZAG, 83
Luís Ricardo, LD/MD, 83
Ferdinando, VOL, 83
Léo Gago, VOL, 84
Marquinhos, MEI, 88
Eltinho, LE, 84
Muriqui, PE/ATA, 87
William, ATA, 85

Time: Avaí 2011
Renan, GOL, 84
Aleks, GOL, 75
Gian, ZAG, 82
Emerson, ZAG, 83
Gustavo Bastos, ZAG, 79
Cássio, ZAG, 80
Felipe, LD, 81
Arlan, LD, 76
Julinho, LE, 84
Romano, LE, 78
Marcinho Guerreiro, VOL, 82
Batista, VOL, 81
Acleisson, VOL, 79
Diogo Orlando, VOL, 80
Cleverson, MEI, 82
Marquinhos, MEI, 86
Robinho, MEI, 81
William, ATA, 85
Rafael Coelho, ATA, 84
Maurício Alves, ATA, 78

Time: Avaí 2011
Formação: 4-4-2
Renan, GOL, 84
Felipe, LD, 81
Gian, ZAG, 82
Emerson, ZAG, 83
Julinho, LE, 84
Marcinho Guerreiro, VOL, 82
Batista, VOL, 81
Cleverson, MEI, 82
Marquinhos, MEI, 86
Rafael Coelho, ATA, 84
William, ATA, 85

Time: Joinville 2014
Ivan, GOL, 86
Oliveira, GOL, 75
Bruno Aguiar, ZAG, 84
Naldo, ZAG/VOL, 82
Guti, ZAG, 79
Murilo, ZAG, 77
Edson Ratinho, LD, 83
Murilo, LD, 75
Rogério, LE, 81
Wellington Saci, LE/MEI, 82
Marcelo Costa, VOL/MEI, 85
Washington, VOL, 82
Anselmo, VOL, 80
Everton, VOL, 79
Harrison, MEI, 78
Tartá, MEI, 80
Edigar Junio, ATA, 86
Jael, ATA, 85
Fabinho, ATA, 81
Fernando Viana, ATA, 79

Time: Joinville 2014
Formação: 4-2-3-1
Ivan, GOL, 86
Edson Ratinho, LD, 83
Bruno Aguiar, ZAG, 84
Naldo, ZAG/VOL, 82
Rogério, LE, 81
Washington, VOL, 82
Marcelo Costa, VOL/MEI, 85
Wellington Saci, LE/MEI, 82
Edigar Junio, ATA, 86
Fabinho, ATA, 81
Jael, ATA, 85

Time: Joinville 1985
Walter, GOL, 84
Borba Filho, GOL, 76
João Carlos, ZAG, 83
Léo, ZAG, 82
Leandro, ZAG, 79
Adilson, ZAG, 77
João Renato, LD, 84
Carlos Silva, LD, 75
Jacenir, LE, 82
Jorge, LE, 76
Ricardo, VOL, 83
Da Silva, VOL, 78
Nardela, MEI, 88
Vagner, MEI, 80
Geraldo Pereira, MEI/PD, 84
Paulo Egídio, PE/ATA, 85
Wagner, ATA, 83
Kiko, ATA, 79
Lúcio, ATA, 77
Paulinho, ATA, 75

Time: Joinville 1985
Formação: 4-3-3
Walter, GOL, 84
João Renato, LD, 84
João Carlos, ZAG, 83
Léo, ZAG, 82
Jacenir, LE, 82
Ricardo, VOL, 83
Nardela, MEI, 88
Vagner, MEI, 80
Geraldo Pereira, MEI/PD, 84
Paulo Egídio, PE/ATA, 85
Wagner, ATA, 83

Time: Guarani 1978
Neneca, GOL, 87
Gersinho, GOL, 75
Gomes, ZAG, 86
Edson, ZAG, 85
Silvano, ZAG, 79
Alexandre, ZAG, 76
Mauro, LD, 85
Miranda, LE, 84
Cuca, LE, 77
Zé Carlos, VOL, 87
Manguinha, VOL, 80
Renato, MEI, 86
Zenon, MEI, 89
Macedo, MEI, 78
Capitão, PD/ATA, 85
Careca, ATA, 90
Bozó, PE, 86
Gersinho, ATA, 80
Adriano, ATA, 78
Tite, ATA, 75

Time: Guarani 1978
Formação: 4-3-3
Neneca, GOL, 87
Mauro, LD, 85
Gomes, ZAG, 86
Edson, ZAG, 85
Miranda, LE, 84
Zé Carlos, VOL, 87
Renato, MEI, 86
Zenon, MEI, 89
Capitão, PD/ATA, 85
Careca, ATA, 90
Bozó, PE, 86

Time: Guarani 1986
Sérgio Neri, GOL, 86
Marcos Garça, GOL, 75
Ricardo Rocha, ZAG, 90
Fernando, ZAG, 85
Giba, ZAG, 79
Vagner, ZAG, 77
Marco Antônio, LD, 85
Gil Baiano, LD, 78
Zé Mário, LE, 84
Valdir Carioca, LE, 76
Tite, VOL, 86
Tosin, VOL/MC, 85
Vagner, VOL, 79
Marco Antônio Boiadeiro, MEI, 87
Catatau, MEI, 77
Chiquinho, MEI/ATA, 86
João Paulo, PE, 88
Evair, ATA, 91
Carlinhos, ATA, 80
Henrique, ATA, 78

Time: Guarani 1986
Formação: 4-4-2
Sérgio Neri, GOL, 86
Marco Antônio, LD, 85
Ricardo Rocha, ZAG, 90
Fernando, ZAG, 85
Zé Mário, LE, 84
Tite, VOL, 86
Tosin, VOL/MC, 85
Marco Antônio Boiadeiro, MEI, 87
Chiquinho, MEI/ATA, 86
João Paulo, PE, 88
Evair, ATA, 91

Time: Paysandu 2003
Ronaldo, GOL, 86
Carlos Ribeiro, GOL, 75
Jorginho, ZAG, 84
Gino, ZAG, 83
Tinho, ZAG, 80
Sérgio, ZAG, 77
Rodrigo, LD, 82
Wellington, LD, 76
Luís Fernando, LE, 84
Sandro Goiano, VOL, 87
Vanderson, VOL, 85
Rogerinho, VOL, 79
Vélber, MEI, 86
Jóbson, MEI, 82
Lecheva, MEI, 80
Iarley, MEI/ATA, 89
Robson, ATA, 88
Balão, ATA/PE, 84
Albertinho, ATA, 80
Zé Augusto, ATA, 78

Time: Paysandu 2003
Formação: 4-4-2
Ronaldo, GOL, 86
Rodrigo, LD, 82
Jorginho, ZAG, 84
Gino, ZAG, 83
Luís Fernando, LE, 84
Sandro Goiano, VOL, 87
Vanderson, VOL, 85
Vélber, MEI, 86
Jóbson, MEI, 82
Iarley, MEI/ATA, 89
Robson, ATA, 88

Time: Paysandu 1991
Luis Carlos, GOL, 85
João Luiz, GOL, 75
Paulo Cruz, ZAG, 82
Léo, ZAG, 84
Pedrinho, ZAG, 80
Nad, ZAG, 78
Charles, LD, 81
Ronaldo, LD, 75
Lavor, LE, 83
Luizinho, LE, 76
Oberdan, VOL, 84
Flávio Goiano, VOL, 80
Maurício, MEI, 85
Rogerinho, MEI, 82
Dema, MEI, 79
Edilson, PE/ATA, 86
Cacaio, ATA, 87
Vandick, ATA, 85
Mazinho, ATA, 79
Jorginho Macapá, ATA, 77

Time: Paysandu 1991
Formação: 4-4-2
Luis Carlos, GOL, 85
Charles, LD, 81
Paulo Cruz, ZAG, 82
Léo, ZAG, 84
Lavor, LE, 83
Oberdan, VOL, 84
Flávio Goiano, VOL, 80
Maurício, MEI, 85
Rogerinho, MEI, 82
Edilson, PE/ATA, 86
Cacaio, ATA, 87

Time: Portuguesa 1996
Clemer, GOL, 87
Fabiano, GOL, 76
Emerson, ZAG, 86
Marcelo Miguel, ZAG, 85
Jorginho, ZAG, 80
César, ZAG, 77
Valmir, LD, 83
Walmir, LD, 75
Zé Roberto, LE/MEI, 90
Carlos Roberto, LE, 81
Capitão, VOL, 88
Gallo, VOL, 86
Flávio, VOL, 80
Caio, MEI, 84
Rodrigo Fabri, MEI, 89
Tico, ATA/MEI, 83
Alex Alves, ATA, 88
Cleiton, ATA, 81
Marcelinho Paulista, MEI/ATA, 80
Zinho, ATA, 78

Time: Portuguesa 1996
Formação: 4-4-2
Clemer, GOL, 87
Valmir, LD, 83
Emerson, ZAG, 86
Marcelo Miguel, ZAG, 85
Zé Roberto, LE/MEI, 90
Capitão, VOL, 88
Gallo, VOL, 86
Caio, MEI, 84
Rodrigo Fabri, MEI, 89
Alex Alves, ATA, 88
Tico, ATA/MEI, 83

Time: Portuguesa 1950
Muca, GOL, 86
Lindolfo, GOL, 75
Nena, ZAG, 87
Renato, ZAG, 85
Nino, ZAG, 78
Djalma Santos, LD/ZAG, 91
Hélio, LD, 76
Brandãozinho, VOL, 89
Ceci, VOL, 84
Manduco, VOL, 79
Hermínio, VOL, 77
Pinga, MEI/PE, 93
Leopoldo, MEI, 78
Julinho Botelho, PD, 94
Nininho, ATA, 88
Renato, ATA, 85
Simão, PE, 86
Amorim, ATA, 80
Pascoal, ATA, 79
Santo Cristo, ATA, 77

Time: Portuguesa 1950
Formação: 2-3-5
Muca, GOL, 86
Nena, ZAG, 87
Renato, ZAG, 85
Djalma Santos, LD/ZAG, 91
Brandãozinho, VOL, 89
Ceci, VOL, 84
Julinho Botelho, PD, 94
Pinga, MEI/PE, 93
Nininho, ATA, 88
Renato, ATA, 85
Simão, PE, 86
`;

let elencosParaSorteio = []; 
const TODAS_FORMACOES = {
    '4-3-3': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'MC', 'MEI', 'PE', 'ATA', 'PD'], posicoes: { GOL: [50,90], LD:[85,70], ZAG1:[65,72], ZAG2:[35,72], LE:[15,70], VOL:[50,55], MC:[30,48], MEI:[70,48], PE:[20,25], ATA:[50,15], PD:[80,25] } },
    '4-4-2': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'MC', 'ME', 'MD', 'ATA', 'ATA'], posicoes: { GOL: [50,90], LD:[85,70], ZAG1:[65,72], ZAG2:[35,72], LE:[15,70], VOL:[40,50], MC:[60,50], ME:[15,40], MD:[85,40], ATA1:[35,18], ATA2:[65,18] } },
    '4-2-3-1': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'VOL', 'MEI', 'PE', 'PD', 'ATA'], posicoes: { GOL: [50,90], LD:[85,70], ZAG1:[65,72], ZAG2:[35,72], LE:[15,70], VOL1:[35,55], VOL2:[65,55], MEI:[50,38], PE:[15,30], PD:[85,30], ATA:[50,15] } },
    '4-3-2-1': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'MC', 'MC', 'MEI', 'MEI', 'ATA'], posicoes: { GOL: [50,90], LD:[85,72], ZAG1:[65,75], ZAG2:[35,75], LE:[15,72], VOL:[50,55], MC1:[25,50], MC2:[75,50], MEI1:[35,35], MEI2:[65,35], ATA:[50,15] } },
    '4-5-1': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'MC', 'MC', 'ME', 'MD', 'ATA'], posicoes: { GOL: [50,90], LD:[85,72], ZAG1:[65,75], ZAG2:[35,75], LE:[15,72], VOL:[50,58], MC1:[35,45], MC2:[65,45], ME:[15,35], MD:[85,35], ATA:[50,15] } },
    '4-1-4-1': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'VOL', 'ME', 'MC', 'MC', 'MD', 'ATA'], posicoes: { GOL: [50,90], LD:[85,72], ZAG1:[65,75], ZAG2:[35,75], LE:[15,72], VOL:[50,60], ME:[15,40], MC1:[35,40], MC2:[65,40], MD:[85,40], ATA:[50,15] } },
    '3-5-2': { labels: ['GOL', 'ZAG', 'ZAG', 'ZAG', 'VOL', 'VOL', 'ME', 'MD', 'MEI', 'ATA', 'ATA'], posicoes: { GOL: [50,90], ZAG1:[25,75], ZAG2:[50,75], ZAG3:[75,75], VOL1:[35,58], VOL2:[65,58], ME:[15,42], MD:[85,42], MEI:[50,42], ATA1:[35,20], ATA2:[65,20] } },
    '3-4-3': { labels: ['GOL', 'ZAG', 'ZAG', 'ZAG', 'ME', 'MC', 'MC', 'MD', 'PE', 'ATA', 'PD'], posicoes: { GOL: [50,90], ZAG1:[25,75], ZAG2:[50,75], ZAG3:[75,75], ME:[15,50], MC1:[35,50], MC2:[65,50], MD:[85,50], PE:[20,25], ATA:[50,15], PD:[80,25] } },
    '4-2-4': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'LE', 'MC', 'MC', 'PE', 'PD', 'ATA', 'ATA'], posicoes: { GOL: [50,90], LD:[85,70], ZAG1:[65,72], ZAG2:[35,72], LE:[15,70], MC1:[35,50], MC2:[65,50], PE:[15,25], PD:[85,25], ATA1:[40,15], ATA2:[60,15] } },
    '5-3-2': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'ZAG', 'LE', 'MC', 'VOL', 'MC', 'ATA', 'ATA'], posicoes: { GOL: [50,90], LD:[85,75], ZAG1:[65,78], ZAG2:[50,78], ZAG3:[35,78], LE:[15,75], MC1:[25,50], VOL:[50,55], MC2:[75,50], ATA1:[35,20], ATA2:[65,20] } },
    '5-4-1': { labels: ['GOL', 'LD', 'ZAG', 'ZAG', 'ZAG', 'LE', 'ME', 'VOL', 'VOL', 'MD', 'ATA'], posicoes: { GOL: [50,90], LD:[85,75], ZAG1:[65,78], ZAG2:[50,78], ZAG3:[35,78], LE:[15,75], ME:[15,50], VOL1:[35,55], VOL2:[65,55], MD:[85,50], ATA:[50,15] } }
};
const ORDEM_TATICA = ['GOL', 'LD', 'ZAG', 'LE', 'VOL', 'MC', 'ME', 'MD', 'MEI', 'PE', 'PD', 'SA', 'ATA'];

const i18n = {
    pt: { formation: "FORMAÇÃO", mode_diff: "MODO • DIFICULDADE", classic: "Clássico", roll_dice: "ROLAR DADO", rolling: "Rolando os dados...", drawn: "SAIU", reroll: "OUTRO SORTEIO", choose_player: "ESCOLHA UM JOGADOR", cancel: "CANCELAR AÇÃO", box_score: "BOX SCORE", total_ovr: "OVR TOTAL", attack: "ATAQUE", defense: "DEFESA", direct_result: "RESULTADO DIRETO", play_by_play: "LANCE A LANCE", advance: "AVANÇAR", stats: "ESTATÍSTICAS", cup_results: "CHAVEAMENTO", penalties: "PÊNALTIS", settings_btn: "AJUSTES ▾", theme: "Tema:", language: "Idioma:",
        spin_again: "GIRAR NOVAMENTE", lifesaver: "SALVA-VIDAS", no_space: "SEM ESPAÇO! ROLAGEM DE EMERGÊNCIA.", rerolls_left: "NÃO CURTIU? {n} RESTANTES", no_rerolls: "SEM RESORTEIOS", ultimate_no_rerolls: "MODO ULTIMATE (0 RESORTEIOS)", click_pitch: "CLIQUE OBRIGATORIAMENTE NO CAMPO", time_out: "TEMPO ESGOTADO! Jogador aleatório escalado.", go_to_knockout: "IR PARA O MATA-MATA",
        my_team: "MEU TIME", first_leg: "JOGO DE IDA", second_leg: "JOGO DE VOLTA", round_16: "OITAVAS DE FINAL", quarters: "QUARTAS DE FINAL", semis: "SEMI DE FINAL", final: "FINAL", waiting_ref: "Aguardando ordem do juiz...", ref_whistle: "Apita o árbitro! Bola rolando!<br>", goal_me: "GOOOOOOOL DO SEU TIME! {nome} guarda!", goal_cpu: "GOL DA CPU! {nome} marca!", near_miss: "Passou muito perto da trave!", end_90: "Fim dos 90 minutos regulamentares.", quick_sim_end: "Fim de jogo rápido!", agg: "AGR",
        agg_tie: "TUDO IGUAL NO AGREGADO! VAMOS PARA OS PÊNALTIS!", pen_shootout: "DISPUTA DE PÊNALTIS", pen_end: "FIM DA DISPUTA DE PÊNALTIS!", pen_score: "Placar final: Seu Time {a} x {b} CPU.<br>",
        eliminated: "ELIMINADO! Mas você pode ver toda a tabela final na aba ao lado!", advanced: "CLASSIFICADO EMOCIONANTE!", champion: "🏆 PARABÉNS! VOCÊ É O CAMPEÃO HISTÓRICO!", go_to_next: "IR PARA AS {fase}",
        tba: "A definir", wait_goals: "Aguardando gols...", wait_assists: "Aguardando assist...", wait_cs: "Aguardando defesas...", sim_cpu_next: "SIMULAR PRÓXIMA FASE (CPU)", copy_perf: "📋 COPIAR DESEMPENHO", copied: "Texto copiado para a área de transferência!", play_again: "🔄 JOGAR NOVAMENTE", view_bracket: "📊 VER CHAVEAMENTO",
        champ_desc: "Você esculpiu seu nome na história do futebol.", elim_desc: "A zebra solta não perdoa ninguém.",
        artilharia: "⚽ ARTILHARIA", assistencias: "👟 ASSISTÊNCIAS", clean_sheets: "🧤 CLEAN SHEETS",
        pos_GOL: "GOL", pos_LD: "LD", pos_ZAG: "ZAG", pos_LE: "LE", pos_VOL: "VOL", pos_MC: "MC", pos_ME: "ME", pos_MD: "MD", pos_MEI: "MEI", pos_PE: "PE", pos_PD: "PD", pos_SA: "SA", pos_ATA: "ATA", share_text: "🏆 [7-0 BRASIL - COPA HISTÓRICA]\n\nMontei meu esquadrão tático com: {nomes}.\nDesempenho: {status}!\nOVR Total: {ovr}\n\nJogue também: https://7a0-historico.vercel.app"
    },
    en: {
        formation: "FORMATION", mode_diff: "MODE • DIFFICULTY", classic: "Classic", roll_dice: "ROLL DICE", rolling: "Rolling dice...", drawn: "DRAWN", reroll: "REROLL", choose_player: "CHOOSE A PLAYER", cancel: "CANCEL ACTION", box_score: "BOX SCORE", total_ovr: "TOTAL OVR", attack: "ATTACK", defense: "DEFENSE", direct_result: "QUICK SIM", play_by_play: "PLAY-BY-PLAY", advance: "ADVANCE", stats: "STATS", cup_results: "BRACKET", penalties: "SHOOTOUT", settings_btn: "SETTINGS ▾", theme: "Theme:", language: "Language:",
        spin_again: "SPIN AGAIN", lifesaver: "LIFESAVER", no_space: "NO SPACE! EMERGENCY ROLL.", rerolls_left: "NOT HAPPY? {n} LEFT", no_rerolls: "NO REROLLS", ultimate_no_rerolls: "ULTIMATE MODE (0 REROLLS)", click_pitch: "YOU MUST CLICK ON THE PITCH", time_out: "TIME OUT! Random player assigned.", go_to_knockout: "GO TO KNOCKOUTS",
        my_team: "MY TEAM", first_leg: "FIRST LEG", second_leg: "SECOND LEG", round_16: "ROUND OF 16", quarters: "QUARTER-FINALS", semis: "SEMI-FINALS", final: "FINAL", waiting_ref: "Waiting for the referee...", ref_whistle: "The referee whistles! We are underway!<br>", goal_me: "GOOOOOOOL FOR YOUR TEAM! {nome} scores!", goal_cpu: "CPU GOAL! {nome} scores!", near_miss: "A near miss! Very close!", end_90: "End of 90 minutes.", quick_sim_end: "Quick simulation finished!", agg: "AGG",
        agg_tie: "TIED ON AGGREGATE! WE GO TO PENALTIES!", pen_shootout: "PENALTY SHOOTOUT", pen_end: "PENALTY SHOOTOUT ENDS!", pen_score: "Final Score: Your Team {a} x {b} CPU.<br>",
        eliminated: "ELIMINATED! Check the rest of the bracket on the side tab!", advanced: "THRILLING QUALIFICATION!", champion: "🏆 CONGRATULATIONS! YOU ARE THE HISTORIC CHAMPION!", go_to_next: "GO TO {fase}",
        tba: "TBD", wait_goals: "Waiting for goals...", wait_assists: "Waiting for assists...", wait_cs: "Waiting for clean sheets...", sim_cpu_next: "SIM NEXT ROUND (CPU)", copy_perf: "📋 COPY PERFORMANCE", copied: "Text copied to clipboard!", play_again: "🔄 PLAY AGAIN", view_bracket: "📊 VIEW BRACKET",
        champ_desc: "You have carved your name in football history.", elim_desc: "The underdog spares no one.",
        artilharia: "⚽ TOP SCORERS", assistencias: "👟 ASSISTS", clean_sheets: "🧤 CLEAN SHEETS",
        pos_GOL: "GK", pos_LD: "RB", pos_ZAG: "CB", pos_LE: "LB", pos_VOL: "CDM", pos_MC: "CM", pos_ME: "LM", pos_MD: "RM", pos_MEI: "CAM", pos_PE: "LW", pos_PD: "RW", pos_SA: "CF", pos_ATA: "ST", share_text: "🏆 [7-0 BRAZIL - HISTORIC CUP]\n\nBuilt my dream team: {nomes}.\nPerformance: {status}!\nTotal OVR: {ovr}\n\nPlay now: https://7a0-historico.vercel.app"
    },
    es: {
        formation: "FORMACIÓN", mode_diff: "MODO • DIFICULTAD", classic: "Clásico", roll_dice: "LANZAR DADO", rolling: "Lanzando dados...", drawn: "SORTEADO", reroll: "OTRO SORTEO", choose_player: "ELIGE JUGADOR", cancel: "CANCELAR ACCIÓN", box_score: "BOX SCORE", total_ovr: "GRL TOTAL", attack: "ATAQUE", defense: "DEFENSA", direct_result: "RESULTADO RÁPIDO", play_by_play: "JUGADA A JUGADA", advance: "AVANZAR", stats: "ESTADÍSTICAS", cup_results: "CUADRO", penalties: "PENALES", settings_btn: "AJUSTES ▾", theme: "Tema:", language: "Idioma:",
        spin_again: "GIRAR DE NUEVO", lifesaver: "SALVAVIDAS", no_space: "¡SIN ESPACIO! TIRO DE EMERGENCIA.", rerolls_left: "¿NO TE GUSTA? {n} RESTAN", no_rerolls: "SIN SORTEOS", ultimate_no_rerolls: "MODO ULTIMATE (0 SORTEOS)", click_pitch: "DEBES HACER CLIC EN EL CAMPO", time_out: "¡TIEMPO AGOTADO! Jugador aleatorio asignado.", go_to_knockout: "IR A ELIMINATORIAS",
        my_team: "MI EQUIPO", first_leg: "PARTIDO DE IDA", second_leg: "PARTIDO DE VUELTA", round_16: "OCTAVOS DE FINAL", quarters: "CUARTOS DE FINAL", semis: "SEMIFINALES", final: "FINAL", waiting_ref: "Esperando al árbitro...", ref_whistle: "¡El árbitro pita! ¡Rueda la pelota!<br>", goal_me: "¡GOOOOOOOL DE TU EQUIPO! ¡{nome} anota!", goal_cpu: "¡GOL DE LA CPU! ¡{nome} marca!", near_miss: "¡Pasó rozando el poste!", end_90: "Fin de los 90 minutos.", quick_sim_end: "¡Simulación rápida finalizada!", agg: "GLO",
        agg_tie: "¡EMPATE GLOBAL! ¡VAMOS A LOS PENALES!", pen_shootout: "TANDA DE PENALES", pen_end: "¡FIN DE LOS PENALES!", pen_score: "Marcador Final: Tu Equipo {a} x {b} CPU.<br>",
        eliminated: "¡ELIMINADO! ¡Mira el resto del torneo en la pestaña lateral!", advanced: "¡CLASIFICACIÓN EMOCIONANTE!", champion: "🏆 ¡FELICIDADES! ¡ERES EL CAMPEÓN HISTÓRICO!", go_to_next: "IR A {fase}",
        tba: "Por definir", wait_goals: "Esperando goles...", wait_assists: "Esperando asist...", wait_cs: "Esperando porterías a cero...", sim_cpu_next: "SIMULAR SIGUIENTE (CPU)", copy_perf: "📋 COPIAR DESEMPEÑO", copied: "¡Texto copiado al portapapeles!", play_again: "🔄 JUGAR DE NUEVO", view_bracket: "📊 VER CUADRO",
        champ_desc: "Has esculpido tu nombre en la historia del fútbol.", elim_desc: "La sorpresa no perdona a nadie.",
        artilharia: "⚽ GOLEADORES", assistencias: "👟 ASISTENCIAS", clean_sheets: "🧤 PORTERÍAS IMBATIDAS",
        pos_GOL: "POR", pos_LD: "LD", pos_ZAG: "DFC", pos_LE: "LI", pos_VOL: "MCD", pos_MC: "MC", pos_ME: "MI", pos_MD: "MD", pos_MEI: "MCO", pos_PE: "EI", pos_PD: "ED", pos_SA: "SD", pos_ATA: "DC", share_text: "🏆 [7-0 BRASIL - COPA HISTÓRICA]\n\nArmé mi equipo soñado: {nomes}.\nRendimiento: ¡{status}!\nGRL Total: {ovr}\n\nJuega tú también: https://7a0-historico.vercel.app"
    }
};

let currentLang = 'pt';
function t(key, params = {}) {
    let text = i18n[currentLang][key] || key;
    for (let p in params) text = text.replace(`{${p}}`, params[p]);
    return text;
}

let meuTime = {}; let meuTimeIds = new Set(); let formacaoAtual = '4-3-3'; let resorteiosRestantes = 3; let modoUltimate = false; let faseDePlacement = false; let jogadorSendoPosicionado = null; let timeSorteadoAtual = null; let roletaAnimando = false; let jogoIniciado = false; 
let draftTimer; let timeLeft = 30;

let statsCopa = { artilheiros: {}, garcons: {}, cleanSheets: {} };
let poolEquipesCopa = []; let chavesChampionship = { 'OITAVAS': [], 'QUARTAS': [], 'SEMI': [], 'FINAL': [] }; 
let partidaAtual = { fase: 'OITAVAS', jogo: 1, golsMeus: 0, golsCpu: 0, agregadoMeus: 0, agregadoCpu: 0 };
let cpuAtual = null; let meuOvrTorneio = 0; let narracaoInterval = null;
let eventosPartidaAtual = { meuTime: { gols: {}, assistencias: {} }, cpu: { gols: {}, assistencias: {} } };
let playerEliminado = false; let torneioFinalizado = false;

function gerarIdJogador(jogador) { return `${jogador.nome}_${jogador.timeOrigem}`; }
function verificarSeECloneDoElenco(jogador) { return Object.values(meuTime).some(j => j.nome === jogador.nome && j.posicoes.some(p => jogador.posicoes.includes(p))); }

processarBancoDeDados(); desenharFormacao(); atualizarBoxScore();

// SETTINGS & IDIOMAS FIX (Segurança contra chamadas de UI antes da Copa)
function toggleSettings() { document.getElementById("settings-dropdown").classList.toggle("hidden"); }
function toggleTheme() { const body = document.querySelector('.app-layout'); body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark'; }

function changeLanguage(lang, btn) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { 
        const key = el.getAttribute('data-i18n'); if(i18n[lang][key]) el.innerText = i18n[lang][key]; 
    });
    updateDynamicTexts();
}

function updateDynamicTexts() {
    document.getElementById("btn-roleta").innerText = jogoIniciado ? t("spin_again") : t("roll_dice");
    document.getElementById("dica-acao").innerText = faseDePlacement ? t("click_pitch") : t("choose_player");
    if(document.getElementById("lbl-resorteios-restantes")) {
        document.getElementById("lbl-resorteios-restantes").innerText = resorteiosRestantes > 0 ? t("rerolls_left", {n: resorteiosRestantes}) : (modoUltimate ? t("ultimate_no_rerolls") : t("no_rerolls"));
    }
    document.getElementById("sim-nome-t1").innerText = t("my_team");
    let mapFases = { 'OITAVAS': 'round_16', 'QUARTAS': 'quarters', 'SEMI': 'semis', 'FINAL': 'final' };
    document.getElementById("fase-torneio").innerText = t(mapFases[partidaAtual.fase] || partidaAtual.fase);
    document.getElementById("info-ida-volta").innerText = partidaAtual.jogo === 1 ? t("first_leg") : t("second_leg");
    document.getElementById("sim-agregado").innerText = `${t("agg")}: ${partidaAtual.agregadoMeus} - ${partidaAtual.agregadoCpu}`;
    
    desenharFormacao(); atualizarBoxScore();
    if(cpuAtual) { // TRAVA DE SEGURANÇA (Só atualiza telas da Copa se tiver rolando a Copa)
        renderizarEscalacoesPainel(); 
        renderizarRankingsCopa(); 
        renderizarBracket();
    }
}

function processarBancoDeDados() {
    elencosParaSorteio = []; 
    const blocosDeTimes = textoBrutoDosTimes.split("Time:").filter(bloco => bloco.trim() !== "");
    blocosDeTimes.forEach(bloco => {
        const linhas = bloco.trim().split('\n');
        const nomeDoTime = linhas[0].trim();
        const eTimeTitular = linhas.some(linha => linha.includes("Formação:"));
        if (!eTimeTitular) {
            const jogadores = [];
            for (let i = 1; i < linhas.length; i++) {
                const linhaAtual = linhas[i].trim();
                if (linhaAtual !== "" && linhaAtual.split(',').length >= 3) {
                    const dados = linhaAtual.split(',');
                    jogadores.push({ nome: dados[0].trim(), posicoes: dados[1].trim().split('/'), overall: parseInt(dados[2].trim()), timeOrigem: nomeDoTime });
                }
            }
            if (jogadores.length > 0) elencosParaSorteio.push({ nome: nomeDoTime, elenco: jogadores });
        }
    });
}

function mudarFormacao(novaFormacao, botaoElemento) {
    if (jogoIniciado) return; formacaoAtual = novaFormacao; document.getElementById("config-tactic").innerText = novaFormacao;
    document.querySelectorAll('.btn-formacao').forEach(b => b.classList.remove('active')); botaoElemento.classList.add('active');
    desenharFormacao(); atualizarBoxScore();
}

function mudarModo(novoModo, botaoElemento) {
    if (jogoIniciado) return; modoUltimate = (novoModo === 'Ultimate'); resorteiosRestantes = modoUltimate ? 0 : 3;
    document.getElementById("config-mode").innerText = novoModo === 'Ultimate' ? 'ULTIMATE' : t("classic").toUpperCase();
    document.querySelectorAll('.btn-modo').forEach(b => b.classList.remove('active')); botaoElemento.classList.add('active');
    desenharFormacao(); atualizarBoxScore();
}

function desenharFormacao() {
    const fieldArea = document.getElementById("field-slots"); fieldArea.innerHTML = ""; 
    const def = TODAS_FORMACOES[formacaoAtual]; const posKeys = Object.keys(def.posicoes);
    for (let i = 0; i < posKeys.length; i++) {
        const key = posKeys[i]; const [x, y] = def.posicoes[key]; const label = t('pos_'+def.labels[i]);
        const slotDiv = document.createElement("div"); slotDiv.className = "field-slot"; slotDiv.id = `slot-${key}`;
        if (meuTime[key]) {
            slotDiv.classList.add("filled"); const partesNome = meuTime[key].nome.split(' '); const nomeCurto = partesNome.length > 1 ? partesNome[partesNome.length - 1] : meuTime[key].nome;
            if (modoUltimate) slotDiv.innerHTML = `<span class="pos-only">${label}</span><span class="player-pitch-name">${nomeCurto}</span>`;
            else slotDiv.innerHTML = `<span class="ovr-only">${meuTime[key].overall}</span><span class="player-pitch-name">${nomeCurto}</span>`;
        } else slotDiv.innerText = label;
        slotDiv.style.left = `${x}%`; slotDiv.style.top = `${y}%`; fieldArea.appendChild(slotDiv);
    }
}

function iniciarTimerUltimate() {
    if(!modoUltimate) return;
    document.getElementById("timer-box").classList.remove("hidden");
    timeLeft = 30; document.getElementById("timer-sec").innerText = timeLeft;
    clearInterval(draftTimer);
    draftTimer = setInterval(() => {
        timeLeft--; document.getElementById("timer-sec").innerText = timeLeft;
        if(timeLeft <= 0) { clearInterval(draftTimer); forcarSorteioAleatorio(); }
    }, 1000);
}

function forcarSorteioAleatorio() {
    cancelPlacement(); alert(t("time_out"));
    const def = TODAS_FORMACOES[formacaoAtual]; const posKeys = Object.keys(def.posicoes);
    let slotsVazios = posKeys.filter(k => !meuTime[k]); if(slotsVazios.length === 0) return;
    let slotAlvo = slotsVazios[0]; let labelAlvo = def.labels[posKeys.indexOf(slotAlvo)];
    
    let jogadoresPossiveis = [];
    elencosParaSorteio.forEach(time => { time.elenco.forEach(jog => { if(jog.posicoes.includes(labelAlvo) && !verificarSeECloneDoElenco(jog)) jogadoresPossiveis.push(jog); }); });
    if(jogadoresPossiveis.length > 0) placePlayerInSlot(slotAlvo, jogadoresPossiveis[Math.floor(Math.random() * jogadoresPossiveis.length)]);
    else placePlayerInSlot(slotAlvo, elencosParaSorteio[0].elenco[0]);
}

function girarRoleta() {
    if (roletaAnimando) return; if (Object.keys(meuTime).length >= Object.keys(TODAS_FORMACOES[formacaoAtual].posicoes).length) return;
    if (!jogoIniciado) {
        jogoIniciado = true; document.getElementById("config-options").style.display = "none";
        document.getElementById("container-btn-rolar").style.marginTop = "0"; document.getElementById("btn-roleta").innerText = t("spin_again");
    }
    document.getElementById("view-config").classList.add("hidden"); document.getElementById("view-draft").classList.remove("hidden");
    iniciarAnimacaoSorteio();
}

function resortear() {
    if (roletaAnimando) return;
    if (document.getElementById("btn-resorteio").innerText !== t("lifesaver")) { if (resorteiosRestantes > 0) resorteiosRestantes--; }
    clearInterval(draftTimer); document.getElementById("timer-box").classList.add("hidden");
    iniciarAnimacaoSorteio();
}

function iniciarAnimacaoSorteio() {
    roletaAnimando = true; document.getElementById("draft-content").classList.add("hidden"); document.getElementById("animacao-sorteio").classList.remove("hidden");
    let iteracoes = 0; const elementoNomeTemp = document.getElementById("nome-time-sorteado-anim");
    const intervalo = setInterval(() => {
        if(elencosParaSorteio.length === 0) return;
        const tempIndex = Math.floor(Math.random() * elencosParaSorteio.length);
        elementoNomeTemp.innerText = elencosParaSorteio[tempIndex].nome; iteracoes++;
        if (iteracoes > 12) { clearInterval(intervalo); finalizarSorteio(); }
    }, 100);
}

function finalizarSorteio() {
    const timesComJogadaValida = elencosParaSorteio.filter(time => { return time.elenco.some(jogador => { return !verificarSeECloneDoElenco(jogador) && obterSlotsValidos(jogador.posicoes).length > 0; }); });
    const poolDeSorteio = timesComJogadaValida.length > 0 ? timesComJogadaValida : elencosParaSorteio;
    const indice = Math.floor(Math.random() * poolDeSorteio.length); timeSorteadoAtual = poolDeSorteio[indice];
    
    document.getElementById("nome-time-sorteado").innerText = timeSorteadoAtual.nome;
    document.getElementById("animacao-sorteio").classList.add("hidden"); document.getElementById("draft-content").classList.remove("hidden");
    
    let temJogadaValida = false;
    timeSorteadoAtual.elenco.forEach(jogador => { if (!verificarSeECloneDoElenco(jogador) && obterSlotsValidos(jogador.posicoes).length > 0) temJogadaValida = true; });

    const btnResorteio = document.getElementById("btn-resorteio"); const lblResorteio = document.getElementById("lbl-resorteios-restantes");
    btnResorteio.classList.remove("emergencia");
    if (!temJogadaValida) {
        btnResorteio.disabled = false; btnResorteio.innerText = t("lifesaver"); btnResorteio.classList.add("emergencia"); lblResorteio.innerText = t("no_space");
    } else {
        if (resorteiosRestantes > 0) { btnResorteio.disabled = false; btnResorteio.innerText = t("reroll"); lblResorteio.innerText = t("rerolls_left", {n: resorteiosRestantes}); } 
        else { btnResorteio.disabled = true; btnResorteio.innerText = t("no_rerolls"); lblResorteio.innerText = modoUltimate ? t("ultimate_no_rerolls") : t("no_rerolls"); }
    }
    renderizarListaDeJogadores(); roletaAnimando = false; iniciarTimerUltimate();
}

function obterSlotsValidos(posicoesJogador) {
    const def = TODAS_FORMACOES[formacaoAtual]; const posKeys = Object.keys(def.posicoes); const slotsValidos = [];
    for (let i = 0; i < posKeys.length; i++) {
        const key = posKeys[i]; const label = def.labels[i];
        if (!meuTime[key] && posicoesJogador.includes(label)) slotsValidos.push(key);
    }
    return slotsValidos;
}

function renderizarListaDeJogadores() {
    const container = document.getElementById("lista-jogadores-draft"); container.innerHTML = ""; 
    timeSorteadoAtual.elenco.forEach((jogador) => {
        const isDuplicate = verificarSeECloneDoElenco(jogador);
        const slotsValidos = obterSlotsValidos(jogador.posicoes); const temEspaco = slotsValidos.length > 0;
        let rowClass = "player-row"; let onclick = "";

        if (isDuplicate) rowClass += " duplicate"; else if (!temEspaco) rowClass += " blocked"; 
        else { const safeData = JSON.stringify(jogador).replace(/"/g, '&quot;'); onclick = `selectForPlacement(${safeData}, this)`; }
        const valorOvr = modoUltimate ? '?' : jogador.overall; 
        
        let posTraduzidas = jogador.posicoes.map(p => t('pos_'+p)).join('/');
        container.innerHTML += `<div class="${rowClass}" onclick="${onclick}"><span class="p-name">${jogador.nome}</span><span class="p-pos">${posTraduzidas}</span><span class="p-ovr">${valorOvr}</span></div>`;
    });
}

function selectForPlacement(playerData, element) {
    const slots = document.getElementsByClassName("field-slot");
    for (let s of slots) { s.classList.remove("valid-empty"); s.onclick = null; }
    document.querySelectorAll('.player-row').forEach(r => r.classList.remove('selected-card')); element.classList.add('selected-card');

    faseDePlacement = true; jogadorSendoPosicionado = playerData; 
    document.getElementById("dica-acao").innerText = t("click_pitch");
    document.getElementById("btn-cancel-placement").classList.remove("hidden");
    const slotsValidos = obterSlotsValidos(playerData.posicoes);
    slotsValidos.forEach(key => { const slot = document.getElementById(`slot-${key}`); slot.classList.add("valid-empty"); slot.onclick = () => placePlayerInSlot(key, playerData); });
}

function cancelPlacement() {
    faseDePlacement = false; jogadorSendoPosicionado = null; 
    document.getElementById("dica-acao").innerText = t("choose_player");
    document.getElementById("btn-cancel-placement").classList.add("hidden");
    document.querySelectorAll('.player-row').forEach(r => r.classList.remove('selected-card'));
    const slots = document.getElementsByClassName("field-slot");
    for (let slot of slots) { slot.classList.remove("valid-empty"); slot.onclick = null; }
}

function placePlayerInSlot(slotId, playerData) {
    meuTime[slotId] = playerData; meuTimeIds.add(gerarIdJogador(playerData)); 
    clearInterval(draftTimer); document.getElementById("timer-box").classList.add("hidden");
    desenharFormacao(); atualizarBoxScore(); cancelPlacement();
    document.getElementById("view-draft").classList.add("hidden"); document.getElementById("view-config").classList.remove("hidden");
    if (Object.keys(meuTime).length === Object.keys(TODAS_FORMACOES[formacaoAtual].posicoes).length) {
        document.getElementById("btn-roleta").innerText = t("go_to_knockout"); document.getElementById("btn-roleta").onclick = prepararTorneio; 
    }
}

function atualizarBoxScore() {
    const list = document.getElementById("box-score-list"); list.innerHTML = ""; 
    const numPlayers = Object.keys(meuTime).length; document.getElementById("time-total-ovr").innerText = `${numPlayers}/11`;
    const def = TODAS_FORMACOES[formacaoAtual]; const posKeys = Object.keys(def.posicoes);
    let somaTotal = 0, countTotal = 0, somaAtaque = 0, countAtaque = 0, somaDefesa = 0, countDefesa = 0;
    const posicoesDefensivas = ['GOL', 'ZAG', 'LD', 'LE', 'VOL'];
    for (let i = 0; i < posKeys.length; i++) {
        const key = posKeys[i]; const label = def.labels[i];
        if (meuTime[key]) {
            const over = meuTime[key].overall; somaTotal += over; countTotal++;
            if (posicoesDefensivas.includes(label)) { somaDefesa += over; countDefesa++; } else { somaAtaque += over; countAtaque++; }
            const displayOvrBox = modoUltimate ? '?' : over;
            list.innerHTML += `<div class="boxscore-row"><strong>${t('pos_'+label)}</strong> <span>${meuTime[key].nome}</span> <strong>${displayOvrBox}</strong></div>`;
        } else list.innerHTML += `<div class="boxscore-row"><strong>${t('pos_'+label)}</strong> <span>—</span> —</div>`;
    }
    document.getElementById("val-ovr-total").innerText = modoUltimate && countTotal > 0 ? '?' : (countTotal > 0 ? Math.floor(somaTotal / countTotal) : 0);
    document.getElementById("val-ovr-ataque").innerText = modoUltimate && countAtaque > 0 ? '?' : (countAtaque > 0 ? Math.floor(somaAtaque / countAtaque) : 0);
    document.getElementById("val-ovr-defesa").innerText = modoUltimate && countDefesa > 0 ? '?' : (countDefesa > 0 ? Math.floor(somaDefesa / countDefesa) : 0);
}

// ==========================================
// CENTRAL DO TORNEIO E CHAVEAMENTO
// ==========================================

function mudarAbaStats(aba) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById("conteudo-aba-stats").classList.add("hidden"); document.getElementById("conteudo-aba-tabela").classList.add("hidden");
    const layout = document.getElementById("layout-torneio-mestre");

    if(aba === 'stats') { 
        document.getElementById("conteudo-aba-stats").classList.remove("hidden"); 
        event.currentTarget.classList.add('active'); 
        layout.classList.remove("full-bracket");
    } else { 
        document.getElementById("conteudo-aba-tabela").classList.remove("hidden"); 
        event.currentTarget.classList.add('active'); 
        layout.classList.add("full-bracket");
        renderizarBracket(); 
    }
}

function prepararTorneio() {
    let soma = 0; Object.values(meuTime).forEach(j => soma += j.overall);
    meuOvrTorneio = Math.floor(soma / 11);
    montarLoteEquipesCopa(); 
    let meuDuelo = chavesChampionship['OITAVAS'].find(c => c.t1.ePlayer || c.t2.ePlayer);
    cpuAtual = meuDuelo.t1.ePlayer ? meuDuelo.t2 : meuDuelo.t1;
    document.getElementById("tela-tabuleiro").style.setProperty("display", "none", "important");
    document.getElementById("view-mata-mata").classList.remove("hidden");
    configurarTelaPartida(); renderizarRankingsCopa();
}

function montarLoteEquipesCopa() {
    poolEquipesCopa = [{ nome: t("my_team"), ovr: meuOvrTorneio, titulares: Object.values(meuTime), ePlayer: true }];
    let poolTimes = [...elencosParaSorteio]; let nomesEscolhidos = Object.values(meuTime).map(j => j.nome);

    for(let i=0; i<15; i++) {
        if(poolTimes.length === 0) processarBancoDeDados();
        let idx = Math.floor(Math.random() * poolTimes.length);
        let timeSorteado = poolTimes.splice(idx, 1)[0];
        let elencoFiltrado = timeSorteado.elenco.filter(j => !nomesEscolhidos.includes(j.nome));
        if(elencoFiltrado.length === 0) elencoFiltrado = timeSorteado.elenco;
        
        elencoFiltrado.sort((a,b) => b.overall - a.overall); let tits = elencoFiltrado.slice(0, 11);
        tits.sort((a,b) => ORDEM_TATICA.indexOf(a.posicoes[0]) - ORDEM_TATICA.indexOf(b.posicoes[0]));
        
        let ovrTime = Math.floor(tits.reduce((s, j) => s + j.overall, 0) / 11);
        poolEquipesCopa.push({ nome: timeSorteado.nome, ovr: ovrTime, titulares: tits, ePlayer: false });
    }
    chavesChampionship = { 'OITAVAS': [], 'QUARTAS': [], 'SEMI': [], 'FINAL': [] };
    for(let i=0; i<16; i+=2) chavesChampionship['OITAVAS'].push({ t1: poolEquipesCopa[i], t2: poolEquipesCopa[i+1], simulado: false });
}

function renderizarEscalacoesPainel() {
    const listMe = document.getElementById("lista-titulares-meu"); listMe.innerHTML = ""; const def = TODAS_FORMACOES[formacaoAtual];
    Object.keys(def.posicoes).forEach((key, i) => {
        const label = t('pos_'+def.labels[i]); const jogador = meuTime[key];
        if (jogador) {
            let icones = ""; let g = eventosPartidaAtual.meuTime.gols[jogador.nome] || 0; let a = eventosPartidaAtual.meuTime.assistencias[jogador.nome] || 0;
            if(g > 0) icones += " ⚽".repeat(g); if(a > 0) icones += " 👟".repeat(a);
            const displayOvr = modoUltimate ? '?' : jogador.overall;
            listMe.innerHTML += `<div class="linha-titular-sim"><div class="p-info"><strong>${label}</strong> <span class="p-nome-txt">${jogador.nome}</span> <span class="p-icons">${icones}</span></div><span class="p-ovr">${displayOvr}</span></div>`;
        }
    });

    const listCpu = document.getElementById("lista-titulares-cpu"); listCpu.innerHTML = "";
    if (cpuAtual && cpuAtual.titulares) {
        cpuAtual.titulares.forEach(jogador => {
            let icones = ""; let g = eventosPartidaAtual.cpu.gols[jogador.nome] || 0; let a = eventosPartidaAtual.cpu.assistencias[jogador.nome] || 0;
            if(g > 0) icones += " ⚽".repeat(g); if(a > 0) icones += " 👟".repeat(a);
            listCpu.innerHTML += `<div class="linha-titular-sim"><div class="p-info"><strong>${t('pos_'+jogador.posicoes[0])}</strong> <span class="p-nome-txt">${jogador.nome}</span> <span class="p-icons">${icones}</span></div></div>`;
        });
    }
}

function configurarTelaPartida() {
    eventosPartidaAtual = { meuTime: { gols: {}, assistencias: {} }, cpu: { gols: {}, assistencias: {} } };
    document.getElementById("sim-nome-t1").innerText = t("my_team"); document.getElementById("sim-ovr-t1").innerText = `OVR ${meuOvrTorneio}`;
    document.getElementById("sim-placar-t1").innerText = "0"; document.getElementById("sim-pen-t1").classList.add("hidden");
    
    if (cpuAtual) {
        document.getElementById("sim-nome-t2").innerText = cpuAtual.nome.toUpperCase(); document.getElementById("sim-ovr-t2").innerText = `OVR ${cpuAtual.ovr}`;
    }
    document.getElementById("sim-placar-t2").innerText = "0"; document.getElementById("sim-pen-t2").classList.add("hidden");
    document.getElementById("painel-penaltis").classList.add("hidden");
    
    let mapFases = { 'OITAVAS': 'round_16', 'QUARTAS': 'quarters', 'SEMI': 'semis', 'FINAL': 'final' };
    document.getElementById("info-ida-volta").innerText = partidaAtual.jogo === 1 ? t("first_leg") : t("second_leg");
    document.getElementById("fase-torneio").innerText = t(mapFases[partidaAtual.fase]);
    document.getElementById("painel-narracao").classList.add("hidden"); 
    
    renderizarEscalacoesPainel();
    if (partidaAtual.jogo === 2) { document.getElementById("sim-agregado").classList.remove("hidden"); document.getElementById("sim-agregado").innerText = `${t("agg")}: ${partidaAtual.agregadoMeus} - ${partidaAtual.agregadoCpu}`; } 
    else document.getElementById("sim-agregado").classList.add("hidden");
    document.getElementById("controles-simulacao").classList.remove("hidden"); document.getElementById("btn-avancar-fase").classList.add("hidden");
}

function simularDireto() {
    document.getElementById("controles-simulacao").classList.add("hidden");
    document.getElementById("painel-narracao").classList.add("hidden");
    let [golsA, golsB] = calcularPlacarMatematico(meuOvrTorneio, cpuAtual.ovr);
    computarEstatisticasEspecificas(poolEquipesCopa[0], cpuAtual, golsA, golsB, true);
    renderizarEscalacoesPainel(); renderizarRankingsCopa();
    animarPlacar(golsA, golsB, () => finalizarPartida(golsA, golsB));
}

function simularLanceALance() {
    document.getElementById("controles-simulacao").classList.add("hidden");
    const painel = document.getElementById("painel-narracao"); 
    painel.classList.remove("hidden"); painel.innerHTML = t("ref_whistle");
    let tempo = 0; let [golsA, golsB] = calcularPlacarMatematico(meuOvrTorneio, cpuAtual.ovr);
    
    let golsMarcadosA = 0, golsMarcadosB = 0;
    let minutosGolsA = Array.from({length: golsA}, () => Math.floor(Math.random() * 85) + 5).sort();
    let minutosGolsB = Array.from({length: golsB}, () => Math.floor(Math.random() * 85) + 5).sort();

    narracaoInterval = setInterval(() => {
        tempo += 5;
        if (minutosGolsA.includes(tempo)) {
            golsMarcadosA++; document.getElementById("sim-placar-t1").innerText = golsMarcadosA;
            
            let jgsA = poolEquipesCopa[0].titulares; let atacantesA = jgsA.filter(j => j.posicoes && j.posicoes.some(p => ['ATA','PE','PD','SA','MEI'].includes(p))); if(atacantesA.length === 0) atacantesA = jgsA;
            let art = atacantesA[Math.floor(Math.random() * atacantesA.length)].nome;
            eventosPartidaAtual.meuTime.gols[art] = (eventosPartidaAtual.meuTime.gols[art] || 0) + 1; statsCopa.artilheiros[art] = (statsCopa.artilheiros[art] || 0) + 1;
            
            let textoAssist = "";
            if(Math.random() > 0.3) {
                let gar = jgsA[Math.floor(Math.random() * jgsA.length)].nome;
                if(gar !== art) { eventosPartidaAtual.meuTime.assistencias[gar] = (eventosPartidaAtual.meuTime.assistencias[gar] || 0) + 1; statsCopa.garcons[gar] = (statsCopa.garcons[gar] || 0) + 1; textoAssist = ` (Assist: ${gar})`; }
            }
            renderizarEscalacoesPainel(); renderizarRankingsCopa();
            painel.innerHTML += `<div class="gol">${tempo}' - ` + t("goal_me", {nome: art}) + `${textoAssist}</div>`;
        } else if (minutosGolsB.includes(tempo)) {
            golsMarcadosB++; document.getElementById("sim-placar-t2").innerText = golsMarcadosB;
            
            // FIX: Array Boundaries
            let jgsB = cpuAtual.titulares; let atacantesB = jgsB.filter(j => j.posicoes && j.posicoes.some(p => ['ATA','PE','PD','SA','MEI'].includes(p))); if(atacantesB.length === 0) atacantesB = jgsB;
            let art = atacantesB[Math.floor(Math.random() * atacantesB.length)].nome;
            eventosPartidaAtual.cpu.gols[art] = (eventosPartidaAtual.cpu.gols[art] || 0) + 1; statsCopa.artilheiros[art] = (statsCopa.artilheiros[art] || 0) + 1;
            
            let textoAssist = "";
            if(Math.random() > 0.3) {
                let gar = jgsB[Math.floor(Math.random() * jgsB.length)].nome;
                if(gar !== art) { eventosPartidaAtual.cpu.assistencias[gar] = (eventosPartidaAtual.cpu.assistencias[gar] || 0) + 1; statsCopa.garcons[gar] = (statsCopa.garcons[gar] || 0) + 1; textoAssist = ` (Assist: ${gar})`; }
            }
            renderizarEscalacoesPainel(); renderizarRankingsCopa();
            painel.innerHTML += `<div class="gol">${tempo}' - ` + t("goal_cpu", {nome: art}) + `${textoAssist}</div>`;
        } else if (Math.random() > 0.8) painel.innerHTML += `<div class="perigo">${tempo}' - ${t("near_miss")}</div>`;
        
        painel.scrollTop = painel.scrollHeight;
        if (tempo >= 90) { 
            clearInterval(narracaoInterval); painel.innerHTML += `<br>${t("end_90")}`; 
            if(golsMarcadosB === 0) { let golMe = poolEquipesCopa[0].titulares.find(j => j.posicoes && j.posicoes.includes('GOL')); if(golMe) statsCopa.cleanSheets[golMe.nome] = (statsCopa.cleanSheets[golMe.nome] || 0) + 1; }
            if(golsMarcadosA === 0) { let golCpu = cpuAtual.titulares.find(j => j.posicoes && j.posicoes.includes('GOL')); if(golCpu) statsCopa.cleanSheets[golCpu.nome] = (statsCopa.cleanSheets[golCpu.nome] || 0) + 1; }
            renderizarRankingsCopa(); finalizarPartida(golsMarcadosA, golsMarcadosB); 
        }
    }, 150);
}

function calcularPlacarMatematico(ovrA, ovrB) {
    let d = ovrA - ovrB; let fA = 1.3 + (d * 0.08); let fB = 1.3 - (d * 0.08);
    if (fA < 0.1) fA = 0.1; if (fB < 0.1) fB = 0.1;
    return [Math.round(fA * (Math.random() * 1.5)), Math.round(fB * (Math.random() * 1.5))];
}

function animarPlacar(golsA, golsB, callback) { document.getElementById("sim-placar-t1").innerText = golsA; document.getElementById("sim-placar-t2").innerText = golsB; setTimeout(callback, 300); }

// FIX: ARRAY BOUNDARIES FOR SIMULATIONS
function computarEstatisticasEspecificas(timeA, timeB, gA, gB, isPartidaPlayer = false) {
    let jgsA = timeA.titulares; if(!jgsA || jgsA.length === 0) return;
    let atacantesA = jgsA.filter(j => j.posicoes && j.posicoes.some(p => ['ATA','PE','PD','SA','MEI','MC','MD','ME'].includes(p))); if(atacantesA.length === 0) atacantesA = jgsA;
    for(let i=0; i<gA; i++) {
        let art = atacantesA[Math.floor(Math.random() * atacantesA.length)].nome;
        statsCopa.artilheiros[art] = (statsCopa.artilheiros[art] || 0) + 1;
        if(isPartidaPlayer) eventosPartidaAtual.meuTime.gols[art] = (eventosPartidaAtual.meuTime.gols[art] || 0) + 1;
        if(Math.random() > 0.3) {
            let gar = jgsA[Math.floor(Math.random() * jgsA.length)].nome;
            if(gar !== art) {
                statsCopa.garcons[gar] = (statsCopa.garcons[gar] || 0) + 1;
                if(isPartidaPlayer) eventosPartidaAtual.meuTime.assistencias[gar] = (eventosPartidaAtual.meuTime.assistencias[gar] || 0) + 1;
            }
        }
    }
    if(gB === 0) { let golA = jgsA.find(j => j.posicoes && j.posicoes.includes('GOL')); if(golA) statsCopa.cleanSheets[golA.nome] = (statsCopa.cleanSheets[golA.nome] || 0) + 1; }

    let jgsB = timeB.titulares; if(!jgsB || jgsB.length === 0) return;
    let atacantesB = jgsB.filter(j => j.posicoes && j.posicoes.some(p => ['ATA','PE','PD','SA','MEI','MC','MD','ME'].includes(p))); if(atacantesB.length === 0) atacantesB = jgsB;
    for(let i=0; i<gB; i++) {
        let art = atacantesB[Math.floor(Math.random() * atacantesB.length)].nome;
        statsCopa.artilheiros[art] = (statsCopa.artilheiros[art] || 0) + 1;
        if(isPartidaPlayer) eventosPartidaAtual.cpu.gols[art] = (eventosPartidaAtual.cpu.gols[art] || 0) + 1;
        if(Math.random() > 0.3) {
            let gar = jgsB[Math.floor(Math.random() * jgsB.length)].nome;
            if(gar !== art) {
                statsCopa.garcons[gar] = (statsCopa.garcons[gar] || 0) + 1;
                if(isPartidaPlayer) eventosPartidaAtual.cpu.assistencias[gar] = (eventosPartidaAtual.cpu.assistencias[gar] || 0) + 1;
            }
        }
    }
    if(gA === 0) { let golB = jgsB.find(j => j.posicoes && j.posicoes.includes('GOL')); if(golB) statsCopa.cleanSheets[golB.nome] = (statsCopa.cleanSheets[golB.nome] || 0) + 1; }
}

function simularIdaDasCpus(faseParam = partidaAtual.fase) {
    let listaConfrontos = chavesChampionship[faseParam]; if(!listaConfrontos) return;
    listaConfrontos.forEach(conf => {
        if (conf.t1.ePlayer || conf.t2.ePlayer) return; if (conf.golsIda1 !== undefined) return; 
        let [gIda1, gIda2] = calcularPlacarMatematico(conf.t1.ovr, conf.t2.ovr);
        conf.golsIda1 = gIda1; conf.golsIda2 = gIda2; computarEstatisticasEspecificas(conf.t1, conf.t2, gIda1, gIda2, false);
    });
    renderizarRankingsCopa();
}

function simularVoltaDasCpus(faseParam = partidaAtual.fase) {
    let listaConfrontos = chavesChampionship[faseParam]; if(!listaConfrontos) return;
    listaConfrontos.forEach(conf => {
        if (conf.t1.ePlayer || conf.t2.ePlayer) return; if (conf.golsVolta1 !== undefined) return; 
        let [gVolt1, gVolt2] = calcularPlacarMatematico(conf.t1.ovr, conf.t2.ovr);
        conf.golsVolta1 = gVolt1; conf.golsVolta2 = gVolt2; computarEstatisticasEspecificas(conf.t1, conf.t2, gVolt1, gVolt2, false);

        let agr1 = conf.golsIda1 + conf.golsVolta1; let agr2 = conf.golsIda2 + conf.golsVolta2; let pen1 = 0, pen2 = 0;
        if(agr1 === agr2) { pen1 = Math.floor(Math.random() * 3) + 3; pen2 = Math.floor(Math.random() * 3) + 3; while(pen1 === pen2) pen2 = Math.floor(Math.random() * 3) + 3; }
        conf.pen1 = pen1; conf.pen2 = pen2;
        conf.vencedor = (agr1 > agr2 || (agr1 === agr2 && pen1 > pen2)) ? conf.t1 : conf.t2; conf.simulado = true;
    });
    renderizarRankingsCopa();
}

function renderizarRankingsCopa() {
    const ordenar = (obj) => Object.entries(obj).sort((a,b) => b[1] - a[1]).slice(0, 4);
    document.getElementById("ranking-artilheiros").innerHTML = ordenar(statsCopa.artilheiros).map(e => `<div class="ranking-item"><span><strong>${e[0]}</strong></span> <span>${e[1]} Gols</span></div>`).join('') || t("wait_goals");
    document.getElementById("ranking-garcons").innerHTML = ordenar(statsCopa.garcons).map(e => `<div class="ranking-item"><span><strong>${e[0]}</strong></span> <span>${e[1]} Assist</span></div>`).join('') || t("wait_assists");
    document.getElementById("ranking-defesas").innerHTML = ordenar(statsCopa.cleanSheets).map(e => `<div class="ranking-item"><span><strong>${e[0]}</strong></span> <span>${e[1]} Jogos</span></div>`).join('') || t("wait_cs");
}

function finalizarPartida(golsA, golsB) {
    let confAtivo = chavesChampionship[partidaAtual.fase].find(c => c.t1.ePlayer || c.t2.ePlayer);
    const btn = document.getElementById("btn-avancar-fase");

    if(partidaAtual.jogo === 1) {
        confAtivo.golsIda1 = golsA; confAtivo.golsIda2 = golsB;
        partidaAtual.agregadoMeus = golsA; partidaAtual.agregadoCpu = golsB;
        simularIdaDasCpus(); 
        btn.innerText = t("second_leg"); btn.onclick = jogarVolta; btn.classList.remove("hidden");
    } else {
        confAtivo.golsVolta1 = golsA; confAtivo.golsVolta2 = golsB;
        partidaAtual.agregadoMeus += golsA; partidaAtual.agregadoCpu += golsB;
        document.getElementById("sim-agregado").innerText = `${t("agg")}: ${partidaAtual.agregadoMeus} - ${partidaAtual.agregadoCpu}`;
        simularVoltaDasCpus(); 

        if (partidaAtual.agregadoMeus === partidaAtual.agregadoCpu) {
            if(document.getElementById("painel-narracao").style.display !== "none" && !document.getElementById("painel-narracao").classList.contains("hidden")) {
                document.getElementById("painel-narracao").innerHTML += `<div class="penalti"><br>${t("agg_tie")}</div>`;
            }
            btn.innerText = t("pen_shootout"); btn.onclick = animarPenaltisCentral; btn.classList.remove("hidden");
        } else {
            let playerPassou = partidaAtual.agregadoMeus > partidaAtual.agregadoCpu;
            confAtivo.vencedor = playerPassou ? confAtivo.t1 : confAtivo.t2; confAtivo.simulado = true;
            processarDestinoFaseTorneio(playerPassou);
        }
    }
}

function jogarVolta() { partidaAtual.jogo = 2; configurarTelaPartida(); }

function animarPenaltisCentral() {
    document.getElementById("btn-avancar-fase").classList.add("hidden");
    const container = document.getElementById("painel-penaltis"); const list = document.getElementById("lista-penaltis-anim");
    const scoreP1 = document.getElementById("sim-pen-t1"); const scoreP2 = document.getElementById("sim-pen-t2");
    container.classList.remove("hidden"); list.innerHTML = ""; scoreP1.classList.remove("hidden"); scoreP2.classList.remove("hidden");
    
    let gols1 = 0; let gols2 = 0; let round = 1;
    let batedores1 = Object.values(meuTime).reverse(); let batedores2 = [...cpuAtual.titulares].reverse();
    let confAtivo = chavesChampionship[partidaAtual.fase].find(c => c.t1.ePlayer || c.t2.ePlayer);
    
    function chutarPenalti(isTime1) {
        let acertou = Math.random() > 0.3; 
        if(round > 5 && isTime1 && Math.random() > 0.5) acertou = true;
        if(round > 5 && !isTime1 && gols1 !== gols2) acertou = false;

        let icon = acertou ? '<span class="icon-gol">⚽</span>' : '<span class="icon-miss">❌</span>';
        let nome = isTime1 ? batedores1[round % batedores1.length].nome : batedores2[round % batedores2.length].nome;
        
        if(isTime1) {
            if(acertou) gols1++; scoreP1.innerText = gols1;
            list.innerHTML += `<div class="pen-row"><span class="p-meu">${nome} ${icon}</span><span class="p-cpu"></span></div>`;
        } else {
            if(acertou) gols2++; scoreP2.innerText = gols2;
            let lastRow = list.lastChild; lastRow.querySelector('.p-cpu').innerHTML = `${icon} ${nome}`; round++;
        }
        list.scrollTop = list.scrollHeight;
        
        if(round > 5 && !isTime1 && gols1 !== gols2) {
            confAtivo.pen1 = gols1; confAtivo.pen2 = gols2;
            let playerPassou = gols1 > gols2; confAtivo.vencedor = playerPassou ? confAtivo.t1 : confAtivo.t2; confAtivo.simulado = true;
            setTimeout(() => processarDestinoFaseTorneio(playerPassou), 1000);
        } else setTimeout(() => chutarPenalti(!isTime1), 800); 
    }
    chutarPenalti(true);
}

function processarDestinoFaseTorneio(passou) {
    const btn = document.getElementById("btn-avancar-fase");
    if (!passou) {
        playerEliminado = true;
        btn.classList.add("hidden"); btn.onclick = null; 
        setTimeout(() => showEndScreen(t("eliminated")), 500);
    } else {
        if(partidaAtual.fase === 'FINAL') {
            torneioFinalizado = true;
            setTimeout(() => showEndScreen(t("champion")), 500);
        } else {
            let listaFases = ['OITAVAS', 'QUARTAS', 'SEMI', 'FINAL'];
            let proxFase = listaFases[listaFases.indexOf(partidaAtual.fase) + 1];
            let mapFases = { 'OITAVAS': 'round_16', 'QUARTAS': 'quarters', 'SEMI': 'semis', 'FINAL': 'final' };
            btn.innerText = t("go_to_next", {fase: t(mapFases[proxFase])}); 
            btn.onclick = () => mudarDeFaseTorneio(proxFase); 
            btn.classList.remove("hidden");
        }
    }
}

function simularProximaFaseCPU() {
    let listaFases = ['OITAVAS', 'QUARTAS', 'SEMI', 'FINAL', 'FIM'];
    let idx = listaFases.indexOf(partidaAtual.fase);
    if(idx >= 3) {
        if(partidaAtual.fase === 'FINAL') {
            simularIdaDasCpus('FINAL'); simularVoltaDasCpus('FINAL');
            partidaAtual.fase = 'FIM'; torneioFinalizado = true; renderizarBracket();
        }
        return; 
    }
    
    let faseAtual = partidaAtual.fase; let proxFase = listaFases[idx + 1];
    simularIdaDasCpus(faseAtual); simularVoltaDasCpus(faseAtual); 
    
    let vencedores = chavesChampionship[faseAtual].map(c => c.vencedor);
    chavesChampionship[proxFase] = [];
    for(let i=0; i<vencedores.length; i+=2) chavesChampionship[proxFase].push({ t1: vencedores[i], t2: vencedores[i+1], simulado: false });
    
    partidaAtual.fase = proxFase; renderizarBracket();
}

function mudarDeFaseTorneio(novaFase) {
    let listaFases = ['OITAVAS', 'QUARTAS', 'SEMI', 'FINAL']; let faseAntiga = listaFases[listaFases.indexOf(novaFase) - 1];
    let vencedores = chavesChampionship[faseAntiga].map(c => c.vencedor);
    chavesChampionship[novaFase] = [];
    for(let i=0; i<vencedores.length; i+=2) chavesChampionship[novaFase].push({ t1: vencedores[i], t2: vencedores[i+1], simulado: false });

    partidaAtual.fase = novaFase; partidaAtual.jogo = 1; partidaAtual.agregadoMeus = 0; partidaAtual.agregadoCpu = 0;
    let meuDuelo = chavesChampionship[novaFase].find(c => c.t1.ePlayer || c.t2.ePlayer);
    cpuAtual = meuDuelo.t1.ePlayer ? meuDuelo.t2 : meuDuelo.t1;
    configurarTelaPartida();
}

function renderizarBracket() {
    const fases = ['OITAVAS', 'QUARTAS', 'SEMI', 'FINAL'];
    fases.forEach(fase => {
        const col = document.getElementById(`col-${fase.toLowerCase()}`); col.innerHTML = "";
        let matches = chavesChampionship[fase]; if(!matches) return;
        matches.forEach(m => {
            if(!m.t1) { col.innerHTML += `<div class="bracket-match"><div class="b-team">${t("tba")}</div><div class="b-team">${t("tba")}</div></div>`; return; }
            let s1 = (m.golsIda1||0) + (m.golsVolta1||0); let s2 = (m.golsIda2||0) + (m.golsVolta2||0);
            let pT1 = m.pen1 ? ` (${m.pen1})` : ''; let pT2 = m.pen2 ? ` (${m.pen2})` : '';
            let s1D = m.vencedor ? s1+pT1 : '-'; let s2D = m.vencedor ? s2+pT2 : '-';
            let c1 = m.vencedor === m.t1 ? 'winner' : ''; let c2 = m.vencedor === m.t2 ? 'winner' : '';
            col.innerHTML += `<div class="bracket-match"><div class="b-team ${c1}"><span>${m.t1.nome}</span><span>${s1D}</span></div><div class="b-team ${c2}"><span>${m.t2.nome}</span><span>${s2D}</span></div></div>`;
        });
    });
    
    let btnSimResto = document.getElementById("btn-simular-resto");
    let btnRestartBracket = document.getElementById("btn-restart-bracket");

    if(!torneioFinalizado && playerEliminado && partidaAtual.fase !== 'FINAL' && partidaAtual.fase !== 'FIM') {
        btnSimResto.classList.remove("hidden"); btnRestartBracket.classList.add("hidden");
    } else if (torneioFinalizado || partidaAtual.fase === 'FIM') {
        btnSimResto.classList.add("hidden"); btnRestartBracket.classList.remove("hidden");
    } else {
        btnSimResto.classList.add("hidden"); btnRestartBracket.classList.add("hidden");
    }
}

function showEndScreen(status) {
    const modal = document.getElementById("modal-fim-jogo");
    document.getElementById("mf-titulo").innerText = status;
    document.getElementById("mf-desc").innerText = status === t("champion") ? t("champ_desc") : t("elim_desc");
    modal.classList.remove("hidden");
}

function fecharModalEVerResultados() {
    document.getElementById("modal-fim-jogo").classList.add("hidden");
    mudarAbaStats('tabela');
}

function copiarPerformance() {
    let status = document.getElementById("mf-titulo").innerText;
    let nomesTime = Object.values(meuTime).map(j => j.nome).join(', ');
    let ovr = document.getElementById("val-ovr-total").innerText;
    let msgShare = t("share_text", {nomes: nomesTime, status: status, ovr: ovr});
    navigator.clipboard.writeText(msgShare); alert(t("copied"));
}

function recomecarJogoDoZero() {
    meuTime = {}; meuTimeIds = new Set(); faseDePlacement = false; jogadorSendoPosicionado = null; timeSorteadoAtual = null; roletaAnimando = false; jogoIniciado = false; playerEliminado = false; torneioFinalizado = false;
    resorteiosRestantes = modoUltimate ? 0 : 3;
    statsCopa = { artilheiros: {}, garcons: {}, cleanSheets: {} }; poolEquipesCopa = []; chavesChampionship = { 'OITAVAS': [], 'QUARTAS': [], 'SEMI': [], 'FINAL': [] };
    partidaAtual = { fase: 'OITAVAS', jogo: 1, golsMeus: 0, golsCpu: 0, agregadoMeus: 0, agregadoCpu: 0 }; cpuAtual = null; meuOvrTorneio = 0;
    if(narracaoInterval) clearInterval(narracaoInterval); if(draftTimer) clearInterval(draftTimer);

    document.getElementById("modal-fim-jogo").classList.add("hidden"); document.getElementById("view-mata-mata").classList.add("hidden"); 
    document.getElementById("layout-torneio-mestre").classList.remove("full-bracket"); document.getElementById("tela-tabuleiro").style.setProperty("display", "flex", "important");
    document.getElementById("view-config").classList.remove("hidden"); document.getElementById("config-options").style.display = "block";
    document.getElementById("view-draft").classList.add("hidden"); document.getElementById("animacao-sorteio").classList.add("hidden"); document.getElementById("draft-content").classList.remove("hidden");
    
    document.getElementById("btn-roleta").innerText = t("roll_dice"); 
    document.getElementById("btn-roleta").onclick = girarRoleta; document.getElementById("container-btn-rolar").style.marginTop = "auto";
    
    document.getElementById("btn-avancar-fase").classList.add("hidden"); document.getElementById("btn-restart-bracket").classList.add("hidden");
    
    mudarAbaStats('stats'); desenharFormacao(); atualizarBoxScore(); updateDynamicTexts();
}