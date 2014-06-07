EaselJS asset scale patch
=========================


This is a patch to be applied to EaselJS (link) and provide multiples assets sizes capabilities.

 

How it works
------------
 

How to use it
-------------
 

1.  Add the script file reference to your main html head tag

  '<script src="EaselJSAssetScalePatch.js "></script>'

2.  Set the global variable  assetscale to the desired scale. 

  'var assetscale = 1;'

3.  Load proper scaled image assets, by instance

  'assetPath = "assets" + scale + "/";
  var asset1 = new createjs.Bitmap(assetPath + "asset1.png")  
  var asset2 = new createjs.Bitmap(assetPath + "asset2.png")'
  
Automatically all the assets rendered with EaselJS  will be scaled by this scale factor.
