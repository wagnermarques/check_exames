exports.sqlCreateTblExamesTable = "CREATE TABLE IF NOT EXISTS tbl_exames"+
    "("+
    "id integer PRIMARY KEY AUTOINCREMENT, "+
    "nome varchar(100),"+
    //TODO: esses compos precisam validação semelhante ao campo do nome
    "sexo char(1)," + // TODO: esse campo deve retornar apenas um caractere indicando o sexo do paciente
    "setor varchar(50),"+
    "prontuario varchar(50),"+
    "leito varchar(100),"+
    "idade int(3),"+
    "data varchar(10)," + //deve retornar a data

    "eletroforese_de_hemoglobina INTEGER ,"+
    "eletroforese_de_proteina INTEGER ,"+
	   
    "sodio INTEGER ,"+
    "potassio INTEGER ,"+
    "calcio INTEGER ,"+
    "magnesio INTEGER ,"+
    "fosforo INTEGER ,"+
    "cloro INTEGER ,"+
	   
    "CPK INTEGER ,"+
    "DHL INTEGER ,"+
    "Fosfatase_acida_fracao_prostatica INTEGER ,"+
    "Fosfatase_acida_total INTEGER ,"+
	   
    "Amilase INTEGER ,"+
    "Lipase INTEGER ,"+
    "Fosfase_Alcalina INTEGER ,"+
    
    "Gama_GT INTEGER ,"+
    "TGO_AST INTEGER ,"+
    "TGP_ALT INTEGER ,"+
    "Bilirrubina INTEGER ,"+
	   
    "Cretinina INTEGER ,"+
    "Ureia INTEGER ,"+
	   
    "Colesterol INTEGER ,"+
    "HDL_Colesterol INTEGER ,"+
    "VLDL_Colesterol INTEGER ,"+
    "LDL_Colesterol INTEGER ,"+
    "Triglicerides INTEGER ,"+

    "acido_Valproico INTEGER,"+
    "Benzodiazepinicos INTEGER,"+
    "Carbamazepina INTEGER,"+
    "Fenobarbital INTEGER,"+
    "Barbituricos INTEGER,"+
    "Digoxina INTEGER,"+
    "Fenitoina INTEGER,"+

    "Acido_Urico INTEGER ,"+
    "Ferritina INTEGER ,"+
    "Ferro INTEGER ,"+
    "Transferrina INTEGER ,"+
    "Glicose INTEGER ,"+
    "Hb_glicada INTEGER ,"+
    "Vitamina_B12 INTEGER ,"+
    "Vitamina_D INTEGER ,"+
	   
    "Adenovirus INTEGER ,"+
    "Citomegalovirus INTEGER ,"+
    "Chagas INTEGER ,"+
    "HepatiteA INTEGER ,"+
    "HepatiteB INTEGER ,"+
    "HepatiteC INTEGER ,"+
    "Herpes_simples1_2 INTEGER ,"+
    "HIV_1_2 INTEGER ,"+
    "HTLV_1_2 INTEGER ,"+
    "EBV INTEGER ,"+
    "Rubeola INTEGER ,"+
	   
    "FAN_Hep2 INTEGER ,"+
    "Anti_DNA INTEGER ,"+
    "AntiSSA_Ro INTEGER ,"+
    "Anti_SSB_La INTEGER ,"+
    "Anti_Sm INTEGER ,"+
    "Anti_RNP INTEGER ,"+
    "Anti_ENA INTEGER ,"+
    "Fator_Reumatoide INTEGER ,"+
    "P_ANCA INTEGER ,"+
    "C_ANCA INTEGER ,"+
	   
    "Sifilis_completa INTEGER ,"+
    "Sifilis_VDRL INTEGER ,"+
    "Toxoplasmose INTEGER ,"+
	   
    "ASLO INTEGER ,"+
    "Beta_HCG_Quantitativo INTEGER ,"+
    "Complemento_C3 INTEGER ,"+
    "Complemento_C4 INTEGER ,"+
    "IgE_Total INTEGER ,"+
    "PCR INTEGER ,"+
	   
    "TSH INTEGER ,"+
    "T4L INTEGER ,"+
    "T3 INTEGER ,"+
    "T4 INTEGER ,"+
    "Anti_TPO INTEGER ,"+
    "Anti_tireoglobulina INTEGER ,"+
    "GH INTEGER ,"+
    "PTH INTEGER ,"+
    "LH INTEGER ,"+
    "FSH INTEGER ,"+
	   
    "Prolactina INTEGER ,"+
    "Estradiol INTEGER ,"+
    "DHEA INTEGER ,"+
    "DHEAS INTEGER ,"+
    "Androstenediona INTEGER ,"+
    "Testosterona INTEGER ,"+
    "Testosterona_Livre INTEGER ,"+

    "ACTH INTEGER ,"+
    "Cortisol_Serico INTEGER ,"+
    "Cortisol_Urinario INTEGER ,"+
    "Aldosterona INTEGER ,"+
    "Aldolase INTEGER ,"+
    "Insulina INTEGER ,"+
    "Peptideo_c INTEGER ,"+
	   
    "Coprocultura INTEGER ,"+
    "Cultura_de_BK INTEGER ,"+
    "Cultura_de_fungos INTEGER ,"+
    "Fungigrama INTEGER ,"+
    "Cultura_de_Secrecao INTEGER ,"+
	   
    "PPF INTEGER ,"+
    "Anal_Swab INTEGER ,"+

    "Hemograma_Completo INTEGER ,"+
    "Hb_Ht INTEGER ,"+
    "Plaquetas INTEGER ,"+
    "Reticuloticos INTEGER ,"+
    "VHS INTEGER ,"+
    "Tipagem_Sanguinea INTEGER ,"+
    "Celulas_LE INTEGER ,"+
    "Falcizacao_Hemacias INTEGER ,"+

    "Coagulograma INTEGER ,"+
    "Tempo_Protrombina INTEGER ,"+
    "Tempo_Tromboplastina_Ativado INTEGER ,"+
    "Tempo_Trombina INTEGER ,"+
    "Dimero_d INTEGER ,"+
    
    "Clerance_Creatinina INTEGER ,"+
    "Citrato INTEGER ,"+	   
    "Oxalato INTEGER ,"+
    "Proteinura INTEGER ,"+
    "Acido_Vanilmandelico INTEGER ,"+

    "Cistina INTEGER ,"+
    "Microalbuminuria INTEGER ,"+
    "Urina_I INTEGER ,"+
    "Urocultura INTEGER ,"+
    "Antibiograma INTEGER "+	   	   
    ")";
