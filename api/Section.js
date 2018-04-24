module.exports = [
  {
    name: 'indentation',
    returns: 'Integer',
    example: ``,
    description: '',
  },
  {
    name: 'sentences',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'links',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'tables',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'templates',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'lists',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'interwiki',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'images',
    returns: 'Array',
    example: ``,
    description: '',
  },
  {
    name: 'index',
    returns: 'Integer',
    example: ``,
    description: 'which number section is this, in the whole document.',
  },
  {
    name: 'nextSibling',
    returns: 'Section',
    example: ``,
    description: 'a section following this one, under the current parent: eg. 1920s → 1930s ',
    aliases: ['next']
  },
  {
    name: 'lastSibling',
    returns: 'Section',
    example: ``,
    description: 'a section before this one, under the current parent: eg. 1930s → 1920s',
    aliases: ['last', 'previous', 'previousSibling']
  },
  {
    name: 'children',
    returns: 'Array',
    example: ``,
    description: 'any sections more specific than this one: eg. History → [PreHistory, 1920s, 1930s]',
  },
  {
    name: 'parent',
    returns: 'Section',
    example: ``,
    description: 'the section, broader than this one: eg. 1920s → History ',
  },
  {
    name: 'remove',
    returns: 'Document',
    example: `doc.section('References').remove()`,
    description: 'remove the current section from the document',
  },
  {
    name: 'toMarkdown',
    returns: 'String',
    example: ``,
    description: '',
  },
  {
    name: 'toHtml',
    returns: 'String',
    example: ``,
    description: '',
  },
  {
    name: 'toPlaintext',
    returns: 'String',
    example: ``,
    description: '',
  },
  {
    name: 'toJSON',
    returns: 'Array',
    example: ``,
    description: '',
  },
];
