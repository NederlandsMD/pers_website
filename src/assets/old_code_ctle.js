// Initial map dimensions
var margin = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10
}, width = parseInt(d3.select('#svg-area').style('width'))
 , width = width - margin.left - margin.right
 , mapRatio = 0.5
 , height = width * mapRatio
 , active = d3.select(null);

 var svgHeight = 547 + margin.top + margin.bottom;
 var svgWidth = 810 + margin.left + margin.right;


// Initial translate settings for the U.S. Map (so it is centered and occupies the full screen)
 var translate48width = -20;
 var translate48height = -10;
 var scale48 = 0.9;

// CREATE SVGs
// Outer SVG classes
var svg = d3.select('#svg-area').append('svg')
  .attr( 'class', 'center-container' )
  .attr( 'height', svgHeight ) // play with this here
  .attr( 'width', svgWidth );

svg.append( 'rect' )
  .attr( 'class', 'background center-container' )
  .attr( 'height', svgHeight )
  .attr( 'width', svgWidth );

  var g = svg.append( 'g' )
  .attr( 'class', "center-container center-items us-state" )
  .attr( 'transform', 'translate(' + translate48width + ',' + translate48height + ')scale(' + scale48 + ',' + scale48 + ')' )
  .attr( 'width', svgWidth )
  .attr( 'height', svgHeight )
  .attr( 'title', 'U.S. State Map')
  .on('wheel', zoommouse);

var path = d3.geoPath();

var us_states = d3.select('.us-state');

d3.json( 'data0/projection_noTractsAllCT.json' ).then(function( topoData ){

  var topoState = topojson.feature(topoData, topoData.objects.states);
  var topoCounty = topojson.feature(topoData, topoData.objects.counties);

  // BuildMe draws the initial map
  BuildMe(topoData, topoState, topoCounty);

  // Set default stroke widths
  const d_nationStroke = '1px';
  const d_stateStroke = '1px';
  const d_stateStrokeHover = '4px';
  const d_countyStroke = '0.4px';
  const d_countyStrokeHover = '1.1px';
  const d_ctStroke = '0.01px';
  const d_ctStrokeHover ='0.1px';
  const d_ctDirectStroke = '0.03px';
  const d_ctDirectStrokeHover = '0.3px';

  g2.append( 'g' )
     .attr( 'id', 'states' )
     .selectAll( 'path' )
     .data( topoState.features )
     .enter().append( 'path' )
     .attr( 'd', path )
     .attr( 'class', 'state' )
     .attr( 'stroke', '#000' )
     .style('stroke-width', stateStroke)
     .attr( 'fill', function( d ){
       let life_ex = d.properties.ctLErange;
       return ct_color_dict[life_ex] ? ct_color_dict[life_ex] : "#888888";
     })
     .on('mouseover', mouseover)
     .on('mouseleave', mouseout)
     .on( 'click', clickedState );
