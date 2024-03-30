import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    metaTilte: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.metadata': SeoMetadata;
    }
  }
}
