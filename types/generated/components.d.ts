import type { Schema, Struct } from '@strapi/strapi';

export interface AnimationTypeAnimation extends Struct.ComponentSchema {
  collectionName: 'components_animation_type_animations';
  info: {
    displayName: 'TypeAnimation';
  };
  attributes: {
    DelayAnimation: Schema.Attribute.BigInteger;
    TextAfter: Schema.Attribute.Text;
    TextBefore: Schema.Attribute.Text;
    TypingElt: Schema.Attribute.Component<'type.list-elements', true>;
  };
}

export interface CouleurCouleur extends Struct.ComponentSchema {
  collectionName: 'components_couleur_couleurs';
  info: {
    displayName: 'Couleur';
  };
  attributes: {
    CouleurBasic: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CouleurCouleurPourcent extends Struct.ComponentSchema {
  collectionName: 'components_couleur_couleur_pourcents';
  info: {
    displayName: 'CouleurPourcent';
  };
  attributes: {
    Couleur: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Pourcent: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
  };
}

export interface CouleurLinearGradient extends Struct.ComponentSchema {
  collectionName: 'components_couleur_linear_gradients';
  info: {
    description: '';
    displayName: 'LinearGradient';
  };
  attributes: {
    DegreAngle: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 360;
        },
        number
      >;
    GradientCouleur: Schema.Attribute.Component<
      'couleur.couleur-pourcent',
      true
    >;
    Type: Schema.Attribute.Enumeration<['color-stop', 'color-hint']>;
  };
}

export interface DividerImageDivider extends Struct.ComponentSchema {
  collectionName: 'components_divider_image_dividers';
  info: {
    displayName: 'ImageDivider';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media.image', false>;
  };
}

export interface DividerLineDivider extends Struct.ComponentSchema {
  collectionName: 'components_divider_line_dividers';
  info: {
    displayName: 'LineDivider';
  };
  attributes: {
    LineColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface HeadingSummaryAnimated extends Struct.ComponentSchema {
  collectionName: 'components_heading_summaries_animateds';
  info: {
    description: '';
    displayName: 'SummaryAnimated';
  };
  attributes: {
    Button: Schema.Attribute.Component<'type.txt-btn', true>;
    Image: Schema.Attribute.Component<'media.image', false>;
    Summary: Schema.Attribute.Component<'type.title-summary-animated', true>;
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<
      ['MainHeading', 'SideHeadingLeft', 'SideHeadingRight']
    >;
  };
}

export interface HeadingSummaryBasic extends Struct.ComponentSchema {
  collectionName: 'components_heading_summary_basics';
  info: {
    description: '';
    displayName: 'SummaryBasic';
  };
  attributes: {
    Button: Schema.Attribute.Component<'type.txt-btn', true>;
    Image: Schema.Attribute.Component<'media.image', false>;
    Summary: Schema.Attribute.Component<'type.title-summary-basic', true>;
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<
      ['MainHeading', 'SideHeadingLeft', 'SideHeadingRight']
    >;
  };
}

export interface MediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    description: '';
    displayName: 'MediaImage';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImgAlt: Schema.Attribute.String;
    ImgTitle: Schema.Attribute.String;
  };
}

export interface SectionBasicSection extends Struct.ComponentSchema {
  collectionName: 'components_section_basic_sections';
  info: {
    displayName: 'BasicSection';
  };
  attributes: {
    Content: Schema.Attribute.Component<'type.title-summary-basic', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionCarrousel extends Struct.ComponentSchema {
  collectionName: 'components_section_carrousels';
  info: {
    displayName: 'Carrousel';
  };
  attributes: {
    Element: Schema.Attribute.Component<'media.image', true>;
  };
}

export interface SectionDisplayBtn extends Struct.ComponentSchema {
  collectionName: 'components_section_display_btns';
  info: {
    displayName: 'DisplayBtn';
  };
  attributes: {
    Button: Schema.Attribute.Component<'type.txt-btn', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionDisplayForm extends Struct.ComponentSchema {
  collectionName: 'components_section_display_forms';
  info: {
    displayName: 'DisplayForm';
  };
  attributes: {
    Form: Schema.Attribute.Component<'type.form', false>;
    Text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface SectionDisplayFramedImage extends Struct.ComponentSchema {
  collectionName: 'components_section_display_framed_images';
  info: {
    description: '';
    displayName: 'DisplayFramedImage';
  };
  attributes: {
    Element: Schema.Attribute.Component<'type.framed-img', true>;
    FramedType: Schema.Attribute.Component<'type.framed-type', false>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionDisplayGallery extends Struct.ComponentSchema {
  collectionName: 'components_section_display_galleries';
  info: {
    description: '';
    displayName: 'DisplayGallery';
  };
  attributes: {
    Element: Schema.Attribute.Component<'type.gallery-elt', true>;
  };
}

export interface SectionFramedBetweenImage extends Struct.ComponentSchema {
  collectionName: 'components_section_framed_between_images';
  info: {
    description: '';
    displayName: 'FramedBetweenImage';
  };
  attributes: {
    FramedText: Schema.Attribute.Component<'type.framed-text', false>;
    FramedType: Schema.Attribute.Component<'type.framed-type', false>;
    LeftImage: Schema.Attribute.Component<'media.image', false>;
    RightImage: Schema.Attribute.Component<'media.image', false>;
  };
}

export interface SectionImageBetweenFramed extends Struct.ComponentSchema {
  collectionName: 'components_section_image_between_frameds';
  info: {
    description: '';
    displayName: 'ImageBetweenFramed';
  };
  attributes: {
    FramedType: Schema.Attribute.Component<'type.framed-type', false>;
    Image: Schema.Attribute.Component<'media.image', false>;
    LeftFramed: Schema.Attribute.Component<'type.framed-text', false>;
    RightFramed: Schema.Attribute.Component<'type.framed-text', false>;
  };
}

export interface SectionSectionLocation extends Struct.ComponentSchema {
  collectionName: 'components_section_section_locations';
  info: {
    description: '';
    displayName: 'SectionLocation';
  };
  attributes: {
    Address: Schema.Attribute.String;
    AddressTitle: Schema.Attribute.String;
    LocationImg: Schema.Attribute.Component<'media.image', true>;
    Plan: Schema.Attribute.Component<'media.image', false>;
    RedirGPS: Schema.Attribute.Component<'type.img-btn', true>;
    Schedule: Schema.Attribute.Blocks;
    ScheduleTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SectionSectionWithFramedText extends Struct.ComponentSchema {
  collectionName: 'components_section_section_with_framed_texts';
  info: {
    description: '';
    displayName: 'SectionWithFramedText';
  };
  attributes: {
    FramedText: Schema.Attribute.Component<'type.framed-text', true>;
    FramedType: Schema.Attribute.Component<'type.framed-type', false>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionSideSummary extends Struct.ComponentSchema {
  collectionName: 'components_section_side_summaries';
  info: {
    description: '';
    displayName: 'SideSummary';
  };
  attributes: {
    SideImage: Schema.Attribute.Component<'media.image', false>;
    Summary: Schema.Attribute.Component<'type.title-summary-basic', true>;
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['SideLeft', 'SideRight']>;
  };
}

export interface TypeForm extends Struct.ComponentSchema {
  collectionName: 'components_type_forms';
  info: {
    description: '';
    displayName: 'Form';
  };
  attributes: {
    FormButton: Schema.Attribute.Component<'type.txt-btn', true>;
    InputElt: Schema.Attribute.Component<'type.input-form-elt', true>;
  };
}

export interface TypeFramedImg extends Struct.ComponentSchema {
  collectionName: 'components_type_framed_imgs';
  info: {
    displayName: 'FramedImg';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media.image', false>;
    RedirUrl: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface TypeFramedText extends Struct.ComponentSchema {
  collectionName: 'components_type_framed_texts';
  info: {
    description: '';
    displayName: 'FramedText';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface TypeFramedType extends Struct.ComponentSchema {
  collectionName: 'components_type_framed_types';
  info: {
    displayName: 'FramedType';
  };
  attributes: {
    Type: Schema.Attribute.Enumeration<['transparent', 'colored']>;
  };
}

export interface TypeGalleryElt extends Struct.ComponentSchema {
  collectionName: 'components_type_gallery_elts';
  info: {
    description: '';
    displayName: 'GalleryElt';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media.image', false>;
    Size: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      >;
  };
}

export interface TypeImgBtn extends Struct.ComponentSchema {
  collectionName: 'components_type_img_btns';
  info: {
    displayName: 'ImageBtn';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media.image', false>;
    RedirUrl: Schema.Attribute.String;
  };
}

export interface TypeInputFormElt extends Struct.ComponentSchema {
  collectionName: 'components_type_input_form_elts';
  info: {
    description: '';
    displayName: 'InputFormElt';
  };
  attributes: {
    DataName: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Placeholder: Schema.Attribute.Component<'type.placeholder', false>;
    Size: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    Type: Schema.Attribute.Enumeration<
      ['Text', 'LongText', 'Mail', 'Phone', 'Address', 'Files']
    >;
  };
}

export interface TypeListElements extends Struct.ComponentSchema {
  collectionName: 'components_type_list_elements';
  info: {
    displayName: 'ListElements';
  };
  attributes: {
    Element: Schema.Attribute.String;
  };
}

export interface TypePlaceholder extends Struct.ComponentSchema {
  collectionName: 'components_type_placeholders';
  info: {
    displayName: 'Placeholder';
  };
  attributes: {
    Icon: Schema.Attribute.Component<'media.image', false>;
    Text: Schema.Attribute.String;
  };
}

export interface TypeTitleSummaryAnimated extends Struct.ComponentSchema {
  collectionName: 'components_type_title_summary_animateds';
  info: {
    description: '';
    displayName: 'TitleSummaryAnimated';
  };
  attributes: {
    Summary: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Component<'animation.type-animation', false>;
  };
}

export interface TypeTitleSummaryBasic extends Struct.ComponentSchema {
  collectionName: 'components_type_title_summary_basics';
  info: {
    displayName: 'TitleSummaryBasic';
  };
  attributes: {
    Summary: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface TypeTxtBtn extends Struct.ComponentSchema {
  collectionName: 'components_type_txt_btns';
  info: {
    description: '';
    displayName: 'TextBtn';
  };
  attributes: {
    RedirUrl: Schema.Attribute.String;
    Text: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<
      [
        'basic',
        'link',
        'go-to',
        'explore',
        'explore2',
        'explore3',
        'excavated',
        'excavated2',
        'paper-plane',
        'paper-plane2',
      ]
    > &
      Schema.Attribute.DefaultTo<'basic'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'animation.type-animation': AnimationTypeAnimation;
      'couleur.couleur': CouleurCouleur;
      'couleur.couleur-pourcent': CouleurCouleurPourcent;
      'couleur.linear-gradient': CouleurLinearGradient;
      'divider.image-divider': DividerImageDivider;
      'divider.line-divider': DividerLineDivider;
      'heading.summary-animated': HeadingSummaryAnimated;
      'heading.summary-basic': HeadingSummaryBasic;
      'media.image': MediaImage;
      'section.basic-section': SectionBasicSection;
      'section.carrousel': SectionCarrousel;
      'section.display-btn': SectionDisplayBtn;
      'section.display-form': SectionDisplayForm;
      'section.display-framed-image': SectionDisplayFramedImage;
      'section.display-gallery': SectionDisplayGallery;
      'section.framed-between-image': SectionFramedBetweenImage;
      'section.image-between-framed': SectionImageBetweenFramed;
      'section.section-location': SectionSectionLocation;
      'section.section-with-framed-text': SectionSectionWithFramedText;
      'section.side-summary': SectionSideSummary;
      'type.form': TypeForm;
      'type.framed-img': TypeFramedImg;
      'type.framed-text': TypeFramedText;
      'type.framed-type': TypeFramedType;
      'type.gallery-elt': TypeGalleryElt;
      'type.img-btn': TypeImgBtn;
      'type.input-form-elt': TypeInputFormElt;
      'type.list-elements': TypeListElements;
      'type.placeholder': TypePlaceholder;
      'type.title-summary-animated': TypeTitleSummaryAnimated;
      'type.title-summary-basic': TypeTitleSummaryBasic;
      'type.txt-btn': TypeTxtBtn;
    }
  }
}
