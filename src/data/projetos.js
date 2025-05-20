class Projeto {
  constructor(id, nome, imagens) {
    this.id = id;
    this.nome = nome;
    this.imagens = imagens;
  }
}

const projetos = [];

projetos[0] = new Projeto(
  "haya", // ?
  "Pousada Haya",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679358120/0-PousadaHayaok/IMG_2363_lpophe.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679358118/0-PousadaHayaok/PHOTO-2020-10-22-09-23-01_b2sls6.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679358118/0-PousadaHayaok/867eea9a-c1f2-4eba-8e8c-dcf5e1966495_mdtlvq.jpg"  
  ]
);

projetos[1] = new Projeto(
  "zai",
  "Pousada Zai", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689687223/POUSADA%20ZAI/Bang-cam1.RGB_color.0000_cwafw4.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687220/POUSADA%20ZAI/Aerea-cam2.RGB_color.0000_gwrlju.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687227/POUSADA%20ZAI/Praia-cam1.RGB_color.0000_nkzf9f.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687227/POUSADA%20ZAI/Roof-cam1.RGB_color.0000_l8lxmv.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687226/POUSADA%20ZAI/pisc-cam3.RGB_color.0000_masrkp.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687226/POUSADA%20ZAI/rest-cam1.RGB_color.0000_nhbguc.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689687215/POUSADA%20ZAI/Recep-cam2.RGB_color.0000_ehumvo.jpg",
  ]
);

projetos[2] = new Projeto(
  "ibis-pajucara",
  "Ibis Styles Pajuçara", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1679435627/2-IbisStylesPaju%C3%A7ara/20190718_164512000_iOS_btvjqx.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435627/2-IbisStylesPaju%C3%A7ara/20190718_164512000_iOS_btvjqx.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435626/2-IbisStylesPaju%C3%A7ara/20190719_193504000_iOS_1_lypxwq.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435626/2-IbisStylesPaju%C3%A7ara/20190705_111556000_iOS_vw0lzg.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435626/2-IbisStylesPaju%C3%A7ara/20190719_180521000_iOS_ievtqz.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435626/2-IbisStylesPaju%C3%A7ara/20221122_143945000_iOS_m7p9oj.jpg",
  ]
);
projetos[3] = new Projeto(
  "casa-ei", // OK
  "Casa EI",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1679435511/7-CasaEI%20ok/ren-cam1.RGB_color.0000_vosc4y.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435511/7-CasaEI%20ok/ren-cam1.RGB_color.0000_vosc4y.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679435511/7-CasaEI%20ok/ren-cam2.RGB_color.0000_oo7t8h.jpg",
  ]
);

projetos[4] = new Projeto(
  "moa",
  "Condomínio Moa", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689696271/Cond%20Moa/ren-cam03.RGB_color.0000_danhua.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689696200/Cond%20Moa/ren1-estar-praia.RGB_color.0000_di8wuw.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689696200/Cond%20Moa/ren1-estar_CF_oqumjp.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689696200/Cond%20Moa/ren2-estar_CF_jdvsql.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689696271/Cond%20Moa/ren-cam03.RGB_color.0000_danhua.jpg",
  ]
);

projetos[5] = new Projeto(
  "casa-ja",
  "Casa JA", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689688549/MOA/ren-cam1_qhvcuh.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688546/MOA/ren-cam1-SUITE_ATRAS_lru7xs.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688545/MOA/ren-cam1-SUITE_q337jf.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688545/MOA/ren-cam1-ROOFTOP_hmsuux.jpg",
  ]
);

projetos[6] = new Projeto(
  "mahre",
  "Mahré Hotel", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689688124/MAHRE/RESTAURANTE_ATUAL/ren-cam8-rest.RGB_color.0000_ydhyo3.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688127/MAHRE/RESTAURANTE_ATUAL/ren-cam9-rest.RGB_color.0000_kjdzdu.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688122/MAHRE/ren-SPA.origRGB.0000_qxug8g.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688118/MAHRE/ren-SPA2.origRGB.0000_kdiqgs.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688118/MAHRE/ren-PONTE.origRGB.0000_hmminj.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688117/MAHRE/ren-DECK-2.origRGB.0000_oe9tvz.jpg",
  ]
);
projetos[7] = new Projeto(
  "serena", // OK
  "Condomínio Serena",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1689694663/CONDOMINIO%20MOA/ren-cam15.RGB_color.0000_zrie6u.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689694663/CONDOMINIO%20MOA/ren-deck-CF.RGB_color.0000_kruiam.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689694662/CONDOMINIO%20MOA/ren-cam1-cA-suite.RGB_color.0000_qqvak8.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689694675/CONDOMINIO%20MOA/ren-cam11.RGB_color.0000_rpyj9t.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689694667/CONDOMINIO%20MOA/ren-cam12.RGB_color.0000_cltlw7.jpg",
  ]
);

projetos[8] = new Projeto(
  "bsm", // OK
  "BSM",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1689690580/MONTINNI-BSM/ren-cam1-SAUNA_seh7rn.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689690850/MONTINNI-BSM/ren-cam-PATIO_km8k1k.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689690580/MONTINNI-BSM/ren-cam-VARANDA-2_ifpxgm.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689690578/MONTINNI-BSM/ren-cam1-FITNESS_2_vflbjl.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689690581/MONTINNI-BSM/ren-cam2A-FACHADA_trhiaq.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689690583/MONTINNI-BSM/ren-cam-RECEPCAO_2_mpkg4w.jpg",
  ]
);

