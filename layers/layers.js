ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-16.456311, 16.044208, -16.399173, 16.072806]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CONTOURUGB_1 = new ol.format.GeoJSON();
var features_CONTOURUGB_1 = format_CONTOURUGB_1.readFeatures(json_CONTOURUGB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CONTOURUGB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURUGB_1.addFeatures(features_CONTOURUGB_1);
var lyr_CONTOURUGB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURUGB_1, 
                style: style_CONTOURUGB_1,
                popuplayertitle: "CONTOUR UGB",
                interactive: true,
                    title: '<img src="styles/legend/CONTOURUGB_1.png" /> CONTOUR UGB'
                });
var format_Arbre_2 = new ol.format.GeoJSON();
var features_Arbre_2 = format_Arbre_2.readFeatures(json_Arbre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Arbre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbre_2.addFeatures(features_Arbre_2);
var lyr_Arbre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbre_2, 
                style: style_Arbre_2,
                popuplayertitle: "Arbre",
                interactive: true,
                    title: '<img src="styles/legend/Arbre_2.png" /> Arbre'
                });
var format_UGB_3 = new ol.format.GeoJSON();
var features_UGB_3 = format_UGB_3.readFeatures(json_UGB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UGB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGB_3.addFeatures(features_UGB_3);
var lyr_UGB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGB_3, 
                style: style_UGB_3,
                popuplayertitle: "UGB",
                interactive: true,
                    title: '<img src="styles/legend/UGB_3.png" /> UGB'
                });
var format_Couchefermeagricole_4 = new ol.format.GeoJSON();
var features_Couchefermeagricole_4 = format_Couchefermeagricole_4.readFeatures(json_Couchefermeagricole_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Couchefermeagricole_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couchefermeagricole_4.addFeatures(features_Couchefermeagricole_4);
var lyr_Couchefermeagricole_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couchefermeagricole_4, 
                style: style_Couchefermeagricole_4,
                popuplayertitle: "Couche ferme agricole",
                interactive: true,
                    title: '<img src="styles/legend/Couchefermeagricole_4.png" /> Couche ferme agricole'
                });
var format_Campuspedagogique_5 = new ol.format.GeoJSON();
var features_Campuspedagogique_5 = format_Campuspedagogique_5.readFeatures(json_Campuspedagogique_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Campuspedagogique_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campuspedagogique_5.addFeatures(features_Campuspedagogique_5);
var lyr_Campuspedagogique_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campuspedagogique_5, 
                style: style_Campuspedagogique_5,
                popuplayertitle: "Campus pedagogique",
                interactive: true,
                    title: '<img src="styles/legend/Campuspedagogique_5.png" /> Campus pedagogique'
                });
var format_BatimentsCrous_6 = new ol.format.GeoJSON();
var features_BatimentsCrous_6 = format_BatimentsCrous_6.readFeatures(json_BatimentsCrous_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatimentsCrous_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatimentsCrous_6.addFeatures(features_BatimentsCrous_6);
var lyr_BatimentsCrous_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatimentsCrous_6, 
                style: style_BatimentsCrous_6,
                popuplayertitle: "Batiments Crous",
                interactive: true,
                    title: '<img src="styles/legend/BatimentsCrous_6.png" /> Batiments Crous'
                });
var format_ParkingRectorat_7 = new ol.format.GeoJSON();
var features_ParkingRectorat_7 = format_ParkingRectorat_7.readFeatures(json_ParkingRectorat_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ParkingRectorat_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingRectorat_7.addFeatures(features_ParkingRectorat_7);
var lyr_ParkingRectorat_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingRectorat_7, 
                style: style_ParkingRectorat_7,
                popuplayertitle: "Parking Rectorat",
                interactive: true,
                    title: '<img src="styles/legend/ParkingRectorat_7.png" /> Parking Rectorat'
                });
var format_amenagements_8 = new ol.format.GeoJSON();
var features_amenagements_8 = format_amenagements_8.readFeatures(json_amenagements_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_amenagements_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenagements_8.addFeatures(features_amenagements_8);
var lyr_amenagements_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenagements_8, 
                style: style_amenagements_8,
                popuplayertitle: "amenagements",
                interactive: true,
                    title: '<img src="styles/legend/amenagements_8.png" /> amenagements'
                });
