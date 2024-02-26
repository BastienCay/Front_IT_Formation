
export interface FormationDTO {
    descriptionDetaillee:String ;
    descriptionMinimum :String ;
    metier:String ;
    nbreJour:Number ;
    nom:String ;
    prerequis:FormationDTO.PreRequis ;
    prix:Number ;
    reference:String ;
    typeCertification:FormationDTO.TypeCertification ;
    typeFormation:FormationDTO.TypeFormation ;

    //ADRESSE
    idAdresse: Number;

    //THEME
    idTheme:Number ;
    //SOUS-THEME
    idSousTheme:Number ;


}

export namespace FormationDTO{
  export type PreRequis = 'DEBUTANT' | 'NOTION_OBLIGATOIRE'| 'MAITRISE_OBLIGATOIRE';
  export const PreRequis = {
    DEBUTANT: 'DEBUTANT' as PreRequis,
    NOTION_OBLIGATOIRE: 'NOTION_OBLIGATOIRE' as PreRequis,
    MAITRISE_OBLIGATOIRE: 'MAITRISE_OBLIGATOIRE' as PreRequis
  }

  export type TypeCertification = 'DIPLOME' | 'CERTIFICATION' | 'RIEN';
  export const TypeCertification = {
    DIPLOME: 'DIPLOME' as TypeCertification,
    CERTIFICATION: 'CERTIFICATION' as TypeCertification,
    RIEN: 'RIEN' as TypeCertification
  }

  export type TypeFormation = 'DISTANCIEL' | 'PRESENTIEL' | 'DISTANCIEL_PRESENTIEL';
  export const TypeFormation = {
    DISTANCIEL: 'DISTANCIEL' as TypeFormation,
    PRESENTIEL: 'PRESENTIEL' as TypeFormation,
    DISTANCIEL_PRESENTIEL: 'DISTANCIEL_PRESENTIEL' as TypeFormation
  }
}