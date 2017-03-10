# Bridget McDonnell Gallery

## Lightbox
To open images in a lightbox, add the `lightbox` class to the `a` tag.
This only applies to the items on the Catalogues page, which should be replicated for any exhibitions. 

Note: This will require some backend trickery to grab the artist name from somewhere. 
Presently the artist name is hardcoded (as somewhat imaginatively 'Artist name') in the custom lightbox
code in `site.js`

To implement the lightbox elsewhere on the site, use the following syntax:
`<a href="myimage.jpg" data-featherlight="image">Open Image</a>`
This will only open the image.

I used a jQuery plugin called Featherlight. Documentation is here:
https://github.com/noelboss/featherlight





