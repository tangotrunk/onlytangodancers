var data=[
'act;class;Adrian Lupi y Anita Escobar;C14;2024-05-24;19:45;2024-05-24;21:00;0;Loic Vix;ALA',
'act;class;Alejandra Martiñan & Rafael Luna;C14;2024-04-20;19:45;2024-04-20;21:00;0;Andea Venturini;AMR',
'act;class;Cristian Cerezo & Valentín Arias;C14;2024-04-26;19:45;2024-04-26;21:00;0;Loic Vix;CCV',
'act;class;Daniel Andrizzi;M11;2024-04-02;20:00;2024-04-02;21:00;7;Daniel Andrizzi;DAA',
'act;class;Joaquin Martinez;J08;2024-04-01;20:00;2024-04-01;21:00;7;Joaquin Martinez;JOM',
'act;class;Monina Paz;L19;2024-04-11;20:00;2024-04-11;21:30;0;Monina Paz;MOP',
'act;livemusic;La tanda de Giselle y Anibal;M28;2024-04-03;22:30;2024-04-03;22:45;7;Gisele y Anibal;GIA',
'act;livemusic;La tanda del Cuartero de Cuerdas;M28;2024-04-10;22:45;2024-04-10;23:00;0;Gisele y Anibal;CDC',
'act;livemusic;No me vengan con milongas;CS1;2024-04-12;21:30;2024-04-12;23:00;0;Jimena González;NMM',
'act;livemusic;Tanda Al Sur duo;J08;2024-04-08;22:30;2024-04-08;22:45;0;Maurice Gambra;TSD',
'act;milonga;El Puntazo - DJ Andrea;C14;2024-04-06;21:00;2024-04-07;00:30;7;Andea Venturini;MLP',
'act;milonga;Junta Brava - DJ Fernando Nahmijas;J08;2024-04-16;21:30;2024-04-17;00:30;28;Victoria y Rodrigo;MJB',
'act;milonga;La Coqueta de Madrid - DJ Gisele;M28;2024-04-03;21:00;2024-04-03;00:00;7;Gisele y Anibal;COM',
'act;outdoors;El Templete del Retiro - DJ Julio;PDR;2024-04-07;17:00;2024-04-07;21:00;7;Julio Tijero;MTR',
'act;milonga;La Suerte Loca - DJ Luis Abellan;SP1;2024-04-04;22:00;2024-04-03;01:00;7;Luis Abellan;MSL',
'act;milonga;Che Bandoneón - DJ Maurice;J08;2024-04-06;20:30;2024-04-06;23:30;7;Maurice Gambra;CHB',
'act;milonga;El Aguante - DJ Jorge Ramirez;C14;2024-04-11;20:00;2024-04-11;23:00;7;Jorge;EAG',
'act;milonga;El Cachafaz - DJ Maurice;J08;2024-04-10;20:00;2024-04-10;23:00;7;Maurice Gambra;ECA',
'act;milonga;El Conventiyo - DJ Pablo;R22;2024-04-05;22:00;2024-04-05;02:00;7;Pablo y Beatriz;CON',
'act;milonga;El Gancho - DJ Maurice;J08;2024-04-07;19:30;2024-04-07;23:30;7;Maurice Gambra;GAN',
'act;milonga;La escurridiza - DJ Julio Tijero;J08;2024-04-01;21:00;2024-04-01;00:30;7;Maurice Gambra;LES',
'act;milonga;La Tangoteca De Golden - DJ Daniel;M11;2024-04-02;21:00;2024-04-02;00:00;7;Daniel Andrizzi',
'act;practice;Amarras - DJ Luis Abellan;FR7;2024-04-07;19:30;2024-04-07;23:30;7;Ricardo Quesada;AMA',
'act;practice;Sin Gomina - Melina Sol;C14;2024-04-07;18:00;2024-04-07;21:00;0;Loic Vix;SIG',
'act;show;Adrian Lupi y Anita Escobar;C14;2024-05-24;23:00;2024-05-24;23:15;0;Loic Vix;ALU',
'act;show;Alejandra Martiñan & Rafael Luna;C14;2024-04-20;23:15;2024-04-20;23:30;0;Andea Venturini;AMR',
'act;show;Alex Moncada & Martina Waldman;C14;2024-04-06;23:10;2024-04-06;23:30;0;Andea Victoria;AMM',
'act;show;Bárbara Carpino & Claudio Forte;C14;2024-04-05;23:10;2024-04-05;23:30;0;Loic Vix;BCC',
'act;show;Cristian Cerezo & Valentín Arias;C14;2024-04-26;21:00;2024-04-26;00:30;0;Loic Vix;CCV',
'act;show;Luces de Tango;TEF;2024-04-21;12:30;2024-04-21;14:00;0;Claudia;LDT',
'href;ALA;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/420261717_922022763263846_9162481225405495923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oFj_NtnKb9kAb7f7YJE&_nc_oc=Adiebp8QSdYyj3czU0kdaoJyGnUj4zYLZBLoAp1iz5QLGXi4SAbWO_ypwlGUYdUR0-E&_nc_ht=scontent-mad1-1.xx&oh=00_AfDC-IfoUVa0_0l2VcTftKdppW3Ge99oXicKc7xEjyaOgw&oe=661D8B24',
'href;ALU;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/420261717_922022763263846_9162481225405495923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oFj_NtnKb9kAb7f7YJE&_nc_oc=Adiebp8QSdYyj3czU0kdaoJyGnUj4zYLZBLoAp1iz5QLGXi4SAbWO_ypwlGUYdUR0-E&_nc_ht=scontent-mad1-1.xx&oh=00_AfDC-IfoUVa0_0l2VcTftKdppW3Ge99oXicKc7xEjyaOgw&oe=661D8B24',
'href;AMA;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/417398311_17913693242916979_3168710222100098656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5oSs9Kvmc1oAb6pPbqy&_nc_oc=Adiek8cJ9HiQNBAGa6k98aVCOHkBCfdusxTSGQhHc7k-_eK8UVQKYVPajg9hJDI3Yp8&_nc_ht=scontent-mad1-1.xx&oh=00_AfBMZI9HDZwdfLra3tI9Wv1581F-LOQS_TV2OqC9ds6vtQ&oe=6620501E',
'href;AMM;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/434587775_10228217902065933_3271256342745956555_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WT4V2NXrkzQAb7M3n9Q&_nc_ht=scontent-mad1-1.xx&oh=00_AfCIg27-KTRGhHemj-baJaVPwfBQurF15LxTBNYHuBZfJg&oe=6615BBD5',
'href;AMR;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/436257980_122110275740263688_5285621463656648776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7XN_vLJKfSsAb7tHEEm&_nc_ht=scontent-mad2-1.xx&oh=00_AfA4Diwg15NIFQctBZ6BCq3qLkqb3KPDDsshPI52KOCA7Q&oe=661CAAAF',
'href;BCC;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/434320569_10228217901545920_2968136373577201650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GVtud6E4lXwAb7AxzG8&_nc_oc=AdjtPW8Hwm7lG_dpMxHMZPT__KPMUikcFPdsOqib7vTtwd4TLQWKsqDbWXKiuvo_Dgk&_nc_ht=scontent-mad2-1.xx&oh=00_AfA78R_s4_Lb0C86e35eqjk67rrx-RNuzHA18Axm2408Kg&oe=6615D801',
'href;CCV;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/433184687_924652259667563_4266276666467055212_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zOlnSBcl21QAb55ShyC&_nc_ht=scontent-mad1-1.xx&oh=00_AfA2J9JWGmgCw9IfFSyse_n5jnDleucz_Dxd6Y7Xans1FQ&oe=661D8AAF',
'href;CDC;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/436772421_441506251606931_8025158156454635633_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yCNPMuGfLbQAb5q1qcO&_nc_ht=scontent-mad2-1.xx&oh=00_AfBl95OggiYmyHrepBpe622tFt_yDZ8Je2cQP1kOYPJwUw&oe=661C0EE5',
'href;CHB;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/391688091_722662949900095_1123882176504710920_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5QvZgdF6bp0Ab5hS3vC&_nc_ht=scontent-mad2-1.xx&oh=00_AfBarElwMytB-rv7SjBAdaOyS1X2bAD3abKU_22j19riDw&oe=661D7444',
'href;CON;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/302321507_504462895018711_8779203988656449102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZXrmSzJM4usAb5bxwqS&_nc_ht=scontent-mad2-1.xx&oh=00_AfD-oKv_vEJGem0q9CGIb1qFYCuulqAH4rHGl-NxnW7yTg&oe=661D7BCF',
'href;DAA;https://www.facebook.com/dandrizzi',
'href;EAG;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/428056934_443491394870376_5741801050591080451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a_7d6u1jEBEAb5QdToJ&_nc_ht=scontent-mad1-1.xx&oh=00_AfCWF0B0sDEOQf1Zq-BnRKoB-M2myKwCIgKrmY7BoODlZA&oe=661D7D71',
'href;ECA;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/391688091_722662949900095_1123882176504710920_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5QvZgdF6bp0Ab5hS3vC&_nc_ht=scontent-mad2-1.xx&oh=00_AfBarElwMytB-rv7SjBAdaOyS1X2bAD3abKU_22j19riDw&oe=661D7444',
'href;GAN;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/391688091_722662949900095_1123882176504710920_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5QvZgdF6bp0Ab5hS3vC&_nc_ht=scontent-mad2-1.xx&oh=00_AfBarElwMytB-rv7SjBAdaOyS1X2bAD3abKU_22j19riDw&oe=661D7444',
'href;GIA;https://www.facebook.com/profile.php?id=100072426801642',
'href;JOM;https://www.facebook.com/joaquin.martinez.391420',
'href;LDT;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/436302634_122111384060263688_5580328931382345348_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GdJtbcrXmeQAb5E2xeK&_nc_ht=scontent-mad1-1.xx&oh=00_AfDW2PQmoSyVeTC3OUiWg7jkbmRJJMG5pe5zY6ZYAlu4Tw&oe=661EC99E',
'href;LES;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/434854325_10160116009426645_731495972674338084_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oNx7hlFn3tsAb4P5F0n&_nc_ht=scontent-mad2-1.xx&oh=00_AfDdH1uQLMewkRM6lQB57ovF4e7IaLvs-KIHZUsDiH1VoA&oe=661D6E9D',
'href;MOP;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/436348172_10162020978816414_9146421995414817903_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UBOGnLbrJ0AAb4I796K&_nc_ht=scontent-mad1-1.xx&oh=00_AfADHWJVvhSBvC0lMBjkKyeXFwWAOMTucIXAKjjuN8rHYw&oe=661C1A8F',
'href;NMM;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/434021039_407410752047122_5749310915274284611_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cbzjZ0RkHxoAb7WAeCV&_nc_ht=scontent-mad1-1.xx&oh=00_AfCFP_bETg-G2TARpKgwsdhgAMp3Vcry8c29Le-ifka5Eg&oe=661A1651',
'href;SIG;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/433200622_10228217902425942_520719086890222209_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BEzKCmSE1WoAb4j6dwM&_nc_ht=scontent-mad1-1.xx&oh=00_AfDAN6JLu8Y1hmD3mbTxLRAUjjVa0-k1Ua_DKlSsGvnl-g&oe=66170394',
'href;TSD;https://www.facebook.com/p/MadridTango-100064691886648/',
'href;MLP;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/243127735_114049024360157_8888281751793754462_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=samMNdQJQEMAb7MByhO&_nc_ht=scontent-mad1-1.xx&oh=00_AfAfu3ZfXSRZ6vUJA6Uaqi2pcr9pF9ODTeiUHsuBCm4dZA&oe=66204B52',
'href;MJB;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/417398311_17913693242916979_3168710222100098656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5oSs9Kvmc1oAb6pPbqy&_nc_oc=Adiek8cJ9HiQNBAGa6k98aVCOHkBCfdusxTSGQhHc7k-_eK8UVQKYVPajg9hJDI3Yp8&_nc_ht=scontent-mad1-1.xx&oh=00_AfBMZI9HDZwdfLra3tI9Wv1581F-LOQS_TV2OqC9ds6vtQ&oe=6620501E',
'href;COM;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/434643271_437246768699546_3879583118828022496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JkNkpK0pmpcAb46fOTs&_nc_ht=scontent-mad1-1.xx&oh=00_AfCHYFbmwcLLbzeJ72yPoxZ81wpCPP2Ckw_QdMKh_737yw&oe=661CB621',
'href;MTR;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/351509216_1442270843269085_5800243567401483573_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_-eUaV-gv7AAb4yTfQN&_nc_ht=scontent-mad2-1.xx&oh=00_AfAYAIp6iq1j5Wf4NdecnzZU5PUGfH3d8u9k_kdLkq9CEg&oe=66206606',
'href;MSL;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/345860627_924929292160064_373345481708041347_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7f9hxKinKToAb694zPM&_nc_ht=scontent-mad2-1.xx&oh=00_AfDX_LXsqUAQvbFrFT73xpkNpypir7q03p9zs6H-mrXHpg&oe=661ED8D7',
'loc;C14;Carretas 14;spain;madrid;;',
'loc;CS1;Pza. Ciudad de Salta 1;spain;madrid;;',
'loc;FR7;Fco. de Ricci 7;spain;madrid;;',
'loc;J08;Jacometrezo 8;spain;madrid;calle de Jacometrezo 8;40.4204911,-3.7079492',
'loc;L19;Luna 19 1A;spain;madrid;;',
'loc;M11;Golden - Pl. de los Mostenses 11;spain;madrid;;',
'loc;M28;Melendez Valdes 28;spain;madrid;;',
'loc;PDR;Parque del Retiro;spain;madrid;;',
'loc;R22;Roble 22;spain;madrid;;',
'loc;SP1;Cha3 - San Pol de Mar 1;spain;madrid;;',
'loc;TEF;Teatro Figaro;spain;madrid;;',
'rol;cantante;Giselle',
'rol;dj;Maurice Gambra;fb',
'url;COM;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/434643271_437246768699546_3879583118828022496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JkNkpK0pmpcAb46fOTs&_nc_ht=scontent-mad1-1.xx&oh=00_AfCHYFbmwcLLbzeJ72yPoxZ81wpCPP2Ckw_QdMKh_737yw&oe=661CB621',
'url;MJB;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/435504957_10161992650869887_6442053030514325612_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M9D-gj87vwgAb6r7EDu&_nc_ht=scontent-mad2-1.xx&oh=00_AfD4m_g2HcZjuncOUENbtTDZMr9-GOxdk3cDNDdaaQ1PkQ&oe=661D9035',
'url;MLM;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/423715845_10228263350042104_5816934928804056804_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MqfidxizJK4Ab4w9ccY&_nc_ht=scontent-mad2-1.xx&oh=00_AfCyEGPS2M_pyc9vAiKl0YunHGNhk7OdEK9xV2ymdIsQuw&oe=661EEE00',
'url;MLP;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/243127735_114049024360157_8888281751793754462_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KF5slLPC94UAb4nQ23U&_nc_ht=scontent-mad1-1.xx&oh=00_AfAfiDqgg0w282bJQXsstTnIIx19xNdStOn0GB3yf-1AYg&oe=661D7012',
'url;MSL;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/345860627_924929292160064_373345481708041347_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7f9hxKinKToAb694zPM&_nc_ht=scontent-mad2-1.xx&oh=00_AfDX_LXsqUAQvbFrFT73xpkNpypir7q03p9zs6H-mrXHpg&oe=661ED8D7',
'url;MTR;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/351509216_1442270843269085_5800243567401483573_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_-eUaV-gv7AAb4yTfQN&_nc_ht=scontent-mad2-1.xx&oh=00_AfDvSfndSuujm3R1X5Cm43DCFFki3TraZOiQu4UWQRcfCg&oe=661EDC46',
];