projetos[9] = new Projeto(
  "casa-lf",
  "Casa LF", // OK
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689691328/RESID%20LUIZ%20FAVA/ren-cam2A-SMaster_ghzvcn.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691323/RESID%20LUIZ%20FAVA/ren-cam7-ROOFTOP_iqdy6i.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691328/RESID%20LUIZ%20FAVA/ren-cam4B-JANTAR_vlufov.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691329/RESID%20LUIZ%20FAVA/ren-cam6A-JANTAR_y6376b.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691326/RESID%20LUIZ%20FAVA/ren-cam3A-SMaster_dipzki.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691325/RESID%20LUIZ%20FAVA/ren-cam5A-JANTAR_lhxv90.jpg",
  ]
);

projetos[10] = new Projeto(
  "casa-rr", // OK
  "Casa RR",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689688891/CASA%20RR/ren-cam6_luwemw.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688886/CASA%20RR/ren-suite2_s4fanq.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689688886/CASA%20RR/ren-cam3_foyb8h.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689688896/CASA%20RR/ren-cam5_sgfabr.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689688886/CASA%20RR/ren-suite1_hxmci9.jpg",
  ]
);
projetos[11] = new Projeto(
  "casa-mjr", // OK
  "Casa MJR",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689691851/MA%CC%81RIO%20JR/ren-cam1-wcb-Casal_uzfses.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691854/MA%CC%81RIO%20JR/ren-cam8_q3pnah.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691851/MA%CC%81RIO%20JR/ren-cam6_hsqz0l.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691849/MA%CC%81RIO%20JR/ren-cam8-ilha_a8vdsu.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691849/MA%CC%81RIO%20JR/ren-cam1-QH_djpavs.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689691848/MA%CC%81RIO%20JR/ren-cam7-ilha_ktwk2d.jpg",
  ]
);
projetos[12] = new Projeto(
  "casa-ac", // OK
  "Casa AC",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689692533/ARTHUR-CRIS/resn-cam8_ekqbkl.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689692533/ARTHUR-CRIS/resn-cam7_astdyu.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689692533/ARTHUR-CRIS/resn-cam4_wxotbz.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689692534/ARTHUR-CRIS/resn-cam2_wqql1h.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689692537/ARTHUR-CRIS/resn-cam5_k2esn5.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689692535/ARTHUR-CRIS/resn-cam1_i7yg50.jpg",
  ]
);

projetos[13] = new Projeto(
  "casa-c", // OK
  "Casa C",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689693128/RESID-CE%CC%81CIL/ren-cam2_muxafn.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693136/RESID-CE%CC%81CIL/ren-cam6_itfotx.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689693127/RESID-CE%CC%81CIL/ren-cam8_vcoa5u.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693136/RESID-CE%CC%81CIL/ren-cam4_n6inpn.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693128/RESID-CE%CC%81CIL/ren-cam3_wenb7d.jpg",
  ]
);

projetos[14] = new Projeto(
  "casa-mw", // OK
  "Casa MW",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689693312/CASA%20MW/ren-cam4.RGB_color.0000_blo8db.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693312/CASA%20MW/ren-cam3.RGB_color.0000_agrsbh.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693312/CASA%20MW/ren-cam1.RGB_color.0000_qw9zpa.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693312/CASA%20MW/ren-cam2.RGB_color.0000_qkeufj.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689693313/CASA%20MW/ren-cam6.RGB_color.0000_fpghkq.jpg",
  ]
);

projetos[15] = new Projeto(
  "casa-aa", // OK
  "Casa AA",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1679431446/4-CasaAA%20ok/0NfwCou_jdbpnw.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689696686/4-CasaAA%20ok/rogerio_maranhao04914_sjq8dw.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679431419/4-CasaAA%20ok/Z9SzcIg_u23kni.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1679431287/4-CasaAA%20ok/o6FsiI9_dqkfvs.jpg",
  ]
);

projetos[16] = new Projeto(
  "casa-vl", // OK
  "Casa VL",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689697218/ANA%20MARIA%20VISTA%20LAGOA/ren-cam2-A_pkvq6o.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697218/ANA%20MARIA%20VISTA%20LAGOA/ren-cam1_A_ztjyj7.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697218/ANA%20MARIA%20VISTA%20LAGOA/ren-cam5-B_yvd9t3.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697218/ANA%20MARIA%20VISTA%20LAGOA/ren-cam4-A_gnuqdp.jpg",
  ]
);

projetos[17] = new Projeto(
  "casa-fl", // OK
  "Casa FL",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697322/RESID%20ROSSATO/ren-cam2_c8ku26.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697321/RESID%20ROSSATO/ren-cam1_azbo0x.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_2667/v1689697322/RESID%20ROSSATO/ren-cam2_c8ku26.jpg",
  ]
);

projetos[18] = new Projeto(
  "casa-la", // OK
  "Casa LA",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689697517/ANA-LEO/ren-cam1_gl2w9e.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697517/ANA-LEO/ren-cam3_jnqsox.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697517/ANA-LEO/ren-cam2_huozxa.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697517/ANA-LEO/ren-cam4_crk2ou.jpg",
  ]
);

projetos[19] = new Projeto(
  "casa-cj", // inserir (carlos jorge)
  "Casa CJ",
  [
    "https://res.cloudinary.com/dcluyyuwo/image/upload/c_fill,h_1500,w_1500/v1689697657/CARLOS%20JORGE/ren-topo_ggaiax.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697658/CARLOS%20JORGE/ren-cam6_vk456v.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697658/CARLOS%20JORGE/ren-cam5_qzsvjj.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697658/CARLOS%20JORGE/ren-cam2_cdvvjo.jpg",
    "https://res.cloudinary.com/dcluyyuwo/image/upload/v1689697658/CARLOS%20JORGE/ren-cam3_qenisd.jpg"
  ]
);

module.exports = projetos;