var format_Boutiquesetrestosprivs_9 = new ol.format.GeoJSON();
var features_Boutiquesetrestosprivs_9 = format_Boutiquesetrestosprivs_9.readFeatures(json_Boutiquesetrestosprivs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Boutiquesetrestosprivs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boutiquesetrestosprivs_9.addFeatures(features_Boutiquesetrestosprivs_9);
var lyr_Boutiquesetrestosprivs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boutiquesetrestosprivs_9, 
                style: style_Boutiquesetrestosprivs_9,
                popuplayertitle: "Boutiques et restos privés",
                interactive: true,
                    title: '<img src="styles/legend/Boutiquesetrestosprivs_9.png" /> Boutiques et restos privés'
                });
var format_Maisons_d_l_universite_10 = new ol.format.GeoJSON();
var features_Maisons_d_l_universite_10 = format_Maisons_d_l_universite_10.readFeatures(json_Maisons_d_l_universite_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Maisons_d_l_universite_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maisons_d_l_universite_10.addFeatures(features_Maisons_d_l_universite_10);
var lyr_Maisons_d_l_universite_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maisons_d_l_universite_10, 
                style: style_Maisons_d_l_universite_10,
                popuplayertitle: "Maisons_d_ l_universite",
                interactive: true,
                    title: '<img src="styles/legend/Maisons_d_l_universite_10.png" /> Maisons_d_ l_universite'
                });
var format_Restaurants_universitaire_11 = new ol.format.GeoJSON();
var features_Restaurants_universitaire_11 = format_Restaurants_universitaire_11.readFeatures(json_Restaurants_universitaire_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Restaurants_universitaire_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_universitaire_11.addFeatures(features_Restaurants_universitaire_11);
var lyr_Restaurants_universitaire_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurants_universitaire_11, 
                style: style_Restaurants_universitaire_11,
                popuplayertitle: "Restaurants_universitaire",
                interactive: true,
                    title: '<img src="styles/legend/Restaurants_universitaire_11.png" /> Restaurants_universitaire'
                });
var format_village_12 = new ol.format.GeoJSON();
var features_village_12 = format_village_12.readFeatures(json_village_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_village_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_12.addFeatures(features_village_12);
var lyr_village_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_village_12, 
                style: style_village_12,
                popuplayertitle: "village",
                interactive: true,
                    title: '<img src="styles/legend/village_12.png" /> village'
                });
var format_Espacesportif_13 = new ol.format.GeoJSON();
var features_Espacesportif_13 = format_Espacesportif_13.readFeatures(json_Espacesportif_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Espacesportif_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacesportif_13.addFeatures(features_Espacesportif_13);
var lyr_Espacesportif_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacesportif_13, 
                style: style_Espacesportif_13,
                popuplayertitle: "Espace sportif",
                interactive: true,
                    title: '<img src="styles/legend/Espacesportif_13.png" /> Espace sportif'
                });
var format_Routesgoudronnees_14 = new ol.format.GeoJSON();
var features_Routesgoudronnees_14 = format_Routesgoudronnees_14.readFeatures(json_Routesgoudronnees_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Routesgoudronnees_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesgoudronnees_14.addFeatures(features_Routesgoudronnees_14);
var lyr_Routesgoudronnees_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesgoudronnees_14, 
                style: style_Routesgoudronnees_14,
                popuplayertitle: "Routes goudronnees",
                interactive: true,
                    title: '<img src="styles/legend/Routesgoudronnees_14.png" /> Routes goudronnees'
                });
var format_Pistes_15 = new ol.format.GeoJSON();
var features_Pistes_15 = format_Pistes_15.readFeatures(json_Pistes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pistes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistes_15.addFeatures(features_Pistes_15);
var lyr_Pistes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistes_15, 
                style: style_Pistes_15,
                popuplayertitle: "Pistes",
                interactive: true,
                    title: '<img src="styles/legend/Pistes_15.png" /> Pistes'
                });
var format_allee_village_16 = new ol.format.GeoJSON();
var features_allee_village_16 = format_allee_village_16.readFeatures(json_allee_village_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_allee_village_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allee_village_16.addFeatures(features_allee_village_16);
var lyr_allee_village_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allee_village_16, 
                style: style_allee_village_16,
                popuplayertitle: "allee_village",
                interactive: true,
                    title: '<img src="styles/legend/allee_village_16.png" /> allee_village'
                });
