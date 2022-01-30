import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import author from './documents/author';
import category from './documents/category';
import person from './documents/person';
import project from './documents/project';
import siteSettings from './documents/siteSettings';
import webContent from './documents/webContent';
import webContentTextBox from './documents/webContentTextBox';
import webFrontpageContent from './documents/webFrontpageContent';
import bioPortableText from './objects/bioPortableText';
import code from './objects/code';
import figure from './objects/figure';
import projectMember from './objects/projectMember';
import projectPortableText from './objects/projectPortableText';
import simplePortableText from './objects/simplePortableText';

export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    code,
    projectMember,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    category,
    author,
    person, // Skal fjernes! Erstattet av author
    project,
    webContent,
    webContentTextBox,
    webFrontpageContent,
    siteSettings
  ])
});
