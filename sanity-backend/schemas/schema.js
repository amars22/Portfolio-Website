
import createSchema from 'part:@sanity/base/schema-creator'
import blog from './blog'
import author from './author'


import schemaTypes from 'all:part:@sanity/base/schema-type'


export default createSchema({

  name: 'default',
  
  types: schemaTypes.concat([
    /* Your types here! */
    blog,author
  ]),
})