var format_pavee_17 = new ol.format.GeoJSON();
var features_pavee_17 = format_pavee_17.readFeatures(json_pavee_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pavee_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pavee_17.addFeatures(features_pavee_17);
var lyr_pavee_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pavee_17, 
                style: style_pavee_17,
                popuplayertitle: "pavee",
                interactive: true,
                    title: '<img src="styles/legend/pavee_17.png" /> pavee'
                });
var format_panneaux_18 = new ol.format.GeoJSON();
var features_panneaux_18 = format_panneaux_18.readFeatures(json_panneaux_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_panneaux_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_panneaux_18.addFeatures(features_panneaux_18);
var lyr_panneaux_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_panneaux_18, 
                style: style_panneaux_18,
                popuplayertitle: "panneaux",
                interactive: true,
                    title: '<img src="styles/legend/panneaux_18.png" /> panneaux'
                });
var format_banc_19 = new ol.format.GeoJSON();
var features_banc_19 = format_banc_19.readFeatures(json_banc_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_banc_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_banc_19.addFeatures(features_banc_19);
var lyr_banc_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_banc_19, 
                style: style_banc_19,
                popuplayertitle: "banc",
                interactive: true,
                    title: '<img src="styles/legend/banc_19.png" /> banc'
                });
var format_Lampesolaire_20 = new ol.format.GeoJSON();
var features_Lampesolaire_20 = format_Lampesolaire_20.readFeatures(json_Lampesolaire_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lampesolaire_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampesolaire_20.addFeatures(features_Lampesolaire_20);
var lyr_Lampesolaire_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampesolaire_20, 
                style: style_Lampesolaire_20,
                popuplayertitle: "Lampe solaire",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/lamp-modern-right-svgrepo-com (1).svg" /> Lampe solaire'
            });
var format_lampelectrique_21 = new ol.format.GeoJSON();
var features_lampelectrique_21 = format_lampelectrique_21.readFeatures(json_lampelectrique_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lampelectrique_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lampelectrique_21.addFeatures(features_lampelectrique_21);
var lyr_lampelectrique_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lampelectrique_21, 
                style: style_lampelectrique_21,
                popuplayertitle: "lamp electrique",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/lamp-modern-right-svgrepo-com (1).svg" /> lamp electrique'
            });
var format_Mosque_22 = new ol.format.GeoJSON();
var features_Mosque_22 = format_Mosque_22.readFeatures(json_Mosque_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mosque_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_22.addFeatures(features_Mosque_22);
var lyr_Mosque_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_22, 
                style: style_Mosque_22,
                popuplayertitle: "Mosquée",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/place_of_worship_islamic3.svg" /> Mosquée'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CONTOURUGB_1.setVisible(true);lyr_Arbre_2.setVisible(true);lyr_UGB_3.setVisible(true);lyr_Couchefermeagricole_4.setVisible(true);lyr_Campuspedagogique_5.setVisible(true);lyr_BatimentsCrous_6.setVisible(true);lyr_ParkingRectorat_7.setVisible(true);lyr_amenagements_8.setVisible(true);lyr_Boutiquesetrestosprivs_9.setVisible(true);lyr_Maisons_d_l_universite_10.setVisible(true);lyr_Restaurants_universitaire_11.setVisible(true);lyr_village_12.setVisible(true);lyr_Espacesportif_13.setVisible(true);lyr_Routesgoudronnees_14.setVisible(true);lyr_Pistes_15.setVisible(true);lyr_allee_village_16.setVisible(true);lyr_pavee_17.setVisible(true);lyr_panneaux_18.setVisible(true);lyr_banc_19.setVisible(true);lyr_Lampesolaire_20.setVisible(true);lyr_lampelectrique_21.setVisible(true);lyr_Mosque_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CONTOURUGB_1,lyr_Arbre_2,lyr_UGB_3,lyr_Couchefermeagricole_4,lyr_Campuspedagogique_5,lyr_BatimentsCrous_6,lyr_ParkingRectorat_7,lyr_amenagements_8,lyr_Boutiquesetrestosprivs_9,lyr_Maisons_d_l_universite_10,lyr_Restaurants_universitaire_11,lyr_village_12,lyr_Espacesportif_13,lyr_Routesgoudronnees_14,lyr_Pistes_15,lyr_allee_village_16,lyr_pavee_17,lyr_panneaux_18,lyr_banc_19,lyr_Lampesolaire_20,lyr_lampelectrique_21,lyr_Mosque_22];
lyr_CONTOURUGB_1.set('fieldAliases', {'id': 'id', 'Superficie': 'Superficie', });
lyr_Arbre_2.set('fieldAliases', {'id': 'id', 'area': 'area', 'processing': 'processing', });
lyr_UGB_3.set('fieldAliases', {'NAME': 'NAME', 'Code': 'Code', 'village': 'village', 'emplacemen': 'emplacemen', 'type': 'type', 'numero': 'numero', 'occupants': 'occupants', 'nbre_palie': 'nbre_palie', 'nbre_occup': 'nbre_occup', 'douche_int': 'douche_int', 'nbre_douch': 'nbre_douch', 'salle_tv': 'salle_tv', 'nbre_salle': 'nbre_salle', 'salle_tv_h': 'salle_tv_h', 'salle_etud': 'salle_etud', 'nbre_sal_1': 'nbre_sal_1', 'nbre_toile': 'nbre_toile', 'nbre_chamb': 'nbre_chamb', 'nbre_conci': 'nbre_conci', 'concierger': 'concierger', 'nbre_debar': 'nbre_debar', 'un_debarra': 'un_debarra', 'bureau_adm': 'bureau_adm', 'bureau_cv': 'bureau_cv', 'bureau_cv_': 'bureau_cv_', 'chambres _': 'chambres _', 'mosquee_da': 'mosquee_da', 'mosquee_ho': 'mosquee_ho', 'name_2': 'name_2', 'amenity': 'amenity', 'name_3': 'name_3', 'NAME_4': 'NAME_4', 'LIEU': 'LIEU', 'NAME_5': 'NAME_5', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', 'name_6': 'name_6', 'Nom': 'Nom', 'Superficie': 'Superficie', 'NAME_7': 'NAME_7', 'LIEU_2': 'LIEU_2', 'NAME_8': 'NAME_8', 'LIEU_3': 'LIEU_3', });
lyr_Couchefermeagricole_4.set('fieldAliases', {'Nom': 'Nom', 'Superficie': 'Superficie', });
lyr_Campuspedagogique_5.set('fieldAliases', {'NAME': 'NAME', });
lyr_BatimentsCrous_6.set('fieldAliases', {'NAME': 'NAME', 'LIEU': 'LIEU', });
lyr_ParkingRectorat_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', });
lyr_amenagements_8.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'Superficie': 'Superficie', });
lyr_Boutiquesetrestosprivs_9.set('fieldAliases', {'NAME': 'NAME', 'LIEU': 'LIEU', });
lyr_Maisons_d_l_universite_10.set('fieldAliases', {'name': 'name', });
lyr_Restaurants_universitaire_11.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_village_12.set('fieldAliases', {'Code': 'Code', 'village': 'village', 'emplacemen': 'emplacemen', 'type': 'type', 'numero': 'numero', 'occupants': 'occupants', 'nbre_palie': 'nbre_palie', 'nbre_occup': 'nbre_occup', 'douche_int': 'douche_int', 'nbre_douch': 'nbre_douch', 'salle_tv': 'salle_tv', 'nbre_salle': 'nbre_salle', 'salle_tv_h': 'salle_tv_h', 'salle_etud': 'salle_etud', 'nbre_sal_1': 'nbre_sal_1', 'nbre_toile': 'nbre_toile', 'nbre_chamb': 'nbre_chamb', 'nbre_conci': 'nbre_conci', 'concierger': 'concierger', 'nbre_debar': 'nbre_debar', 'un_debarra': 'un_debarra', 'bureau_adm': 'bureau_adm', 'bureau_cv': 'bureau_cv', 'bureau_cv_': 'bureau_cv_', 'chambres _': 'chambres _', 'mosquee_da': 'mosquee_da', 'mosquee_ho': 'mosquee_ho', });
lyr_Espacesportif_13.set('fieldAliases', {'name': 'name', 'code': 'code', });
lyr_Routesgoudronnees_14.set('fieldAliases', {'name': 'name', 'longeure': 'longeure', });
lyr_Pistes_15.set('fieldAliases', {'name': 'name', });
lyr_allee_village_16.set('fieldAliases', {'highway': 'highway', });
lyr_pavee_17.set('fieldAliases', {'highway': 'highway', });
lyr_panneaux_18.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'Field4': 'Field4', 'Field5': 'Field5', 'Field6': 'Field6', 'Field7': 'Field7', });
lyr_banc_19.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'ETAT__': 'ETAT__', 'COMPOSITIO': 'COMPOSITIO', });
lyr_Lampesolaire_20.set('fieldAliases', {'Point': 'Point', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lampelectrique_21.set('fieldAliases', {'id': 'id', });
lyr_Mosque_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_CONTOURUGB_1.set('fieldImages', {'id': 'TextEdit', 'Superficie': '', });
lyr_Arbre_2.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'processing': 'DateTime', });
lyr_UGB_3.set('fieldImages', {'NAME': '', 'Code': '', 'village': '', 'emplacemen': '', 'type': '', 'numero': '', 'occupants': '', 'nbre_palie': '', 'nbre_occup': '', 'douche_int': '', 'nbre_douch': '', 'salle_tv': '', 'nbre_salle': '', 'salle_tv_h': '', 'salle_etud': '', 'nbre_sal_1': '', 'nbre_toile': '', 'nbre_chamb': '', 'nbre_conci': '', 'concierger': '', 'nbre_debar': '', 'un_debarra': '', 'bureau_adm': '', 'bureau_cv': '', 'bureau_cv_': '', 'chambres _': '', 'mosquee_da': '', 'mosquee_ho': '', 'name_2': '', 'amenity': '', 'name_3': '', 'NAME_4': '', 'LIEU': '', 'NAME_5': '', 'LAYER': '', 'KML_STYLE': '', 'tessellate': '', 'name_6': '', 'Nom': '', 'Superficie': '', 'NAME_7': '', 'LIEU_2': '', 'NAME_8': '', 'LIEU_3': '', });
lyr_Couchefermeagricole_4.set('fieldImages', {'Nom': 'TextEdit', 'Superficie': '', });
lyr_Campuspedagogique_5.set('fieldImages', {'NAME': 'TextEdit', });
lyr_BatimentsCrous_6.set('fieldImages', {'NAME': '', 'LIEU': '', });
lyr_ParkingRectorat_7.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', 'tessellate': '', });
lyr_amenagements_8.set('fieldImages', {'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'Superficie': '', });
lyr_Boutiquesetrestosprivs_9.set('fieldImages', {'NAME': 'TextEdit', 'LIEU': 'TextEdit', });
lyr_Maisons_d_l_universite_10.set('fieldImages', {'name': 'TextEdit', });
lyr_Restaurants_universitaire_11.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_village_12.set('fieldImages', {'Code': 'TextEdit', 'village': 'TextEdit', 'emplacemen': 'TextEdit', 'type': 'TextEdit', 'numero': 'TextEdit', 'occupants': 'TextEdit', 'nbre_palie': 'TextEdit', 'nbre_occup': 'TextEdit', 'douche_int': 'TextEdit', 'nbre_douch': 'TextEdit', 'salle_tv': 'TextEdit', 'nbre_salle': 'TextEdit', 'salle_tv_h': 'TextEdit', 'salle_etud': 'TextEdit', 'nbre_sal_1': 'TextEdit', 'nbre_toile': 'TextEdit', 'nbre_chamb': 'TextEdit', 'nbre_conci': 'TextEdit', 'concierger': 'TextEdit', 'nbre_debar': 'TextEdit', 'un_debarra': 'TextEdit', 'bureau_adm': 'TextEdit', 'bureau_cv': 'TextEdit', 'bureau_cv_': 'TextEdit', 'chambres _': 'TextEdit', 'mosquee_da': 'TextEdit', 'mosquee_ho': 'TextEdit', });
lyr_Espacesportif_13.set('fieldImages', {'name': '', 'code': '', });
lyr_Routesgoudronnees_14.set('fieldImages', {'name': 'TextEdit', 'longeure': '', });
lyr_Pistes_15.set('fieldImages', {'name': 'TextEdit', });
lyr_allee_village_16.set('fieldImages', {'highway': 'TextEdit', });
lyr_pavee_17.set('fieldImages', {'highway': 'TextEdit', });
lyr_panneaux_18.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'Range', 'Field4': 'TextEdit', 'Field5': 'TextEdit', 'Field6': 'TextEdit', 'Field7': 'TextEdit', });
lyr_banc_19.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'ETAT__': 'TextEdit', 'COMPOSITIO': 'TextEdit', });
lyr_Lampesolaire_20.set('fieldImages', {'Point': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_lampelectrique_21.set('fieldImages', {'id': 'TextEdit', });
lyr_Mosque_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_CONTOURUGB_1.set('fieldLabels', {'id': 'no label', 'Superficie': 'no label', });
lyr_Arbre_2.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'processing': 'no label', });
lyr_UGB_3.set('fieldLabels', {'NAME': 'no label', 'Code': 'no label', 'village': 'no label', 'emplacemen': 'no label', 'type': 'no label', 'numero': 'no label', 'occupants': 'no label', 'nbre_palie': 'no label', 'nbre_occup': 'no label', 'douche_int': 'no label', 'nbre_douch': 'no label', 'salle_tv': 'no label', 'nbre_salle': 'no label', 'salle_tv_h': 'no label', 'salle_etud': 'no label', 'nbre_sal_1': 'no label', 'nbre_toile': 'no label', 'nbre_chamb': 'no label', 'nbre_conci': 'no label', 'concierger': 'no label', 'nbre_debar': 'no label', 'un_debarra': 'no label', 'bureau_adm': 'no label', 'bureau_cv': 'no label', 'bureau_cv_': 'no label', 'chambres _': 'no label', 'mosquee_da': 'no label', 'mosquee_ho': 'no label', 'name_2': 'no label', 'amenity': 'no label', 'name_3': 'no label', 'NAME_4': 'no label', 'LIEU': 'no label', 'NAME_5': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', 'name_6': 'no label', 'Nom': 'no label', 'Superficie': 'no label', 'NAME_7': 'no label', 'LIEU_2': 'no label', 'NAME_8': 'no label', 'LIEU_3': 'no label', });
lyr_Couchefermeagricole_4.set('fieldLabels', {'Nom': 'no label', 'Superficie': 'no label', });
lyr_Campuspedagogique_5.set('fieldLabels', {'NAME': 'inline label - visible with data', });
lyr_BatimentsCrous_6.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LIEU': 'inline label - visible with data', });
lyr_ParkingRectorat_7.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', });
lyr_amenagements_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', });
lyr_Boutiquesetrestosprivs_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LIEU': 'inline label - visible with data', });
lyr_Maisons_d_l_universite_10.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_Restaurants_universitaire_11.set('fieldLabels', {'amenity': 'no label', 'name': 'inline label - visible with data', });
lyr_village_12.set('fieldLabels', {'Code': 'inline label - visible with data', 'village': 'inline label - visible with data', 'emplacemen': 'inline label - visible with data', 'type': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'occupants': 'inline label - visible with data', 'nbre_palie': 'inline label - visible with data', 'nbre_occup': 'inline label - visible with data', 'douche_int': 'inline label - visible with data', 'nbre_douch': 'inline label - visible with data', 'salle_tv': 'inline label - visible with data', 'nbre_salle': 'inline label - visible with data', 'salle_tv_h': 'inline label - visible with data', 'salle_etud': 'inline label - visible with data', 'nbre_sal_1': 'inline label - visible with data', 'nbre_toile': 'inline label - visible with data', 'nbre_chamb': 'inline label - visible with data', 'nbre_conci': 'inline label - visible with data', 'concierger': 'inline label - visible with data', 'nbre_debar': 'inline label - visible with data', 'un_debarra': 'inline label - visible with data', 'bureau_adm': 'inline label - visible with data', 'bureau_cv': 'inline label - visible with data', 'bureau_cv_': 'inline label - visible with data', 'chambres _': 'inline label - visible with data', 'mosquee_da': 'inline label - visible with data', 'mosquee_ho': 'inline label - visible with data', });
lyr_Espacesportif_13.set('fieldLabels', {'name': 'no label', 'code': 'no label', });
lyr_Routesgoudronnees_14.set('fieldLabels', {'name': 'no label', 'longeure': 'no label', });
lyr_Pistes_15.set('fieldLabels', {'name': 'no label', });
lyr_allee_village_16.set('fieldLabels', {'highway': 'no label', });
lyr_pavee_17.set('fieldLabels', {'highway': 'no label', });
lyr_panneaux_18.set('fieldLabels', {'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'Field4': 'no label', 'Field5': 'no label', 'Field6': 'no label', 'Field7': 'no label', });
lyr_banc_19.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'ETAT__': 'no label', 'COMPOSITIO': 'no label', });
lyr_Lampesolaire_20.set('fieldLabels', {'Point': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_lampelectrique_21.set('fieldLabels', {'id': 'no label', });
lyr_Mosque_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Mosque_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});